(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),o=a.n(s),r=a(19),c=a.n(r),i=(a(33),a(2)),l=a(3),d=a(13),j=a(5),b=a(4),u=o.a.createContext(),p=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"removeItem",value:function(e){(0,this.context.removeTodo)(e)}},{key:"render",value:function(){var e=this,t={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:"1rem"}};return Object(n.jsxs)("li",{style:t.li,children:[Object(n.jsxs)("span",{className:"".concat(this.props.todo.completed&&"done"),children:[Object(n.jsx)("input",{type:"checkbox",style:t.input,checked:this.props.todo.completed,onChange:function(){return e.props.onChange(e.props.todo.id)}}),Object(n.jsx)("strong",{children:this.props.index+1}),"\xa0",this.props.todo.title]}),Object(n.jsx)("button",{className:"close",onClick:function(){e.removeItem(e.props.todo.id)},"aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})}}]),a}(o.a.Component);p.contextType=u;var m=p,h=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0},children:this.props.todos.map((function(t,a){return Object(n.jsx)(m,{todo:t,index:a,onChange:e.props.onToggle},a)}))})}}]),a}(o.a.Component),O=(a(34),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).addTodo=function(e){e.preventDefault(),n.state.value.trim()&&(n.props.onCreate(n.state.value),n.setState({value:""}))},n.state={isOpen:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:function(){return e.setState({isOpen:!0})},children:"Open modal"}),this.state.isOpen&&Object(n.jsx)("div",{className:"modal",children:Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsx)("h1",{children:"Modal title"}),Object(n.jsx)("p",{children:"This is modal text..."}),Object(n.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:function(){return e.setState({isOpen:!1})},children:"Close"})]})})]})}}]),a}(o.a.Component)),x=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).addTodo=function(e){e.preventDefault(),n.state.value.trim()&&(n.props.onCreate(n.state.value),n.setState({value:""}))},n.updateValue=function(e){n.setState({value:e.target.value})},n.state={value:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"row  justify-content-between",children:[Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsx)("form",{style:{marginBottom:"1rem"},onSubmit:function(t){return e.addTodo(t)},children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("input",{placeholder:"New Todo",value:this.state.value,onChange:function(t){e.updateValue(t)},className:"form-control form-control-sm","aria-label":"New Todo","aria-describedby":"button-addon"}),Object(n.jsx)("button",{className:"btn btn-outline-secondary btn-sm",type:"submit",id:"button-addon",children:"Add"})]})})}),Object(n.jsx)("div",{className:"col-sm-3",children:Object(n.jsx)(O,{})})]})}}]),a}(o.a.Component),v=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(n.jsxs)("div",{className:"lds-spinner",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}}]),a}(o.a.Component),f=a(17),g="AUTH_CHANGE_EMAIL_TEXT",y="AUTH_CHANGE_PASSWORD_TEXT",N=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onEmailChange=n.onEmailChange.bind(Object(d.a)(n)),n.onPasswordChange=n.onPasswordChange.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"onEmailChange",value:function(e){this.props.setEmailText(e.target.value)}},{key:"onPasswordChange",value:function(e){this.props.setPasswordText(e.target.value)}},{key:"render",value:function(){var e=this.props.email,t=this.props.password;return Object(n.jsxs)("form",{className:"form-signin",children:[Object(n.jsx)("div",{className:"text-center mb-4",children:Object(n.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Sign in"})}),Object(n.jsx)("div",{className:"mb-2 form-label-group",children:Object(n.jsx)("input",{type:"text",name:"login",className:"form-control",placeholder:"Email address",autoComplete:"off",value:e,onChange:this.onEmailChange,autoFocus:!0})}),Object(n.jsx)("div",{className:"mb-2 form-label-group",children:Object(n.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",value:t,onChange:this.onPasswordChange})}),Object(n.jsx)("div",{className:"checkbox mb-3",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(n.jsx)("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",children:"Sign in"})]})}}]),a}(o.a.Component),C=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(N,{email:this.props.email,password:this.props.password,setEmailText:this.props.setEmailText,setPasswordText:this.props.setPasswordText})}}]),a}(o.a.Component),T={setEmailText:function(e){return{type:g,payload:e}},setPasswordText:function(e){return{type:y,payload:e}}},w=Object(f.b)((function(e){return{email:e.auth.email,password:e.auth.password}}),T)(C),P="REGISTRATION_CHANGE_EMAIL_TEXT",k="REGISTRATION_CHANGE_PASSWORD_TEXT",E="REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT",S=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onEmailChange=n.onEmailChange.bind(Object(d.a)(n)),n.onPasswordChange=n.onPasswordChange.bind(Object(d.a)(n)),n.onRepeatPasswordChange=n.onRepeatPasswordChange.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"onEmailChange",value:function(e){this.props.setEmailText(e.target.value)}},{key:"onPasswordChange",value:function(e){this.props.setPasswordText(e.target.value)}},{key:"onRepeatPasswordChange",value:function(e){this.props.setRepeatPasswordText(e.target.value)}},{key:"render",value:function(){var e=this.props.email,t=this.props.password,a=this.props.repeatPassword;return Object(n.jsxs)("form",{className:"form-signin",children:[Object(n.jsx)("div",{className:"text-center mb-4",children:Object(n.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Sign up"})}),Object(n.jsx)("div",{className:"mb-2 form-label-group",children:Object(n.jsx)("input",{type:"text",name:"login",className:"form-control",autoComplete:"off",placeholder:"Email address",value:e,onChange:this.onEmailChange,required:!0,autoFocus:!0})}),Object(n.jsx)("div",{className:"mb-2 form-label-group",children:Object(n.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",value:t,onChange:this.onPasswordChange})}),Object(n.jsx)("div",{className:"mb-2 form-label-group",children:Object(n.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",value:a,onChange:this.onRepeatPasswordChange,required:!0})}),Object(n.jsx)("div",{className:"checkbox mb-3",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(n.jsx)("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",children:"Sign up"})]})}}]),a}(o.a.Component),R=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(S,{email:this.props.email,password:this.props.password,setEmailText:this.props.setEmailText,setPasswordText:this.props.setPasswordText,setRepeatPasswordText:this.props.setRepeatPasswordText})}}]),a}(o.a.Component),A={setEmailText:function(e){return{type:P,payload:e}},setPasswordText:function(e){return{type:k,payload:e}},setRepeatPasswordText:function(e){return{type:E,payload:e}}},_=Object(f.b)((function(e){return{email:e.auth.email,password:e.auth.password,repeatPassword:e.auth.repeatPassword}}),A)(R),I=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("h1",{className:"text-center mb-5",children:"Complex"}),Object(n.jsx)("div",{className:"forms",children:Object(n.jsxs)("div",{className:"row mx-auto",children:[Object(n.jsx)("div",{className:"col-md-4 mx-auto",children:Object(n.jsx)(w,{})}),Object(n.jsx)("div",{className:"col-md-0 border mx-auto"}),Object(n.jsx)("div",{className:"col-md-4 mx-auto",children:Object(n.jsx)(_,{})})]})})]})}}]),a}(o.a.Component),D=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"jumbotron",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"display-4",children:"About page"}),Object(n.jsxs)("p",{className:"lead",children:["React aplication TheTuddle version ",Object(n.jsx)("strong",{children:"1.0.1"})]}),Object(n.jsx)("p",{children:"An app for exploring and testing various features of React JS."})]})})}}]),a}(o.a.Component),G=a(14),H=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:[Object(n.jsx)(G.b,{className:"navbar-brand",to:"/",children:"TheTuddle"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(G.b,{className:"nav-link",to:"/",exact:!0,children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(G.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(n.jsx)("div",{className:"form-inline mt-2 mt-md-0",children:Object(n.jsx)("div",{className:"nav-item",children:Object(n.jsx)(G.b,{className:"btn btn-sm btn-outline-secondary",to:"/login",children:"Login"})})})]})]})}}]),a}(o.a.Component),B=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.alert?Object(n.jsxs)("div",{className:"alert alert-".concat(alert.type||"warning"," alert-dismissible fade show"),children:[Object(n.jsx)("strong",{children:"Atention!"}),alert.text,Object(n.jsx)("button",{type:"button",className:"close","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null}}]),a}(o.a.Component),F=a(7),L=a(16),M=a(12),X={email:"",password:""},J={email:"",password:"",repeatPassword:""},W=Object(L.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case g:return Object(M.a)(Object(M.a)({},e),{},{email:t.payload});case y:return Object(M.a)(Object(M.a)({},e),{},{password:t.payload})}return e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case P:return Object(M.a)(Object(M.a)({},e),{},{email:t.payload});case k:return Object(M.a)(Object(M.a)({},e),{},{password:t.payload});case E:return Object(M.a)(Object(M.a)({},e),{},{repeatPassword:t.payload})}return e}}),q=Object(L.c)(W),U=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggleTodo=function(e){n.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),n.setState({todo:t})}))},n.removeTodo=function(e){n.setState({todos:n.state.todos.filter((function(t){return t.id!==e}))})},n.addTodo=function(e){var t=n.state.todos.concat({id:n.state.todos.length+1,completed:!1,title:e});n.setState({todos:t})},n.state={todosOld:[{id:10801,completed:!0,title:"Buy bread"},{id:10802,completed:!1,title:"Buy milk"},{id:10803,completed:!1,title:"Buy beef"}],todos:[],loading:!0},n.removeTodo=n.removeTodo.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return e.json()})).then((function(t){t=e.state.todos.concat(e.state.todosOld,t),setTimeout((function(){e.setState({todos:t}),e.setState({loading:!1})}),1100)}))}},{key:"render",value:function(){return Object(n.jsx)(f.a,{store:q,children:Object(n.jsx)(G.a,{children:Object(n.jsxs)(u.Provider,{value:{removeTodo:this.removeTodo},children:[Object(n.jsx)(H,{}),Object(n.jsxs)("div",{className:"container pt-4",children:[Object(n.jsx)(B,{}),Object(n.jsxs)(F.c,{children:[Object(n.jsxs)(F.a,{path:"/",exact:!0,children:[Object(n.jsx)("h1",{children:"My ToDo List"}),Object(n.jsx)(x,{onCreate:this.addTodo}),this.state.todos.length?Object(n.jsx)(h,{todos:this.state.todos,onToggle:this.toggleTodo}):this.state.loading?Object(n.jsx)(v,{}):Object(n.jsx)("p",{children:"No Todos!"})]}),Object(n.jsx)(F.a,{path:"/about",component:D}),Object(n.jsx)(F.a,{path:"/login",component:I})]})]})]})})})}}]),a}(o.a.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),o(e),r(e)}))};c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),V()}},[[40,1,2]]]);
//# sourceMappingURL=main.dc0d3392.chunk.js.map