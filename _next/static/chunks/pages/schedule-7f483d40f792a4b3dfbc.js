_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"20a2":function(e,t,a){e.exports=a("nOHt")},"3bhu":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("nKUr"),s=a("g4pe"),l=a.n(s),n=a("YFqc"),r=a.n(n),i=a("20a2");function o(e){var t=Object(i.useRouter)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(c.jsx)("header",{className:"text-white text-lg",children:Object(c.jsxs)("div",{className:"p-3 flex flex-row items-center",children:[Object(c.jsx)("div",{className:"mr-10",children:Object(c.jsx)(r.a,{href:"/",children:Object(c.jsx)("img",{src:"/shine.png",height:50,width:50})})}),[{route:"/standings",label:"Standings"},{route:"/schedule",label:"Schedule"}].map((function(e){return Object(c.jsx)("div",{className:"mr-10"+(t.pathname==e.route?" font-bold":""),children:Object(c.jsx)(r.a,{href:e.route,children:e.label})},e.label)}))]})})]})}},POt6:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var c=a("nKUr"),s=a("ODXe"),l=a("q1tI"),n=a.n(l),r=a("uh5Q"),i=a("SZEZ");function o(e){return Object(c.jsx)("div",{className:"flex flex-row justify-center",children:e.isExpanded?Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(c.jsx)("path",{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}),Object(c.jsx)("path",{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"})]}):Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(c.jsx)("path",{d:"M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"}),Object(c.jsx)("path",{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"})]})})}var h=a("d/a7");function d(e){var t,a,l=e.match,d=e.forBroadcast,m=n.a.useState(!1),u=Object(s.a)(m,2),j=u[0],x=u[1],b=n.a.useCallback((function(){x(!j)}),[j]),f=j||"played"==l.status&&e.forceSpoilers,O="";return l.matchTime?(a=Object(c.jsx)(h.a,{matchTime:l.matchTime,forceEst:d,short:d}),Object(r.a)(1e3*l.matchTime)||"scheduled"!==l.status||(O+=" text-gray-400")):a="TBD","played"==l.status?O+=" bg-blue-500":"unscheduled"==l.status?O+=" bg-red-300":"scheduled"==l.status&&(O+=" bg-yellow-500"),d&&(O+=" xl:h-24"),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{onClick:"played"==l.status?b:void 0,className:"h-8 sm:h-12 lg:h-16 bg-opacity-40 text-center"+O,children:[!d&&Object(c.jsx)("td",{className:"hidden sm:table-cell",children:"played"==l.status&&Object(c.jsx)(o,{isExpanded:f})}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{className:"text-right"+(f&&l.homePlayer==l.winner?" font-bold":""),children:l.homePlayer}),Object(c.jsx)("td",{children:"Vs."}),Object(c.jsx)("td",{className:"text-left"+(f&&l.awayPlayer==l.winner?" font-bold":""),children:l.awayPlayer}),Object(c.jsx)("td",{className:"hidden sm:table-cell",children:l.division}),Object(c.jsx)("td",{children:null!==(t=l.format)&&void 0!==t?t:"TBD"}),Object(c.jsx)("td",{children:l.channel?"Offline"==l.channel?"Offline":Object(c.jsx)("div",{className:"flex flex-row justify-center",children:Object(c.jsx)(i.a,{channel:l.channel,forBroadcast:d})}):"TBD"})]}),f&&Object(c.jsxs)("tr",{className:"h-16 bg-opacity-40 bg-blue-500",children:[Object(c.jsx)("td",{className:"hidden sm:table-cell"}),Object(c.jsx)("td",{children:"Final Score:"}),Object(c.jsx)("td",{className:"text-right",children:l.homeScore}),Object(c.jsx)("td",{className:"text-center",children:" - "}),Object(c.jsx)("td",{className:"text-left",children:l.awayScore}),Object(c.jsx)("td",{className:"hidden sm:table-cell"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{children:l.matchVod?Object(c.jsx)("a",{target:"_blank",href:l.matchVod,children:"Match Vod"}):"Offline"===l.channel?"No VOD":"Match VOD Soon"})]})]})}function m(e){var t=e.forBroadcast?"text-5xl":"text-3xl",a=e.forBroadcast?"text-3xl":"text-xs sm:text-sm md:text-lg lg:text-2xl",s=e.forBroadcast?"text-3xl":"text-xs sm:text-sm md:text-lg lg:text-xl";return Object(c.jsxs)("div",{className:"text-white",children:[Object(c.jsx)("div",{className:t+" mx-auto text-center mb-5 font-bold",children:e.tableTitle}),Object(c.jsxs)("table",{className:"w-full mx-auto table-auto sm:table-fixed",children:[Object(c.jsx)("thead",{className:a+" bg-opacity-40 bg-yellow-700",children:Object(c.jsxs)("tr",{children:[!e.forBroadcast&&Object(c.jsx)("th",{className:"hidden sm:w-1/12 sm:table-cell"}),Object(c.jsx)("th",{className:"w-1/12 sm:w-2/12 mx-2",children:"Time"}),Object(c.jsx)("th",{className:"w-3/12 sm:w-2/12 mx-2 text-right",children:e.hideHomeAway?"":"Home"}),Object(c.jsx)("th",{className:"w-1/12"}),Object(c.jsx)("th",{className:"w-3/12 sm:w-2/12 text-left mx-2",children:e.hideHomeAway?"":"Away"}),Object(c.jsx)("th",{className:"w-1/12 mx-2 hidden sm:table-cell",children:"Division"}),Object(c.jsx)("th",{className:"w-2/12 mx-2",children:"Format"}),Object(c.jsx)("th",{className:"w-2/12 mx-2",children:"Channel"})]})}),Object(c.jsx)("tbody",{className:s,children:e.matches.length>0&&e.matches.map((function(t){return Object(c.jsx)(d,{match:t,forceSpoilers:e.forceSpoilers,forBroadcast:e.forBroadcast},t.homePlayer+t.awayPlayer+t.matchTime)}))})]})]})}},V2cG:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return u})),a.d(t,"default",(function(){return x}));var c=a("nKUr"),s=a("ODXe"),l=a("3bhu"),n=a("POt6"),r=a("q1tI"),i=a.n(r),o=a("20a2"),h=new Map;h.set("1",[1610564400,1610569800,1610575200]),h.set("2",[1610650800,1610656200,1610661600]),h.set("3",[1610731800,1610737200,1610742600,1610748e3,1610753400,1610758800]),h.set("4",[1610818200,1610823600,1610829e3,1610834400,1610839800,1610845200,1610850600]),h.set("5",[1610904600,161091e4,1610915400,1610920800,1610926200,1610931600,1610937e3]);var d=h,m=a("uh5Q"),u=!0,j=["1","2","3","4","5","6","7","8"];function x(e){var t=Object(o.useRouter)(),a=i.a.useState(!!t.query.scheduled),r=Object(s.a)(a,2),h=r[0],u=r[1],x=i.a.useState("all"),O=Object(s.a)(x,2),w=O[0],g=O[1],v=i.a.useState(!1),p=Object(s.a)(v,2),N=p[0],y=p[1],k=i.a.useState("none"),T=Object(s.a)(k,2),S=T[0],C=T[1],B=i.a.useState(""),E=Object(s.a)(B,2),D=E[0],_=E[1],M=i.a.useCallback((function(e){_(e.currentTarget.value)}),[]),P=i.a.useCallback((function(e){C(e.currentTarget.value)}),[]),q=i.a.useCallback((function(e){u(e.currentTarget.checked)}),[]),F=i.a.useCallback((function(e){y(e.currentTarget.checked)}),[]),A=i.a.useCallback((function(e){g(e.currentTarget.value)}),[]);i.a.useEffect((function(){if(t.query.scheduled&&u(!!t.query.scheduled),t.query.week){var e="string"===typeof t.query.week?t.query.week:t.query.week[0];C(j.indexOf(e)>-1?e:"none")}}),[t.query]);var z=new Map;if("none"==S){b(e.matches,w,h,D).forEach((function(e){z.has(e.week)?z.get(e.week).push(e):z.set(e.week,[e])})),Array.from(z.keys()).forEach((function(e){z.get(e).sort((function(e,t){return e.matchTime?t.matchTime?e.matchTime-t.matchTime:-1:1}))}))}else{var I=604800*(parseInt(S)-1),V=d.get("1")[0]+I,W=d.get("5")[d.get("5").length-1]+I,H=e.matches.filter((function(e){return"unscheduled"!=e.status&&e.matchTime>=V&&e.matchTime<=W&&"Offline"!=e.channel}));Array.from(d.keys()).forEach((function(e){var t=d.get(e);console.log(t);var a=t[0]+I-7200;console.log(a);var c=t[t.length-1]+I+7200;console.log(c);var s=H.filter((function(e){return e.matchTime>=a&&e.matchTime<=c}));console.log(s),t.forEach((function(t){var a,c=t+I;!s.find((function(e){return e.matchTime==c}))&&Object(m.a)(1e3*c)&&s.push({homePlayer:"TBD",awayPlayer:"TBD",week:null!==(a=parseInt(e))&&void 0!==a?a:-1,division:"TBD",status:"unscheduled",matchTime:c,format:"TBD"})}));var l=b(s,w,h,D).sort((function(e,t){return e.matchTime-t.matchTime}));z.set(e,l)}))}var L=Array.from(z.keys()).sort((function(e,t){return parseInt(e)-parseInt(t)}));return Object(c.jsxs)("div",{className:"bg-tile-background bg-repeat min-h-screen overflow-x-auto",children:[Object(c.jsx)(l.a,{title:"Super Mario Sunshine Bingo league - Schedule"}),Object(c.jsxs)("main",{className:"text-white flex flex-col",children:[Object(c.jsxs)("div",{className:"flex flex-row items-baseline text-sm",children:[Object(c.jsxs)("div",{className:"mx-5",children:[Object(c.jsx)("input",{type:"checkbox",defaultChecked:h,id:"fullSchedule",onClick:q}),Object(c.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"fullSchedule",children:"Show Scheduled Matches Only"})]}),Object(c.jsxs)("div",{className:"mx-5",children:[Object(c.jsxs)("select",{className:"text-black",name:"divisions",id:"division-select",onChange:A,children:[Object(c.jsx)("option",{value:"all",children:"All"}),e.divisions&&e.divisions.length>0&&e.divisions.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}),Object(c.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"division-select",children:"Division Filter"})]}),Object(c.jsxs)("div",{className:"mx-5",children:[Object(c.jsx)("input",{type:"checkbox",id:"forceSpoilers",onClick:F}),Object(c.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"forceSpoilers",children:"Force Spoilers to Show"})]}),Object(c.jsxs)("div",{className:"mx-5",children:[Object(c.jsxs)("select",{className:"text-black",name:"weeks",id:"week-select",value:S,onChange:P,children:[Object(c.jsx)("option",{value:"none",children:"Disable"}),j.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}),Object(c.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"week-select",children:"Show Calendar Weeks"})]}),Object(c.jsxs)("div",{className:"mx-5",children:[Object(c.jsx)("input",{className:"text-black",name:"search",id:"search-input",value:D,placeholder:"Type a player name",onChange:M}),Object(c.jsx)("label",{className:"ml-5 text-sm sm:text-lg",htmlFor:"search-input",children:"Player Search"})]})]}),Object(c.jsxs)("div",{className:"mx-auto",children:["All times shown are in the following time zone:"," ",Intl.DateTimeFormat().resolvedOptions().timeZone,". Hover over times for League Time (EST)"]}),Object(c.jsx)("div",{className:"sm:w-10/12 sm:mx-auto",children:L.map((function(e){return z.get(e).length>0?Object(c.jsx)("div",{className:"mt-5",children:Object(c.jsx)(n.a,{forceSpoilers:N,matches:z.get(e),tableTitle:f(e),hideHomeAway:5===e})},f(e)):null}))})]})]})}function b(e,t,a,c){var s=e;switch(t){case"all":break;default:s=s.filter((function(e){return e.division==t}))}a&&(s=s.filter((function(e){return"scheduled"==e.status})));var l=c.trim().toLowerCase();return l&&(s=s.filter((function(e){return e.homePlayer.toLowerCase().indexOf(l)>-1||e.awayPlayer.toLowerCase().indexOf(l)>-1}))),s}function f(e){if("string"===typeof e)return"Day "+e;switch(e){case 0:return"Upcoming Matches";case 5:return"Week 5: Neutral Week";case 9:return"Week 1-3 Extra Match";case 10:return"Week 4-5 Extra Match";case 11:return"Week 6-8 Extra Match";default:return"Week "+e}}},j9qI:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return a("V2cG")}])}},[["j9qI",0,1,2,4,3]]]);