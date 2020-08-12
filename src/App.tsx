import React, {Suspense} from 'react';
import './App.css'
import routers from "./router"
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import {Skeleton, Spin} from "antd";


function App() {
    const rs = routers.map((route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                component={route.component}
                exact
            >
            </Route>
        )
    });

    return (
        <div className='App'>
            <Suspense fallback={<h1>懒加载中.....</h1>}>
                <Router>
                    {rs}
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
