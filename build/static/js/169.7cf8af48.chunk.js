(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[169],{2162:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(14),r=t(16),l=t(15),s=t(0),c=t.n(s),o=t(990),d=t(991),u=t(992),m=t(178),p=t(995),f=t(793),g=t(795),h=t(791),v=t(790),b=t(798),E=(t(797),t(177)),w=t(841),S=t(317),z=t(446),y=t(274),N=t(21),P=(t(829),t(803),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"By Date",field:"date",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.customerId))}},{headerName:"Module/Featurette",field:"module",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.first_name))}},{headerName:"Date",field:"date",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.last_name))}},{headerName:"System Mails",field:"systememail",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.customer_email))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success ml-2"},e.data.status):"Inactive"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(S.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return N.a.push("/app/contactUs/customer/editCustomer/".concat(a.data._id))}}),c.a.createElement(z.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,i=a.defaultColDef;return c.a.createElement(o.a,{className:"app-user-list"},c.a.createElement(d.a,{sm:"12"}),c.a.createElement(d.a,{sm:"12"},c.a.createElement(u.a,null,c.a.createElement(o.a,{className:"m-2"},c.a.createElement(d.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"System Mails")),c.a.createElement(d.a,null,c.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/billing/createInvoice")}},"Create System Mails"))),c.a.createElement(p.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(y.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(E.a.Consumer,null,(function(a){return c.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(c.a.Component));a.default=P},797:function(e,a,t){"use strict";var n=t(40),i=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=i},798:function(e,a,t){"use strict";var n=t(5),i=t(7),r=t(11),l=t(12),s=t(0),c=t.n(s),o=t(1),d=t.n(o),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,o=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,h=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(r)>-1,b=new RegExp("\\D","g"),E=d||("select"===r||"textarea"===r?r:"input"),w="form-control";f?(w+="-plaintext",E=d||"input"):"file"===r?w+="-file":"range"===r?w+="-range":v&&(w=u?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var S=Object(p.mapToCssModules)(m()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,w),t);return("input"===E||d&&"function"===typeof d)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(n.a)({},h,{ref:g,className:S,"aria-invalid":o}))},a}(c.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},803:function(e,a,t){}}]);
//# sourceMappingURL=169.7cf8af48.chunk.js.map