import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from '../Routes';
import {Provider} from 'react-redux'
import {getClientStore} from '../store'
import {Route, Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

const App = () => {
    return (
        <Provider store={getClientStore()}>
            <BrowserRouter>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(<App/>, document.getElementById('root'))