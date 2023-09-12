"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4136],{"../web-components/dist/esm/ic-data-table.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_table:()=>DataTable});__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../web-components/dist/esm/index-36ab8165.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var DataTable=function(){function DataTable(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DataTable),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.r)(this,hostRef),this.SORT_ICONS={unsorted:'<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">\n    <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>\n</svg>',ascending:'<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" style="transform: rotate(-90deg);">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>',descending:'<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" style="transform: rotate(90deg)">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>'},this.isObject=function(value){return"object"==typeof value},this.notDefaultDensity=function(){return"default"!==_this.density},this.getCellContent=function(cell,dataType){switch(dataType){case"element":return;case"date":return(cell instanceof Date?cell:new Date(cell)).toLocaleDateString();default:return cell}},this.getCellAlignment=function(cell,alignment){if(_this.isObject(cell)&&Object.keys(cell).includes("cellAlignment"))return _this.getObjectValue(_this.getObjectValue(cell,"cellAlignment"),alignment)},this.createCells=function(row){var rowAlignment,rowEmphasis,rowValues=Object.values(row),rowKeys=Object.keys(row),headerIndex=rowKeys.indexOf("header");return headerIndex>-1&&(rowAlignment=_this.getObjectValue(rowValues[headerIndex],"rowAlignment"),rowEmphasis=_this.getObjectValue(rowValues[headerIndex],"emphasis")),rowValues.map((function(cell,index){var _class,_class2,_class3,_this$columns$index=_this.columns[index],columnAlignment=_this$columns$index.columnAlignment,dataType=_this$columns$index.dataType,emphasis=_this$columns$index.emphasis,cellValue=function cellValue(key){return _this.getObjectValue(cell,key)};return"header"===rowKeys[index]?(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("th",{scope:"row",colSpan:cellValue("colspan"),class:(_class={},_class["row-header"]=!0,_class["row-header-alignment-"+cellValue("cellAlignment")]=!!cellValue("cellAlignment"),_class["row-header-sticky"]=_this.stickyRowHeaders,_class)},cellValue("title")):(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("td",{innerHTML:"element"===dataType?cell:null,class:(_class2={},_class2["table-cell"]=!0,_class2["table-density-"+_this.density]=_this.notDefaultDensity(),_class2["data-type-"+dataType]=!0,_class2["cell-alignment-"+((null==columnAlignment?void 0:columnAlignment.horizontal)||_this.getCellAlignment(cell,"horizontal"))]=!!(null==columnAlignment?void 0:columnAlignment.horizontal)||!!_this.getCellAlignment(cell,"horizontal"),_class2["cell-alignment-"+((null==columnAlignment?void 0:columnAlignment.vertical)||rowAlignment||_this.getCellAlignment(cell,"vertical"))]=!!(null==columnAlignment?void 0:columnAlignment.vertical)||!!rowAlignment||!!_this.getCellAlignment(cell,"vertical"),_class2)},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-typography",{variant:"body",class:(_class3={},_class3["cell-emphasis-"+(_this.isObject(cell)&&cellValue("emphasis")||emphasis||rowEmphasis)]=_this.isObject(cell)&&!!cellValue("emphasis")||!!emphasis||!!rowEmphasis,_class3["text-"+_this.density]=_this.notDefaultDensity(),_class3)},_this.isObject(cell)&&"date"!==dataType?Object.keys(cell).includes("href")?(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-link",{href:cellValue("href")},cellValue("data")):cellValue("data"):_this.getCellContent(cell,dataType)))}))},this.createColumnHeaders=function(){return _this.columns.map((function(_ref){var _class4,_class5,_class6,_class7,cellAlignment=_ref.cellAlignment,colspan=_ref.colspan,key=_ref.key,title=_ref.title;return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("th",{scope:"col",class:(_class4={},_class4["column-header"]=!0,_class4["column-header-alignment-"+cellAlignment]=!!cellAlignment,_class4["table-density-"+_this.density]=_this.notDefaultDensity(),_class4),colSpan:colspan},_this.sortable?(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"column-header-inner-container"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-typography",{variant:"body",class:(_class5={},_class5["column-header-text"]=!0,_class5["text-"+_this.density]=_this.notDefaultDensity(),_class5)},title),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-button",{variant:"icon",id:"sort-button-"+key,"aria-label":_this.getSortButtonLabel(key),onClick:function onClick(){return _this.sortRows(key)},innerHTML:_this.SORT_ICONS[_this.sortedColumn===key?_this.sortedColumnOrder:"unsorted"],class:(_class6={},_class6["sort-button"]=!0,_class6["sort-button-unsorted"]=_this.sortedColumn!==key||"unsorted"===_this.sortedColumnOrder,_class6)})):(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-typography",{variant:"body",class:(_class7={},_class7["column-header-text"]=!0,_class7["text-"+_this.density]=_this.notDefaultDensity(),_class7)},title))}))},this.createRows=function(){return(_this.showPagination?_this.data.slice(_this.fromRow,_this.toRow):_this.data.slice()).sort(_this.sortable?_this.getSortFunction():void 0).map((function(row){var _class8;return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("tr",{onClick:function onClick(){return _this.selectedRow=_this.selectedRow!==row&&row},class:(_class8={},_class8["table-row"]=!0,_class8["table-row-selected"]=_this.selectedRow===row,_class8)},_this.createCells(row))}))},this.getObjectValue=function(cell,key){return Object.values(cell)[Object.keys(cell).indexOf(key)]},this.getSortButtonLabel=function(key){var label="",getNextSortOption=function getNextSortOption(option){var sortOrders=_this.sortOptions.sortOrders;return sortOrders[(sortOrders.indexOf(option)+1)%sortOrders.length]};if(_this.sortedColumn===key){var sortOption=getNextSortOption(_this.sortedColumnOrder);label="unsorted"!==sortOption?"Sort "+sortOption:"Remove sort"}else label="Sort "+getNextSortOption("unsorted");return label},this.getComparison=function(targetRow,comparisonRow){var targetRowValue=targetRow[_this.sortedColumn],comparisonRowValue=comparisonRow[_this.sortedColumn];return"date"===_this.columns.find((function(col){return col.key===_this.sortedColumn})).dataType?new Date(targetRowValue).valueOf()-new Date(comparisonRowValue).valueOf():String(_this.isObject(targetRowValue)?Object.values(targetRowValue)[0]:targetRowValue).localeCompare(String(_this.isObject(comparisonRowValue)?Object.values(comparisonRowValue)[0]:comparisonRowValue),void 0,{numeric:!0,sensitivity:"base"})},this.getSortFunction=function(){switch(_this.sortedColumnOrder){case"ascending":return function(a,b){return _this.getComparison(a,b)};case"descending":return function(a,b){return _this.getComparison(b,a)};default:return}},this.sortRows=function(column){var sortButton=_this.el.shadowRoot.querySelector("#sort-button-"+column),sortOrders=_this.sortOptions.sortOrders;if(column!==_this.sortedColumn){if(_this.sortedColumn)_this.el.shadowRoot.querySelector("#sort-button-"+_this.sortedColumn).updateAriaLabel(_this.getSortButtonLabel(column));_this.sortedColumn=column,_this.sortedColumnOrder="unsorted"}var nextSortOrderIndex=sortOrders.indexOf(_this.sortedColumnOrder)+1;nextSortOrderIndex>sortOrders.length-1&&(nextSortOrderIndex=0),_this.sortedColumnOrder=sortOrders[nextSortOrderIndex],sortButton.updateAriaLabel(_this.getSortButtonLabel(column))},this.updateScrollOffset=function(){_this.scrollOffset=_this.el.shadowRoot.querySelector(".table-row-container").scrollTop},this.fromRow=0,this.previousRowsPerPage=void 0,this.rowsPerPage=void 0,this.scrollable=!1,this.scrollOffset=0,this.selectedRow=void 0,this.sortedColumn=void 0,this.sortedColumnOrder=void 0,this.toRow=void 0,this.caption=void 0,this.columns=void 0,this.data=void 0,this.density="default",this.embedded=!1,this.hideColumnHeaders=!1,this.paginationOptions={itemsPerPage:[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}],type:"page",control:"simple",itemsPerPageControl:!0,goToPageControl:!0,alignment:"right"},this.showPagination=!1,this.sortable=!1,this.sortOptions={sortOrders:["unsorted","ascending","descending"],defaultColumn:""},this.stickyColumnHeaders=!1,this.stickyRowHeaders=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DataTable,[{key:"componentWillLoad",value:function componentWillLoad(){this.rowsPerPage=Number(this.paginationOptions.itemsPerPage[0].value),this.previousRowsPerPage=this.rowsPerPage,this.toRow=this.rowsPerPage,this.sortedColumn=this.sortOptions.defaultColumn,this.sortedColumnOrder=this.sortOptions.sortOrders[0]}},{key:"componentDidLoad",value:function componentDidLoad(){var tableElement=this.el.shadowRoot.querySelector("table"),tableContainer=this.el.shadowRoot.querySelector(".table-container");((null==tableElement?void 0:tableElement.clientHeight)>(null==tableContainer?void 0:tableContainer.clientHeight)||(null==tableElement?void 0:tableElement.clientWidth)>(null==tableContainer?void 0:tableContainer.clientWidth))&&(this.scrollable=!0)}},{key:"handleItemsPerPageChange",value:function handleItemsPerPageChange(ev){this.previousRowsPerPage=this.rowsPerPage,this.rowsPerPage=ev.detail.value}},{key:"handlePageChange",value:function handlePageChange(ev){this.fromRow=(ev.detail.value-1)*this.rowsPerPage,this.toRow=this.fromRow+this.rowsPerPage;var tableRowsContainer=this.el.shadowRoot.querySelector(".table-row-container");this.previousRowsPerPage===this.rowsPerPage?tableRowsContainer.scrollTop=0:this.previousRowsPerPage<this.rowsPerPage?(tableRowsContainer.scrollTop=this.scrollOffset,this.previousRowsPerPage=this.rowsPerPage):this.previousRowsPerPage=this.rowsPerPage}},{key:"clickListener",value:function clickListener(ev){ev.target!==this.el&&(this.selectedRow=void 0)}},{key:"render",value:function render(){var _class9,_class10,caption=this.caption,createColumnHeaders=this.createColumnHeaders,createRows=this.createRows,data=this.data,hideColumnHeaders=this.hideColumnHeaders,paginationOptions=this.paginationOptions,scrollable=this.scrollable,scrollOffset=this.scrollOffset,showPagination=this.showPagination,sortable=this.sortable,sortedColumnOrder=this.sortedColumnOrder,sortedColumn=this.sortedColumn,stickyColumnHeaders=this.stickyColumnHeaders,updateScrollOffset=this.updateScrollOffset;return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"table-container"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:(_class9={},_class9["table-row-container"]=!0,_class9.scrollable=scrollable,_class9),tabIndex:scrollable?0:null,onScroll:updateScrollOffset},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("table",null,(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("caption",{class:"table-caption"},caption),!hideColumnHeaders&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("thead",{class:(_class10={},_class10["column-header-sticky"]=stickyColumnHeaders,_class10["column-header-overlay"]=stickyColumnHeaders&&0!==scrollOffset,_class10)},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("tr",null,createColumnHeaders())),(null==data?void 0:data.length)>0&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("tbody",null,createRows()))),showPagination&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"pagination-container"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-pagination-bar",{totalItems:data.length,paginationType:paginationOptions.type,paginationControl:paginationOptions.control,showItemsPerPageControl:paginationOptions.itemsPerPageControl,showGoToPageControl:paginationOptions.goToPageControl,itemsPerPageOptions:paginationOptions.itemsPerPage,alignment:paginationOptions.alignment})),sortable&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"screen-reader-sort-text","aria-live":"polite"},"unsorted"!==sortedColumnOrder&&sortedColumn?sortedColumn+" sorted "+sortedColumnOrder:"table unsorted"))}},{key:"el",get:function get(){return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_17__.g)(this)}}]),DataTable}();DataTable.style=':host{position:relative;display:block;height:100%;max-height:100%}.table-container{position:relative;height:calc(100% - var(--ic-space-xxxs))}.table-row-container{position:relative;height:100%;overflow:auto;transition:var(--ic-easing-transition-fast);overflow-anchor:none}:host([show-pagination="true"]) .table-row-container{height:calc(100% - 3.5625rem)}table{table-layout:fixed;border-spacing:0;width:100%}.table-row-container:focus{outline:none;box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast);z-index:1}:host([embedded="true"]) .table-container{border:var(--ic-border-light)}.column-header-sticky{position:sticky;top:0;z-index:1}.column-header-overlay{position:sticky;top:0;z-index:1;box-shadow:0 0.375rem var(--ic-space-xs) calc(var(--ic-space-xxs * -1))\n    rgb(0 0 0 / 20%)}.row-header-sticky{position:sticky;left:0}.column-header,.table-row{box-sizing:border-box}.table-row-selected{background-color:var(--ic-table-row-selected) !important}.sort-button{margin-left:auto}.sort-button:hover{background-color:var(--ic-action-dark-bg-hover)}.sort-button:active{background-color:var(--ic-action-dark-bg-active)}.sort-button svg{color:var(--ic-architectural-black)}.sort-button-unsorted svg{color:var(--ic-color-tertiary-text)}.table-density-dense{padding:var(--ic-space-xxs) var(--ic-space-xs) !important}.text-dense{font-size:var(--ic-font-size-label)}.table-density-spacious{padding:0.625rem var(--ic-space-xs) !important}.text-spacious{font-size:1.125rem}.column-header-text{font-weight:var(--ic-font-weight-bold)}.column-header,.row-header{text-align:left;padding:var(--ic-space-xs);background-color:var(--ic-architectural-40);border-right:var(--ic-border-light);border-bottom:var(--ic-border-light)}.column-header:last-child{border-right:none}.scrollable .column-header:last-child{border-right:var(--ic-border-light) !important}:host([embedded="true"]) tr:last-child .table-cell,:host([embedded="true"]) tr:last-child .row-header{border-bottom:none}.column-header-alignment-left,.row-header-alignment-left,.cell-alignment-left{text-align:left !important}.column-header-alignment-right,.row-header-alignment-right,.cell-alignment-right{text-align:right !important}.column-header-alignment-center,.row-header-alignment-center,.cell-alignment-center{text-align:center !important}.table-row:nth-child(even){background-color:var(--ic-architectural-20)}.table-cell{padding:var(--ic-space-xs);border-bottom:solid var(--ic-architectural-100) var(--ic-space-1px)}.data-type-string{text-align:left;vertical-align:top}.data-type-number,.data-type-date{text-align:right;vertical-align:top}.cell-alignment-top{vertical-align:top}.cell-alignment-middle{vertical-align:middle}.cell-alignment-bottom{vertical-align:bottom}.cell-emphasis-low{color:var(--ic-color-secondary-text)}.cell-emphasis-high{font-weight:var(--ic-font-weight-bold)}.pagination-container{background-color:var(--ic-architectural-40);border-top:var(--ic-border-light)}.screen-reader-sort-text,.table-caption{position:absolute;left:-100rem}.table-cell,.column-header,.row-header{word-wrap:break-word;white-space:pre-wrap}@media screen and (min-width: 576px){.column-header-inner-container{display:flex;align-items:center}}'}}]);