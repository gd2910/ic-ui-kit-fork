"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4136],{"../web-components/dist/esm/ic-data-table.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_table:()=>DataTable});__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../web-components/dist/esm/index-fd30b77e.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var DataTable=function(){function DataTable(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DataTable),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.r)(this,hostRef),this.SORT_ICONS={unsorted:'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ImportExportIcon" aria-label="fontSize medium">\n    <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>\n</svg>',ascending:'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon" aria-label="fontSize medium" style="transform: rotate(-90deg);">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>',descending:'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon" aria-label="fontSize medium" style="transform: rotate(90deg)">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>'},this.isObject=function(value){return"object"==typeof value},this.createCells=function(row){var rowAlignment,rowEmphasis,rowValues=Object.values(row),rowKeys=Object.keys(row),headerIndex=rowKeys.indexOf("header");return headerIndex>-1&&(rowAlignment=_this.getObjectValue(rowValues[headerIndex],"rowAlignment"),rowEmphasis=_this.getObjectValue(rowValues[headerIndex],"emphasis")),rowValues.map((function(cell,index){var _class,_class2,_class3,_a,_b,_c,_d,column=_this.columns[index],cellValue=function cellValue(key){return _this.getObjectValue(cell,key)},getAlignment=function getAlignment(alignment,returnValue){if(_this.isObject(cell)&&Object.keys(cell).includes("cellAlignment")){var alignmentVal=_this.getObjectValue(cellValue("cellAlignment"),alignment);return returnValue?alignmentVal:void 0!==alignmentVal}};return"header"===rowKeys[index]?(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("th",{scope:"row",colSpan:cellValue("colspan"),class:(_class={},_class["row-header"]=!0,_class["row-header-alignment-"+cellValue("cellAlignment")]=void 0!==cellValue("cellAlignment"),_class["row-header-sticky"]=_this.stickyRowHeaders,_class)},cellValue("title")):(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("td",{innerHTML:"element"===(null==column?void 0:column.dataType)?cell:null,class:(_class2={},_class2["table-cell"]=!0,_class2["data-type-"+(null==column?void 0:column.dataType)]=!0,_class2["cell-alignment-"+((null===(_a=null==column?void 0:column.columnAlignment)||void 0===_a?void 0:_a.horizontal)||getAlignment("horizontal",!0))]=!!(null===(_b=null==column?void 0:column.columnAlignment)||void 0===_b?void 0:_b.horizontal)||getAlignment("horizontal"),_class2["cell-alignment-"+((null===(_c=null==column?void 0:column.columnAlignment)||void 0===_c?void 0:_c.vertical)||rowAlignment||getAlignment("vertical",!0))]=!!(null===(_d=null==column?void 0:column.columnAlignment)||void 0===_d?void 0:_d.vertical)||!!rowAlignment||getAlignment("vertical"),_class2)},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-typography",{variant:"body",class:(_class3={},_class3["cell-emphasis-"+(_this.isObject(cell)&&cellValue("emphasis")||(null==column?void 0:column.emphasis)||rowEmphasis)]=_this.isObject(cell)&&!!cellValue("emphasis")||!!(null==column?void 0:column.emphasis)||!!rowEmphasis,_class3)},_this.isObject(cell)?Object.keys(cell).includes("href")?(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-link",{href:cellValue("href")},cellValue("data")):cellValue("data"):"element"!==(null==column?void 0:column.dataType)&&cell))}))},this.createColumnHeaders=function(){return _this.columns.map((function(_ref){var _class4,_class5,cellAlignment=_ref.cellAlignment,colspan=_ref.colspan,key=_ref.key,title=_ref.title;return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("th",{scope:"col",class:(_class4={},_class4["column-header"]=!0,_class4["column-header-alignment-"+cellAlignment]=!!cellAlignment,_class4["table-density-"+_this.density]=!0,_class4),colSpan:colspan},_this.sortable?(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"column-header-inner-container"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-typography",{variant:"subtitle-large"},title),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-button",{variant:"icon",id:"sort-button-"+key,"aria-label":_this.getSortButtonLabel(key),onClick:function onClick(){return _this.sortRows(key)},innerHTML:_this.SORT_ICONS[_this.sortedColumn===key?_this.sortedColumnOrder:"unsorted"],class:(_class5={},_class5["sort-button"]=!0,_class5["sort-button-unsorted"]=_this.sortedColumn!==key||"unsorted"===_this.sortedColumnOrder,_class5)})):(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-typography",{variant:"subtitle-large"},title))}))},this.createRows=function(){return(_this.showPagination?_this.data.slice(_this.fromRow,_this.toRow):_this.data.slice()).sort(_this.sortable?_this.getSortFunction():void 0).map((function(row){var _class6;return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("tr",{class:(_class6={},_class6["table-row"]=!0,_class6["table-density-"+_this.density]=!0,_class6)},_this.createCells(row))}))},this.getObjectValue=function(cell,key){return Object.values(cell)[Object.keys(cell).indexOf(key)]},this.getSortButtonLabel=function(key){var label="",getNextSortOption=function getNextSortOption(option){var sortOrders=_this.sortOptions.sortOrders;return sortOrders[(sortOrders.indexOf(option)+1)%sortOrders.length]};if(_this.sortedColumn===key){var sortOption=getNextSortOption(_this.sortedColumnOrder);label="unsorted"!==sortOption?"Sort "+sortOption:"Remove sort"}else label="Sort "+getNextSortOption("unsorted");return label},this.getComparison=function(targetRow,comparisonRow){var targetRowValue=targetRow[_this.sortedColumn],comparisonRowValue=comparisonRow[_this.sortedColumn];return String(_this.isObject(targetRowValue)?Object.values(targetRowValue)[0]:targetRowValue).localeCompare(String(_this.isObject(comparisonRowValue)?Object.values(comparisonRowValue)[0]:comparisonRowValue),void 0,{numeric:!0,sensitivity:"base"})},this.getSortFunction=function(){switch(_this.sortedColumnOrder){case"ascending":return function(a,b){return _this.getComparison(a,b)};case"descending":return function(a,b){return _this.getComparison(b,a)};default:return}},this.sortRows=function(column){var sortButton=_this.el.shadowRoot.querySelector("#sort-button-"+column),sortOrders=_this.sortOptions.sortOrders;if(column){column!==_this.sortedColumn&&(_this.sortedColumn=column,_this.sortedColumnOrder="unsorted");var nextSortOrderIndex=sortOrders.indexOf(_this.sortedColumnOrder)+1;nextSortOrderIndex>sortOrders.length-1&&(nextSortOrderIndex=0),_this.sortedColumnOrder=sortOrders[nextSortOrderIndex],sortButton.updateAriaLabel(_this.getSortButtonLabel(column))}},this.updateScrollOffset=function(){_this.scrollOffset=_this.el.shadowRoot.querySelector(".table-row-container").scrollTop},this.fromRow=0,this.scrollable=!1,this.scrollOffset=0,this.rowsPerPage=void 0,this.previousRowsPerPage=void 0,this.toRow=void 0,this.sortedColumn=void 0,this.sortedColumnOrder=void 0,this.caption=void 0,this.columns=void 0,this.data=void 0,this.density="default",this.embedded=!1,this.hideColumnHeaders=!1,this.paginationOptions={itemsPerPage:[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}],type:"page",control:"simple",itemsPerPageControl:!0,goToPageControl:!0,alignment:"right"},this.showPagination=!1,this.sortable=!1,this.sortOptions={sortOrders:["unsorted","ascending","descending"],defaultColumn:""},this.stickyColumnHeaders=!1,this.stickyRowHeaders=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DataTable,[{key:"componentWillLoad",value:function componentWillLoad(){this.rowsPerPage=Number(this.paginationOptions.itemsPerPage[0].value),this.previousRowsPerPage=this.rowsPerPage,this.toRow=this.rowsPerPage,this.sortedColumn=this.sortOptions.defaultColumn,this.sortedColumnOrder=this.sortOptions.sortOrders[0]}},{key:"componentDidLoad",value:function componentDidLoad(){var tableElement=this.el.shadowRoot.querySelector("table"),tableContainer=this.el.shadowRoot.querySelector(".table-container");(null==tableElement?void 0:tableElement.clientHeight)>(null==tableContainer?void 0:tableContainer.clientHeight)&&(this.scrollable=!0)}},{key:"handleItemsPerPageChange",value:function handleItemsPerPageChange(ev){this.previousRowsPerPage=this.rowsPerPage,this.rowsPerPage=ev.detail.value}},{key:"handlePageChange",value:function handlePageChange(ev){this.fromRow=(ev.detail.value-1)*this.rowsPerPage,this.toRow=this.fromRow+this.rowsPerPage;var tableRowsContainer=this.el.shadowRoot.querySelector(".table-row-container");this.previousRowsPerPage===this.rowsPerPage?tableRowsContainer.scrollTop=0:this.previousRowsPerPage<this.rowsPerPage?(tableRowsContainer.scrollTop=this.scrollOffset,this.previousRowsPerPage=this.rowsPerPage):this.previousRowsPerPage=this.rowsPerPage}},{key:"render",value:function render(){var _class7,_class8,caption=this.caption,createColumnHeaders=this.createColumnHeaders,createRows=this.createRows,data=this.data,hideColumnHeaders=this.hideColumnHeaders,paginationOptions=this.paginationOptions,scrollable=this.scrollable,scrollOffset=this.scrollOffset,showPagination=this.showPagination,sortable=this.sortable,sortedColumnOrder=this.sortedColumnOrder,sortedColumn=this.sortedColumn,stickyColumnHeaders=this.stickyColumnHeaders,updateScrollOffset=this.updateScrollOffset;return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"table-container"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:(_class7={},_class7["table-row-container"]=!0,_class7.scrollable=scrollable,_class7),tabIndex:scrollable?0:null,onScroll:updateScrollOffset},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("table",null,(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("caption",{class:"table-caption"},caption),!hideColumnHeaders&&(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("thead",{class:(_class8={},_class8["column-header-sticky"]=stickyColumnHeaders,_class8["column-header-overlay"]=stickyColumnHeaders&&0!==scrollOffset,_class8)},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("tr",null,createColumnHeaders())),(null==data?void 0:data.length)>0&&(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("tbody",null,createRows()))),showPagination&&(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"pagination-container"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-pagination-bar",{totalItems:data.length,paginationType:paginationOptions.type,paginationControl:paginationOptions.control,showItemsPerPageControl:paginationOptions.itemsPerPageControl,showGoToPageControl:paginationOptions.goToPageControl,itemsPerPageOptions:paginationOptions.itemsPerPage,alignment:paginationOptions.alignment})),sortable&&(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"screen-reader-sort-text","aria-live":"polite"},"unsorted"!==sortedColumnOrder&&sortedColumn?sortedColumn+" sorted "+sortedColumnOrder:"table unsorted"))}},{key:"el",get:function get(){return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_15__.g)(this)}}]),DataTable}();DataTable.style=':host{position:relative;display:block;height:100%;max-height:100%}.table-container{position:relative;height:calc(100% - var(--ic-space-xxxs))}.table-row-container{position:relative;height:100%;overflow:auto;transition:var(--ic-easing-transition-fast);overflow-anchor:none}:host([show-pagination="true"]) .table-row-container{height:calc(100% - 3.5625rem)}table{table-layout:fixed;border-spacing:0;width:100%}.table-row-container:focus{outline:none;box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast);z-index:1}:host([embedded="true"]) .table-container{border:solid var(--ic-architectural-200) var(--ic-space-1px)}.column-header-sticky{position:sticky;top:0;z-index:1}.column-header-overlay{position:sticky;top:0;z-index:1;box-shadow:0 0.375rem var(--ic-space-xs) calc(var(--ic-space-xxs * -1))\n    rgb(0 0 0 / 20%)}.row-header-sticky{position:sticky;left:0}.column-header,.table-row{box-sizing:border-box}.sort-button{margin-left:auto}.sort-button:hover{background-color:var(--ic-action-dark-bg-hover)}.sort-button:active{background-color:var(--ic-action-dark-bg-active)}.sort-button svg{color:black}.sort-button-unsorted svg{color:var(--ic-color-tertiary-text)}.table-density-default{height:2.5rem}.table-density-dense{height:var(--ic-space-xl)}.table-density-spacious{height:var(--ic-space-xxl)}.column-header,.row-header{text-align:left;padding:var(--ic-space-xs);background-color:var(--ic-architectural-40);border-right:solid var(--ic-architectural-200) var(--ic-space-1px);border-bottom:solid var(--ic-architectural-200) var(--ic-space-1px)}.column-header:last-child{border-right:none}.scrollable .column-header:last-child{border-right:solid var(--ic-architectural-200) var(--ic-space-1px) !important}:host([embedded="true"]) tr:last-child .table-cell,:host([embedded="true"]) tr:last-child .row-header{border-bottom:none}.column-header-alignment-left,.row-header-alignment-left{text-align:left}.column-header-alignment-right,.row-header-alignment-right{text-align:right}.column-header-alignment-center,.row-header-alignment-center{text-align:center}.table-row:nth-child(even){background-color:var(--ic-architectural-20)}.table-cell{padding:var(--ic-space-xs);border-bottom:solid var(--ic-architectural-100) var(--ic-space-1px)}.data-type-string{text-align:left;vertical-align:top}.data-type-number{text-align:right;vertical-align:top}.cell-alignment-left{text-align:left}.cell-alignment-right{text-align:right}.cell-alignment-center{text-align:center}.cell-alignment-top{vertical-align:top}.cell-alignment-middle{vertical-align:middle}.cell-alignment-bottom{vertical-align:bottom}.cell-emphasis-low{color:var(--ic-color-secondary-text)}.cell-emphasis-high{font-weight:700}.pagination-container{background-color:var(--ic-architectural-40);border-top:solid var(--ic-architectural-200) var(--ic-space-1px)}.screen-reader-sort-text,.table-caption{position:absolute;left:-100rem}.table-cell,.column-header,.row-header{word-wrap:break-word;white-space:pre-wrap}@media screen and (min-width: 576px){.column-header-inner-container{display:flex;align-items:center}}'}}]);