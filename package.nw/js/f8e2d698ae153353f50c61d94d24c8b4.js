'use strict';!function(require,directRequire){const{BROADCAST_CHANNEL_NAME:a}=require('./29663300bfa19b7ed51ebc10354be1e9.js'),{syncSettings:b}=require('./e98c60a262d8d98e69e574a9d12a21df.js'),{syncUser:c}=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),{syncProject:d}=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),e=new BroadcastChannel(a);let f;const g={user:{},settings:{}},h={user:c,settings:b,project:d},i={settings:['show','currentCategory'],project:['current']},j=(a,b)=>{let c=g[b]!==a[b]&&g[b].syncTime===a[b].syncTime;if(!c)return!1;if(i[b]){const c=g[b],d=a[b];for(const a in d)if(-1===i[b].indexOf(a)&&d[a]!==c[a])return!0;return!1}return!0},k=()=>{const a=f.getState();for(const b in g)j(a,b)&&e.postMessage({key:b,value:a[b],syncTime:+new Date}),g[b]=a[b]};e.onmessage=(a)=>{if(f){const{key:b,value:c,syncTime:d}=a.data;b&&h[b]&&f.dispatch(h[b](c,d))}},module.exports=(a)=>{f=a;const b=f.getState();for(const c in g)g[c]=b[c];f.subscribe(k)}}(require('lazyload'),require);