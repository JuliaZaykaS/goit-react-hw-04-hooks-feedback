(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={statisticList:"Statistics_statisticList__37rHQ",statisticItem:"Statistics_statisticItem__2adG-",statisticNumber:"Statistics_statisticNumber__kPKI8"}},,,,function(t,e,a){t.exports={reviewList:"FeedbackOptions_reviewList__LJWGd",reviewItem:"FeedbackOptions_reviewItem__1x8-W",button:"FeedbackOptions_button__176w2"}},function(t,e,a){t.exports={app:"App_app__1MXSA"}},,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var c=a(1),s=a.n(c),n=a(5),i=a.n(n),r=(a(12),a(3)),o=a(0);function u(t){var e=t.title,a=t.children;return Object(o.jsxs)("div",{children:[e&&Object(o.jsx)("h2",{children:e}),a]})}var b=a(6),l=a.n(b);function j(t){var e=t.options,a=t.onLeaveFeedback;return e.map((function(t,e){return Object(o.jsx)("button",{className:l.a.button,type:"button",onClick:function(){return a(t)},children:t},e)}))}var d=a(2),v=a.n(d);function O(t){var e=t.label,a=t.value;return Object(o.jsxs)("li",{className:v.a.statisticItem,children:[e," ",Object(o.jsx)("span",{className:v.a.statisticNumber,children:a})]})}function p(t){var e=t.good,a=t.neutral,c=t.bad,s=t.total,n=t.positiveFeedback;return Object(o.jsxs)("ul",{className:v.a.statisticList,children:[Object(o.jsx)(O,{label:"Good",value:e}),Object(o.jsx)(O,{label:"Neutral",value:a}),Object(o.jsx)(O,{label:"Bad",value:c}),Object(o.jsx)(O,{label:"Total",value:s}),Object(o.jsx)(O,{label:"Positive feedback",value:n})]})}function f(t){var e=t.message;return Object(o.jsx)("p",{children:e})}var x=a(7),h=a.n(x);function _(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),a=e[0],s=e[1],n=Object(c.useState)(0),i=Object(r.a)(n,2),b=i[0],l=i[1],d=Object(c.useState)(0),v=Object(r.a)(d,2),O=v[0],x=v[1],_=function(){return a+b+O};return Object(o.jsxs)("div",{className:h.a.app,children:[Object(o.jsx)(u,{title:"Please leave feedback",children:Object(o.jsx)(j,{options:["Good","Neutral","Bad"],onLeaveFeedback:function(t){switch(t.toLowerCase()){case"good":return s((function(t){return t+1}));case"neutral":return l((function(t){return t+1}));case"bad":return x((function(t){return t+1}));default:return}}})}),Object(o.jsx)(u,{title:"Statistics",children:0===_()?Object(o.jsx)(f,{message:"No feedback given"}):Object(o.jsx)(p,{good:a,neutral:b,bad:O,total:_(),positiveFeedback:0===a?0:"".concat(Math.round(a/_()*100),"%")})})]})}i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.ad9e4b68.chunk.js.map