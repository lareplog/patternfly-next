(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{161:function(t,e,o){"use strict";o.r(e),o.d(e,"Docs",function(){return M});var a=o(0),n=o.n(a),i=o(212),r=o(211),l=o(640),d=o.n(l),s=o(641),u=o.n(s),c=o(642),m=o.n(c),p=o(643),b=o.n(p),f=o(644),h=o.n(f),x=o(645),g=o.n(x),v=o(646),y=o.n(v),q=o(647),k=o.n(q),P=o(648),M=o.n(P).a;e.default=function(){var t=h()(),e=g()(),o=y()(),a=k()();return n.a.createElement(i.a,{docs:M,heading:"Modal Box"},n.a.createElement(r.a,{heading:"ModalBox Basic Example",handlebars:d.a},t),n.a.createElement(r.a,{heading:"ModalBox Small Example",handlebars:u.a},e),n.a.createElement(r.a,{heading:"ModalBox Large Example",handlebars:m.a},o),n.a.createElement(r.a,{heading:"ModalBox No Header Example",handlebars:b.a},a))}},209:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,o,a,n){var i;return" fa-"+t.escapeExpression("function"==typeof(i=null!=(i=o["button-icon--type"]||(null!=e?e["button-icon--type"]:e))?i:o.helperMissing)?i.call(null!=e?e:t.nullContext||{},{name:"button-icon--type",hash:{},data:n}):i)},3:function(t,e,o,a,n){var i;return" "+t.escapeExpression("function"==typeof(i=null!=(i=o["button-icon--modifier"]||(null!=e?e["button-icon--modifier"]:e))?i:o.helperMissing)?i.call(null!=e?e:t.nullContext||{},{name:"button-icon--modifier",hash:{},data:n}):i)},5:function(t,e,o,a,n){var i,r;return"    "+(null!=(i="function"==typeof(r=null!=(r=o["button-icon--attribute"]||(null!=e?e["button-icon--attribute"]:e))?r:o.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"button-icon--attribute",hash:{},data:n}):r)?i:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,o,a,n){var i,r=null!=e?e:t.nullContext||{};return'<i class="fas'+(null!=(i=o.if.call(r,null!=e?e["button-icon--type"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?i:"")+(null!=(i=o.if.call(r,null!=e?e["button-icon--modifier"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?i:"")+'"\n  aria-hidden="true"\n'+(null!=(i=o.if.call(r,null!=e?e["button-icon--attribute"]:e,{name:"if",hash:{},fn:t.program(5,n,0),inverse:t.noop,data:n}))?i:"")+"></i>"},useData:!0})},228:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,o,a,n){var i;return" "+t.escapeExpression("function"==typeof(i=null!=(i=o["title--modifier"]||(null!=e?e["title--modifier"]:e))?i:o.helperMissing)?i.call(null!=e?e:t.nullContext||{},{name:"title--modifier",hash:{},data:n}):i)},3:function(t,e,o,a,n){var i,r;return"   "+(null!=(i="function"==typeof(r=null!=(r=o["title--attribute"]||(null!=e?e["title--attribute"]:e))?r:o.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"title--attribute",hash:{},data:n}):r)?i:"")+"\n \t"},compiler:[7,">= 4.0.0"],main:function(t,e,o,a,n){var i,r,l=null!=e?e:t.nullContext||{},d=o.helperMissing,s=t.escapeExpression;return"<"+s("function"==typeof(r=null!=(r=o.titleType||(null!=e?e.titleType:e))?r:d)?r.call(l,{name:"titleType",hash:{},data:n}):r)+' class="pf-c-title'+(null!=(i=o.if.call(l,null!=e?e["title--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?i:"")+'"\n'+(null!=(i=o.if.call(l,null!=e?e["title--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?i:"")+">\n"+(null!=(i=t.invokePartial(a["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:o,partials:a,decorators:t.decorators}))?i:"")+"</"+s("function"==typeof(r=null!=(r=o.titleType||(null!=e?e.titleType:e))?r:d)?r.call(l,{name:"titleType",hash:{},data:n}):r)+"> "},usePartial:!0,useData:!0})},288:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,o,a,n){var i;return" "+t.escapeExpression("function"==typeof(i=null!=(i=o["modal-box-body--modifier"]||(null!=e?e["modal-box-body--modifier"]:e))?i:o.helperMissing)?i.call(null!=e?e:t.nullContext||{},{name:"modal-box-body--modifier",hash:{},data:n}):i)},3:function(t,e,o,a,n){var i,r;return"    "+(null!=(i="function"==typeof(r=null!=(r=o["modal-box-body--attribute"]||(null!=e?e["modal-box-body--attribute"]:e))?r:o.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"modal-box-body--attribute",hash:{},data:n}):r)?i:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,o,a,n){var i,r=null!=e?e:t.nullContext||{};return'<div class="pf-c-modal-box__body'+(null!=(i=o.if.call(r,null!=e?e["modal-box-body--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?i:"")+'"\n'+(null!=(i=o.if.call(r,null!=e?e["modal-box-body--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?i:"")+">\n"+(null!=(i=t.invokePartial(a["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:o,partials:a,decorators:t.decorators}))?i:"")+"</div>\n"},usePartial:!0,useData:!0})},289:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,o,a,n){var i;return" "+t.escapeExpression("function"==typeof(i=null!=(i=o["modal-box-footer--modifier"]||(null!=e?e["modal-box-footer--modifier"]:e))?i:o.helperMissing)?i.call(null!=e?e:t.nullContext||{},{name:"modal-box-footer--modifier",hash:{},data:n}):i)},3:function(t,e,o,a,n){var i,r;return"    "+(null!=(i="function"==typeof(r=null!=(r=o["modal-box-footer--attribute"]||(null!=e?e["modal-box-footer--attribute"]:e))?r:o.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"modal-box-footer--attribute",hash:{},data:n}):r)?i:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,o,a,n){var i,r=null!=e?e:t.nullContext||{};return'<footer class="pf-c-modal-box__footer'+(null!=(i=o.if.call(r,null!=e?e["modal-box-footer--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?i:"")+'"\n'+(null!=(i=o.if.call(r,null!=e?e["modal-box-footer--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?i:"")+">\n"+(null!=(i=t.invokePartial(a["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:o,partials:a,decorators:t.decorators}))?i:"")+"</footer>\n"},usePartial:!0,useData:!0})},290:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,o,a,n){var i;return" "+t.escapeExpression("function"==typeof(i=null!=(i=o["modal-box--modifier"]||(null!=e?e["modal-box--modifier"]:e))?i:o.helperMissing)?i.call(null!=e?e:t.nullContext||{},{name:"modal-box--modifier",hash:{},data:n}):i)},3:function(t,e,o,a,n){var i,r;return"    "+(null!=(i="function"==typeof(r=null!=(r=o["modal-box--attribute"]||(null!=e?e["modal-box--attribute"]:e))?r:o.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"modal-box--attribute",hash:{},data:n}):r)?i:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(t,e,o,a,n){var i,r=null!=e?e:t.nullContext||{};return'<div class="pf-c-modal-box'+(null!=(i=o.if.call(r,null!=e?e["modal-box--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?i:"")+'"\n  role="dialog" \n  aria-modal="true"\n'+(null!=(i=o.if.call(r,null!=e?e["modal-box--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?i:"")+">\n"+(null!=(i=t.invokePartial(a["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:o,partials:a,decorators:t.decorators}))?i:"")+"</div>\n"},usePartial:!0,useData:!0})},640:function(t,e){t.exports='{{#> modal-box modal-box--attribute=\'aria-labelledby="modal-title" aria-describedby="modal-description"\'}}\n  {{#> button button--modifier="pf-m-plain" button--attribute=\'aria-label="Close"\'}}\n    {{> button-icon button-icon--type="times"}}\n  {{/button}}\n  {{#> title titleType="h1" title--modifier="pf-m-2xl" title--attribute=\'id="modal-title"\'}}\n    Modal Header\n  {{/title}}\n  {{#> modal-box-body modal-box-body--attribute=\'id="modal-description"\'}}\n    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},641:function(t,e){t.exports='{{#> modal-box modal-box--modifier="pf-m-sm" modal-box--attribute=\'aria-labelledby="modal-sm-title" aria-describedby="modal-sm-description"\'}}\n  {{#> button button--modifier="pf-m-plain" button--attribute=\'aria-label="Close Dialog"\'}}\n    {{> button-icon button-icon--type="times"}}\n  {{/button}}\n  {{#> title titleType="h1" title--modifier="pf-m-2xl" title--attribute=\'id="modal-sm-title"\'}}\n    Modal Header\n  {{/title}}\n  {{#> modal-box-body modal-box-body--attribute=\'id="modal-sm-description"\'}}\n    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},642:function(t,e){t.exports='{{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute=\'aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"\'}}\n  {{#> button button--modifier="pf-m-plain" button--attribute=\'aria-label="Close"\'}}\n    {{> button-icon button-icon--type="times"}}\n  {{/button}}\n  {{#> title titleType="h1" title--modifier="pf-m-2xl" title--attribute=\'id="modal-lg-title"\'}}\n    Modal Header\n  {{/title}}\n  {{#> modal-box-body modal-box-body--attribute=\'id="modal-lg-description"\'}}\n    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},643:function(t,e){t.exports='{{#> modal-box modal-box--attribute=\'aria-label="Example of a modal without a header" aria-describedby="modal-no-header-description"\'}}\n    {{#> button button--modifier="pf-m-plain" button--attribute=\'aria-label="Close"\'}}\n      {{> button-icon button-icon--type="times"}}\n    {{/button}}\n  {{#> modal-box-body}}\n    <span id="modal-no-header-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal\'s aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},644:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,a,n,i){var r;return(null!=(r=t.invokePartial(o(206),e,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--modifier":"pf-m-plain"},fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(228),e,{name:"title",hash:{"title--attribute":'id="modal-title"',"title--modifier":"pf-m-2xl",titleType:"h1"},fn:t.program(4,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(288),e,{name:"modal-box-body",hash:{"modal-box-body--attribute":'id="modal-description"'},fn:t.program(6,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(289),e,{name:"modal-box-footer",fn:t.program(8,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")},2:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(209),e,{name:"button-icon",hash:{"button-icon--type":"times"},data:i,indent:"    ",helpers:a,partials:n,decorators:t.decorators}))?r:""},4:function(t,e,o,a,n){return"    Modal Header\n"},6:function(t,e,o,a,n){return"    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n"},8:function(t,e,o,a,n){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(290),e,{name:"modal-box",hash:{"modal-box--attribute":'aria-labelledby="modal-title" aria-describedby="modal-description"'},fn:t.program(1,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:""},usePartial:!0,useData:!0})},645:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,a,n,i){var r;return(null!=(r=t.invokePartial(o(206),e,{name:"button",hash:{"button--attribute":'aria-label="Close Dialog"',"button--modifier":"pf-m-plain"},fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(228),e,{name:"title",hash:{"title--attribute":'id="modal-sm-title"',"title--modifier":"pf-m-2xl",titleType:"h1"},fn:t.program(4,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(288),e,{name:"modal-box-body",hash:{"modal-box-body--attribute":'id="modal-sm-description"'},fn:t.program(6,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(289),e,{name:"modal-box-footer",fn:t.program(8,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")},2:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(209),e,{name:"button-icon",hash:{"button-icon--type":"times"},data:i,indent:"    ",helpers:a,partials:n,decorators:t.decorators}))?r:""},4:function(t,e,o,a,n){return"    Modal Header\n"},6:function(t,e,o,a,n){return"    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n"},8:function(t,e,o,a,n){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(290),e,{name:"modal-box",hash:{"modal-box--attribute":'aria-labelledby="modal-sm-title" aria-describedby="modal-sm-description"',"modal-box--modifier":"pf-m-sm"},fn:t.program(1,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:""},usePartial:!0,useData:!0})},646:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,a,n,i){var r;return(null!=(r=t.invokePartial(o(206),e,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--modifier":"pf-m-plain"},fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(228),e,{name:"title",hash:{"title--attribute":'id="modal-lg-title"',"title--modifier":"pf-m-2xl",titleType:"h1"},fn:t.program(4,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(288),e,{name:"modal-box-body",hash:{"modal-box-body--attribute":'id="modal-lg-description"'},fn:t.program(6,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(289),e,{name:"modal-box-footer",fn:t.program(8,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")},2:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(209),e,{name:"button-icon",hash:{"button-icon--type":"times"},data:i,indent:"    ",helpers:a,partials:n,decorators:t.decorators}))?r:""},4:function(t,e,o,a,n){return"    Modal Header\n"},6:function(t,e,o,a,n){return"    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n"},8:function(t,e,o,a,n){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(290),e,{name:"modal-box",hash:{"modal-box--attribute":'aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"',"modal-box--modifier":"pf-m-lg"},fn:t.program(1,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:""},usePartial:!0,useData:!0})},647:function(t,e,o){var a=o(204);t.exports=(a.default||a).template({1:function(t,e,a,n,i){var r;return(null!=(r=t.invokePartial(o(206),e,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--modifier":"pf-m-plain"},fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(288),e,{name:"modal-box-body",fn:t.program(4,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(o(289),e,{name:"modal-box-footer",fn:t.program(6,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:"")},2:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(209),e,{name:"button-icon",hash:{"button-icon--type":"times"},data:i,indent:"      ",helpers:a,partials:n,decorators:t.decorators}))?r:""},4:function(t,e,o,a,n){return'    <span id="modal-no-header-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal\'s aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'},6:function(t,e,o,a,n){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var r;return null!=(r=t.invokePartial(o(290),e,{name:"modal-box",hash:{"modal-box--attribute":'aria-label="Example of a modal without a header" aria-describedby="modal-no-header-description"'},fn:t.program(1,i,0),inverse:t.noop,data:i,helpers:a,partials:n,decorators:t.decorators}))?r:""},usePartial:!0,useData:!0})},648:function(t,e){t.exports='<h2 id="overview">Overview</h2>\n<p>A modal box is a generic rectangular container that can be used to build modals. A modal box can have three sections: header, body, and footer. Header or body is required. If no <code>.pf-c-title</code> is used, <code>aria-label=&quot;[title of modal]&quot;</code> must be provided for <code>.pf-c-modal-box</code>.</p>\n<h2 id="accessibility">Accessibility</h2>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Applies to</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>role=&quot;dialog&quot;</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Identifies the element that serves as the modal container. <strong>Required</strong></td>\n</tr>\n<tr>\n<td><code>aria-labelledby=&quot;[id value of .pf-c-title]&quot;</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Gives the modal an accessible name by referring to the element that provides the dialog title. <strong>Required when .pf-c-title is present</strong></td>\n</tr>\n<tr>\n<td><code>aria-label=&quot;[title of modal]&quot;</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Gives the modal an accessible name. <strong>Required when <code>.pf-c-title</code> is <em>not</em> present</strong></td>\n</tr>\n<tr>\n<td><code>aria-describedby=&quot;[id value of applicable content]&quot;</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal.</td>\n</tr>\n<tr>\n<td><code>aria-modal=&quot;true&quot;</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Tells assistive technologies that the windows underneath the current modal are not available for interaction. <strong>Required</strong></td>\n</tr>\n<tr>\n<td><code>aria-label=&quot;Close&quot;</code></td>\n<td><code>.pf-c-modal-box__close .pf-c-button</code></td>\n<td>Provides an accessible name for the close button as it uses an icon instead of text. <strong>Required</strong></td>\n</tr>\n<tr>\n<td><code>aria-hidden=&quot;true&quot;</code></td>\n<td>Parent element containing the page contents when modal is open</td>\n<td>Hides main contents of the page from screen readers. The element with <code>.pf-c-modal-box</code> must not be a descendent of the element with <code>aria-hidden=&quot;true&quot;</code>For more info see <a href="/accessibility-guide#trapping-focus">trapping focus</a>. <strong>Required</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-c-modal-box</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Initiates a modal box. <strong>Required</strong></td>\n</tr>\n<tr>\n<td><code>.pf-c-button.pf-m-plain</code></td>\n<td><code>&lt;button&gt;</code></td>\n<td>Initiates a modal box close button. <strong>Required</strong></td>\n</tr>\n<tr>\n<td><code>.pf-c-title</code></td>\n<td><code>&lt;h1&gt;</code>,<code>&lt;h2&gt;</code>,<code>&lt;h3&gt;</code>,<code>&lt;h4&gt;</code>,<code>&lt;h5&gt;</code>,<code>&lt;h6&gt;</code></td>\n<td>Initiates a title. Always use it with a modifier class.</td>\n</tr>\n<tr>\n<td><code>.pf-c-modal-box__body</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Initiates a modal box body. A modal box body is <strong>required</strong> if there is no modal box header.</td>\n</tr>\n<tr>\n<td><code>.pf-c-modal-box__footer</code></td>\n<td><code>&lt;footer&gt;</code></td>\n<td>Initiates a modal box footer.</td>\n</tr>\n<tr>\n<td><code>.pf-m-sm</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Modifies for a small modal box width.</td>\n</tr>\n<tr>\n<td><code>.pf-m-lg</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Modifies for a large modal box width.</td>\n</tr>\n</tbody>\n</table>\n'}}]);
//# sourceMappingURL=component---src-patternfly-components-modal-box-examples-index-js-2aab4722d074f1f7b9d7.js.map