(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[110],{1227:function(e,a,t){e.exports=t.p+"static/media/ilogo.5f4d959d.png"},1228:function(e,a,t){},2137:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),r=t(16),s=t(15),c=t(0),o=t.n(c),m=t(990),i=t(991),d=t(178),u=t(992),E=t(995),p=t(792),v=t(860),b=t(815),h=t(797),f=(t(1255),t(1226),t(840)),g=t.n(f),N=t(1227),y=t.n(N),T=t(326),O=t(361),j=t(395),k=(t(1228),function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:[]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/getoneorderbyseller/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{breadCrumbTitle:"Invoice"}),this.state.data.map((function(a){var t,l,n;return o.a.createElement(m.a,null,o.a.createElement(i.a,{className:"d-flex flex-column flex-md-row justify-content-end invoice-header mb-1",md:"7",sm:"12"},o.a.createElement(d.a,{className:"mr-1 mb-md-0 mb-1",color:"primary",onClick:function(){return window.print()}},o.a.createElement(T.a,{size:"15"}),o.a.createElement("span",{className:"align-middle ml-50"},"Print"))),o.a.createElement(i.a,{className:"invoice-wrapper",sm:"12"},o.a.createElement(u.a,{className:"invoice-page"},o.a.createElement(E.a,null,o.a.createElement(m.a,null,o.a.createElement(i.a,{md:"6",sm:"12",className:"pt-1"},o.a.createElement(p.a,{className:"pt-1"},o.a.createElement("img",{src:y.a,alt:"logo"}))),o.a.createElement(i.a,{md:"6",sm:"12",className:"text-right"},o.a.createElement("h1",null,"Invoice"),o.a.createElement("div",{className:"invoice-details mt-2"},o.a.createElement("h5",{className:"mt-2"},"ORDER ID"),o.a.createElement("h6",null,null===a||void 0===a||null===(t=a.orderId)||void 0===t?void 0:t._id)),o.a.createElement("div",{className:"invoice-details mt-2"},o.a.createElement("h5",{className:"mt-2"},"INVOICE DATE"),o.a.createElement("h6",null,g()(null===a||void 0===a||null===(l=a.orderId)||void 0===l?void 0:l.createdAt).format("ll"))))),o.a.createElement(m.a,{className:"pt-2"},o.a.createElement(i.a,{md:"6",sm:"12"},o.a.createElement("h5",null,"Recipient"),o.a.createElement("div",{className:"recipient-info my-2"},o.a.createElement("p",null,e.state.data.customer_name)),o.a.createElement("div",{className:"recipient-contact pb-2"},o.a.createElement("p",null,o.a.createElement(O.a,{size:15,className:"mr-50"}),e.state.data.customer_email),o.a.createElement("p",null,o.a.createElement(j.a,{size:15,className:"mr-50"}),e.state.data.customer_phone)))),o.a.createElement("div",{className:"invoice-items-table pt-1"},o.a.createElement(m.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement(v.a,{responsive:!0,borderless:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Product Nane"),o.a.createElement("th",null,"Quantity"),o.a.createElement("th",null,"Sell Price"),o.a.createElement("th",null,"Discount"),o.a.createElement("th",null,"Amount"))),o.a.createElement("tbody",null,null===(n=e.state.data.product)||void 0===n?void 0:n.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.qty),o.a.createElement("td",null,e.cost),o.a.createElement("td",null,e.discount),o.a.createElement("td",null,e.amount))}))))))),o.a.createElement("div",{className:"invoice-total-table"},o.a.createElement(m.a,null,o.a.createElement(i.a,{sm:{size:7,offset:5},xs:{size:7,offset:5}},o.a.createElement(v.a,{responsive:!0,borderless:!0},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Total Quantity"),o.a.createElement("td",null,e.state.data.total_qty)),o.a.createElement("tr",null,o.a.createElement("th",null,"Grand Total"),o.a.createElement("td",null,e.state.data.total_amount)))))))))))})))}}]),t}(o.a.Component));a.default=k},797:function(e,a,t){"use strict";var l=t(40),n=t.n(l).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=n},860:function(e,a,t){"use strict";var l=t(5),n=t(7),r=t(0),s=t.n(r),c=t(1),o=t.n(c),m=t(4),i=t.n(m),d=t(3),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.tagPropType,responsiveTag:d.tagPropType,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},E=function(e){var a=e.className,t=e.cssModule,r=e.size,c=e.bordered,o=e.borderless,m=e.striped,u=e.dark,E=e.hover,p=e.responsive,v=e.tag,b=e.responsiveTag,h=e.innerRef,f=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(d.mapToCssModules)(i()(a,"table",!!r&&"table-"+r,!!c&&"table-bordered",!!o&&"table-borderless",!!m&&"table-striped",!!u&&"table-dark",!!E&&"table-hover"),t),N=s.a.createElement(v,Object(l.a)({},f,{ref:h,className:g}));if(p){var y=Object(d.mapToCssModules)(!0===p?"table-responsive":"table-responsive-"+p,t);return s.a.createElement(b,{className:y},N)}return N};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E}}]);
//# sourceMappingURL=110.be5e279a.chunk.js.map