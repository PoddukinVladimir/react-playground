(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(6),i=n(10),s=n(7),u=n(1),m=n(2),d=n(4),f=n(3),h=n(5),b=function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"row no-gutters justify-content-between align-items-baseline"},o.a.createElement("h1",null,"Todo list"),o.a.createElement("h5",{className:"text-secondary"},t," more to do, ",n," done"))},g=(n(18),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={currentActive:"All"},e.buttons=[{filter:"all",title:"All"},{filter:"active",title:"Active"},{filter:"done",title:"Done"}],e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map(function(e){var a=e.filter===t?"btn btn-info":"btn btn-outline-secondary";return o.a.createElement("button",{onClick:function(){return n(e.filter)},className:a,type:"button",key:e.filter},e.title)});return o.a.createElement("div",{className:"item-status-filter btn-group"},a)}}]),t}(a.Component)),p=(n(19),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={searchPredicate:""},e.onSearchChange=function(t){var n=t.target.value;e.setState({searchPredicate:n}),e.props.onSearchChange(n)},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.searchPredicate,t=this.props,n=t.filter,a=t.onFilterChange;return o.a.createElement("div",{className:"search-panel d-flex mt-3"},o.a.createElement("div",{className:"search-panel-input mr-1"},o.a.createElement("input",{className:"form-control",onChange:this.onSearchChange,placeholder:"Type here to search",value:e,type:"text"})),o.a.createElement(g,{onFilterChange:a,filter:n}))}}]),t}(a.Component)),v=n(11),j=(n(20),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.done,a=e.important,r=e.onDeleted,c=e.onToggleImportant,l=e.onToggleDone,i="todo-list-item";return n&&(i+=" done"),a&&(i+=" important"),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:i,onClick:l},o.a.createElement("span",{className:"todo-list-item-label"},t)),o.a.createElement("div",{className:"todo-list-item-actions"},o.a.createElement("button",{className:"btn btn-sm btn-outline-danger mr-1",onClick:r},o.a.createElement("i",{className:"fa fa-trash fa-fw"})),o.a.createElement("button",{className:"btn btn-sm btn-outline-success",onClick:c},o.a.createElement("i",{className:"fa fa-exclamation fa-fw"}))))}}]),t}(a.Component)),O=(n(21),function(e){var t=e.items,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map(function(e){var t=e.id,c=Object(v.a)(e,["id"]);return o.a.createElement("li",{className:"list-group-item",key:t},o.a.createElement(j,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list mt-3"},c)}),E=(n(22),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={label:""},e.onAdded=function(t){t.preventDefault(),e.state.label&&(e.props.onAdded(e.state.label),e.clearLabel())},e.clearLabel=function(){e.setState({label:""})},e.onLabelChange=function(t){e.setState({label:t.target.value})},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"add-item-form text-center mt-3 d-flex",onSubmit:this.onAdded},o.a.createElement("input",{type:"text",className:"form-control",value:this.state.label,placeholder:"What needs to be done",onChange:this.onLabelChange}),o.a.createElement("button",{className:"btn btn-outline-secondary ml-1",type:"submit"},"Add"))}}]),t}(a.Component)),C=(n(23),function(e){function t(){var e;function n(e){return{label:e,important:!1,id:Math.ceil(1e6*Math.random())}}return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={todoData:[n("Learn React"),n("Build awesome app"),n("Drink coffee")],searchPredicate:"",filter:"all"},e.deleteItem=function(t){e.setState(function(e){return{todoData:e.todoData.filter(function(e){return e.id!==t})}})},e.addItem=function(t){var a=n(t);e.setState(function(e){var t=e.todoData;return{todoData:[].concat(Object(s.a)(t),[a])}})},e.toggleProperty=function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(s.a)(e.slice(0,a)),[r],Object(s.a)(e.slice(a+1)))},e.onToggleDone=function(t){e.setState(function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"done")}})},e.onToggleImportant=function(t){e.setState(function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"important")}})},e.onSearchChange=function(t){e.setState({searchPredicate:t})},e.search=function(e,t){return""===t?e:e.filter(function(e){return e.label.toLocaleLowerCase().includes(t.toLocaleLowerCase())})},e.filter=function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}},e.onFilterChange=function(t){e.setState({filter:t})},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.searchPredicate,a=e.filter,r=this.filter(this.search(t,n),a),c=t.reduce(function(e,t){return t.done||e++,e},0),l=t.length-c;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 offset-sm-3"},o.a.createElement(b,{toDo:c,done:l}),o.a.createElement(p,{filter:a,onFilterChange:this.onFilterChange,onSearchChange:this.onSearchChange}),o.a.createElement(O,{items:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(E,{onAdded:this.addItem})))}}]),t}(a.Component));c.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.95b8042e.chunk.js.map