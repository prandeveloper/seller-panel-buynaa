(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[84],{1391:function(e,a,t){e.exports=t.p+"static/media/glogo.36f67780.png"},2201:function(e,a,t){"use strict";t.r(a);var n=t(41),s=t(13),o=t(14),c=t(16),r=t(15),l=t(0),i=t.n(l),p=t(877),u=t(986),d=t(987),f=t(988),m=t(989),h=t(990),b=t(818),g=t(815),v=t(817),j=t(798),y=t(178),O=(t(835),t(1391)),E=t.n(O),N=t(21),k=t(40),x=t.n(k),w=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handlechange=function(e){e.preventDefault(),o.setState(Object(n.a)({},e.target.name,e.target.value))},o.loginHandler=function(e){e.preventDefault(),x.a.post("http://35.154.86.59/api/admin/sellerlogin",o.state).then((function(e){console.log(e),localStorage.setItem("auth-adtoken",e.data.token),N.a.push("/analyticsDashboard")})).catch((function(e){console.log(e.response)}))},o.state={email:"",password:""},o}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(u.a,{className:"m-0 justify-content-center"},i.a.createElement(d.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(d.a,{lg:"8",md:"12",className:"p-1"},i.a.createElement(f.a,{className:"rounded-0 mb-0 px-2 pb-3 login-tabs-container"},i.a.createElement(m.a,{className:"pb-1"},i.a.createElement("img",{src:E.a,class:"img-fluid",alt:"..."}),i.a.createElement("br",null),i.a.createElement(h.a,null,i.a.createElement("h4",{className:"mb-0"},"Login"))),i.a.createElement("h5",{className:"px-2 py-2 auth-title fw-bolder text-dark"},"Welcome back, please login to your account."),i.a.createElement(b.a,{onSubmit:this.loginHandler},i.a.createElement(g.a,null,"Email"),i.a.createElement(v.a,{className:"form-label-group position-relative has-icon-left"},i.a.createElement(j.a,{type:"email",name:"email",placeholder:"E-mail",value:this.state.email,onChange:this.handlechange,required:!0})),i.a.createElement(g.a,null,"Password"),i.a.createElement(v.a,{className:"form-label-group position-relative has-icon-left"},i.a.createElement(j.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handlechange,required:!0})),i.a.createElement("div",{className:"m-2"},i.a.createElement("h6",{onClick:function(){N.a.push("/pages/forgot-password")}},"Forget Password")),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,onClick:function(){N.a.push("/pages/register")}},"Register"),i.a.createElement(y.a.Ripple,{color:"primary",type:"submit"},"Login"))))))))}}]),t}(i.a.Component);a.default=w},798:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(11),c=t(12),r=t(0),l=t.n(r),i=t(1),p=t.n(i),u=t(4),d=t.n(u),f=t(3),m={children:p.a.node,type:p.a.string,size:p.a.oneOfType([p.a.number,p.a.string]),bsSize:p.a.string,valid:p.a.bool,invalid:p.a.bool,tag:f.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),plaintext:p.a.bool,addon:p.a.bool,className:p.a.string,cssModule:p.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,c=e.bsSize,r=e.valid,i=e.invalid,p=e.tag,u=e.addon,m=e.plaintext,h=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),j=p||("select"===o||"textarea"===o?o:"input"),y="form-control";m?(y+="-plaintext",j=p||"input"):"file"===o?y+="-file":"range"===o?y+="-range":g&&(y=u?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var O=Object(f.mapToCssModules)(d()(a,i&&"is-invalid",r&&"is-valid",!!c&&"form-control-"+c,y),t);return("input"===j||p&&"function"===typeof p)&&(b.type=o),b.children&&!m&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(f.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(j,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":i}))},a}(l.a.Component);h.propTypes=m,h.defaultProps={type:"text"},a.a=h},815:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),c=t.n(o),r=t(1),l=t.n(r),i=t(4),p=t.n(i),u=t(3),d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:d,order:d,offset:d})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,r=e.widths,l=e.tag,i=e.check,d=e.size,f=e.for,m=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];r.forEach((function(a,n){var s=e[a];if(delete m[a],s||""===s){var o,c=!n;if(Object(u.isObject)(s)){var r,l=c?"-":"-"+a+"-";o=b(c,a,s.size),h.push(Object(u.mapToCssModules)(p()(((r={})[o]=s.size||""===s.size,r["order"+l+s.order]=s.order||0===s.order,r["offset"+l+s.offset]=s.offset||0===s.offset,r))),t)}else o=b(c,a,s),h.push(o)}}));var g=Object(u.mapToCssModules)(p()(a,!!o&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return c.a.createElement(l,Object(n.a)({htmlFor:f},m,{className:g}))};g.propTypes=m,g.defaultProps=h,a.a=g},817:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),c=t.n(o),r=t(1),l=t.n(r),i=t(4),p=t.n(i),u=t(3),d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.row,r=e.disabled,l=e.check,i=e.inline,d=e.tag,f=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(u.mapToCssModules)(p()(a,!!o&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!r)&&"disabled"),t);return"fieldset"===d&&(f.disabled=r),c.a.createElement(d,Object(n.a)({},f,{className:m}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},818:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(11),c=t(12),r=t(0),l=t.n(r),i=t(1),p=t.n(i),u=t(4),d=t.n(u),f=t(3),m={children:p.a.node,inline:p.a.bool,tag:f.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),className:p.a.string,cssModule:p.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,c=e.tag,r=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),p=Object(f.mapToCssModules)(d()(a,!!o&&"form-inline"),t);return l.a.createElement(c,Object(n.a)({},i,{ref:r,className:p}))},a}(r.Component);h.propTypes=m,h.defaultProps={tag:"form"},a.a=h},835:function(e,a,t){"use strict";var n=t(13),s=t(14),o=t(16),c=t(15),r=t(0),l=t.n(r),i=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),t}(l.a.Component);a.a=i},877:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),c=t.n(o),r=t(1),l=t.n(r),i=t(4),p=t.n(i),u=t(3),d={tag:u.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.fluid,r=e.tag,l=Object(s.a)(e,["className","cssModule","fluid","tag"]),i="container";!0===o?i="container-fluid":o&&(i="container-"+o);var d=Object(u.mapToCssModules)(p()(a,i),t);return c.a.createElement(r,Object(n.a)({},l,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=84.5231850b.chunk.js.map