'use strict';!function(require,directRequire){function a(a){return new Promise((b,d)=>{c(a,function(a,c){a?d(a):b(c)})})}function b(b,c){return new Promise(async(d)=>{if(f)try{await a(`lsof -i@${c}:${b}`);d(!1)}catch(a){d(!0)}else try{await a(`netstat -an | find "${c}:${b}"`);d(!1)}catch(a){d(!0)}})}const c=require('child_process').exec,d=require('fs'),e=require('net'),f='darwin'===process.platform,g={min:49152,max:65535};module.exports={findFreePort:function(a='127.0.0.1'){const c=g;var d=0;return new Promise((e,f)=>{function g(){d+=1,10<d&&f(Error('Unable to find a free port'));var h=Math.floor(Math.random()*(c.max-c.min)+c.min);b(h,a).then(function(a){a?e(h):g()},g)}g()})},isFree:b}}(require('lazyload'),require);