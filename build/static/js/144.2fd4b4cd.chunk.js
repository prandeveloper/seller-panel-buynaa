(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{2136:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),i=a(126),l=a(13),c=a(14),o=a(16),s=a(15),u=a(0),d=a.n(u),m=a(990),f=a(991),p=a(992),g=a(178),h=a(995),v=a(793),w=a(795),b=a(791),E=a(790),N=a(798),S=a(797),z=a(177),y=a(841),R=a(446),P=a(274),k=a(21),x=(a(829),a(803),a(840)),C=a.n(x),D=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Invoice No",field:"customerId",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"mr-4"},d.a.createElement("span",null,e.data.orderId))}},{headerName:"Date",field:"date",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,C()(e.data.createdAt).format("ll")))}},{headerName:"Customer Name",field:"customer_name",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_name))}},{headerName:"Phone No",field:"customer_phone",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_phone))}},{headerName:"Customer GSTIN",field:"customer_email",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_email))}},{headerName:"Order No",field:"customer_email",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_email))}},{headerName:"Quantity",field:"total_qty",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.total_qty))}},{headerName:"Grand Total",field:"total_amount",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.total_amount))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(R.a,{size:"20px",color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/getorderProductbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Invoice List")),d.a.createElement(f.a,null,d.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return k.a.push("/app/billing/createInvoice")}},"Create New Invoice"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(P.a,{className:"ml-50",size:15})),d.a.createElement(b.a,{right:!0},d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(N.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(t){return d.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component);t.default=D},797:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),i=a(11),l=a(12),c=a(0),o=a.n(c),s=a(1),u=a.n(s),d=a(4),m=a.n(d),f=a(3),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,w=new RegExp("\\D","g"),b=u||("select"===i||"textarea"===i?i:"input"),E="form-control";p?(E+="-plaintext",b=u||"input"):"file"===i?E+="-file":"range"===i?E+="-range":v&&(E=d?null:"form-check-input"),h.size&&w.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var N=Object(f.mapToCssModules)(m()(t,s&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,E),a);return("input"===b||u&&"function"===typeof u)&&(h.type=i),h.children&&!p&&"select"!==i&&"string"===typeof b&&"select"!==b&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(b,Object(n.a)({},h,{ref:g,className:N,"aria-invalid":s}))},t}(o.a.Component);g.propTypes=p,g.defaultProps={type:"text"},t.a=g},803:function(e,t,a){}}]);
//# sourceMappingURL=144.2fd4b4cd.chunk.js.map