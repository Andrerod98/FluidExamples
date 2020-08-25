/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import {
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { LoadFluidContainer } from "./LoadFluidContainer";
import { Home } from "./Home";

export const App = () => {
    return (
        <div style={{ marginLeft:5, marginRight:5 }}>
            <nav>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/about">About</Link>
            </nav>

            <Switch>
                <Route path="/about">
                    <h1>About</h1>
                    <p>
                        This is where we type only the most important of things.
                    </p>
                </Route>
                <Route path="/:id">
                    <LoadFluidContainer/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};