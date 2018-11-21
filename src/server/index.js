import express from 'express';
import proxy from 'express-http-proxy'
import {render} from './util'
import {getStore} from '../store'
import routes from '../Routes'
import {matchRoutes} from 'react-router-config'
var app = express();
app.use(express.static('public'))
app.get('*', (req, res)=> {
    const store = getStore()
    // 根据路由的路径来，来往store里面注入数据
    const matchedRoutes = matchRoutes(routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then(() => {
        const context={css:[]};
        const html=render(req,store,context)
        console.log('_____',context)
        if(context.action==='REPLACE'){
            res.redirect(301,context.url)
        }else if(context.NOT_FOUND){
            res.status(404);
            res.send(html)
        }else{

            res.send(html);
        }
    })

});

var server = app.listen(3000);