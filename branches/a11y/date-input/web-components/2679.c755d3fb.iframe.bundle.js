"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2679],{"./dist/esm/ic-input-component-container_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_component_container:()=>InputComponentContainer,ic_input_container:()=>InputContainer,ic_input_validation:()=>InputValidation});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _icon,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-813020f1.js"),_types_50678b06_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-50678b06.js"),_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/helpers-3bba9e1e.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var InputComponentContainer=function(){function InputComponentContainer(hostRef){_classCallCheck(this,InputComponentContainer),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.appearance="default",this.dark=!1,this.disabled=!1,this.fullWidth=!1,this.multiLine=!1,this.readonly=!1,this.size="default",this.small=!1,this.validationInline=!1,this.validationStatus=""}return _createClass(InputComponentContainer,[{key:"render",value:function render(){var _class,_class2,_class3,small=this.small,size=this.size,validationStatus=this.validationStatus,disabled=this.disabled,readonly=this.readonly,multiLine=this.multiLine,fullWidth=this.fullWidth,dark=this.dark,appearance=this.appearance,validationInline=this.validationInline,hasValidationStatus=""!==this.validationStatus&&!this.disabled&&!this.readonly;return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class={},_class.small=small||"small"===size,_class.large="large"===size,_class[validationStatus]=hasValidationStatus,_class.disabled=disabled,_class.readonly=readonly,_class.multiline=multiLine,_class.fullwidth=fullWidth,_class.dark=dark||"dark"===appearance,_class)},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:{"focus-indicator":!0,dark:dark||"dark"===appearance}},(0,_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"left-icon")&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(_class2={},_class2["icon-container"]=!0,_class2)},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"left-icon"})),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null),validationInline&&validationStatus===_types_50678b06_js__WEBPACK_IMPORTED_MODULE_9__.a.Success&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:(_class3={},_class3["inline-success"]=!0,_class3),innerHTML:_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__.P})))}},{key:"el",get:function get(){return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),InputComponentContainer}();InputComponentContainer.style="ic-input-component-container{display:flex;border:var(--ic-space-1px) solid\n    var(--border-color, var(--ic-architectural-400));border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-slow);height:2.5rem;width:var(--input-width, 20rem);padding:var(--ic-space-1px);background-color:var(--ic-architectural-white);box-sizing:border-box;fill:var(--ic-architectural-400);outline:none}ic-input-component-container.fullwidth{width:100%}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-space-1px) dashed var(--ic-architectural-200)}ic-input-component-container.readonly,ic-input-component-container.readonly:hover{border:none;padding:0}ic-input-component-container.error{border:var(--ic-error-border-default);padding:0}ic-input-component-container.error:hover{border:var(--ic-error-border-hover)}ic-input-component-container.error:focus-within{border:var(--ic-error-border-pressed)}ic-input-component-container.warning{border:var(--ic-warning-border-default);padding:0}ic-input-component-container.warning:hover{border:var(--ic-warning-border-hover)}ic-input-component-container.warning:focus-within{border:var(--ic-warning-border-pressed)}ic-input-component-container.success{border:var(--ic-success-border-default);padding:0}ic-input-component-container.success:hover{border:var(--ic-success-border-hover)}ic-input-component-container.success:focus-within{border:var(--ic-success-border-pressed)}ic-input-component-container.small{height:var(--ic-space-xl)}ic-input-component-container.large{height:var(--ic-space-xxl)}ic-input-component-container.multiline{height:auto}ic-input-component-container .icon-container{margin-top:var(--ic-space-xxs);margin-left:0.438rem;display:flex;align-items:center}ic-input-component-container.multiline .icon-container,ic-input-component-container.multiline.small .icon-container{margin-top:0.375rem;display:block}ic-input-component-container.readonly .icon-container{margin-left:-0.313rem}ic-input-component-container.disabled ::-moz-placeholder{display:none}ic-input-component-container.disabled ::placeholder{display:none}ic-input-component-container .inline-success{margin:var(--ic-space-xs) 0.375rem;display:flex;align-items:center}ic-input-component-container.dark:hover{--border-color:var(--ic-architectural-400)}ic-input-component-container .inline-success>svg{fill:var(--ic-status-success);height:1.25rem;width:1.25rem}ic-input-component-container:hover{border:var(--ic-border-hover);color:var(--ic-action-dark-hover)}ic-input-component-container:focus{border:var(--ic-border-pressed)}.focus-indicator{display:flex;width:100%;margin:-0.125rem;padding:0.125rem;border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.focus-indicator:focus-within,.focus-indicator-enabled{box-shadow:var(--ic-border-focus)}.focus-indicator.dark:focus-within{box-shadow:var(--ic-border-focus)}@media (forced-colors: active){ic-input-component-container,.focus-indicator{transition:none}ic-input-component-container:focus-within{border:var(--ic-space-1px) solid Highlight;outline:0.125rem solid Highlight}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-space-1px) dashed GrayText}}";var InputContainer=function(){function InputContainer(hostRef){_classCallCheck(this,InputContainer),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.disabled=!1,this.readonly=!1}return _createClass(InputContainer,[{key:"render",value:function render(){var _class4;return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.H,null,(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(_class4={},_class4["component-container"]=!0,_class4.disabled=this.disabled,_class4.readonly=this.readonly,_class4)},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null)))}}]),InputContainer}();InputContainer.style="ic-input-container .component-container{display:flex;flex-direction:column}";var icon=((_icon={})[_types_50678b06_js__WEBPACK_IMPORTED_MODULE_9__.a.Warning]=_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__.R,_icon[_types_50678b06_js__WEBPACK_IMPORTED_MODULE_9__.a.Error]=_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__.S,_icon[_types_50678b06_js__WEBPACK_IMPORTED_MODULE_9__.a.Success]=_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__.P,_icon),InputValidation=function(){function InputValidation(hostRef){_classCallCheck(this,InputValidation),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}return _createClass(InputValidation,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__.a)([{prop:this.message,propName:"message"}],"Input Validation")}},{key:"render",value:function render(){var _class5,_class6,displayIcon=""!==this.status?icon[this.status]:"",id=(0,_helpers_3bba9e1e_js__WEBPACK_IMPORTED_MODULE_10__.Q)(this.for);return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class5={},_class5[this.status]=""!==this.status,_class5.fullwidth=this.fullWidth,_class5)},""!==displayIcon&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:(_class6={},_class6["status-icon"]=!0,_class6["icon-"+this.status]=!0,_class6),innerHTML:displayIcon}),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"caption",class:"statustext"},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{"aria-live":this.ariaLiveMode,id},this.message)),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"validation-message-adornment"}))}},{key:"el",get:function get(){return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),InputValidation}();InputValidation.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.fullwidth{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning)}ic-input-validation .statustext{flex-grow:1}"}}]);