(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[156,191],{1478:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),r=t(16),c=t(15),m=t(0),s=t.n(m),u=t(1142),o=t(1140),h=t(1141),d=t(181),i=t(1145),E=t(21),p=(t(815),t(798)),v=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;p.a.get("/viewoneproduct/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data}),console.log(a.data.data.rate[0].rate)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,l;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(o.a,{className:"m-2"},s.a.createElement(h.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"History By Product Type Detail")),s.a.createElement(h.a,null,s.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/product/historyByProductTyp")}},"Back"))),s.a.createElement(i.a,{className:"pb-0"},s.a.createElement(o.a,{className:"mb-5 mt-2"},s.a.createElement(h.a,{className:"d-flex align-items-start justify-content-center mb-2 mb-md-0",sm:"12",md:"5"},s.a.createElement("img",{src:this.state.data.product_img,alt:"Google Home",height:"250",width:"250"})),s.a.createElement(h.a,{md:"7",sm:"12"},s.a.createElement("h3",null,this.state.data.item_name),s.a.createElement("h6",{className:""},"by ",null===(e=this.state.data.brand)||void 0===e?void 0:e.name),s.a.createElement("div",{className:"d-flex flex-wrap"},s.a.createElement("h3",{className:"text-primary"})),s.a.createElement("hr",null),s.a.createElement("h4",null,"Short Description "),s.a.createElement("h6",null,this.state.data.short_desc),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Description "),s.a.createElement("h6",null,this.state.data.desc),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Code"),s.a.createElement("h6",null,this.state.data.code),s.a.createElement("hr",null),s.a.createElement("h4",null,"HSN Code"),s.a.createElement("h6",null,this.state.data.hsn_code),s.a.createElement("hr",null),s.a.createElement("h4",null,"Brand"),s.a.createElement("h6",null,null===(a=this.state.data.brand)||void 0===a?void 0:a.name),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Category"),s.a.createElement("h6",null,null===(t=this.state.data.productcategory)||void 0===t?void 0:t.name),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Sub Category "),s.a.createElement("h6",null,null===(l=this.state.data.productsubcategory)||void 0===l?void 0:l.name),s.a.createElement("hr",null),s.a.createElement("h4",null,"Stock Quantity "),s.a.createElement("h6",null,this.state.data.stock_qty),s.a.createElement("hr",null),s.a.createElement("h4",null,"Size"),s.a.createElement("h6",null,this.state.data.size),s.a.createElement("hr",null),s.a.createElement("h4",null,"Color "),s.a.createElement("h6",null,this.state.data.colour),s.a.createElement("hr",null),s.a.createElement("h4",null,"Material "),s.a.createElement("h6",null,this.state.data.material),s.a.createElement("hr",null),s.a.createElement("h4",null,"BarCode "),s.a.createElement("h6",null,this.state.data.barcode),s.a.createElement("hr",null),s.a.createElement("h6",{className:"my-50"},s.a.createElement("span",null,"Available"),s.a.createElement("span",{className:"mx-50"},"-"),s.a.createElement("span",{className:"text-success"},"In Stock")))))))}}]),t}(s.a.Component);a.default=v},2174:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),r=t(16),c=t(15),m=t(0),s=t.n(m),u=t(1142),o=t(1140),h=t(1141),d=t(181),i=t(1145),E=t(21),p=(t(815),t(798)),v=(t(1478),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;p.a.get("/viewoneproduct/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data}),console.log(a.data.data.rate[0].rate)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,l;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(o.a,{className:"m-2"},s.a.createElement(h.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Activity Logs Detail")),s.a.createElement(h.a,null,s.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/product/historyByProductCat")}},"Back"))),s.a.createElement(i.a,{className:"pb-0"},s.a.createElement(o.a,{className:"mb-5 mt-2"},s.a.createElement(h.a,{className:"d-flex align-items-start justify-content-center mb-2 mb-md-0",sm:"12",md:"5"},s.a.createElement("img",{src:this.state.data.product_img,alt:"Google Home",height:"250",width:"250"})),s.a.createElement(h.a,{md:"7",sm:"12"},s.a.createElement("h3",null,this.state.data.item_name),s.a.createElement("h6",{className:""},"by ",null===(e=this.state.data.brand)||void 0===e?void 0:e.name),s.a.createElement("div",{className:"d-flex flex-wrap"},s.a.createElement("h3",{className:"text-primary"})),s.a.createElement("hr",null),s.a.createElement("h4",null,"Short Description "),s.a.createElement("h6",null,this.state.data.short_desc),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Description "),s.a.createElement("h6",null,this.state.data.desc),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Code"),s.a.createElement("h6",null,this.state.data.code),s.a.createElement("hr",null),s.a.createElement("h4",null,"HSN Code"),s.a.createElement("h6",null,this.state.data.hsn_code),s.a.createElement("hr",null),s.a.createElement("h4",null,"Brand"),s.a.createElement("h6",null,null===(a=this.state.data.brand)||void 0===a?void 0:a.name),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Category"),s.a.createElement("h6",null,null===(t=this.state.data.productcategory)||void 0===t?void 0:t.name),s.a.createElement("hr",null),s.a.createElement("h4",null,"Product Sub Category "),s.a.createElement("h6",null,null===(l=this.state.data.productsubcategory)||void 0===l?void 0:l.name),s.a.createElement("hr",null),s.a.createElement("h4",null,"Stock Quantity "),s.a.createElement("h6",null,this.state.data.stock_qty),s.a.createElement("hr",null),s.a.createElement("h4",null,"Size"),s.a.createElement("h6",null,this.state.data.size),s.a.createElement("hr",null),s.a.createElement("h4",null,"Color "),s.a.createElement("h6",null,this.state.data.colour),s.a.createElement("hr",null),s.a.createElement("h4",null,"Material "),s.a.createElement("h6",null,this.state.data.material),s.a.createElement("hr",null),s.a.createElement("h4",null,"BarCode "),s.a.createElement("h6",null,this.state.data.barcode),s.a.createElement("hr",null),s.a.createElement("h6",{className:"my-50"},s.a.createElement("span",null,"Available"),s.a.createElement("span",{className:"mx-50"},"-"),s.a.createElement("span",{className:"text-success"},"In Stock")))))))}}]),t}(s.a.Component));a.default=v},798:function(e,a,t){"use strict";var l=t(40),n=t.n(l).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=n},815:function(e,a,t){}}]);
//# sourceMappingURL=156.f60eff2f.chunk.js.map