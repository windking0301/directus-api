(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f07aad8"],{"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},afd9:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-select",{attrs:{id:e.name,icon:"perm_identity",name:e.name,placeholder:e.$t("interfaces.user-roles.choose_role"),options:e.selectOptions,value:e.selectValue,disabled:e.readonly},on:{input:e.emitValue}})},o=[],u=(n("4de4"),n("4160"),n("b0c0"),n("159b"),n("53ca")),i=n("8db2"),r=n.n(i),a={name:"InterfaceUserRole",mixins:[r.a],data:function(){return{loading:!1,roles:[],error:null}},computed:{selectValue:function(){return null===this.value?null:"object"===Object(u["a"])(this.value)?this.value.id:this.value},selectOptions:function(){var e=this,t={};return this.roles.filter((function(t){return!!e.options.showPublic||2!==t.id})).forEach((function(e){t[e.id]=e.name})),t}},created:function(){this.fetchRoles()},methods:{fetchRoles:function(){var e=this;this.loading=!0,this.$api.getRoles().then((function(e){return e.data})).then((function(t){e.roles=t,e.loading=!1,e.error=null})).catch((function(t){e.loading=!1,e.error=t}))},emitValue:function(e){this.$emit("input",e)}}},c=a,d=n("2877"),f=Object(d["a"])(c,l,o,!1,null,"1db26830",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-7f07aad8.af982a7f.js.map