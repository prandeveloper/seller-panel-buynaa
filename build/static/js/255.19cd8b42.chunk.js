(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[255],{2306:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(14),i=n(16),l=n(15),o=n(0),c=n.n(o),s=n(875),p=n(896),d=n(990),u=n(991),m=n(992),h=n(993),g=n(994),f=n(995),b=n(2032),x=n(833),v=n.n(x),k=n(26),y=function(e,t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())},j=function e(t,n,a){return a(n,t)||t.children&&t.children.length&&!!t.children.find((function(t){return e(t,n,a)}))},E=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;if(a(n,t)||!t.children)return t;var r=t.children.filter((function(e){return j(e,n,a)})).map((function(t){return e(t,n,a)}));return Object.assign({},t,{children:r})},w=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,r=t.children;if(!r||0===r.length)return Object.assign({},t,{toggled:!1});var i=t.children.filter((function(e){return j(e,n,a)})),l=i.length>0;return l&&(r=i.map((function(t){return e(t,n,a)}))),Object.assign({},t,{children:r,toggled:l})},O=function(e){var t=e.node,n=JSON.stringify(t,null,4);return n||(n="Select A Node To See Its Data Structure Here..."),c.a.createElement("pre",{className:"mt-0"},c.a.createElement("code",{className:"language-json"},n))},S={name:"react-treebeard",id:1,toggled:!0,children:[{name:"example",children:[{name:"app.js"},{name:"data.js"},{name:"index.html"},{name:"styles.js"},{name:"webpack.config.js"}]},{name:"node_modules",loading:!0,children:[]},{name:"src",children:[{name:"components",children:[{name:"decorators.js"},{name:"treebeard.js"}]},{name:"index.js"}]},{name:"themes",children:[{name:"animations.js"},{name:"default.js"}]},{name:"gulpfile.js"},{name:"index.js"},{name:"package.json"}]},L={tree:{base:{listStyle:"none",backgroundColor:"#fff",margin:0,padding:0,color:"#000",fontSize:"14px"},node:{base:{position:"relative"},link:{cursor:"pointer",position:"relative",padding:"0px 5px",display:"block"},activeLink:{background:"#f8f8f8"},toggle:{base:{position:"relative",display:"inline-block",verticalAlign:"top",marginLeft:"-5px",height:"24px",width:"24px"},wrapper:{position:"absolute",top:"50%",left:"50%",margin:"-10px 0 0 -7px",height:"14px"},height:10,width:10,display:"inline-block",arrow:{fill:"#565656",strokeWidth:0}},header:{base:{display:"inline-block",verticalAlign:"top",color:"#565656"},connector:{width:"2px",height:"12px",borderLeft:"solid 2px black",borderBottom:"solid 2px black",position:"absolute",top:"0px",left:"-21px"},title:{lineHeight:"24px",verticalAlign:"middle"}},subtree:{listStyle:"none",paddingLeft:"19px"},loading:{color:"#7367f0"}}}},N={tree:{base:{listStyle:"none",backgroundColor:"#262c49",margin:0,padding:0,color:"#c2c6dc",fontSize:"14px"},node:{base:{position:"relative"},link:{cursor:"pointer",position:"relative",padding:"0px 5px",display:"block"},activeLink:{background:"#10163a"},toggle:{base:{position:"relative",display:"inline-block",verticalAlign:"top",marginLeft:"-5px",height:"24px",width:"24px"},wrapper:{position:"absolute",top:"50%",left:"50%",margin:"-10px 0 0 -7px",height:"14px"},height:10,width:10,display:"inline-block",arrow:{fill:"#fff",strokeWidth:0}},header:{base:{display:"inline-block",verticalAlign:"top",color:"#fff"},connector:{width:"2px",height:"12px",borderLeft:"solid 2px black",borderBottom:"solid 2px black",position:"absolute",top:"0px",left:"-21px"},title:{lineHeight:"24px",verticalAlign:"middle"}},subtree:{listStyle:"none",paddingLeft:"19px"},loading:{color:"#7367f0"}}}},A=function(e){return c.a.createElement("div",{style:e.style.wrapper},c.a.createElement(p.a,{size:"sm",color:"primary",style:e.style.arrow}))},T=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={data:S},e.onToggle=function(t,n){var a=e.state,r=a.cursor,i=a.data;r&&e.setState((function(){return{cursor:r,active:!1}})),t.active=!t.active,t.children&&(t.toggled=n),e.setState((function(){return{cursor:t,data:Object.assign({},i)}}))},e.onFilterMouseUp=function(t){var n=t.target.value.trim();if(!n)return e.setState((function(){return{data:S}}));var a=E(S,n);a=w(a,n),e.setState((function(){return{data:a}}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){v.a.highlightAll()}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.cursor;return b.decorators.Loading=A,c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:"React Treebeard",subTitle:"Data-Driven, Fast, Efficient and Customisable tree view component. ",link:"https://github.com/storybookjs/react-treebeard"}),c.a.createElement(d.a,null,c.a.createElement(u.a,{sm:"12"},c.a.createElement(m.a,null,c.a.createElement(h.a,null,c.a.createElement(g.a,null,"Default")),c.a.createElement(f.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,{xl:"6",lg:"12"},c.a.createElement("input",{type:"text",className:"form-control mb-1",onKeyUp:this.onFilterMouseUp}),c.a.createElement(b.Treebeard,{data:t,onToggle:this.onToggle,style:"light"===this.props.theme||"semi-dark"===this.props.theme?L:N,decorators:b.decorators,animations:!1})),c.a.createElement(u.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0"},c.a.createElement(O,{node:n}))))))))}}]),n}(c.a.Component);t.default=Object(k.b)((function(e){return{theme:e.customizer.customizer.theme}}))(T)},875:function(e,t,n){"use strict";var a=n(13),r=n(14),i=n(16),l=n(15),o=n(0),c=n.n(o),s=n(990),p=n(991),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(s.a,{className:"mb-2"},c.a.createElement(p.a,{sm:"12",className:"ml-50"},c.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?c.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):c.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),n}(c.a.Component);t.a=d}}]);
//# sourceMappingURL=255.19cd8b42.chunk.js.map