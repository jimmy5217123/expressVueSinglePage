(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7891d7ea"],{"107c":function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),c=n("1d80"),o=n("4840"),l=n("8aa5"),u=n("50c4"),s=n("14c3"),d=n("9263"),f=n("9f7f"),p=n("d039"),g=f.UNSUPPORTED_Y,v=[].push,h=Math.min,x=4294967295,m=!p((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),a=void 0===n?x:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var o,l,u,s=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,f+"g");while(o=d.call(g,r)){if(l=g.lastIndex,l>p&&(s.push(r.slice(p,o.index)),o.length>1&&o.index<r.length&&v.apply(s,o.slice(1)),u=o[0].length,p=l,s.length>=a))break;g.lastIndex===o.index&&g.lastIndex++}return p===r.length?!u&&g.test("")||s.push(""):s.push(r.slice(p)),s.length>a?s.slice(0,a):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=c(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var c=n(r,this,e,i,r!==t);if(c.done)return c.value;var d=a(this),f=String(e),p=o(d,RegExp),v=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"g":"y"),b=new p(g?"^(?:"+d.source+")":d,m),y=void 0===i?x:i>>>0;if(0===y)return[];if(0===f.length)return null===s(b,f)?[f]:[];var I=0,E=0,w=[];while(E<f.length){b.lastIndex=g?0:E;var R,P=s(b,g?f.slice(E):f);if(null===P||(R=h(u(b.lastIndex+(g?E:0)),f.length))===I)E=l(f,E,v);else{if(w.push(f.slice(I,E)),w.length===y)return w;for(var S=1;S<=P.length-1;S++)if(w.push(P[S]),w.length===y)return w;E=I=R}}return w.push(f.slice(I)),w}]}),!m,g)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),c=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==i(e))}},6087:function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=n("5692"),c=n("7c73"),o=n("69f3").get,l=n("fce3"),u=n("107c"),s=RegExp.prototype.exec,d=a("native-string-replace",String.prototype.replace),f=s,p=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),g=i.UNSUPPORTED_Y||i.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],h=p||v||g||l||u;h&&(f=function(e){var t,n,i,a,l,u,h,x=this,m=o(x),b=m.raw;if(b)return b.lastIndex=x.lastIndex,t=f.call(b,e),x.lastIndex=b.lastIndex,t;var y=m.groups,I=g&&x.sticky,E=r.call(x),w=x.source,R=0,P=e;if(I&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),P=String(e).slice(x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==e[x.lastIndex-1])&&(w="(?: "+w+")",P=" "+P,R++),n=new RegExp("^(?:"+w+")",E)),v&&(n=new RegExp("^"+w+"$(?!\\s)",E)),p&&(i=x.lastIndex),a=s.call(I?n:x,P),I?a?(a.input=a.input.slice(R),a[0]=a[0].slice(R),a.index=x.lastIndex,x.lastIndex+=a[0].length):x.lastIndex=0:p&&a&&(x.lastIndex=x.global?a.index+a[0].length:i),v&&a&&a.length>1&&d.call(a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&y)for(a.groups=u=c(null),l=0;l<y.length;l++)h=y[l],u[h[0]]=a[h[1]];return a}),e.exports=f},"9f7f":function(e,t,n){var r=n("d039"),i=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,c=a.toString,o=/^\s*function ([^ (]*)/,l="name";r&&!(l in a)&&i(a,l,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(e){return""}}})},d2f1:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",{staticClass:"flexbox"},e._l(e.setProduct.data,(function(t,r){return n("div",{key:r},[n("h3",{staticStyle:{margin:"0"}},[e._v(e._s(t.setName))]),n("img",{staticStyle:{width:"200px",height:"180px"},attrs:{src:t.setImage}}),n("div",[e._v("數量: "),n("input",{attrs:{name:"setHowMany",type:"number"},domProps:{value:0}})]),n("div",{staticStyle:{"margin-top":"10px"}},[n("button",{on:{click:function(t){return e.plusInSaleCar(r)}}},[e._v("加入購物車")])])])})),0),n("div",{staticStyle:{}},[n("h2",[e._v("bangTon上架")]),n("div",[n("form",[e._v(" 圖片:"),n("input",{attrs:{id:"imgFile",type:"file",accept:"image/*"},on:{change:e.loadImgFile}})]),n("img",{attrs:{id:"upImg",width:"200px",height:"180px"}}),n("button",{on:{click:e.postImage}},[e._v("上傳")])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{}},[n("h2",[e._v("bangTon")])])}],a=n("1da1"),c=(n("96cf"),n("b0c0"),n("ac1f"),n("1276"),n("bc3a")),o=n.n(c),l={components:{},data:function(){return{setProduct:"",singleProduct:"",otherProduct:"",uploadImg:""}},computed:{},methods:{plusInSaleCar:function(e){var t=document.getElementsByName("setHowMany")[e].value;console.log(t)},loadImgFile:function(e){for(var t=function(t){var n=new FileReader,r={};n.readAsDataURL(e.target.files[t]),n.onload=function(){r.photoName=e.target.files[t].name,r.photoBase64=n.result.split(",")[1],r.fileType=e.target.files[t].name.split(".")[1],document.getElementById("upImg").src=n.result}},n=0;n<e.target.files.length;n++)t(n)},postImage:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,r=document.getElementById("imgFile"),n.append("file",r.files[0]),t.next=5,o.a.post("/upload",n);case 5:return i=t.sent,console.log(i),t.next=9,o.a.post("/getSetProduct");case 9:e.setProduct=t.sent;case 10:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/getSetProduct");case 2:return e.setProduct=t.sent,t.next=5,o.a.post("/getSingleProduct");case 5:return e.singleProduct=t.sent,t.next=8,o.a.post("/getOtherProduct");case 8:return e.otherProduct=t.sent,t.next=11,o.a.post("/joinTest");case 11:n=t.sent,console.log(e.setProduct),console.log(n);case 14:case"end":return t.stop()}}),t)})))()}},u=l,s=(n("f50d"),n("2877")),d=Object(s["a"])(u,r,i,!1,null,"5840bcde",null);t["default"]=d.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),a=n("d039"),c=n("b622"),o=n("9112"),l=c("species"),u=RegExp.prototype;e.exports=function(e,t,n,s){var d=c(e),f=!a((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var g=/./[d],v=t(d,""[e],(function(e,t,n,r,a){var c=t.exec;return c===i||c===u.exec?f&&!a?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,v[0]),r(u,d,v[1])}s&&o(u[d],"sham",!0)}},f50d:function(e,t,n){"use strict";n("6087")},fce3:function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-7891d7ea.1fc0d84d.js.map