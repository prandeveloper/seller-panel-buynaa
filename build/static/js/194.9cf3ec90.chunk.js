(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[194],{2119:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),l=t(16),r=t(15),s=t(0),m=t.n(s),o=t(992),u=t(990),i=t(991),d=t(178),h=t(995),p=t(21),E=(t(893),t(797)),g=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;E.a.get("/getone_productcategory/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(u.a,{className:"m-2"},m.a.createElement(i.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Category Detail")),m.a.createElement(i.a,null,m.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return p.a.push("/app/category/categoryList")}},"Back"))),m.a.createElement(h.a,{className:"pb-0"},m.a.createElement(u.a,{className:"mb-5 mt-2"},m.a.createElement(i.a,{className:"d-flex align-items-start justify-content-center mb-2 mb-md-0",sm:"12",md:"5"},m.a.createElement("img",{src:this.state.data.product_img,alt:"Google Home",height:"300",width:"250"})),m.a.createElement(i.a,{md:"7",sm:"12"},m.a.createElement("h4",null,"Product Category Name "),m.a.createElement("h6",null,this.state.data.name),m.a.createElement("hr",null),m.a.createElement("h4",null,"Category Description "),m.a.createElement("h6",null,this.state.data.desc),m.a.createElement("hr",null),m.a.createElement("h4",null,"Status "),m.a.createElement("h6",null,this.state.data.status),m.a.createElement("hr",null))))))}}]),t}(m.a.Component);a.default=g},797:function(e,a,t){"use strict";var n=t(40),c=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=c},893:function(e,a,t){}}]);
//# sourceMappingURL=194.9cf3ec90.chunk.js.map