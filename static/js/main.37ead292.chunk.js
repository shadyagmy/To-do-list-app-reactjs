(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),i=(a(15),a(1)),l=a(2),s=a(4),d=a(3),u=a(5),m=(a(16),a(8)),h=(a(17),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",content:""},a.chaneHandler=function(e){a.setState(Object(m.a)({},e.target.id,e.target.value))},a.submitHandler=function(e){e.preventDefault(),a.props.addTodo(a.state),a.setState({title:"",content:""})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app__form"},o.a.createElement("h2",{className:"app__form__heading"},"Enter your to do!"),o.a.createElement("form",{onSubmit:this.submitHandler},o.a.createElement("input",{type:"text",placeholder:"Title",id:"title",onChange:this.chaneHandler,value:this.state.title,required:!0}),o.a.createElement("textarea",{type:"text",style:{height:"100px"},placeholder:"Content",id:"content",onChange:this.chaneHandler,value:this.state.content}),o.a.createElement("button",{type:"submit"},"Add")))}}]),t}(n.Component));a(18);function p(e){var t=e.todos,a=e.removetodo,n=t.length>0?t.map(function(e){return o.a.createElement("div",{className:"todo",key:e.id},o.a.createElement("div",{className:"todo__describtion"},o.a.createElement("h4",null,e.title),o.a.createElement("p",null,e.content)),o.a.createElement("div",{className:"todo__remove"},o.a.createElement("i",{className:"fas fa-trash-alt",onClick:function(){return a(e.id)}})))}):o.a.createElement("h3",{className:"noTodo"},"Fill your to do list from the previous form");return o.a.createElement("div",{className:"todos__container"},n)}var f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.addTodo=function(e){if(e.title.length<2);else{e.id=Math.random();var t=a.state.todos;t.push(e),a.setState({todos:t})}},a.removeTodo=function(e){var t=a.state.todos.filter(function(t){return t.id!==e});a.setState({todos:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",{className:"app__heading"},"To do list app"),o.a.createElement("div",{className:"app__container"},o.a.createElement(h,{addTodo:this.addTodo}),o.a.createElement(p,{todos:this.state.todos,removetodo:function(t){return e.removeTodo(t)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.37ead292.chunk.js.map