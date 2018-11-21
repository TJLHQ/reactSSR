import React from 'react';
import {renderToString} from 'react-dom/server'
import {Route, Switch,StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import routes from '../Routes'
import {Provider} from 'react-redux'
export const render = (req,store,context) => {
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </StaticRouter>
        </Provider>
    ))
    const ssrStr=context.css.length?context.css.join('\n'):'';
    return `<html>
			<head>
				<title>hello</title>
				<meta name="Description" content="哈哈哈哈哈哈哈" />
				<style>${ssrStr}</style>
			</head>
			<body>
			<div id="root">${content}</div>
			<script>
			window.context={
			    state:${JSON.stringify(store.getState())}
			}
            </script>
				<script src="/index.js"></script>
			</body>
  	</html>`
}