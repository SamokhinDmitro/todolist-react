(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(19),r=a.n(i),o=(a(26),a(7)),l=a(8),d=a(10),j=a(9),b=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeInput=function(e){n.setState({input:e.target.value})},n.sendTask=function(e){"Enter"===e.key&&n.state.input.trim().length>0&&(n.props.addTask(n.state.input),n.setState({input:""}))},n.state={input:""},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("input",{type:"text",className:"form-control add-task",placeholder:"New Task...",value:this.state.input,onChange:this.changeInput,onKeyPress:this.sendTask})}}]),a}(s.a.Component),u=a.p+"static/media/delete.e2d6cc85.svg",h=(a(27),function(e){var t=["todo-item"];return e.done&&t.push("todo-item__done"),Object(n.jsxs)("li",{className:t.join(" "),children:[Object(n.jsxs)("label",{className:"checkbox",children:[Object(n.jsx)("input",{type:"checkbox",className:"checkbox__real",checked:e.done,onChange:e.taskDone,name:"value-01",value:"1"}),Object(n.jsx)("span",{className:"checkbox__fake"}),Object(n.jsx)("span",{className:"checkbox__title",children:e.title})]}),Object(n.jsx)("button",{className:"todo-item__close",onClick:e.removeTask,children:Object(n.jsx)("img",{src:u,alt:"Delete"})})]})}),m=(a(28),a(29),a(11)),v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary navigation",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"navbar-brand",children:"React TodoApplication"}),Object(n.jsxs)("ul",{className:"navbar-nav navigation__list",children:[Object(n.jsx)("li",{className:"nav-item navigation__item",children:Object(n.jsx)(m.b,{exact:!0,className:"nav-link navigation__link",activeClassName:"navigation__link-active",to:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item navigation__item",children:Object(n.jsx)(m.b,{className:"navigation__link nav-link ",activeClassName:"navigation__link-active",to:"/about",children:"About"})}),Object(n.jsx)("li",{className:"nav-item navigation__item",children:Object(n.jsx)(m.b,{className:"nav-link navigation__link",activeStyle:{color:"orange"},to:{pathname:"/contacts",hash:"contacts"},children:"Contacts"})})]})]})})}}]),a}(s.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).taskDoneHandler=function(e){var t=n.state.tasks[e].done,a=n.state.tasks.concat();a[e].done=!t,n.setState({tasks:a})},n.removeTaskHandler=function(e){var t=n.state.tasks.concat();t.splice(e,1),n.setState({tasks:t})},n.addTaskHandler=function(e){var t={title:e,done:!1},a=n.state.tasks.concat();a.push(t),n.setState({tasks:a})},n.state={tasks:[{title:"\u0417\u0430\u0434\u0430\u0447\u04301",done:!1},{title:"\u0417\u0430\u0434\u0430\u0447\u04302",done:!1},{title:"\u0417\u0430\u0434\u0430\u0447\u04303",done:!0},{title:"\u0417\u0430\u0434\u0430\u0447\u04304",done:!1}]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(v,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-6 offset-3",children:Object(n.jsx)("div",{className:"card card-white ",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)(b,{addTask:this.addTaskHandler}),Object(n.jsx)("ul",{className:"todo-list",children:this.state.tasks.length?this.state.tasks.map((function(t,a){return Object(n.jsx)(h,{title:t.title,done:t.done,taskDone:function(){return e.taskDoneHandler(a)},removeTask:e.removeTaskHandler.bind(e,a)},a)})):Object(n.jsx)("li",{className:"todo-item",children:"\u041d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"})})]})})})})})]})}}]),a}(s.a.Component),x=(a(35),function(e){return e.children}),p=function(e){return Object(n.jsxs)(x,{children:[Object(n.jsx)(v,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-6 offset-3",children:Object(n.jsx)("div",{className:"card card-white ",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h1",{className:"card-title",children:e.title}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea expedita impedit nemo nisi nostrum repudiandae similique temporibus vero voluptates."})]})})})})})]})},k=a(2),f=(a(36),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).goHome=function(){console.log(e.props),e.props.history.push("/")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(x,{children:[Object(n.jsx)(v,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-6 offset-3",children:Object(n.jsxs)("div",{className:"card card-white ",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h1",{className:"card-title",children:"Contact Page"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea expedita impedit nemo nisi nostrum repudiandae similique temporibus vero voluptates."})]}),Object(n.jsx)("button",{className:"btn btn-info",onClick:this.goHome,children:"Go home"})]})})})})]})}}]),a}(s.a.Component)),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(k.d,{children:[Object(n.jsx)(k.b,{exact:!0,path:"/",component:O}),Object(n.jsx)(k.b,{path:"/about",render:function(){return Object(n.jsx)(p,{title:"About Pages"})}}),Object(n.jsx)(k.b,{path:"/contacts",component:f}),Object(n.jsx)(k.a,{to:"/"})]})}}]),a}(s.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))},_=Object(n.jsx)(m.a,{children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})})});r.a.render(_,document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.7be190f6.chunk.js.map