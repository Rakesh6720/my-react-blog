(this["webpackJsonpmy-react-blog"]=this["webpackJsonpmy-react-blog"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(24);var c=n(1),r=n.n(c),a=n(17),s=n.n(a),i=(n(29),n(18)),o=n(19),j=n(23),l=n(22),u=n(7),h=n(2),b=(n(30),n(0)),p=function(){return Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{children:Object(b.jsxs)("li",{children:[Object(b.jsx)(u.b,{to:"/",children:"Home"}),Object(b.jsx)(u.b,{to:"/about",children:"About"}),Object(b.jsx)(u.b,{to:"/articles-list",children:"Articles List"})]})})})},m=n(8),d=n.n(m),x=n(10),O=n(12),f=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome!  Today we are going to be talking about React.","React is a lot of fun to make some cool things."]},{name:"learn-node",title:"The Fastest Way to Learn Node",content:["Welcome!  Today we are going to be talking about React.","React is a lot of fun to make some cool things."]},{name:"learn-webgl",title:"The Fastest Way to Learn WebGL",content:["Welcome!  Today we are going to be talking about React.","React is a lot of fun to make some cool things."]}],g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Page does not exist..."}),Object(b.jsx)(u.b,{to:"/",children:"Back to Home..."})]})},v=function(e){var t=e.comments;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:e.username}),Object(b.jsx)("p",{children:e.text})]},t)}))]})},y=function(e){var t=e.articleName,n=e.upvotes,c=e.setArticleInfo,r=function(){var e=Object(x.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:r,children:"Add Upvote"}),Object(b.jsxs)("p",{children:["This post has been upvoted ",n," times."]})]})},T=function(e){var t=e.articleName,n=e.setArticleInfo,r=Object(c.useState)(""),a=Object(O.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(O.a)(o,2),l=j[0],u=j[1],h=function(){var e=Object(x.a)(d.a.mark((function e(){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:s,text:l}),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,n(r),i(""),u("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Add a Comment"}),Object(b.jsxs)("label",{children:["Name:",Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(b.jsxs)("label",{children:["Comment",Object(b.jsx)("textarea",{rows:"4",cols:"50",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsx)("button",{onClick:h,children:"Add Comment"})]})},k=function(e){var t=e.match.params.name,n=f.find((function(e){return e.name===t})),r=Object(c.useState)({upvotes:0,comments:[]}),a=Object(O.a)(r,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(x.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:n.title}),Object(b.jsx)(y,{articleName:t,upvotes:s.upvotes,setArticleInfo:i}),n.content.map((function(e,t){return Object(b.jsx)("p",{children:e},t)})),Object(b.jsx)(v,{comments:s.comments}),Object(b.jsx)(T,{articleName:t,setArticleInfo:i})]}):Object(b.jsx)(g,{})},F=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Rakesh's Blog"}),Object(b.jsx)("p",{children:"This is my first paragraph. This is my first paragraph. This is my first paragraph. This is my first paragraph. This is my first paragraph. This is my first paragraph."}),Object(b.jsx)("p",{children:"This is my second paragraph. This is my second paragraph. This is my second paragraph. This is my second paragraph. This is my second paragraph. This is my second paragraph."})]})},w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"About Page"})})},C=function(e){var t=e.articles;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsxs)("li",{children:[Object(b.jsx)(u.b,{to:"/articles/".concat(e.name),children:Object(b.jsx)("h3",{children:e.title})}),Object(b.jsxs)("p",{children:[e.content[0].substring(0,150),"..."]})]},t)}))})},A=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Articles List"}),Object(b.jsx)(C,{articles:f})]})},L=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/",component:F,exact:!0}),Object(b.jsx)(h.a,{path:"/about",component:w}),Object(b.jsx)(h.a,{path:"/articles-list",component:A}),Object(b.jsx)(h.a,{path:"/articles/:name",component:k}),Object(b.jsx)(h.a,{component:g})]})]})})}}]),n}(c.Component),N=L,R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),R()}},[[38,1,2]]]);
//# sourceMappingURL=main.b0a6c7d1.chunk.js.map