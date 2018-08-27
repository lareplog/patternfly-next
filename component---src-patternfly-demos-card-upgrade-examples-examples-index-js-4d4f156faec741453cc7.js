webpackJsonp([0xda31fbe40fd7],{207:function(t,d,a){var e=a(1);t.exports=(e.default||e).template({1:function(t,d,a,e,n){var r;return'    id="'+t.escapeExpression((r=null!=(r=a["pf-d-card-upgrade-examples__id"]||(null!=d?d["pf-d-card-upgrade-examples__id"]:d))?r:a.helperMissing,"function"==typeof r?r.call(null!=d?d:t.nullContext||{},{name:"pf-d-card-upgrade-examples__id",hash:{},data:n}):r))+'"\n  '},compiler:[7,">= 4.0.0"],main:function(t,d,a,e,n){var r,l,c=null!=d?d:t.nullContext||{};return'<div class="pf-d-card-upgrade-examples '+t.escapeExpression((l=null!=(l=a["pf-d-card-upgrade-examples--modifier"]||(null!=d?d["pf-d-card-upgrade-examples--modifier"]:d))?l:a.helperMissing,"function"==typeof l?l.call(c,{name:"pf-d-card-upgrade-examples--modifier",hash:{},data:n}):l))+'"\n'+(null!=(r=a.if.call(c,null!=d?d["pf-d-upgrade-examples__id"]:d,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?r:"")+">\n"+(null!=(r=t.invokePartial(e["@partial-block"],d,{name:"@partial-block",data:n,indent:"  ",helpers:a,partials:e,decorators:t.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},675:function(t,d){t.exports="<h2 id=overview>Overview</h2> <p>When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>PatternFly 3</th> <th>Replaced By</th> <th>PatternFly 4</th> </tr> </thead> <tbody> <tr> <td><code>&lt;div class=&quot;container-fluid container-cards-pf&quot;&gt;</code></td> <td></td> <td><code>&lt;div class=&quot;pf-l-grid pf-m-gutter&quot;&gt;</code></td> </tr> <tr> <td><code>&lt;div class=&quot;col-sm-3&quot;&gt;</code></td> <td></td> <td><code>&lt;div class=&quot;pf-l-grid__item pf-m-3-col&quot;&gt;</code></td> </tr> <tr> <td><code>&lt;div class=&quot;card-pf&quot;&gt;</code></td> <td></td> <td><code>&lt;div class=&quot;pf-c-card&quot;&gt;</code></td> </tr> <tr> <td><code>&lt;div class=&quot;card-pf-heading&quot;&gt;</code> <code>&lt;h2 class=&quot;card-pf-title&quot;&gt;&lt;/h2&gt;</code></td> <td></td> <td><code>&lt;div class=&quot;pf-c-card__header&quot;&gt;</code></td> </tr> <tr> <td><code>&lt;div class=&quot;card-pf-body&quot;&gt;</code></td> <td></td> <td><code>&lt;div class=&quot;pf-c-card__body&quot;&gt;</code></td> </tr> </tbody> </table> "},579:function(t,d,a){var e=a(1);t.exports=(e.default||e).template({1:function(t,d,a,e,n){return'<div class="cards-pf">\n  <div class="container-fluid container-cards-pf">\n    <div class="row row-cards-pf">\n      <div class="col-sm-3">\n        <div class="card-pf">\n          <div class="card-pf-heading">\n            <h2 class="card-pf-title">\n              Card Title\n            </h2>\n          </div>\n          <div class="card-pf-body">\n            <p>\n              Card Contents\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class="col-sm-3">\n        <div class="card-pf">\n          <div class="card-pf-heading">\n            <h2 class="card-pf-title">\n              Card Title\n            </h2>\n          </div>\n          <div class="card-pf-body">\n            <p>\n              Card Contents\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},compiler:[7,">= 4.0.0"],main:function(t,d,e,n,r){var l;return null!=(l=t.invokePartial(a(207),d,{name:"card-upgrade-examples",fn:t.program(1,r,0),inverse:t.noop,data:r,helpers:e,partials:n,decorators:t.decorators}))?l:""},usePartial:!0,useData:!0})},580:function(t,d,a){var e=a(1);t.exports=(e.default||e).template({1:function(t,d,a,e,n){return'<div class="pf-l-grid pf-m-gutter">\n  <div class="pf-l-grid__item pf-m-3-col">\n    <div class="pf-c-card">\n      <div class="pf-c-card__header">\n        Header\n      </div>\n      <div class="pf-c-card__body">\n        Body\n      </div>\n    </div>\n  </div>\n  <div class="pf-l-grid__item pf-m-3-col">\n    <div class="pf-c-card">\n      <div class="pf-c-card__header">\n        Header\n      </div>\n      <div class="pf-c-card__body">\n        Body\n      </div>\n    </div>\n  </div>\n</div>\n'},compiler:[7,">= 4.0.0"],main:function(t,d,e,n,r){var l;return null!=(l=t.invokePartial(a(207),d,{name:"card-upgrade-examples",fn:t.program(1,r,0),inverse:t.noop,data:r,helpers:e,partials:n,decorators:t.decorators}))?l:""},usePartial:!0,useData:!0})},251:function(t,d,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}d.__esModule=!0,d.Docs=void 0;var n=a(4),r=e(n),l=a(11),c=e(l),i=a(12),o=e(i),s=a(675),p=e(s),u=a(579),f=e(u),v=a(580),m=e(v);a(816);var g=d.Docs=p.default;d.default=function(){var t=(0,f.default)(),d=(0,m.default)();return r.default.createElement(c.default,{docs:g},r.default.createElement(o.default,{heading:"PatternFly 3 Cards"},t),r.default.createElement(o.default,{heading:"PatternFly 4 Cards"},d))}},816:function(t,d){}});
//# sourceMappingURL=component---src-patternfly-demos-card-upgrade-examples-examples-index-js-4d4f156faec741453cc7.js.map