"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1962],{"./dist/esm/ic-accordion-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_accordion_group:()=>AccordionGroup});__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.every.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/esm/index-a77644e1.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var accordionGroupIds=0,AccordionGroup=function(){function AccordionGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,AccordionGroup),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.r)(this,hostRef),this.accordionGroupId="ic-accordion-group-"+accordionGroupIds++,this.handleExpanded=function(){_this.areAllAccordionsOpen?(_this.expanded=!1,_this.accordions.forEach((function(acc){acc.expanded=_this.expanded}))):(_this.expanded=!0,_this.accordions.forEach((function(acc){acc.expanded=_this.expanded}))),_this.setExpandedToAreAllAccordionsOpen()},this.linkAccordions=function(){_this.accordions.forEach((function(accordion){accordion.setAttribute("context-id",_this.accordionGroupId)}))},this.setExpandedToAreAllAccordionsOpen=function(){_this.areAllAccordionsOpen=_this.accordions.every((function(accordion){return!!accordion.expanded}))},this.accordions=void 0,this.areAllAccordionsOpen=void 0,this.appearance="default",this.expanded=!1,this.groupTitle="",this.singleExpansion=!1,this.size="default"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(AccordionGroup,[{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this,accordionDirectChildren=this.el.children;this.accordions=Array.from(accordionDirectChildren).filter((function(child){return"IC-ACCORDION"===child.tagName})),this.linkAccordions(),this.accordions.forEach((function(acc){acc.appearance=_this2.appearance})),this.accordions.forEach((function(acc){acc.size=_this2.size})),this.expanded?(this.accordions.forEach((function(acc){acc.expanded=!0})),this.setExpandedToAreAllAccordionsOpen()):(this.setExpandedToAreAllAccordionsOpen(),this.expanded=this.areAllAccordionsOpen)}},{key:"handleAccordionClicked",value:function handleAccordionClicked(event){this.singleExpansion?this.accordions.forEach((function(acc){acc.expanded&&event.detail.id!==acc.id&&(acc.expanded=!1)})):this.setExpandedToAreAllAccordionsOpen()}},{key:"render",value:function render(){var _class,appearance=this.appearance,size=this.size,groupTitle=this.groupTitle,singleExpansion=this.singleExpansion;return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.h)(_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.H,{"context-id":this.accordionGroupId,class:(_class={},_class[""+appearance]=!0,_class[""+size]=!0,_class["accordion-group"]=!0,_class)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"group-title-container"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-typography",{variant:"h4"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.h)("h3",null,groupTitle)),!singleExpansion&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-button",{appearance:"light"===appearance?"light":"default",onClick:this.handleExpanded,variant:"tertiary"},this.areAllAccordionsOpen?"Hide all":"See all")),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",null))}},{key:"el",get:function get(){return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_13__.g)(this)}}]),AccordionGroup}();AccordionGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}.group-title-container{padding:var(--ic-space-xs) 0;display:flex;justify-content:space-between;align-items:center}:host(.small) .group-title-container{padding:var(--ic-space-xxs) var(--ic-space-xs)}:host(.large) .group-title-container{padding:var(--ic-space-sm) var(--ic-space-xs)}:host(.light){color:var(--ic-architectural-white)}:host(.accordion-group.dark) ::slotted(ic-accordion){color:var(--ic-architectural-white)}'},"./node_modules/core-js/modules/es.array.every.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$every=__webpack_require__("./node_modules/core-js/internals/array-iteration.js").every;$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js")("every")},{every:function every(callbackfn){return $every(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})}}]);