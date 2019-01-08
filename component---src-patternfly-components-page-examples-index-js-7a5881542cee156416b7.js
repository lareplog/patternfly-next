webpackJsonp([0x8bce8143f2a4],{43:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["nav--modifier"]||(null!=e?e["nav--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"nav--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["nav--attribute"]||(null!=e?e["nav--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"nav--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<nav class="pf-c-nav'+(null!=(o=n.if.call(l,null!=e?e["nav--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["nav--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</nav>\n"},usePartial:!0,useData:!0})},943:function(a,e){a.exports="<h2 id=overview>Overview</h2> <p>This component provides the basic chrome for a page, including sidebar, header, and main areas.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;banner&quot;</code></td> <td><code>.pf-c-page__header</code></td> <td>Identifies the element that serves as the banner region. <strong>Required</strong></td> </tr> <tr> <td><code>role=&quot;main&quot;</code></td> <td><code>.pf-c-page__main</code></td> <td>Identifies the element that serves as the main region. <strong>Required</strong></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-page</code></td> <td><code>&lt;div&gt;</code></td> <td>Declares the page component.</td> </tr> <tr> <td><code>.pf-c-page__header</code></td> <td><code>&lt;header&gt;</code></td> <td>Declares the page header.</td> </tr> <tr> <td><code>.pf-c-page__header-brand</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the brand component.</td> </tr> <tr> <td><code>.pf-c-page__header-brand-toggle</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a container to nest the sidebar toggle.</td> </tr> <tr> <td><code>.pf-c-page__header-brand-link</code></td> <td><code>&lt;a&gt;</code></td> <td>Creates a link for the brand logo.</td> </tr> <tr> <td><code>.pf-c-page__header-selector</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the context selector component.</td> </tr> <tr> <td><code>.pf-c-page__header-nav</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a container to nest the navigation component in the header.</td> </tr> <tr> <td><code>.pf-c-page__header-tools</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the toolbar layout.</td> </tr> <tr> <td><code>.pf-c-page__sidebar</code></td> <td><code>&lt;aside&gt;</code></td> <td>Declares the page sidebar.</td> </tr> <tr> <td><code>.pf-c-page__main</code></td> <td><code>&lt;main&gt;</code></td> <td>Declares the main page area.</td> </tr> <tr> <td><code>.pf-c-page__main-nav</code></td> <td><code>&lt;section&gt;</code></td> <td>Creates a container to nest the navigation component in the main page area.</td> </tr> <tr> <td><code>.pf-c-page__main-section</code></td> <td><code>&lt;section&gt;</code></td> <td>Creates a section container in the main page area.</td> </tr> <tr> <td><code>.pf-m-expanded</code></td> <td><code>.pf-c-page__sidebar</code></td> <td>Modifies the sidebar for the expanded state.</td> </tr> <tr> <td><code>.pf-m-collapsed</code></td> <td><code>.pf-c-page__sidebar</code></td> <td>Modifies the sidebar for the collapsed state.</td> </tr> <tr> <td><code>.pf-m-light</code></td> <td><code>.pf-c-page__main-section</code></td> <td>Modifies a main page section to have a light theme.</td> </tr> <tr> <td><code>.pf-m-dark-200</code></td> <td><code>.pf-c-page__main-section</code></td> <td>Modifies a main page section to have a dark theme and a dark transparent background.</td> </tr> <tr> <td><code>.pf-m-dark-100</code></td> <td><code>.pf-c-page__main-section</code></td> <td>Modifies a main page section to have a dark theme and a darker transparent background.</td> </tr> </tbody> </table> "},331:function(a,e,n){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}e.__esModule=!0,e.Docs=void 0;var r=n(4),o=t(r),l=n(11),i=t(l),d=n(12),p=t(d),s=n(1260),c=t(s),u=n(1259),f=t(u),g=n(765),m=t(g),h=n(764),v=t(h),b=n(943),k=t(b);n(1156);var x=e.Docs=k.default;e.default=function(){var a=(0,m.default)(),e=(0,v.default)(),n="Page";return o.default.createElement(i.default,{docs:x,heading:n,className:"is-component-page"},o.default.createElement(p.default,{heading:"Page Component, Nav Vertical Example",handlebars:c.default},a),o.default.createElement(p.default,{heading:"Page Component, Nav Horizontal Example",handlebars:f.default},e))}},1259:function(a,e){a.exports='{{#> page page--nav-direction="vertical"}}\n  {{#> page-header}}\n    {{!-- Brand --}}\n    {{#> page-header-brand}}\n      Logo\n    {{/page-header-brand}}\n    {{!-- Horizontal Nav --}}\n    {{#> page-header-nav}}\n      pf-c-nav\n    {{/page-header-nav}}\n    {{!-- Toolbar --}}\n    {{#> page-header-tools}}\n      pf-l-toolbar\n    {{/page-header-tools}}\n  {{/page-header}}\n  {{#> page-main}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-light"}}\n    {{/page-main-section}}\n    {{#> page-main-section}}\n    {{/page-main-section}}\n  {{/page-main}}\n{{/page}}\n'},764:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,t,r,o){var l;return(null!=(l=a.invokePartial(n(84),e,{name:"page-header",fn:a.program(2,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(85),e,{name:"page-main",fn:a.program(9,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")},2:function(a,e,t,r,o){var l;return(null!=(l=a.invokePartial(n(83),e,{name:"page-header-brand",fn:a.program(3,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(234),e,{name:"page-header-nav",fn:a.program(5,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(165),e,{name:"page-header-tools",fn:a.program(7,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")},3:function(a,e,n,t,r){return"      Logo\n"},5:function(a,e,n,t,r){return"      pf-c-nav\n"},7:function(a,e,n,t,r){return"      pf-l-toolbar\n"},9:function(a,e,t,r,o){var l;return(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-100"},fn:a.program(10,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-200"},fn:a.program(10,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-light"},fn:a.program(10,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",fn:a.program(10,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")},10:function(a,e,n,t,r){return""},compiler:[7,">= 4.0.0"],main:function(a,e,t,r,o){var l;return null!=(l=a.invokePartial(n(86),e,{name:"page",hash:{"page--nav-direction":"vertical"},fn:a.program(1,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:""},usePartial:!0,useData:!0})},1260:function(a,e){a.exports='{{#> page}}\n  {{#> page-header}}\n    {{#> page-header-brand}}\n      {{#> page-header-brand-toggle}}\n        {{#> button button--modifier="pf-m-plain" button--attribute=\'id="nav-toggle" aria-label="Toggle primary navigation"\'}}\n          {{> button-icon button-icon--type="bars"}}\n        {{/button}}\n      {{/page-header-brand-toggle}}\n      {{#> page-header-brand-link}}\n        Logo\n      {{/page-header-brand-link}}\n    {{/page-header-brand}}\n    {{#> page-header-tools}}\n      pf-l-toolbar\n    {{/page-header-tools}}\n  {{/page-header}}\n  {{#> page-sidebar}} \n    {{#> nav nav--attribute=\'aria-label="Primary Nav Default Example"\'}}\n      pf-c-nav\n    {{/nav}}\n  {{/page-sidebar}}\n  {{#> page-main}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-light"}}\n    {{/page-main-section}}\n    {{#> page-main-section}}\n    {{/page-main-section}}\n  {{/page-main}}\n{{/page}}\n'},765:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,t,r,o){var l;return(null!=(l=a.invokePartial(n(84),e,{name:"page-header",fn:a.program(2,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(114),e,{name:"page-sidebar",fn:a.program(11,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(85),e,{name:"page-main",fn:a.program(14,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")},2:function(a,e,t,r,o){var l;return(null!=(l=a.invokePartial(n(83),e,{name:"page-header-brand",fn:a.program(3,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(165),e,{name:"page-header-tools",fn:a.program(9,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")},3:function(a,e,t,r,o){var l;return(null!=(l=a.invokePartial(n(233),e,{name:"page-header-brand-toggle",fn:a.program(4,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(232),e,{name:"page-header-brand-link",fn:a.program(7,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")},4:function(a,e,t,r,o){var l;return null!=(l=a.invokePartial(n(3),e,{name:"button",hash:{"button--attribute":'id="nav-toggle" aria-label="Toggle primary navigation"',"button--modifier":"pf-m-plain"},fn:a.program(5,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:""},5:function(a,e,t,r,o){var l;return null!=(l=a.invokePartial(n(20),e,{name:"button-icon",hash:{"button-icon--type":"bars"},data:o,indent:"          ",helpers:t,partials:r,decorators:a.decorators}))?l:""},7:function(a,e,n,t,r){return"        Logo\n"},9:function(a,e,n,t,r){return"      pf-l-toolbar\n"},11:function(a,e,t,r,o){var l;return null!=(l=a.invokePartial(n(43),e,{name:"nav",hash:{"nav--attribute":'aria-label="Primary Nav Default Example"'},fn:a.program(12,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:""},12:function(a,e,n,t,r){return"      pf-c-nav\n"},14:function(a,e,t,r,o){var l;return(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-100"},fn:a.program(15,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-200"},fn:a.program(15,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-light"},fn:a.program(15,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")+(null!=(l=a.invokePartial(n(46),e,{name:"page-main-section",fn:a.program(15,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:"")},15:function(a,e,n,t,r){return""},compiler:[7,">= 4.0.0"],main:function(a,e,t,r,o){var l;return null!=(l=a.invokePartial(n(86),e,{name:"page",fn:a.program(1,o,0),inverse:a.noop,data:o,helpers:t,partials:r,decorators:a.decorators}))?l:""},usePartial:!0,useData:!0})},232:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-header-brand-link--modifier"]||(null!=e?e["page-header-brand-link--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-header-brand-link--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-brand-link--attribute"]||(null!=e?e["page-header-brand-link--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-header-brand-link--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<a class="pf-c-page__header-brand-link'+(null!=(o=n.if.call(l,null!=e?e["page-header-brand-link--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-header-brand-link--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</a>\n"},usePartial:!0,useData:!0})},233:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-header-brand-toggle--modifier"]||(null!=e?e["page-header-brand-toggle--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-header-brand-toggle--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-brand-toggle--attribute"]||(null!=e?e["page-header-brand-toggle--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-header-brand-toggle--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<div class="pf-c-page__header-brand-toggle'+(null!=(o=n.if.call(l,null!=e?e["page-header-brand-toggle--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-header-brand-toggle--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},83:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-header-brand--modifier"]||(null!=e?e["page-header-brand--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-header-brand--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-brand--attribute"]||(null!=e?e["page-header-brand--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-header-brand--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<div class="pf-c-page__header-brand'+(null!=(o=n.if.call(l,null!=e?e["page-header-brand--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-header-brand--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},234:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-header-nav--modifier"]||(null!=e?e["page-header-nav--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-header-nav--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-nav--attribute"]||(null!=e?e["page-header-nav--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-header-nav--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<div class="pf-c-page__header-nav'+(null!=(o=n.if.call(l,null!=e?e["page-header-nav--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-header-nav--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},165:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-header-tools--modifier"]||(null!=e?e["page-header-tools--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-header-tools--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-tools--attribute"]||(null!=e?e["page-header-tools--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-header-tools--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<div class="pf-c-page__header-tools'+(null!=(o=n.if.call(l,null!=e?e["page-header-tools--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-header-tools--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},84:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-header--modifier"]||(null!=e?e["page-header--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-header--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header--attribute"]||(null!=e?e["page-header--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-header--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<header role="banner" class="pf-c-page__header'+(null!=(o=n.if.call(l,null!=e?e["page-header--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-header--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</header>\n"},usePartial:!0,useData:!0})},46:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-main-section--modifier"]||(null!=e?e["page-main-section--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-main-section--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-main-section--attribute"]||(null!=e?e["page-main-section--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-main-section--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<section class="pf-c-page__main-section'+(null!=(o=n.if.call(l,null!=e?e["page-main-section--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-main-section--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</section>\n"},usePartial:!0,useData:!0})},85:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-main--modifier"]||(null!=e?e["page-main--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-main--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-main--attribute"]||(null!=e?e["page-main--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-main--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<main role="main" class="pf-c-page__main'+(null!=(o=n.if.call(l,null!=e?e["page-main--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page-main--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</main>\n"},usePartial:!0,useData:!0})},114:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page-sidebar--modifier"]||(null!=e?e["page-sidebar--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page-sidebar--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-sidebar--attribute"]||(null!=e?e["page-sidebar--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page-sidebar--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<aside class="pf-c-page__sidebar'+(null!=(o=n.if.call(l,null!=e?e["page-sidebar--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'" \n'+(null!=(o=n.if.call(l,null!=e?e["page-sidebar--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</aside>\n"},usePartial:!0,useData:!0})},86:function(a,e,n){var t=n(1);a.exports=(t.default||t).template({1:function(a,e,n,t,r){var o;return" "+a.escapeExpression((o=null!=(o=n["page--modifier"]||(null!=e?e["page--modifier"]:e))?o:n.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"page--modifier",hash:{},data:r}):o))},3:function(a,e,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page--attribute"]||(null!=e?e["page--attribute"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page--attribute",hash:{},data:r}):l)?o:"")+"\n"},5:function(a,e,n,t,r){var o,l;return'    id="'+(null!=(l=null!=(l=n["page--id"]||(null!=e?e["page--id"]:e))?l:n.helperMissing,o="function"==typeof l?l.call(null!=e?e:a.nullContext||{},{name:"page--id",hash:{},data:r}):l)?o:"")+'"\n  '},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,r){var o,l=null!=e?e:a.nullContext||{};return'<div class="pf-c-page'+(null!=(o=n.if.call(l,null!=e?e["page--modifier"]:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=e?e["page--attribute"]:e,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?o:"")+(null!=(o=n.if.call(l,null!=e?e["page--id"]:e,{name:"if",hash:{},fn:a.program(5,r,0),inverse:a.noop,data:r}))?o:"")+">\n"+(null!=(o=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:a.decorators}))?o:"")+"</div>"},usePartial:!0,useData:!0})},1156:function(a,e){}});
//# sourceMappingURL=component---src-patternfly-components-page-examples-index-js-7a5881542cee156416b7.js.map