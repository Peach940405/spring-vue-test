(function(e){function t(t){for(var r,a,u=t[0],c=t[1],i=t[2],f=0,p=[];f<u.length;f++)a=u[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},s=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("이거는 헤더~")])])}],c={name:"Header"},i=c,l=n("2877"),f=Object(l["a"])(i,a,u,!1,null,"2d36cb3a",null),p=f.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("이거는 푸터~")])])}],m={name:"Footer"},b=m,h=Object(l["a"])(b,d,v,!1,null,"75f1aa7f",null),_=h.exports,g={name:"app",components:{Header:p,Footer:_}},y=g,w=(n("034f"),Object(l["a"])(y,o,s,!1,null,null,null)),j=w.exports,U=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("여기는 홈페이지")]),e._l(e.getUsers,function(t){return n("v-flex",{key:t},[n("span",[e._v("아이디: "+e._s(t.id))]),n("br"),n("span",[e._v("비밀번호: "+e._s(t.password))]),n("br"),n("span",[e._v("이름: "+e._s(t.name))]),n("br")])}),n("span",[e._v("위는 유저들")])],2)},x=[],P=(n("96cf"),n("3b8d")),$=n("bc3a"),E=n.n($),S=function(e){return E.a.create({baseURL:e,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}})},k="api",H={getUsers:function(){return console.log("왓니?"),S(k).get("/users").then(function(e){return console.log(e.data),e.data}).catch(function(e){return console.log(e)})}},M=n("2f62");r["a"].use(M["a"]);var T=new M["a"].Store({state:{users:[]},getters:{getUsers:function(e){return e.users}},mutations:{setUsers:function(e,t){e.users=t}},actions:{setUsers:function(e,t){var n=e.commit;n("setUsers",t)}}}),F={setUsers:function(){var e=Object(P["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=T,e.next=3,H.getUsers();case 3:e.t1=e.sent,e.t0.dispatch.call(e.t0,"setUsers",e.t1);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),getUsers:function(){return T.getters.getUsers}},R={name:"HomePage",data:function(){return{result:[]}},mounted:function(){F.setUsers()},computed:{getUsers:function(){return F.getUsers()}}},C=R,J=Object(l["a"])(C,O,x,!1,null,"036b56e0",null),A=J.exports;r["a"].use(U["a"]);var L=new U["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A}]});r["a"].config.productionTip=!1,new r["a"]({router:L,store:T,render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.bd1b611f.js.map