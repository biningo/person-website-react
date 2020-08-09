import React, {Suspense} from 'react';
import './App.css'
import routers from "./router"
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import {Skeleton} from "antd";


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
            <Suspense fallback={<Skeleton avatar active paragraph={{ rows: 24 }} />}>
                <Router>
                    {rs}
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
