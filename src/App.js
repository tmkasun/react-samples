import ReactDom from 'react-dom';
import React, {Component} from 'react';

import ComponentTypes from './components/ComponentTypes'
import ComponentLifeCycle from './components/ComponentLifeCycle'
import ComponentProperties from './components/ComponentProperties'
import ReactRouterSample from './components/ReactRouterSample'
import RouteApp from './components/RouteApp'

ReactDom.render(<RouteApp/>, document.getElementById("root"));