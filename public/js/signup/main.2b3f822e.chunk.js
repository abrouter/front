(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(80),s=a(81),i=a(83),l=a(82),c=a(29),d=a(48),u=a(84),m=a(30);var p=function(e,t,a){var n;return fetch(window.api+e,(n={credentials:"include",method:t},Object(m.a)(n,"credentials","omit"),Object(m.a)(n,"headers",{"Content-Type":"application/json",Accept:"application/json"}),Object(m.a)(n,"body",JSON.stringify(a)),n)).then((function(e){if(200!==e.status&&201!==e.status){var t=new Error("Request failed");throw t.json=e.json(),t}return e.json()}))};var h=function(e,t){return p("users","POST",{data:{type:"users",attributes:{username:e,password:t}}})},f={SIGNUP_BUTTON:"Sign up",SIGNIN_BUTTON:"Sign in"};var v=function(e,t){return p("auth","POST",{data:{type:"auth-request",attributes:{username:e,password:t}}})},b=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={},a.mode=a.props.mode,a.submitHandle=a.submitHandle.bind(Object(c.a)(a));var n=new URLSearchParams(window.location.search);return a.state.email=n.get("email"),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.message=""}}]),Object(d.a)(t,[{key:"submitHandle",value:function(e){var t=this;e.preventDefault(),document.getElementById("message").style.display="none";var a=document.getElementById("login").value,n=document.getElementById("password").value;"signup"===this.mode?h(a,n).then((function(e){var t=e.data.id;window.location.href="/en/redirect?token="+t+"&to=/en/board?signup_conversion=1"})).catch((function(e){return e.json.then((function(e){return t.error(e.data.attributes.message)}))})):v(a,n).then((function(e){var t=e.data.id;window.location.href="/en/redirect?token="+t+"&to=/en/board"})).catch((function(e){return t.error("Invalid credentials")}))}},{key:"error",value:function(e){setTimeout((function(){document.getElementById("message").style="dispaly:block"}),200),this.message=e,this.forceUpdate()}},{key:"handleOnChange",value:function(e){this.state.email=e.target.value,this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"alert alert-warning",id:"message",style:{display:"none"},role:"alert"},this.message),r.a.createElement("form",{onSubmit:this.submitHandle},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"login"},"Email address"),r.a.createElement("input",{type:"text",className:"form-control",id:"login",value:this.state.email,placeholder:"Email",onChange:this.handleOnChange.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password"})),r.a.createElement("input",{id:"proceed",type:"submit",className:"btn btn-primary",value:f[this.mode.toUpperCase()+"_BUTTON"]})),r.a.createElement("div",{className:"mt-2",id:"buttonDiv"}))}}]),t}(r.a.Component);console.log(window.mode);var w=function(){return r.a.createElement("div",null,r.a.createElement(b,{mode:window.mode}))};window.api||(window.api="http://localhost:904/api/v1/"),Object(o.render)(r.a.createElement(w,null),document.getElementById("root"))},85:function(e,t,a){e.exports=a(177)}},[[85,1,2]]]);
//# sourceMappingURL=main.2b3f822e.chunk.js.map