(this["webpackJsonptune-cloud"]=this["webpackJsonptune-cloud"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(37),i=n.n(r),s=(n(49),n(30)),u=n(4),o=(n(50),n(42)),l=n(70),d=n(6);function j(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(u.e)(),s=function(e){i.push("/artist/".concat(e))};return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:"Tune Cloud"}),Object(d.jsxs)("div",{className:"input-group w-50",children:[Object(d.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:Object(d.jsx)(l.a,{})}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Search for an artist","aria-label":"Input group example","aria-describedby":"basic-addon1",onKeyDown:function(t){if("Enter"===t.key||t.target.value.length>=4){var n=t.target.value;e.artistService.find(n).then((function(e){r(e.artists)})).catch((function(e){console.error(e)}))}}})]}),Object(d.jsx)("ul",{className:"list-group search-results",children:c.map((function(e){return Object(d.jsx)("li",{className:"list-group-item",tabIndex:"0",onClick:function(){return s(e.id)},onKeyPress:function(t){return"Enter"===t.key?s(e.id):null},children:e.name},e.id)}))})]})})}var h,b=n(39),p=n(22),f=n(23),O=n(77),x=function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,null,[{key:"init",value:function(e){this.client=e}},{key:"search",value:function(e){var t=Object(O.a)(h||(h=Object(b.a)(['query {\n            artists(search: "','") {\n                id\n                name\n            }\n        }'])),e);return this.client.query({query:t})}}]),e}(),v=n(76),m=n(78),g=n(79),y=n(33),w=n.n(y),k=n(40),N=function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,[{key:"find",value:function(){var e=Object(k.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.search(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var S=function(){x.init(new v.a({link:new m.a({uri:"https://nbl977s1aj.execute-api.us-east-1.amazonaws.com/dev/graphql"}),cache:new g.a}));var e=new N;return Object(d.jsx)(s.a,{basename:"/",children:Object(d.jsx)(u.a,{exect:!0,path:"/",component:function(){return Object(d.jsx)(j,{artistService:e})}})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(63);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),C()}},[[64,1,2]]]);
//# sourceMappingURL=main.c61b8e11.chunk.js.map