import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"
import "./App.less";
import { routes } from "./configs/routes";

const App = ()=>{
    
    return (
        <Router>
            <Switch>
                {
                    routes.map((route : any)=>{
                        return (
                            <Route 
                                key={route.component}
                                exact={route.exact}
                                path={route.path} 
                                component={route.component} 
                            />
                        )
                    })
                }
            </Switch>
        </Router>
 
);
}

export default App;