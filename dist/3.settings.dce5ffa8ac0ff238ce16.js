webpackJsonp([3],{226:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:d,payload:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments[1],n=f[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.doubleAsync=t.COUNTER_INCREMENT=void 0;var c=n(94),i=u(c),l=n(230),a=u(l);t.increment=r,t.default=o;var d=t.COUNTER_INCREMENT="COUNTER_INCREMENT",s=t.doubleAsync=function(){return function(e,t){return new a.default(function(n){setTimeout(function(){e(r(t().counter)),n()},200)})}},f=(t.actions={increment:r,doubleAsync:s},(0,i.default)({},d,function(e,t){return e+t.payload})),y=0},372:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=void 0;var r=n(1),o=u(r),c=t.Settings=function(e){return o.default.createElement("div",{style:{margin:"0 auto"}},o.default.createElement("h2",null,"Settings: ",e.settings),o.default.createElement("button",{className:"btn btn-default",onClick:e.increment},"Increment")," ",o.default.createElement("button",{className:"btn btn-default",onClick:e.doubleAsync},"Double (Async)"))};c.propTypes={settings:o.default.PropTypes.number.isRequired,doubleAsync:o.default.PropTypes.func.isRequired,increment:o.default.PropTypes.func.isRequired},t.default=c},373:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(226),c=n(372),i=u(c),l={increment:function(){return(0,o.increment)(1)},doubleAsync:o.doubleAsync},a=function(e){return{counter:e.counter}};t.default=(0,r.connect)(a,l)(i.default)}});