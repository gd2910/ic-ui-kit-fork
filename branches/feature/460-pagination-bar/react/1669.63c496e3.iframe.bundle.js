"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[1669],{"../web-components/dist/esm/ic-pagination-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination_bar:()=>PaginationBar});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.number.is-nan.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../web-components/dist/esm/index-3b144b17.js"),_helpers_2d3dffa8_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../web-components/dist/esm/helpers-2d3dffa8.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var PaginationBar=function(){function PaginationBar(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PaginationBar),(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.r)(this,hostRef),this.icPageChange=(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.c)(this,"icPageChange",7),this.icItemsPerPageChange=(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.c)(this,"icItemsPerPageChange",7),this.PAGINATION="ic-pagination",this.TEXT_FIELD="ic-text-field",this.TOOLTIP="ic-tooltip",this.INVALID_PAGE_ERROR="Please enter a valid page",this.NAN_ERROR="Please enter a number",this.setDefaultItemsPerPageOptions=function(){_this.itemsPerPageOptions=_this.totalItems<=100?[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"All",value:String(_this.totalItems)}]:[{label:"25",value:"25"},{label:"100",value:"100"},{label:"1000",value:"1000"},{label:"All",value:String(_this.totalItems)}]},this.trimItemsPerPageOptions=function(){_this.itemsPerPageOptions=_this.itemsPerPageOptions.slice(0,3),_this.itemsPerPageOptions.push({label:"All",value:String(_this.totalItems)});for(var i=0;i<_this.itemsPerPageOptions.length-1;i++)_this.totalItems<Number(_this.itemsPerPageOptions[i].value)&&_this.itemsPerPageOptions.splice(i,_this.itemsPerPageOptions.length-(i+1))},this.setDefaultItemsPerPage=function(){_this.itemsPerPage=_this.itemsPerPageOptions[0].value},this.setNumberPages=function(){_this.totalPages=Math.ceil(_this.totalItems/Number(_this.itemsPerPage))},this.setUpperBound=function(){_this.upperBound=Math.min(_this.lowerBound+Number(_this.itemsPerPage)-1,_this.totalItems)},this.changeItemsPerPage=function(){var value=_this.el.shadowRoot.querySelector("ic-select").value;_this.itemsPerPage=value,_this.setNumberPages(),_this.lowerBound=1,_this.setUpperBound(),_this.el.shadowRoot.querySelector(_this.PAGINATION).setCurrentPage(1),_this.currentPage=1,_this.icPageChange.emit({value:1}),_this.icItemsPerPageChange.emit({value:Number(_this.itemsPerPage)})},this.changePage=function(page){1===page?(_this.currentPage=1,_this.lowerBound=1,_this.setUpperBound()):(_this.currentPage=page,_this.lowerBound=(page-1)*Number(_this.itemsPerPage)+1,_this.setUpperBound())},this.goToPage=function(){var input=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD),page=Number(input.value),tooltip=_this.el.shadowRoot.querySelector("ic-tooltip");page<=_this.totalPages&&page>0?(_this.changePage(page),_this.el.shadowRoot.querySelector(_this.PAGINATION).setCurrentPage(page),_this.currentPage=page,input.value="",_this.icPageChange.emit({value:page}),tooltip.displayTooltip(!1,!1),input.validationStatus=""):(_this.inputError=_this.INVALID_PAGE_ERROR,input.validationStatus="error",input.setFocus())},this.handleKeydown=function(ev){var tooltip=_this.el.shadowRoot.querySelector(_this.TOOLTIP),textField=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD);"Enter"===ev.key?"error"===textField.validationStatus?(tooltip.displayTooltip(!1,!1),setTimeout((function(){return tooltip.displayTooltip(!0,!0)}),50)):_this.goToPage():"Backspace"===ev.key?(tooltip.displayTooltip(!1,!0),textField.validationStatus=""):(tooltip.displayTooltip(!1,!1),textField.validationStatus="")},this.handleKeyUp=function(ev){var tooltip=_this.el.shadowRoot.querySelector(_this.TOOLTIP),textField=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD),inputValue=parseInt(textField.value);Number.isNaN(inputValue)&&"Backspace"!==ev.key&&(_this.inputError=_this.NAN_ERROR,tooltip.displayTooltip(!0,!1),textField.validationStatus="error")},this.handleInputChange=function(){var tooltip=_this.el.shadowRoot.querySelector(_this.TOOLTIP),textField=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD),inputValue=parseInt(textField.value);(inputValue>_this.totalPages||inputValue<=0)&&(_this.inputError=_this.INVALID_PAGE_ERROR,tooltip.displayTooltip(!0,!0),textField.validationStatus="error",textField.focus())},this.setGoToPageInputStyles=function(){var _a,_b,textField=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".go-to-page-input");if(void 0!==textField){var input=null===(_b=null==textField?void 0:textField.shadowRoot)||void 0===_b?void 0:_b.querySelector("input");void 0!==input&&(input.style.textAlign="center",input.style.padding="0")}},this.handleBlur=function(){var _a,_b,textField=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(_this.TEXT_FIELD),tooltip=null===(_b=_this.el.shadowRoot)||void 0===_b?void 0:_b.querySelector(_this.TOOLTIP);(Number(textField.value)<=_this.totalPages&&Number(textField.value)>0||""===textField.value)&&(textField.validationStatus=""),tooltip.displayTooltip(!1,!1)},this.handleFocus=function(){var _a,_b,textField=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(_this.TEXT_FIELD),tooltip=null===(_b=_this.el.shadowRoot)||void 0===_b?void 0:_b.querySelector(_this.TOOLTIP);"error"===textField.validationStatus&&tooltip.displayTooltip(!0,!0)},this.paginationShouldWrap=function(){var pagination=_this.el.shadowRoot.querySelector(_this.PAGINATION);"simple"===_this.paginationControl&&(pagination.clientHeight>63?_this.paginationWrapped=!0:_this.paginationWrapped=!1)},this.resizeObserver=null,this.resizeObserverCallback=function(currSize){(currSize-_this.paginationWidth>50||currSize-_this.paginationWidth<-50)&&(_this.paginationWidth=currSize,_this.paginationShouldWrap())},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=_this.paginationBarEl.clientWidth;_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.paginationBarEl)},this.totalItems=void 0,this.paginationType="page",this.paginationControl="simple",this.itemLabel="Item",this.pageLabel="Page",this.itemsPerPageOptions=void 0,this.showItemsPerPageControl=!1,this.showItemsPerPage=!0,this.showGoToPageControl=!1,this.alignment="right",this.appearance="default",this.itemsPerPage=void 0,this.totalPages=void 0,this.currentPage=1,this.lowerBound=1,this.upperBound=void 0,this.inputError="Please enter a valid page",this.paginationWrapped=!1,this.paginationWidth=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PaginationBar,[{key:"pageChangeHandler",value:function pageChangeHandler(ev){var page=ev.detail.value;this.changePage(page)}},{key:"componentWillLoad",value:function componentWillLoad(){void 0!==this.itemsPerPageOptions&&null!==this.itemsPerPageOptions||this.setDefaultItemsPerPageOptions(),this.trimItemsPerPageOptions(),this.setDefaultItemsPerPage(),this.setNumberPages(),this.setUpperBound()}},{key:"componentDidLoad",value:function componentDidLoad(){this.paginationWidth=this.paginationBarEl.clientWidth,(0,_helpers_2d3dffa8_js__WEBPACK_IMPORTED_MODULE_13__.c)(this.runResizeObserver),this.setGoToPageInputStyles(),this.paginationShouldWrap()}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"render",value:function render(){var _class,_class2,_class3,_class4,_class5,_class6,_this2=this,appearance=this.appearance,alignment=this.alignment,itemsPerPageOptions=this.itemsPerPageOptions,paginationControl=this.paginationControl,paginationType=this.paginationType,showItemsPerPage=this.showItemsPerPage,showItemsPerPageControl=this.showItemsPerPageControl,showGoToPageControl=this.showGoToPageControl;return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:(_class={},_class["pagination-bar"]=!0,_class["pagination-bar-"+alignment]=!0,_class),ref:function ref(el){return _this2.paginationBarEl=el}},showItemsPerPage||showItemsPerPageControl?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:"item-controls"},showItemsPerPageControl?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:"items-per-page-holder"},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-typography",{class:(_class2={},_class2["pagination-text-"+appearance]=!0,_class2["items-per-page-control-label"]=!0,_class2),variant:"label"},this.itemLabel,"s per ",this.pageLabel.toLowerCase()),(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-select",{small:!0,label:"items-per-page-input",class:"items-per-page-input",hideLabel:!0,options:itemsPerPageOptions,value:this.itemsPerPage,onIcChange:function onIcChange(){return _this2.changeItemsPerPage()}})):null,showItemsPerPage&&"data"===paginationType?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-typography",{class:(_class3={},_class3["pagination-text-"+appearance]=!0,_class3["item-pagination-label"]=!0,_class3),variant:"label"},this.lowerBound," - ",this.upperBound," of ",this.totalItems," ",this.itemLabel.toLowerCase(),"s"):showItemsPerPage?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-typography",{class:(_class4={},_class4["pagination-text-"+appearance]=!0,_class4["page-pagination-label"]=!0,_class4),variant:"label"},this.pageLabel," ",this.currentPage," of ",this.totalPages):null):null,(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:(_class5={},_class5["pagination-controls"]=!0,_class5["pagination-controls-wrap"]=this.paginationWrapped,_class5)},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:"pagination-holder"},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-pagination",{appearance,type:paginationControl,pages:this.totalPages})),showGoToPageControl?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:"go-to-page-holder"},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-typography",{class:(_class6={},_class6["pagination-text-"+appearance]=!0,_class6),variant:"label"},"Go to ",this.pageLabel.toLowerCase()),(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-tooltip",{label:this.inputError,target:"#go-to-page-input",disableHover:!0,disableClick:!0},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-text-field",{type:"number",small:!0,label:"go-to-page-input",class:"go-to-page-input",id:"go-to-page-input",hideLabel:!0,onKeyDown:function onKeyDown(ev){return _this2.handleKeydown(ev)},onKeyUp:function onKeyUp(ev){return _this2.handleKeyUp(ev)},onInput:function onInput(){return _this2.handleInputChange()},max:this.totalPages,min:"1",validationInlineInternal:!0,onBlur:function onBlur(){return _this2.handleBlur()},onFocus:function onFocus(){return _this2.handleFocus()}})),(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.h)("ic-button",{appearance,variant:"secondary",onClick:function onClick(){return _this2.goToPage()},size:"small",class:"go-to-page-button"},"Go")):null))}},{key:"el",get:function get(){return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_12__.g)(this)}}]),PaginationBar}();PaginationBar.style=":host(){display:block}.pagination-bar{height:3.5rem;display:flex;align-items:center;justify-content:flex-end;gap:var(--ic-space-xl);padding:var(--ic-space-xs)}.pagination-bar-left{justify-content:flex-start}.item-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-bar-space-between .item-controls{margin-right:auto}.items-per-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.items-per-page-input{--input-width:5rem}.pagination-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-controls-wrap{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-space-between .pagination-controls{margin-left:auto}.go-to-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.go-to-page-input{--input-width:var(--ic-space-xl)}.go-to-page-button{--min-width:var(--ic-space-xl)}.pagination-text-default,.pagination-text-dark,.pagination-text-light{white-space:nowrap}.pagination-text-light{color:var(--ic-color-white-text)}@media screen and (max-width: 768px){.pagination-bar{flex-direction:column;align-items:flex-end;height:-moz-fit-content;height:fit-content;gap:var(--ic-space-xs)}.pagination-bar-left{align-items:flex-start}}@media screen and (max-width: 320px){.item-controls,.pagination-controls{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-left .item-controls,.pagination-bar-left .pagination-controls,.pagination-bar-space-between .item-controls,.pagination-bar-space-between .pagination-controls{align-items:flex-start}}"}}]);