(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[228],{2224:function(e,a,t){"use strict";t.r(a);var o=t(13),n=t(14),r=t(16),c=t(15),i=t(0),l=t.n(i),s=t(1142),d=t(1140),m=t(1141),p=t(181),u=t(1145),b=t(804),y=(t(847),t(885)),h=t(913),f=t(873),E=t.n(f),v=(t(906),t(856),t(798)),N=t(21),S=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,description:E()(Object(y.convertToRaw)(e.getCurrentContent()))})},n.submitHandler=function(e){e.preventDefault(),v.a.post("/addprivacy_policy",n.state).then((function(e){console.log(e),n.props.history.push("/app/privacyPolicy/privacyPolicy"),alert("Privacy Policy Added Successfully !")})).catch((function(e){console.log(e)}))},n.state={description:"",editorState:y.EditorState.createEmpty()},n}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(d.a,{className:"m-2"},l.a.createElement(m.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Privacy Policy")),l.a.createElement(m.a,null,l.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/privacyPolicy/privacyPolicy")}},"Back"))),l.a.createElement(u.a,null,l.a.createElement(b.a,{onSubmit:this.submitHandler},l.a.createElement(h.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),l.a.createElement("br",null),l.a.createElement(p.a,{color:"primary"},"Add New Policy"))))}}]),t}(l.a.Component);a.default=S},798:function(e,a,t){"use strict";var o=t(40),n=t.n(o).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=n},856:function(e,a,t){}}]);
//# sourceMappingURL=228.42ee2aba.chunk.js.map