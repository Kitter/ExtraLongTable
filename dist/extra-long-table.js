!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("extra-long-table",[],e):"object"==typeof exports?exports["extra-long-table"]=e():t["extra-long-table"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var s=o[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e){function o(t,e){var o=t[1]||"",s=t[3];if(!s)return o;if(e&&"function"==typeof btoa){var n=i(s);return[o].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([n]).join("\n")}return[o].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=o(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var n=this[s][0];"number"==typeof n&&(i[n]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"==typeof a[0]&&i[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(t,e,o){"use strict";e.a={name:"ExtraLongTable",props:{loadNum:{type:[Number,String],default:function(){return 20}},tdHeight:{type:[Number,String],default:function(){return 20}},tableHeight:{type:[Number,String],default:function(){return"400"}},tableList:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},showHeader:{type:Boolean,default:!0},highlightRow:{}},data:function(){return{isScroll:17,showLoad:!1,showTableList:[],loadedNum:0,dataTotal:0,dataTop:0,scrollTop:0,scrollHeight:0,handleScroll:null,selectIndex:-1}},computed:{tableOtherBottom:function(){return this.dataTotal*this.tdHeight-this.dataTop-this.loadedNum*this.tdHeight},columnsBottom:function(){return void 0!=this.columns[0].type?this.columns.slice(1,this.columns.length):this.columns}},methods:{proxy:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{leading:!0,trailing:!0,context:null},i=void 0,s=new Date(0).getTime(),n=this,a={apply:function(a,r,l){var d=document.getElementById("bottomDiv"),c=document.getElementById("topDiv");if(d.scrollTop==n.scrollTop)return void n.handleScrollLeft(c,d);var h=(new Date).getTime();if(o.leading)h-s>e?(Reflect.apply(t,o.context,l),s=h):o.trailing&&(clearTimeout(i),i=setTimeout(function(){l[0].last=!0,Reflect.apply(t,o.context,l)},e));else{if(i)return;i=setTimeout(function(){i=null,Reflect.apply(t,o.context,l)},e)}}};return new Proxy(t,a)},needLoad:function(t,e){if(!t&&Math.abs(e.scrollTop-this.scrollTop)>this.tdHeight*this.loadNum)return this.showLoad=!0,this.scrollTop=e.scrollTop,!0},scrollProcessing:function(t){var e=t&&t.last,o=document.getElementById("bottomDiv"),i=(document.getElementById("topDiv"),o.scrollTop>=this.scrollTop);this.needLoad(e,o)||(this.scrollTop=o.scrollTop,i?this.handleScrollBottom():this.handleScrollTop(),this.showLoad=!1)},handleScrollTop:function(){if(this.dataTop<this.scrollTop)return void this.handleScrollBottom();if(this.dataTotal>this.loadNum){var t=this.dataTop,e=t-this.loadNum*this.tdHeight;if(this.scrollTop<t&&this.scrollTop>=e){var o=parseInt(this.dataTop/this.tdHeight);o-this.loadNum>=0?this.dataProcessing(this.loadNum,this.loadedNum-this.loadNum,"top"):this.dataProcessing(o,o,"top")}else if(this.scrollTop<e){var i=parseInt(this.scrollTop/this.tdHeight);i-this.loadNum>=0?this.dataProcessing(2*this.loadNum,i,"topAll"):this.dataProcessing(i+this.loadNum,i,"topAll")}}},handleScrollBottom:function(){if(this.dataTop>this.scrollTop)return void this.handleScrollTop();var t=this.dataTop+this.loadedNum*this.tdHeight-this.tableHeight,e=t+this.tdHeight*this.loadNum;if(this.scrollTop>t&&this.scrollTop<=e){if(this.dataTotal>this.loadedNum){var o=parseInt(this.dataTop/this.tdHeight),i=o+this.loadedNum+this.loadNum,s=this.dataTotal-(o+this.loadedNum);i<=this.dataTotal?this.dataProcessing(this.loadedNum-this.loadNum,this.loadNum,"bottom"):this.dataProcessing(s,s,"bottom")}}else if(this.scrollTop>e){var n=parseInt(this.scrollTop/this.tdHeight);n+this.loadNum<=this.dataTotal?this.dataProcessing(n,2*this.loadNum,"bottomAll"):this.dataProcessing(n,this.dataTotal-n+this.loadNum,"bottomAll")}},handleScrollLeft:function(t,e){t.scrollTo(e.scrollLeft,t.pageYOffset)},dataProcessing:function(t,e,o){var i=parseInt(this.dataTop/this.tdHeight);if("top"===o){this.showTableList.splice(this.loadedNum-e,e);for(var s=1;s<=t;s++){var n=i-s;this.showTableList.unshift(this.tableList[n])}this.loadedNum=this.loadedNum+t-e,this.dataTop=this.dataTop-t*this.tdHeight,document.getElementById("bottomDiv").scrollTop=document.getElementById("bottomDiv").scrollTop+e*this.tdHeight}else if("bottom"==o){this.showTableList.splice(0,t);for(var s=0;s<e;s++){var a=i+this.loadedNum+s;this.showTableList.push(this.tableList[a])}this.loadedNum=this.loadedNum-t+e,this.dataTop=this.dataTop+t*this.tdHeight,document.getElementById("bottomDiv").scrollTop=document.getElementById("bottomDiv").scrollTop-t*this.tdHeight}else if("bottomAll"==o){this.showTableList=[];for(var r=t,s=0;s<e;s++){var l=r-this.loadNum+s;this.showTableList.push(this.tableList[l])}this.loadedNum=e,this.dataTop=(r-this.loadNum)*this.tdHeight}else if("topAll"==o){this.showTableList=[];for(var d=e,s=0;s<t;s++){var c=d-t+this.loadNum+s;this.showTableList.push(this.tableList[c])}this.loadedNum=t,this.dataTop=(d-t+this.loadNum)*this.tdHeight}this.showLoad=!1},rowClick:function(t,e){void 0!==this.highlightRow&&(this.selectIndex=t),this.$emit("on-row-click",t,e)},rowDblclick:function(t,e){this.$emit("on-row-dblclick",t,e)},handleSort:function(t,e){var o=this,i=this.columns[t].key;this.tableList.sort(function(s,n){return o.columns[t].sortMethod?o.columns[t].sortMethod(s[i],n[i],e):"asc"===e?s[i]>n[i]?1:-1:"desc"===e?s[i]<n[i]?1:-1:void 0})}},created:function(){this.handleScroll=this.proxy(this.scrollProcessing,300,{leading:!0,trailing:!0,context:this})},watch:{tableList:{handler:function(t,e){if(document.getElementById("bottomDiv")&&(document.getElementById("bottomDiv").scrollTop=0),document.getElementById("bottomDiv")&&(document.getElementById("bottomDiv").scrollLeft=0),this.loadedNum=0,this.dataTotal=0,this.dataTop=0,this.scrollTop=0,this.showTableList=[],t.length>0)if(this.dataTotal=t.length,this.dataTotal>=this.loadNum){this.loadedNum=this.loadNum;for(var o=0;o<this.loadNum;o++){var i=t[o];this.showTableList.push(i)}}else if(this.dataTotal<this.loadNum){this.loadedNum=this.dataTotal;for(var o=0;o<this.dataTotal;o++){var s=t[o];this.showTableList.push(s)}}e&&this.scrollProcessing()}},tableHeight:function(t){t&&this.scrollProcessing()}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(3),s=[i.a],n=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.map(function(e){t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&n(window.Vue),e.default={install:n,ExtraLongTable:i.a}},function(t,e,o){"use strict";var i=o(4);i.a.install=function(t){return t.component(i.a.name,i.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(i.a),e.a=i.a},function(t,e,o){"use strict";function i(t){o(5)}var s=o(1),n=o(11),a=o(10),r=i,l=a(s.a,n.a,!1,r,"data-v-7e886ead",null);e.a=l.exports},function(t,e,o){var i=o(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(8)("77a47b01",i,!0,{})},function(t,e,o){e=t.exports=o(0)(!1),e.i(o(7),""),e.push([t.i,"",""])},function(t,e,o){e=t.exports=o(0)(!1),e.push([t.i,'*{padding:0;margin:0}.tableBody{width:100%}.top-td{border-right:1px solid #e9eaec;height:40px;white-space:nowrap;background-color:#f8f8f9;box-sizing:border-box;text-align:center;text-overflow:ellipsis;font-weight:600;border-bottom:1px solid #e9eaec;color:#495060;font-size:12px}.top-td,.top-td .sort-icon{vertical-align:middle;overflow:hidden}.top-td .sort-icon{display:inline-block;width:14px;height:12px;margin-top:-1px;cursor:pointer;position:relative}.sort-icon i{display:block;height:6px;line-height:6px;overflow:hidden;position:absolute;color:#c5c8ce;transition:color .2s ease-in-out;font-size:16px;font-family:Ionicons;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;text-rendering:auto}.sort-icon i:first-child{top:0}.sort-icon i:last-child{bottom:0}.sort-icon i.on{color:#2d8cf0}.sort-icon-arrow-down:before,.sort-icon-arrow-up:before{content:"\\F33D"}.table-bottom{top:41px;bottom:0;overflow:auto}.table-bottom,.table-top{position:absolute;left:0;right:0}.table-top{overflow:hidden}.table-bottom-load{position:absolute;z-index:99;width:100%;background-color:rgba(0,0,0,.5);opacity:.3;display:flex;align-items:center;flex-direction:column;justify-content:center}.table-bottom-load .icon{font-size:30px;animation:ani-demo-spin 2s linear infinite;width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.table-bottom-load .msg{margin-top:10px;color:#000;line-height:30px}@keyframes ani-demo-spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.table-div{width:inherit;max-width:100%;color:#495060;font-size:12px;position:relative;margin:auto;border:1px solid #e9eaec;overflow:auto}.bottom-td,.table-div{background-color:#fff;box-sizing:border-box}.bottom-td{height:auto;text-align:center;text-overflow:ellipsis;vertical-align:middle;border-bottom:1px solid #e9eaec;border-right:1px solid #e9eaec;transition:background-color .2s ease-in-out}.trhover:hover td,.trselect td{background-color:#ebf7ff}',""])},function(t,e,o){function i(t){for(var e=0;e<t.length;e++){var o=t[e],i=c[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(n(o.parts[s]));i.parts.length>o.parts.length&&(i.parts.length=o.parts.length)}else{for(var a=[],s=0;s<o.parts.length;s++)a.push(n(o.parts[s]));c[o.id]={id:o.id,refs:1,parts:a}}}}function s(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function n(t){var e,o,i=document.querySelector("style["+v+'~="'+t.id+'"]');if(i){if(f)return m;i.parentNode.removeChild(i)}if(b){var n=p++;i=u||(u=s()),e=a.bind(null,i,n,!1),o=a.bind(null,i,n,!0)}else i=s(),e=r.bind(null,i),o=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else o()}}function a(t,e,o,i){var s=o?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var n=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}function r(t,e){var o=e.css,i=e.media,s=e.sourceMap;if(i&&t.setAttribute("media",i),g.ssrId&&t.setAttribute(v,e.id),s&&(o+="\n/*# sourceURL="+s.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=o(9),c={},h=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,f=!1,m=function(){},g=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o,s){f=o,g=s||{};var n=d(t,e);return i(n),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],r=c[a.id];r.refs--,o.push(r)}e?(n=d(t,e),i(n)):n=[];for(var s=0;s<o.length;s++){var r=o[s];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete c[r.id]}}}};var w=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var o=[],i={},s=0;s<e.length;s++){var n=e[s],a=n[0],r=n[1],l=n[2],d=n[3],c={id:t+":"+s,css:r,media:l,sourceMap:d};i[a]?i[a].parts.push(c):o.push(i[a]={id:a,parts:[c]})}return o}},function(t,e){t.exports=function(t,e,o,i,s,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var d="function"==typeof r?r.options:r;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),o&&(d.functional=!0),s&&(d._scopeId=s);var c;if(n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):i&&(c=i),c){var h=d.functional,u=h?d.render:d.beforeCreate;h?(d._injectStyles=c,d.render=function(t,e){return c.call(e),u(t,e)}):d.beforeCreate=u?[].concat(u,c):[c]}return{esModule:a,exports:r,options:d}}},function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"relative",height:"100%"}},[o("div",{staticClass:"table-div",style:{height:t.tableHeight+"px"}},[o("div",{staticClass:"table-top",style:{right:t.isScroll+"px"},attrs:{id:"topDiv"}},[o("table",{staticStyle:{width:"100%","table-layout":"fixed"},attrs:{id:"topTable",cellpadding:"0",cellspacing:"0",border:"0"}},[o("tr",t._l(t.columns,function(e,i){return o("td",{staticClass:"top-td",style:e.width?"width:"+e.width+"px":"width:auto"},[o("span",[t._v(t._s(e.title?e.title:""))]),t._v(" "),e.sortable?o("span",{class:"sort-icon"},[o("i",{staticClass:"sort-icon-arrow-up",class:{on:"asc"===e.sortType},on:{click:function(e){return t.handleSort(i,"asc")}}}),t._v(" "),o("i",{staticClass:"sort-icon-arrow-down",class:{on:"desc"===e.sortType},on:{click:function(e){return t.handleSort(i,"desc")}}})]):t._e()])}),0)])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showTableList.length>0,expression:"showTableList.length>0"}],staticClass:"table-bottom",attrs:{id:"bottomDiv"},on:{scroll:function(e){return e.stopPropagation(),t.handleScroll(e)}}},[o("div",{style:{height:t.dataTop+"px"}}),t._v(" "),o("table",{staticStyle:{width:"100%","table-layout":"fixed"},style:{height:t.loadedNum*t.tdHeight+"px"},attrs:{id:"bottomTable",cellpadding:"0",cellspacing:"0",border:"0"}},t._l(t.showTableList,function(e,i){return o("tr",{class:t.selectIndex==i?"trselect":"trhover",style:{"line-height":t.tdHeight+"px"},on:{click:function(o){return t.rowClick(i,e)},dblclick:function(o){return t.rowDblclick(i,e)}}},["index"==t.columns[0].type?o("td",{staticClass:"bottom-td",style:t.columns[0].width?"width:"+t.columns[0].width+"px":"width:auto"},[t._v("\n            "+t._s(i+t.dataTop/t.tdHeight+1))]):t._e(),t._v(" "),"select"==t.columns[0].type?o("td",{staticClass:"bottom-td"}):t._e(),t._v(" "),t._l(t.columnsBottom,function(i,s){return o("td",{staticClass:"bottom-td",style:i.width?"width:"+i.width+"px":"width:auto"},[t._v("\n            "+t._s(void 0==i.logic?e[i.key]:i.logic(e))+"\n          ")])})],2)}),0),t._v(" "),o("div",{style:{height:t.tableOtherBottom+"px"}})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.showTableList.length,expression:"showTableList.length==0"}]},[t._v("\n      暂无数据\n    ")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoad,expression:"showLoad"}],staticClass:"table-bottom-load",style:{right:t.isScroll+"px",top:"40px",height:t.tableHeight-40+"px"}},[o("svg",{staticClass:"icon loading ",attrs:{"aria-hidden":"true"}},[o("use",{attrs:{"xlink:href":"#icon-jiazai"}})]),t._v(" "),o("div",{staticClass:"msg"},[t._v("正在拼命加载")])])])},s=[],n={render:i,staticRenderFns:s};e.a=n}])});
//# sourceMappingURL=extra-long-table.js.map