(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[83],{1685:function(e,a,t){e.exports=t.p+"static/media/forgot-password.63f5a96a.png"},2226:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),o=t(16),r=t(15),c=t(0),l=t.n(c),i=t(1140),d=t(1141),u=t(1142),p=t(1143),f=t(1144),m=t(1145),b=t(804),h=t(808),g=t(801),y=t(803),v=t(181),j=t(1685),O=t.n(j),N=t(21),E=(t(971),function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"m-0 justify-content-center"},l.a.createElement(d.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},l.a.createElement(i.a,{className:"m-0"},l.a.createElement(d.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},l.a.createElement("img",{src:O.a,alt:"fgImg"})),l.a.createElement(d.a,{lg:"6",md:"12",className:"p-0"},l.a.createElement(u.a,{className:"rounded-0 mb-0 px-2 py-1"},l.a.createElement(p.a,{className:"pb-1"},l.a.createElement(f.a,null,l.a.createElement("h4",{className:"mb-0"},"Recover your password"))),l.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and we'll send you instructions on how to reset your password."),l.a.createElement(m.a,{className:"pt-1 pb-0"},l.a.createElement(b.a,null,l.a.createElement(h.a,{className:"form-label-group"},l.a.createElement(g.a,{type:"text",placeholder:"Email",required:!0}),l.a.createElement(y.a,null,"Email")),l.a.createElement("div",{className:"float-md-left d-block mb-1"},l.a.createElement(v.a.Ripple,{color:"primary",outline:!0,className:"px-75 btn-block",onClick:function(){return N.a.push("/pages/login")}},"Back to Login")),l.a.createElement("div",{className:"float-md-right d-block mb-1"},l.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block",onClick:function(e){e.preventDefault(),N.a.push("/")}},"Recover Password"))))))))))}}]),t}(l.a.Component));a.default=E},801:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(11),r=t(12),c=t(0),l=t.n(c),i=t(1),d=t.n(i),u=t(4),p=t.n(u),f=t(3),m={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,c=e.valid,i=e.invalid,d=e.tag,u=e.addon,m=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),v=d||("select"===o||"textarea"===o?o:"input"),j="form-control";m?(j+="-plaintext",v=d||"input"):"file"===o?j+="-file":"range"===o?j+="-range":g&&(j=u?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var O=Object(f.mapToCssModules)(p()(a,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,j),t);return("input"===v||d&&"function"===typeof d)&&(h.type=o),h.children&&!m&&"select"!==o&&"string"===typeof v&&"select"!==v&&(Object(f.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(v,Object(n.a)({},h,{ref:b,className:O,"aria-invalid":i}))},a}(l.a.Component);b.propTypes=m,b.defaultProps={type:"text"},a.a=b},803:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),r=t.n(o),c=t(1),l=t.n(c),i=t(4),d=t.n(i),u=t(3),p=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,c=e.widths,l=e.tag,i=e.check,p=e.size,f=e.for,m=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];c.forEach((function(a,n){var s=e[a];if(delete m[a],s||""===s){var o,r=!n;if(Object(u.isObject)(s)){var c,l=r?"-":"-"+a+"-";o=h(r,a,s.size),b.push(Object(u.mapToCssModules)(d()(((c={})[o]=s.size||""===s.size,c["order"+l+s.order]=s.order||0===s.order,c["offset"+l+s.offset]=s.offset||0===s.offset,c))),t)}else o=h(r,a,s),b.push(o)}}));var g=Object(u.mapToCssModules)(d()(a,!!o&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return r.a.createElement(l,Object(n.a)({htmlFor:f},m,{className:g}))};g.propTypes=m,g.defaultProps=b,a.a=g},804:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(11),r=t(12),c=t(0),l=t.n(c),i=t(1),d=t.n(i),u=t(4),p=t.n(u),f=t(3),m={children:d.a.node,inline:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,r=e.tag,c=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(f.mapToCssModules)(p()(a,!!o&&"form-inline"),t);return l.a.createElement(r,Object(n.a)({},i,{ref:c,className:d}))},a}(c.Component);b.propTypes=m,b.defaultProps={tag:"form"},a.a=b},808:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),r=t.n(o),c=t(1),l=t.n(c),i=t(4),d=t.n(i),u=t(3),p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.row,c=e.disabled,l=e.check,i=e.inline,p=e.tag,f=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(u.mapToCssModules)(d()(a,!!o&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!c)&&"disabled"),t);return"fieldset"===p&&(f.disabled=c),r.a.createElement(p,Object(n.a)({},f,{className:m}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},971:function(e,a,t){}}]);
//# sourceMappingURL=83.3e8f9cb5.chunk.js.map