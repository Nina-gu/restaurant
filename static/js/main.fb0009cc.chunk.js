(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,,,,,,,,,,,function(e,a){a.STATES=[{id:1,fullName:"alabama",name:"AL"},{id:2,fullName:"alaska",name:"AK"},{id:3,fullName:"arizona",name:"AZ"},{id:4,fullName:"arkansas",name:"AR"},{id:5,fullName:"california",name:"CA"},{id:6,fullName:"colorado",name:"CO"},{id:7,fullName:"connecticut",name:"CT"},{id:8,fullName:"delaware",name:"DE"},{id:9,fullName:"florida",name:"FL"},{id:10,fullName:"georgia",name:"GA"},{id:11,fullName:"hawaii",name:"HI"},{id:12,fullName:"idaho",name:"ID"},{id:13,fullName:"illinois",name:"IL"},{id:14,fullName:"indiana",name:"IN"},{id:15,fullName:"iowa",name:"IA"},{id:16,fullName:"kansas",name:"KS"},{id:17,fullName:"kentucky",name:"KY"},{id:18,fullName:"louisiana",name:"LA"},{id:19,fullName:"maine",name:"ME"},{id:20,fullName:"maryland",name:"MD"},{id:21,fullName:"massachusetts",name:"MA"},{id:22,fullName:"michigan",name:"MI"},{id:23,fullName:"minnesota",name:"MN"},{id:24,fullName:"mississippi",name:"MS"},{id:25,fullName:"missouri",name:"MO"},{id:26,fullName:"montana",name:"MT"},{id:27,fullName:"nebraska",name:"NE"},{id:28,fullName:"nevada",name:"NV"},{id:29,fullName:"new hampshire",name:"NH"},{id:30,fullName:"new jersey",name:"NJ"},{id:31,fullName:"new mexico",name:"NM"},{id:32,fullName:"new york",name:"NY"},{id:33,fullName:"north carolina",name:"NC"},{id:34,fullName:"north dakota",name:"ND"},{id:35,fullName:"ohio",name:"OH"},{id:36,fullName:"oklahoma",name:"OK"},{id:37,fullName:"oregon",name:"OR"},{id:38,fullName:"pennsylvania",name:"PA"},{id:39,fullName:"rhode island",name:"RI"},{id:40,fullName:"south carolina",name:"SC"},{id:41,fullName:"south dakota",name:"SD"},{id:42,fullName:"tennessee",name:"TN"},{id:43,fullName:"texas",name:"TX"},{id:44,fullName:"utah",name:"UT"},{id:45,fullName:"vermont",name:"VT"},{id:46,fullName:"virginia",name:"VA"},{id:47,fullName:"washington",name:"WA"},{id:48,fullName:"west virginia",name:"WV"},{id:49,fullName:"wisconsin",name:"WI"},{id:50,fullName:"wyoming",name:"WY"}]},function(e,a){a.GENRES=[{id:1,name:"american"},{id:2,name:"asian"},{id:3,name:"bakery"},{id:4,name:"cafe"},{id:5,name:"french"},{id:6,name:"grill"},{id:7,name:"seafood"}]},,,,,function(e,a,n){},,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(1),i=n.n(t),l=n(9),r=n.n(l),c=(n(17),n(3)),s=n(4),u=n(6),m=n(5),o=n(0),d=function(e){Object(u.a)(n,e);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("p",{className:"title",children:"Restaurant List"})})}}]),n}(t.Component),j=n(8),f=n.n(j),b=n(10),h=n(2),O=(n(20),function(e){for(var a=e.perPage,n=e.totalEntries,t=e.paginate,i=[],l=1;l<=Math.ceil(n/a);l++)i.push(l);return Object(o.jsx)("div",{className:"center",children:Object(o.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(o.jsx)("li",{className:"page-item",children:Object(o.jsx)("a",{onClick:function(){return t(e)},href:"#",className:"page-link",children:e})},e)}))})})}),N=(n(21),function(e){var a=e.props,n=Object(t.useState)(1),i=Object(h.a)(n,2),l=i[0],r=i[1],c=Object(t.useState)(10),s=Object(h.a)(c,1)[0],u=l*s,m=u-s,d=a.slice(m,u);return a.length<=0?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h2",{children:"No results found."})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Restaurants List:"}),Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Name"}),Object(o.jsx)("td",{children:"City"}),Object(o.jsx)("td",{children:"Phone"}),Object(o.jsx)("td",{children:"Genres"})]}),d.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsxs)("td",{children:[e.city,", ",e.state]}),Object(o.jsx)("td",{children:e.telephone}),Object(o.jsx)("td",{children:e.genre.split(",").join(", ")})]},e.telephone)}))]})}),Object(o.jsx)(O,{perPage:s,totalEntries:a.length,paginate:function(e){return r(e)}})]})}),p=(n(22),function(e){var a=e.opts,n=e.name;return Object(o.jsxs)("form",{className:"filter",children:[Object(o.jsxs)("label",{children:["Filter by ",n]}),Object(o.jsxs)("select",{name:n,onChange:e.selectHandler,children:[Object(o.jsx)("option",{value:"",defaultValue:"",children:"All"}),a.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})}),x=function(e){var a=e.formHandler,n=e.clearSearch,i=Object(t.useState)(""),l=Object(h.a)(i,2),r=l[0],c=l[1];return Object(o.jsx)("div",{className:"search",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("form",{onSubmit:function(e){e.persist(),a(r),e.preventDefault()},children:Object(o.jsx)("input",{className:"search-bar",type:"text",value:r,placeholder:"Search restaurants by name, city, or genre!",onChange:function(e){c(e.target.value)}})}),Object(o.jsx)("button",{onClick:function(){n(),c("")},children:"Clear"})]})})},g=n(11),v=n(12),S=function(){var e=Object(t.useState)([]),a=Object(h.a)(e,2),n=a[0],i=a[1],l=Object(t.useState)([]),r=Object(h.a)(l,2),c=r[0],s=r[1],u=Object(t.useState)(""),m=Object(h.a)(u,2),d=m[0],j=m[1],O=Object(t.useState)(""),S=Object(h.a)(O,2),y=S[0],C=S[1],w=Object(t.useState)(""),A=Object(h.a)(w,2),k=A[0],L=A[1],E=Object(t.useState)(!1),M=Object(h.a)(E,2),T=M[0],I=M[1],R=function(){var e=Object(b.a)(f.a.mark((function e(){var a,n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants",{headers:{Authorization:"Api-Key q3MNxtfep8Gt"}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,I(!1),t=n.sort((function(e,a){return e.name>a.name?1:-1})),i(t),s(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){var a=e.target.value,n=e.target.name.toLowerCase();"state"===n?j(a):"genre"===n&&C(a)},H=function(e){if(!k)return e;var a=e.name.toLowerCase(),n=e.city.toLowerCase(),t=e.genre.toLowerCase();return a.includes(k)||n.includes(k)||t.includes(k)?e:void 0},D=function(e){return d?e.state===d:e},G=function(e){return y?e.genre.toLowerCase().includes(y):e};return Object(t.useEffect)((function(){R()}),[]),Object(t.useEffect)((function(){var e=n.filter(D);e=(e=e.filter(G)).filter(H),s(e)}),[d,y,k]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(x,{formHandler:function(e){var a=e.toLowerCase();L(a)},clearSearch:function(){j(""),C(""),L("")}}),Object(o.jsx)(p,{name:"State",opts:g.STATES,selectHandler:F}),Object(o.jsx)(p,{name:"Genre",opts:v.GENRES,selectHandler:F}),Object(o.jsx)(N,{props:c}),Object(o.jsx)("h2",{children:T?"LOADING....":""})]})},y=function(e){Object(u.a)(n,e);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(o.jsx)("footer",{className:"footer",children:"\xa92021 Restaurant List All Rights Reserved. Website Made by Hannah"})}}]),n}(t.Component),C=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsx)(S,{}),Object(o.jsx)(y,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(a){var n=a.getCLS,t=a.getFID,i=a.getFCP,l=a.getLCP,r=a.getTTFB;n(e),t(e),i(e),l(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),w()}],[[23,1,2]]]);
//# sourceMappingURL=main.fb0009cc.chunk.js.map