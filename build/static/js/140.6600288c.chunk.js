(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[140],{2136:function(e,a,t){"use strict";t.r(a);var n=t(76),r=t.n(n),i=t(126),l=t(13),c=t(14),s=t(16),o=t(15),m=t(0),d=t.n(m),u=t(1013),f=t(1014),p=t(1015),g=t(178),h=t(1018),v=t(794),b=t(796),w=t(792),E=t(791),N=t(799),S=t(798),z=t(177),R=t(824),y=t(318),k=t(447),P=t(275),x=t(21),C=(t(820),t(800),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Invoice No",field:"customerId",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customerId))}},{headerName:"Date",field:"first_name",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.first_name))}},{headerName:"Customer Name",field:"last_name",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.last_name))}},{headerName:"Phone No",field:"customer_email",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_email))}},{headerName:"Customer GSTIN",field:"customer_email",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_email))}},{headerName:"Order No",field:"customer_email",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_email))}},{headerName:"Quantity",field:"customer_email",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_email))}},{headerName:"Subtotal",field:"mobile_no",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Discount",field:"mobile_no",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Grand Total",field:"mobile_no",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Payment Mode",field:"mobile_no",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success ml-2"},e.data.status):"Inactive"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(y.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return x.a.push("/app/contactUs/customer/editCustomer/".concat(a.data._id))}}),d.a.createElement(k.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,S.a.get("http://35.154.86.59/api/user/delcustomer/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return d.a.createElement(u.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Invoice List")),d.a.createElement(f.a,null,d.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return x.a.push("/app/billing/createInvoice")}},"Create  New Invoice"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(P.a,{className:"ml-50",size:15})),d.a.createElement(w.a,{right:!0},d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(a){return d.a.createElement(R.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component));a.default=C},798:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},799:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(11),l=t(12),c=t(0),s=t.n(c),o=t(1),m=t.n(o),d=t(4),u=t.n(d),f=t(3),p={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,d=e.addon,p=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),w=m||("select"===i||"textarea"===i?i:"input"),E="form-control";p?(E+="-plaintext",w=m||"input"):"file"===i?E+="-file":"range"===i?E+="-range":v&&(E=d?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var N=Object(f.mapToCssModules)(u()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===w||m&&"function"===typeof m)&&(h.type=i),h.children&&!p&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),s.a.createElement(w,Object(n.a)({},h,{ref:g,className:N,"aria-invalid":o}))},a}(s.a.Component);g.propTypes=p,g.defaultProps={type:"text"},a.a=g},800:function(e,a,t){}}]);
//# sourceMappingURL=140.6600288c.chunk.js.map