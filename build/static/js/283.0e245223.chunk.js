(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[283],{2216:function(e,a,t){"use strict";t.r(a),t.d(a,"ViewStore",(function(){return y}));var n=t(13),s=t(14),l=t(16),c=t(15),m=t(0),r=t.n(m),o=t(1009),i=t(1007),E=t(1008),u=t(178),d=t(1012),b=t(360),N=t(337),h=t(359),p=t(281),f=t(798),g=t(21),v=t(2064),y=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={data:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("component mounting");var a=this.props.match.params.id;f.a.get("/getonestore/".concat(a)).then((function(a){console.log(a),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},r.a.createElement(i.a,{className:"m-2"},r.a.createElement(E.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Store Details")),r.a.createElement(E.a,null,r.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return g.a.push("/app/myStore/storeList")}},"Back"))),r.a.createElement(d.a,{className:"pb-0"},r.a.createElement("div",null,r.a.createElement(v.a,null,null===(e=this.state.data)||void 0===e||null===(a=e.storeImg)||void 0===a?void 0:a.map((function(e){return r.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"400"})})))),r.a.createElement(i.a,{className:"justify-content-md-center mt-3"},r.a.createElement(E.a,{sm:"8",className:""},r.a.createElement(o.a,{className:""},r.a.createElement("div",{className:"card-block"},r.a.createElement(i.a,{className:""},r.a.createElement(E.a,{className:""},r.a.createElement("h2",{className:"mt-2"},this.state.data.store_name)),r.a.createElement("div",{className:"col-md-auto text-right"})),r.a.createElement("div",{className:"row"}),r.a.createElement(i.a,{className:""},r.a.createElement(E.a,{className:"col-md-auto"},r.a.createElement("h3",null,r.a.createElement(b.a,{className:"feather icon-map-pin"}))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,this.state.data.address_line1," ",this.state.data.address_line2," ",this.state.data.landmark," ",this.state.data.city," ",this.state.data.state," ",this.state.data.pincode))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-auto"},r.a.createElement("h3",null,r.a.createElement(N.a,{className:"feather icon-globe"}))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,r.a.createElement("a",{href:"www.casualdress.com",target:"_blank"},this.state.data.websiteUrl)))),r.a.createElement(i.a,{className:""},r.a.createElement(E.a,{className:"col-md-auto"},r.a.createElement("h3",null,r.a.createElement(h.a,{className:"feather icon-mail"}))),r.a.createElement(E.a,{className:""},r.a.createElement("h3",null,r.a.createElement("a",{href:""},this.state.data.store_email)))),r.a.createElement(i.a,{className:""},r.a.createElement(E.a,{className:"col-md-auto"},r.a.createElement("h3",null,r.a.createElement(p.a,{className:"far fa-clock"}))),r.a.createElement(E.a,{className:""},r.a.createElement("h3",null,r.a.createElement("span",{className:"text-success"},"Open"),this.state.data.day," ",this.state.data.startTym,"-",this.state.data.endTym))),r.a.createElement("p",{className:"border-top mb-2 pt-1 mt-2"}),r.a.createElement(i.a,{className:""},r.a.createElement(E.a,{className:""},r.a.createElement("h4",null,"Speciality"),r.a.createElement("span",null,this.state.data.business_type))),r.a.createElement("div",{className:"mb-2 mt-2"}),r.a.createElement(i.a,{className:""},r.a.createElement(E.a,{className:""},r.a.createElement("h4",null,"Introduction"),r.a.createElement("span",null,this.state.data.store_desc))),r.a.createElement("p",{className:"border-top mb-2 pt-1 mt-2"}),r.a.createElement(i.a,{className:""},r.a.createElement(E.a,{className:""},r.a.createElement("button",{type:"button",className:"btn btn-success"},"Topwear"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))),r.a.createElement("button",{type:"button",className:"btn btn-info"},"Tshirts"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))),r.a.createElement("button",{type:"button",className:"btn btn-warning"},"Bottom Wear"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))),r.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Jeans"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))),r.a.createElement("button",{type:"button",className:"btn btn-success"},"Topwear"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))),r.a.createElement("button",{type:"button",className:"btn btn-info"},"Tshirts"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))),r.a.createElement("button",{type:"button",className:"btn btn-warning"},"Bottom Wear"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))),r.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Jeans"," ",r.a.createElement("span",{className:"badge"},r.a.createElement("i",{className:"feather icon-x"}))))),r.a.createElement("p",{className:"border-top m-b-20 p-t-10 m-t-20"}),r.a.createElement("div",{className:"form-group text-right"},r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-outline-primary"},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Save")))))))))}}]),t}(m.Component);a.default=y},798:function(e,a,t){"use strict";var n=t(40),s=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=s}}]);
//# sourceMappingURL=283.0e245223.chunk.js.map