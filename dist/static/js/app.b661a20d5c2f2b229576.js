webpackJsonp([1],{"+Ksx":function(t,e){},0:function(t,e){},"34KM":function(t,e){},"9r31":function(t,e){},FApe:function(t,e){},LpdK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("j1ja");var s=n("v5o6"),i=n.n(s),r=n("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-header"},[e("div",{staticClass:"icon"}),this._v(" "),e("h1",{staticClass:"text"},[this._v("Chicken Music")])])}]};var c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("span",{staticClass:"tab-link"},[this._v("推荐")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("span",{staticClass:"tab-link"},[this._v("歌手")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("span",{staticClass:"tab-link"},[this._v("排行")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("span",{staticClass:"tab-link"},[this._v("搜索")])])],1)},staticRenderFns:[]};var o={components:{MHeader:n("VU/8")({},a,!1,function(t){n("+Ksx")},"data-v-1488da36",null).exports,Tab:n("VU/8")({},c,!1,function(t){n("jTSr")},"data-v-d8bd5122",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("m-header"),this._v(" "),e("tab"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var d=n("VU/8")(o,l,!1,function(t){n("9r31")},"data-v-a55df618",null).exports,u=n("/ocq"),h=n("43Vb"),v=n.n(h);function f(t,e){if(!function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}var m={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},intervel:{type:Number,default:4e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider()},20)},methods:{_setSliderWidth:function(){this.children=this.$refs.sliderGroup.children;for(var t=0,e=this.$refs.slider.clientWidth,n=0;n<this.children.length;n++){var s=this.children[n];f(s,"slider-item"),s.style.width=e+"px",t+=e}this.loop&&(t+=2*e),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var t=this;this.slider=new v.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400,click:!0}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e})},_initDots:function(){this.dots=new Array(this.children.length)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,s){return n("span",{key:s,staticClass:"dot",class:{active:t.currentPageIndex===s}})}))])},staticRenderFns:[]};var _={data:function(){return{recommends:[]}},created:function(){this._getRecommend()},methods:{_getRecommend:function(){var t=this;this.$http.get("/recommend").then(function(e){0===e.body.code&&(t.recommends=e.body.data.slider)})}},components:{Slider:n("VU/8")(m,p,!1,function(t){n("FApe")},"data-v-9b72ec30",null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend"},[e("div",{staticClass:"recommend-content"},[this.recommends.length?e("div",{staticClass:"slider-wrapper"},[e("slider",this._l(this.recommends,function(t){return e("div",{key:t.id},[e("a",{attrs:{href:t.linkUrl}},[e("img",{attrs:{src:t.picUrl}})])])}))],1):this._e(),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend-list"},[e("h1",{staticClass:"list-title"},[this._v("热门歌单推荐")]),this._v(" "),e("ul")])}]};var C=n("VU/8")(_,g,!1,function(t){n("LpdK")},"data-v-e9907e9a",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    singer\n")])},staticRenderFns:[]};var k=n("VU/8")({},b,!1,function(t){n("dPIe")},"data-v-2fea9446",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    rank\n")])},staticRenderFns:[]};var $=n("VU/8")({},x,!1,function(t){n("tjj0")},"data-v-4ddf5fac",null).exports,y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    search\n")])},staticRenderFns:[]};var j=n("VU/8")({},y,!1,function(t){n("gjaD")},"data-v-445f6634",null).exports;r.a.use(u.a);var E=new u.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:C},{path:"/singer",component:k},{path:"/rank",component:$},{path:"/search",component:j}]}),R=n("8+8L");r.a.use(R.a);n("34KM");i.a.attach(document.body),new r.a({el:"#app",render:function(t){return t(d)},router:E,resource:{}})},dPIe:function(t,e){},gjaD:function(t,e){},jTSr:function(t,e){},tjj0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b661a20d5c2f2b229576.js.map