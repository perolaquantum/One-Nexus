//*****************************************************************
// One-Nexus - A front-end framework for creating modular and 
// configurable UI components - https://github.com/esr360/One-Nexus
//*****************************************************************

import * as app from './app';

// Vendor
//*****************************************************************

import Synergy  from '../../../Synergy/src/js/synergy';
//import Synergy  from 'synergy';
import Flickity from 'flickity';
import Sizzle   from 'sizzle'; const $ = Sizzle;

export { Synergy, Flickity, $ }

// Modules
//*****************************************************************

// Elements
import { accordion   } from './modules/elements/accordions/accordions';
import { carousel    } from './modules/elements/carousels/carousels';
import { modal       } from './modules/elements/modals/modals';
import { progressBar } from './modules/elements/progress-bars/progress-bars';
import { tabs        } from './modules/elements/tabs/tabs';
import { tooltips    } from './modules/elements/tooltips/tooltips';

// Objects
import { googleMap   } from './modules/objects/google-map/google-map';
import { header      } from './modules/objects/header/header';
import { preloader   } from './modules/objects/preloader/preloader';
import { scrollTop   } from './modules/objects/scroll-top/scroll-top';
import { search      } from './modules/objects/search/search';
import { sideNav     } from './modules/objects/side-nav/side-nav';
import { siteOverlay } from './modules/objects/site-overlay/site-overlay';

export { 
    accordion, carousel, modal, progressBar, tabs, tooltips, 
    googleMap, header, preloader, scrollTop, search, sideNav, siteOverlay
}

// Tools
//*****************************************************************

export const config = {};

import { breakpoint      } from './tools/js/app.breakpoint';
import { clickHelper     } from './tools/js/app.clickHelper';
import { isValidSelector } from './tools/js/app.isValidSelector';
import { parents         } from './tools/js/app.parents';

export { breakpoint, clickHelper, isValidSelector, parents };

export function custom(module, custom) {
    if (typeof app.theme[module] !== 'undefined' && !custom) {
        return app.theme[module];
    }
    return custom;
}

// Attach `app` to the `window` object
window.app = app;

// Global Methods
//*****************************************************************

Element.prototype.component = function(component, set) {
    return app.Synergy(this).component(component, set, this);
};

Element.prototype.modifier = function(modifier, set) {
    return app.Synergy(this).modifier(modifier, set, this);
};

Element.prototype.parents = function(selector) {
	return app.parents(this, selector);
};