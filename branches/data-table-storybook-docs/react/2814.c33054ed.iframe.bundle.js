"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2814],{"../web-components/dist/esm/ic-tab-panel.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_panel:()=>TabPanel});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../web-components/dist/esm/index-36ab8165.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var TabPanel=function(){function TabPanel(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabPanel),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.tabPanelCreated=(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"tabPanelCreated",7),this.tabPanelRemoved=(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"tabPanelRemoved",7),this.appearance="dark",this.contextId="default",this.panelId=void 0,this.selectedTab=void 0,this.tabPosition=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabPanel,[{key:"connectedCallback",value:function connectedCallback(){this.tabPanelCreated.emit(this.host)}},{key:"disconnectedCallback",value:function disconnectedCallback(){var tabContext=document.querySelector("ic-tab-context[context-id="+this.contextId+"]");tabContext&&tabContext.tabRemovedHandler()}},{key:"render",value:function render(){var _class,panelId=this.panelId,selectedTab=this.selectedTab,appearance=this.appearance;return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class["ic-tab-panel-light"]=appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_8__.I.Light,_class),role:"tabpanel",hidden:void 0===panelId||void 0===selectedTab||!(panelId===selectedTab)},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null)))}},{key:"host",get:function get(){return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),TabPanel}();TabPanel.style=":host{display:block}:host(.ic-tab-panel-light){color:white}"},"../web-components/dist/esm/types-dd515332.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>IcInformationStatus}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);