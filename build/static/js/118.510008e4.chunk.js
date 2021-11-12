(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[118],{2211:function(e,a,t){"use strict";t.r(a),t.d(a,"AddEmployee",(function(){return j}));var n=t(41),l=t(13),s=t(14),r=t(16),o=t(15),i=t(0),c=t.n(i),m=t(1142),d=t(1140),p=t(1141),u=t(181),f=t(1145),h=t(804),g=t(808),b=t(803),E=t(801),y=t(786),v=t(21),O=t(798),j=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("employee_name",s.state.employee_name),a.append("phone_no",s.state.phone_no),a.append("email",s.state.email),a.append("password",s.state.password),a.append("designation",s.state.designation),a.append("sortorder",s.state.sortorder),a.append("status",s.state.status),null!==s.state.selectedFile&&a.append("image",s.state.selectedFile,s.state.selectedName),O.a.post("/addemployee",a).then((function(e){console.log(e),s.props.history.push("/app/contactUs/employee/employeeList")})).catch((function(e){console.log(e)}))},s.state={employee_name:"",phone_no:"",email:"",password:"",designation:"",brand_img:"",sortorder:"",status:"",selectedFile:null,selectedName:""},s}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(p.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Employee")),c.a.createElement(p.a,null,c.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/contactUs/employee/employeeList")}},"Back"))),c.a.createElement(f.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"mb-2"},c.a.createElement(p.a,{lg:"6",md:"6"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,"Employee Name"),c.a.createElement(E.a,{type:"text",placeholder:"Employee Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),c.a.createElement(p.a,{lg:"6",md:"6"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,"Phone Number"),c.a.createElement(E.a,{type:"number",placeholder:"Phone Number",name:"phone_no",value:this.state.phone_no,onChange:this.changeHandler}))),c.a.createElement(p.a,{lg:"6",md:"6"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,"Employee Email"),c.a.createElement(E.a,{type:"email",placeholder:"Employee Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),c.a.createElement(p.a,{lg:"6",md:"6"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,"Password"),c.a.createElement(E.a,{type:"password",name:"password",value:this.state.password,onChange:this.changeHandler}))),c.a.createElement(p.a,{lg:"6",md:"6"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,"Designation"),c.a.createElement(y.a,{type:"select",name:"designation",value:this.state.designation,onChange:this.changeHandler},c.a.createElement("option",null,"select"),c.a.createElement("option",{value:"owner"},"Owner"),c.a.createElement("option",{value:"manager"},"Manager"),c.a.createElement("option",{value:"employee"},"Employee")))),c.a.createElement(p.a,{lg:"6",md:"6"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,"Sort Order"),c.a.createElement(E.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),c.a.createElement(p.a,{lg:"6",md:"6"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,"Brand Image / Logo"),c.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler}))),c.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-1 "},c.a.createElement(g.a,null,c.a.createElement(b.a,{className:"mb-1"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},c.a.createElement("input",{style:{marginRight:"3px",fontWeight:800},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px",fontWeight:800}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),c.a.createElement(d.a,null,c.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Add Employee"))))))}}]),t}(i.Component);a.default=j},798:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=l},801:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(11),r=t(12),o=t(0),i=t.n(o),c=t(1),m=t.n(c),d=t(4),p=t.n(d),u=t(3),f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:u.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,c=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,h=e.innerRef,g=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),v="form-control";f?(v+="-plaintext",y=m||"input"):"file"===s?v+="-file":"range"===s?v+="-range":b&&(v=d?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(u.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var O=Object(u.mapToCssModules)(p()(a,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,v),t);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!f&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(u.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:h,className:O,"aria-invalid":c}))},a}(i.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},803:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),o=t(1),i=t.n(o),c=t(4),m=t.n(c),d=t(3),p=i.a.oneOfType([i.a.number,i.a.string]),u=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,s=e.hidden,o=e.widths,i=e.tag,c=e.check,p=e.size,u=e.for,f=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];o.forEach((function(a,n){var l=e[a];if(delete f[a],l||""===l){var s,r=!n;if(Object(d.isObject)(l)){var o,i=r?"-":"-"+a+"-";s=g(r,a,l.size),h.push(Object(d.mapToCssModules)(m()(((o={})[s]=l.size||""===l.size,o["order"+i+l.order]=l.order||0===l.order,o["offset"+i+l.offset]=l.offset||0===l.offset,o))),t)}else s=g(r,a,l),h.push(s)}}));var b=Object(d.mapToCssModules)(m()(a,!!s&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return r.a.createElement(i,Object(n.a)({htmlFor:u},f,{className:b}))};b.propTypes=f,b.defaultProps=h,a.a=b},804:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(11),r=t(12),o=t(0),i=t.n(o),c=t(1),m=t.n(c),d=t(4),p=t.n(d),u=t(3),f={children:m.a.node,inline:m.a.bool,tag:u.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,c=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(u.mapToCssModules)(p()(a,!!s&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},c,{ref:o,className:m}))},a}(o.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},808:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),o=t(1),i=t.n(o),c=t(4),m=t.n(c),d=t(3),p={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,t=e.cssModule,s=e.row,o=e.disabled,i=e.check,c=e.inline,p=e.tag,u=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.mapToCssModules)(m()(a,!!s&&"row",i?"form-check":"form-group",!(!i||!c)&&"form-check-inline",!(!i||!o)&&"disabled"),t);return"fieldset"===p&&(u.disabled=o),r.a.createElement(p,Object(n.a)({},u,{className:f}))};u.propTypes=p,u.defaultProps={tag:"div"},a.a=u}}]);
//# sourceMappingURL=118.510008e4.chunk.js.map