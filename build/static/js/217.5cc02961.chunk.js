(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[217],{2179:function(e,a,t){"use strict";t.r(a),t.d(a,"EditCustomer",(function(){return C}));var n=t(41),l=t(13),r=t(14),s=t(16),c=t(15),o=t(0),m=t.n(o),i=t(992),u=t(990),d=t(991),h=t(178),p=t(995),g=t(825),E=t(818),b=t(820),f=t(798),v=t(21),y=(t(797),t(913)),_=t.n(y),N=t(40),k=t.n(N),C=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;k.a.post("http://35.154.86.59/api/user/editcustomer/".concat(a),r.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),_()("Success!","Updated SuccessFull!","success"),r.props.history.push("/app/contactUs/customer/customerList")})).catch((function(e){_()("Error!","Error Received","error"),console.log(e)}))},r.state={first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",status:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;k.a.get("http://35.154.86.59/api/user/getonecustomer/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({first_name:a.data.data.first_name,last_name:a.data.data.last_name,customer_email:a.data.data.customer_email,mobile_no:a.data.data.mobile_no,sortorder:a.data.data.sortorder,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Customer")),m.a.createElement(d.a,null,m.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/contactUs/customer/customerList")}},"Back"))),m.a.createElement(p.a,null,m.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"FirstName"),m.a.createElement(f.a,{type:"text",placeholder:"First Name",name:"first_name",value:this.state.first_name,onChange:this.changeHandler}))),m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"LastName"),m.a.createElement(f.a,{type:"text",placeholder:"Last Name",name:"last_name",value:this.state.last_name,onChange:this.changeHandler}))),m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Customer Email"),m.a.createElement(f.a,{type:"email",placeholder:"Customer Email",name:"customer_email",value:this.state.customer_email,onChange:this.changeHandler}))),m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Mobile Number"),m.a.createElement(f.a,{type:"number",placeholder:"Mobile Number",name:"mobile_no",value:this.state.mobile_no,onChange:this.changeHandler}))),m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Sort Order"),m.a.createElement(f.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-1 "},m.a.createElement(E.a,null,m.a.createElement(b.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},m.a.createElement("input",{style:{marginRight:"3px",fontWeight:800},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px",fontWeight:800}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),m.a.createElement(u.a,null,m.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Add Customer"))))))}}]),t}(o.Component);a.default=C},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=l},818:function(e,a,t){"use strict";var n=t(5),l=t(7),r=t(0),s=t.n(r),c=t(1),o=t.n(c),m=t(4),i=t.n(m),u=t(3),d={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,o=e.check,m=e.inline,d=e.tag,h=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.mapToCssModules)(i()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!m)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===d&&(h.disabled=c),s.a.createElement(d,Object(n.a)({},h,{className:p}))};h.propTypes=d,h.defaultProps={tag:"div"},a.a=h}}]);
//# sourceMappingURL=217.5cc02961.chunk.js.map