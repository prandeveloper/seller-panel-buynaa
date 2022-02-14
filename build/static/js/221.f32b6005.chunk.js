(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[221],{2157:function(e,a,t){"use strict";t.r(a),t.d(a,"AddStockTransfer",(function(){return N}));var n=t(76),l=t.n(n),r=t(126),c=t(28),o=t(41),s=t(13),u=t(14),m=t(16),d=t(15),i=t(0),h=t.n(i),p=t(992),g=t(990),E=t(991),f=t(178),b=t(995),v=t(825),G=t(820),y=t(798),k=t(785),C=t(818),_=t(21),w=t(797),N=(t(913),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).changeHandlerG=function(e,a){var t=n.state[e.target.name];console.log(t),t[a]=e.target.value,n.setState(Object(o.a)({},e.target.name,t))},n.submitHandler=function(e){e.preventDefault();for(var a=[],t=0;t<n.state.productG.length;t++)a.push({productname:n.state.productG[t],sku:n.state.skuG[t],hsn:n.state.hsmG[t],qty:n.state.qtyG[t],gst:n.state.gstG[t],amount:n.state.amountG[t]});var l=n.state;l.product=a,console.log("Option",l),w.a.post("/addstocktransfer",l,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),n.props.history.push("/app/stockControl/stockTransferRequest")})).catch((function(e){console.log(e.response)}))},n.changeHandler=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.state={addTextbox:[{}],reference_no:"",from_warehouse:"",to_warehouse:"",transfer_date:"",delivery_duedate:"",transfer_type:"",reason:"",grandTotal:"",productC:[],productG:[""],skuG:[""],hsmG:[""],amountG:[""],qtyG:[""],gstG:[""]},n}return Object(u.a)(t,[{key:"addControls",value:function(){this.setState({productG:[].concat(Object(c.a)(this.state.productG),[""]),skuG:[].concat(Object(c.a)(this.state.skuG),[""]),hsmG:[].concat(Object(c.a)(this.state.hsmG),[""]),amountG:[].concat(Object(c.a)(this.state.amountG),[""]),qtyG:[].concat(Object(c.a)(this.state.qtyG),[""]),gstG:[].concat(Object(c.a)(this.state.gstG),[""]),addTextbox:[].concat(Object(c.a)(this.state.addTextbox),[""])})}},{key:"delControl",value:function(e){console.log(this.state),this.state.addTextbox.splice(e,1),this.state.productG.splice(e,1),this.state.skuG.splice(e,1),this.state.hsmG.splice(e,1),this.state.amountG.splice(e,1),this.state.qtyG.splice(e,1),this.state.gstG.splice(e,1),this.setState({})}},{key:"componentDidMount",value:function(){var e=Object(r.a)(l.a.mark((function e(){var a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("/getwarehouse",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),a.setState({warehouseL:e.data.data})})).catch((function(e){console.log(e)})),w.a.get("/getReason",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),a.setState({reasonL:e.data.data})})).catch((function(e){console.log(e)})),w.a.get("/productbysellerbytoken",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e.data.data),a.setState({productC:e.data.data})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,a,t,n=this;return h.a.createElement("div",null,h.a.createElement(p.a,null,h.a.createElement(g.a,{className:"m-2"},h.a.createElement(E.a,null,h.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Stock Transfer")),h.a.createElement(E.a,null,h.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return _.a.push("/app/stockControl/stockTransferRequest")}},"Back"))),h.a.createElement(b.a,null,h.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},h.a.createElement(g.a,{className:"mb-2"},h.a.createElement(E.a,{lg:"6",md:"6"},h.a.createElement(G.a,null,"Referance Number"),h.a.createElement(y.a,{type:"number",name:"reference_no",value:this.state.reference_no,onChange:this.changeHandler})),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(G.a,null,"Select From Warehouse"),h.a.createElement(k.a,{type:"select",name:"from_warehouse",value:this.state.from_warehouse,onChange:this.changeHandler},null===(e=this.state.warehouseL)||void 0===e?void 0:e.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.warehousename)})))),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(G.a,null,"Select To Warehouse"),h.a.createElement(k.a,{type:"select",name:"to_warehouse",value:this.state.to_warehouse,onChange:this.changeHandler},null===(a=this.state.warehouseL)||void 0===a?void 0:a.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.warehousename)})))),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(G.a,null,"Transfer Date"),h.a.createElement(y.a,{type:"date",name:"transfer_date",value:this.state.transfer_date,onChange:this.changeHandler})),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(G.a,null,"Delivery Due Date"),h.a.createElement(y.a,{type:"date",name:"delivery_duedate",value:this.state.delivery_duedate,onChange:this.changeHandler})),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(G.a,null,"Transfer Type"),h.a.createElement(k.a,{type:"select",name:"transfer_type",value:this.state.transfer_type,onChange:this.changeHandler},h.a.createElement("option",{value:"ABC"},"ABC"),h.a.createElement("option",{value:"XYZ"},"XYZ"),h.a.createElement("option",{value:"ABCD"},"ABCD"),h.a.createElement("option",{value:"EFG"},"EFG"))),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(G.a,null,"Reason"),h.a.createElement(k.a,{type:"select",name:"reason",value:this.state.reason,onChange:this.changeHandler},null===(t=this.state.reasonL)||void 0===t?void 0:t.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.reason)}))))),h.a.createElement(g.a,null,h.a.createElement("div",null,this.state.addTextbox.map((function(e,a){var t;return h.a.createElement("div",null,h.a.createElement("div",{id:"btn"},h.a.createElement(g.a,null,h.a.createElement(E.a,{lg:"6",md:"6",sm:"6",className:"mb-2 d-flex align-items-start"},h.a.createElement(f.a,{color:"primary",onClick:function(){return n.addControls()}},"Add")))),h.a.createElement(g.a,null,h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(G.a,null," Product Name "),h.a.createElement(k.a,{type:"select",name:"productG",placeholder:" Product Name",value:n.state.productG[a],onChange:function(e){n.changeHandlerG(e,a)}},h.a.createElement("option",null,"Select Product"),null===(t=n.state.productC)||void 0===t?void 0:t.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.product_name)}))))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(G.a,null," SKU "),h.a.createElement(y.a,{type:"number",name:"skuG",placeholder:"SKU",value:n.state.skuG[a],onChange:function(e){n.changeHandlerG(e,a)}}))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(G.a,null," HSN "),h.a.createElement(y.a,{type:"number",rows:"5",name:"hsmG",placeholder:"HSN",value:n.state.hsmG[a],onChange:function(e){n.changeHandlerG(e,a)}}))),h.a.createElement(E.a,{md:"1",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(G.a,null," Quantity "),h.a.createElement(y.a,{type:"number",rows:"5",name:"qtyG",placeholder:"Quantity",value:n.state.qtyG[a],onChange:function(e){n.changeHandlerG(e,a)}}))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(G.a,null," GST "),h.a.createElement(y.a,{type:"text",rows:"5",name:"gstG",placeholder:"GST",value:n.state.gstG[a],onChange:function(e){n.changeHandlerG(e,a)}}))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(G.a,null," Amount "),h.a.createElement(y.a,{type:"number",rows:"5",name:"amountG",placeholder:"Amount",value:n.state.amountG[a],onChange:function(e){n.changeHandlerG(e,a)}}))),h.a.createElement(E.a,{md:"1",sm:"6",className:"p-2 d-flex justify-content-end"},h.a.createElement(f.a,{color:"danger",onClick:function(){return n.delControl(a)}},"Remove"))))})))),h.a.createElement(g.a,{className:"d-flex justify-content-end"},h.a.createElement(E.a,{lg:"4"},h.a.createElement(C.a,null,h.a.createElement(G.a,null,"Grand Total"),h.a.createElement(y.a,{type:"number",name:"grandTotal",placeholder:"Grand Total",value:this.state.grandTotal,onChange:this.changeHandler})))),h.a.createElement(g.a,null,h.a.createElement(f.a,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),t}(i.Component));a.default=N},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=l},818:function(e,a,t){"use strict";var n=t(5),l=t(7),r=t(0),c=t.n(r),o=t(1),s=t.n(o),u=t(4),m=t.n(u),d=t(3),i={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:d.tagPropType,className:s.a.string,cssModule:s.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,s=e.check,u=e.inline,i=e.tag,h=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.mapToCssModules)(m()(a,!!r&&"row",s?"form-check":"form-group",!(!s||!u)&&"form-check-inline",!(!s||!o)&&"disabled"),t);return"fieldset"===i&&(h.disabled=o),c.a.createElement(i,Object(n.a)({},h,{className:p}))};h.propTypes=i,h.defaultProps={tag:"div"},a.a=h}}]);
//# sourceMappingURL=221.f32b6005.chunk.js.map