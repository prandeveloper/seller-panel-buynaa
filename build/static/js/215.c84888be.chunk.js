(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[215],{2181:function(e,t,a){"use strict";a.r(t),a.d(t,"AddNews",(function(){return y}));var n=a(41),s=a(13),r=a(14),l=a(16),i=a(15),o=a(0),c=a.n(o),d=a(1009),u=a(1007),f=a(1008),p=a(178),m=a(1012),b=a(803),h=a(802),g=a(800),v=a(21),O=a(798),y=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("news_title",r.state.news_title),t.append("description",r.state.description),t.append("news_img",r.state.selectedFile,r.state.selectedName),O.a.post("/addblognews",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},r.state={news_title:"",description:"",news_img:"",selectedFile:null,selectedName:""},r}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(f.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New News")),c.a.createElement(f.a,null,c.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/website/news/newsList")}},"Back"))),c.a.createElement(m.a,null,c.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(f.a,{lg:"6",md:"6"},c.a.createElement(h.a,null,"News Title"),c.a.createElement(g.a,{type:"text",placeholder:"Enter Title or Headline",name:"news_title",value:this.state.news_title,onChange:this.changeHandler})),c.a.createElement(f.a,{lg:"6",md:"6"},c.a.createElement(h.a,null,"News Description"),c.a.createElement(g.a,{type:"textarea",placeholder:"Enter Text",name:"description",value:this.state.description,onChange:this.changeHandler})),c.a.createElement(f.a,{lg:"6",md:"6",className:"mt-1"},c.a.createElement(h.a,null,"News Image"),c.a.createElement(g.a,{type:"file",onChange:this.onChangeHandler}))),c.a.createElement(u.a,null,c.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add News"))))))}}]),a}(o.Component);t.default=y},798:function(e,t,a){"use strict";var n=a(40),s=a.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});t.a=s},800:function(e,t,a){"use strict";var n=a(5),s=a(7),r=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),d=a.n(c),u=a(4),f=a.n(u),p=a(3),m={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,i=e.valid,c=e.invalid,d=e.tag,u=e.addon,m=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),y="form-control";m?(y+="-plaintext",O=d||"input"):"file"===r?y+="-file":"range"===r?y+="-range":g&&(y=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(p.mapToCssModules)(f()(t,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,y),a);return("input"===O||d&&"function"===typeof d)&&(h.type=r),h.children&&!m&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(O,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":c}))},t}(o.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},802:function(e,t,a){"use strict";var n=a(5),s=a(7),r=a(0),l=a.n(r),i=a(1),o=a.n(i),c=a(4),d=a.n(c),u=a(3),f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),m={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.hidden,i=e.widths,o=e.tag,c=e.check,f=e.size,p=e.for,m=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach((function(t,n){var s=e[t];if(delete m[t],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var i,o=l?"-":"-"+t+"-";r=h(l,t,s.size),b.push(Object(u.mapToCssModules)(d()(((i={})[r]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i))),a)}else r=h(l,t,s),b.push(r)}}));var g=Object(u.mapToCssModules)(d()(t,!!r&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:p},m,{className:g}))};g.propTypes=m,g.defaultProps=b,t.a=g},803:function(e,t,a){"use strict";var n=a(5),s=a(7),r=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),d=a.n(c),u=a(4),f=a.n(u),p=a(3),m={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,i=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.mapToCssModules)(f()(t,!!r&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:d}))},t}(i.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=215.c84888be.chunk.js.map