(this["webpackJsonpcode-playground"]=this["webpackJsonpcode-playground"]||[]).push([[0],{45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var i,c,o,r,a,s,u,l,d,j,b,h,f,x,O,v,p,m,g=t(0),w=t.n(g),y=t(14),S=t.n(y),C=t(3),E=t(30),L=t(5),k=t(6),z=k.a.h2(i||(i=Object(L.a)(["\n    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n    white-space: nowrap;\n    font-weight: bold;\n    color: #aaaebc;\n    margin: 0;\n    font-size: 1.3em;\n    display: inline-block;\n    padding-left: 2px;\n    vertical-align: middle;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n"]))),T=k.a.div(c||(c=Object(L.a)(["\n    background: rgba(0, 0, 0, 0.1);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    padding: 5px;\n"]))),R=k.a.div(o||(o=Object(L.a)(["\n    display: flex;\n    background: #1d1e22;\n    width: 100%;\n    height: 100%;\n    min-width: 0;\n    flex-direction: column;\n"]))),M=t(2),A=function(e){var n=e.initialValue,t=void 0===n?"":n,i=e.title,c=void 0===i?"":i,o=e.theme,r=void 0===o?"vs-dark":o,a=e.language,s=void 0===a?"javascript":a,u=e.onCodeChange;return Object(M.jsxs)(R,{children:[Object(M.jsx)(T,{children:Object(M.jsx)(z,{children:c})}),Object(M.jsx)(E.a,{height:"calc(100% - 35px)",width:"100%",value:t,onChange:function(e){u(e||"")},options:{automaticLayout:!0,minimap:{enabled:!1}},theme:r,language:s,defaultValue:""})]})},H=t(13),J=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},X=function(){var e=Object(g.useState)(J()),n=Object(C.a)(e,2),t=n[0],i=n[1];return Object(g.useEffect)((function(){function e(){i(J())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t},D=t(4),F=k.a.div(r||(r=Object(L.a)(["\n    z-index: 2;\n    flex: 0.001 0 18px;\n    display: ",";\n    cursor: ",";\n    border-left: 1px solid rgba(255, 255, 255, 0.05);\n    border-right: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: #333642;\n"])),(function(e){return e.hide?"none":"block"}),(function(e){return e.isVertical?"row-resize":"col-resize"})),B=function(e){var n=e.isVertical,t=void 0!==n&&n,i=e.limit,c=void 0===i?{xmin:0,ymin:0,xmax:9999,ymax:9999}:i,o=e.hide,r=void 0!==o&&o,a=e.onResize,s=e.onStop,u=Object(g.useRef)(null),l=Object(D.a)({xmin:0,ymin:0,xmax:9999,ymax:9999},c),d=Object(g.useState)(!1),j=Object(C.a)(d,2),b=j[0],h=j[1],f=Object(g.useState)({x:0,y:0}),x=Object(C.a)(f,2),O=x[0],v=x[1],p=function(e){var n=e.clientX,t=e.clientY,i={x:n-O.x,y:t-O.y};a&&t>l.ymin&&t<l.ymax&&n>l.xmin&&n<l.xmax&&a(i)},m=function(){var e=0,n=0;if(u.current){var t,i=null===(t=u.current)||void 0===t?void 0:t.getBoundingClientRect();e=i.x,n=i.y}var c={x:e-O.x,y:n-O.y};s&&s(c),h(!1)},w=function(e){var n=e.touches[0].clientX,t=e.touches[0].clientY,i={x:n-O.x,y:t-O.y};a&&t>=l.ymin&&t<=l.ymax&&a(i)},y=function(e){var n=e.touches[0].clientX,t=e.touches[0].clientY,i={x:n-O.x,y:t-O.y};s&&s(i),h(!1)};return Object(g.useEffect)((function(){return b?(window.addEventListener("mousemove",p,!1),window.addEventListener("mouseup",m,!1),window.addEventListener("touchmove",w,!1),window.addEventListener("touchleave",y,!1)):(window.removeEventListener("mousemove",p,!1),window.removeEventListener("mouseup",m,!1),window.removeEventListener("touchmove",w,!1),window.removeEventListener("touchleave",y,!1)),function(){window.removeEventListener("mousemove",p,!1),window.removeEventListener("mouseup",m,!1),window.removeEventListener("touchmove",w,!1),window.removeEventListener("touchleave",y,!1)}}),[b]),Object(M.jsx)(F,{ref:u,isVertical:t,hide:r,onTouchStart:function(e){var n=e.touches[0].clientX,t=e.touches[0].clientY;h(!0),v({x:n,y:t})},onMouseDown:function(){var e=0,n=0;if(u.current){var t=u.current.getBoundingClientRect();e=t.x,n=t.y}h(!0),v({x:e,y:n})}})},V=function(e){var n=e.children,t=e.currentX,i=e.diffX,c=e.hide,o=X(),r=Object(g.useState)(t),a=Object(C.a)(r,2),s=a[0],u=a[1],l=Object(g.useState)(0),d=Object(C.a)(l,2),j=d[0],b=d[1];return Object(g.useEffect)((function(){b(0),u(t)}),[t]),Object(g.useEffect)((function(){b(i)}),[i]),Object(M.jsx)("div",{style:{position:c?"absolute":"relative",visibility:c?"hidden":"visible",width:"".concat((s+j)/o.width*100,"%")},children:n})},Y=function(e){var n=e.children,t=e.hide,i=void 0!==t&&t,c=e.initialWidth,o=e.disableResizeBar,r=void 0!==o&&o,a=e.leftDiff,s=void 0===a?0:a,u=e.rightDiff,l=void 0===u?0:u,d=e.xmax,j=e.xmin,b=e.onResize,h=e.onStop;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(B,{hide:i,limit:{xmax:d,xmin:j},onResize:function(e){var n=e.x;!r&&b&&b({x:n})},onStop:function(e){var n=e.x;!r&&h&&h({x:n})}}),Object(M.jsx)(V,{hide:i,currentX:c,diffX:-s+l,children:n})]})},_=function(e){var n=e.children,t=e.hide,i=e.mobileMode,c=X(),o=(c.width-54)/3,r=function(e){var n=Object(g.useRef)();return Object(g.useEffect)((function(){n.current=e})),n.current}(c.width)||c.width,a=w.a.Children.count(n),s=Object(g.useState)(new Array(a).fill(0)),u=Object(C.a)(s,2),l=u[0],d=u[1],j=Object(g.useState)(new Array(a).fill(o)),b=Object(C.a)(j,2),h=b[0],f=b[1];return Object(g.useEffect)((function(){var e=(c.width-r)/a;f(Object(H.a)(h.map((function(n){return n+e}))))}),[c.width]),Object(M.jsx)(M.Fragment,{children:w.a.Children.map(n,(function(e,n){return Object(M.jsx)(Y,{hide:t[n],leftDiff:l[n],rightDiff:l[n+1],onResize:function(e){var t=e.x,i=Object(H.a)(l);i[n]=t,d(i)},onStop:function(e){var t=e.x,i=Object(H.a)(l);i[n]=0,d(i);var c=Object(H.a)(h);c[n-1]&&(c[n-1]+=t),c[n]-=t,f(c)},disableResizeBar:0===n,initialWidth:i?c.width:h[n],xmax:n===a-1?c.width:h.filter((function(e,t){return t<=n+1})).reduce((function(e,n){return e+n+18})),xmin:n<=1?18:h.filter((function(e,t){return t<n-1})).reduce((function(e,n){return e+n+18})),children:e})}))})},U=t(16),W=t(17),G=k.a.h2(a||(a=Object(L.a)(["\n    font-family: Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;\n    color: white;\n    font-size: 1.3rem;\n    font-weight: 700;\n"]))),I=k.a.div(s||(s=Object(L.a)(["\n    display: flex;\n    align-items: center;\n    margin: 15px;\n"]))),q=k.a.input(u||(u=Object(L.a)(["\n    width: 90px;\n"]))),K=k.a.button(l||(l=Object(L.a)(["\n    color: white;\n    background-color: transparent;\n    border: none;\n    padding: 5px;\n    margin: 3px;\n"]))),N=function(e){var n=e.placeholder,t=void 0===n?"":n,i=e.onTitleChange,c=Object(g.useState)(""),o=Object(C.a)(c,2),r=o[0],a=o[1],s=Object(g.useState)(!1),u=Object(C.a)(s,2),l=u[0],d=u[1];return Object(M.jsxs)(I,{children:[l?Object(M.jsx)(q,{autoFocus:!0,onBlur:function(){d(!1)},onChange:function(e){a(e.target.value),i&&i(e.target.value)},value:r,type:"text"}):Object(M.jsx)(G,{children:r||t}),Object(M.jsx)(K,{onClick:function(){return d(!0)},children:Object(M.jsx)(U.a,{icon:W.b})})]})},P=k.a.div(d||(d=Object(L.a)(["\n    display: flex;\n    position: absolute;\n    z-index: 2;\n    width: 100%;\n    justify-content: center;\n    flex-direction: row;\n"]))),Q=k.a.button(j||(j=Object(L.a)(["\n    background-color: #444857;\n    color: white;\n    border: rgba(0, 0, 0, 0.09);\n    font-size: 0.8rem;\n    padding: 4px 16px;\n    line-height: 20px;\n    margin-right: 1px;\n    border-top: ",";\n    &:active {\n        transform: translateY(1px);\n        border: none;\n    }\n    &:focus {\n        outline: none;\n    }\n"])),(function(e){return e.isActive?"1px solid white":"1px solid gray"})),Z=function(e){var n=e.onTabChange,t=Object(g.useState)({html:!0,js:!1,css:!1,result:!0}),i=Object(C.a)(t,2),c=i[0],o=i[1],r=function(e){o(e),n(e)};return Object(M.jsxs)(P,{children:[Object(M.jsx)(Q,{isActive:c.html,onClick:function(){r(Object(D.a)(Object(D.a)({},c),{html:!0,js:!1,css:!1}))},children:"HTML"}),Object(M.jsx)(Q,{isActive:c.js,onClick:function(){r(Object(D.a)(Object(D.a)({},c),{html:!1,js:!0,css:!1}))},children:"JS"}),Object(M.jsx)(Q,{isActive:c.css,onClick:function(){r(Object(D.a)(Object(D.a)({},c),{html:!1,js:!1,css:!0}))},children:"CSS"}),Object(M.jsx)(Q,{isActive:c.result,onClick:function(){r(Object(D.a)(Object(D.a)({},c),{},{result:!c.result}))},children:"Result"})]})},$=k.a.div(b||(b=Object(L.a)(["\n    display: flex;\n    position: relative;\n    background-color: black;\n    height: ",";\n    flex-direction: row;\n    width: 100%;\n"])),(function(e){return"".concat(e.height,"px")})),ee=function(e){var n=e.height,t=e.setJSCode,i=e.setHTMLCode,c=e.setCSSCode,o=X(),r=Object(g.useState)({html:!0,js:!1,css:!1,result:!0}),a=Object(C.a)(r,2),s=a[0],u=a[1],l=Object(g.useState)(!1),d=Object(C.a)(l,2),j=d[0],b=d[1];return Object(g.useEffect)((function(){o.width<767||o.height<440?b(!0):j&&b(!1)}),[o.width]),Object(M.jsxs)($,{height:n,children:[j&&Object(M.jsx)(Z,{onTabChange:function(e){u(e)}}),Object(M.jsxs)(_,{mobileMode:j,hide:[j&&!s.html,j&&!s.js,j&&!s.css],children:[Object(M.jsx)(A,{title:"HTML",language:"html",onCodeChange:function(e){return i(e)}}),Object(M.jsx)(A,{title:"JS",onCodeChange:function(e){return t(e)}}),Object(M.jsx)(A,{title:"CSS",language:"css",onCodeChange:function(e){return c(e)}})]})]})},ne=t(27),te=t.n(ne),ie=t(28),ce=t.n(ie),oe=t(8),re=k.a.button(h||(h=Object(L.a)(["\n    background-color: #444857;\n    color: white;\n    font-weight: 300;\n    border-radius: 5px;\n    border: rgba(0, 0, 0, 0.09);\n    font-size: 1rem;\n    padding: 10px 15px;\n    line-height: 20px;\n\n    &:active {\n        transform: translateY(1px);\n        border: none;\n    }\n    &:focus {\n        outline: none;\n    }\n"]))),ae=Object(k.a)(re)(f||(f=Object(L.a)(["\n    & > span {\n        margin-left: 5px;\n    }\n    @media (max-width: 767px) {\n        & > span {\n            display: none;\n        }\n    }\n"]))),se=k.a.header(x||(x=Object(L.a)(["\n    display: flex;\n    height: 65px;\n    padding: 5px 15px;\n    background-color: #1e1f26;\n    align-items: center;\n"]))),ue=k.a.div(O||(O=Object(L.a)(["\n    padding: 5px;\n    margin-left: auto;\n"]))),le=k.a.div(v||(v=Object(L.a)(["\n    background-image: url('/code-playground/logo192.png');\n    width: 30px;\n    height: 30px;\n    background-size: cover;\n"]))),de=function(){var e="Untitled",n=Object(oe.c)((function(e){return e})),t=n.js,i=n.html,c=n.css,o=Object(g.useState)(""),r=Object(C.a)(o,2),a=r[0],s=r[1];return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(se,{children:[Object(M.jsx)(le,{}),Object(M.jsx)(N,{placeholder:e,onTitleChange:function(e){s(e)}}),Object(M.jsx)(ue,{children:Object(M.jsxs)(ae,{onClick:function(){var n=new te.a;n.file("index.css",c),n.file("main.js",t),n.file("index.html",i),n.generateAsync({type:"blob"}).then((function(n){ce.a.saveAs(n,"".concat(a||e,".zip"))}))},children:[Object(M.jsx)(U.a,{icon:W.a}),Object(M.jsx)("span",{children:"Download"})]})})]})})},je=k.a.div(p||(p=Object(L.a)(["\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n"]))),be=k.a.iframe(m||(m=Object(L.a)(["\n    user-select: none;\n    pointer-events: none;\n    width: 100%;\n    height: 100%;\n"]))),he=function(){var e=Object(oe.c)((function(e){return e})),n=e.js,t=e.html,i=e.css,c=X().height,o=Object(oe.b)(),r=Object(g.useState)(350),a=Object(C.a)(r,2),s=a[0],u=a[1];return Object(M.jsxs)(je,{children:[Object(M.jsx)(ee,{height:s,setCSSCode:function(e){o(function(e){return{type:"SET_CSS",payload:e}}(e))},setJSCode:function(e){o(function(e){return{type:"SET_JS",payload:e}}(e))},setHTMLCode:function(e){o(function(e){return{type:"SET_HTML",payload:e}}(e))}}),Object(M.jsx)(B,{limit:{ymin:150,ymax:c-100},onResize:function(e){var n=e.y;u(s+n)},isVertical:!0}),Object(M.jsx)(be,{sandbox:"allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation",title:"preview",srcDoc:"".concat(t," <style>").concat(i,"</style><script>").concat(n,"<\/script>")})]})},fe=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(de,{}),Object(M.jsx)(he,{})]})},xe=t(18),Oe={js:"",css:"",html:""},ve=Object(xe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_JS":return Object(D.a)(Object(D.a)({},e),{},{js:n.payload});case"SET_CSS":return Object(D.a)(Object(D.a)({},e),{},{css:n.payload});case"SET_HTML":return Object(D.a)(Object(D.a)({},e),{},{html:n.payload});default:return e}}));t(45);S.a.render(Object(M.jsx)(w.a.StrictMode,{children:Object(M.jsx)(oe.a,{store:ve,children:Object(M.jsx)(fe,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a77b141e.chunk.js.map