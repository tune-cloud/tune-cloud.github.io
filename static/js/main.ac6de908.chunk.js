(this["webpackJsonptune-cloud"]=this["webpackJsonptune-cloud"]||[]).push([[0],{75:function(e,t,n){},76:function(e,t,n){},93:function(e,t){},97:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(54),i=n.n(c),s=(n(75),n(39)),u=n(44),o=n(5),l=(n(76),n(30)),j=n(110),h=n(3);function b(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(o.e)(),s=function(e){i.push("/artist?artistId=".concat(e.id,"&artist=").concat(e.name))};return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsxs)("div",{className:"input-group w-50",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:Object(h.jsx)(j.a,{})}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search for an artist","aria-label":"Input group example","aria-describedby":"basic-addon1",onKeyDown:function(t){if("Enter"===t.key||t.target.value.length>=4){var n=t.target.value;e.artistService.find(n).then((function(e){c(e)})).catch((function(e){console.error(e)}))}}})]}),Object(h.jsx)("ul",{className:"list-group search-results",children:r.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",tabIndex:"0",onClick:function(){return s(e)},onKeyPress:function(t){return"Enter"===t.key?s(e):null},children:e.name},e.id)}))})]})}function d(e){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"Tune Cloud"}),Object(h.jsx)(b,Object(s.a)({},e))]})})}var f,p,O=n(34),v=n(19),g=n(20),x=n(116),m=function(){function e(){Object(v.a)(this,e)}return Object(g.a)(e,null,[{key:"init",value:function(e){this.client=e}},{key:"search",value:function(e){var t=Object(x.a)(f||(f=Object(O.a)(['query {\n            artists(search: "','") {\n                id\n                name\n            }\n        }'])),e);return this.client.query({query:t})}}]),e}(),y=n(115),w=n(117),S=n(118),k=n(17),N=n.n(k),q=n(37),I=function(){function e(){Object(v.a)(this,e)}return Object(g.a)(e,[{key:"find",value:function(){var e=Object(q.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.search(t);case 2:return n=e.sent,e.abrupt("return",n.data.artists);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=n(62),F=n(64);function A(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(),s=Object(l.a)(i,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){var t=new URLSearchParams(e.location.search),n=t.get("artistId");o(t.get("artist")),e.songService.getSongs(n,100).then((function(e){var t=e.map((function(t,n){return{text:t.title,value:e.length-n*n}}));c(t)})).catch((function(e){console.error(e)}))}),[e.location.search,e.songService]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{className:"artist-header",children:u}),Object(h.jsx)(F.a,{className:"resize",defaultSize:{width:"90%",height:.8*window.innerHeight},children:Object(h.jsx)(C.a,{words:r})})]})})}var E=function(){function e(){Object(v.a)(this,e)}return Object(g.a)(e,null,[{key:"init",value:function(e){this.client=e}},{key:"getSongs",value:function(e,t){var n=Object(x.a)(p||(p=Object(O.a)(["query {\n            songs(artistId: ",", top: ",", filter: {\n                artists: [","]\n            }) {\n                id\n                title\n                artist {\n                    id\n                    name\n                }\n            }\n        }"])),e,t,e);return this.client.query({query:n})}}]),e}(),P=function(){function e(){Object(v.a)(this,e)}return Object(g.a)(e,[{key:"getSongs",value:function(){var e=Object(q.a)(N.a.mark((function e(t,n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getSongs(t,n);case 2:return a=e.sent,e.abrupt("return",a.data.songs);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();var z=function(){var e=new y.a({link:new w.a({uri:"https://nbl977s1aj.execute-api.us-east-1.amazonaws.com/dev/graphql"}),cache:new S.a});m.init(e),E.init(e);var t=new I,n=new P;return Object(h.jsxs)(u.a,{basename:"/",children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(h.jsx)(d,{artistService:t})}}),Object(h.jsx)(o.a,{path:"/artist",component:function(e){return Object(h.jsx)(A,Object(s.a)({songService:n},e))}})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(96);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),L()}},[[97,1,2]]]);
//# sourceMappingURL=main.ac6de908.chunk.js.map