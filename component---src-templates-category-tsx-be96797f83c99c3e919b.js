"use strict";(self.webpackChunkdiscussions=self.webpackChunkdiscussions||[]).push([[75],{722:function(e,n,a){a.d(n,{Z:function(){return o}});var s=a(7294),t=a(1597),r={zap:"⚡",gear:"⚙️",beer:"🍺",star:"⭐",fire:"🔥",tada:"🎉",ninja:"🥷",mega:"📣",crab:"🦀",rocket:"🚀",warning:"⚠️",unicorn:"🦄",lobster:"🦞",cyclone:"🌀",rainbow:"🌈",computer:"💻",nail_care:"💅",sunglasses:"😎",see_no_evil:"🙈",crystal_ball:"🔮",monocle_face:"🧐",speech_balloon:"💬",exploding_head:"🤯",hammer_and_wrench:"🛠️",globe_with_meridians:"🌐",page_facing_up:"📄",thinking:"🤔",sparkling_heart:"💖",boom:"💥",collision:"💥",anger:"💢",book:"📖",open_book:"📖",books:"📚",game_die:"🎲"},i=a(5104),o=function(e){var n=e.data,a=e.go;return n&&null!=n&&n.name?s.createElement(t.Link,{className:"gg-category",to:a||"/category/"+(0,i.FL)(n.name,!0),target:a?"_blank":"_self"},function(e){return r[e.slice(1,-1)]||""}(n.emoji)," ",n.name):null}},2721:function(e,n,a){var s=a(7294),t=a(5505),r=a(5104),i=a(1014);n.Z=function(e){var n,a=(0,i.Z)();switch(a.type){case"issues":n="https://github.com/"+a.issues_owner+"/"+a.issues_repo+"/issues/"+e.number;break;case"discussions2":n="https://github.com/"+a.dis_owner+"/"+a.dis_repo+"/discussions/"+e.number;break;default:n="https://github.com/"+a.owner+"/"+a.repo+"/discussions/"+e.number}return s.createElement("a",{className:(0,t.Z)("number issues-num",e.className),href:n,target:"_blank"},e.len?(0,r.K0)(e.number,e.len):"#"+e.number)}},8671:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var s=a(7294),t=a(2458),r=a(1014),i=a(1597),o=a(2721),c=function(e){var n=e.data.allDiscussionsJson.nodes,a=e.pageContext.nlen;return s.createElement("div",{className:"issues-list"},n.map((function(e){var n=e.node;return s.createElement("div",{key:n.number,className:"issues-item"},s.createElement(o.Z,{number:n.number,len:a}),s.createElement(i.Link,{className:"title",to:"/issues/"+n.number},n.title))})))},l=a(722),u=a(5104);function m(e){var n=(0,r.Z)().repo,a=e.pageContext.category,i=n+"/discussions/categories/"+(0,u.FL)(a.name,!0);return s.createElement(t.Z,{className:"category-page",title:a.name+" | Category"},s.createElement("div",{className:"markdown-body"},s.createElement("div",{className:"category-head",title:i},s.createElement(l.Z,{data:a,go:i}),s.createElement("span",{className:"desc"},a.description)),s.createElement(c,{data:e.data,pageContext:e.pageContext})))}}}]);
//# sourceMappingURL=component---src-templates-category-tsx-be96797f83c99c3e919b.js.map