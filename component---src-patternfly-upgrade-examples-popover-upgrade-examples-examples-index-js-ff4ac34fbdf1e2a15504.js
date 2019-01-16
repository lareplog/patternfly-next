(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{186:function(t,e,o){"use strict";o.r(e),o.d(e,"Docs",function(){return u});var d=o(0),n=o.n(d),r=o(294),a=o(206),c=o(205),i=o(902),p=o.n(i),l=o(903),s=o.n(l),v=o(904),h=o.n(v),u=p.a;e.default=function(){var t=s()(),e=h()();return n.a.createElement(a.a,{docs:u,heading:"Popover Migration"},n.a.createElement(r.Helmet,null,n.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly.css"}),n.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly-additions.css"})),n.a.createElement(c.a,{heading:"PatternFly 3 Popover"},t),n.a.createElement(c.a,{heading:"PatternFly 4 Popover"},e))}},377:function(t,e,o){var d=o(198);t.exports=(d.default||d).template({compiler:[7,">= 4.0.0"],main:function(t,e,o,d,n){var r;return null!=(r=t.invokePartial(d["@partial-block"],e,{name:"@partial-block",data:n,helpers:o,partials:d,decorators:t.decorators}))?r:""},usePartial:!0,useData:!0})},902:function(t,e){t.exports='<h2 id="overview">Overview</h2>\n<p>When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.</p>\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>PF3 Class</th>\n<th>Applied To</th>\n<th>PF4 Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.popovers-pf</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>pf-c-popover</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates parent container that holds the popover.</td>\n</tr>\n<tr>\n<td><code>.popover</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-popover__content</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates the container for the popover itself.</td>\n</tr>\n<tr>\n<td><code>.container-popovers-pf</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>--</td>\n<td>--</td>\n<td>Creates the container for the popover.</td>\n</tr>\n<tr>\n<td><code>.top</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-top</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.right</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-right</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.bottom</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-bottom</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.left</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-left</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.arrow</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-popover__arrow</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates an arrow pointing towards the element the popover describes. Required.</td>\n</tr>\n<tr>\n<td><code>.close</code></td>\n<td><code>&lt;span&gt;</code></td>\n<td><code>.pf-c-popover__close</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates the closing button for the popover.</td>\n</tr>\n<tr>\n<td>--</td>\n<td>--</td>\n<td><code>.pf-c-popover__header</code></td>\n<td><code>&lt;header&gt;</code></td>\n<td>Creates popover header.</td>\n</tr>\n<tr>\n<td><code>.popover-title</code></td>\n<td><code>&lt;h3&gt;</code></td>\n<td><code>.pf-c-popover__header-title</code></td>\n<td><code>&lt;h1&gt;</code></td>\n<td>Creates popover title.</td>\n</tr>\n<tr>\n<td><code>.popover-content</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-popover__body</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates the body of a popover. Required.</td>\n</tr>\n</tbody>\n</table>\n'},903:function(t,e,o){var d=o(198);t.exports=(d.default||d).template({1:function(t,e,o,d,n){return'<div class="popovers-pf">\n  <div class="container-fluid container-popovers-pf">\n   <div class="popover fade right in" role="tooltip" style="display: block; position:relative;">\n      <div class="arrow" style="top: 50%;"></div>\n        <h3 class="popover-title closable">Popover Header\n          <button type="button" class="close" aria-hidden="true"><span class="pficon pficon-close"></span></button>\n        </h3>\n      <div class="popover-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n    </div>\n  </div>\n</div>\n'},compiler:[7,">= 4.0.0"],main:function(t,e,d,n,r){var a;return(null!=(a=t.invokePartial(o(377),e,{name:"popover-upgrade-examples",fn:t.program(1,r,0),inverse:t.noop,data:r,helpers:d,partials:n,decorators:t.decorators}))?a:"")+"\n\n\n"},usePartial:!0,useData:!0})},904:function(t,e,o){var d=o(198);t.exports=(d.default||d).template({1:function(t,e,o,d,n){return'<div class="pf-c-popover pf-m-right" role="dialog" aria-modal="true" aria-labelledby="popover-right-header" aria-describedby="popover-right-body">\n  <div class="pf-c-popover__arrow">\n  </div>\n  <div class="pf-c-popover__content">\n    <div class="pf-c-popover__close">\n      <button class="pf-c-button pf-m-plain" aria-label="Close">\n        <i class="fas fa-times"></i>\n      </button>\n    </div>\n    <header class="pf-c-popover__header">\n      <h1 class="pf-c-popover__header-title" id="popover-right-header">\n        Popover Header\n      </h1>\n    </header>\n    <div class="pf-c-popover__body" id="popover-right-body">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n    </div>\n  </div>\n</div>\n'},compiler:[7,">= 4.0.0"],main:function(t,e,d,n,r){var a;return null!=(a=t.invokePartial(o(377),e,{name:"popover-upgrade-examples",fn:t.program(1,r,0),inverse:t.noop,data:r,helpers:d,partials:n,decorators:t.decorators}))?a:""},usePartial:!0,useData:!0})}}]);
//# sourceMappingURL=component---src-patternfly-upgrade-examples-popover-upgrade-examples-examples-index-js-ff4ac34fbdf1e2a15504.js.map