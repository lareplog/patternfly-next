webpackJsonp([24823212021408],{935:function(e,r){e.exports="<h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>for</code></td> <td><code>&lt;label&gt;</code></td> <td>Each <code>&lt;label&gt;</code> must have a <code>for</code> attribute that matches its form field id. <strong>Required</strong></td> </tr> <tr> <td><code>id</code></td> <td><code>&lt;input type=&quot;radio/checkbox/text&quot;&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Each <code>&lt;form&gt;</code> field must have an <code>id</code> attribute that matches its label&#39;s <code>for</code> value. <strong>Required</strong></td> </tr> <tr> <td><code>required aria-required=&quot;true&quot;</code></td> <td><code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Required fields must include these attributes.</td> </tr> <tr> <td><code>id=&quot;{helper_text_id}&quot;</code></td> <td><code>.pf-c-form__helper-text</code></td> <td>Form fields with related <code>.pf-c-form__helper-text</code> require this attribute. Usage <code>&lt;p class=&quot;pf-c-form__helper-text&quot; id=&quot;{helper_text_id}&quot;&gt;</code>.</td> </tr> <tr> <td><code>aria-describedby=&quot;{helper_text_id}&quot;</code></td> <td><code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Form fields with related <code>.pf-c-form__helper-text</code> require this attribute. Usage <code>&lt;input aria-describedby=&quot;{helper_text_id}&quot;&gt;</code>.</td> </tr> <tr> <td><code>aria-invalid=&quot;true&quot; aria-errormessage=&quot;{helper_text_id}&quot;</code></td> <td><code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Where form validation fails, <code>aria-errormessage</code> is used instead of <code>aria-describedby</code>. <code>aria-errormessage</code> and <code>aria-invalid=&quot;true&quot;</code> are only present when validation fails so this needs to be handled with Javascript. For proper styling of errors <code>aria-invalid=&quot;true&quot;</code> is required.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-form</code></td> <td><code>&lt;form&gt;</code></td> <td>Initiates a standard form. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-form__label</code></td> <td><code>&lt;label&gt;</code></td> <td>Initiates a form label. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-form__helper-text</code></td> <td><code>&lt;p&gt;</code></td> <td>Initiates a form helper text block.</td> </tr> <tr> <td><code>.pf-c-form__group</code></td> <td><code>&lt;div&gt;</code></td> <td>Wraps form fields <code>&lt;label&gt;</code> + <code>&lt;field&gt;</code> + <code>.form-helper-text</code>.</td> </tr> <tr> <td><code>.pf-c-form__horizontal-group</code></td> <td><code>&lt;div&gt;</code></td> <td>Wraps <code>.pf-c-form-control</code> when using <code>.pf-m-horizontal</code> on <code>.pf-c-form</code> to provide proper spacing for longer labels.</td> </tr> <tr> <td><code>.pf-m-error</code></td> <td><code>.pf-c-form__helper-text</code></td> <td>Modifies text color of helper text.</td> </tr> <tr> <td><code>.pf-m-inactive</code></td> <td><code>.pf-c-form__helper-text</code></td> <td>Modifies display of helper text to none.</td> </tr> <tr> <td><code>.pf-m-border</code></td> <td><code>.pf-c-form__section</code></td> <td>Modifies form element border-bottom.</td> </tr> <tr> <td><code>.pf-m-disabled</code></td> <td><code>.pf-c-form__label</code></td> <td>Modifies form label to show disabled state.</td> </tr> <tr> <td><code>.pf-m-inline</code></td> <td><code>.pf-c-form__group</code></td> <td>Modifies form group children to be inline (this is primarily for radio buttons and checkboxes).</td> </tr> <tr> <td><code>.pf-m-action</code></td> <td><code>.pf-c-form__group</code></td> <td>Modifies form group margin-top.</td> </tr> </tbody> </table> "},736:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(22),r,{name:"form-group",hash:{"form-group--modifier":"pf-m-action"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},2:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(92),r,{name:"toolbar",fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},3:function(e,r,o,a,n){var l;return(null!=(l=e.invokePartial(t(37),r,{name:"toolbar-group",fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(t(37),r,{name:"toolbar-group",fn:e.program(8,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")},4:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(17),r,{name:"toolbar-item",fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},5:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(3),r,{name:"button",hash:{"button--modifier":"pf-m-primary"},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},6:function(e,r,t,o,a){return"              Submit form\n"},8:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(17),r,{name:"toolbar-item",fn:e.program(9,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},9:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(3),r,{name:"button",hash:{"button--modifier":"pf-m-secondary"},fn:e.program(10,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},10:function(e,r,t,o,a){return"              Cancel\n"},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(67),r,{name:"form",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},1236:function(e,r){e.exports='{{#> form}}\n  {{#> form-group form-group--modifier="pf-m-action"}}\n      {{#> toolbar}}\n        {{#> toolbar-group}}\n          {{#> toolbar-item}}\n            {{#> button button--modifier="pf-m-primary"}}\n              Submit form\n            {{/button}}\n          {{/toolbar-item}}\n        {{/toolbar-group}}\n        {{#> toolbar-group}}\n          {{#> toolbar-item}}\n            {{#> button button--modifier="pf-m-secondary"}}\n              Cancel\n            {{/button}}\n          {{/toolbar-item}}\n        {{/toolbar-group}}\n      {{/toolbar}}\n  {{/form-group}}\n{{/form}}\n'},737:function(e,r,t){function o(e){return e&&(e.__esModule?e.default:e)}var a=t(1);e.exports=(a.default||a).template({1:function(e,r,o,a,n){var l;return(null!=(l=e.invokePartial(t(22),r,{name:"form-group",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(t(22),r,{name:"form-group",fn:e.program(9,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")},2:function(e,r,a,n,l){var i,d=null!=r?r:e.nullContext||{};return(null!=(i=e.invokePartial(t(39),r,{name:"form-label",hash:{required:"true","form-label--attribute":o(t(10)).call(d,'for="',null!=r?r["form--id"]:r,'-simple-form-name"',{name:"concat",hash:{},data:l})},fn:e.program(3,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(18),r,{name:"form-control",hash:{"form-control--attribute":o(t(10)).call(d,'required type="text" id="',null!=r?r["form--id"]:r,'-simple-form-name" name="',null!=r?r["form--id"]:r,'-simple-form-name" aria-errormessage="',null!=r?r["form--id"]:r,'-simple-form-name-helper"',{name:"concat",hash:{},data:l}),input:"true",controlType:"input"},fn:e.program(5,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(98),r,{name:"form-helper-text",hash:{"form-helper-text--attribute":o(t(10)).call(d,'id="',null!=r?r["form--id"]:r,'-simple-form-name-helper" aria-live="polite"',{name:"concat",hash:{},data:l})},fn:e.program(7,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")},3:function(e,r,t,o,a){return"      Name\n"},5:function(e,r,t,o,a){return""},7:function(e,r,t,o,a){return"      This is helper text\n"},9:function(e,r,a,n,l){var i,d=null!=r?r:e.nullContext||{};return(null!=(i=e.invokePartial(t(39),r,{name:"form-label",hash:{required:"true","form-label--attribute":o(t(10)).call(d,'for="',null!=r?r["form--id"]:r,'-simple-form-address"',{name:"concat",hash:{},data:l})},fn:e.program(10,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(18),r,{name:"form-control",hash:{"form-control--attribute":o(t(10)).call(d,'required type="text" id="',null!=r?r["form--id"]:r,'-simple-form-address" name="',null!=r?r["form--id"]:r,'-simple-form-address" aria-invalid="true" aria-errormessage="',null!=r?r["form--id"]:r,'-simple-form-address-helper"',{name:"concat",hash:{},data:l}),input:"true",controlType:"input"},fn:e.program(5,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(98),r,{name:"form-helper-text",hash:{"form-helper-text--attribute":o(t(10)).call(d,'id="',null!=r?r["form--id"]:r,'-simple-form-address-helper" aria-live="polite"',{name:"concat",hash:{},data:l}),"form-helper-text--modifier":"pf-m-error"},fn:e.program(12,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")},10:function(e,r,t,o,a){return"      address\n"},12:function(e,r,t,o,a){return"      This is helper text for an invalid input\n"},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(67),r,{name:"form",hash:{"form--id":"help-text"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},1237:function(e,r){e.exports='{{#> form form--id="help-text"}}\n  {{#> form-group}}\n    {{#> form-label form-label--attribute=(concat \'for="\' form--id \'-simple-form-name"\') required=\'true\'}}\n      Name\n    {{/form-label}}\n    {{#> form-control controlType="input" input="true" form-control--attribute=(concat \'required type="text" id="\' form--id \'-simple-form-name" name="\' form--id \'-simple-form-name" aria-errormessage="\' form--id \'-simple-form-name-helper"\')}}\n    {{/form-control}}\n    {{#> form-helper-text form-helper-text--attribute=(concat \'id="\' form--id \'-simple-form-name-helper" aria-live="polite"\')}}\n      This is helper text\n    {{/form-helper-text}}\n  {{/form-group}}\n  {{#> form-group}}\n    {{#> form-label form-label--attribute=(concat \'for="\' form--id \'-simple-form-address"\') required=\'true\'}}\n      address\n    {{/form-label}}\n    {{#> form-control controlType="input" input="true" form-control--attribute=(concat \'required type="text" id="\' form--id \'-simple-form-address" name="\' form--id \'-simple-form-address" aria-invalid="true" aria-errormessage="\' form--id \'-simple-form-address-helper"\')}}\n    {{/form-control}}\n    {{#> form-helper-text form-helper-text--modifier="pf-m-error" form-helper-text--attribute=(concat \'id="\' form--id \'-simple-form-address-helper" aria-live="polite"\')}}\n      This is helper text for an invalid input\n    {{/form-helper-text}}\n  {{/form-group}}\n{{/form}}\n'},1238:function(e,r){e.exports='{{#> form form--modifier="pf-m-horizontal" form--id="horizontal-align-labels"}}\n  {{#> form-group}}\n    {{#> form-label form-label--attribute=(concat \'for="\' form--id \'-horizontal-form-name"\') required="true"}}\n      Name\n    {{/form-label}}\n    {{#> horizontal-form-group}}\n      {{#> form-control controlType="input" input="true" form-control--attribute=(concat \'type="text" id="\' form--id \'-horizontal-form-name" name="\' form--id \'-horizontal-form-name" required\')}}\n      {{/form-control}}\n    {{/horizontal-form-group}}\n  {{/form-group}}\n{{/form}}\n'},738:function(e,r,t){function o(e){return e&&(e.__esModule?e.default:e)}var a=t(1);e.exports=(a.default||a).template({1:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(22),r,{name:"form-group",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},2:function(e,r,a,n,l){var i;return(null!=(i=e.invokePartial(t(39),r,{name:"form-label",hash:{required:"true","form-label--attribute":o(t(10)).call(null!=r?r:e.nullContext||{},'for="',null!=r?r["form--id"]:r,'-horizontal-form-name"',{name:"concat",hash:{},data:l})},fn:e.program(3,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(84),r,{name:"horizontal-form-group",fn:e.program(5,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")},3:function(e,r,t,o,a){return"      Name\n"},5:function(e,r,a,n,l){var i;return null!=(i=e.invokePartial(t(18),r,{name:"form-control",hash:{"form-control--attribute":o(t(10)).call(null!=r?r:e.nullContext||{},'type="text" id="',null!=r?r["form--id"]:r,'-horizontal-form-name" name="',null!=r?r["form--id"]:r,'-horizontal-form-name" required',{name:"concat",hash:{},data:l}),input:"true",controlType:"input"},fn:e.program(6,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:""},6:function(e,r,t,o,a){return""},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(67),r,{name:"form",hash:{"form--id":"horizontal-align-labels","form--modifier":"pf-m-horizontal"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},739:function(e,r,t){function o(e){return e&&(e.__esModule?e.default:e)}var a=t(1);e.exports=(a.default||a).template({1:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(22),r,{name:"form-group",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},2:function(e,r,a,n,l){var i,d=null!=r?r:e.nullContext||{};return(null!=(i=e.invokePartial(t(39),r,{name:"form-label",hash:{required:"true","form-label--attribute":o(t(10)).call(d,'for="',null!=r?r["form--id"]:r,'-vertical-form-name"',{name:"concat",hash:{},data:l})},fn:e.program(3,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(18),r,{name:"form-control",hash:{"form-control--attribute":o(t(10)).call(d,'type="text" id="',null!=r?r["form--id"]:r,'-vertical-form-name" name="',null!=r?r["form--id"]:r,'-vertical-form-name" required="true"',{name:"concat",hash:{},data:l}),input:"true",controlType:"input"},fn:e.program(5,l,0),inverse:e.noop,data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")},3:function(e,r,t,o,a){return"      Name\n"},5:function(e,r,t,o,a){return""},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return(null!=(l=e.invokePartial(t(67),r,{name:"form",hash:{"form--id":"vertical-align-labels"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"\n"},usePartial:!0,useData:!0})},1239:function(e,r){e.exports='{{#> form form--id="vertical-align-labels"}}\n  {{#> form-group}}\n    {{#> form-label form-label--attribute=(concat \'for="\' form--id \'-vertical-form-name"\') required="true"}}\n      Name\n    {{/form-label}}\n    {{#> form-control controlType="input" input="true" form-control--attribute=(concat \'type="text" id="\' form--id \'-vertical-form-name" name="\' form--id \'-vertical-form-name" required="true"\')}}\n    {{/form-control}}\n  {{/form-group}}\n{{/form}}\n\n'},324:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0,r.Docs=void 0;var a=t(4),n=o(a),l=t(11),i=o(l),d=t(12),m=o(d),u=t(1239),f=o(u),c=t(1238),s=o(c),p=t(1237),h=o(p),g=t(1236),b=o(g),v=t(739),x=o(v),_=t(738),q=o(_),y=t(737),k=o(y),P=t(736),z=o(P),M=t(935),C=o(M);t(1149);var T=r.Docs=C.default;r.default=function(){var e=(0,x.default)(),r=(0,q.default)(),t=(0,k.default)(),o=(0,z.default)(),a="Form";return n.default.createElement(i.default,{docs:T,heading:a},n.default.createElement(m.default,{heading:"Vertical aligned Labels",handlebars:f.default},e),n.default.createElement(m.default,{heading:"Horizontal aligned Labels",handlebars:s.default},r),n.default.createElement(m.default,{heading:"Help text",handlebars:h.default},t),n.default.createElement(m.default,{heading:"Action Group",handlebars:b.default},o))}},98:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,t,o,a){var n;return" "+e.escapeExpression((n=null!=(n=t["form-helper-text--modifier"]||(null!=r?r["form-helper-text--modifier"]:r))?n:t.helperMissing,"function"==typeof n?n.call(null!=r?r:e.nullContext||{},{name:"form-helper-text--modifier",hash:{},data:a}):n))},3:function(e,r,t,o,a){var n,l;return"    "+(null!=(l=null!=(l=t["form-helper-text--attribute"]||(null!=r?r["form-helper-text--attribute"]:r))?l:t.helperMissing,n="function"==typeof l?l.call(null!=r?r:e.nullContext||{},{name:"form-helper-text--attribute",hash:{},data:a}):l)?n:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,r,t,o,a){var n,l=null!=r?r:e.nullContext||{};return'<p class="pf-c-form__helper-text'+(null!=(n=t.if.call(l,null!=r?r["form-helper-text--modifier"]:r,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'"\n'+(null!=(n=t.if.call(l,null!=r?r["form-helper-text--attribute"]:r,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(o["@partial-block"],r,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:o,decorators:e.decorators}))?n:"")+"</p>\n"},usePartial:!0,useData:!0})},1149:function(e,r){},84:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,t,o,a){var n;return" "+e.escapeExpression((n=null!=(n=t["form-horizontal-group--modifier"]||(null!=r?r["form-horizontal-group--modifier"]:r))?n:t.helperMissing,"function"==typeof n?n.call(null!=r?r:e.nullContext||{},{name:"form-horizontal-group--modifier",hash:{},data:a}):n))},3:function(e,r,t,o,a){var n,l;return"    "+(null!=(l=null!=(l=t["form-horizontal-group--attribute"]||(null!=r?r["form-horizontal-group--attribute"]:r))?l:t.helperMissing,n="function"==typeof l?l.call(null!=r?r:e.nullContext||{},{name:"form-horizontal-group--attribute",hash:{},data:a}):l)?n:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,r,t,o,a){var n,l=null!=r?r:e.nullContext||{};return'<div class="pf-c-form__horizontal-group'+(null!=(n=t.if.call(l,null!=r?r["form-horizontal-group--modifier"]:r,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'"\n'+(null!=(n=t.if.call(l,null!=r?r["form-horizontal-group--attribute"]:r,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(o["@partial-block"],r,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:o,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})}});
//# sourceMappingURL=component---src-patternfly-components-form-examples-index-js-707dffcce0a021165b34.js.map