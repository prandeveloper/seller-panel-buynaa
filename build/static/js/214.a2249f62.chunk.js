(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[214],{2239:function(e,a,t){"use strict";t.r(a);var n=t(76),r=t.n(n),i=t(126),l=t(13),c=t(14),s=t(16),o=t(15),u=t(0),m=t.n(u),d=t(1140),f=t(1141),g=t(1142),p=t(181),h=t(1145),v=t(794),E=t(796),w=t(792),S=t(791),b=t(801),N=t(798),z=t(177),P=t(805),y=t(275),k=t(21),D=(t(802),t(799),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",field:"staffID",valueGetter:"node.rowIndex + 1",width:120,filter:!0},{headerName:"Plan Name",field:"planname",filter:!0,width:180,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.staffname))}},{headerName:"Amount",field:"amount",filter:!0,width:180,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.staffname))}},{headerName:"Transcation Id",field:"staffname",filter:!0,width:180,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.staffname))}},{headerName:"Start Date",field:"renewal_date",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:"ml-2"},m.a.createElement("span",null,e.data.comments)))}},{headerName:"End Date",field:"renewal_date",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:"ml-2"},m.a.createElement("span",null,e.data.comments)))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/allproduct").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,N.a.get("/delproduct/".concat(a)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return console.log(t),m.a.createElement(d.a,{className:"app-user-list"},m.a.createElement(f.a,{sm:"12"}),m.a.createElement(f.a,{sm:"12"},m.a.createElement(g.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"My Subscription")),m.a.createElement(f.a,null,m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return k.a.push("/app/mySubs/addSubs")}},"Upgrate"))),m.a.createElement(h.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(v.a,{className:"p-1 ag-dropdown"},m.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(y.a,{className:"ml-50",size:15})),m.a.createElement(w.a,{right:!0},m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(z.a.Consumer,null,(function(a){return m.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(m.a.Component));a.default=D},798:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},799:function(e,a,t){}}]);
//# sourceMappingURL=214.a2249f62.chunk.js.map