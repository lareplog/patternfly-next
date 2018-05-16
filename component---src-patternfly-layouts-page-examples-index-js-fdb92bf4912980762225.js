webpackJsonp([0xf716b734a9a5],{382:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>This layout provides the basic chrome for a page, including sidebar, header and main areas.</p> <h2 id=accessibility>Accessibility</h2> <p>Make sure to set the <code>role=&quot;banner&quot;</code> attribute on the <code>&lt;header&gt;</code>, and <code>role=&quot;main&quot;</code> on the <code>&lt;main&gt;</code> content areas.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Usage</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-page</code> <strong>Applied to:</strong> <code>&lt;div&gt;</code></td> <td><strong>Outcome:</strong> Declares the page layout chrome <strong>Required:</strong> Yes</td> </tr> <tr> <td><code>.pf-l-page__header</code> <strong>Applied to:</strong> <code>&lt;header&gt;</code></td> <td><strong>Outcome:</strong> Declares the page header <strong>Required:</strong> Yes</td> </tr> <tr> <td><code>.pf-l-page__header-sidebar</code> <strong>Applied to:</strong> <code>&lt;section&gt;</code></td> <td><strong>Outcome:</strong> Declares the sidebar section of the header <strong>Required:</strong> Yes</td> </tr> <tr> <td><code>.pf-l-page__header-main</code> <strong>Applied to:</strong> <code>&lt;section&gt;</code></td> <td><strong>Outcome:</strong> Declares the main section of the header <strong>Required:</strong> Yes</td> </tr> <tr> <td><code>.pf-l-page__sidebar</code> <strong>Applied to:</strong> <code>&lt;div&gt;</code></td> <td><strong>Outcome:</strong> Declares the page sidebar <strong>Required:</strong> Yes</td> </tr> <tr> <td><code>.pf-l-page__main</code> <strong>Applied to:</strong> <code>&lt;main&gt;</code></td> <td><strong>Outcome:</strong> Declares the main page area <strong>Required:</strong> Yes</td> </tr> </tbody> </table> "},158:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var r=a(2),n=o(r),d=a(12),s=o(d),i=a(13),l=o(i),c=a(382),g=o(c),p=a(350),u=o(p);a(425);var h=t.Docs=g.default;t.default=function(){var e=(0,u.default)();return n.default.createElement(s.default,{docs:h,className:"is-layout-page"},n.default.createElement(l.default,{heading:"Page Example"},e))}},350:function(e,t,a){var o=a(1);e.exports=(o.default||o).template({1:function(e,t,a,o,r){return"Page Layout Content"},compiler:[7,">= 4.0.0"],main:function(e,t,o,r,n){var d;return(null!=(d=e.invokePartial(a(351),t,{name:"page",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:r,decorators:e.decorators}))?d:"")+"\n"},usePartial:!0,useData:!0})},351:function(e,t,a){var o=a(1);e.exports=(o.default||o).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,o,r){var n,d;return'<div class="pf-l-page '+e.escapeExpression((d=null!=(d=a.modifierClass||(null!=t?t.modifierClass:t))?d:a.helperMissing,"function"==typeof d?d.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:r}):d))+'">\n  <header role="banner" class="pf-l-page__header">\n    <section class="pf-l-page__header-sidebar">\n      Left\n    </section>\n    <section class="pf-l-page__header-main">\n      Right\n    </section>\n  </header>\n  <div class="pf-l-page__sidebar">\n    Nav\n  </div>\n  <main role="main" class="pf-l-page__main">\n'+(null!=(n=e.invokePartial(o["@partial-block"],t,{name:"@partial-block",data:r,indent:"    ",helpers:a,partials:o,decorators:e.decorators}))?n:"")+"  </main>\n</div>\n\n"},usePartial:!0,useData:!0})},425:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-page-examples-index-js-fdb92bf4912980762225.js.map