_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"20a2":function(e,t,c){e.exports=c("nOHt")},"3bhu":function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var s=c("nKUr"),a=c("g4pe"),l=c.n(a),n=c("YFqc"),r=c.n(n),i=c("20a2");function h(e){var t=Object(i.useRouter)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(l.a,{children:[Object(s.jsx)("title",{children:e.title}),Object(s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(s.jsx)("header",{className:"text-white text-lg",children:Object(s.jsxs)("div",{className:"p-3 flex flex-row items-center",children:[Object(s.jsx)("div",{className:"mr-10",children:Object(s.jsx)(r.a,{href:"/",children:Object(s.jsx)("img",{src:"/shine.png",height:50,width:50})})}),[{route:"/standings",label:"Standings"},{route:"/schedule",label:"Schedule"}].map((function(e){return Object(s.jsx)("div",{className:"mr-10"+(t.pathname==e.route?" font-bold":""),children:Object(s.jsx)(r.a,{href:e.route,children:e.label})},e.label)}))]})})]})}},V2cG:function(e,t,c){"use strict";c.r(t),c.d(t,"__N_SSG",(function(){return f})),c.d(t,"default",(function(){return w}));var s=c("nKUr"),a=c("ODXe"),l=c("3bhu"),n=c("q1tI"),r=c.n(n),i=c("uh5Q"),h=c("SZEZ");function o(e){return Object(s.jsx)("div",{className:"flex flex-row justify-center",children:e.isExpanded?Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(s.jsx)("path",{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}),Object(s.jsx)("path",{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"})]}):Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(s.jsx)("path",{d:"M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"}),Object(s.jsx)("path",{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"})]})})}var d=c("d/a7");function m(e){var t,c,l=e.match,n=r.a.useState(!1),m=Object(a.a)(n,2),u=m[0],j=m[1],x=r.a.useCallback((function(){j(!u)}),[u]),b=u||"played"==l.status&&e.forceSpoilers,f="";return l.matchTime?(c=Object(s.jsx)(d.a,{matchTime:l.matchTime}),Object(i.a)(1e3*l.matchTime)||(f+=" text-gray-400")):c="TBD","played"==l.status?f+=" bg-blue-500":"unscheduled"==l.status?f+=" bg-red-300":"scheduled"==l.status&&(f+=" bg-yellow-500"),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("tr",{onClick:"played"==l.status?x:void 0,className:"h-8 sm:h-12 lg:h-16 bg-opacity-40"+f,children:[Object(s.jsx)("td",{className:"hidden sm:table-cell",children:"played"==l.status&&Object(s.jsx)(o,{isExpanded:b})}),Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{className:"text-right"+(b&&l.homePlayer==l.winner?" font-bold":""),children:l.homePlayer}),Object(s.jsx)("td",{children:"Vs."}),Object(s.jsx)("td",{className:"text-left"+(b&&l.awayPlayer==l.winner?" font-bold":""),children:l.awayPlayer}),Object(s.jsx)("td",{className:"hidden sm:table-cell",children:l.division}),Object(s.jsx)("td",{children:null!==(t=l.format)&&void 0!==t?t:"TBD"}),Object(s.jsx)("td",{children:l.channel?"Offline"==l.channel?"Offline":Object(s.jsx)("div",{className:"flex flex-row justify-center",children:Object(s.jsx)(h.a,{channel:l.channel})}):"TBD"})]}),b&&Object(s.jsxs)("tr",{className:"h-16 bg-opacity-40 bg-blue-500",children:[Object(s.jsx)("td",{className:"hidden sm:table-cell"}),Object(s.jsx)("td",{children:"Final Score:"}),Object(s.jsx)("td",{className:"text-right",children:l.homeScore}),Object(s.jsx)("td",{className:"text-center",children:" - "}),Object(s.jsx)("td",{className:"text-left",children:l.awayScore}),Object(s.jsx)("td",{className:"hidden sm:table-cell"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:l.matchVod?Object(s.jsx)("a",{target:"_blank",href:l.matchVod,children:"Match Vod"}):"Match Vod Soon"})]})]})}function u(e){return Object(s.jsxs)("div",{className:"text-white",children:[Object(s.jsx)("div",{className:"mx-auto text-3xl text-center mb-5 font-bold",children:e.tableTitle}),Object(s.jsxs)("table",{className:"w-full mx-auto table-auto sm:table-fixed",children:[Object(s.jsx)("thead",{className:"text-xs sm:text-sm md:text-lg lg:text-2xl bg-opacity-40 bg-yellow-700",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"hidden sm:w-1/12 sm:table-cell"}),Object(s.jsx)("th",{className:"w-1/12 sm:w-2/12 mx-2",children:"Time"}),Object(s.jsx)("th",{className:"w-3/12 sm:w-2/13 mx-2 text-right",children:e.hideHomeAway?"":"Home"}),Object(s.jsx)("th",{className:"w-1/12"}),Object(s.jsx)("th",{className:"w-3/12 sm:w-2/13 text-left mx-2",children:e.hideHomeAway?"":"Away"}),Object(s.jsx)("th",{className:"w-1/12 mx-2 hidden sm:table-cell",children:"Division"}),Object(s.jsx)("th",{className:"w-2/12 mx-2",children:"Format"}),Object(s.jsx)("th",{className:"w-2/12 mx-2",children:"Channel"})]})}),Object(s.jsx)("tbody",{className:"text-center text-xs sm:text-sm md:text-lg lg:text-xl",children:e.matches.length>0&&e.matches.map((function(t){return Object(s.jsx)(m,{match:t,forceSpoilers:e.forceSpoilers},t.homePlayer+t.awayPlayer+t.matchTime)}))})]})]})}var j=c("20a2"),x=new Map;x.set("1",[1610564400,1610569800,1610575200]),x.set("2",[1610650800,1610656200,1610661600]),x.set("3",[1610731800,1610737200,1610742600,1610748e3,1610753400,1610758800]),x.set("4",[1610818200,1610823600,1610829e3,1610834400,1610839800,1610845200,1610850600]),x.set("5",[1610904600,161091e4,1610915400,1610920800,1610926200,1610931600,1610937e3]);var b=x,f=!0,O=["1","2","3","4","5","6","7","8"];function w(e){var t=Object(j.useRouter)(),c=r.a.useState(!!t.query.scheduled),n=Object(a.a)(c,2),i=n[0],h=n[1],o=r.a.useState("all"),d=Object(a.a)(o,2),m=d[0],x=d[1],f=r.a.useState(!1),w=Object(a.a)(f,2),p=w[0],y=w[1],N=r.a.useState("none"),k=Object(a.a)(N,2),T=k[0],S=k[1],C=r.a.useState(""),E=Object(a.a)(C,2),_=E[0],M=E[1],D=r.a.useCallback((function(e){M(e.currentTarget.value)}),[]),F=r.a.useCallback((function(e){S(e.currentTarget.value)}),[]),P=r.a.useCallback((function(e){h(e.currentTarget.checked)}),[]),q=r.a.useCallback((function(e){y(e.currentTarget.checked)}),[]),A=r.a.useCallback((function(e){x(e.currentTarget.value)}),[]);r.a.useEffect((function(){if(t.query.scheduled&&h(!!t.query.scheduled),t.query.week){var e="string"===typeof t.query.week?t.query.week:t.query.week[0];S(O.indexOf(e)>-1?e:"none")}}),[t.query]);var B=new Map;if("none"==T){g(e.matches,m,i,_).forEach((function(e){B.has(e.week)?B.get(e.week).push(e):B.set(e.week,[e])})),Array.from(B.keys()).forEach((function(e){B.get(e).sort((function(e,t){return e.matchTime?t.matchTime?e.matchTime-t.matchTime:-1:1}))}))}else{var z=604800*(parseInt(T)-1),I=b.get("1")[0]+z,V=b.get("5")[b.get("5").length-1]+z,W=e.matches.filter((function(e){return"unscheduled"!=e.status&&e.matchTime>=I&&e.matchTime<=V&&"Offline"!=e.channel}));Array.from(b.keys()).forEach((function(e){var t=b.get(e);console.log(t);var c=t[0]-(z+7200);console.log(c);var s=t[t.length-1]+(z+7200);console.log(s);var a=W.filter((function(e){return e.matchTime>=c&&e.matchTime<=s}));console.log(a),t.forEach((function(t){var c;a.find((function(e){return e.matchTime==t}))||a.push({homePlayer:"TBD",awayPlayer:"TBD",week:null!==(c=parseInt(e))&&void 0!==c?c:-1,division:"TBD",status:"unscheduled",matchTime:t+z,format:"TBD"})}));var l=g(a,m,i,_).sort((function(e,t){return e.matchTime-t.matchTime}));B.set(e,l)}))}var H=Array.from(B.keys()).sort((function(e,t){return parseInt(e)-parseInt(t)}));return Object(s.jsxs)("div",{className:"bg-tile-background bg-repeat min-h-screen overflow-x-auto",children:[Object(s.jsx)(l.a,{title:"Super Mario Sunshine Bingo league - Schedule"}),Object(s.jsxs)("main",{className:"text-white flex flex-col",children:[Object(s.jsxs)("div",{className:"flex flex-row items-baseline text-sm",children:[Object(s.jsxs)("div",{className:"mx-5",children:[Object(s.jsx)("input",{type:"checkbox",defaultChecked:i,id:"fullSchedule",onClick:P}),Object(s.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"fullSchedule",children:"Show Scheduled Matches Only"})]}),Object(s.jsxs)("div",{className:"mx-5",children:[Object(s.jsxs)("select",{className:"text-black",name:"divisions",id:"division-select",onChange:A,children:[Object(s.jsx)("option",{value:"all",children:"All"}),e.divisions&&e.divisions.length>0&&e.divisions.map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))]}),Object(s.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"division-select",children:"Division Filter"})]}),Object(s.jsxs)("div",{className:"mx-5",children:[Object(s.jsx)("input",{type:"checkbox",id:"forceSpoilers",onClick:q}),Object(s.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"forceSpoilers",children:"Force Spoilers to Show"})]}),Object(s.jsxs)("div",{className:"mx-5",children:[Object(s.jsxs)("select",{className:"text-black",name:"weeks",id:"week-select",value:T,onChange:F,children:[Object(s.jsx)("option",{value:"none",children:"Disable"}),O.map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))]}),Object(s.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"week-select",children:"Show Calendar Weeks"})]}),Object(s.jsxs)("div",{className:"mx-5",children:[Object(s.jsx)("input",{className:"text-black",name:"search",id:"search-input",value:_,placeholder:"Type a player name",onChange:D}),Object(s.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"search-input",children:"Player Search"})]})]}),Object(s.jsxs)("div",{className:"mx-auto",children:["All times shown are in the following time zone:"," ",Intl.DateTimeFormat().resolvedOptions().timeZone,". Hover over times for League Time (EST)"]}),Object(s.jsx)("div",{className:"sm:w-10/12 sm:mx-auto",children:H.map((function(e){return Object(s.jsx)("div",{className:"mt-5",children:Object(s.jsx)(u,{forceSpoilers:p,matches:B.get(e),tableTitle:v(e),hideHomeAway:5===e})},v(e))}))})]})]})}function g(e,t,c,s){var a=e;switch(t){case"all":break;default:a=a.filter((function(e){return e.division==t}))}c&&(a=a.filter((function(e){return"scheduled"==e.status})));var l=s.trim().toLowerCase();return l&&(a=a.filter((function(e){return e.homePlayer.toLowerCase().indexOf(l)>-1||e.awayPlayer.toLowerCase().indexOf(l)>-1}))),a}function v(e){if("string"===typeof e)return"Day "+e;switch(e){case 0:return"Upcoming Matches";case 5:return"Week 5: Neutral Week";case 9:return"Week 1-3 Extra Match";case 10:return"Week 4-5 Extra Match";case 11:return"Week 6-8 Extra Match";default:return"Week "+e}}},j9qI:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return c("V2cG")}])}},[["j9qI",0,1,2,3,4]]]);