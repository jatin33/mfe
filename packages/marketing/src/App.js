import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
            <Switch>
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/" component={Landing} />
            </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}