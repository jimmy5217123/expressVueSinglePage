(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-340df01d"],{"107c":function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),c=n("1d80"),o=n("4840"),l=n("8aa5"),s=n("50c4"),u=n("14c3"),d=n("9263"),f=n("9f7f"),p=n("d039"),g=f.UNSUPPORTED_Y,v=[].push,m=Math.min,h=4294967295,x=!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),i=void 0===n?h:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var o,l,s,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(o=d.call(g,r)){if(l=g.lastIndex,l>p&&(u.push(r.slice(p,o.index)),o.length>1&&o.index<r.length&&v.apply(u,o.slice(1)),s=o[0].length,p=l,u.length>=i))break;g.lastIndex===o.index&&g.lastIndex++}return p===r.length?!s&&g.test("")||u.push(""):u.push(r.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,a){var c=n(r,this,t,a,r!==e);if(c.done)return c.value;var d=i(this),f=String(t),p=o(d,RegExp),v=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"g":"y"),b=new p(g?"^(?:"+d.source+")":d,x),y=void 0===a?h:a>>>0;if(0===y)return[];if(0===f.length)return null===u(b,f)?[f]:[];var I=0,E=0,w=[];while(E<f.length){b.lastIndex=g?0:E;var R,_=u(b,g?f.slice(E):f);if(null===_||(R=m(s(b.lastIndex+(g?E:0)),f.length))===I)E=l(f,E,v);else{if(w.push(f.slice(I,E)),w.length===y)return w;for(var S=1;S<=_.length-1;S++)if(w.push(_[S]),w.length===y)return w;E=I=R}}return w.push(f.slice(I)),w}]}),!x,g)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==a(t))}},"4afd":function(t,e,n){"use strict";n("dd13")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=n("5692"),c=n("7c73"),o=n("69f3").get,l=n("fce3"),s=n("107c"),u=RegExp.prototype.exec,d=i("native-string-replace",String.prototype.replace),f=u,p=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),g=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],m=p||v||g||l||s;m&&(f=function(t){var e,n,a,i,l,s,m,h=this,x=o(h),b=x.raw;if(b)return b.lastIndex=h.lastIndex,e=f.call(b,t),h.lastIndex=b.lastIndex,e;var y=x.groups,I=g&&h.sticky,E=r.call(h),w=h.source,R=0,_=t;if(I&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),_=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(w="(?: "+w+")",_=" "+_,R++),n=new RegExp("^(?:"+w+")",E)),v&&(n=new RegExp("^"+w+"$(?!\\s)",E)),p&&(a=h.lastIndex),i=u.call(I?n:h,_),I?i?(i.input=i.input.slice(R),i[0]=i[0].slice(R),i.index=h.lastIndex,h.lastIndex+=i[0].length):h.lastIndex=0:p&&i&&(h.lastIndex=h.global?i.index+i[0].length:a),v&&i&&i.length>1&&d.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i&&y)for(i.groups=s=c(null),l=0;l<y.length;l++)m=y[l],s[m[0]]=i[m[1]];return i}),t.exports=f},"9f7f":function(t,e,n){var r=n("d039"),a=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,c=i.toString,o=/^\s*function ([^ (]*)/,l="name";r&&!(l in i)&&a(i,l,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})},d2f1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"containter"},[n("div",{staticClass:"width",staticStyle:{display:"flex"}},[n("h2",[t._v("bangTon")]),n("button",{on:{click:function(e){t.formOpen=!t.formOpen}}},[t._v("上架便當")])]),n("div",{staticClass:"flexbox"},t._l(t.setProduct.data,(function(e,r){return n("div",{key:r},[n("h3",{staticStyle:{margin:"0"}},[t._v(t._s(e.setName))]),n("img",{staticStyle:{width:"200px",height:"180px"},attrs:{src:e.setImage}}),n("div",[t._v("數量: "),n("input",{attrs:{name:"setHowMany",type:"number"},domProps:{value:0}})]),n("div",{staticStyle:{"margin-top":"10px"}},[n("button",{on:{click:function(e){return t.plusInSaleCar(r)}}},[t._v("加入購物車")])])])})),0),t.formOpen?n("div",{staticClass:"upDateForm"},[n("div",{staticClass:"formStyle"},[n("h2",[t._v("上架")]),n("form",{attrs:{id:"myForm",enctype:"multipart/form-data"}},[t._m(0),t._m(1),n("div",{staticClass:"formDiv"},[n("label",{attrs:{for:"imgFile"}},[t._v("uploadfile:")]),n("input",{attrs:{id:"imgFile",name:"imgFile",type:"file",accept:"image/*"},on:{change:t.loadImgFile}})])]),n("img",{staticStyle:{border:"5px solid #555"},attrs:{id:"upImg",width:"150px",height:"150px"}}),n("div",[n("button",{on:{click:t.upLoadForm}},[t._v("上架")])])])]):t._e()])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formDiv"},[n("label",{attrs:{for:"bangTonName"}},[t._v("bangTonName:")]),n("input",{attrs:{type:"text",name:"bangTonName",id:"bangTonName"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formDiv"},[n("label",{attrs:{for:"bangTonPrice"}},[t._v("bangTonPrice:")]),n("input",{attrs:{type:"text",name:"bangTonPrice",id:"bangTonPrice"}})])}],i=n("1da1"),c=(n("96cf"),n("b0c0"),n("ac1f"),n("1276"),n("bc3a")),o=n.n(c),l={components:{},data:function(){return{setProduct:"",singleProduct:"",otherProduct:"",uploadImg:"",formOpen:!1}},computed:{},methods:{plusInSaleCar:function(t){var e=document.getElementsByName("setHowMany")[t].value;console.log(e)},loadImgFile:function(t){for(var e=function(e){var n=new FileReader,r={};n.readAsDataURL(t.target.files[e]),n.onload=function(){r.photoName=t.target.files[e].name,r.photoBase64=n.result.split(",")[1],r.fileType=t.target.files[e].name.split(".")[1],document.getElementById("upImg").src=n.result}},n=0;n<t.target.files.length;n++)e(n)},upLoadForm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.getElementById("myForm"),r=new FormData(n),e.next=4,o.a.post("/upload",r);case 4:if(a=e.sent,200!==a.data.code){e.next=9;break}return e.next=8,o.a.post("/getSetProduct");case 8:t.setProduct=e.sent;case 9:t.formOpen=!1;case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/getSetProduct");case 2:t.setProduct=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},s=l,u=(n("4afd"),n("2877")),d=Object(u["a"])(s,r,a,!1,null,"2d9de82e",null);e["default"]=d.exports},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),i=n("d039"),c=n("b622"),o=n("9112"),l=c("species"),s=RegExp.prototype;t.exports=function(t,e,n,u){var d=c(t),f=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=f&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!p||n){var g=/./[d],v=e(d,""[t],(function(t,e,n,r,i){var c=e.exec;return c===a||c===s.exec?f&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,v[0]),r(s,d,v[1])}u&&o(s[d],"sham",!0)}},dd13:function(t,e,n){},fce3:function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-340df01d.2c85cac0.js.map