'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(){let a={};try{a=JSON.parse(localStorage.getItem('reduxPersist:settings'))||{}}catch(b){a={}}const b=e.merge({},d.settings,a);return b.shortcuts=e.assign({},d.settings.shortcuts,a.shortcuts),b.shortcuts._editingShortcuts=!1,b.show=!1,b}const{REHYDRATE:b}=require('redux-persist/lib/constants'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./5498e660c05c574f739a28bd5d202cfa.js'),e=require('lodash');module.exports=function(b=a(),f){switch(f.type){case c.SETTINGS_OPEN_IDE_SETTINGS:return _extends({},b,{show:!0,currentCategory:f.category||'proxy'});case c.SETTINGS_CLOSE_IDE_SETTINGS:return _extends({},b,{shortcuts:_extends({},b.shortcuts,{_editingShortcuts:!1}),show:!1});case c.SETTINGS_SAVE_IDE_SETTINGS:return e.merge(JSON.parse(JSON.stringify(b)),f.newSettings);case c.SETTINGS_SYNC_STORE:return e.merge(JSON.parse(JSON.stringify(b)),f.data,{show:b.show,syncTime:f.syncTime});case c.SETTINGS_PARTIAL_UPDATE_IDE_SETTINGS:return _extends({},b,{[f.section]:_extends({},b[f.section],{[f.option]:f.value})});case c.SETTINGS_RESET_SHORTCUTS:return _extends({},b,{shortcuts:e.cloneDeep(d.settings.shortcuts)});case c.SETTINGS_SET_GEO:return _extends({},b,{geo:_extends({},b.geo,f.data)});case c.SETTINGS_SET_PROXY:return _extends({},b,{proxy:_extends({},b.proxy,f.data)});default:return b;}}}(require('lazyload'),require);