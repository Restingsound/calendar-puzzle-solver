(this["webpackJsonpcalendar-puzzle-solver"]=this["webpackJsonpcalendar-puzzle-solver"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),c=n.n(o),i=(n(13),n(3)),s=n(4),l=n(6),u=n(5),d=(n(14),n(2)),h=["......x","......x",".......",".......",".......",".......",".......","xxxx..."],m=h.length,x=h[0].length,f=[["x...","xxxx"],["x..","xxx","..x"],["..xx","xxx."],["xxxx"],[".xx","xxx"],["xxx","x.x"],["x..","xxx"],["x..","x..","xxx"],["x..","xxx","x.."],["xx.",".xx"]],j=function(e){for(var t=e.length,n=e[0].length,a=[],r=0;r<n;++r){a.push([]);for(var o=0;o<t;++o)a[r].push(e[o][n-r-1])}return a.map((function(e){return e.join("")}))},b=function(e){for(var t=e.length,n=e[0].length,a=[],r=0;r<n;++r){a.push([]);for(var o=0;o<t;++o)a[r].push(e[o][r])}return a.map((function(e){return e.join("")}))},v=f.map((function(e){for(var t=[e],n=1;n<4;++n)t.push(j(t[n-1]));for(var a=4;a<8;++a)t.push(b(t[a-4]));return Object(d.uniqBy)(t,(function(e){return e.join("\n")}))})),p=f.map((function(e,t){for(var n=[e],a=1;a<4;++a)n.push(j(n[a-1]));for(var r=4;r<8;++r)n.push(b(n[r-4]));var o=n.map((function(e){return e.join("\n")}));return v[t].map((function(e){return e.join("\n")})).map((function(e){return o.indexOf(e)}))})),g=v.map((function(e){return e.map((function(e){return e[0].indexOf("x")}))}));function y(e,t){var n=[],a=f.map((function(){return null})),r=function(t,n,a){var r=Math.floor(t/x),o=t%x,c=v[n][a],i=c.length,s=c[0].length,l=g[n][a];if(r+i>m)return!1;if(o-l<0||o+s-l>x)return!1;for(var u=0;u<i;++u)for(var d=0;d<s;++d)if("x"===c[u][d]&&"x"===e[r+u][o+d-l])return!1;return!0},o=function(t,n,a){for(var r=Math.floor(t/x),o=t%x,c=v[n][a],i=c.length,s=c[0].length,l=g[n][a],u=0;u<i;++u)for(var d=0;d<s;++d)"x"===c[u][d]&&(e[r+u][o+d-l]="x")},c=function(t,n,a){for(var r=Math.floor(t/x),o=t%x,c=v[n][a],i=c.length,s=c[0].length,l=g[n][a],u=0;u<i;++u)for(var d=0;d<s;++d)"x"===c[u][d]&&(e[r+u][o+d-l]=".")};return function i(s){if(0!==t&&n.length>t-1)return!1;var l=Math.floor(s/x),u=s%x;if(l>=m)return n.push(a.map((function(e){return e}))),!0;if("x"===e[l][u])return i(s+1);for(var d=0;d<f.length;++d)if(!a[d])for(var h=0;h<v[d].length;++h)r(s,d,h)&&(o(s,d,h),a[d]={index:s,shapeRotation:h},i(s+1),a[d]=null,c(s,d,h));return!1}(0),n}var O=n(0),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e.dayNames=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"],e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.month,a=t.day,r=t.dayName,o=t.onChange;return Object(O.jsxs)("div",{className:"Calendar",children:[Object(d.range)(0,6).map((function(t){return Object(O.jsx)("div",{className:"item month ".concat(n===t?"selected":""),onClick:function(){return o({month:t,day:a,dayName:r})},children:e.monthNames[t]},t)})),Object(O.jsx)("div",{className:"item empty"}),Object(d.range)(6,12).map((function(t){return Object(O.jsx)("div",{className:"item month ".concat(n===t?"selected":""),onClick:function(){return o({month:t,day:a,dayName:r})},children:e.monthNames[t]},t)})),Object(O.jsx)("div",{className:"item empty"}),Object(d.range)(1,32).map((function(e){return Object(O.jsx)("div",{className:"item ".concat(a===e?"selected":""),onClick:function(){return o({month:n,day:e,dayName:r})},children:e},e)})),Object(d.range)(0,4).map((function(t){return Object(O.jsx)("div",{className:"item day ".concat(r===t?"selected":""),onClick:function(){return o({month:n,day:a,dayName:t})},children:e.dayNames[t]},t)})),Object(O.jsx)("div",{className:"item empty"}),Object(O.jsx)("div",{className:"item empty"}),Object(O.jsx)("div",{className:"item empty"}),Object(O.jsx)("div",{className:"item empty"}),Object(d.range)(4,7).map((function(t){return Object(O.jsx)("div",{className:"item day ".concat(r===t?"selected":""),onClick:function(){return o({month:n,day:a,dayName:t})},children:e.dayNames[t]},t)}))]})}}]),n}(r.a.PureComponent),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"SolutionView",children:Object(O.jsx)("img",{src:"images/calendarBackground.png",alt:"Calendar Background"})})}}]),n}(r.a.PureComponent),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).colors=["#6B7280","#EF4444","#F59E0B","#10B981","#3bd7f6","#6366F1","#c85cf6","#EC4899","#ff266e","#964b2d"],e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.solution;return Object(O.jsx)("div",{className:"SolutionView",children:f.map((function(n,a){var r=t[a],o=r.index,c=r.shapeRotation,i=Math.floor(o/x),s=o%x,l=g[a][c],u=p[a][c],h=n.length-n[0].length,m=1===u||3===u||4===u||6===u;return Object(O.jsx)("div",{className:"SolutionViewItem",style:{top:50*i,left:50*(s-l),width:50*n[0].length,height:50*n.length,transform:["translate3d(".concat(m?25*h:0,"px, ").concat(m?-25*h:0,"px, 0px)"),"rotate3d(1, 1, 0, ".concat(180*Math.floor(u/4),"deg)"),"rotate3d(0, 0, 1, -".concat(u%4*90,"deg)")].join(" ")},"data-direction":u,children:Object(d.flatten)(n.map((function(t,r){return t.split("").map((function(t,o){if("x"!==n[r][o])return Object(O.jsx)("div",{className:"SolutionViewCell"},"".concat(r,"_").concat(o));var c=0,i=0,s=0,l=0;return(0===r||"."===n[r-1][o])&&(c=1),(r===n.length-1||"."===n[r+1][o])&&(i=1),(0===o||"."===n[r][o-1])&&(s=1),(o===n[0].length-1||"."===n[r][o+1])&&(l=1),Object(O.jsx)("div",{className:"SolutionViewCell",style:{borderTop:1*c,borderLeft:1*s,borderRight:1*l,borderBottom:1*i,borderStyle:"solid",borderColor:"black",width:50-1*s-1*l,height:50-1*c-1*i,backgroundColor:e.colors[a]}},"".concat(r,"_").concat(o))}))})))},a)}))})}}]),n}(r.a.PureComponent),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).solve=function(e,t,n,a){var r=h.map((function(e){return e.split("")}));return r[Math.floor(e/6)][e%6]="x",r[Math.floor((t-1)/7)+2][(t-1)%7]="x",n<4&&(r[6][3+n]="x"),r[7][n]="x",y(r,a)},e.state={month:(new Date).getMonth(),day:(new Date).getDate(),dayName:(new Date).getDay(),solutions:e.solve((new Date).getMonth(),(new Date).getDate(),(new Date).getDay(),1),index:0,solutionCount:1},e.handleChange=function(t){var n=t.month,a=t.day,r=t.dayName;return e.setState({month:n,day:a,dayName:r,solutions:e.solve(n,a,r,e.state.solutionCount),index:0})},e.solCountChange=function(t){return e.setState({solutionCount:t,solutions:e.solve(e.state.month,e.state.day,e.state.dayName,t)})},e.longMonthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],e.longDayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.nth=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;var t=this.state,n=t.month,a=t.day,r=t.dayName,o=t.solutions,c=t.index,i=t.solutionCount;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Calendar Puzzle Solver with Day of Week"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("a",{href:"https://filmmings.com/products/daily-calendar-puzzle",children:"Daily Calendar Puzzle with Day of Week"}),Object(O.jsx)("a",{href:"https://github.com/Restingsound/calendar-puzzle-solver",style:{marginLeft:16},children:"Github - Restingsound"})]}),Object(O.jsxs)("div",{className:"Container",children:[Object(O.jsx)(N,{month:n,day:a,dayName:r,onChange:this.handleChange}),Object(O.jsx)(C,{}),o[c]&&Object(O.jsx)(S,{solution:o[c]})]}),Object(O.jsxs)("div",{className:"Solutions",children:[Object(O.jsx)("div",{className:"SolutionItem ".concat(1===i?"selected":""),onClick:function(){return e.solCountChange(1)},children:"Single Solution"}),Object(O.jsx)("div",{className:"SolutionItem ".concat(50===i?"selected":""),onClick:function(){return e.solCountChange(50)},children:"50 Solutions"}),Object(O.jsx)("div",{className:"SolutionItem ".concat(0===i?"selected":""),onClick:function(){return e.solCountChange(0)},children:"All Solutions (Slow)"})]}),Object(O.jsxs)("div",{children:["Puzzle for ",this.longDayNames[r],", ",this.longMonthNames[n]," ",a,this.nth(a),Object(O.jsx)("br",{}),0===i?Object(O.jsxs)("div",{children:[" ","Found all ",o.length," possible solutions for this puzzle."]}):Object(O.jsx)("div",{})]}),o.length>1?Object(O.jsx)("div",{className:"Solutions",children:null===o||void 0===o?void 0:o.map((function(t,n){return Object(O.jsx)("div",{className:"SolutionItem ".concat(n===c?"selected":""),onClick:function(){return e.setState({index:n})},children:"Solution ".concat(n+1)},n)}))}):Object(O.jsx)("div",{}),Object(O.jsxs)("div",{children:["This page was created by"," ",Object(O.jsx)("a",{href:"https://github.com/Restingsound",children:"Scott Mulderig"})]})]})}}]),n}(r.a.PureComponent),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),k()}},[[18,1,2]]]);
//# sourceMappingURL=main.947ede8f.chunk.js.map