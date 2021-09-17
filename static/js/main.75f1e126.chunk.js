(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s,r=n(10),c=n.n(r),a=n(1),o=n.n(a),i=n(2),l=n(4),u=n(5),d=n(7),p=n(6),h=n(3),f=n.n(h),j=(n(16),n(17),n(9)),b=n.n(j),v=n(0),m=function(e){return Object(v.jsx)(v.Fragment,{children:e.visibleTodos.map((function(t){return Object(v.jsxs)("li",{className:b()({TodoList__item:!0,"TodoList__item--unchecked":!t.completed,"TodoList__item--checked":t.completed}),children:[Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"checkbox",readOnly:!0}),Object(v.jsx)("p",{children:t.title})]}),Object(v.jsx)("button",{className:b()({button:!0,"TodoList__user-button":!0,"TodoList__user-button--selected":e.selectedUser===t.userId}),type:"button",onClick:function(){return e.onChangeUser(t.userId)},children:"User #".concat(t.userId)})]},t.id)}))})};n(19);!function(e){e.All="All",e.Active="Active",e.Completed="Completed"}(s||(s={}));var O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={visibleTodos:e.props.todos,filterBy:s.All,titleFilter:""},e.filterOptions=[s.All,s.Active,s.Completed],e.loadTodos=function(){e.setState({visibleTodos:e.props.todos})},e.getFilterTodos=function(){var t=e.state,n=t.filterBy,r=t.titleFilter,c=e.props.todos;switch(!0){case n===s.All:e.setState({visibleTodos:c.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}))});break;case n===s.Active:e.setState({visibleTodos:c.filter((function(e){return!e.completed&&e.title.toLowerCase().includes(r.toLowerCase())}))});break;case n===s.Completed:e.setState({visibleTodos:c.filter((function(e){return e.completed&&e.title.toLowerCase().includes(r.toLowerCase())}))})}},e.selectHandleChange=function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({filterBy:n.target.value});case 2:e.getFilterTodos();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.inputHandleChange=function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({titleFilter:n.target.value});case 2:e.getFilterTodos();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e){e.todos!==this.props.todos&&this.loadTodos()}},{key:"render",value:function(){var e=this.props,t=e.selectedUser,n=e.onChangeUser,s=this.state,r=s.visibleTodos,c=s.filterBy;return Object(v.jsxs)("div",{className:"TodoList",children:[Object(v.jsx)("h2",{children:"Todos:"}),Object(v.jsx)("input",{placeholder:"Search by title",name:"titleFilter",type:"text",onChange:this.inputHandleChange,className:"TodoList__input"}),Object(v.jsx)("select",{name:"filterBy",value:c,onChange:this.selectHandleChange,className:"TodoList__select",children:this.filterOptions.map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)}))}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(0)},className:"TodoList__button button",children:"Clear selected user"}),Object(v.jsx)("div",{className:"TodoList__list-container",children:Object(v.jsx)("ul",{className:"TodoList__list",children:Object(v.jsx)(m,{selectedUser:t,onChangeUser:n,visibleTodos:r})})})]})}}]),n}(f.a.Component),x=(n(20),"https://mate.academy/students-api/");function y(e){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x).concat(t));case 2:if(!(s=e.sent).ok||!(null===(n=s.headers.get("content-type"))||void 0===n?void 0:n.includes("application/json"))){e.next=5;break}return e.abrupt("return",s.json());case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("todos");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(U(2));var T=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.getUser=Object(i.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e.props.selectedUser);case 2:n=t.sent,e.setState({user:n});case 4:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"componentDidUpdate",value:function(e){e.selectedUser!==this.props.selectedUser&&this.getUser()}},{key:"render",value:function(){var e=this.state.user;return e?Object(v.jsxs)("div",{className:"CurrentUser",children:[Object(v.jsx)("h2",{className:"CurrentUser__title",children:Object(v.jsx)("span",{children:"Selected user ".concat(e.id)})}),Object(v.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(v.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(v.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}):Object(v.jsx)("p",{children:"No users with this ID or you are offline"})}}]),n}(f.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0,todos:[]},e.downloadTodos=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,C();case 3:t.t1=t.sent,t.t2={todos:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}}),t)}))),e.changeSelectedUser=function(t){e.setState({selectedUserId:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.downloadTodos()}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.todos;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("div",{className:"App__sidebar",children:Object(v.jsx)(O,{todos:n,selectedUser:t,onChangeUser:this.changeSelectedUser})}),Object(v.jsx)("div",{className:"App__content",children:Object(v.jsx)("div",{className:"App__content-container",children:t?Object(v.jsx)(T,{selectedUser:t}):"No user selected"})})]})}}]),n}(f.a.Component),N=k;c.a.render(Object(v.jsx)(N,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.75f1e126.chunk.js.map