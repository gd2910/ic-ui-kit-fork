"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1099],{"./dist/esm/ic-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_chip:()=>Chip});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_94c66ff5_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-94c66ff5.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Chip=function(){function Chip(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Chip),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.dismiss=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"dismiss",7),this.icDismiss=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"icDismiss",7),this.dismissAction=function(){_this.dismiss.emit(),_this.icDismiss.emit()},this.mouseEnterHandler=function(){_this.isHovered=!0},this.mouseLeaveHandler=function(){_this.isHovered=!1},this.label=void 0,this.appearance="filled",this.size="default",this.dismissible=!1,this.disabled=!1,this.visible=!0,this.isHovered=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Chip,[{key:"handleClick",value:function handleClick(){this.visible=!this.visible}},{key:"componentDidLoad",value:function componentDidLoad(){var _a;this.dismissible&&(null===(_a=this.el.shadowRoot.querySelector("span.ic-tooltip-label"))||void 0===_a||_a.setAttribute("aria-hidden","true")),(0,_helpers_94c66ff5_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.label,propName:"label"}],"Chip")}},{key:"render",value:function render(){var _class,_class2,_class3,label=this.label,appearance=this.appearance,size=this.size,dismissible=this.dismissible,visible=this.visible,disabled=this.disabled,isHovered=this.isHovered;return visible&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:(_class={},_class.chip=!0,_class[""+appearance]=!0,_class[""+size]=!0,_class.disabled=disabled,_class.dismissible=dismissible,_class.hovered=isHovered,_class)},(0,_helpers_94c66ff5_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"icon")&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"icon"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"icon"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"label","apply-vertical-margins":!1,class:"label"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",null,label)),dismissible&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-tooltip",{label:"Dismiss",target:"dismiss-icon",class:(_class2={},_class2["tooltip-disabled"]=disabled,_class2)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("button",{id:"dismiss-icon",class:(_class3={},_class3["dismiss-icon"]=!0,_class3),"aria-label":"Dismiss "+label+" chip",disabled,tabindex:disabled?-1:0,onClick:this.dismissAction,onMouseEnter:this.mouseEnterHandler,onMouseLeave:this.mouseLeaveHandler,innerHTML:'<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n'})))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),Chip}();Chip.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}.chip{display:flex;padding:var(--ic-space-xxs);font-size:0.875rem;border-radius:5rem;text-align:center;align-items:center;text-decoration:none;transition:var(--ic-easing-transition-fast);position:relative}.chip.small{padding:var(--ic-space-xxxs)}.chip.large{padding:var(--ic-space-xs)}.label{padding:0 var(--ic-space-xs)}.chip.hovered:not(:focus-within){background-color:var(--ic-architectural-300)}.chip:focus-within{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);z-index:1}.chip.outline.hovered:not(:focus-within){background-color:var(--ic-action-dark-bg-hover)}ic-tooltip:focus-within{z-index:1}.filled{background-color:var(--ic-architectural-200);color:black;border:none}.filled.disabled{background-color:var(--ic-architectural-100)}.outline{color:var(--ic-architectural-900);border:0.063rem solid var(--ic-architectural-900);padding:calc(var(--ic-space-xxs) - 0.063rem)}.outline.small{padding:calc(var(--ic-space-xxxs) - 0.063rem)}.outline.large{padding:calc(var(--ic-space-xs) - 0.063rem)}.outline.disabled{border:var(--ic-border-disabled);background:none}.chip.disabled ic-typography{color:var(--ic-architectural-200)}.dismiss-icon{border:none;border-radius:50%;padding:0;background:none;cursor:pointer;margin:var(--ic-space-xxxs);height:calc(var(--ic-space-lg) - var(--ic-space-xxs));width:calc(var(--ic-space-lg) - var(--ic-space-xxs))}.dismiss-icon:focus{outline:var(--ic-hc-focus-outline)}.dismiss-icon[disabled]{pointer-events:none;color:var(--ic-architectural-200)}.icon{padding:var(--ic-space-xxxs);box-sizing:border-box}.icon,ic-tooltip{width:var(--ic-space-lg);height:var(--ic-space-lg)}.chip.disabled path,.chip.disabled ::slotted(svg){fill:var(--ic-architectural-200)}@media (forced-colors: active){.chip{border:var(--ic-hc-border)}.filled.small{padding:calc(var(--ic-space-xxxs) - 0.063rem)}.filled{padding:calc(var(--ic-space-xxxs) + 0.063rem)}.filled.large{padding:calc(var(--ic-space-xs) - 0.063rem)}.chip.disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.chip.disabled ic-typography{color:GrayText}.chip.disabled path,.chip.disabled ::slotted(svg){fill:GrayText}.chip:focus-within{outline:none;border-color:Highlight}}'}}]);