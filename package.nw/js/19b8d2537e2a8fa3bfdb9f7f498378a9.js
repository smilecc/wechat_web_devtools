'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./bc6da482e31095b30d0825ebcd515da8.js'),b=require('./27bdfeb153dba07a3f19f0c213333422.js'),c=require('./3f59a3e1dca1628309c6e8c50b1a0325.js'),d=require('./f4b6ccad0e9be4d5544881e159c8a679.js'),e=require('./b37b26b2bfc832c31076b55f5b25d20c.js'),f=require('./507de238d6e678a6ac2c17ecf78c56ba.js'),g=require('./0d763e336240aa8eea39e17948f1d2ce.js'),h={showPickerView:b,showDatePickerView:b,getRegionData:b,showMultiPickerView:b,updateMultiPickerView:b,initReady:a,getUserAutoFillData:c,setUserAutoFillData:c,requestAuthUserAutoFillData:c,deleteUserAutoFillData:c,insertHTMLWebView:d,updateHTMLWebView:d,removeHTMLWebView:d,private_geolocation:e,getPhoneNumber:f,remoteDebugInfo:g};var i={};module.exports=new Proxy(i,{get:function(a,b){return b in i?i[b]:h[b]?(i=_extends({},i,h[b]),i[b]):void 0}})}(require('lazyload'),require);