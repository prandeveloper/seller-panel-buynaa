(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[63],{2097:function(e,t,a){"use strict";a.r(t),a.d(t,"EditCategory",(function(){return j}));var n=a(828),r=a(41),s=a(13),o=a(14),l=a(16),c=a(15),i=a(0),u=a.n(i),d=a(1142),m=a(1140),p=a(1141),f=a(181),g=a(1145),h=a(804),b=a(803),v=a(808),y=a(801),E=a(21),O=a(798),j=(a(847),function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(r.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),console.log(o.props.match.params,o.state);var t=new FormData;t.append("name",o.state.name),t.append("sortorder",o.state.sortorder),t.append("desc",o.state.desc),t.append("status",o.state.status),null!==o.state.selectedFile&&t.append("product_img",o.state.selectedFile,o.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(d){r.e(d)}finally{r.f()}var l,c=Object(n.a)(t.keys());try{for(c.s();!(l=c.n()).done;){var i=l.value;console.log(i)}}catch(d){c.e(d)}finally{c.f()}var u=o.props.match.params.id;O.a.post("/editproductcategory/".concat(u),t).then((function(e){console.log(e),o.props.history.push("/app/category/categoryList")})).catch((function(e){console.log(e)}))},o.state={name:"",sortorder:"",desc:"",product_img:"",status:"",selectedFile:null,selectedName:""},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;O.a.get("/getone_productcategory/".concat(t)).then((function(t){console.log(t),e.setState({product_img:t.data.data.product_img,name:t.data.data.name,desc:t.data.data.desc,sortorder:t.data.data.sortorder,status:t.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Category")),u.a.createElement(p.a,null,u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/category/categoryList")}},"Back"))),u.a.createElement(g.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,"Category Name"),u.a.createElement(v.a,null,u.a.createElement(y.a,{type:"text",placeholder:"Enter Category",name:"name",value:this.state.name,onChange:this.changeHandler}))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,null,"Description"),u.a.createElement(v.a,null,u.a.createElement(y.a,{type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,"Sort Order"),u.a.createElement(v.a,null,u.a.createElement(y.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,"Image"),u.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(b.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(m.a,null,u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Category"))))))}}]),a}(i.Component));t.default=j},798:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});t.a=r},801:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),o=a(12),l=a(0),c=a.n(l),i=a(1),u=a.n(i),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),E="form-control";f?(E+="-plaintext",y=u||"input"):"file"===s?E+="-file":"range"===s?E+="-range":b&&(E=d?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var O=Object(p.mapToCssModules)(m()(t,i&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,E),a);return("input"===y||u&&"function"===typeof u)&&(h.type=s),h.children&&!f&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(y,Object(n.a)({},h,{ref:g,className:O,"aria-invalid":i}))},t}(c.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},803:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(0),o=a.n(s),l=a(1),c=a.n(l),i=a(4),u=a.n(i),d=a(3),m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.hidden,l=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];l.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var s,o=!n;if(Object(d.isObject)(r)){var l,c=o?"-":"-"+t+"-";s=h(o,t,r.size),g.push(Object(d.mapToCssModules)(u()(((l={})[s]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),a)}else s=h(o,t,r),g.push(s)}}));var b=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),a);return o.a.createElement(c,Object(n.a)({htmlFor:p},f,{className:b}))};b.propTypes=f,b.defaultProps=g,t.a=b},804:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),o=a(12),l=a(0),c=a.n(l),i=a(1),u=a.n(i),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,o=e.tag,l=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(m()(t,!!s&&"form-inline"),a);return c.a.createElement(o,Object(n.a)({},i,{ref:l,className:u}))},t}(l.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g},808:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(0),o=a.n(s),l=a(1),c=a.n(l),i=a(4),u=a.n(i),d=a(3),m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.row,l=e.disabled,c=e.check,i=e.inline,m=e.tag,p=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.mapToCssModules)(u()(t,!!s&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!l)&&"disabled"),a);return"fieldset"===m&&(p.disabled=l),o.a.createElement(m,Object(n.a)({},p,{className:f}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},828:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,o=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw s}}}}},847:function(e,t,a){}}]);
//# sourceMappingURL=63.6fbb4c51.chunk.js.map