import * as app from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

// Stylesheet
import './app.scss';

[window.React, window.ReactDOM] = [React, ReactDOM];

/**
 * App JSX Component
 */
export default class App extends React.Component {
    render() {
        window.addEventListener('hashchange', app.UI, false);

        return (
            <Switch>
                <Route path='/' exact component={app.pages.Index} />
                <Route path='/accordions' component={app.pages.Accordions} />
                <Route path='/alert-bars' component={app.pages.AlertBars} />
            </Switch>
        )
    }
}