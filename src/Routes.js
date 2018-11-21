import React from 'react'
import Home from './containers/Home'
import Login from './containers/Login'
import App from './App'
export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/',
                component: Home,
                loadData: Home.loadData,
                exact: true,
                key: 'home',
            },
            {
                path: '/login',
                component: Login,
                exact: true,
                key: 'login'
            }
        ]
    }
]
