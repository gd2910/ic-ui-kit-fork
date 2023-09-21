/*! For license information please see 1965.4c8869c2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[1965],{"../web-components/dist/esm/ic-radio-option.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_option:()=>RadioOption});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../web-components/dist/esm/index-5e4f5b3b.js"),_helpers_10f9f399_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../web-components/dist/esm/helpers-10f9f399.js");__webpack_require__("../web-components/dist/esm/types-b2398b37.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var RadioOption=function(){function RadioOption(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RadioOption),(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.r)(this,hostRef),this.icCheck=(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.c)(this,"icCheck",7),this.radioOptionSelect=(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.c)(this,"radioOptionSelect",7),this.icSelectedChange=(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.c)(this,"icSelectedChange",7),this.defaultRadioValue="",this.hasAdditionalField=!1,this.skipFocus=!1,this.handleClick=function(){if(!_this.disabled){if(!1===_this.skipFocus&&_this.radioElement.focus(),_this.skipFocus=!1,_this.hasAdditionalField){var textfield=_this.host.querySelector("ic-text-field");_this.value=""!==textfield.value?textfield.value:_this.defaultRadioValue}_this.icCheck.emit({value:_this.value}),_this.radioOptionSelect.emit({value:_this.value})}},this.swallowClick=function(event){event.stopPropagation()},this.handleFormReset=function(){_this.skipFocus=!0,_this.selected=_this.initiallySelected},this.additionalFieldDisplay="static",this.disabled=!1,this.dynamicText="This selection requires additional answers",this.groupLabel=void 0,this.label=void 0,this.name=void 0,this.value=void 0,this.selected=!1,this.initiallySelected=this.selected}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(RadioOption,[{key:"watchSelectedHandler",value:function watchSelectedHandler(){this.icSelectedChange.emit()}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_10f9f399_js__WEBPACK_IMPORTED_MODULE_25__.e)(this.host,this.handleFormReset)}},{key:"componentWillLoad",value:function componentWillLoad(){var additonalFieldContent=(0,_helpers_10f9f399_js__WEBPACK_IMPORTED_MODULE_25__.v)(this.host,"additional-field");if(null!==additonalFieldContent){this.hasAdditionalField=!0;var Element=additonalFieldContent[0];if("IC-TEXT-FIELD"===Element.tagName)Element.hiddenInput=!1}this.defaultRadioValue=this.value,(0,_helpers_10f9f399_js__WEBPACK_IMPORTED_MODULE_25__.d)(this.host,this.handleFormReset),(0,_helpers_10f9f399_js__WEBPACK_IMPORTED_MODULE_25__.r)(this.disabled,this.host)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_10f9f399_js__WEBPACK_IMPORTED_MODULE_25__.a)([{prop:this.value,propName:"value"}],"Radio Option")}},{key:"componentDidRender",value:function componentDidRender(){if("static"===this.additionalFieldDisplay){var textfield=this.host.querySelector("ic-text-field");this.selected?textfield&&textfield.removeAttribute("disabled"):textfield&&textfield.setAttribute("disabled","")}}},{key:"textfieldValueHandler",value:function textfieldValueHandler(event){var textFieldValue=event.detail.value;this.selected&&(""!==textFieldValue?(this.value=event.detail.value,this.icCheck.emit({value:this.value}),this.radioOptionSelect.emit({value:this.value})):(this.value=this.defaultRadioValue,this.icCheck.emit({value:this.defaultRadioValue}),this.radioOptionSelect.emit({value:this.defaultRadioValue}))),event.stopImmediatePropagation()}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.host.shadowRoot.querySelector("input")&&this.host.shadowRoot.querySelector("input").focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _class,_this2=this,id="ic-radio-option-"+(void 0!==this.label?this.label:this.value)+"-"+this.groupLabel;return(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)(_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.H,{onClick:this.handleClick,class:{disabled:this.disabled}},(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("div",{class:(_class={},_class.container=!0,_class.disabled=this.disabled,_class)},(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("div",null,(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("input",{role:"radio",tabindex:this.selected?"0":"-1",type:"radio",name:this.name,id,value:this.value,disabled:!!this.disabled||null,checked:this.selected,ref:function ref(el){return _this2.radioElement=el}}),(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("span",{class:"checkmark"})),(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("ic-typography",{class:"radio-label",variant:"body"},(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("label",{htmlFor:id},this.label))),this.hasAdditionalField&&(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("div",{onClick:this.swallowClick,class:{"dynamic-container":!0,hidden:"dynamic"===this.additionalFieldDisplay&&!this.selected}},"dynamic"===this.additionalFieldDisplay&&(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("div",{class:"branch-corner"}),(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("div",null,"dynamic"===this.additionalFieldDisplay&&(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("ic-typography",{variant:"caption"},(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("p",{class:"dynamic-text"},this.dynamicText)),(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("div",{class:{"additional-field-wrapper":"static"===this.additionalFieldDisplay}},(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.h)("slot",{name:"additional-field"})))))}},{key:"host",get:function get(){return(0,_index_5e4f5b3b_js__WEBPACK_IMPORTED_MODULE_24__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{selected:["watchSelectedHandler"]}}}]),RadioOption}();RadioOption.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}:host([additional-field-display="static"]) ::slotted(ic-text-field){margin-top:calc(var(--ic-space-sm) / 2);margin-left:var(--ic-space-xl)}:host(.disabled){color:var(--ic-architectural-200)}.container input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus)}.container{display:grid;grid-template-columns:min-content auto;position:relative;cursor:pointer;align-items:center;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs)}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:transparent;border:var(--ic-border-default);border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{background-color:var(--ic-action-default-bg-hover);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:var(--ic-space-1px) solid var(--ic-action-default)}.container:active input~.checkmark{background-color:var(--ic-action-default-bg-active);border:var(--ic-space-1px) solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark{background-color:var(--ic-action-default-bg-active);border:0.125rem solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark::after{background-color:var(--ic-action-default-active)}.container input:checked~.checkmark{border:0.125rem solid var(--ic-action-default)}.container input:checked:disabled~.checkmark{background-color:transparent;border:0.125rem solid var(--ic-architectural-200)}.container input:disabled~.checkmark{border:var(--ic-space-1px) dashed var(--ic-architectural-200)}.container input:disabled~.checkmark::after{background:var(--ic-architectural-200)}.container:hover input:disabled~.checkmark{background-color:transparent;box-shadow:none;border:0.125rem solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-architectural-200)}.container .checkmark::after{content:"";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-action-default)}.radio-label{margin-left:var(--ic-space-md)}.additional-field-wrapper{margin-left:var(--ic-space-xs)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default);margin-left:calc(-1 * var(--ic-space-1px))}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-action-default);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.container input:checked~.checkmark,.container:active input:checked~.checkmark{border-color:Highlight}.container input:checked~.checkmark::after,.container:active input:checked~.checkmark::after{background-color:Highlight}.container input:disabled~.checkmark,.container input:checked:disabled~.checkmark{border-color:GrayText}.container input:disabled~.checkmark::after,.container:active input:disabled~.checkmark::after{background-color:GrayText}}'}}]);