!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.activeView=n():t.activeView=n()}("undefined"!=typeof self?self:this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=48)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(8),o=e(18);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5)("wks"),o=e(7),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){t.exports=!e(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(6),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(15)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(9),o=e(28),i=e(29),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n,e){var r=e(31),o=e(19);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(1),i=e(4),u=e(7)("src"),c=e(35),f=(""+c).split("toString");e(6).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,e){var r=e(5)("keys"),o=e(7);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(10),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(41),o=e(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(8).f,o=e(4),i=e(2)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}();Object.defineProperty(n,"__esModule",{value:!0}),n.copyProperties=u;var i=Symbol();n.Enum=function(){function t(){var n=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0];if(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),{}.hasOwnProperty.call(this.constructor,i))throw new Error("Enum classes can’t be instantiated");"object"===(void 0===n?"undefined":r(n))&&null!==n&&u(this,n)}return o(t,[{key:"toString",value:function(){return this.constructor.name+"."+this.name}}],[{key:"initEnum",value:function(t){return Object.defineProperty(this,"enumValues",{value:[],configurable:!1,writable:!1,enumerable:!0}),Array.isArray(t)?this._enumValuesFromArray(t):this._enumValuesFromObject(t),Object.freeze(this.enumValues),this[i]=!0,this}},{key:"_enumValuesFromArray",value:function(t){var n=!0,e=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value;this._pushEnumValue(new this,u)}}catch(t){e=!0,r=t}finally{try{!n&&i.return&&i.return()}finally{if(e)throw r}}}},{key:"_enumValuesFromObject",value:function(t){var n=!0,e=!1,r=void 0;try{for(var o,i=Object.keys(t)[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value,c=new this(t[u]);this._pushEnumValue(c,u)}}catch(t){e=!0,r=t}finally{try{!n&&i.return&&i.return()}finally{if(e)throw r}}}},{key:"_pushEnumValue",value:function(t,n){t.name=n,t.ordinal=this.enumValues.length,Object.defineProperty(this,n,{value:t,configurable:!1,writable:!1,enumerable:!0}),this.enumValues.push(t)}},{key:"enumValueOf",value:function(t){return this.enumValues.find(function(n){return n.name===t})}},{key:Symbol.iterator,value:function(){return this.enumValues[Symbol.iterator]()}}]),t}();function u(t,n){var e=!0,r=!1,o=void 0;try{for(var i,u=Object.getOwnPropertyNames(n)[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var c=i.value,f=Object.getOwnPropertyDescriptor(n,c);Object.defineProperty(t,c,f)}}catch(t){r=!0,o=t}finally{try{!e&&u.return&&u.return()}finally{if(r)throw o}}return t}},function(t,n,e){for(var r=e(26),o=e(20),i=e(13),u=e(0),c=e(1),f=e(11),a=e(2),s=a("iterator"),l=a("toStringTag"),p=f.Array,y={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(y),h=0;h<v.length;h++){var d,m=v[h],b=y[m],x=u[m],g=x&&x.prototype;if(g&&(g[s]||c(g,s,p),g[l]||c(g,l,m),f[m]=p,b))for(d in r)g[d]||i(g,d,r[d],!0)}},function(t,n,e){"use strict";var r=e(27),o=e(30),i=e(11),u=e(12);t.exports=e(33)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(2)("unscopables"),o=Array.prototype;null==o[r]&&e(1)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){t.exports=!e(3)&&!e(16)(function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){"use strict";var r=e(15),o=e(34),i=e(13),u=e(1),c=e(11),f=e(38),a=e(23),s=e(46),l=e(2)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,n,e,v,h,d,m){f(e,n,v);var b,x,g,S=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",j="values"==h,_=!1,w=t.prototype,P=w[l]||w["@@iterator"]||h&&w[h],E=P||S(h),k=h?j?S("entries"):E:void 0,L="Array"==n&&w.entries||P;if(L&&(g=s(L.call(new t)))!==Object.prototype&&g.next&&(a(g,O,!0),r||"function"==typeof g[l]||u(g,l,y)),j&&P&&"values"!==P.name&&(_=!0,E=function(){return P.call(this)}),r&&!m||!p&&!_&&w[l]||u(w,l,E),c[n]=E,c[O]=y,h)if(b={values:j?E:S("values"),keys:d?E:S("keys"),entries:k},m)for(x in b)x in w||i(w,x,b[x]);else o(o.P+o.F*(p||_),n,b);return b}},function(t,n,e){var r=e(0),o=e(6),i=e(1),u=e(13),c=e(36),f=function(t,n,e){var a,s,l,p,y=t&f.F,v=t&f.G,h=t&f.S,d=t&f.P,m=t&f.B,b=v?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,x=v?o:o[n]||(o[n]={}),g=x.prototype||(x.prototype={});for(a in v&&(e=n),e)l=((s=!y&&b&&void 0!==b[a])?b:e)[a],p=m&&s?c(l,r):d&&"function"==typeof l?c(Function.call,l):l,b&&u(b,a,l,t&f.U),x[a]!=l&&i(x,a,p),d&&g[a]!=l&&(g[a]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){t.exports=e(5)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(37);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";var r=e(39),o=e(18),i=e(23),u={};e(1)(u,e(2)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(9),o=e(40),i=e(22),u=e(14)("IE_PROTO"),c=function(){},f=function(){var t,n=e(17)("iframe"),r=i.length;for(n.style.display="none",e(45).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(8),o=e(9),i=e(20);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(4),o=e(12),i=e(42)(!1),u=e(14)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(12),o=e(43),i=e(44);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(21),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(21),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(4),o=e(47),i=e(14)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(19);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";e.r(n);e(25);var r=e(24);(class extends r.Enum{}).initEnum(["PASSIVE_REMOVE","REMOVE","CREATE","UPDATE"]);const o={type:0,params:1,content:2};class i{constructor(){const t={};return(n,e)=>(e=e||"-notype",n?"".concat(e,"#").concat(n):(t[e]=t[e]||0,t[e]++,"".concat(e,":idx(").concat(t[e]++,")")))}}function u(t){return null===t||Array.isArray(t)?null:t}function c(t,n){let e=0,r=t.length-1;for(;r-e>1;){const o=Math.floor(e+(r-e)/2);t[o]>n?r=o:e=o}return r}function f(t,n,e=!0){return function t(n,e,r=!0){const f={},a={},s=[],l=[];let p;if((p=e)&&p.length){let t;const n=p.length,e=new i;let r;for(t=0;t<n;){const n=p[t],i=n[o.type],c=n[o.content],l=n[o.params]||{},y=r,v={move:!0,key:r=e(l.key,i)};f[r]=v,Array.isArray(c)&&(a[r]=c),v.n={idx:t,params:l,prevKey:y,content:u(c)},s.push(v),t++}}if((p=n)&&p.length){let n;const e=p.length,y=new i;n=0;const v=[];let h,d=0;for(;n<e;){const e=p[n],i=e[o.type],s=e[o.content],m=e[o.params]||{},b=y(m.key,i);let x=f[b];if(x){let t=!1;const n=v.length,e=x.n.idx;for(let r=0;r<n;r++){const n=v[r];let o=n.length;if(n[o-1]<e)n.push(e),t=!0,o++;else if(n[0]<e){const r=n.slice(0,c(n,e));r.push(e),t=!0,o=r.length,v.push(r)}o>d&&(d=o,h=r)}t||(v.push([e]),0===d&&(d=1,h=0))}else x={move:!1,key:b},f[b]=x,l.push(x);x.o={idx:n,params:m,content:u(s)};const g=Array.isArray(s)?s:null,S=a[b];r&&x.n&&(S||g)&&(x.childs=t(S,g,r)),n++}null!=h&&v[h].forEach(t=>{s[t].pair.move=!1})}return[...l,...s]}(t,n,e)}e.d(n,"diff",function(){return f});n.default={diff:f}}]).default});
//# sourceMappingURL=active-view.modern.js.map