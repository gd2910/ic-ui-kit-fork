"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8536],{"./dist/esm/ic-tab-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_group:()=>TabGroup});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-a77644e1.js"),_helpers_73666f14_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-73666f14.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var TabGroup=function(){function TabGroup(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabGroup),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.contextId="default",this.inline=!1,this.label=void 0,this.appearance="dark"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabGroup,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_73666f14_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.label,propName:"label"}],"Tab Group")}},{key:"render",value:function render(){var _class,appearance=this.appearance,label=this.label;return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.H,{role:"tablist","aria-label":label,class:(_class={},_class.light=appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Light,_class.inline=this.inline,_class)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-horizontal-scroll",{appearance:appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Default:appearance},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"tabs-container"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null))))}},{key:"host",get:function get(){return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),TabGroup}();TabGroup.style=":host{--border-bottom-color:var(--ic-architectural-300);display:block;margin-bottom:var(--ic-space-md);border-bottom:1px solid var(--border-bottom-color)}:host(.inline){margin-bottom:0;border-bottom:none}.light{--border-bottom-color:var(--ic-architectural-white)}.tabs-container{display:flex;flex-direction:row}.tabs-container::-webkit-scrollbar{display:none}"}}]);