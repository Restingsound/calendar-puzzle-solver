(this["webpackJsonpcalendar-puzzle-solver"]=this["webpackJsonpcalendar-puzzle-solver"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(8),c=n.n(o),i=(n(13),n(3)),l=n(4),s=n(6),u=n(5),d=(n(14),n(1)),h=["......x","......x",".......",".......",".......",".......",".......","xxxx..."],x=h.length,m=h[0].length,f=[["x...","xxxx"],["x..","xxx","..x"],["..xx","xxx."],["xxxx"],[".xx","xxx"],["xxx","x.x"],["x..","xxx"],["x..","x..","xxx"],["x..","xxx","x.."],["xx.",".xx"]],j=function(e){for(var t=e.length,n=e[0].length,a=[],r=0;r<n;++r){a.push([]);for(var o=0;o<t;++o)a[r].push(e[o][n-r-1])}return a.map((function(e){return e.join("")}))},p=function(e){for(var t=e.length,n=e[0].length,a=[],r=0;r<n;++r){a.push([]);for(var o=0;o<t;++o)a[r].push(e[o][r])}return a.map((function(e){return e.join("")}))},v=f.map((function(e){for(var t=[e],n=1;n<4;++n)t.push(j(t[n-1]));for(var a=4;a<8;++a)t.push(p(t[a-4]));return Object(d.uniqBy)(t,(function(e){return e.join("\n")}))})),b=f.map((function(e,t){for(var n=[e],a=1;a<4;++a)n.push(j(n[a-1]));for(var r=4;r<8;++r)n.push(p(n[r-4]));var o=n.map((function(e){return e.join("\n")}));return v[t].map((function(e){return e.join("\n")})).map((function(e){return o.indexOf(e)}))})),g=v.map((function(e){return e.map((function(e){return e[0].indexOf("x")}))}));function y(e){var t=[],n=f.map((function(){return null})),a=0,r=function(t,n,a){var r=Math.floor(t/m),o=t%m,c=v[n][a],i=c.length,l=c[0].length,s=g[n][a];if(r+i>x)return!1;if(o-s<0||o+l-s>m)return!1;for(var u=0;u<i;++u)for(var d=0;d<l;++d)if("x"===c[u][d]&&"x"===e[r+u][o+d-s])return!1;return!0},o=function(t,n,a){for(var r=Math.floor(t/m),o=t%m,c=v[n][a],i=c.length,l=c[0].length,s=g[n][a],u=0;u<i;++u)for(var d=0;d<l;++d)"x"===c[u][d]&&(e[r+u][o+d-s]="x")},c=function(t,n,a){for(var r=Math.floor(t/m),o=t%m,c=v[n][a],i=c.length,l=c[0].length,s=g[n][a],u=0;u<i;++u)for(var d=0;d<l;++d)"x"===c[u][d]&&(e[r+u][o+d-s]=".")};return function i(l){if(a+=1,t.length>49)return!1;var s=Math.floor(l/m),u=l%m;if(s>=x)return t.push(n.map((function(e){return e}))),!0;if("x"===e[s][u])return i(l+1);for(var d=0;d<f.length;++d)if(!n[d])for(var h=0;h<v[d].length;++h)r(l,d,h)&&(o(l,d,h),n[d]={index:l,shapeRotation:h},i(l+1),n[d]=null,c(l,d,h));return!1}(0),console.log("Searches: ".concat(a)),t}var O=n(0),N=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).monthNames=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],e.dayNames=["SUN","MON","TUES","WED","THUR","FRI","SAT"],e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.month,a=t.day,r=t.dayName,o=t.onChange;return Object(O.jsxs)("div",{className:"Calendar",children:[Object(d.range)(0,6).map((function(t){return Object(O.jsx)("div",{className:"item month ".concat(n===t?"selected":""),onClick:function(){return o({month:t,day:a,dayName:r})},children:e.monthNames[t]},t)})),Object(O.jsx)("div",{className:"item empty"}),Object(d.range)(6,12).map((function(t){return Object(O.jsx)("div",{className:"item month ".concat(n===t?"selected":""),onClick:function(){return o({month:t,day:a,dayName:r})},children:e.monthNames[t]},t)})),Object(O.jsx)("div",{className:"item empty"}),Object(d.range)(1,32).map((function(e){return Object(O.jsx)("div",{className:"item ".concat(a===e?"selected":""),onClick:function(){return o({month:n,day:e,dayName:r})},children:e},e)})),Object(d.range)(0,4).map((function(t){return Object(O.jsx)("div",{className:"item day ".concat(r===t?"selected":""),onClick:function(){return o({month:n,day:a,dayName:t})},children:e.dayNames[t]},t)})),Object(O.jsx)("div",{className:"item empty"}),Object(O.jsx)("div",{className:"item empty"}),Object(O.jsx)("div",{className:"item empty"}),Object(O.jsx)("div",{className:"item empty"}),Object(d.range)(4,7).map((function(t){return Object(O.jsx)("div",{className:"item day ".concat(r===t?"selected":""),onClick:function(){return o({month:n,day:a,dayName:t})},children:e.dayNames[t]},t)}))]})}}]),n}(r.a.PureComponent),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).colors=["#6B7280","#EF4444","#F59E0B","#10B981","#3bd7f6","#6366F1","#c85cf6","#EC4899","#ff266e","#964b2d"],e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.solution;return Object(O.jsx)("div",{className:"SolutionView",children:f.map((function(n,a){var r=t[a],o=r.index,c=r.shapeRotation,i=Math.floor(o/m),l=o%m,s=g[a][c],u=b[a][c],h=n.length-n[0].length,x=1===u||3===u||4===u||6===u;return Object(O.jsx)("div",{className:"SolutionViewItem",style:{top:50*i,left:50*(l-s),width:50*n[0].length,height:50*n.length,transform:["translate3d(".concat(x?25*h:0,"px, ").concat(x?-25*h:0,"px, 0px)"),"rotate3d(1, 1, 0, ".concat(180*Math.floor(u/4),"deg)"),"rotate3d(0, 0, 1, -".concat(u%4*90,"deg)")].join(" ")},"data-direction":u,children:Object(d.flatten)(n.map((function(t,r){return t.split("").map((function(t,o){return Object(O.jsx)("div",{className:"SolutionViewCell",style:"x"===n[r][o]?{border:"2px ridge",borderColor:e.colors[a],width:46,height:46,backgroundColor:e.colors[a]}:{}},"".concat(r,"_").concat(o))}))})))},a)}))})}}]),n}(r.a.PureComponent),w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).solve=function(e,t,n){var a=h.map((function(e){return e.split("")}));return a[Math.floor(e/6)][e%6]="x",a[Math.floor((t-1)/7)+2][(t-1)%7]="x",n<4&&(a[6][3+n]="x"),a[7][n]="x",y(a)},e.state={month:(new Date).getMonth(),day:(new Date).getDate(),dayName:(new Date).getDay(),solutions:e.solve((new Date).getMonth(),(new Date).getDate(),(new Date).getDay()),index:0},e.handleChange=function(t){var n=t.month,a=t.day,r=t.dayName;return e.setState({month:n,day:a,dayName:r,solutions:e.solve(n,a,r),index:0})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.month,a=t.day,r=t.dayName,o=t.solutions,c=t.index;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Calendar Puzzle Solver with Day of Week"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("a",{href:"https://filmmings.com/products/daily-calendar-puzzle",children:"Daily Calendar Puzzle with Day of Week"}),Object(O.jsx)("a",{href:"https://github.com/Restingsound/calendar-puzzle-solver",style:{marginLeft:16},children:"Github - Restingsound"})]}),Object(O.jsxs)("div",{className:"Container",children:[Object(O.jsx)(N,{month:n,day:a,dayName:r,onChange:this.handleChange}),o[c]&&Object(O.jsx)(C,{solution:o[c]})]}),o.length>0?Object(O.jsx)("div",{className:"Solutions",children:null===o||void 0===o?void 0:o.map((function(t,n){return Object(O.jsx)("div",{className:"SolutionItem ".concat(n===c?"selected":""),onClick:function(){return e.setState({index:n})},children:"Solution ".concat(n+1)},n)}))}):Object(O.jsx)("div",{children:"No Solution \uff1f\uff1f"})]})}}]),n}(r.a.PureComponent),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),S()}},[[18,1,2]]]);
//# sourceMappingURL=main.723c7cee.chunk.js.map