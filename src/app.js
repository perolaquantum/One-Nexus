///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import App from './app.jsx';
import initialConfig from './app.json';

export const config = JSON.parse(
    JSON.stringify(initialConfig).replace(/"'/g,'"').replace(/'"/g,'"')
);

// Theme/UI
//*****************************************************************

import UI from './ui/ui';
export { UI };

// React Router
//*****************************************************************

import { HashRouter, Link } from 'react-router-dom';
export { HashRouter, Link };

export { default as PropTypes } from 'prop-types';

// Synergy
//*****************************************************************

import { Module, Component } from '../../../Synergy/src/js/synergy';

[window.Module, window.Component] = [Module, Component];

// UI React Components
//*****************************************************************

// Elements
export { Accordion } from './ui/modules/elements/accordions/accordions.jsx';
export { AlertBar } from './ui/modules/elements/alert-bars/alert-bars.jsx';

// Objects
export { Header } from './ui/modules/objects/header/header.jsx';
export { Logo } from './ui/modules/objects/logo/logo.jsx';
export { Navigation } from './ui/modules/objects/navigation/navigation.jsx';

// Views
//*****************************************************************

// Layouts
import Core from './views/layouts/core.jsx';

export const layouts = { Core };

// Pages
import Index from './views/pages/index.jsx';
import Accordions from './views/pages/modules/elements/accordions.jsx';
import AlertBars from './views/pages/modules/elements/alert-bars.jsx';

export const pages = {
    Index, 
    Accordions,
    AlertBars
}

// Render DOM
//*****************************************************************

ReactDOM.render(
    <HashRouter><App data={config.app.views} /></HashRouter>, app, () => UI(config.app.ui)
);