import{gsap as fi}from"https://cdn.skypack.dev/gsap@3.11.0";import{ScrollTrigger as Ff}from"https://cdn.skypack.dev/gsap@3.11.0/ScrollTrigger";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Hf={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function Zx(){if(t_)return go;t_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return go.Fragment=e,go.jsx=i,go.jsxs=i,go}var e_;function jx(){return e_||(e_=1,Hf.exports=Zx()),Hf.exports}var bh=jx(),Gf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function Kx(){if(n_)return ae;n_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function y(w,Z,nt){this.props=w,this.context=Z,this.refs=R,this.updater=nt||M}y.prototype.isReactComponent={},y.prototype.setState=function(w,Z){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Z,"setState")},y.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=y.prototype;function B(w,Z,nt){this.props=w,this.context=Z,this.refs=R,this.updater=nt||M}var O=B.prototype=new _;O.constructor=B,b(O,y.prototype),O.isPureReactComponent=!0;var U=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function H(w,Z,nt,vt,W,tt){return nt=tt.ref,{$$typeof:o,type:w,key:Z,ref:nt!==void 0?nt:null,props:tt}}function $(w,Z){return H(w.type,Z,void 0,void 0,void 0,w.props)}function D(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function A(w){var Z={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(nt){return Z[nt]})}var P=/\/+/g;function j(w,Z){return typeof w=="object"&&w!==null&&w.key!=null?A(""+w.key):Z.toString(36)}function q(){}function at(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(q,q):(w.status="pending",w.then(function(Z){w.status==="pending"&&(w.status="fulfilled",w.value=Z)},function(Z){w.status==="pending"&&(w.status="rejected",w.reason=Z)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function rt(w,Z,nt,vt,W){var tt=typeof w;(tt==="undefined"||tt==="boolean")&&(w=null);var ft=!1;if(w===null)ft=!0;else switch(tt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(w.$$typeof){case o:case e:ft=!0;break;case g:return ft=w._init,rt(ft(w._payload),Z,nt,vt,W)}}if(ft)return W=W(w),ft=vt===""?"."+j(w,0):vt,U(W)?(nt="",ft!=null&&(nt=ft.replace(P,"$&/")+"/"),rt(W,Z,nt,"",function(Jt){return Jt})):W!=null&&(D(W)&&(W=$(W,nt+(W.key==null||w&&w.key===W.key?"":(""+W.key).replace(P,"$&/")+"/")+ft)),Z.push(W)),1;ft=0;var Mt=vt===""?".":vt+":";if(U(w))for(var At=0;At<w.length;At++)vt=w[At],tt=Mt+j(vt,At),ft+=rt(vt,Z,nt,tt,W);else if(At=x(w),typeof At=="function")for(w=At.call(w),At=0;!(vt=w.next()).done;)vt=vt.value,tt=Mt+j(vt,At++),ft+=rt(vt,Z,nt,tt,W);else if(tt==="object"){if(typeof w.then=="function")return rt(at(w),Z,nt,vt,W);throw Z=String(w),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ft}function N(w,Z,nt){if(w==null)return w;var vt=[],W=0;return rt(w,vt,"","",function(tt){return Z.call(nt,tt,W++)}),vt}function X(w){if(w._status===-1){var Z=w._result;Z=Z(),Z.then(function(nt){(w._status===0||w._status===-1)&&(w._status=1,w._result=nt)},function(nt){(w._status===0||w._status===-1)&&(w._status=2,w._result=nt)}),w._status===-1&&(w._status=0,w._result=Z)}if(w._status===1)return w._result.default;throw w._result}var V=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function pt(){}return ae.Children={map:N,forEach:function(w,Z,nt){N(w,function(){Z.apply(this,arguments)},nt)},count:function(w){var Z=0;return N(w,function(){Z++}),Z},toArray:function(w){return N(w,function(Z){return Z})||[]},only:function(w){if(!D(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ae.Component=y,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=B,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ae.__COMPILER_RUNTIME={__proto__:null,c:function(w){return k.H.useMemoCache(w)}},ae.cache=function(w){return function(){return w.apply(null,arguments)}},ae.cloneElement=function(w,Z,nt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var vt=b({},w.props),W=w.key,tt=void 0;if(Z!=null)for(ft in Z.ref!==void 0&&(tt=void 0),Z.key!==void 0&&(W=""+Z.key),Z)!I.call(Z,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&Z.ref===void 0||(vt[ft]=Z[ft]);var ft=arguments.length-2;if(ft===1)vt.children=nt;else if(1<ft){for(var Mt=Array(ft),At=0;At<ft;At++)Mt[At]=arguments[At+2];vt.children=Mt}return H(w.type,W,void 0,void 0,tt,vt)},ae.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},ae.createElement=function(w,Z,nt){var vt,W={},tt=null;if(Z!=null)for(vt in Z.key!==void 0&&(tt=""+Z.key),Z)I.call(Z,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(W[vt]=Z[vt]);var ft=arguments.length-2;if(ft===1)W.children=nt;else if(1<ft){for(var Mt=Array(ft),At=0;At<ft;At++)Mt[At]=arguments[At+2];W.children=Mt}if(w&&w.defaultProps)for(vt in ft=w.defaultProps,ft)W[vt]===void 0&&(W[vt]=ft[vt]);return H(w,tt,void 0,void 0,null,W)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(w){return{$$typeof:d,render:w}},ae.isValidElement=D,ae.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:X}},ae.memo=function(w,Z){return{$$typeof:p,type:w,compare:Z===void 0?null:Z}},ae.startTransition=function(w){var Z=k.T,nt={};k.T=nt;try{var vt=w(),W=k.S;W!==null&&W(nt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(pt,V)}catch(tt){V(tt)}finally{k.T=Z}},ae.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ae.use=function(w){return k.H.use(w)},ae.useActionState=function(w,Z,nt){return k.H.useActionState(w,Z,nt)},ae.useCallback=function(w,Z){return k.H.useCallback(w,Z)},ae.useContext=function(w){return k.H.useContext(w)},ae.useDebugValue=function(){},ae.useDeferredValue=function(w,Z){return k.H.useDeferredValue(w,Z)},ae.useEffect=function(w,Z,nt){var vt=k.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(w,Z)},ae.useId=function(){return k.H.useId()},ae.useImperativeHandle=function(w,Z,nt){return k.H.useImperativeHandle(w,Z,nt)},ae.useInsertionEffect=function(w,Z){return k.H.useInsertionEffect(w,Z)},ae.useLayoutEffect=function(w,Z){return k.H.useLayoutEffect(w,Z)},ae.useMemo=function(w,Z){return k.H.useMemo(w,Z)},ae.useOptimistic=function(w,Z){return k.H.useOptimistic(w,Z)},ae.useReducer=function(w,Z,nt){return k.H.useReducer(w,Z,nt)},ae.useRef=function(w){return k.H.useRef(w)},ae.useState=function(w){return k.H.useState(w)},ae.useSyncExternalStore=function(w,Z,nt){return k.H.useSyncExternalStore(w,Z,nt)},ae.useTransition=function(){return k.H.useTransition()},ae.version="19.1.0",ae}var i_;function md(){return i_||(i_=1,Gf.exports=Kx()),Gf.exports}var Qx=md(),Vf={exports:{}},_o={},kf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function Jx(){return a_||(a_=1,function(o){function e(N,X){var V=N.length;N.push(X);t:for(;0<V;){var pt=V-1>>>1,w=N[pt];if(0<l(w,X))N[pt]=X,N[V]=w,V=pt;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var X=N[0],V=N.pop();if(V!==X){N[0]=V;t:for(var pt=0,w=N.length,Z=w>>>1;pt<Z;){var nt=2*(pt+1)-1,vt=N[nt],W=nt+1,tt=N[W];if(0>l(vt,V))W<w&&0>l(tt,vt)?(N[pt]=tt,N[W]=V,pt=W):(N[pt]=vt,N[nt]=V,pt=nt);else if(W<w&&0>l(tt,V))N[pt]=tt,N[W]=V,pt=W;else break t}}return X}function l(N,X){var V=N.sortIndex-X.sortIndex;return V!==0?V:N.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=N)r(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(p)}}function k(N){if(R=!1,U(N),!b)if(i(m)!==null)b=!0,I||(I=!0,j());else{var X=i(p);X!==null&&rt(k,X.startTime-N)}}var I=!1,H=-1,$=5,D=-1;function A(){return y?!0:!(o.unstable_now()-D<$)}function P(){if(y=!1,I){var N=o.unstable_now();D=N;var X=!0;try{t:{b=!1,R&&(R=!1,B(H),H=-1),M=!0;var V=x;try{e:{for(U(N),v=i(m);v!==null&&!(v.expirationTime>N&&A());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,x=v.priorityLevel;var w=pt(v.expirationTime<=N);if(N=o.unstable_now(),typeof w=="function"){v.callback=w,U(N),X=!0;break e}v===i(m)&&r(m),U(N)}else r(m);v=i(m)}if(v!==null)X=!0;else{var Z=i(p);Z!==null&&rt(k,Z.startTime-N),X=!1}}break t}finally{v=null,x=V,M=!1}X=void 0}}finally{X?j():I=!1}}}var j;if(typeof O=="function")j=function(){O(P)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,at=q.port2;q.port1.onmessage=P,j=function(){at.postMessage(null)}}else j=function(){_(P,0)};function rt(N,X){H=_(function(){N(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(N){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var V=x;x=X;try{return N()}finally{x=V}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=x;x=N;try{return X()}finally{x=V}},o.unstable_scheduleCallback=function(N,X,V){var pt=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?pt+V:pt):V=pt,N){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=V+w,N={id:g++,callback:X,priorityLevel:N,startTime:V,expirationTime:w,sortIndex:-1},V>pt?(N.sortIndex=V,e(p,N),i(m)===null&&N===i(p)&&(R?(B(H),H=-1):R=!0,rt(k,V-pt))):(N.sortIndex=w,e(m,N),b||M||(b=!0,I||(I=!0,j()))),N},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(N){var X=x;return function(){var V=x;x=X;try{return N.apply(this,arguments)}finally{x=V}}}}(Xf)),Xf}var r_;function $x(){return r_||(r_=1,kf.exports=Jx()),kf.exports}var Wf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function tS(){if(s_)return bn;s_=1;var o=md();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},bn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var o_;function eS(){if(o_)return Wf.exports;o_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Wf.exports=tS(),Wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function nS(){if(l_)return _o;l_=1;var o=$x(),e=md(),i=eS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,E=c.child;E;){if(E===a){S=!0,a=c,s=f;break}if(E===s){S=!0,s=c,a=f;break}E=E.sibling}if(!S){for(E=f.child;E;){if(E===a){S=!0,a=f,s=c;break}if(E===s){S=!0,s=f,a=c;break}E=E.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=P&&t[P]||t["@@iterator"],typeof t=="function"?t:null)}var q=Symbol.for("react.client.reference");function at(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case k:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return n=t.displayName||null,n!==null?n:at(t.type)||"Memo";case $:n=t._payload,t=t._init;try{return at(t(n))}catch{}}return null}var rt=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},pt=[],w=-1;function Z(t){return{current:t}}function nt(t){0>w||(t.current=pt[w],pt[w]=null,w--)}function vt(t,n){w++,pt[w]=t.current,t.current=n}var W=Z(null),tt=Z(null),ft=Z(null),Mt=Z(null);function At(t,n){switch(vt(ft,n),vt(tt,t),vt(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(W),vt(W,t)}function Jt(){nt(W),nt(tt),nt(ft)}function Vt(t){t.memoizedState!==null&&vt(Mt,t);var n=W.current,a=wg(n,t.type);n!==a&&(vt(tt,t),vt(W,a))}function ye(t){tt.current===t&&(nt(W),nt(tt)),Mt.current===t&&(nt(Mt),uo._currentValue=V)}var pe=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,Ln=o.unstable_shouldYield,me=o.unstable_requestPaint,ne=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,Ue=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,T=o.unstable_LowPriority,ot=o.unstable_IdlePriority,xt=o.log,Et=o.unstable_setDisableYieldValue,gt=null,Nt=null;function Rt(t){if(typeof xt=="function"&&Et(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(gt,t)}catch{}}var Ft=Math.clz32?Math.clz32:Bt,Qt=Math.log,bt=Math.LN2;function Bt(t){return t>>>=0,t===0?32:31-(Qt(t)/bt|0)|0}var Yt=256,jt=4194304;function Ot(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function oe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Ot(s):(S&=E,S!==0?c=Ot(S):a||(a=E&~t,a!==0&&(c=Ot(a))))):(E=s&~f,E!==0?c=Ot(E):S!==0?c=Ot(S):a||(a=s&~t,a!==0&&(c=Ot(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var t=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),t}function Ut(){var t=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),t}function dt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function St(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,st=t.hiddenUpdates;for(a=S&~a;0<a;){var mt=31-Ft(a),yt=1<<mt;E[mt]=0,z[mt]=-1;var lt=st[mt];if(lt!==null)for(st[mt]=null,mt=0;mt<lt.length;mt++){var ct=lt[mt];ct!==null&&(ct.lane&=-536870913)}a&=~yt}s!==0&&Lt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Lt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ft(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ie(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ft(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function He(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Je(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Zg(t.type))}function Hn(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var un=Math.random().toString(36).slice(2),an="__reactFiber$"+un,_n="__reactProps$"+un,Nn="__reactContainer$"+un,Ga="__reactEvents$"+un,zo="__reactListeners$"+un,Bo="__reactHandles$"+un,Va="__reactResources$"+un,ra="__reactMarker$"+un;function sa(t){delete t[an],delete t[_n],delete t[Ga],delete t[zo],delete t[Bo]}function wi(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Nn]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ng(t);t!==null;){if(a=t[an])return a;t=Ng(t)}return n}t=a,a=t.parentNode}return null}function Di(t){if(t=t[an]||t[Nn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ka(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function oa(t){var n=t[Va];return n||(n=t[Va]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $e(t){t[ra]=!0}var Io=new Set,Fo={};function Ui(t,n){C(t,n),C(t+"Capture",n)}function C(t,n){for(Fo[t]=n,t=0;t<n.length;t++)Io.add(n[t])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},ht={};function J(t){return pe.call(ht,t)?!0:pe.call(ut,t)?!1:Q.test(t)?ht[t]=!0:(ut[t]=!0,!1)}function Tt(t,n,a){if(J(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ct(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function wt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var zt,$t;function Wt(t){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+t+$t}var kt=!1;function fe(t,n){if(!t||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ct){var lt=ct}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(ct){lt=ct}t.call(yt.prototype)}}else{try{throw Error()}catch(ct){lt=ct}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ct){if(ct&&lt&&typeof ct.stack=="string")return[ct.stack,lt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],E=f[1];if(S&&E){var z=S.split(`
`),st=E.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<st.length&&!st[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===st.length)for(s=z.length-1,c=st.length-1;1<=s&&0<=c&&z[s]!==st[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==st[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==st[c]){var mt=`
`+z[s].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=s&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function Ee(t){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return fe(t.type,!1);case 11:return fe(t.type.render,!1);case 1:return fe(t.type,!0);case 31:return Wt("Activity");default:return""}}function We(t){try{var n="";do n+=Ee(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(t){var n=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){t._valueTracker||(t._valueTracker=qt(t))}function Se(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_e(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var la=/[\n"\\]/g;function Ge(t){return t.replace(la,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(t,n,a,s,c,f,S,E){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ge(n)):t.value!==""+ge(n)&&(t.value=""+ge(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?En(t,S,ge(n)):a!=null?En(t,S,ge(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ge(E):t.removeAttribute("name")}function Ie(t,n,a,s,c,f,S,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function En(t,n,a){n==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function rn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function fn(t,n,a){if(n!=null&&(n=""+ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ge(a):""}function vn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function vi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Cd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Cd(t,f,n[f])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return Y0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ic=null;function Fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sr=null,yr=null;function Dd(t){var n=Di(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(Li(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));Li(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Se(s)}break t;case"textarea":fn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(t,!!a.multiple,n,!1)}}}var Hc=!1;function Ud(t,n,a){if(Hc)return t(n,a);Hc=!0;try{var s=t(n);return s}finally{if(Hc=!1,(Sr!==null||yr!==null)&&(bl(),Sr&&(n=Sr,t=yr,yr=Sr=null,Dd(n),t)))for(n=0;n<t.length;n++)Dd(t[n])}}function Es(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(Oi)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Gc=!1}var ca=null,Vc=null,Go=null;function Ld(){if(Go)return Go;var t,n=Vc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Go=c.slice(t,1<s?1-s:void 0)}function Vo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Nd(){return!1}function On(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Nd,this.isPropagationStopped=Nd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=On(Xa),bs=g({},Xa,{view:0,detail:0}),Z0=On(bs),kc,Xc,As,Wo=g({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(kc=t.screenX-As.screenX,Xc=t.screenY-As.screenY):Xc=kc=0,As=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),Od=On(Wo),j0=g({},Wo,{dataTransfer:0}),K0=On(j0),Q0=g({},bs,{relatedTarget:0}),Wc=On(Q0),J0=g({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=On(J0),tv=g({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ev=On(tv),nv=g({},Xa,{data:0}),Pd=On(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=rv[t])?!!n[t]:!1}function qc(){return sv}var ov=g({},bs,{key:function(t){if(t.key){var n=iv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lv=On(ov),cv=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=On(cv),uv=g({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),fv=On(uv),hv=g({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dv=On(hv),pv=g({},Wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=On(pv),gv=g({},Xa,{newState:0,oldState:0}),_v=On(gv),vv=[9,13,27,32],Yc=Oi&&"CompositionEvent"in window,Rs=null;Oi&&"documentMode"in document&&(Rs=document.documentMode);var xv=Oi&&"TextEvent"in window&&!Rs,Bd=Oi&&(!Yc||Rs&&8<Rs&&11>=Rs),Id=" ",Fd=!1;function Hd(t,n){switch(t){case"keyup":return vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function Sv(t,n){switch(t){case"compositionend":return Gd(n);case"keypress":return n.which!==32?null:(Fd=!0,Id);case"textInput":return t=n.data,t===Id&&Fd?null:t;default:return null}}function yv(t,n){if(Mr)return t==="compositionend"||!Yc&&Hd(t,n)?(t=Ld(),Go=Vc=ca=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bd&&n.locale!=="ko"?null:n.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mv[t.type]:n==="textarea"}function kd(t,n,a,s){Sr?yr?yr.push(s):yr=[s]:Sr=s,n=Ul(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Cs=null,ws=null;function Ev(t){Eg(t,0)}function qo(t){var n=ka(t);if(Se(n))return t}function Xd(t,n){if(t==="change")return n}var Wd=!1;if(Oi){var Zc;if(Oi){var jc="oninput"in document;if(!jc){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),jc=typeof qd.oninput=="function"}Zc=jc}else Zc=!1;Wd=Zc&&(!document.documentMode||9<document.documentMode)}function Yd(){Cs&&(Cs.detachEvent("onpropertychange",Zd),ws=Cs=null)}function Zd(t){if(t.propertyName==="value"&&qo(ws)){var n=[];kd(n,ws,t,Fc(t)),Ud(Ev,n)}}function Tv(t,n,a){t==="focusin"?(Yd(),Cs=n,ws=a,Cs.attachEvent("onpropertychange",Zd)):t==="focusout"&&Yd()}function bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(ws)}function Av(t,n){if(t==="click")return qo(n)}function Rv(t,n){if(t==="input"||t==="change")return qo(n)}function Cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:Cv;function Ds(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!pe.call(n,c)||!Gn(t[c],n[c]))return!1}return!0}function jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kd(t,n){var a=jd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jd(a)}}function Qd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mn(t.document)}return n}function Kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wv=Oi&&"documentMode"in document&&11>=document.documentMode,Er=null,Qc=null,Us=null,Jc=!1;function $d(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Er==null||Er!==Mn(s)||(s=Er,"selectionStart"in s&&Kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Us&&Ds(Us,s)||(Us=s,s=Ul(Qc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Wa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},$c={},tp={};Oi&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function qa(t){if($c[t])return $c[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in tp)return $c[t]=n[a];return t}var ep=qa("animationend"),np=qa("animationiteration"),ip=qa("animationstart"),Dv=qa("transitionrun"),Uv=qa("transitionstart"),Lv=qa("transitioncancel"),ap=qa("transitionend"),rp=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function li(t,n){rp.set(t,n),Ui(n,[t])}var sp=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=sp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:We(n)},sp.set(t,n),n)}return{value:t,source:n,stack:We(n)}}var Jn=[],br=0,eu=0;function Yo(){for(var t=br,n=eu=br=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&op(a,c,f)}}function Zo(t,n,a,s){Jn[br++]=t,Jn[br++]=n,Jn[br++]=a,Jn[br++]=s,eu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function nu(t,n,a,s){return Zo(t,n,a,s),jo(t)}function Ar(t,n){return Zo(t,null,null,n),jo(t)}function op(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ft(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(t){if(50<no)throw no=0,cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function Nv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new Nv(t,n,a,s)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ko(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")iu(t)&&(S=1);else if(typeof t=="string")S=Px(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Vn(31,a,n,c),t.elementType=D,t.lanes=f,t;case b:return Ya(a.children,c,f,n);case R:S=8,c|=24;break;case y:return t=Vn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case k:return t=Vn(13,a,n,c),t.elementType=k,t.lanes=f,t;case I:return t=Vn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case O:S=10;break t;case B:S=9;break t;case U:S=11;break t;case H:S=14;break t;case $:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ya(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function au(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function ru(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cr=[],wr=0,Qo=null,Jo=0,$n=[],ti=0,Za=null,zi=1,Bi="";function ja(t,n){Cr[wr++]=Jo,Cr[wr++]=Qo,Qo=t,Jo=n}function cp(t,n,a){$n[ti++]=zi,$n[ti++]=Bi,$n[ti++]=Za,Za=t;var s=zi;t=Bi;var c=32-Ft(s)-1;s&=~(1<<c),a+=1;var f=32-Ft(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,zi=1<<32-Ft(n)+c|a<<c|s,Bi=f+t}else zi=1<<f|a<<c|s,Bi=t}function su(t){t.return!==null&&(ja(t,1),cp(t,1,0))}function ou(t){for(;t===Qo;)Qo=Cr[--wr],Cr[wr]=null,Jo=Cr[--wr],Cr[wr]=null;for(;t===Za;)Za=$n[--ti],$n[ti]=null,Bi=$n[--ti],$n[ti]=null,zi=$n[--ti],$n[ti]=null}var wn=null,Ze=null,Re=!1,Ka=null,xi=!1,lu=Error(r(519));function Qa(t){var n=Error(r(418,""));throw Os(Qn(n,t)),lu}function up(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[_n]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<ao.length;a++)de(ao[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Ie(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ye(n);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),vn(n,s.value,s.defaultValue,s.children),Ye(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rg(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Qa(t)}function fp(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:wn=wn.return}}function Ls(t){if(t!==wn)return!1;if(!Re)return fp(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Qa(t),fp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ze=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ze=null}}else n===27?(n=Ze,ba(t.type)?(t=wf,wf=null,Ze=t):Ze=n):Ze=wn?ui(t.stateNode.nextSibling):null;return!0}function Ns(){Ze=wn=null,Re=!1}function hp(){var t=Ka;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Ka=null),t}function Os(t){Ka===null?Ka=[t]:Ka.push(t)}var cu=Z(null),Ja=null,Ii=null;function ua(t,n,a){vt(cu,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=cu.current,nt(cu)}function uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function fu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),uu(f.return,a,t),s||(S=null);break t}f=E.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),uu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ps(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var E=c.type;Gn(c.pendingProps.value,S.value)||(t!==null?t.push(E):t=[E])}}else if(c===Mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}c=c.return}t!==null&&fu(n,t,a,s),n.flags|=262144}function $o(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return dp(Ja,t)}function tl(t,n){return Ja===null&&$a(t),dp(t,n)}function dp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var Ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Pv=o.unstable_scheduleCallback,zv=o.unstable_NormalPriority,sn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new Ov,data:new Map,refCount:0}}function zs(t){t.refCount--,t.refCount===0&&Pv(zv,function(){t.controller.abort()})}var Bs=null,du=0,Dr=0,Ur=null;function Bv(t,n){if(Bs===null){var a=Bs=[];du=0,Dr=gf(),Ur={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,n.then(pp,pp),n}function pp(){if(--du===0&&Bs!==null){Ur!==null&&(Ur.status="fulfilled");var t=Bs;Bs=null,Dr=0,Ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Iv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var mp=N.S;N.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bv(t,n),mp!==null&&mp(t,n)};var tr=Z(null);function pu(){var t=tr.current;return t!==null?t:Ve.pooledCache}function el(t,n){n===null?vt(tr,tr.current):vt(tr,n.pool)}function gp(){var t=pu();return t===null?null:{parent:sn._currentValue,pool:t}}var Is=Error(r(460)),_p=Error(r(474)),nl=Error(r(542)),mu={then:function(){}};function vp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function il(){}function xp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(il,il),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,yp(t),t;default:if(typeof n.status=="string")n.then(il,il);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,yp(t),t}throw Fs=n,Is}}var Fs=null;function Sp(){if(Fs===null)throw Error(r(459));var t=Fs;return Fs=null,t}function yp(t){if(t===Is||t===nl)throw Error(r(483))}var fa=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=jo(t),op(t,null,a),n}return Zo(t,s,n,a),jo(t)}function Hs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ie(t,a)}}function vu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xu=!1;function Gs(){if(xu){var t=Ur;if(t!==null)throw t}}function Vs(t,n,a,s){xu=!1;var c=t.updateQueue;fa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,st=z.next;z.next=null,S===null?f=st:S.next=st,S=z;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,E=mt.lastBaseUpdate,E!==S&&(E===null?mt.firstBaseUpdate=st:E.next=st,mt.lastBaseUpdate=z))}if(f!==null){var yt=c.baseState;S=0,mt=st=z=null,E=f;do{var lt=E.lane&-536870913,ct=lt!==E.lane;if(ct?(xe&lt)===lt:(s&lt)===lt){lt!==0&&lt===Dr&&(xu=!0),mt!==null&&(mt=mt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var te=t,Zt=E;lt=n;var Pe=a;switch(Zt.tag){case 1:if(te=Zt.payload,typeof te=="function"){yt=te.call(Pe,yt,lt);break t}yt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Zt.payload,lt=typeof te=="function"?te.call(Pe,yt,lt):te,lt==null)break t;yt=g({},yt,lt);break t;case 2:fa=!0}}lt=E.callback,lt!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[lt]:ct.push(lt))}else ct={lane:lt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},mt===null?(st=mt=ct,z=yt):mt=mt.next=ct,S|=lt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ct=E,E=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);mt===null&&(z=yt),c.baseState=z,c.firstBaseUpdate=st,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),ya|=S,t.lanes=S,t.memoizedState=yt}}function Mp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Ep(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Mp(a[t],n)}var Lr=Z(null),al=Z(0);function Tp(t,n){t=qi,vt(al,t),vt(Lr,n),qi=t|n.baseLanes}function Su(){vt(al,qi),vt(Lr,Lr.current)}function yu(){qi=al.current,nt(Lr),nt(al)}var pa=0,le=null,Ne=null,tn=null,rl=!1,Nr=!1,er=!1,sl=0,ks=0,Or=null,Fv=0;function Ke(){throw Error(r(321))}function Mu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function Eu(t,n,a,s,c,f){return pa=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?om:lm,er=!1,f=a(s,c),er=!1,Nr&&(f=Ap(n,a,s,c)),bp(t),f}function bp(t){N.H=hl;var n=Ne!==null&&Ne.next!==null;if(pa=0,tn=Ne=le=null,rl=!1,ks=0,Or=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&$o(t)&&(hn=!0))}function Ap(t,n,a,s){le=t;var c=0;do{if(Nr&&(Or=null),ks=0,Nr=!1,25<=c)throw Error(r(301));if(c+=1,tn=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=qv,f=n(a,s)}while(Nr);return f}function Hv(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Xs(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(le.flags|=1024),n}function Tu(){var t=sl!==0;return sl=0,t}function bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Au(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}pa=0,tn=Ne=le=null,Nr=!1,ks=sl=0,Or=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?le.memoizedState=tn=t:tn=tn.next=t,tn}function en(){if(Ne===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=tn===null?le.memoizedState:tn.next;if(n!==null)tn=n,Ne=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},tn===null?le.memoizedState=tn=t:tn=tn.next=t}return tn}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xs(t){var n=ks;return ks+=1,Or===null&&(Or=[]),t=xp(Or,t,n),n=le,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?om:lm),t}function ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xs(t);if(t.$$typeof===O)return Tn(t)}throw Error(r(438,String(t)))}function Cu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ru(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=A;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function ll(t){var n=en();return wu(n,Ne,t)}function wu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=S=null,z=null,st=n,mt=!1;do{var yt=st.lane&-536870913;if(yt!==st.lane?(xe&yt)===yt:(pa&yt)===yt){var lt=st.revertLane;if(lt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),yt===Dr&&(mt=!0);else if((pa&lt)===lt){st=st.next,lt===Dr&&(mt=!0);continue}else yt={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},z===null?(E=z=yt,S=f):z=z.next=yt,le.lanes|=lt,ya|=lt;yt=st.action,er&&a(f,yt),f=st.hasEagerState?st.eagerState:a(f,yt)}else lt={lane:yt,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},z===null?(E=z=lt,S=f):z=z.next=lt,le.lanes|=yt,ya|=yt;st=st.next}while(st!==null&&st!==n);if(z===null?S=f:z.next=E,!Gn(f,t.memoizedState)&&(hn=!0,mt&&(a=Ur,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Du(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Gn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Rp(t,n,a){var s=le,c=en(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Gn((Ne||c).memoizedState,a);S&&(c.memoizedState=a,hn=!0),c=c.queue;var E=Dp.bind(null,s,c,t);if(Ws(2048,8,E,[t]),c.getSnapshot!==n||S||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,Pr(9,cl(),wp.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(pa&124)!==0||Cp(s,n,a)}return a}function Cp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Ru(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wp(t,n,a,s){n.value=a,n.getSnapshot=s,Up(n)&&Lp(t)}function Dp(t,n,a){return a(function(){Up(n)&&Lp(t)})}function Up(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function Lp(t){var n=Ar(t,2);n!==null&&Yn(n,t,2)}function Uu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),er){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function Np(t,n,a,s){return t.baseState=a,wu(t,Ne,typeof s=="function"?s:Hi)}function Gv(t,n,a,s,c){if(fl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Op(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=N.T,S={};N.T=S;try{var E=a(c,s),z=N.S;z!==null&&z(S,E),Pp(t,n,E)}catch(st){Lu(t,n,st)}finally{N.T=f}}else try{f=a(c,s),Pp(t,n,f)}catch(st){Lu(t,n,st)}}function Pp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){zp(t,n,s)},function(s){return Lu(t,n,s)}):zp(t,n,a)}function zp(t,n,a){n.status="fulfilled",n.value=a,Bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Op(t,a)))}function Lu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Bp(n),n=n.next;while(n!==s)}t.action=null}function Bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ip(t,n){return n}function Fp(t,n){if(Re){var a=Ve.formState;if(a!==null){t:{var s=le;if(Re){if(Ze){e:{for(var c=Ze,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=ui(c.nextSibling),s=c.data==="F!";break t}}Qa(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=s,a=am.bind(null,le,s),s.dispatch=a,s=Uu(!1),f=Bu.bind(null,le,!1,s.queue),s=Pn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Gv.bind(null,le,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Hp(t){var n=en();return Gp(n,Ne,t)}function Gp(t,n,a){if(n=wu(t,n,Ip)[0],t=ll(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xs(n)}catch(S){throw S===Is?nl:S}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Pr(9,cl(),Vv.bind(null,c,a),null)),[s,f,t]}function Vv(t,n){t.action=n}function Vp(t){var n=en(),a=Ne;if(a!==null)return Gp(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=Ru(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function cl(){return{destroy:void 0,resource:void 0}}function kp(){return en().memoizedState}function ul(t,n,a,s){var c=Pn();s=s===void 0?null:s,le.flags|=t,c.memoizedState=Pr(1|n,cl(),a,s)}function Ws(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Ne!==null&&s!==null&&Mu(s,Ne.memoizedState.deps)?c.memoizedState=Pr(n,f,a,s):(le.flags|=t,c.memoizedState=Pr(1|n,f,a,s))}function Xp(t,n){ul(8390656,8,t,n)}function Wp(t,n){Ws(2048,8,t,n)}function qp(t,n){return Ws(4,2,t,n)}function Yp(t,n){return Ws(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jp(t,n,a){a=a!=null?a.concat([t]):null,Ws(4,4,Zp.bind(null,n,t),a)}function Nu(){}function Kp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Mu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Qp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Mu(n,s[1]))return s[0];if(s=t(),er){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[s,n],s}function Ou(t,n,a){return a===void 0||(pa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=tg(),le.lanes|=t,ya|=t,a)}function Jp(t,n,a,s){return Gn(a,n)?a:Lr.current!==null?(t=Ou(t,a,s),Gn(t,n)||(hn=!0),t):(pa&42)===0?(hn=!0,t.memoizedState=a):(t=tg(),le.lanes|=t,ya|=t,n)}function $p(t,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var S=N.T,E={};N.T=E,Bu(t,!1,n,a);try{var z=c(),st=N.S;if(st!==null&&st(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var mt=Iv(z,s);qs(t,n,mt,qn(t))}else qs(t,n,s,qn(t))}catch(yt){qs(t,n,{then:function(){},status:"rejected",reason:yt},qn())}finally{X.p=f,N.T=S}}function kv(){}function Pu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=tm(t).queue;$p(t,c,n,V,a===null?kv:function(){return em(t),a(s)})}function tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function em(t){var n=tm(t).next.queue;qs(t,n,{},qn())}function zu(){return Tn(uo)}function nm(){return en().memoizedState}function im(){return en().memoizedState}function Xv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=ha(a);var s=da(n,t,a);s!==null&&(Yn(s,n,a),Hs(s,n,a)),n={cache:hu()},t.payload=n;return}n=n.return}}function Wv(t,n,a){var s=qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(t)?rm(n,a):(a=nu(t,n,a,s),a!==null&&(Yn(a,t,s),sm(a,n,s)))}function am(t,n,a){var s=qn();qs(t,n,a,s)}function qs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(t))rm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,E=f(S,a);if(c.hasEagerState=!0,c.eagerState=E,Gn(E,S))return Zo(t,n,c,0),Ve===null&&Yo(),!1}catch{}finally{}if(a=nu(t,n,c,s),a!==null)return Yn(a,t,s),sm(a,n,s),!0}return!1}function Bu(t,n,a,s){if(s={lane:2,revertLane:gf(),action:s,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(n)throw Error(r(479))}else n=nu(t,a,s,2),n!==null&&Yn(n,t,2)}function fl(t){var n=t.alternate;return t===le||n!==null&&n===le}function rm(t,n){Nr=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function sm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ie(t,a)}}var hl={readContext:Tn,use:ol,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},om={readContext:Tn,use:ol,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Xp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,Zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var s=t();if(er){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Pn();if(a!==void 0){var c=a(n);if(er){Rt(!0);try{a(n)}finally{Rt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Wv.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Uu(t);var n=t.queue,a=am.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Nu,useDeferredValue:function(t,n){var a=Pn();return Ou(a,t,n)},useTransition:function(){var t=Uu(!1);return t=$p.bind(null,le,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,c=Pn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&124)!==0||Cp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Xp(Dp.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,cl(),wp.bind(null,s,f,a,n),null),a},useId:function(){var t=Pn(),n=Ve.identifierPrefix;if(Re){var a=Bi,s=zi;a=(s&~(1<<32-Ft(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Fv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:zu,useFormState:Fp,useActionState:Fp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Cu,useCacheRefresh:function(){return Pn().memoizedState=Xv.bind(null,le)}},lm={readContext:Tn,use:ol,useCallback:Kp,useContext:Tn,useEffect:Wp,useImperativeHandle:jp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:ll,useRef:kp,useState:function(){return ll(Hi)},useDebugValue:Nu,useDeferredValue:function(t,n){var a=en();return Jp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=ll(Hi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:zu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var a=en();return Np(a,Ne,t,n)},useMemoCache:Cu,useCacheRefresh:im},qv={readContext:Tn,use:ol,useCallback:Kp,useContext:Tn,useEffect:Wp,useImperativeHandle:jp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:Du,useRef:kp,useState:function(){return Du(Hi)},useDebugValue:Nu,useDeferredValue:function(t,n){var a=en();return Ne===null?Ou(a,t,n):Jp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=Du(Hi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:zu,useFormState:Vp,useActionState:Vp,useOptimistic:function(t,n){var a=en();return Ne!==null?Np(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:im},zr=null,Ys=0;function dl(t){var n=Ys;return Ys+=1,zr===null&&(zr=[]),xp(zr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function cm(t){var n=t._init;return n(t._payload)}function um(t){function n(K,G){if(t){var it=K.deletions;it===null?(K.deletions=[G],K.flags|=16):it.push(G)}}function a(K,G){if(!t)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function s(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function c(K,G){return K=Pi(K,G),K.index=0,K.sibling=null,K}function f(K,G,it){return K.index=it,t?(it=K.alternate,it!==null?(it=it.index,it<G?(K.flags|=67108866,G):it):(K.flags|=67108866,G)):(K.flags|=1048576,G)}function S(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function E(K,G,it,_t){return G===null||G.tag!==6?(G=au(it,K.mode,_t),G.return=K,G):(G=c(G,it),G.return=K,G)}function z(K,G,it,_t){var It=it.type;return It===b?mt(K,G,it.props.children,_t,it.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===$&&cm(It)===G.type)?(G=c(G,it.props),Zs(G,it),G.return=K,G):(G=Ko(it.type,it.key,it.props,null,K.mode,_t),Zs(G,it),G.return=K,G)}function st(K,G,it,_t){return G===null||G.tag!==4||G.stateNode.containerInfo!==it.containerInfo||G.stateNode.implementation!==it.implementation?(G=ru(it,K.mode,_t),G.return=K,G):(G=c(G,it.children||[]),G.return=K,G)}function mt(K,G,it,_t,It){return G===null||G.tag!==7?(G=Ya(it,K.mode,_t,It),G.return=K,G):(G=c(G,it),G.return=K,G)}function yt(K,G,it){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=au(""+G,K.mode,it),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return it=Ko(G.type,G.key,G.props,null,K.mode,it),Zs(it,G),it.return=K,it;case M:return G=ru(G,K.mode,it),G.return=K,G;case $:var _t=G._init;return G=_t(G._payload),yt(K,G,it)}if(rt(G)||j(G))return G=Ya(G,K.mode,it,null),G.return=K,G;if(typeof G.then=="function")return yt(K,dl(G),it);if(G.$$typeof===O)return yt(K,tl(K,G),it);pl(K,G)}return null}function lt(K,G,it,_t){var It=G!==null?G.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return It!==null?null:E(K,G,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case x:return it.key===It?z(K,G,it,_t):null;case M:return it.key===It?st(K,G,it,_t):null;case $:return It=it._init,it=It(it._payload),lt(K,G,it,_t)}if(rt(it)||j(it))return It!==null?null:mt(K,G,it,_t,null);if(typeof it.then=="function")return lt(K,G,dl(it),_t);if(it.$$typeof===O)return lt(K,G,tl(K,it),_t);pl(K,it)}return null}function ct(K,G,it,_t,It){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(it)||null,E(G,K,""+_t,It);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return K=K.get(_t.key===null?it:_t.key)||null,z(G,K,_t,It);case M:return K=K.get(_t.key===null?it:_t.key)||null,st(G,K,_t,It);case $:var ue=_t._init;return _t=ue(_t._payload),ct(K,G,it,_t,It)}if(rt(_t)||j(_t))return K=K.get(it)||null,mt(G,K,_t,It,null);if(typeof _t.then=="function")return ct(K,G,it,dl(_t),It);if(_t.$$typeof===O)return ct(K,G,it,tl(G,_t),It);pl(G,_t)}return null}function te(K,G,it,_t){for(var It=null,ue=null,Gt=G,Kt=G=0,pn=null;Gt!==null&&Kt<it.length;Kt++){Gt.index>Kt?(pn=Gt,Gt=null):pn=Gt.sibling;var Te=lt(K,Gt,it[Kt],_t);if(Te===null){Gt===null&&(Gt=pn);break}t&&Gt&&Te.alternate===null&&n(K,Gt),G=f(Te,G,Kt),ue===null?It=Te:ue.sibling=Te,ue=Te,Gt=pn}if(Kt===it.length)return a(K,Gt),Re&&ja(K,Kt),It;if(Gt===null){for(;Kt<it.length;Kt++)Gt=yt(K,it[Kt],_t),Gt!==null&&(G=f(Gt,G,Kt),ue===null?It=Gt:ue.sibling=Gt,ue=Gt);return Re&&ja(K,Kt),It}for(Gt=s(Gt);Kt<it.length;Kt++)pn=ct(Gt,K,Kt,it[Kt],_t),pn!==null&&(t&&pn.alternate!==null&&Gt.delete(pn.key===null?Kt:pn.key),G=f(pn,G,Kt),ue===null?It=pn:ue.sibling=pn,ue=pn);return t&&Gt.forEach(function(Da){return n(K,Da)}),Re&&ja(K,Kt),It}function Zt(K,G,it,_t){if(it==null)throw Error(r(151));for(var It=null,ue=null,Gt=G,Kt=G=0,pn=null,Te=it.next();Gt!==null&&!Te.done;Kt++,Te=it.next()){Gt.index>Kt?(pn=Gt,Gt=null):pn=Gt.sibling;var Da=lt(K,Gt,Te.value,_t);if(Da===null){Gt===null&&(Gt=pn);break}t&&Gt&&Da.alternate===null&&n(K,Gt),G=f(Da,G,Kt),ue===null?It=Da:ue.sibling=Da,ue=Da,Gt=pn}if(Te.done)return a(K,Gt),Re&&ja(K,Kt),It;if(Gt===null){for(;!Te.done;Kt++,Te=it.next())Te=yt(K,Te.value,_t),Te!==null&&(G=f(Te,G,Kt),ue===null?It=Te:ue.sibling=Te,ue=Te);return Re&&ja(K,Kt),It}for(Gt=s(Gt);!Te.done;Kt++,Te=it.next())Te=ct(Gt,K,Kt,Te.value,_t),Te!==null&&(t&&Te.alternate!==null&&Gt.delete(Te.key===null?Kt:Te.key),G=f(Te,G,Kt),ue===null?It=Te:ue.sibling=Te,ue=Te);return t&&Gt.forEach(function(Yx){return n(K,Yx)}),Re&&ja(K,Kt),It}function Pe(K,G,it,_t){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case x:t:{for(var It=it.key;G!==null;){if(G.key===It){if(It=it.type,It===b){if(G.tag===7){a(K,G.sibling),_t=c(G,it.props.children),_t.return=K,K=_t;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===$&&cm(It)===G.type){a(K,G.sibling),_t=c(G,it.props),Zs(_t,it),_t.return=K,K=_t;break t}a(K,G);break}else n(K,G);G=G.sibling}it.type===b?(_t=Ya(it.props.children,K.mode,_t,it.key),_t.return=K,K=_t):(_t=Ko(it.type,it.key,it.props,null,K.mode,_t),Zs(_t,it),_t.return=K,K=_t)}return S(K);case M:t:{for(It=it.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===it.containerInfo&&G.stateNode.implementation===it.implementation){a(K,G.sibling),_t=c(G,it.children||[]),_t.return=K,K=_t;break t}else{a(K,G);break}else n(K,G);G=G.sibling}_t=ru(it,K.mode,_t),_t.return=K,K=_t}return S(K);case $:return It=it._init,it=It(it._payload),Pe(K,G,it,_t)}if(rt(it))return te(K,G,it,_t);if(j(it)){if(It=j(it),typeof It!="function")throw Error(r(150));return it=It.call(it),Zt(K,G,it,_t)}if(typeof it.then=="function")return Pe(K,G,dl(it),_t);if(it.$$typeof===O)return Pe(K,G,tl(K,it),_t);pl(K,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,G!==null&&G.tag===6?(a(K,G.sibling),_t=c(G,it),_t.return=K,K=_t):(a(K,G),_t=au(it,K.mode,_t),_t.return=K,K=_t),S(K)):a(K,G)}return function(K,G,it,_t){try{Ys=0;var It=Pe(K,G,it,_t);return zr=null,It}catch(Gt){if(Gt===Is||Gt===nl)throw Gt;var ue=Vn(29,Gt,null,K.mode);return ue.lanes=_t,ue.return=K,ue}finally{}}}var Br=um(!0),fm=um(!1),ei=Z(null),Si=null;function ma(t){var n=t.alternate;vt(on,on.current&1),vt(ei,t),Si===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Si=t)}function hm(t){if(t.tag===22){if(vt(on,on.current),vt(ei,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else ga()}function ga(){vt(on,on.current),vt(ei,ei.current)}function Gi(t){nt(ei),Si===t&&(Si=null),nt(on)}var on=Z(0);function ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Cf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qn(),c=ha(s);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(Yn(n,t,s),Hs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qn(),c=ha(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(Yn(n,t,s),Hs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(Yn(n,t,a),Hs(n,t,a))}};function dm(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ds(a,s)||!Ds(c,f):!0}function pm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Fu.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function mm(t){gl(t)}function gm(t){console.error(t)}function _m(t){gl(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function vm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function xm(t){return t=ha(t),t.tag=3,t}function Sm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){vm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){vm(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Yv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return Si===null?ff():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===mu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),df(t,s,c)),!1;case 22:return a.flags|=65536,s===mu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),df(t,s,c)),!1}throw Error(r(435,a.tag))}return df(t,s,c),ff(),!1}if(Re)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==lu&&(t=Error(r(422),{cause:s}),Os(Qn(t,a)))):(s!==lu&&(n=Error(r(423),{cause:s}),Os(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=Hu(t.stateNode,s,c),vu(t,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),eo===null?eo=[f]:eo.push(f),je!==4&&(je=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Hu(a.stateNode,s,t),vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xm(c),Sm(c,t,a,s),vu(a,c),!1}a=a.return}while(a!==null);return!1}var ym=Error(r(461)),hn=!1;function xn(t,n,a,s){n.child=t===null?fm(n,null,a,s):Br(n,t.child,a,s)}function Mm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var E in s)E!=="ref"&&(S[E]=s[E])}else S=s;return $a(n),s=Eu(t,n,a,S,f,c),E=Tu(),t!==null&&!hn?(bu(t,n,c),Vi(t,n,c)):(Re&&E&&su(n),n.flags|=1,xn(t,n,s,c),n.child)}function Em(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tm(t,n,f,s,c)):(t=Ko(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ds,a(S,s)&&t.ref===n.ref)return Vi(t,n,c)}return n.flags|=1,t=Pi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Tm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ds(f,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=f,Zu(t,c))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,Vi(t,n,c)}return Gu(t,n,a,s,c)}function bm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Am(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(n,f!==null?f.cachePool:null),f!==null?Tp(n,f):Su(),hm(n);else return n.lanes=n.childLanes=536870912,Am(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(el(n,f.cachePool),Tp(n,f),ga(),n.memoizedState=null):(t!==null&&el(n,null),Su(),ga());return xn(t,n,c,a),n.child}function Am(t,n,a,s){var c=pu();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&el(n,null),Su(),hm(n),t!==null&&Ps(t,n,s,!0),null}function vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gu(t,n,a,s,c){return $a(n),a=Eu(t,n,a,s,void 0,c),s=Tu(),t!==null&&!hn?(bu(t,n,c),Vi(t,n,c)):(Re&&s&&su(n),n.flags|=1,xn(t,n,a,c),n.child)}function Rm(t,n,a,s,c,f){return $a(n),n.updateQueue=null,a=Ap(n,s,a,c),bp(t),s=Tu(),t!==null&&!hn?(bu(t,n,f),Vi(t,n,f)):(Re&&s&&su(n),n.flags|=1,xn(t,n,a,f),n.child)}function Cm(t,n,a,s,c){if($a(n),n.stateNode===null){var f=Rr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},gu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):Rr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Iu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Vs(n,s,f,c),Gs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=nr(a,E);f.props=z;var st=f.context,mt=a.contextType;S=Rr,typeof mt=="object"&&mt!==null&&(S=Tn(mt));var yt=a.getDerivedStateFromProps;mt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||st!==S)&&pm(n,f,s,S),fa=!1;var lt=n.memoizedState;f.state=lt,Vs(n,s,f,c),Gs(),st=n.memoizedState,E||lt!==st||fa?(typeof yt=="function"&&(Iu(n,a,yt,s),st=n.memoizedState),(z=fa||dm(n,a,z,s,lt,st,S))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=S,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,_u(t,n),S=n.memoizedProps,mt=nr(a,S),f.props=mt,yt=n.pendingProps,lt=f.context,st=a.contextType,z=Rr,typeof st=="object"&&st!==null&&(z=Tn(st)),E=a.getDerivedStateFromProps,(st=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==yt||lt!==z)&&pm(n,f,s,z),fa=!1,lt=n.memoizedState,f.state=lt,Vs(n,s,f,c),Gs();var ct=n.memoizedState;S!==yt||lt!==ct||fa||t!==null&&t.dependencies!==null&&$o(t.dependencies)?(typeof E=="function"&&(Iu(n,a,E,s),ct=n.memoizedState),(mt=fa||dm(n,a,mt,s,lt,ct,z)||t!==null&&t.dependencies!==null&&$o(t.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&lt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&lt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=z,s=mt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&lt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&lt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,vl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Br(n,t.child,null,c),n.child=Br(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Vi(t,n,c),t}function wm(t,n,a,s){return Ns(),n.flags|=256,xn(t,n,a,s),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(t){return{baseLanes:t,cachePool:gp()}}function Xu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function Dm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(c?ma(n):ga(),Re){var E=Ze,z;if(z=E){t:{for(z=E,E=xi;z.nodeType!==8;){if(!E){E=null;break t}if(z=ui(z.nextSibling),z===null){E=null;break t}}E=z}E!==null?(n.memoizedState={dehydrated:E,treeContext:Za!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},z=Vn(18,null,null,0),z.stateNode=E,z.return=n,n.child=z,wn=n,Ze=null,z=!0):z=!1}z||Qa(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Cf(E)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return E=s.children,s=s.fallback,c?(ga(),c=n.mode,E=xl({mode:"hidden",children:E},c),s=Ya(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,c=n.child,c.memoizedState=ku(a),c.childLanes=Xu(t,S,a),n.memoizedState=Vu,s):(ma(n),Wu(n,E))}if(z=t.memoizedState,z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=qu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),c=s.fallback,E=n.mode,s=xl({mode:"visible",children:s.children},E),c=Ya(c,E,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Br(n,t.child,null,a),s=n.child,s.memoizedState=ku(a),s.childLanes=Xu(t,S,a),n.memoizedState=Vu,n=c);else if(ma(n),Cf(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var st=S.dgst;S=st,s=Error(r(419)),s.stack="",s.digest=S,Os({value:s,source:null,stack:null}),n=qu(t,n,a)}else if(hn||Ps(t,n,a,!1),S=(a&t.childLanes)!==0,hn||S){if(S=Ve,S!==null&&(s=a&-a,s=(s&42)!==0?1:He(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,Ar(t,s),Yn(S,t,s),ym;E.data==="$?"||ff(),n=qu(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ze=ui(E.nextSibling),wn=n,Re=!0,Ka=null,xi=!1,t!==null&&($n[ti++]=zi,$n[ti++]=Bi,$n[ti++]=Za,zi=t.id,Bi=t.overflow,Za=n),n=Wu(n,s.children),n.flags|=4096);return n}return c?(ga(),c=s.fallback,E=n.mode,z=t.child,st=z.sibling,s=Pi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,st!==null?c=Pi(st,c):(c=Ya(c,E,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,E=t.child.memoizedState,E===null?E=ku(a):(z=E.cachePool,z!==null?(st=sn._currentValue,z=z.parent!==st?{parent:st,pool:st}:z):z=gp(),E={baseLanes:E.baseLanes|a,cachePool:z}),c.memoizedState=E,c.childLanes=Xu(t,S,a),n.memoizedState=Vu,s):(ma(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Wu(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=Vn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function qu(t,n,a){return Br(n,t.child,null,a),t=Wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Um(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),uu(t.return,n,a)}function Yu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Lm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(xn(t,n,s.children,a),s=on.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,a,n);else if(t.tag===19)Um(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(vt(on,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ml(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ml(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Yu(n,!0,a,null,f);break;case"together":Yu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ps(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$o(t)))}function Zv(t,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),ua(n,sn,t.memoizedState.cache),Ns();break;case 27:case 5:Vt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dm(t,n,a):(ma(n),t=Vi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ps(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Lm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(on,on.current),s)break;return null;case 22:case 23:return n.lanes=0,bm(t,n,a);case 24:ua(n,sn,t.memoizedState.cache)}return Vi(t,n,a)}function Nm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Zu(t,a)&&(n.flags&128)===0)return hn=!1,Zv(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,Re&&(n.flags&1048576)!==0&&cp(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")iu(s)?(t=nr(s,t),n.tag=1,n=Cm(null,n,s,t,a)):(n.tag=0,n=Gu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=Mm(null,n,s,t,a);break t}else if(c===H){n.tag=14,n=Em(null,n,s,t,a);break t}}throw n=at(s)||s,Error(r(306,n,""))}}return n;case 0:return Gu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=nr(s,n.pendingProps),Cm(t,n,s,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,_u(t,n),Vs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ua(n,sn,s),s!==f.cache&&fu(n,[sn],a,!0),Gs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wm(t,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),Os(c),n=wm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=ui(t.firstChild),wn=n,Re=!0,Ka=null,xi=!0,a=fm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ns(),s===c){n=Vi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return vl(t,n),t===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,t=n.pendingProps,s=Nl(ft.current).createElement(a),s[an]=n,s[_n]=t,yn(s,a,t),$e(s),n.stateNode=s):n.memoizedState=Bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Vt(n),t===null&&Re&&(s=n.stateNode=Og(n.type,n.pendingProps,ft.current),wn=n,xi=!0,c=Ze,ba(n.type)?(wf=c,Ze=ui(s.firstChild)):Ze=c),xn(t,n,n.pendingProps.children,a),vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((c=s=Ze)&&(s=Mx(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,wn=n,Ze=ui(s.firstChild),xi=!1,c=!0):c=!1),c||Qa(n)),Vt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,bf(c,f)?s=null:S!==null&&bf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(t,n,Hv,null,null,a),uo._currentValue=c),vl(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Re&&((t=a=Ze)&&(a=Ex(a,n.pendingProps,xi),a!==null?(n.stateNode=a,wn=n,Ze=null,t=!0):t=!1),t||Qa(n)),null;case 13:return Dm(t,n,a);case 4:return At(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Br(n,null,s,a):xn(t,n,s,a),n.child;case 11:return Mm(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=Tn(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return Em(t,n,n.type,n.pendingProps,a);case 15:return Tm(t,n,n.type,n.pendingProps,a);case 19:return Lm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=xl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return bm(t,n,a);case 24:return $a(n),s=Tn(sn),t===null?(c=pu(),c===null&&(c=Ve,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},gu(n),ua(n,sn,c)):((t.lanes&a)!==0&&(_u(t,n),Vs(n,null,null,a),Gs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,sn,s)):(s=f.cache,ua(n,sn,s),s!==c.cache&&fu(n,[sn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(t){t.flags|=4}function Om(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vg(n)){if(n=ei.current,n!==null&&((xe&4194048)===xe?Si!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==Si))throw Fs=mu,_p;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ut():536870912,t.lanes|=n,Gr|=n)}function js(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function jv(t,n,a){var s=n.pendingProps;switch(ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(sn),Jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hp())),qe(n),null;case 26:return a=n.memoizedState,t===null?(ki(n),a!==null?(qe(n),Om(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ki(n),qe(n),Om(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&ki(n),qe(n),n.flags&=-16777217),null;case 27:ye(n),a=ft.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=W.current,Ls(n)?up(n):(t=Og(c,s,a),n.stateNode=t,ki(n))}return qe(n),null;case 5:if(ye(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=W.current,Ls(n))up(n);else{switch(c=Nl(ft.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[an]=n,t[_n]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(yn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ki(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ft.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rg(t.nodeValue,a)),t||Qa(n)}else t=Nl(t).createTextNode(s),t[an]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[an]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=hp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),qe(n),null;case 4:return Jt(),t===null&&Sf(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(nt(on),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)js(c,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ml(t),f!==null){for(n.flags|=128,js(c,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lp(a,t),a=a.sibling;return vt(on,on.current&1|2),n.child}t=t.sibling}c.tail!==null&&ne()>El&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304)}else{if(!s)if(t=ml(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return qe(n),null}else 2*ne()-c.renderingStartTime>El&&a!==536870912&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ne(),n.sibling=null,t=on.current,vt(on,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Gi(n),yu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(tr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Kv(t,n){switch(ou(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(sn),Jt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ye(n),null;case 13:if(Gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(on),null;case 4:return Jt(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),yu(),t!==null&&nt(tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(sn),null;case 25:return null;default:return null}}function Pm(t,n){switch(ou(n),n.tag){case 3:Fi(sn),Jt();break;case 26:case 27:case 5:ye(n);break;case 4:Jt();break;case 13:Gi(n);break;case 19:nt(on);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),yu(),t!==null&&nt(tr);break;case 24:Fi(sn)}}function Ks(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(E){Fe(n,n.return,E)}}function _a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,c=n;var z=a,st=E;try{st()}catch(mt){Fe(c,z,mt)}}}s=s.next}while(s!==f)}}catch(mt){Fe(n,n.return,mt)}}function zm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ep(n,a)}catch(s){Fe(t,t.return,s)}}}function Bm(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function Qs(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Fe(t,n,c)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function Im(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function ju(t,n,a){try{var s=t.stateNode;_x(s,t.type,a,n),s[_n]=n}catch(c){Fe(t,t.return,c)}}function Fm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function Ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Qu(t,n,a),t=t.sibling;t!==null;)Qu(t,n,a),t=t.sibling}function yl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yl(t,n,a),t=t.sibling;t!==null;)yl(t,n,a),t=t.sibling}function Hm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[an]=t,n[_n]=a}catch(f){Fe(t,t.return,f)}}var Xi=!1,Qe=!1,Ju=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,dn=null;function Qv(t,n){if(t=t.containerInfo,Ef=Fl,t=Jd(t),Kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,E=-1,z=-1,st=0,mt=0,yt=t,lt=null;e:for(;;){for(var ct;yt!==a||c!==0&&yt.nodeType!==3||(E=S+c),yt!==f||s!==0&&yt.nodeType!==3||(z=S+s),yt.nodeType===3&&(S+=yt.nodeValue.length),(ct=yt.firstChild)!==null;)lt=yt,yt=ct;for(;;){if(yt===t)break e;if(lt===a&&++st===c&&(E=S),lt===f&&++mt===s&&(z=S),(ct=yt.nextSibling)!==null)break;yt=lt,lt=yt.parentNode}yt=ct}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:t,selectionRange:a},Fl=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var te=nr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(te,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Zt){Fe(a,a.return,Zt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Rf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function Vm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),s&4&&Ks(5,a);break;case 1:if(va(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}s&64&&zm(a),s&512&&Qs(a,a.return);break;case 3:if(va(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(t,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&s&4&&Hm(a);case 26:case 5:va(t,a),n===null&&s&4&&Im(a),s&512&&Qs(a,a.return);break;case 12:va(t,a);break;case 13:va(t,a),s&4&&Wm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sx.bind(null,a),Tx(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||Qe,c=Xi;var f=Qe;Xi=s,(Qe=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):va(t,a),Xi=c,Qe=f}break;case 30:break;default:va(t,a)}}function km(t){var n=t.alternate;n!==null&&(t.alternate=null,km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&sa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xe=null,zn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Xm(t,n,a),a=a.sibling}function Xm(t,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:Qe||yi(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||yi(a,n);var s=Xe,c=zn;ba(a.type)&&(Xe=a.stateNode,zn=!1),Wi(t,n,a),so(a.stateNode),Xe=s,zn=c;break;case 5:Qe||yi(a,n);case 6:if(s=Xe,c=zn,Xe=null,Wi(t,n,a),Xe=s,zn=c,Xe!==null)if(zn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Xe!==null&&(zn?(t=Xe,Lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),mo(t)):Lg(Xe,a.stateNode));break;case 4:s=Xe,c=zn,Xe=a.stateNode.containerInfo,zn=!0,Wi(t,n,a),Xe=s,zn=c;break;case 0:case 11:case 14:case 15:Qe||_a(2,a,n),Qe||_a(4,a,n),Wi(t,n,a);break;case 1:Qe||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bm(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Wi(t,n,a),Qe=s;break;default:Wi(t,n,a)}}function Wm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{mo(t)}catch(a){Fe(n,n.return,a)}}function Jv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Gm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Gm),n;default:throw Error(r(435,t.tag))}}function $u(t,n){var a=Jv(t);n.forEach(function(s){var c=ox.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function kn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,E=S;t:for(;E!==null;){switch(E.tag){case 27:if(ba(E.type)){Xe=E.stateNode,zn=!1;break t}break;case 5:Xe=E.stateNode,zn=!1;break t;case 3:case 4:Xe=E.stateNode.containerInfo,zn=!0;break t}E=E.return}if(Xe===null)throw Error(r(160));Xm(f,S,c),Xe=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)qm(n,t),n=n.sibling}var ci=null;function qm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),s&4&&(_a(3,t,t.return),Ks(3,t),_a(5,t,t.return));break;case 1:kn(n,t),Xn(t),s&512&&(Qe||a===null||yi(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ci;if(kn(n,t),Xn(t),s&512&&(Qe||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ra]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[an]=t,$e(f),s=f;break t;case"link":var S=Hg("link","href",c).get(s+(a.href||""));if(S){for(var E=0;E<S.length;E++)if(f=S[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(E,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Hg("meta","content",c).get(s+(a.content||""))){for(E=0;E<S.length;E++)if(f=S[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(E,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,$e(f),s=f}t.stateNode=s}else Gg(c,t.type,t.stateNode);else t.stateNode=Fg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gg(c,t.type,t.stateNode):Fg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ju(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),s&512&&(Qe||a===null||yi(a,a.return)),a!==null&&s&4&&ju(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),s&512&&(Qe||a===null||yi(a,a.return)),t.flags&32){c=t.stateNode;try{vi(c,"")}catch(ct){Fe(t,t.return,ct)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,ju(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Ju=!0);break;case 6:if(kn(n,t),Xn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ct){Fe(t,t.return,ct)}}break;case 3:if(zl=null,c=ci,ci=Ol(n.containerInfo),kn(n,t),ci=c,Xn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{mo(n.containerInfo)}catch(ct){Fe(t,t.return,ct)}Ju&&(Ju=!1,Ym(t));break;case 4:s=ci,ci=Ol(t.stateNode.containerInfo),kn(n,t),Xn(t),ci=s;break;case 12:kn(n,t),Xn(t);break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sf=ne()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,$u(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,st=Xi,mt=Qe;if(Xi=st||c,Qe=mt||z,kn(n,t),Qe=mt,Xi=st,Xn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Xi||Qe||ir(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=z.stateNode;var yt=z.memoizedProps.style,lt=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;E.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ct){Fe(z,z.return,ct)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(ct){Fe(z,z.return,ct)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,$u(t,a))));break;case 19:kn(n,t),Xn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,$u(t,s)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Fm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ku(t);yl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(vi(S,""),a.flags&=-33);var E=Ku(t);yl(t,E,S);break;case 3:case 4:var z=a.stateNode.containerInfo,st=Ku(t);Qu(t,st,z);break;default:throw Error(r(161))}}catch(mt){Fe(t,t.return,mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ym(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vm(t,n.alternate,n),n=n.sibling}function ir(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),ir(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),ir(n);break;case 27:so(n.stateNode);case 26:case 5:yi(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),Ks(4,f);break;case 1:if(xa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(st){Fe(s,s.return,st)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Mp(z[c],E)}catch(st){Fe(s,s.return,st)}}a&&S&64&&zm(f),Qs(f,f.return);break;case 27:Hm(f);case 26:case 5:xa(c,f,a),a&&s===null&&S&4&&Im(f),Qs(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Wm(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),Qs(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zs(a))}function ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zs(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(t,n,a,s),n=n.sibling}function Zm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&Ks(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zs(t)));break;case 12:if(c&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,E=f.onPostCommit;typeof E=="function"&&E(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):Js(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,Ir(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&tf(S,n);break;case 24:Mi(t,n,a,s),c&2048&&ef(n.alternate,n);break;default:Mi(t,n,a,s)}}function Ir(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,E=a,z=s,st=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(f,S,E,z,c),Ks(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?Ir(f,S,E,z,c):Js(f,S):(mt._visibility|=2,Ir(f,S,E,z,c)),c&&st&2048&&tf(S.alternate,S);break;case 24:Ir(f,S,E,z,c),c&&st&2048&&ef(S.alternate,S);break;default:Ir(f,S,E,z,c)}n=n.sibling}}function Js(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Js(a,s),c&2048&&tf(s.alternate,s);break;case 24:Js(a,s),c&2048&&ef(s.alternate,s);break;default:Js(a,s)}n=n.sibling}}var $s=8192;function Fr(t){if(t.subtreeFlags&$s)for(t=t.child;t!==null;)jm(t),t=t.sibling}function jm(t){switch(t.tag){case 26:Fr(t),t.flags&$s&&t.memoizedState!==null&&Bx(ci,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=ci;ci=Ol(t.stateNode.containerInfo),Fr(t),ci=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=$s,$s=16777216,Fr(t),$s=n):Fr(t));break;default:Fr(t)}}function Km(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function to(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Jm(s,t)}Km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qm(t),t=t.sibling}function Qm(t){switch(t.tag){case 0:case 11:case 15:to(t),t.flags&2048&&_a(9,t,t.return);break;case 3:to(t);break;case 12:to(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ml(t)):to(t);break;default:to(t)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Jm(s,t)}Km(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ml(n));break;default:Ml(n)}t=t.sibling}}function Jm(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else t:for(a=t;dn!==null;){s=dn;var c=s.sibling,f=s.return;if(km(s),s===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}var $v={getCacheForType:function(t){var n=Tn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},tx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,he=null,xe=0,De=0,Wn=null,Sa=!1,Hr=!1,nf=!1,qi=0,je=0,ya=0,ar=0,af=0,ni=0,Gr=0,eo=null,Bn=null,rf=!1,sf=0,El=1/0,Tl=null,Ma=null,Sn=0,Ea=null,Vr=null,kr=0,of=0,lf=null,$m=null,no=0,cf=null;function qn(){if((we&2)!==0&&xe!==0)return xe&-xe;if(N.T!==null){var t=Dr;return t!==0?t:gf()}return Me()}function tg(){ni===0&&(ni=(xe&536870912)===0||Re?Y():536870912);var t=ei.current;return t!==null&&(t.flags|=32),ni}function Yn(t,n,a){(t===Ve&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Xr(t,0),Ta(t,xe,ni,!1)),St(t,a),((we&2)===0||t!==Ve)&&(t===Ve&&((we&2)===0&&(ar|=a),je===4&&Ta(t,xe,ni,!1)),Ei(t))}function eg(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||ee(t,n),c=s?ix(t,n):hf(t,n,!0),f=s;do{if(c===0){Hr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ex(a)){c=hf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var E=t;c=eo;var z=E.current.memoizedState.isDehydrated;if(z&&(Xr(E,S).flags|=256),S=hf(E,S,!1),S!==2){if(nf&&!z){E.errorRecoveryDisabledLanes|=f,ar|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Xr(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ni,!Sa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=sf+300-ne(),10<c)){if(Ta(s,n,ni,!Sa),oe(s,0,!0)!==0)break t;s.timeoutHandle=Dg(ng.bind(null,s,a,Bn,Tl,rf,n,ni,ar,Gr,Sa,f,2,-0,0),c);break t}ng(s,a,Bn,Tl,rf,n,ni,ar,Gr,Sa,f,0,-0,0)}}break}while(!0);Ei(t)}function ng(t,n,a,s,c,f,S,E,z,st,mt,yt,lt,ct){if(t.timeoutHandle=-1,yt=n.subtreeFlags,(yt&8192||(yt&16785408)===16785408)&&(co={stylesheets:null,count:0,unsuspend:zx},jm(n),yt=Ix(),yt!==null)){t.cancelPendingCommit=yt(cg.bind(null,t,n,f,a,s,c,S,E,z,mt,1,lt,ct)),Ta(t,f,S,!st);return}cg(t,n,f,a,s,c,S,E,z)}function ex(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Gn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~af,n&=~ar,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ft(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Lt(t,a,n)}function bl(){return(we&6)===0?(io(0),!1):!0}function uf(){if(he!==null){if(De===0)var t=he.return;else t=he,Ii=Ja=null,Au(t),zr=null,Ys=0,t=he;for(;t!==null;)Pm(t.alternate,t),t=t.return;he=null}}function Xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,xx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),uf(),Ve=t,he=a=Pi(t.current,null),xe=n,De=0,Wn=null,Sa=!1,Hr=ee(t,n),nf=!1,Gr=ni=af=ar=ya=je=0,Bn=eo=null,rf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ft(s),f=1<<c;n|=t[c],s&=~f}return qi=n,Yo(),a}function ig(t,n){le=null,N.H=hl,n===Is||n===nl?(n=Sp(),De=3):n===_p?(n=Sp(),De=4):De=n===ym?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,he===null&&(je=1,_l(t,Qn(n,t.current)))}function ag(){var t=N.H;return N.H=hl,t===null?hl:t}function rg(){var t=N.A;return N.A=$v,t}function ff(){je=4,Sa||(xe&4194048)!==xe&&ei.current!==null||(Hr=!0),(ya&134217727)===0&&(ar&134217727)===0||Ve===null||Ta(Ve,xe,ni,!1)}function hf(t,n,a){var s=we;we|=2;var c=ag(),f=rg();(Ve!==t||xe!==n)&&(Tl=null,Xr(t,n)),n=!1;var S=je;t:do try{if(De!==0&&he!==null){var E=he,z=Wn;switch(De){case 8:uf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var st=De;if(De=0,Wn=null,Wr(t,E,z,st),a&&Hr){S=0;break t}break;default:st=De,De=0,Wn=null,Wr(t,E,z,st)}}nx(),S=je;break}catch(mt){ig(t,mt)}while(!0);return n&&t.shellSuspendCounter++,Ii=Ja=null,we=s,N.H=c,N.A=f,he===null&&(Ve=null,xe=0,Yo()),S}function nx(){for(;he!==null;)sg(he)}function ix(t,n){var a=we;we|=2;var s=ag(),c=rg();Ve!==t||xe!==n?(Tl=null,El=ne()+500,Xr(t,n)):Hr=ee(t,n);t:do try{if(De!==0&&he!==null){n=he;var f=Wn;e:switch(De){case 1:De=0,Wn=null,Wr(t,n,f,1);break;case 2:case 9:if(vp(f)){De=0,Wn=null,og(n);break}n=function(){De!==2&&De!==9||Ve!==t||(De=7),Ei(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:vp(f)?(De=0,Wn=null,og(n)):(De=0,Wn=null,Wr(t,n,f,7));break;case 5:var S=null;switch(he.tag){case 26:S=he.memoizedState;case 5:case 27:var E=he;if(!S||Vg(S)){De=0,Wn=null;var z=E.sibling;if(z!==null)he=z;else{var st=E.return;st!==null?(he=st,Al(st)):he=null}break e}}De=0,Wn=null,Wr(t,n,f,5);break;case 6:De=0,Wn=null,Wr(t,n,f,6);break;case 8:uf(),je=6;break t;default:throw Error(r(462))}}ax();break}catch(mt){ig(t,mt)}while(!0);return Ii=Ja=null,N.H=s,N.A=c,we=a,he!==null?0:(Ve=null,xe=0,Yo(),je)}function ax(){for(;he!==null&&!Ln();)sg(he)}function sg(t){var n=Nm(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Al(t):he=n}function og(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Rm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Au(n);default:Pm(a,n),n=he=lp(n,qi),n=Nm(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Al(t):he=n}function Wr(t,n,a,s){Ii=Ja=null,Au(n),zr=null,Ys=0;var c=n.return;try{if(Yv(t,c,n,a,xe)){je=1,_l(t,Qn(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;je=1,_l(t,Qn(a,t.current)),he=null;return}n.flags&32768?(Re||s===1?t=!0:Hr||(xe&536870912)!==0?t=!1:(Sa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),lg(n,t)):Al(n)}function Al(t){var n=t;do{if((n.flags&32768)!==0){lg(n,Sa);return}t=n.return;var a=jv(n.alternate,n,qi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);je===0&&(je=5)}function lg(t,n){do{var a=Kv(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);je=6,he=null}function cg(t,n,a,s,c,f,S,E,z){t.cancelPendingCommit=null;do Rl();while(Sn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=eu,Pt(t,a,f,S,E,z),t===Ve&&(he=Ve=null,xe=0),Vr=n,Ea=t,kr=a,of=f,lf=c,$m=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lx(L,function(){return pg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,c=X.p,X.p=2,S=we,we|=4;try{Qv(t,n,a)}finally{we=S,X.p=c,N.T=s}}Sn=1,ug(),fg(),hg()}}function ug(){if(Sn===1){Sn=0;var t=Ea,n=Vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=X.p;X.p=2;var c=we;we|=4;try{qm(n,t);var f=Tf,S=Jd(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(S!==E&&E&&E.ownerDocument&&Qd(E.ownerDocument.documentElement,E)){if(z!==null&&Kc(E)){var st=z.start,mt=z.end;if(mt===void 0&&(mt=st),"selectionStart"in E)E.selectionStart=st,E.selectionEnd=Math.min(mt,E.value.length);else{var yt=E.ownerDocument||document,lt=yt&&yt.defaultView||window;if(lt.getSelection){var ct=lt.getSelection(),te=E.textContent.length,Zt=Math.min(z.start,te),Pe=z.end===void 0?Zt:Math.min(z.end,te);!ct.extend&&Zt>Pe&&(S=Pe,Pe=Zt,Zt=S);var K=Kd(E,Zt),G=Kd(E,Pe);if(K&&G&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==G.node||ct.focusOffset!==G.offset)){var it=yt.createRange();it.setStart(K.node,K.offset),ct.removeAllRanges(),Zt>Pe?(ct.addRange(it),ct.extend(G.node,G.offset)):(it.setEnd(G.node,G.offset),ct.addRange(it))}}}}for(yt=[],ct=E;ct=ct.parentNode;)ct.nodeType===1&&yt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<yt.length;E++){var _t=yt[E];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Fl=!!Ef,Tf=Ef=null}finally{we=c,X.p=s,N.T=a}}t.current=n,Sn=2}}function fg(){if(Sn===2){Sn=0;var t=Ea,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=X.p;X.p=2;var c=we;we|=4;try{Vm(t,n.alternate,n)}finally{we=c,X.p=s,N.T=a}}Sn=3}}function hg(){if(Sn===4||Sn===3){Sn=0,me();var t=Ea,n=Vr,a=kr,s=$m;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Vr=Ea=null,dg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ma=null),Je(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(gt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,c=X.p,X.p=2,N.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var E=s[S];f(E.value,{componentStack:E.stack})}}finally{N.T=n,X.p=c}}(kr&3)!==0&&Rl(),Ei(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===cf?no++:(no=0,cf=t):no=0,io(0)}}function dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zs(n)))}function Rl(t){return ug(),fg(),hg(),pg()}function pg(){if(Sn!==5)return!1;var t=Ea,n=of;of=0;var a=Je(kr),s=N.T,c=X.p;try{X.p=32>a?32:a,N.T=null,a=lf,lf=null;var f=Ea,S=kr;if(Sn=0,Vr=Ea=null,kr=0,(we&6)!==0)throw Error(r(331));var E=we;if(we|=4,Qm(f.current),Zm(f,f.current,S,a),we=E,io(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(gt,f)}catch{}return!0}finally{X.p=c,N.T=s,dg(t,n)}}function mg(t,n,a){n=Qn(a,n),n=Hu(t.stateNode,n,2),t=da(t,n,2),t!==null&&(St(t,2),Ei(t))}function Fe(t,n,a){if(t.tag===3)mg(t,t,a);else for(;n!==null;){if(n.tag===3){mg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){t=Qn(a,t),a=xm(2),s=da(n,a,2),s!==null&&(Sm(a,s,n,t),St(s,2),Ei(s));break}}n=n.return}}function df(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new tx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(nf=!0,c.add(a),t=rx.bind(null,t,n,a),n.then(t,t))}function rx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(xe&a)===a&&(je===4||je===3&&(xe&62914560)===xe&&300>ne()-sf?(we&2)===0&&Xr(t,0):af|=a,Gr===xe&&(Gr=0)),Ei(t)}function gg(t,n){n===0&&(n=Ut()),t=Ar(t,n),t!==null&&(St(t,n),Ei(t))}function sx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),gg(t,a)}function ox(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),gg(t,a)}function lx(t,n){return ce(t,n)}var Cl=null,qr=null,pf=!1,wl=!1,mf=!1,rr=0;function Ei(t){t!==qr&&t.next===null&&(qr===null?Cl=qr=t:qr=qr.next=t),wl=!0,pf||(pf=!0,ux())}function io(t,n){if(!mf&&wl){mf=!0;do for(var a=!1,s=Cl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ft(42|t)+1)-1,f&=c&~(S&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sg(s,f))}else f=xe,f=oe(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ee(s,f)||(a=!0,Sg(s,f));s=s.next}while(a);mf=!1}}function cx(){_g()}function _g(){wl=pf=!1;var t=0;rr!==0&&(vx()&&(t=rr),rr=0);for(var n=ne(),a=null,s=Cl;s!==null;){var c=s.next,f=vg(s,n);f===0?(s.next=null,a===null?Cl=c:a.next=c,c===null&&(qr=a)):(a=s,(t!==0||(f&3)!==0)&&(wl=!0)),s=c}io(t)}function vg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Ft(f),E=1<<S,z=c[S];z===-1?((E&a)===0||(E&s)!==0)&&(c[S]=Le(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ve,a=xe,a=oe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&F(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&F(s),Je(a)){case 2:case 8:a=Ht;break;case 32:a=L;break;case 268435456:a=ot;break;default:a=L}return s=xg.bind(null,t),a=ce(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&F(s),t.callbackPriority=2,t.callbackNode=null,2}function xg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Rl()&&t.callbackNode!==a)return null;var s=xe;return s=oe(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(eg(t,s,n),vg(t,ne()),t.callbackNode!=null&&t.callbackNode===a?xg.bind(null,t):null)}function Sg(t,n){if(Rl())return null;eg(t,n,!0)}function ux(){Sx(function(){(we&6)!==0?ce(Ue,cx):_g()})}function gf(){return rr===0&&(rr=Y()),rr}function yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function Mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function fx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=yg((c[_n]||null).action),S=s.submitter;S&&(n=(n=S[_n]||null)?yg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var E=new Xo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var z=S?Mg(c,S):new FormData(c);Pu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=S?Mg(c,S):new FormData(c),Pu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var _f=0;_f<tu.length;_f++){var vf=tu[_f],hx=vf.toLowerCase(),dx=vf[0].toUpperCase()+vf.slice(1);li(hx,"on"+dx)}li(ep,"onAnimationEnd"),li(np,"onAnimationIteration"),li(ip,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Dv,"onTransitionRun"),li(Uv,"onTransitionStart"),li(Lv,"onTransitionCancel"),li(ap,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function Eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var E=s[S],z=E.instance,st=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=st;try{f(c)}catch(mt){gl(mt)}c.currentTarget=null,f=z}else for(S=0;S<s.length;S++){if(E=s[S],z=E.instance,st=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=st;try{f(c)}catch(mt){gl(mt)}c.currentTarget=null,f=z}}}}function de(t,n){var a=n[Ga];a===void 0&&(a=n[Ga]=new Set);var s=t+"__bubble";a.has(s)||(Tg(n,t,2,!1),a.add(s))}function xf(t,n,a){var s=0;n&&(s|=4),Tg(a,t,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Sf(t){if(!t[Dl]){t[Dl]=!0,Io.forEach(function(a){a!=="selectionchange"&&(px.has(a)||xf(a,!1,t),xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,xf("selectionchange",!1,n))}}function Tg(t,n,a,s){switch(Zg(n)){case 2:var c=Gx;break;case 8:c=Vx;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function yf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var E=s.stateNode.containerInfo;if(E===c)break;if(S===4)for(S=s.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;E!==null;){if(S=wi(E),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){s=f=S;continue t}E=E.parentNode}}s=s.return}Ud(function(){var st=f,mt=Fc(a),yt=[];t:{var lt=rp.get(t);if(lt!==void 0){var ct=Xo,te=t;switch(t){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":ct=lv;break;case"focusin":te="focus",ct=Wc;break;case"focusout":te="blur",ct=Wc;break;case"beforeblur":case"afterblur":ct=Wc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=fv;break;case ep:case np:case ip:ct=$0;break;case ap:ct=dv;break;case"scroll":case"scrollend":ct=Z0;break;case"wheel":ct=mv;break;case"copy":case"cut":case"paste":ct=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=zd;break;case"toggle":case"beforetoggle":ct=_v}var Zt=(n&4)!==0,Pe=!Zt&&(t==="scroll"||t==="scrollend"),K=Zt?lt!==null?lt+"Capture":null:lt;Zt=[];for(var G=st,it;G!==null;){var _t=G;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||K===null||(_t=Es(G,K),_t!=null&&Zt.push(ro(G,_t,it))),Pe)break;G=G.return}0<Zt.length&&(lt=new ct(lt,te,null,a,mt),yt.push({event:lt,listeners:Zt}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",lt&&a!==Ic&&(te=a.relatedTarget||a.fromElement)&&(wi(te)||te[Nn]))break t;if((ct||lt)&&(lt=mt.window===mt?mt:(lt=mt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ct?(te=a.relatedTarget||a.toElement,ct=st,te=te?wi(te):null,te!==null&&(Pe=u(te),Zt=te.tag,te!==Pe||Zt!==5&&Zt!==27&&Zt!==6)&&(te=null)):(ct=null,te=st),ct!==te)){if(Zt=Od,_t="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=zd,_t="onPointerLeave",K="onPointerEnter",G="pointer"),Pe=ct==null?lt:ka(ct),it=te==null?lt:ka(te),lt=new Zt(_t,G+"leave",ct,a,mt),lt.target=Pe,lt.relatedTarget=it,_t=null,wi(mt)===st&&(Zt=new Zt(K,G+"enter",te,a,mt),Zt.target=it,Zt.relatedTarget=Pe,_t=Zt),Pe=_t,ct&&te)e:{for(Zt=ct,K=te,G=0,it=Zt;it;it=Yr(it))G++;for(it=0,_t=K;_t;_t=Yr(_t))it++;for(;0<G-it;)Zt=Yr(Zt),G--;for(;0<it-G;)K=Yr(K),it--;for(;G--;){if(Zt===K||K!==null&&Zt===K.alternate)break e;Zt=Yr(Zt),K=Yr(K)}Zt=null}else Zt=null;ct!==null&&bg(yt,lt,ct,Zt,!1),te!==null&&Pe!==null&&bg(yt,Pe,te,Zt,!0)}}t:{if(lt=st?ka(st):window,ct=lt.nodeName&&lt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&lt.type==="file")var It=Xd;else if(Vd(lt))if(Wd)It=Rv;else{It=bv;var ue=Tv}else ct=lt.nodeName,!ct||ct.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&Bc(st.elementType)&&(It=Xd):It=Av;if(It&&(It=It(t,st))){kd(yt,It,a,mt);break t}ue&&ue(t,lt,st),t==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&En(lt,"number",lt.value)}switch(ue=st?ka(st):window,t){case"focusin":(Vd(ue)||ue.contentEditable==="true")&&(Er=ue,Qc=st,Us=null);break;case"focusout":Us=Qc=Er=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,$d(yt,a,mt);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":$d(yt,a,mt)}var Gt;if(Yc)t:{switch(t){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else Mr?Hd(t,a)&&(Kt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(Bd&&a.locale!=="ko"&&(Mr||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&Mr&&(Gt=Ld()):(ca=mt,Vc="value"in ca?ca.value:ca.textContent,Mr=!0)),ue=Ul(st,Kt),0<ue.length&&(Kt=new Pd(Kt,t,null,a,mt),yt.push({event:Kt,listeners:ue}),Gt?Kt.data=Gt:(Gt=Gd(a),Gt!==null&&(Kt.data=Gt)))),(Gt=xv?Sv(t,a):yv(t,a))&&(Kt=Ul(st,"onBeforeInput"),0<Kt.length&&(ue=new Pd("onBeforeInput","beforeinput",null,a,mt),yt.push({event:ue,listeners:Kt}),ue.data=Gt)),fx(yt,t,st,a,mt)}Eg(yt,n)})}function ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ul(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Es(t,a),c!=null&&s.unshift(ro(t,c,f)),c=Es(t,n),c!=null&&s.push(ro(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bg(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var E=a,z=E.alternate,st=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||st===null||(z=st,c?(st=Es(a,f),st!=null&&S.unshift(ro(a,st,z))):c||(st=Es(a,f),st!=null&&S.push(ro(a,st,z)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Ag(t){return(typeof t=="string"?t:""+t).replace(mx,`
`).replace(gx,"")}function Rg(t,n){return n=Ag(n),Ag(t)===n}function Ll(){}function Oe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||vi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&vi(t,""+s);break;case"className":Ct(t,"class",s);break;case"tabIndex":Ct(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(t,a,s);break;case"style":wd(t,s,f);break;case"data":if(n!=="object"){Ct(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",c.name,c,null),Oe(t,n,"formEncType",c.formEncType,c,null),Oe(t,n,"formMethod",c.formMethod,c,null),Oe(t,n,"formTarget",c.formTarget,c,null)):(Oe(t,n,"encType",c.encType,c,null),Oe(t,n,"method",c.method,c,null),Oe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ll);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":wt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":wt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":wt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":wt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=q0.get(a)||a,Tt(t,a,s))}}function Mf(t,n,a,s,c,f){switch(a){case"style":wd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?vi(t,s):(typeof s=="number"||typeof s=="bigint")&&vi(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,f,S,a,null)}}c&&Oe(t,n,"srcSet",a.srcSet,a,null),s&&Oe(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=S=c=null,z=null,st=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":S=mt;break;case"checked":z=mt;break;case"defaultChecked":st=mt;break;case"value":f=mt;break;case"defaultValue":E=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Oe(t,n,s,mt,a,null)}}Ie(t,f,E,z,st,S,c,!1),Ye(t);return;case"select":de("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":S=E;break;case"multiple":s=E;default:Oe(t,n,c,E,a,null)}n=f,a=S,t.multiple=!!s,n!=null?rn(t,!!s,n,!1):a!=null&&rn(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(E=a[S],E!=null))switch(S){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Oe(t,n,S,E,a,null)}vn(t,s,c,f),Ye(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(t,n,z,s,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<ao.length;s++)de(ao[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(s=a[st],s!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,st,s,a,null)}return;default:if(Bc(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&Mf(t,n,mt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Oe(t,n,E,s,a,null))}function _x(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,E=null,z=null,st=null,mt=null;for(ct in a){var yt=a[ct];if(a.hasOwnProperty(ct)&&yt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":z=yt;default:s.hasOwnProperty(ct)||Oe(t,n,ct,null,s,yt)}}for(var lt in s){var ct=s[lt];if(yt=a[lt],s.hasOwnProperty(lt)&&(ct!=null||yt!=null))switch(lt){case"type":f=ct;break;case"name":c=ct;break;case"checked":st=ct;break;case"defaultChecked":mt=ct;break;case"value":S=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==yt&&Oe(t,n,lt,ct,s,yt)}}Li(t,S,E,z,st,mt,f,c);return;case"select":ct=S=E=lt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ct=z;default:s.hasOwnProperty(f)||Oe(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":lt=f;break;case"defaultValue":E=f;break;case"multiple":S=f;default:f!==z&&Oe(t,n,c,f,s,z)}n=E,a=S,s=ct,lt!=null?rn(t,!!a,lt,!1):!!s!=!!a&&(n!=null?rn(t,!!a,n,!0):rn(t,!!a,a?[]:"",!1));return;case"textarea":ct=lt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Oe(t,n,E,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":lt=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(t,n,S,c,s,f)}fn(t,lt,ct);return;case"option":for(var te in a)if(lt=a[te],a.hasOwnProperty(te)&&lt!=null&&!s.hasOwnProperty(te))switch(te){case"selected":t.selected=!1;break;default:Oe(t,n,te,null,s,lt)}for(z in s)if(lt=s[z],ct=a[z],s.hasOwnProperty(z)&&lt!==ct&&(lt!=null||ct!=null))switch(z){case"selected":t.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Oe(t,n,z,lt,s,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)lt=a[Zt],a.hasOwnProperty(Zt)&&lt!=null&&!s.hasOwnProperty(Zt)&&Oe(t,n,Zt,null,s,lt);for(st in s)if(lt=s[st],ct=a[st],s.hasOwnProperty(st)&&lt!==ct&&(lt!=null||ct!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Oe(t,n,st,lt,s,ct)}return;default:if(Bc(n)){for(var Pe in a)lt=a[Pe],a.hasOwnProperty(Pe)&&lt!==void 0&&!s.hasOwnProperty(Pe)&&Mf(t,n,Pe,void 0,s,lt);for(mt in s)lt=s[mt],ct=a[mt],!s.hasOwnProperty(mt)||lt===ct||lt===void 0&&ct===void 0||Mf(t,n,mt,lt,s,ct);return}}for(var K in a)lt=a[K],a.hasOwnProperty(K)&&lt!=null&&!s.hasOwnProperty(K)&&Oe(t,n,K,null,s,lt);for(yt in s)lt=s[yt],ct=a[yt],!s.hasOwnProperty(yt)||lt===ct||lt==null&&ct==null||Oe(t,n,yt,lt,s,ct)}var Ef=null,Tf=null;function Nl(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Af=null;function vx(){var t=window.event;return t&&t.type==="popstate"?t===Af?!1:(Af=t,!0):(Af=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(yx)}:Dg;function yx(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function Lg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&so(S.documentElement),a&2&&so(S.body),a&4)for(a=S.head,so(a),S=a.firstChild;S;){var E=S.nextSibling,z=S.nodeName;S[ra]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=E}}if(c===0){t.removeChild(f),mo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);mo(n)}function Rf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Mx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Ex(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Cf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Tx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var wf=null;function Ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Og(t,n,a){switch(n=Nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function so(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);sa(t)}var ii=new Map,Pg=new Set;function Ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=X.d;X.d={f:bx,r:Ax,D:Rx,C:Cx,L:wx,m:Dx,X:Lx,S:Ux,M:Nx};function bx(){var t=Yi.f(),n=bl();return t||n}function Ax(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?em(n):Yi.r(t)}var Zr=typeof document>"u"?null:document;function zg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=Ge(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pg.has(c)||(Pg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),$e(n),s.head.appendChild(n)))}}function Rx(t){Yi.D(t),zg("dns-prefetch",t,null)}function Cx(t,n){Yi.C(t,n),zg("preconnect",t,n)}function wx(t,n,a){Yi.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ge(a.imageSizes)+'"]')):c+='[href="'+Ge(t)+'"]';var f=c;switch(n){case"style":f=jr(t);break;case"script":f=Kr(t)}ii.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(oo(f))||n==="script"&&s.querySelector(lo(f))||(n=s.createElement("link"),yn(n,"link",t),$e(n),s.head.appendChild(n)))}}function Dx(t,n){Yi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ge(s)+'"][href="'+Ge(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!ii.has(f)&&(t=g({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(lo(f)))return}s=a.createElement("link"),yn(s,"link",t),$e(s),a.head.appendChild(s)}}}function Ux(t,n,a){Yi.S(t,n,a);var s=Zr;if(s&&t){var c=oa(s).hoistableStyles,f=jr(t);n=n||"default";var S=c.get(f);if(!S){var E={loading:0,preload:null};if(S=s.querySelector(oo(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&Df(t,a);var z=S=s.createElement("link");$e(z),yn(z,"link",t),z._p=new Promise(function(st,mt){z.onload=st,z.onerror=mt}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Pl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:E},c.set(f,S)}}}function Lx(t,n){Yi.X(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=g({src:t,async:!0},n),(n=ii.get(c))&&Uf(t,n),f=a.createElement("script"),$e(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Nx(t,n){Yi.M(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&Uf(t,n),f=a.createElement("script"),$e(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bg(t,n,a,s){var c=(c=ft.current)?Ol(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=oa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var f=oa(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(oo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||Ox(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=oa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function jr(t){return'href="'+Ge(t)+'"'}function oo(t){return'link[rel="stylesheet"]['+t+"]"}function Ig(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ox(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),$e(n),t.head.appendChild(n))}function Kr(t){return'[src="'+Ge(t)+'"]'}function lo(t){return"script[async]"+t}function Fg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(s)return n.instance=s,$e(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),$e(s),yn(s,"style",c),Pl(s,a.precedence,t),n.instance=s;case"stylesheet":c=jr(a.href);var f=t.querySelector(oo(c));if(f)return n.state.loading|=4,n.instance=f,$e(f),f;s=Ig(a),(c=ii.get(c))&&Df(s,c),f=(t.ownerDocument||t).createElement("link"),$e(f);var S=f;return S._p=new Promise(function(E,z){S.onload=E,S.onerror=z}),yn(f,"link",s),n.state.loading|=4,Pl(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(c=t.querySelector(lo(f)))?(n.instance=c,$e(c),c):(s=a,(c=ii.get(f))&&(s=g({},a),Uf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),$e(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pl(s,a.precedence,t));return n.instance}function Pl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var E=s[S];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zl=null;function Hg(t,n,a){if(zl===null){var s=new Map,c=zl=new Map;c.set(a,s)}else c=zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ra]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var E=s.get(S);E?E.push(f):s.set(S,[f])}}return s}function Gg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Px(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var co=null;function zx(){}function Bx(t,n,a){if(co===null)throw Error(r(475));var s=co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=jr(a.href),f=t.querySelector(oo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Bl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,$e(f);return}f=t.ownerDocument||t,a=Ig(a),(c=ii.get(c))&&Df(a,c),f=f.createElement("link"),$e(f);var S=f;S._p=new Promise(function(E,z){S.onload=E,S.onerror=z}),yn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Bl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Ix(){if(co===null)throw Error(r(475));var t=co;return t.stylesheets&&t.count===0&&Lf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Lf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Bl(){if(this.count--,this.count===0){if(this.stylesheets)Lf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Il=null;function Lf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Il=new Map,n.forEach(Fx,t),Il=null,Bl.call(t))}function Fx(t,n){if(!(n.state.loading&4)){var a=Il.get(t);if(a)var s=a.get(null);else{a=new Map,Il.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Bl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:O,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Hx(t,n,a,s,c,f,S,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function kg(t,n,a,s,c,f,S,E,z,st,mt,yt){return t=new Hx(t,n,a,S,E,z,st,yt),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=hu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},gu(f),t}function Xg(t){return t?(t=Rr,t):Rr}function Wg(t,n,a,s,c,f){c=Xg(c),s.context===null?s.context=c:s.pendingContext=c,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(Yn(a,t,n),Hs(a,t,n))}function qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nf(t,n){qg(t,n),(t=t.alternate)&&qg(t,n)}function Yg(t){if(t.tag===13){var n=Ar(t,67108864);n!==null&&Yn(n,t,67108864),Nf(t,67108864)}}var Fl=!0;function Gx(t,n,a,s){var c=N.T;N.T=null;var f=X.p;try{X.p=2,Of(t,n,a,s)}finally{X.p=f,N.T=c}}function Vx(t,n,a,s){var c=N.T;N.T=null;var f=X.p;try{X.p=8,Of(t,n,a,s)}finally{X.p=f,N.T=c}}function Of(t,n,a,s){if(Fl){var c=Pf(s);if(c===null)yf(t,n,s,Hl,a),jg(t,s);else if(Xx(c,t,n,a,s))s.stopPropagation();else if(jg(t,s),n&4&&-1<kx.indexOf(t)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ot(f.pendingLanes);if(S!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var z=1<<31-Ft(S);E.entanglements[1]|=z,S&=~z}Ei(f),(we&6)===0&&(El=ne()+500,io(0))}}break;case 13:E=Ar(f,2),E!==null&&Yn(E,f,2),bl(),Nf(f,2)}if(f=Pf(s),f===null&&yf(t,n,s,Hl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else yf(t,n,s,null,a)}}function Pf(t){return t=Fc(t),zf(t)}var Hl=null;function zf(t){if(Hl=null,t=wi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hl=t,null}function Zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Ue:return 2;case Ht:return 8;case L:case T:return 32;case ot:return 268435456;default:return 32}default:return 32}}var Bf=!1,Aa=null,Ra=null,Ca=null,fo=new Map,ho=new Map,wa=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function po(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&Yg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Xx(t,n,a,s,c){switch(n){case"focusin":return Aa=po(Aa,t,n,a,s,c),!0;case"dragenter":return Ra=po(Ra,t,n,a,s,c),!0;case"mouseover":return Ca=po(Ca,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return fo.set(f,po(fo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,ho.set(f,po(ho.get(f)||null,t,n,a,s,c)),!0}return!1}function Kg(t){var n=wi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Hn(t.priority,function(){if(a.tag===13){var s=qn();s=He(s);var c=Ar(a,s);c!==null&&Yn(c,a,s),Nf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Pf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ic=s,a.target.dispatchEvent(s),Ic=null}else return n=Di(a),n!==null&&Yg(n),t.blockedOn=a,!1;n.shift()}return!0}function Qg(t,n,a){Gl(t)&&a.delete(n)}function Wx(){Bf=!1,Aa!==null&&Gl(Aa)&&(Aa=null),Ra!==null&&Gl(Ra)&&(Ra=null),Ca!==null&&Gl(Ca)&&(Ca=null),fo.forEach(Qg),ho.forEach(Qg)}function Vl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wx)))}var kl=null;function Jg(t){kl!==t&&(kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===t&&(kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(zf(s||a)===null)continue;break}var f=Di(a);f!==null&&(t.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function mo(t){function n(z){return Vl(z,t)}Aa!==null&&Vl(Aa,t),Ra!==null&&Vl(Ra,t),Ca!==null&&Vl(Ca,t),fo.forEach(n),ho.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Kg(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[_n]||null;if(typeof f=="function")S||Jg(a);else if(S){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[_n]||null)E=S.formAction;else if(zf(c)!==null)continue}else E=S.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Jg(a)}}}function If(t){this._internalRoot=t}Xl.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();Wg(a,s,t,n,null,null)},Xl.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Wg(t.current,2,null,t,null,null),bl(),n[Nn]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&Kg(t)}};var $g=e.version;if($g!=="19.1.0")throw Error(r(527,$g,"19.1.0"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var qx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{gt=Wl.inject(qx),Nt=Wl}catch{}}return _o.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=mm,f=gm,S=_m,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=kg(t,1,!1,null,null,a,s,c,f,S,E,null),t[Nn]=n.current,Sf(t),new If(n)},_o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=mm,S=gm,E=_m,z=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=kg(t,1,!0,n,a??null,s,c,f,S,E,z,st),n.context=Xg(null),a=n.current,s=qn(),s=He(s),c=ha(s),c.callback=null,da(a,c,s),a=s,n.current.lanes=a,St(n,a),Ei(n),t[Nn]=n.current,Sf(t),new Xl(n)},_o.version="19.1.0",_o}var c_;function iS(){if(c_)return Vf.exports;c_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vf.exports=nS(),Vf.exports}var aS=iS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="176",rS=0,u_=1,sS=2,p0=1,m0=2,$i=3,Ha=0,Fn=1,bi=2,Ia=0,hs=1,Cc=2,f_=3,h_=4,oS=5,pr=100,lS=101,cS=102,uS=103,fS=104,hS=200,dS=201,pS=202,mS=203,Ah=204,Rh=205,gS=206,_S=207,vS=208,xS=209,SS=210,yS=211,MS=212,ES=213,TS=214,Ch=0,wh=1,Dh=2,ps=3,Uh=4,Lh=5,Nh=6,Oh=7,g0=0,bS=1,AS=2,Fa=0,RS=1,CS=2,wS=3,DS=4,US=5,LS=6,NS=7,_0=300,ms=301,gs=302,Ph=303,zh=304,Oc=306,Bh=1e3,gr=1001,Ih=1002,gi=1003,OS=1004,ql=1005,Ai=1006,qf=1007,_r=1008,Ci=1009,v0=1010,x0=1011,Ro=1012,_d=1013,vr=1014,ta=1015,Uo=1016,vd=1017,xd=1018,Co=1020,S0=35902,y0=1021,M0=1022,mi=1023,wo=1026,Do=1027,E0=1028,Sd=1029,T0=1030,yd=1031,Md=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,Fh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,Xh=37492,Wh=37496,qh=37808,Yh=37809,Zh=37810,jh=37811,Kh=37812,Qh=37813,Jh=37814,$h=37815,td=37816,ed=37817,nd=37818,id=37819,ad=37820,rd=37821,Tc=36492,sd=36494,od=36495,b0=36283,ld=36284,cd=36285,ud=36286,PS=3200,zS=3201,BS=0,IS=1,Ba="",ri="srgb",_s="srgb-linear",wc="linear",ze="srgb",Qr=7680,d_=519,FS=512,HS=513,GS=514,A0=515,VS=516,kS=517,XS=518,WS=519,p_=35044,m_="300 es",ea=2e3,Dc=2001;class xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,fd=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function qS(o,e){return(o%e+e)%e}function Yf(o,e,i){return(1-i)*o+i*e}function vo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(e,i,r,l,u,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],b=r[8],R=l[0],y=l[3],_=l[6],B=l[1],O=l[4],U=l[7],k=l[2],I=l[5],H=l[8];return u[0]=h*R+d*B+m*k,u[3]=h*y+d*O+m*I,u[6]=h*_+d*U+m*H,u[1]=p*R+g*B+v*k,u[4]=p*y+g*O+v*I,u[7]=p*_+g*U+v*H,u[2]=x*R+M*B+b*k,u[5]=x*y+M*O+b*I,u[8]=x*_+M*U+b*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,b=i*v+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(l*p-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=x*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Zf.makeScale(e,i)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new re;function R0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function YS(){const o=Uc("canvas");return o.style.display="block",o}const g_={};function Ac(o){o in g_||(g_[o]=!0,console.warn(o))}function ZS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function jS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const __=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){const o={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=ds(l.r),l.g=ds(l.g),l.b=ds(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?wc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[_s]:{primaries:e,whitePoint:r,transfer:wc,toXYZ:__,fromXYZ:v_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:__,fromXYZ:v_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const be=QS();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class JS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Jr===void 0&&(Jr=Uc("canvas")),Jr.width=e.width,Jr.height=e.height;const l=Jr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Jr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=na(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class Ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(jf(l[h].image)):u.push(jf(l[h]))}else u=jf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ty=0;class Un extends xs{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=gr,l=gr,u=Ai,h=_r,d=mi,m=Ci,p=Un.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Lo(),this.name="",this.source=new Ed(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=_0;Un.DEFAULT_ANISOTROPY=1;class Be{constructor(e=0,i=0,r=0,l=1){Be.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(M+1)/2,k=(_+1)/2,I=(g+x)/4,H=(v+R)/4,$=(b+y)/4;return O>U&&O>k?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=I/r,u=H/r):U>k?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=I/l,u=$/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=H/u,l=$/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(v-R)/B,this.z=(x-g)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ey extends xs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Be(0,0,e,i),this.scissorTest=!1,this.viewport=new Be(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Un(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ed(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends ey{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class C0 extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(v!==R||m!==x||p!==M||g!==b){let y=1-d;const _=m*x+p*M+g*b+v*R,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const k=Math.sqrt(O),I=Math.atan2(k,_*B);y=Math.sin(y*I)/k,d=Math.sin(d*I)/k}const U=d*B;if(m=m*y+x*U,p=p*y+M*U,g=g*y+b*U,v=v*y+R*U,y===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=k,p*=k,g*=k,v*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+g*v+m*M-p*x,e[i+1]=m*b+g*x+p*v-d*M,e[i+2]=p*b+g*M+d*x-m*v,e[i+3]=g*b-d*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"YXZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"ZXY":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"ZYX":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"YZX":this._x=x*g*v+p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v-x*M*b;break;case"XZY":this._x=x*g*v-p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,r=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(x_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(x_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new et,x_=new No;class Oo{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(u,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Zl.subVectors(this.max,xo),$r.subVectors(e.a,xo),ts.subVectors(e.b,xo),es.subVectors(e.c,xo),Ua.subVectors(ts,$r),La.subVectors(es,ts),sr.subVectors($r,es);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-sr.z,sr.y,Ua.z,0,-Ua.x,La.z,0,-La.x,sr.z,0,-sr.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-sr.y,sr.x,0];return!Qf(i,$r,ts,es,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Qf(i,$r,ts,es,Zl))?!1:(jl.crossVectors(Ua,La),i=[jl.x,jl.y,jl.z],Qf(i,$r,ts,es,Zl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new et,new et,new et,new et,new et,new et,new et,new et],hi=new et,Yl=new Oo,$r=new et,ts=new et,es=new et,Ua=new et,La=new et,sr=new et,xo=new et,Zl=new et,jl=new et,or=new et;function Qf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){or.fromArray(o,u);const d=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=e.dot(or),p=i.dot(or),g=r.dot(or);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const iy=new Oo,So=new et,Jf=new et;class Po{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):iy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const i=So.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(So,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Jf)),this.expandByPoint(So.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new et,$f=new et,Kl=new et,Na=new et,th=new et,Ql=new et,eh=new et;class Td{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){$f.copy(e).add(i).multiplyScalar(.5),Kl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub($f);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Na.dot(this.direction),m=-Na.dot(Kl),p=Na.lengthSq(),g=Math.abs(1-h*h);let v,x,M,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const R=1/g;v*=R,x*=R,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy($f).addScaledVector(Kl,x),M}intersectSphere(e,i){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,i,r,l,u){th.subVectors(i,e),Ql.subVectors(r,e),eh.crossVectors(th,Ql);let h=this.direction.dot(eh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const m=d*this.direction.dot(Ql.crossVectors(Na,Ql));if(m<0)return null;const p=d*this.direction.dot(th.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(eh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,i,r,l,u,h,d,m,p,g,v,x,M,b,R,y){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,x,M,b,R,y)}set(e,i,r,l,u,h,d,m,p,g,v,x,M,b,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ns.setFromMatrixColumn(e,0).length(),u=1/ns.setFromMatrixColumn(e,1).length(),h=1/ns.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,M=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=R+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,M=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=b*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+b,i[10]=x-R*v}else if(e.order==="XZY"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ry)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Oa.crossVectors(r,Zn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Oa.crossVectors(r,Zn)),Oa.normalize(),Jl.crossVectors(Zn,Oa),l[0]=Oa.x,l[4]=Jl.x,l[8]=Zn.x,l[1]=Oa.y,l[5]=Jl.y,l[9]=Zn.y,l[2]=Oa.z,l[6]=Jl.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],b=r[2],R=r[6],y=r[10],_=r[14],B=r[3],O=r[7],U=r[11],k=r[15],I=l[0],H=l[4],$=l[8],D=l[12],A=l[1],P=l[5],j=l[9],q=l[13],at=l[2],rt=l[6],N=l[10],X=l[14],V=l[3],pt=l[7],w=l[11],Z=l[15];return u[0]=h*I+d*A+m*at+p*V,u[4]=h*H+d*P+m*rt+p*pt,u[8]=h*$+d*j+m*N+p*w,u[12]=h*D+d*q+m*X+p*Z,u[1]=g*I+v*A+x*at+M*V,u[5]=g*H+v*P+x*rt+M*pt,u[9]=g*$+v*j+x*N+M*w,u[13]=g*D+v*q+x*X+M*Z,u[2]=b*I+R*A+y*at+_*V,u[6]=b*H+R*P+y*rt+_*pt,u[10]=b*$+R*j+y*N+_*w,u[14]=b*D+R*q+y*X+_*Z,u[3]=B*I+O*A+U*at+k*V,u[7]=B*H+O*P+U*rt+k*pt,u[11]=B*$+O*j+U*N+k*w,u[15]=B*D+O*q+U*X+k*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],b=e[3],R=e[7],y=e[11],_=e[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+R*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],b=e[12],R=e[13],y=e[14],_=e[15],B=v*y*p-R*x*p+R*m*M-d*y*M-v*m*_+d*x*_,O=b*x*p-g*y*p-b*m*M+h*y*M+g*m*_-h*x*_,U=g*R*p-b*v*p+b*d*M-h*R*M-g*d*_+h*v*_,k=b*v*m-g*R*m-b*d*x+h*R*x+g*d*y-h*v*y,I=i*B+r*O+l*U+u*k;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=B*H,e[1]=(R*x*u-v*y*u-R*l*M+r*y*M+v*l*_-r*x*_)*H,e[2]=(d*y*u-R*m*u+R*l*p-r*y*p-d*l*_+r*m*_)*H,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*H,e[4]=O*H,e[5]=(g*y*u-b*x*u+b*l*M-i*y*M-g*l*_+i*x*_)*H,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*H,e[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*H,e[8]=U*H,e[9]=(b*v*u-g*R*u-b*r*M+i*R*M+g*r*_-i*v*_)*H,e[10]=(h*R*u-b*d*u+b*r*p-i*R*p-h*r*_+i*d*_)*H,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*M-i*d*M)*H,e[12]=k*H,e[13]=(g*R*l-b*v*l+b*r*x-i*R*x-g*r*y+i*v*y)*H,e[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*y-i*d*y)*H,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*H,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,b=u*v,R=h*g,y=h*v,_=d*v,B=m*p,O=m*g,U=m*v,k=r.x,I=r.y,H=r.z;return l[0]=(1-(R+_))*k,l[1]=(M+U)*k,l[2]=(b-O)*k,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(x+_))*I,l[6]=(y+B)*I,l[7]=0,l[8]=(b+O)*H,l[9]=(y-B)*H,l[10]=(1-(x+R))*H,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ns.set(l[0],l[1],l[2]).length();const h=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,g=1/h,v=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,i.setFromRotationMatrix(di),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ea){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,b;if(d===ea)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Dc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ea){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(h-u),x=(i+e)*p,M=(r+l)*g;let b,R;if(d===ea)b=(h+u)*v,R=-2*v;else if(d===Dc)b=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ns=new et,di=new ke,ay=new et(0,0,0),ry=new et(1,1,1),Oa=new et,Jl=new et,Zn=new et,S_=new ke,y_=new No;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return S_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return y_.setFromEuler(this),this.setFromQuaternion(y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class w0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sy=0;const M_=new et,is=new No,Ki=new ke,$l=new et,yo=new et,oy=new et,ly=new No,E_=new et(1,0,0),T_=new et(0,1,0),b_=new et(0,0,1),A_={type:"added"},cy={type:"removed"},as={type:"childadded",child:null},nh={type:"childremoved",child:null};class gn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new et,i=new ia,r=new No,l=new et(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new re}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(E_,e)}rotateY(e){return this.rotateOnAxis(T_,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,i){return M_.copy(e).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(E_,e)}translateY(e){return this.translateOnAxis(T_,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?$l.copy(e):$l.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(yo,$l,this.up):Ki.lookAt($l,yo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),is.setFromRotationMatrix(Ki),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A_),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cy),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A_),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}gn.DEFAULT_UP=new et(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new et,Qi=new et,ih=new et,Ji=new et,rs=new et,ss=new et,R_=new et,ah=new et,rh=new et,sh=new et,oh=new Be,lh=new Be,ch=new Be;class si{constructor(e=new et,i=new et,r=new et){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),Qi.subVectors(r,i),ih.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(Qi),m=pi.dot(ih),p=Qi.dot(Qi),g=Qi.dot(ih),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(e,i),lh.fromBufferAttribute(e,r),ch.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(oh,u.x),h.addScaledVector(lh,u.y),h.addScaledVector(ch,u.z),h}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),Qi.subVectors(e,i),pi.cross(Qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),pi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return si.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;rs.subVectors(l,r),ss.subVectors(u,r),ah.subVectors(e,r);const m=rs.dot(ah),p=ss.dot(ah);if(m<=0&&p<=0)return i.copy(r);rh.subVectors(e,l);const g=rs.dot(rh),v=ss.dot(rh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(rs,h);sh.subVectors(e,u);const M=rs.dot(sh),b=ss.dot(sh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ss,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return R_.subVectors(u,l),d=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(R_,d);const _=1/(y+R+x);return h=R*_,d=x*_,i.copy(r).addScaledVector(rs,h).addScaledVector(ss,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},tc={h:0,s:0,l:0};function uh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=qS(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=uh(h,u,e+1/3),this.g=uh(h,u,e),this.b=uh(h,u,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=D0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return be.fromWorkingColorSpace(Rn.copy(this),e),Math.round(ve(Rn.r*255,0,255))*65536+Math.round(ve(Rn.g*255,0,255))*256+Math.round(ve(Rn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ri){be.fromWorkingColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(tc);const r=Yf(Pa.h,tc.h,i),l=Yf(Pa.s,tc.s,i),u=Yf(Pa.l,tc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ce;Ce.NAMES=D0;let uy=0;class Ss extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=hs,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ah&&(r.blendSrc=this.blendSrc),this.blendDst!==Rh&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class U0 extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new et,ec=new Ae;let fy=0;class Cn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(e),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=vo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}}class L0 extends Cn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class N0 extends Cn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _i extends Cn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let hy=0;const ai=new ke,fh=new gn,os=new et,jn=new Oo,Mo=new Oo,mn=new et;class oi extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?N0:L0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new re().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return fh.lookAt(e),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new _i(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Mo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(jn.min,Mo.min),jn.expandByPoint(mn),mn.addVectors(jn.max,Mo.max),jn.expandByPoint(mn)):(jn.expandByPoint(Mo.min),jn.expandByPoint(Mo.max))}jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)mn.fromBufferAttribute(d,p),m&&(os.fromBufferAttribute(e,p),mn.add(os)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let $=0;$<r.count;$++)d[$]=new et,m[$]=new et;const p=new et,g=new et,v=new et,x=new Ae,M=new Ae,b=new Ae,R=new et,y=new et;function _($,D,A){p.fromBufferAttribute(r,$),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,$),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,A),g.sub(p),v.sub(p),M.sub(x),b.sub(x);const P=1/(M.x*b.y-b.x*M.y);isFinite(P)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(P),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(P),d[$].add(R),d[D].add(R),d[A].add(R),m[$].add(y),m[D].add(y),m[A].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let $=0,D=B.length;$<D;++$){const A=B[$],P=A.start,j=A.count;for(let q=P,at=P+j;q<at;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const O=new et,U=new et,k=new et,I=new et;function H($){k.fromBufferAttribute(l,$),I.copy(k);const D=d[$];O.copy(D),O.sub(k.multiplyScalar(k.dot(D))).normalize(),U.crossVectors(I,D);const P=U.dot(m[$])<0?-1:1;h.setXYZW($,O.x,O.y,O.z,P)}for(let $=0,D=B.length;$<D;++$){const A=B[$],P=A.start,j=A.count;for(let q=P,at=P+j;q<at;q+=3)H(e.getX(q+0)),H(e.getX(q+1)),H(e.getX(q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Cn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new et,u=new et,h=new et,d=new et,m=new et,p=new et,g=new et,v=new et;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)x[b++]=p[M++]}return new Cn(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new ke,lr=new Td,nc=new Po,w_=new et,ic=new et,ac=new et,rc=new et,hh=new et,sc=new et,D_=new et,oc=new et;class Ri extends gn{constructor(e=new oi,i=new U0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(hh.fromBufferAttribute(v,e),h?sc.addScaledVector(hh,g):sc.addScaledVector(hh.sub(i),g))}i.add(sc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(u),lr.copy(e.ray).recast(e.near),!(nc.containsPoint(lr.origin)===!1&&(lr.intersectSphere(nc,w_)===null||lr.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(C_.copy(u).invert(),lr.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,lr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=B,k=O;U<k;U+=3){const I=d.getX(U),H=d.getX(U+1),$=d.getX(U+2);l=lc(this,_,e,r,p,g,v,I,H,$),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const B=d.getX(y),O=d.getX(y+1),U=d.getX(y+2);l=lc(this,h,e,r,p,g,v,B,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=B,k=O;U<k;U+=3){const I=U,H=U+1,$=U+2;l=lc(this,_,e,r,p,g,v,I,H,$),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const B=y,O=y+1,U=y+2;l=lc(this,h,e,r,p,g,v,B,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function dy(o,e,i,r,l,u,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ha,d),m===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(oc);return p<i.near||p>i.far?null:{distance:p,point:oc.clone(),object:o}}function lc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,ic),o.getVertexPosition(m,ac),o.getVertexPosition(p,rc);const g=dy(o,e,i,r,ic,ac,rc,D_);if(g){const v=new et;si.getBarycoord(D_,ic,ac,rc,v),l&&(g.uv=si.getInterpolatedAttribute(l,d,m,p,v,new Ae)),u&&(g.uv1=si.getInterpolatedAttribute(u,d,m,p,v,new Ae)),h&&(g.normal=si.getInterpolatedAttribute(h,d,m,p,v,new et),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new et,materialIndex:0};si.getNormal(ic,ac,rc,x.normal),g.face=x,g.barycoord=v}return g}class ys extends oi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(g,3)),this.setAttribute("uv",new _i(v,2));function b(R,y,_,B,O,U,k,I,H,$,D){const A=U/H,P=k/$,j=U/2,q=k/2,at=I/2,rt=H+1,N=$+1;let X=0,V=0;const pt=new et;for(let w=0;w<N;w++){const Z=w*P-q;for(let nt=0;nt<rt;nt++){const vt=nt*A-j;pt[R]=vt*B,pt[y]=Z*O,pt[_]=at,p.push(pt.x,pt.y,pt.z),pt[R]=0,pt[y]=0,pt[_]=I>0?1:-1,g.push(pt.x,pt.y,pt.z),v.push(nt/H),v.push(1-w/$),X+=1}}for(let w=0;w<$;w++)for(let Z=0;Z<H;Z++){const nt=x+Z+rt*w,vt=x+Z+rt*(w+1),W=x+(Z+1)+rt*(w+1),tt=x+(Z+1)+rt*w;m.push(nt,vt,tt),m.push(vt,W,tt),V+=6}d.addGroup(M,V,D),M+=V,x+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=vs(o[i]);for(const l in r)e[l]=r[l]}return e}function py(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function O0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const my={clone:vs,merge:Dn};var gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gy,this.fragmentShader=_y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class P0 extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=ea}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new et,U_=new Ae,L_=new Ae;class Kn extends P0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=fd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fd*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,U_,L_),i.subVectors(L_,U_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,cs=1;class vy extends gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Kn(ls,cs,e,i);l.layers=this.layers,this.add(l);const u=new Kn(ls,cs,e,i);u.layers=this.layers,this.add(u);const h=new Kn(ls,cs,e,i);h.layers=this.layers,this.add(h);const d=new Kn(ls,cs,e,i);d.layers=this.layers,this.add(d);const m=new Kn(ls,cs,e,i);m.layers=this.layers,this.add(m);const p=new Kn(ls,cs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class z0 extends Un{constructor(e=[],i=ms,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xy extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new z0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ys(5,5,5),u=new aa({name:"CubemapFromEquirect",uniforms:vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new Ri(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ai),new vy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class bo extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sy={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new bo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class yy extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ph=new et,My=new et,Ey=new re;class hr{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ph.subVectors(r,i).cross(My.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ph),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ey.getNormalMatrix(e),l=this.coplanarPoint(ph).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Po,cc=new et;class bd{constructor(e=new hr,i=new hr,r=new hr,l=new hr,u=new hr,h=new hr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ea){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],b=l[9],R=l[10],y=l[11],_=l[12],B=l[13],O=l[14],U=l[15];if(r[0].setComponents(m-u,x-p,y-M,U-_).normalize(),r[1].setComponents(m+u,x+p,y+M,U+_).normalize(),r[2].setComponents(m+h,x+g,y+b,U+B).normalize(),r[3].setComponents(m-h,x-g,y-b,U-B).normalize(),r[4].setComponents(m-d,x-v,y-R,U-O).normalize(),i===ea)r[5].setComponents(m+d,x+v,y+R,U+O).normalize();else if(i===Dc)r[5].setComponents(d,v,R,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hd extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new et,Nc=new et,N_=new ke,Eo=new Td,uc=new Po,mh=new et,O_=new et;class Ty extends gn{constructor(e=new oi,i=new hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Lc.fromBufferAttribute(i,l-1),Nc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Lc.distanceTo(Nc);e.setAttribute("lineDistance",new _i(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(l),uc.radius+=u,e.ray.intersectsSphere(uc)===!1)return;N_.copy(l).invert(),Eo.copy(e.ray).applyMatrix4(N_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=g.getX(R),B=g.getX(R+1),O=fc(this,e,Eo,m,_,B,R);O&&i.push(O)}if(this.isLineLoop){const R=g.getX(b-1),y=g.getX(M),_=fc(this,e,Eo,m,R,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=fc(this,e,Eo,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=fc(this,e,Eo,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function fc(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(Lc.fromBufferAttribute(d,l),Nc.fromBufferAttribute(d,u),i.distanceSqToSegment(Lc,Nc,mh,O_)>r)return;mh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(mh);if(!(p<e.near||p>e.far))return{distance:p,point:O_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const P_=new et,z_=new et;class B_ extends Ty{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)P_.fromBufferAttribute(i,l),z_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+P_.distanceTo(z_);e.setAttribute("lineDistance",new _i(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B0 extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const I_=new ke,dd=new Td,hc=new Po,dc=new et;class by extends gn{constructor(e=new oi,i=new B0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(l),hc.radius+=u,e.ray.intersectsSphere(hc)===!1)return;I_.copy(l).invert(),dd.copy(e.ray).applyMatrix4(I_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=x,R=M;b<R;b++){const y=p.getX(b);dc.fromBufferAttribute(v,y),F_(dc,y,m,l,e,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=x,R=M;b<R;b++)dc.fromBufferAttribute(v,b),F_(dc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function F_(o,e,i,r,l,u,h){const d=dd.distanceSqToPoint(o);if(d<i){const m=new et;dd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class I0 extends Un{constructor(e,i,r=vr,l,u,h,d=gi,m=gi,p,g=wo){if(g!==wo&&g!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ed(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const pc=new et,mc=new et,gh=new et,gc=new si;class Ay extends oi{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),u=Math.cos(bc*i),h=e.getIndex(),d=e.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],g=["a","b","c"],v=new Array(3),x={},M=[];for(let b=0;b<m;b+=3){h?(p[0]=h.getX(b),p[1]=h.getX(b+1),p[2]=h.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:R,b:y,c:_}=gc;if(R.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),gc.getNormal(gh),v[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,v[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,v[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let B=0;B<3;B++){const O=(B+1)%3,U=v[B],k=v[O],I=gc[g[B]],H=gc[g[O]],$=`${U}_${k}`,D=`${k}_${U}`;D in x&&x[D]?(gh.dot(x[D].normal)<=u&&(M.push(I.x,I.y,I.z),M.push(H.x,H.y,H.z)),x[D]=null):$ in x||(x[$]={index0:p[B],index1:p[O],normal:gh.clone()})}}for(const b in x)if(x[b]){const{index0:R,index1:y}=x[b];pc.fromBufferAttribute(d,R),mc.fromBufferAttribute(d,y),M.push(pc.x,pc.y,pc.z),M.push(mc.x,mc.y,mc.z)}this.setAttribute("position",new _i(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Pc extends oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<g;_++){const B=_*x-h;for(let O=0;O<p;O++){const U=O*v-u;b.push(U,-B,0),R.push(0,0,1),y.push(O/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const O=B+p*_,U=B+p*(_+1),k=B+1+p*(_+1),I=B+1+p*_;M.push(O,U,I),M.push(U,k,I)}this.setIndex(M),this.setAttribute("position",new _i(b,3)),this.setAttribute("normal",new _i(R,3)),this.setAttribute("uv",new _i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ry extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ad extends gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const _h=new ke,H_=new et,G_=new et;class F0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;H_.setFromMatrixPosition(e.matrixWorld),i.position.copy(H_),G_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(G_),i.updateMatrixWorld(),_h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const V_=new ke,To=new et,vh=new et;class wy extends F0{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new et(1,0,0),new et(-1,0,0),new et(0,0,1),new et(0,0,-1),new et(0,1,0),new et(0,-1,0)],this._cubeUps=[new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,0,1),new et(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),To.setFromMatrixPosition(e.matrixWorld),r.position.copy(To),vh.copy(r.position),vh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(vh),r.updateMatrixWorld(),l.makeTranslation(-To.x,-To.y,-To.z),V_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V_)}}class Dy extends Ad{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H0 extends P0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Uy extends F0{constructor(){super(new H0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ly extends Ad{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Uy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ny extends Ad{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Oy extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function k_(o,e,i,r){const l=Py(r);switch(i){case y0:return o*e;case E0:return o*e/l.components*l.byteLength;case Sd:return o*e/l.components*l.byteLength;case T0:return o*e*2/l.components*l.byteLength;case yd:return o*e*2/l.components*l.byteLength;case M0:return o*e*3/l.components*l.byteLength;case mi:return o*e*4/l.components*l.byteLength;case Md:return o*e*4/l.components*l.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Vh:return Math.max(o,16)*Math.max(e,8)/4;case Fh:case Gh:return Math.max(o,8)*Math.max(e,8)/2;case kh:case Xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case td:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Tc:case sd:case od:return Math.ceil(o/4)*Math.ceil(e/4)*16;case b0:case ld:return Math.ceil(o/4)*Math.ceil(e/4)*8;case cd:case ud:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Py(o){switch(o){case Ci:case v0:return{byteLength:1,components:1};case Ro:case x0:case Uo:return{byteLength:2,components:1};case vd:case xd:return{byteLength:2,components:4};case vr:case _d:case ta:return{byteLength:4,components:1};case S0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function zy(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ky=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:By,alphahash_pars_fragment:Iy,alphamap_fragment:Fy,alphamap_pars_fragment:Hy,alphatest_fragment:Gy,alphatest_pars_fragment:Vy,aomap_fragment:ky,aomap_pars_fragment:Xy,batching_pars_vertex:Wy,batching_vertex:qy,begin_vertex:Yy,beginnormal_vertex:Zy,bsdfs:jy,iridescence_fragment:Ky,bumpmap_pars_fragment:Qy,clipping_planes_fragment:Jy,clipping_planes_pars_fragment:$y,clipping_planes_pars_vertex:tM,clipping_planes_vertex:eM,color_fragment:nM,color_pars_fragment:iM,color_pars_vertex:aM,color_vertex:rM,common:sM,cube_uv_reflection_fragment:oM,defaultnormal_vertex:lM,displacementmap_pars_vertex:cM,displacementmap_vertex:uM,emissivemap_fragment:fM,emissivemap_pars_fragment:hM,colorspace_fragment:dM,colorspace_pars_fragment:pM,envmap_fragment:mM,envmap_common_pars_fragment:gM,envmap_pars_fragment:_M,envmap_pars_vertex:vM,envmap_physical_pars_fragment:wM,envmap_vertex:xM,fog_vertex:SM,fog_pars_vertex:yM,fog_fragment:MM,fog_pars_fragment:EM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:bM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:RM,lights_pars_begin:CM,lights_toon_fragment:DM,lights_toon_pars_fragment:UM,lights_phong_fragment:LM,lights_phong_pars_fragment:NM,lights_physical_fragment:OM,lights_physical_pars_fragment:PM,lights_fragment_begin:zM,lights_fragment_maps:BM,lights_fragment_end:IM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:VM,map_fragment:kM,map_pars_fragment:XM,map_particle_fragment:WM,map_particle_pars_fragment:qM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:jM,morphcolor_vertex:KM,morphnormal_vertex:QM,morphtarget_pars_vertex:JM,morphtarget_vertex:$M,normal_fragment_begin:tE,normal_fragment_maps:eE,normal_pars_fragment:nE,normal_pars_vertex:iE,normal_vertex:aE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:sE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:lE,iridescence_pars_fragment:cE,opaque_fragment:uE,packing:fE,premultiplied_alpha_fragment:hE,project_vertex:dE,dithering_fragment:pE,dithering_pars_fragment:mE,roughnessmap_fragment:gE,roughnessmap_pars_fragment:_E,shadowmap_pars_fragment:vE,shadowmap_pars_vertex:xE,shadowmap_vertex:SE,shadowmask_pars_fragment:yE,skinbase_vertex:ME,skinning_pars_vertex:EE,skinning_vertex:TE,skinnormal_vertex:bE,specularmap_fragment:AE,specularmap_pars_fragment:RE,tonemapping_fragment:CE,tonemapping_pars_fragment:wE,transmission_fragment:DE,transmission_pars_fragment:UE,uv_pars_fragment:LE,uv_pars_vertex:NE,uv_vertex:OE,worldpos_vertex:PE,background_vert:zE,background_frag:BE,backgroundCube_vert:IE,backgroundCube_frag:FE,cube_vert:HE,cube_frag:GE,depth_vert:VE,depth_frag:kE,distanceRGBA_vert:XE,distanceRGBA_frag:WE,equirect_vert:qE,equirect_frag:YE,linedashed_vert:ZE,linedashed_frag:jE,meshbasic_vert:KE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:$E,meshmatcap_vert:tT,meshmatcap_frag:eT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:rT,meshphysical_vert:sT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:hT,shadow_frag:dT,sprite_vert:pT,sprite_frag:mT},Dt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ti={basic:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Dn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Dn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Dn([Dt.points,Dt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Dn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Dn([Dt.common,Dt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Dn([Dt.sprite,Dt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Dn([Dt.common,Dt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Dn([Dt.lights,Dt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Ti.physical={uniforms:Dn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const _c={r:0,b:0,g:0},ur=new ia,gT=new ke;function _T(o,e,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function b(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function R(O){let U=!1;const k=b(O);k===null?_(d,m):k&&k.isColor&&(_(k,1),U=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,U){const k=b(U);k&&(k.isCubeTexture||k.mapping===Oc)?(g===void 0&&(g=new Ri(new ys(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:vs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,H,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(U.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(ur)),g.material.toneMapped=be.getTransfer(k.colorSpace)!==ze,(v!==k||x!==k.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=k,x=k.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Ri(new Pc(2,2),new aa({name:"BackgroundMaterial",uniforms:vs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(k.colorSpace)!==ze,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||x!==k.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=k,x=k.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,U){O.getRGB(_c,O0(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,U,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:R,addToRenderList:y,dispose:B}}function vT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(A,P,j,q,at){let rt=!1;const N=v(q,j,P);u!==N&&(u=N,p(u.object)),rt=M(A,q,j,at),rt&&b(A,q,j,at),at!==null&&e.update(at,o.ELEMENT_ARRAY_BUFFER),(rt||h)&&(h=!1,U(A,P,j,q),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(at).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function v(A,P,j){const q=j.wireframe===!0;let at=r[A.id];at===void 0&&(at={},r[A.id]=at);let rt=at[P.id];rt===void 0&&(rt={},at[P.id]=rt);let N=rt[q];return N===void 0&&(N=x(m()),rt[q]=N),N}function x(A){const P=[],j=[],q=[];for(let at=0;at<i;at++)P[at]=0,j[at]=0,q[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:j,attributeDivisors:q,object:A,attributes:{},index:null}}function M(A,P,j,q){const at=u.attributes,rt=P.attributes;let N=0;const X=j.getAttributes();for(const V in X)if(X[V].location>=0){const w=at[V];let Z=rt[V];if(Z===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(Z=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(Z=A.instanceColor)),w===void 0||w.attribute!==Z||Z&&w.data!==Z.data)return!0;N++}return u.attributesNum!==N||u.index!==q}function b(A,P,j,q){const at={},rt=P.attributes;let N=0;const X=j.getAttributes();for(const V in X)if(X[V].location>=0){let w=rt[V];w===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(w=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(w=A.instanceColor));const Z={};Z.attribute=w,w&&w.data&&(Z.data=w.data),at[V]=Z,N++}u.attributes=at,u.attributesNum=N,u.index=q}function R(){const A=u.newAttributes;for(let P=0,j=A.length;P<j;P++)A[P]=0}function y(A){_(A,0)}function _(A,P){const j=u.newAttributes,q=u.enabledAttributes,at=u.attributeDivisors;j[A]=1,q[A]===0&&(o.enableVertexAttribArray(A),q[A]=1),at[A]!==P&&(o.vertexAttribDivisor(A,P),at[A]=P)}function B(){const A=u.newAttributes,P=u.enabledAttributes;for(let j=0,q=P.length;j<q;j++)P[j]!==A[j]&&(o.disableVertexAttribArray(j),P[j]=0)}function O(A,P,j,q,at,rt,N){N===!0?o.vertexAttribIPointer(A,P,j,at,rt):o.vertexAttribPointer(A,P,j,q,at,rt)}function U(A,P,j,q){R();const at=q.attributes,rt=j.getAttributes(),N=P.defaultAttributeValues;for(const X in rt){const V=rt[X];if(V.location>=0){let pt=at[X];if(pt===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(pt=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(pt=A.instanceColor)),pt!==void 0){const w=pt.normalized,Z=pt.itemSize,nt=e.get(pt);if(nt===void 0)continue;const vt=nt.buffer,W=nt.type,tt=nt.bytesPerElement,ft=W===o.INT||W===o.UNSIGNED_INT||pt.gpuType===_d;if(pt.isInterleavedBufferAttribute){const Mt=pt.data,At=Mt.stride,Jt=pt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<V.locationSize;Vt++)_(V.location+Vt,Mt.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Vt=0;Vt<V.locationSize;Vt++)y(V.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Vt=0;Vt<V.locationSize;Vt++)O(V.location+Vt,Z/V.locationSize,W,w,At*tt,(Jt+Z/V.locationSize*Vt)*tt,ft)}else{if(pt.isInstancedBufferAttribute){for(let Mt=0;Mt<V.locationSize;Mt++)_(V.location+Mt,pt.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)y(V.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Mt=0;Mt<V.locationSize;Mt++)O(V.location+Mt,Z/V.locationSize,W,w,Z*tt,Z/V.locationSize*Mt*tt,ft)}}else if(N!==void 0){const w=N[X];if(w!==void 0)switch(w.length){case 2:o.vertexAttrib2fv(V.location,w);break;case 3:o.vertexAttrib3fv(V.location,w);break;case 4:o.vertexAttrib4fv(V.location,w);break;default:o.vertexAttrib1fv(V.location,w)}}}}B()}function k(){$();for(const A in r){const P=r[A];for(const j in P){const q=P[j];for(const at in q)g(q[at].object),delete q[at];delete P[j]}delete r[A]}}function I(A){if(r[A.id]===void 0)return;const P=r[A.id];for(const j in P){const q=P[j];for(const at in q)g(q[at].object),delete q[at];delete P[j]}delete r[A.id]}function H(A){for(const P in r){const j=r[P];if(j[A.id]===void 0)continue;const q=j[A.id];for(const at in q)g(q[at].object),delete q[at];delete j[A.id]}}function $(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:y,disableUnusedAttributes:B}}function xT(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R]*x[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ST(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==mi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const $=H===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Ci&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ta&&!$)}function m(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:k,maxSamples:I}}function yT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new hr,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const B=u?0:r,O=B*4;let U=_.clippingState||null;m.value=U,U=g(b,x,O,M);for(let k=0;k!==O;++k)U[k]=i[k];_.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,U=M;O!==R;++O,U+=4)h.copy(v[O]).applyMatrix4(B,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function MT(o){let e=new WeakMap;function i(h,d){return d===Ph?h.mapping=ms:d===zh&&(h.mapping=gs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ph||d===zh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new xy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const fs=4,X_=[.125,.215,.35,.446,.526,.582],mr=20,xh=new H0,W_=new Ce;let Sh=null,yh=0,Mh=0,Eh=!1;const dr=(1+Math.sqrt(5))/2,us=1/dr,q_=[new et(-dr,us,0),new et(dr,us,0),new et(-us,0,dr),new et(us,0,dr),new et(0,dr,-us),new et(0,dr,us),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],ET=new et;class Y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=ET}=u;Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,yh,Mh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Uo,format:mi,colorSpace:_s,depthBuffer:!1},l=Z_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TT(u)),this._blurMaterial=bT(u,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,xh)}_sceneToCubeUV(e,i,r,l,u){const m=new Kn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(W_),v.toneMapping=Fa,v.autoClear=!1;const b=new U0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),R=new Ri(new ys,b);let y=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,y=!0):(b.color.copy(W_),y=!0);for(let B=0;B<6;B++){const O=B%3;O===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[B],u.y,u.z)):O===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[B]));const U=this._cubeSize;vc(l,O*U,B>2?U:0,U,U),v.setRenderTarget(l),y&&v.render(R,m),v.render(e,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ms||e.mapping===gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;vc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,xh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=q_[(l-u-1)%q_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ri(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*mr-1),R=u/b,y=isFinite(u)?1+Math.floor(g*R):mr;y>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const _=[];let B=0;for(let H=0;H<mr;++H){const $=H/R,D=Math.exp(-$*$/2);_.push(D),H===0?B+=D:H<y&&(B+=2*D)}for(let H=0;H<_.length;H++)_[H]=_[H]/B;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=b,x.mipInt.value=O-r;const U=this._sizeLods[l],k=3*U*(l>O-fs?l-O+fs:0),I=4*(this._cubeSize-U);vc(i,k,I,3*U,2*U),m.setRenderTarget(i),m.render(v,xh)}}function TT(o){const e=[],i=[],r=[];let l=o;const u=o-fs+1+X_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-fs?m=X_[h-o+fs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,R=3,y=2,_=1,B=new Float32Array(R*b*M),O=new Float32Array(y*b*M),U=new Float32Array(_*b*M);for(let I=0;I<M;I++){const H=I%3*2/3-1,$=I>2?0:-1,D=[H,$,0,H+2/3,$,0,H+2/3,$+1,0,H,$,0,H+2/3,$+1,0,H,$+1,0];B.set(D,R*b*I),O.set(x,y*b*I);const A=[I,I,I,I,I,I];U.set(A,_*b*I)}const k=new oi;k.setAttribute("position",new Cn(B,R)),k.setAttribute("uv",new Cn(O,y)),k.setAttribute("faceIndex",new Cn(U,_)),e.push(k),l>fs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Z_(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=Oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function bT(o,e,i){const r=new Float32Array(mr),l=new et(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function j_(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function K_(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ph||m===zh,g=m===ms||m===gs;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Y_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Y_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function RT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ac("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function CT(o,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,b=v.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let O=0,U=B.length;O<U;O+=3){const k=B[O+0],I=B[O+1],H=B[O+2];x.push(k,I,I,H,H,k)}}else if(b!==void 0){const B=b.array;R=b.version;for(let O=0,U=B.length/3-1;O<U;O+=3){const k=O+0,I=O+1,H=O+2;x.push(k,I,I,H,H,k)}}else return;const y=new(R0(x)?N0:L0)(x,1);y.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function wT(o,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,x*h,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,r,1)}function v(x,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,R,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B]*R[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function DT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function UT(o,e,i){const r=new WeakMap,l=new Be;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let D=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let O=0;M===!0&&(O=1),b===!0&&(O=2),R===!0&&(O=3);let U=d.attributes.position.count*O,k=1;U>e.maxTextureSize&&(k=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*k*4*v),H=new C0(I,U,k,v);H.type=ta,H.needsUpdate=!0;const $=O*4;for(let A=0;A<v;A++){const P=y[A],j=_[A],q=B[A],at=U*k*4*A;for(let rt=0;rt<P.count;rt++){const N=rt*$;M===!0&&(l.fromBufferAttribute(P,rt),I[at+N+0]=l.x,I[at+N+1]=l.y,I[at+N+2]=l.z,I[at+N+3]=0),b===!0&&(l.fromBufferAttribute(j,rt),I[at+N+4]=l.x,I[at+N+5]=l.y,I[at+N+6]=l.z,I[at+N+7]=0),R===!0&&(l.fromBufferAttribute(q,rt),I[at+N+8]=l.x,I[at+N+9]=l.y,I[at+N+10]=l.z,I[at+N+11]=q.itemSize===4?l.w:1)}}x={count:v,texture:H,size:new Ae(U,k)},r.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let R=0;R<p.length;R++)M+=p[R];const b=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function LT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const V0=new Un,Q_=new I0(1,1),k0=new C0,X0=new ny,W0=new z0,J_=[],$_=[],t0=new Float32Array(16),e0=new Float32Array(9),n0=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=J_[l];if(u===void 0&&(u=new Float32Array(l),J_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function zc(o,e){let i=$_[e];i===void 0&&(i=new Int32Array(e),$_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function NT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function BT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;n0.set(r),o.uniformMatrix2fv(this.addr,!1,n0),cn(i,r)}}function IT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;e0.set(r),o.uniformMatrix3fv(this.addr,!1,e0),cn(i,r)}}function FT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;t0.set(r),o.uniformMatrix4fv(this.addr,!1,t0),cn(i,r)}}function HT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function XT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function ZT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Q_.compareFunction=A0,u=Q_):u=V0,i.setTexture2D(e||u,l)}function jT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||X0,l)}function KT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||W0,l)}function QT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||k0,l)}function JT(o){switch(o){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return BT;case 35675:return IT;case 35676:return FT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}function $T(o,e){o.uniform1fv(this.addr,e)}function tb(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function eb(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function nb(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function ib(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ab(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rb(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function sb(o,e){o.uniform1iv(this.addr,e)}function ob(o,e){o.uniform2iv(this.addr,e)}function lb(o,e){o.uniform3iv(this.addr,e)}function cb(o,e){o.uniform4iv(this.addr,e)}function ub(o,e){o.uniform1uiv(this.addr,e)}function fb(o,e){o.uniform2uiv(this.addr,e)}function hb(o,e){o.uniform3uiv(this.addr,e)}function db(o,e){o.uniform4uiv(this.addr,e)}function pb(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||V0,u[h])}function mb(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||X0,u[h])}function gb(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||W0,u[h])}function _b(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||k0,u[h])}function vb(o){switch(o){case 5126:return $T;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return ab;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return fb;case 36295:return hb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}class xb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=JT(i.type)}}class Sb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vb(i.type)}}class yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function i0(o,e){o.seq.push(e),o.map[e.id]=e}function Mb(o,e,i){const r=o.name,l=r.length;for(Th.lastIndex=0;;){const u=Th.exec(r),h=Th.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){i0(i,p===void 0?new xb(d,o,e):new Sb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new yb(d),i0(i,v)),i=v}}}class Rc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Mb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function a0(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Eb=37297;let Tb=0;function bb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const r0=new re;function Ab(o){be._getMatrix(r0,be.workingColorSpace,o);const e=`mat3( ${r0.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function s0(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+bb(o.getShaderSource(e),h)}else return l}function Rb(o,e){const i=Ab(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Cb(o,e){let i;switch(e){case RS:i="Linear";break;case CS:i="Reinhard";break;case wS:i="Cineon";break;case DS:i="ACESFilmic";break;case LS:i="AgX";break;case NS:i="Neutral";break;case US:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new et;function wb(){be.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function Ub(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Lb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ao(o){return o!==""}function o0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(o){return o.replace(Nb,Pb)}const Ob=new Map;function Pb(o,e){let i=se[e];if(i===void 0){const r=Ob.get(e);if(r!==void 0)i=se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return pd(i)}const zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(o){return o.replace(zb,Bb)}function Bb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function u0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ib(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===p0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function Fb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Gb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case g0:e="ENVMAP_BLENDING_MULTIPLY";break;case bS:e="ENVMAP_BLENDING_MIX";break;case AS:e="ENVMAP_BLENDING_ADD";break}return e}function Vb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function kb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ib(i),p=Fb(i),g=Hb(i),v=Gb(i),x=Vb(i),M=Db(i),b=Ub(u),R=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(y=[u0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[u0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?se.tonemapping_pars_fragment:"",i.toneMapping!==Fa?Cb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Rb("linearToOutputTexel",i.outputColorSpace),wb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),h=pd(h),h=o0(h,i),h=l0(h,i),d=pd(d),d=o0(d,i),d=l0(d,i),h=c0(h),d=c0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+y+h,U=B+_+d,k=a0(l,l.VERTEX_SHADER,O),I=a0(l,l.FRAGMENT_SHADER,U);l.attachShader(R,k),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(P){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(R).trim(),q=l.getShaderInfoLog(k).trim(),at=l.getShaderInfoLog(I).trim();let rt=!0,N=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,k,I);else{const X=s0(l,k,"vertex"),V=s0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+X+`
`+V)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(q===""||at==="")&&(N=!1);N&&(P.diagnostics={runnable:rt,programLog:j,vertexShader:{log:q,prefix:y},fragmentShader:{log:at,prefix:_}})}l.deleteShader(k),l.deleteShader(I),$=new Rc(l,R),D=Lb(l,R)}let $;this.getUniforms=function(){return $===void 0&&H(this),$};let D;this.getAttributes=function(){return D===void 0&&H(this),D};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(R,Eb)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Tb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=I,this}let Xb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new qb(e),i.set(e,r)),r}}class qb{constructor(e){this.id=Xb++,this.code=e,this.usedTimes=0}}function Yb(o,e,i,r,l,u,h){const d=new w0,m=new Wb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,A,P,j,q){const at=j.fog,rt=q.geometry,N=D.isMeshStandardMaterial?j.environment:null,X=(D.isMeshStandardMaterial?i:e).get(D.envMap||N),V=X&&X.mapping===Oc?X.image.height:null,pt=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const w=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Z=w!==void 0?w.length:0;let nt=0;rt.morphAttributes.position!==void 0&&(nt=1),rt.morphAttributes.normal!==void 0&&(nt=2),rt.morphAttributes.color!==void 0&&(nt=3);let vt,W,tt,ft;if(pt){const Me=Ti[pt];vt=Me.vertexShader,W=Me.fragmentShader}else vt=D.vertexShader,W=D.fragmentShader,m.update(D),tt=m.getVertexShaderID(D),ft=m.getFragmentShaderID(D);const Mt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Jt=q.isInstancedMesh===!0,Vt=q.isBatchedMesh===!0,ye=!!D.map,pe=!!D.matcap,ce=!!X,F=!!D.aoMap,Ln=!!D.lightMap,me=!!D.bumpMap,ne=!!D.normalMap,Xt=!!D.displacementMap,Ue=!!D.emissiveMap,Ht=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,ot=D.clearcoat>0,xt=D.dispersion>0,Et=D.iridescence>0,gt=D.sheen>0,Nt=D.transmission>0,Rt=T&&!!D.anisotropyMap,Ft=ot&&!!D.clearcoatMap,Qt=ot&&!!D.clearcoatNormalMap,bt=ot&&!!D.clearcoatRoughnessMap,Bt=Et&&!!D.iridescenceMap,Yt=Et&&!!D.iridescenceThicknessMap,jt=gt&&!!D.sheenColorMap,Ot=gt&&!!D.sheenRoughnessMap,oe=!!D.specularMap,ee=!!D.specularColorMap,Le=!!D.specularIntensityMap,Y=Nt&&!!D.transmissionMap,Ut=Nt&&!!D.thicknessMap,dt=!!D.gradientMap,St=!!D.alphaMap,Pt=D.alphaTest>0,Lt=!!D.alphaHash,ie=!!D.extensions;let He=Fa;D.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(He=o.toneMapping);const Je={shaderID:pt,shaderType:D.type,shaderName:D.name,vertexShader:vt,fragmentShader:W,defines:D.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Vt,batchingColor:Vt&&q._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&q.instanceColor!==null,instancingMorph:Jt&&q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:_s,alphaToCoverage:!!D.alphaToCoverage,map:ye,matcap:pe,envMap:ce,envMapMode:ce&&X.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Ln,bumpMap:me,normalMap:ne,displacementMap:x&&Xt,emissiveMap:Ue,normalMapObjectSpace:ne&&D.normalMapType===IS,normalMapTangentSpace:ne&&D.normalMapType===BS,metalnessMap:Ht,roughnessMap:L,anisotropy:T,anisotropyMap:Rt,clearcoat:ot,clearcoatMap:Ft,clearcoatNormalMap:Qt,clearcoatRoughnessMap:bt,dispersion:xt,iridescence:Et,iridescenceMap:Bt,iridescenceThicknessMap:Yt,sheen:gt,sheenColorMap:jt,sheenRoughnessMap:Ot,specularMap:oe,specularColorMap:ee,specularIntensityMap:Le,transmission:Nt,transmissionMap:Y,thicknessMap:Ut,gradientMap:dt,opaque:D.transparent===!1&&D.blending===hs&&D.alphaToCoverage===!1,alphaMap:St,alphaTest:Pt,alphaHash:Lt,combine:D.combine,mapUv:ye&&R(D.map.channel),aoMapUv:F&&R(D.aoMap.channel),lightMapUv:Ln&&R(D.lightMap.channel),bumpMapUv:me&&R(D.bumpMap.channel),normalMapUv:ne&&R(D.normalMap.channel),displacementMapUv:Xt&&R(D.displacementMap.channel),emissiveMapUv:Ue&&R(D.emissiveMap.channel),metalnessMapUv:Ht&&R(D.metalnessMap.channel),roughnessMapUv:L&&R(D.roughnessMap.channel),anisotropyMapUv:Rt&&R(D.anisotropyMap.channel),clearcoatMapUv:Ft&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&R(D.sheenRoughnessMap.channel),specularMapUv:oe&&R(D.specularMap.channel),specularColorMapUv:ee&&R(D.specularColorMap.channel),specularIntensityMapUv:Le&&R(D.specularIntensityMap.channel),transmissionMapUv:Y&&R(D.transmissionMap.channel),thicknessMapUv:Ut&&R(D.thicknessMap.channel),alphaMapUv:St&&R(D.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(ne||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!rt.attributes.uv&&(ye||St),fog:!!at,useFog:D.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:At,skinning:q.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:nt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:ye&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===ze,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===bi,flipSided:D.side===Fn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ie&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&D.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Je.vertexUv1s=p.has(1),Je.vertexUv2s=p.has(2),Je.vertexUv3s=p.has(3),p.clear(),Je}function _(D){const A=[];if(D.shaderID?A.push(D.shaderID):(A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID)),D.defines!==void 0)for(const P in D.defines)A.push(P),A.push(D.defines[P]);return D.isRawShaderMaterial===!1&&(B(A,D),O(A,D),A.push(o.outputColorSpace)),A.push(D.customProgramCacheKey),A.join()}function B(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function O(D,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const A=b[D.type];let P;if(A){const j=Ti[A];P=my.clone(j.uniforms)}else P=D.uniforms;return P}function k(D,A){let P;for(let j=0,q=g.length;j<q;j++){const at=g[j];if(at.cacheKey===A){P=at,++P.usedTimes;break}}return P===void 0&&(P=new kb(o,A,D,u),g.push(P)),P}function I(D){if(--D.usedTimes===0){const A=g.indexOf(D);g[A]=g[g.length-1],g.pop(),D.destroy()}}function H(D){m.remove(D)}function $(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:k,releaseProgram:I,releaseShaderCache:H,programs:g,dispose:$}}function Zb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function jb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function f0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function h0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,b,R,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:R,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=y),e++,_}function d(v,x,M,b,R,y){const _=h(v,x,M,b,R,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,b,R,y){const _=h(v,x,M,b,R,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||jb),r.length>1&&r.sort(x||f0),l.length>1&&l.sort(x||f0)}function g(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Kb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new h0,o.set(r,[h])):l>=u.length?(h=new h0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Qb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Ce};break;case"SpotLight":i={position:new et,direction:new et,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function Jb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let $b=0;function tA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function eA(o){const e=new Qb,i=Jb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,u=new ke,h=new ke;function d(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,B=0,O=0,U=0,k=0,I=0,H=0;p.sort(tA);for(let D=0,A=p.length;D<A;D++){const P=p[D],j=P.color,q=P.intensity,at=P.distance,rt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)g+=j.r*q,v+=j.g*q,x+=j.b*q;else if(P.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(P.sh.coefficients[N],q);H++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,V=i.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,r.directionalShadow[M]=V,r.directionalShadowMap[M]=rt,r.directionalShadowMatrix[M]=P.shadow.matrix,B++}r.directional[M]=N,M++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(j).multiplyScalar(q),N.distance=at,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,r.spot[R]=N;const X=P.shadow;if(P.map&&(r.spotLightMap[k]=P.map,k++,X.updateMatrices(P),P.castShadow&&I++),r.spotLightMatrix[R]=X.matrix,P.castShadow){const V=i.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,r.spotShadow[R]=V,r.spotShadowMap[R]=rt,U++}R++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(j).multiplyScalar(q),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=N,y++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const X=P.shadow,V=i.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,r.pointShadow[b]=V,r.pointShadowMap[b]=rt,r.pointShadowMatrix[b]=P.shadow.matrix,O++}r.point[b]=N,b++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(q),N.groundColor.copy(P.groundColor).multiplyScalar(q),r.hemi[_]=N,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const $=r.hash;($.directionalLength!==M||$.pointLength!==b||$.spotLength!==R||$.rectAreaLength!==y||$.hemiLength!==_||$.numDirectionalShadows!==B||$.numPointShadows!==O||$.numSpotShadows!==U||$.numSpotMaps!==k||$.numLightProbes!==H)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+k-I,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=H,$.directionalLength=M,$.pointLength=b,$.spotLength=R,$.rectAreaLength=y,$.hemiLength=_,$.numDirectionalShadows=B,$.numPointShadows=O,$.numSpotShadows=U,$.numSpotMaps=k,$.numLightProbes=H,r.version=$b++)}function m(p,g){let v=0,x=0,M=0,b=0,R=0;const y=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const O=p[_];if(O.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(O.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function d0(o){const e=new eA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function nA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new d0(o),e.set(l,[d])):u>=h.length?(d=new d0(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const iA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rA(o,e,i){let r=new bd;const l=new Ae,u=new Ae,h=new Be,d=new Ry({depthPacking:zS}),m=new Cy,p={},g=i.maxTextureSize,v={[Ha]:Fn,[Fn]:Ha,[bi]:bi},x=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:iA,fragmentShader:aA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new oi;b.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ri(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p0;let _=this.type;this.render=function(I,H,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const D=o.getRenderTarget(),A=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),j=o.state;j.setBlending(Ia),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const q=_!==$i&&this.type===$i,at=_===$i&&this.type!==$i;for(let rt=0,N=I.length;rt<N;rt++){const X=I[rt],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const pt=V.getFrameExtents();if(l.multiply(pt),u.copy(V.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/pt.x),l.x=u.x*pt.x,V.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/pt.y),l.y=u.y*pt.y,V.mapSize.y=u.y)),V.map===null||q===!0||at===!0){const Z=this.type!==$i?{minFilter:gi,magFilter:gi}:{};V.map!==null&&V.map.dispose(),V.map=new xr(l.x,l.y,Z),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const w=V.getViewportCount();for(let Z=0;Z<w;Z++){const nt=V.getViewport(Z);h.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),j.viewport(h),V.updateMatrices(X,Z),r=V.getFrustum(),U(H,$,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===$i&&B(V,$),V.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,A,P)};function B(I,H){const $=e.update(R);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new xr(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(H,null,$,x,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(H,null,$,M,R,null)}function O(I,H,$,D){let A=null;const P=$.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(P!==void 0)A=P;else if(A=$.isPointLight===!0?m:d,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const j=A.uuid,q=H.uuid;let at=p[j];at===void 0&&(at={},p[j]=at);let rt=at[q];rt===void 0&&(rt=A.clone(),at[q]=rt,H.addEventListener("dispose",k)),A=rt}if(A.visible=H.visible,A.wireframe=H.wireframe,D===$i?A.side=H.shadowSide!==null?H.shadowSide:H.side:A.side=H.shadowSide!==null?H.shadowSide:v[H.side],A.alphaMap=H.alphaMap,A.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,A.map=H.map,A.clipShadows=H.clipShadows,A.clippingPlanes=H.clippingPlanes,A.clipIntersection=H.clipIntersection,A.displacementMap=H.displacementMap,A.displacementScale=H.displacementScale,A.displacementBias=H.displacementBias,A.wireframeLinewidth=H.wireframeLinewidth,A.linewidth=H.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const j=o.properties.get(A);j.light=$}return A}function U(I,H,$,D,A){if(I.visible===!1)return;if(I.layers.test(H.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===$i)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld);const q=e.update(I),at=I.material;if(Array.isArray(at)){const rt=q.groups;for(let N=0,X=rt.length;N<X;N++){const V=rt[N],pt=at[V.materialIndex];if(pt&&pt.visible){const w=O(I,pt,D,A);I.onBeforeShadow(o,I,H,$,q,w,V),o.renderBufferDirect($,null,q,w,I,V),I.onAfterShadow(o,I,H,$,q,w,V)}}}else if(at.visible){const rt=O(I,at,D,A);I.onBeforeShadow(o,I,H,$,q,rt,null),o.renderBufferDirect($,null,q,rt,I,null),I.onAfterShadow(o,I,H,$,q,rt,null)}}const j=I.children;for(let q=0,at=j.length;q<at;q++)U(j[q],H,$,D,A)}function k(I){I.target.removeEventListener("dispose",k);for(const $ in p){const D=p[$],A=I.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}const sA={[Ch]:wh,[Dh]:Nh,[Uh]:Oh,[ps]:Lh,[wh]:Ch,[Nh]:Dh,[Oh]:Uh,[Lh]:ps};function oA(o,e){function i(){let Y=!1;const Ut=new Be;let dt=null;const St=new Be(0,0,0,0);return{setMask:function(Pt){dt!==Pt&&!Y&&(o.colorMask(Pt,Pt,Pt,Pt),dt=Pt)},setLocked:function(Pt){Y=Pt},setClear:function(Pt,Lt,ie,He,Je){Je===!0&&(Pt*=He,Lt*=He,ie*=He),Ut.set(Pt,Lt,ie,He),St.equals(Ut)===!1&&(o.clearColor(Pt,Lt,ie,He),St.copy(Ut))},reset:function(){Y=!1,dt=null,St.set(-1,0,0,0)}}}function r(){let Y=!1,Ut=!1,dt=null,St=null,Pt=null;return{setReversed:function(Lt){if(Ut!==Lt){const ie=e.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const He=Pt;Pt=null,this.setClear(He)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?Mt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(Lt){dt!==Lt&&!Y&&(o.depthMask(Lt),dt=Lt)},setFunc:function(Lt){if(Ut&&(Lt=sA[Lt]),St!==Lt){switch(Lt){case Ch:o.depthFunc(o.NEVER);break;case wh:o.depthFunc(o.ALWAYS);break;case Dh:o.depthFunc(o.LESS);break;case ps:o.depthFunc(o.LEQUAL);break;case Uh:o.depthFunc(o.EQUAL);break;case Lh:o.depthFunc(o.GEQUAL);break;case Nh:o.depthFunc(o.GREATER);break;case Oh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}St=Lt}},setLocked:function(Lt){Y=Lt},setClear:function(Lt){Pt!==Lt&&(Ut&&(Lt=1-Lt),o.clearDepth(Lt),Pt=Lt)},reset:function(){Y=!1,dt=null,St=null,Pt=null,Ut=!1}}}function l(){let Y=!1,Ut=null,dt=null,St=null,Pt=null,Lt=null,ie=null,He=null,Je=null;return{setTest:function(Me){Y||(Me?Mt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Me){Ut!==Me&&!Y&&(o.stencilMask(Me),Ut=Me)},setFunc:function(Me,Hn,un){(dt!==Me||St!==Hn||Pt!==un)&&(o.stencilFunc(Me,Hn,un),dt=Me,St=Hn,Pt=un)},setOp:function(Me,Hn,un){(Lt!==Me||ie!==Hn||He!==un)&&(o.stencilOp(Me,Hn,un),Lt=Me,ie=Hn,He=un)},setLocked:function(Me){Y=Me},setClear:function(Me){Je!==Me&&(o.clearStencil(Me),Je=Me)},reset:function(){Y=!1,Ut=null,dt=null,St=null,Pt=null,Lt=null,ie=null,He=null,Je=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,B=null,O=null,U=null,k=null,I=null,H=new Ce(0,0,0),$=0,D=!1,A=null,P=null,j=null,q=null,at=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=X>=2);let pt=null,w={};const Z=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),vt=new Be().fromArray(Z),W=new Be().fromArray(nt);function tt(Y,Ut,dt,St){const Pt=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(Y,Lt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<dt;ie++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,St,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ut+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Lt}const ft={};ft[o.TEXTURE_2D]=tt(o.TEXTURE_2D,o.TEXTURE_2D,1),ft[o.TEXTURE_CUBE_MAP]=tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[o.TEXTURE_2D_ARRAY]=tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ft[o.TEXTURE_3D]=tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(ps),me(!1),ne(u_),Mt(o.CULL_FACE),F(Ia);function Mt(Y){g[Y]!==!0&&(o.enable(Y),g[Y]=!0)}function At(Y){g[Y]!==!1&&(o.disable(Y),g[Y]=!1)}function Jt(Y,Ut){return v[Y]!==Ut?(o.bindFramebuffer(Y,Ut),v[Y]=Ut,Y===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),Y===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Vt(Y,Ut){let dt=M,St=!1;if(Y){dt=x.get(Ut),dt===void 0&&(dt=[],x.set(Ut,dt));const Pt=Y.textures;if(dt.length!==Pt.length||dt[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,ie=Pt.length;Lt<ie;Lt++)dt[Lt]=o.COLOR_ATTACHMENT0+Lt;dt.length=Pt.length,St=!0}}else dt[0]!==o.BACK&&(dt[0]=o.BACK,St=!0);St&&o.drawBuffers(dt)}function ye(Y){return b!==Y?(o.useProgram(Y),b=Y,!0):!1}const pe={[pr]:o.FUNC_ADD,[lS]:o.FUNC_SUBTRACT,[cS]:o.FUNC_REVERSE_SUBTRACT};pe[uS]=o.MIN,pe[fS]=o.MAX;const ce={[hS]:o.ZERO,[dS]:o.ONE,[pS]:o.SRC_COLOR,[Ah]:o.SRC_ALPHA,[SS]:o.SRC_ALPHA_SATURATE,[vS]:o.DST_COLOR,[gS]:o.DST_ALPHA,[mS]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[xS]:o.ONE_MINUS_DST_COLOR,[_S]:o.ONE_MINUS_DST_ALPHA,[yS]:o.CONSTANT_COLOR,[MS]:o.ONE_MINUS_CONSTANT_COLOR,[ES]:o.CONSTANT_ALPHA,[TS]:o.ONE_MINUS_CONSTANT_ALPHA};function F(Y,Ut,dt,St,Pt,Lt,ie,He,Je,Me){if(Y===Ia){R===!0&&(At(o.BLEND),R=!1);return}if(R===!1&&(Mt(o.BLEND),R=!0),Y!==oS){if(Y!==y||Me!==D){if((_!==pr||U!==pr)&&(o.blendEquation(o.FUNC_ADD),_=pr,U=pr),Me)switch(Y){case hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cc:o.blendFunc(o.ONE,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cc:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}B=null,O=null,k=null,I=null,H.set(0,0,0),$=0,y=Y,D=Me}return}Pt=Pt||Ut,Lt=Lt||dt,ie=ie||St,(Ut!==_||Pt!==U)&&(o.blendEquationSeparate(pe[Ut],pe[Pt]),_=Ut,U=Pt),(dt!==B||St!==O||Lt!==k||ie!==I)&&(o.blendFuncSeparate(ce[dt],ce[St],ce[Lt],ce[ie]),B=dt,O=St,k=Lt,I=ie),(He.equals(H)===!1||Je!==$)&&(o.blendColor(He.r,He.g,He.b,Je),H.copy(He),$=Je),y=Y,D=!1}function Ln(Y,Ut){Y.side===bi?At(o.CULL_FACE):Mt(o.CULL_FACE);let dt=Y.side===Fn;Ut&&(dt=!dt),me(dt),Y.blending===hs&&Y.transparent===!1?F(Ia):F(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const St=Y.stencilWrite;d.setTest(St),St&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ue(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function me(Y){A!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),A=Y)}function ne(Y){Y!==rS?(Mt(o.CULL_FACE),Y!==P&&(Y===u_?o.cullFace(o.BACK):Y===sS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),P=Y}function Xt(Y){Y!==j&&(N&&o.lineWidth(Y),j=Y)}function Ue(Y,Ut,dt){Y?(Mt(o.POLYGON_OFFSET_FILL),(q!==Ut||at!==dt)&&(o.polygonOffset(Ut,dt),q=Ut,at=dt)):At(o.POLYGON_OFFSET_FILL)}function Ht(Y){Y?Mt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=o.TEXTURE0+rt-1),pt!==Y&&(o.activeTexture(Y),pt=Y)}function T(Y,Ut,dt){dt===void 0&&(pt===null?dt=o.TEXTURE0+rt-1:dt=pt);let St=w[dt];St===void 0&&(St={type:void 0,texture:void 0},w[dt]=St),(St.type!==Y||St.texture!==Ut)&&(pt!==dt&&(o.activeTexture(dt),pt=dt),o.bindTexture(Y,Ut||ft[Y]),St.type=Y,St.texture=Ut)}function ot(){const Y=w[pt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function xt(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Nt(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(Y){vt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),vt.copy(Y))}function Ot(Y){W.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),W.copy(Y))}function oe(Y,Ut){let dt=p.get(Ut);dt===void 0&&(dt=new WeakMap,p.set(Ut,dt));let St=dt.get(Y);St===void 0&&(St=o.getUniformBlockIndex(Ut,Y.name),dt.set(Y,St))}function ee(Y,Ut){const St=p.get(Ut).get(Y);m.get(Ut)!==St&&(o.uniformBlockBinding(Ut,St,Y.__bindingPointIndex),m.set(Ut,St))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},pt=null,w={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,B=null,O=null,U=null,k=null,I=null,H=new Ce(0,0,0),$=0,D=!1,A=null,P=null,j=null,q=null,at=null,vt.set(0,0,o.canvas.width,o.canvas.height),W.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:At,bindFramebuffer:Jt,drawBuffers:Vt,useProgram:ye,setBlending:F,setMaterial:Ln,setFlipSided:me,setCullFace:ne,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:Ht,activeTexture:L,bindTexture:T,unbindTexture:ot,compressedTexImage2D:xt,compressedTexImage3D:Et,texImage2D:Bt,texImage3D:Yt,updateUBOMapping:oe,uniformBlockBinding:ee,texStorage2D:Qt,texStorage3D:bt,texSubImage2D:gt,texSubImage3D:Nt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ft,scissor:jt,viewport:Ot,reset:Le}}function lA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return M?new OffscreenCanvas(L,T):Uc("canvas")}function R(L,T,ot){let xt=1;const Et=Ht(L);if((Et.width>ot||Et.height>ot)&&(xt=ot/Math.max(Et.width,Et.height)),xt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const gt=Math.floor(xt*Et.width),Nt=Math.floor(xt*Et.height);v===void 0&&(v=b(gt,Nt));const Rt=T?b(gt,Nt):v;return Rt.width=gt,Rt.height=Nt,Rt.getContext("2d").drawImage(L,0,0,gt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+gt+"x"+Nt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,T,ot,xt,Et=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=T;if(T===o.RED&&(ot===o.FLOAT&&(gt=o.R32F),ot===o.HALF_FLOAT&&(gt=o.R16F),ot===o.UNSIGNED_BYTE&&(gt=o.R8)),T===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.R8UI),ot===o.UNSIGNED_SHORT&&(gt=o.R16UI),ot===o.UNSIGNED_INT&&(gt=o.R32UI),ot===o.BYTE&&(gt=o.R8I),ot===o.SHORT&&(gt=o.R16I),ot===o.INT&&(gt=o.R32I)),T===o.RG&&(ot===o.FLOAT&&(gt=o.RG32F),ot===o.HALF_FLOAT&&(gt=o.RG16F),ot===o.UNSIGNED_BYTE&&(gt=o.RG8)),T===o.RG_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.RG8UI),ot===o.UNSIGNED_SHORT&&(gt=o.RG16UI),ot===o.UNSIGNED_INT&&(gt=o.RG32UI),ot===o.BYTE&&(gt=o.RG8I),ot===o.SHORT&&(gt=o.RG16I),ot===o.INT&&(gt=o.RG32I)),T===o.RGB_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),ot===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),ot===o.UNSIGNED_INT&&(gt=o.RGB32UI),ot===o.BYTE&&(gt=o.RGB8I),ot===o.SHORT&&(gt=o.RGB16I),ot===o.INT&&(gt=o.RGB32I)),T===o.RGBA_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),ot===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),ot===o.UNSIGNED_INT&&(gt=o.RGBA32UI),ot===o.BYTE&&(gt=o.RGBA8I),ot===o.SHORT&&(gt=o.RGBA16I),ot===o.INT&&(gt=o.RGBA32I)),T===o.RGB&&ot===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),T===o.RGBA){const Nt=Et?wc:be.getTransfer(xt);ot===o.FLOAT&&(gt=o.RGBA32F),ot===o.HALF_FLOAT&&(gt=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(gt=Nt===ze?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function U(L,T){let ot;return L?T===null||T===vr||T===Co?ot=o.DEPTH24_STENCIL8:T===ta?ot=o.DEPTH32F_STENCIL8:T===Ro&&(ot=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vr||T===Co?ot=o.DEPTH_COMPONENT24:T===ta?ot=o.DEPTH_COMPONENT32F:T===Ro&&(ot=o.DEPTH_COMPONENT16),ot}function k(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==Ai?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function I(L){const T=L.target;T.removeEventListener("dispose",I),$(T),T.isVideoTexture&&g.delete(T)}function H(L){const T=L.target;T.removeEventListener("dispose",H),A(T)}function $(L){const T=r.get(L);if(T.__webglInit===void 0)return;const ot=L.source,xt=x.get(ot);if(xt){const Et=xt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(L),Object.keys(xt).length===0&&x.delete(ot)}r.remove(L)}function D(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const ot=L.source,xt=x.get(ot);delete xt[T.__cacheKey],h.memory.textures--}function A(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(T.__webglFramebuffer[xt]))for(let Et=0;Et<T.__webglFramebuffer[xt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[xt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[xt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[xt])}else{if(Array.isArray(T.__webglFramebuffer))for(let xt=0;xt<T.__webglFramebuffer.length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[xt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xt=0;xt<T.__webglColorRenderbuffer.length;xt++)T.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[xt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ot=L.textures;for(let xt=0,Et=ot.length;xt<Et;xt++){const gt=r.get(ot[xt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),r.remove(ot[xt])}r.remove(L)}let P=0;function j(){P=0}function q(){const L=P;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),P+=1,L}function at(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function rt(L,T){const ot=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&ot.__version!==L.version){const xt=L.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(ot,L,T);return}}i.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+T)}function N(L,T){const ot=r.get(L);if(L.version>0&&ot.__version!==L.version){W(ot,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+T)}function X(L,T){const ot=r.get(L);if(L.version>0&&ot.__version!==L.version){W(ot,L,T);return}i.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+T)}function V(L,T){const ot=r.get(L);if(L.version>0&&ot.__version!==L.version){tt(ot,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+T)}const pt={[Bh]:o.REPEAT,[gr]:o.CLAMP_TO_EDGE,[Ih]:o.MIRRORED_REPEAT},w={[gi]:o.NEAREST,[OS]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},Z={[FS]:o.NEVER,[WS]:o.ALWAYS,[HS]:o.LESS,[A0]:o.LEQUAL,[GS]:o.EQUAL,[XS]:o.GEQUAL,[VS]:o.GREATER,[kS]:o.NOTEQUAL};function nt(L,T){if(T.type===ta&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ai||T.magFilter===qf||T.magFilter===ql||T.magFilter===_r||T.minFilter===Ai||T.minFilter===qf||T.minFilter===ql||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,pt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,pt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,pt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,w[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,w[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gi||T.minFilter!==ql&&T.minFilter!==_r||T.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ot=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function vt(L,T){let ot=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",I));const xt=T.source;let Et=x.get(xt);Et===void 0&&(Et={},x.set(xt,Et));const gt=at(T);if(gt!==L.__cacheKey){Et[gt]===void 0&&(Et[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ot=!0),Et[gt].usedTimes++;const Nt=Et[L.__cacheKey];Nt!==void 0&&(Et[L.__cacheKey].usedTimes--,Nt.usedTimes===0&&D(T)),L.__cacheKey=gt,L.__webglTexture=Et[gt].texture}return ot}function W(L,T,ot){let xt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=o.TEXTURE_3D);const Et=vt(L,T),gt=T.source;i.bindTexture(xt,L.__webglTexture,o.TEXTURE0+ot);const Nt=r.get(gt);if(gt.version!==Nt.__version||Et===!0){i.activeTexture(o.TEXTURE0+ot);const Rt=be.getPrimaries(be.workingColorSpace),Ft=T.colorSpace===Ba?null:be.getPrimaries(T.colorSpace),Qt=T.colorSpace===Ba||Rt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let bt=R(T.image,!1,l.maxTextureSize);bt=Ue(T,bt);const Bt=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let jt=O(T.internalFormat,Bt,Yt,T.colorSpace,T.isVideoTexture);nt(xt,T);let Ot;const oe=T.mipmaps,ee=T.isVideoTexture!==!0,Le=Nt.__version===void 0||Et===!0,Y=gt.dataReady,Ut=k(T,bt);if(T.isDepthTexture)jt=U(T.format===Do,T.type),Le&&(ee?i.texStorage2D(o.TEXTURE_2D,1,jt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,jt,bt.width,bt.height,0,Bt,Yt,null));else if(T.isDataTexture)if(oe.length>0){ee&&Le&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,oe[0].width,oe[0].height);for(let dt=0,St=oe.length;dt<St;dt++)Ot=oe[dt],ee?Y&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Bt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,dt,jt,Ot.width,Ot.height,0,Bt,Yt,Ot.data);T.generateMipmaps=!1}else ee?(Le&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,bt.width,bt.height),Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,Yt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,jt,bt.width,bt.height,0,Bt,Yt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,oe[0].width,oe[0].height,bt.depth);for(let dt=0,St=oe.length;dt<St;dt++)if(Ot=oe[dt],T.format!==mi)if(Bt!==null)if(ee){if(Y)if(T.layerUpdates.size>0){const Pt=k_(Ot.width,Ot.height,T.format,T.type);for(const Lt of T.layerUpdates){const ie=Ot.data.subarray(Lt*Pt/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,Lt,Ot.width,Ot.height,1,Bt,ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Ot.width,Ot.height,bt.depth,Bt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,jt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Ot.width,Ot.height,bt.depth,Bt,Yt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,jt,Ot.width,Ot.height,bt.depth,0,Bt,Yt,Ot.data)}else{ee&&Le&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,oe[0].width,oe[0].height);for(let dt=0,St=oe.length;dt<St;dt++)Ot=oe[dt],T.format!==mi?Bt!==null?ee?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Y&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Bt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,dt,jt,Ot.width,Ot.height,0,Bt,Yt,Ot.data)}else if(T.isDataArrayTexture)if(ee){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,bt.width,bt.height,bt.depth),Y)if(T.layerUpdates.size>0){const dt=k_(bt.width,bt.height,T.format,T.type);for(const St of T.layerUpdates){const Pt=bt.data.subarray(St*dt/bt.data.BYTES_PER_ELEMENT,(St+1)*dt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,bt.width,bt.height,1,Bt,Yt,Pt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Yt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,bt.width,bt.height,bt.depth,0,Bt,Yt,bt.data);else if(T.isData3DTexture)ee?(Le&&i.texStorage3D(o.TEXTURE_3D,Ut,jt,bt.width,bt.height,bt.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Yt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,bt.width,bt.height,bt.depth,0,Bt,Yt,bt.data);else if(T.isFramebufferTexture){if(Le)if(ee)i.texStorage2D(o.TEXTURE_2D,Ut,jt,bt.width,bt.height);else{let dt=bt.width,St=bt.height;for(let Pt=0;Pt<Ut;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,jt,dt,St,0,Bt,Yt,null),dt>>=1,St>>=1}}else if(oe.length>0){if(ee&&Le){const dt=Ht(oe[0]);i.texStorage2D(o.TEXTURE_2D,Ut,jt,dt.width,dt.height)}for(let dt=0,St=oe.length;dt<St;dt++)Ot=oe[dt],ee?Y&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Bt,Yt,Ot):i.texImage2D(o.TEXTURE_2D,dt,jt,Bt,Yt,Ot);T.generateMipmaps=!1}else if(ee){if(Le){const dt=Ht(bt);i.texStorage2D(o.TEXTURE_2D,Ut,jt,dt.width,dt.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Yt,bt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Bt,Yt,bt);y(T)&&_(xt),Nt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function tt(L,T,ot){if(T.image.length!==6)return;const xt=vt(L,T),Et=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ot);const gt=r.get(Et);if(Et.version!==gt.__version||xt===!0){i.activeTexture(o.TEXTURE0+ot);const Nt=be.getPrimaries(be.workingColorSpace),Rt=T.colorSpace===Ba?null:be.getPrimaries(T.colorSpace),Ft=T.colorSpace===Ba||Nt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let St=0;St<6;St++)!Qt&&!bt?Bt[St]=R(T.image[St],!0,l.maxCubemapSize):Bt[St]=bt?T.image[St].image:T.image[St],Bt[St]=Ue(T,Bt[St]);const Yt=Bt[0],jt=u.convert(T.format,T.colorSpace),Ot=u.convert(T.type),oe=O(T.internalFormat,jt,Ot,T.colorSpace),ee=T.isVideoTexture!==!0,Le=gt.__version===void 0||xt===!0,Y=Et.dataReady;let Ut=k(T,Yt);nt(o.TEXTURE_CUBE_MAP,T);let dt;if(Qt){ee&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,Yt.width,Yt.height);for(let St=0;St<6;St++){dt=Bt[St].mipmaps;for(let Pt=0;Pt<dt.length;Pt++){const Lt=dt[Pt];T.format!==mi?jt!==null?ee?Y&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,Lt.width,Lt.height,jt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,oe,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,Lt.width,Lt.height,jt,Ot,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,oe,Lt.width,Lt.height,0,jt,Ot,Lt.data)}}}else{if(dt=T.mipmaps,ee&&Le){dt.length>0&&Ut++;const St=Ht(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,St.width,St.height)}for(let St=0;St<6;St++)if(bt){ee?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Bt[St].width,Bt[St].height,jt,Ot,Bt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,oe,Bt[St].width,Bt[St].height,0,jt,Ot,Bt[St].data);for(let Pt=0;Pt<dt.length;Pt++){const ie=dt[Pt].image[St].image;ee?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,ie.width,ie.height,jt,Ot,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,oe,ie.width,ie.height,0,jt,Ot,ie.data)}}else{ee?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,jt,Ot,Bt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,oe,jt,Ot,Bt[St]);for(let Pt=0;Pt<dt.length;Pt++){const Lt=dt[Pt];ee?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,jt,Ot,Lt.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,oe,jt,Ot,Lt.image[St])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),gt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ft(L,T,ot,xt,Et,gt){const Nt=u.convert(ot.format,ot.colorSpace),Rt=u.convert(ot.type),Ft=O(ot.internalFormat,Nt,Rt,ot.colorSpace),Qt=r.get(T),bt=r.get(ot);if(bt.__renderTarget=T,!Qt.__hasExternalTextures){const Bt=Math.max(1,T.width>>gt),Yt=Math.max(1,T.height>>gt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,gt,Ft,Bt,Yt,T.depth,0,Nt,Rt,null):i.texImage2D(Et,gt,Ft,Bt,Yt,0,Nt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,Et,bt.__webglTexture,0,me(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,Et,bt.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(L,T,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const xt=T.depthTexture,Et=xt&&xt.isDepthTexture?xt.type:null,gt=U(T.stencilBuffer,Et),Nt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=me(T);ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,gt,T.width,T.height):ot?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,gt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,gt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,L)}else{const xt=T.textures;for(let Et=0;Et<xt.length;Et++){const gt=xt[Et],Nt=u.convert(gt.format,gt.colorSpace),Rt=u.convert(gt.type),Ft=O(gt.internalFormat,Nt,Rt,gt.colorSpace),Qt=me(T);ot&&ne(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Ft,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,Ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(T.depthTexture);xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),rt(T.depthTexture,0);const Et=xt.__webglTexture,gt=me(T);if(T.depthTexture.format===wo)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Do)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Jt(L){const T=r.get(L),ot=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const xt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xt.removeEventListener("dispose",Et)};xt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=xt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");const xt=L.texture.mipmaps;xt&&xt.length>0?At(T.__webglFramebuffer[0],L):At(T.__webglFramebuffer,L)}else if(ot){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]===void 0)T.__webglDepthbuffer[xt]=o.createRenderbuffer(),Mt(T.__webglDepthbuffer[xt],L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,gt)}}else{const xt=L.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Mt(T.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,gt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(L,T,ot){const xt=r.get(L);T!==void 0&&ft(xt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&Jt(L)}function ye(L){const T=L.texture,ot=r.get(L),xt=r.get(T);L.addEventListener("dispose",H);const Et=L.textures,gt=L.isWebGLCubeRenderTarget===!0,Nt=Et.length>1;if(Nt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=T.version,h.memory.textures++),gt){ot.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){ot.__webglFramebuffer[Rt]=[];for(let Ft=0;Ft<T.mipmaps.length;Ft++)ot.__webglFramebuffer[Rt][Ft]=o.createFramebuffer()}else ot.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)ot.__webglFramebuffer[Rt]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let Rt=0,Ft=Et.length;Rt<Ft;Rt++){const Qt=r.get(Et[Rt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&ne(L)===!1){ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const Ft=Et[Rt];ot.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[Rt]);const Qt=u.convert(Ft.format,Ft.colorSpace),bt=u.convert(Ft.type),Bt=O(Ft.internalFormat,Qt,bt,Ft.colorSpace,L.isXRRenderTarget===!0),Yt=me(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Bt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,ot.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(ot.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)ft(ot.__webglFramebuffer[Rt][Ft],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft);else ft(ot.__webglFramebuffer[Rt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let Rt=0,Ft=Et.length;Rt<Ft;Rt++){const Qt=Et[Rt],bt=r.get(Qt);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),nt(o.TEXTURE_2D,Qt),ft(ot.__webglFramebuffer,L,Qt,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),y(Qt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,xt.__webglTexture),nt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)ft(ot.__webglFramebuffer[Ft],L,T,o.COLOR_ATTACHMENT0,Rt,Ft);else ft(ot.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Rt,0);y(T)&&_(Rt),i.unbindTexture()}L.depthBuffer&&Jt(L)}function pe(L){const T=L.textures;for(let ot=0,xt=T.length;ot<xt;ot++){const Et=T[ot];if(y(Et)){const gt=B(L),Nt=r.get(Et).__webglTexture;i.bindTexture(gt,Nt),_(gt),i.unbindTexture()}}}const ce=[],F=[];function Ln(L){if(L.samples>0){if(ne(L)===!1){const T=L.textures,ot=L.width,xt=L.height;let Et=o.COLOR_BUFFER_BIT;const gt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=r.get(L),Rt=T.length>1;if(Rt)for(let Qt=0;Qt<T.length;Qt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ft=L.texture.mipmaps;Ft&&Ft.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Qt]);const bt=r.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,ot,xt,0,0,ot,xt,Et,o.NEAREST),m===!0&&(ce.length=0,F.length=0,ce.push(o.COLOR_ATTACHMENT0+Qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ce.push(gt),F.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Qt=0;Qt<T.length;Qt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Qt]);const bt=r.get(T[Qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function me(L){return Math.min(l.maxSamples,L.samples)}function ne(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ue(L,T){const ot=L.colorSpace,xt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ot!==_s&&ot!==Ba&&(be.getTransfer(ot)===ze?(xt!==mi||Et!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),T}function Ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=rt,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=ne}function cA(o,e){function i(r,l=Ba){let u;const h=be.getTransfer(l);if(r===Ci)return o.UNSIGNED_BYTE;if(r===vd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===xd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===S0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===v0)return o.BYTE;if(r===x0)return o.SHORT;if(r===Ro)return o.UNSIGNED_SHORT;if(r===_d)return o.INT;if(r===vr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===y0)return o.ALPHA;if(r===M0)return o.RGB;if(r===mi)return o.RGBA;if(r===wo)return o.DEPTH_COMPONENT;if(r===Do)return o.DEPTH_STENCIL;if(r===E0)return o.RED;if(r===Sd)return o.RED_INTEGER;if(r===T0)return o.RG;if(r===yd)return o.RG_INTEGER;if(r===Md)return o.RGBA_INTEGER;if(r===Sc||r===yc||r===Mc||r===Ec)if(h===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fh||r===Hh||r===Gh||r===Vh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Fh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kh||r===Xh||r===Wh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===kh||r===Xh)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Wh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$h)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===td)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ed)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===id)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ad)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tc||r===sd||r===od)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Tc)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===od)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===b0||r===ld||r===cd||r===ud)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ld)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ud)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const uA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Un,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new aa({vertexShader:uA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Pc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dA extends xs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,b=null;const R=new hA,y=i.getContextAttributes();let _=null,B=null;const O=[],U=[],k=new Ae;let I=null;const H=new Kn;H.viewport=new Be;const $=new Kn;$.viewport=new Be;const D=[H,$],A=new Oy;let P=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=O[W];return tt===void 0&&(tt=new dh,O[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=O[W];return tt===void 0&&(tt=new dh,O[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=O[W];return tt===void 0&&(tt=new dh,O[W]=tt),tt.getHandSpace()};function q(W){const tt=U.indexOf(W.inputSource);if(tt===-1)return;const ft=O[tt];ft!==void 0&&(ft.update(W.inputSource,W.frame,p||h),ft.dispatchEvent({type:W.type,data:W.inputSource}))}function at(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",at),l.removeEventListener("inputsourceschange",rt);for(let W=0;W<O.length;W++){const tt=U[W];tt!==null&&(U[W]=null,O[W].disconnect(tt))}P=null,j=null,R.reset(),e.setRenderTarget(_),M=null,x=null,v=null,l=null,B=null,vt.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",at),l.addEventListener("inputsourceschange",rt),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Mt=null,At=null;y.depth&&(At=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=y.stencil?Do:wo,Mt=y.stencil?Co:vr);const Jt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Jt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new xr(x.textureWidth,x.textureHeight,{format:mi,type:Ci,depthTexture:new I0(x.textureWidth,x.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ft={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new xr(M.framebufferWidth,M.framebufferHeight,{format:mi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),vt.setContext(l),vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function rt(W){for(let tt=0;tt<W.removed.length;tt++){const ft=W.removed[tt],Mt=U.indexOf(ft);Mt>=0&&(U[Mt]=null,O[Mt].disconnect(ft))}for(let tt=0;tt<W.added.length;tt++){const ft=W.added[tt];let Mt=U.indexOf(ft);if(Mt===-1){for(let Jt=0;Jt<O.length;Jt++)if(Jt>=U.length){U.push(ft),Mt=Jt;break}else if(U[Jt]===null){U[Jt]=ft,Mt=Jt;break}if(Mt===-1)break}const At=O[Mt];At&&At.connect(ft)}}const N=new et,X=new et;function V(W,tt,ft){N.setFromMatrixPosition(tt.matrixWorld),X.setFromMatrixPosition(ft.matrixWorld);const Mt=N.distanceTo(X),At=tt.projectionMatrix.elements,Jt=ft.projectionMatrix.elements,Vt=At[14]/(At[10]-1),ye=At[14]/(At[10]+1),pe=(At[9]+1)/At[5],ce=(At[9]-1)/At[5],F=(At[8]-1)/At[0],Ln=(Jt[8]+1)/Jt[0],me=Vt*F,ne=Vt*Ln,Xt=Mt/(-F+Ln),Ue=Xt*-F;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ue),W.translateZ(Xt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),At[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Ht=Vt+Xt,L=ye+Xt,T=me-Ue,ot=ne+(Mt-Ue),xt=pe*ye/L*Ht,Et=ce*ye/L*Ht;W.projectionMatrix.makePerspective(T,ot,xt,Et,Ht,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function pt(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let tt=W.near,ft=W.far;R.texture!==null&&(R.depthNear>0&&(tt=R.depthNear),R.depthFar>0&&(ft=R.depthFar)),A.near=$.near=H.near=tt,A.far=$.far=H.far=ft,(P!==A.near||j!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,j=A.far),H.layers.mask=W.layers.mask|2,$.layers.mask=W.layers.mask|4,A.layers.mask=H.layers.mask|$.layers.mask;const Mt=W.parent,At=A.cameras;pt(A,Mt);for(let Jt=0;Jt<At.length;Jt++)pt(At[Jt],Mt);At.length===2?V(A,H,$):A.projectionMatrix.copy(H.projectionMatrix),w(W,A,Mt)};function w(W,tt,ft){ft===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(ft.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(W){m=W,x!==null&&(x.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let Z=null;function nt(W,tt){if(g=tt.getViewerPose(p||h),b=tt,g!==null){const ft=g.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let Mt=!1;ft.length!==A.cameras.length&&(A.cameras.length=0,Mt=!0);for(let Vt=0;Vt<ft.length;Vt++){const ye=ft[Vt];let pe=null;if(M!==null)pe=M.getViewport(ye);else{const F=v.getViewSubImage(x,ye);pe=F.viewport,Vt===0&&(e.setRenderTargetTextures(B,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(B))}let ce=D[Vt];ce===void 0&&(ce=new Kn,ce.layers.enable(Vt),ce.viewport=new Be,D[Vt]=ce),ce.matrix.fromArray(ye.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(pe.x,pe.y,pe.width,pe.height),Vt===0&&(A.matrix.copy(ce.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Mt===!0&&A.cameras.push(ce)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Vt=v.getDepthInformation(ft[0]);Vt&&Vt.isValid&&Vt.texture&&R.init(e,Vt,l.renderState)}}for(let ft=0;ft<O.length;ft++){const Mt=U[ft],At=O[ft];Mt!==null&&At!==void 0&&At.update(Mt,tt,p||h)}Z&&Z(W,tt),tt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:tt}),b=null}const vt=new G0;vt.setAnimationLoop(nt),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}const fr=new ia,pA=new ke;function mA(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,O0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),O=B.envMap,U=B.envMapRotation;O&&(y.envMap.value=O,fr.copy(U),fr.x*=-1,fr.y*=-1,fr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),y.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(fr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function gA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const U=O.program;r.uniformBlockBinding(B,U)}function p(B,O){let U=l[B.id];U===void 0&&(b(B),U=g(B),l[B.id]=U,B.addEventListener("dispose",y));const k=O.program;r.updateUBOMapping(B,k);const I=e.render.frame;u[B.id]!==I&&(x(B),u[B.id]=I)}function g(B){const O=v();B.__bindingPointIndex=O;const U=o.createBuffer(),k=B.__size,I=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,k,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const O=l[B.id],U=B.uniforms,k=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,H=U.length;I<H;I++){const $=Array.isArray(U[I])?U[I]:[U[I]];for(let D=0,A=$.length;D<A;D++){const P=$[D];if(M(P,I,D,k)===!0){const j=P.__offset,q=Array.isArray(P.value)?P.value:[P.value];let at=0;for(let rt=0;rt<q.length;rt++){const N=q[rt],X=R(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,j+at,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,at),at+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,O,U,k){const I=B.value,H=O+"_"+U;if(k[H]===void 0)return typeof I=="number"||typeof I=="boolean"?k[H]=I:k[H]=I.clone(),!0;{const $=k[H];if(typeof I=="number"||typeof I=="boolean"){if($!==I)return k[H]=I,!0}else if($.equals(I)===!1)return $.copy(I),!0}return!1}function b(B){const O=B.uniforms;let U=0;const k=16;for(let H=0,$=O.length;H<$;H++){const D=Array.isArray(O[H])?O[H]:[O[H]];for(let A=0,P=D.length;A<P;A++){const j=D[A],q=Array.isArray(j.value)?j.value:[j.value];for(let at=0,rt=q.length;at<rt;at++){const N=q[at],X=R(N),V=U%k,pt=V%X.boundary,w=V+pt;U+=pt,w!==0&&k-w<X.storage&&(U+=k-w),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=U,U+=X.storage}}}const I=U%k;return I>0&&(U+=k-I),B.__size=U,B.__cache={},this}function R(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function y(B){const O=B.target;O.removeEventListener("dispose",y);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class _A{constructor(e={}){const{canvas:i=YS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let k=!1;this._outputColorSpace=ri;let I=0,H=0,$=null,D=-1,A=null;const P=new Be,j=new Be;let q=null;const at=new Ce(0);let rt=0,N=i.width,X=i.height,V=1,pt=null,w=null;const Z=new Be(0,0,N,X),nt=new Be(0,0,N,X);let vt=!1;const W=new bd;let tt=!1,ft=!1;const Mt=new ke,At=new ke,Jt=new et,Vt=new Be,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function ce(){return $===null?V:1}let F=r;function Ln(C,Q){return i.getContext(C,Q)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gd}`),i.addEventListener("webglcontextlost",St,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),F===null){const Q="webgl2";if(F=Ln(Q,C),F===null)throw Ln(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let me,ne,Xt,Ue,Ht,L,T,ot,xt,Et,gt,Nt,Rt,Ft,Qt,bt,Bt,Yt,jt,Ot,oe,ee,Le,Y;function Ut(){me=new RT(F),me.init(),ee=new cA(F,me),ne=new ST(F,me,e,ee),Xt=new oA(F,me),ne.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),Ue=new DT(F),Ht=new Zb,L=new lA(F,me,Xt,Ht,ne,ee,Ue),T=new MT(U),ot=new AT(U),xt=new zy(F),Le=new vT(F,xt),Et=new CT(F,xt,Ue,Le),gt=new LT(F,Et,xt,Ue),jt=new UT(F,ne,L),bt=new yT(Ht),Nt=new Yb(U,T,ot,me,ne,Le,bt),Rt=new mA(U,Ht),Ft=new Kb,Qt=new nA(me),Yt=new _T(U,T,ot,Xt,gt,M,m),Bt=new rA(U,gt,ne),Y=new gA(F,Ue,ne,Xt),Ot=new xT(F,me,Ue),oe=new wT(F,me,Ue),Ue.programs=Nt.programs,U.capabilities=ne,U.extensions=me,U.properties=Ht,U.renderLists=Ft,U.shadowMap=Bt,U.state=Xt,U.info=Ue}Ut();const dt=new dA(U,F);this.xr=dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(N,X,!1))},this.getSize=function(C){return C.set(N,X)},this.setSize=function(C,Q,ut=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,X=Q,i.width=Math.floor(C*V),i.height=Math.floor(Q*V),ut===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(N*V,X*V).floor()},this.setDrawingBufferSize=function(C,Q,ut){N=C,X=Q,V=ut,i.width=Math.floor(C*ut),i.height=Math.floor(Q*ut),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,Q,ut,ht){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,Q,ut,ht),Xt.viewport(P.copy(Z).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(nt)},this.setScissor=function(C,Q,ut,ht){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,Q,ut,ht),Xt.scissor(j.copy(nt).multiplyScalar(V).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(C){Xt.setScissorTest(vt=C)},this.setOpaqueSort=function(C){pt=C},this.setTransparentSort=function(C){w=C},this.getClearColor=function(C){return C.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,ut=!0){let ht=0;if(C){let J=!1;if($!==null){const Tt=$.texture.format;J=Tt===Md||Tt===yd||Tt===Sd}if(J){const Tt=$.texture.type,Ct=Tt===Ci||Tt===vr||Tt===Ro||Tt===Co||Tt===vd||Tt===xd,wt=Yt.getClearColor(),zt=Yt.getClearAlpha(),$t=wt.r,Wt=wt.g,kt=wt.b;Ct?(b[0]=$t,b[1]=Wt,b[2]=kt,b[3]=zt,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=$t,R[1]=Wt,R[2]=kt,R[3]=zt,F.clearBufferiv(F.COLOR,0,R))}else ht|=F.COLOR_BUFFER_BIT}Q&&(ht|=F.DEPTH_BUFFER_BIT),ut&&(ht|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",St,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Yt.dispose(),Ft.dispose(),Qt.dispose(),Ht.dispose(),T.dispose(),ot.dispose(),gt.dispose(),Le.dispose(),Y.dispose(),Nt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",an),dt.removeEventListener("sessionend",_n),Nn.stop()};function St(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const C=Ue.autoReset,Q=Bt.enabled,ut=Bt.autoUpdate,ht=Bt.needsUpdate,J=Bt.type;Ut(),Ue.autoReset=C,Bt.enabled=Q,Bt.autoUpdate=ut,Bt.needsUpdate=ht,Bt.type=J}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const Q=C.target;Q.removeEventListener("dispose",ie),He(Q)}function He(C){Je(C),Ht.remove(C)}function Je(C){const Q=Ht.get(C).programs;Q!==void 0&&(Q.forEach(function(ut){Nt.releaseProgram(ut)}),C.isShaderMaterial&&Nt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ut,ht,J,Tt){Q===null&&(Q=ye);const Ct=J.isMesh&&J.matrixWorld.determinant()<0,wt=ka(C,Q,ut,ht,J);Xt.setMaterial(ht,Ct);let zt=ut.index,$t=1;if(ht.wireframe===!0){if(zt=Et.getWireframeAttribute(ut),zt===void 0)return;$t=2}const Wt=ut.drawRange,kt=ut.attributes.position;let fe=Wt.start*$t,Ee=(Wt.start+Wt.count)*$t;Tt!==null&&(fe=Math.max(fe,Tt.start*$t),Ee=Math.min(Ee,(Tt.start+Tt.count)*$t)),zt!==null?(fe=Math.max(fe,0),Ee=Math.min(Ee,zt.count)):kt!=null&&(fe=Math.max(fe,0),Ee=Math.min(Ee,kt.count));const We=Ee-fe;if(We<0||We===1/0)return;Le.setup(J,ht,wt,ut,zt);let ge,_e=Ot;if(zt!==null&&(ge=xt.get(zt),_e=oe,_e.setIndex(ge)),J.isMesh)ht.wireframe===!0?(Xt.setLineWidth(ht.wireframeLinewidth*ce()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(J.isLine){let qt=ht.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*ce()),J.isLineSegments?_e.setMode(F.LINES):J.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else J.isPoints?_e.setMode(F.POINTS):J.isSprite&&_e.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Ac("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))_e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const qt=J._multiDrawStarts,Ye=J._multiDrawCounts,Se=J._multiDrawCount,Mn=zt?xt.get(zt).bytesPerElement:1,la=Ht.get(ht).currentProgram.getUniforms();for(let Ge=0;Ge<Se;Ge++)la.setValue(F,"_gl_DrawID",Ge),_e.render(qt[Ge]/Mn,Ye[Ge])}else if(J.isInstancedMesh)_e.renderInstances(fe,We,J.count);else if(ut.isInstancedBufferGeometry){const qt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ye=Math.min(ut.instanceCount,qt);_e.renderInstances(fe,We,Ye)}else _e.render(fe,We)};function Me(C,Q,ut){C.transparent===!0&&C.side===bi&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,sa(C,Q,ut),C.side=Ha,C.needsUpdate=!0,sa(C,Q,ut),C.side=bi):sa(C,Q,ut)}this.compile=function(C,Q,ut=null){ut===null&&(ut=C),_=Qt.get(ut),_.init(Q),O.push(_),ut.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),C!==ut&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const ht=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const wt=Tt[Ct];Me(wt,ut,J),ht.add(wt)}else Me(Tt,ut,J),ht.add(Tt)}),_=O.pop(),ht},this.compileAsync=function(C,Q,ut=null){const ht=this.compile(C,Q,ut);return new Promise(J=>{function Tt(){if(ht.forEach(function(Ct){Ht.get(Ct).currentProgram.isReady()&&ht.delete(Ct)}),ht.size===0){J(C);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Hn=null;function un(C){Hn&&Hn(C)}function an(){Nn.stop()}function _n(){Nn.start()}const Nn=new G0;Nn.setAnimationLoop(un),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(C){Hn=C,dt.setAnimationLoop(C),C===null?Nn.stop():Nn.start()},dt.addEventListener("sessionstart",an),dt.addEventListener("sessionend",_n),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Q),Q=dt.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,Q,$),_=Qt.get(C,O.length),_.init(Q),O.push(_),At.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W.setFromProjectionMatrix(At),ft=this.localClippingEnabled,tt=bt.init(this.clippingPlanes,ft),y=Ft.get(C,B.length),y.init(),B.push(y),dt.enabled===!0&&dt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Ga(Tt,Q,-1/0,U.sortObjects)}Ga(C,Q,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(pt,w),pe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,pe&&Yt.addToRenderList(y,C),this.info.render.frame++,tt===!0&&bt.beginShadows();const ut=_.state.shadowsArray;Bt.render(ut,C,Q),tt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=y.opaque,J=y.transmissive;if(_.setupLights(),Q.isArrayCamera){const Tt=Q.cameras;if(J.length>0)for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];Bo(ht,J,C,zt)}pe&&Yt.render(C);for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];zo(y,C,zt,zt.viewport)}}else J.length>0&&Bo(ht,J,C,Q),pe&&Yt.render(C),zo(y,C,Q);$!==null&&H===0&&(L.updateMultisampleRenderTarget($),L.updateRenderTargetMipmap($)),C.isScene===!0&&C.onAfterRender(U,C,Q),Le.resetDefaultState(),D=-1,A=null,O.pop(),O.length>0?(_=O[O.length-1],tt===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Ga(C,Q,ut,ht){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ut=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){ht&&Vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(At);const Ct=gt.update(C),wt=C.material;wt.visible&&y.push(C,Ct,wt,ut,Vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Ct=gt.update(C),wt=C.material;if(ht&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Vt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Vt.copy(Ct.boundingSphere.center)),Vt.applyMatrix4(C.matrixWorld).applyMatrix4(At)),Array.isArray(wt)){const zt=Ct.groups;for(let $t=0,Wt=zt.length;$t<Wt;$t++){const kt=zt[$t],fe=wt[kt.materialIndex];fe&&fe.visible&&y.push(C,Ct,fe,ut,Vt.z,kt)}}else wt.visible&&y.push(C,Ct,wt,ut,Vt.z,null)}}const Tt=C.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)Ga(Tt[Ct],Q,ut,ht)}function zo(C,Q,ut,ht){const J=C.opaque,Tt=C.transmissive,Ct=C.transparent;_.setupLightsView(ut),tt===!0&&bt.setGlobalState(U.clippingPlanes,ut),ht&&Xt.viewport(P.copy(ht)),J.length>0&&Va(J,Q,ut),Tt.length>0&&Va(Tt,Q,ut),Ct.length>0&&Va(Ct,Q,ut),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Bo(C,Q,ut,ht){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ht.id]===void 0&&(_.state.transmissionRenderTarget[ht.id]=new xr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Uo:Ci,minFilter:_r,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[ht.id],Ct=ht.viewport||P;Tt.setSize(Ct.z*U.transmissionResolutionScale,Ct.w*U.transmissionResolutionScale);const wt=U.getRenderTarget();U.setRenderTarget(Tt),U.getClearColor(at),rt=U.getClearAlpha(),rt<1&&U.setClearColor(16777215,.5),U.clear(),pe&&Yt.render(ut);const zt=U.toneMapping;U.toneMapping=Fa;const $t=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),_.setupLightsView(ht),tt===!0&&bt.setGlobalState(U.clippingPlanes,ht),Va(C,ut,ht),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,fe=Q.length;kt<fe;kt++){const Ee=Q[kt],We=Ee.object,ge=Ee.geometry,_e=Ee.material,qt=Ee.group;if(_e.side===bi&&We.layers.test(ht.layers)){const Ye=_e.side;_e.side=Fn,_e.needsUpdate=!0,ra(We,ut,ht,ge,_e,qt),_e.side=Ye,_e.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}U.setRenderTarget(wt),U.setClearColor(at,rt),$t!==void 0&&(ht.viewport=$t),U.toneMapping=zt}function Va(C,Q,ut){const ht=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Tt=C.length;J<Tt;J++){const Ct=C[J],wt=Ct.object,zt=Ct.geometry,$t=Ct.group;let Wt=Ct.material;Wt.allowOverride===!0&&ht!==null&&(Wt=ht),wt.layers.test(ut.layers)&&ra(wt,Q,ut,zt,Wt,$t)}}function ra(C,Q,ut,ht,J,Tt){C.onBeforeRender(U,Q,ut,ht,J,Tt),C.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(U,Q,ut,ht,C,Tt),J.transparent===!0&&J.side===bi&&J.forceSinglePass===!1?(J.side=Fn,J.needsUpdate=!0,U.renderBufferDirect(ut,Q,ht,J,C,Tt),J.side=Ha,J.needsUpdate=!0,U.renderBufferDirect(ut,Q,ht,J,C,Tt),J.side=bi):U.renderBufferDirect(ut,Q,ht,J,C,Tt),C.onAfterRender(U,Q,ut,ht,J,Tt)}function sa(C,Q,ut){Q.isScene!==!0&&(Q=ye);const ht=Ht.get(C),J=_.state.lights,Tt=_.state.shadowsArray,Ct=J.state.version,wt=Nt.getParameters(C,J.state,Tt,Q,ut),zt=Nt.getProgramCacheKey(wt);let $t=ht.programs;ht.environment=C.isMeshStandardMaterial?Q.environment:null,ht.fog=Q.fog,ht.envMap=(C.isMeshStandardMaterial?ot:T).get(C.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",ie),$t=new Map,ht.programs=$t);let Wt=$t.get(zt);if(Wt!==void 0){if(ht.currentProgram===Wt&&ht.lightsStateVersion===Ct)return Di(C,wt),Wt}else wt.uniforms=Nt.getUniforms(C),C.onBeforeCompile(wt,U),Wt=Nt.acquireProgram(wt,zt),$t.set(zt,Wt),ht.uniforms=wt.uniforms;const kt=ht.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=bt.uniform),Di(C,wt),ht.needsLights=$e(C),ht.lightsStateVersion=Ct,ht.needsLights&&(kt.ambientLightColor.value=J.state.ambient,kt.lightProbe.value=J.state.probe,kt.directionalLights.value=J.state.directional,kt.directionalLightShadows.value=J.state.directionalShadow,kt.spotLights.value=J.state.spot,kt.spotLightShadows.value=J.state.spotShadow,kt.rectAreaLights.value=J.state.rectArea,kt.ltc_1.value=J.state.rectAreaLTC1,kt.ltc_2.value=J.state.rectAreaLTC2,kt.pointLights.value=J.state.point,kt.pointLightShadows.value=J.state.pointShadow,kt.hemisphereLights.value=J.state.hemi,kt.directionalShadowMap.value=J.state.directionalShadowMap,kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,kt.spotShadowMap.value=J.state.spotShadowMap,kt.spotLightMatrix.value=J.state.spotLightMatrix,kt.spotLightMap.value=J.state.spotLightMap,kt.pointShadowMap.value=J.state.pointShadowMap,kt.pointShadowMatrix.value=J.state.pointShadowMatrix),ht.currentProgram=Wt,ht.uniformsList=null,Wt}function wi(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Rc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function Di(C,Q){const ut=Ht.get(C);ut.outputColorSpace=Q.outputColorSpace,ut.batching=Q.batching,ut.batchingColor=Q.batchingColor,ut.instancing=Q.instancing,ut.instancingColor=Q.instancingColor,ut.instancingMorph=Q.instancingMorph,ut.skinning=Q.skinning,ut.morphTargets=Q.morphTargets,ut.morphNormals=Q.morphNormals,ut.morphColors=Q.morphColors,ut.morphTargetsCount=Q.morphTargetsCount,ut.numClippingPlanes=Q.numClippingPlanes,ut.numIntersection=Q.numClipIntersection,ut.vertexAlphas=Q.vertexAlphas,ut.vertexTangents=Q.vertexTangents,ut.toneMapping=Q.toneMapping}function ka(C,Q,ut,ht,J){Q.isScene!==!0&&(Q=ye),L.resetTextureUnits();const Tt=Q.fog,Ct=ht.isMeshStandardMaterial?Q.environment:null,wt=$===null?U.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:_s,zt=(ht.isMeshStandardMaterial?ot:T).get(ht.envMap||Ct),$t=ht.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Wt=!!ut.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),kt=!!ut.morphAttributes.position,fe=!!ut.morphAttributes.normal,Ee=!!ut.morphAttributes.color;let We=Fa;ht.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(We=U.toneMapping);const ge=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,_e=ge!==void 0?ge.length:0,qt=Ht.get(ht),Ye=_.state.lights;if(tt===!0&&(ft===!0||C!==A)){const fn=C===A&&ht.id===D;bt.setState(ht,C,fn)}let Se=!1;ht.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ye.state.version||qt.outputColorSpace!==wt||J.isBatchedMesh&&qt.batching===!1||!J.isBatchedMesh&&qt.batching===!0||J.isBatchedMesh&&qt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&qt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&qt.instancing===!1||!J.isInstancedMesh&&qt.instancing===!0||J.isSkinnedMesh&&qt.skinning===!1||!J.isSkinnedMesh&&qt.skinning===!0||J.isInstancedMesh&&qt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qt.instancingMorph===!1&&J.morphTexture!==null||qt.envMap!==zt||ht.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Wt||qt.morphTargets!==kt||qt.morphNormals!==fe||qt.morphColors!==Ee||qt.toneMapping!==We||qt.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,qt.__version=ht.version);let Mn=qt.currentProgram;Se===!0&&(Mn=sa(ht,Q,J));let la=!1,Ge=!1,Li=!1;const Ie=Mn.getUniforms(),En=qt.uniforms;if(Xt.useProgram(Mn.program)&&(la=!0,Ge=!0,Li=!0),ht.id!==D&&(D=ht.id,Ge=!0),la||A!==C){Xt.buffers.depth.getReversed()?(Mt.copy(C.projectionMatrix),jS(Mt),KS(Mt),Ie.setValue(F,"projectionMatrix",Mt)):Ie.setValue(F,"projectionMatrix",C.projectionMatrix),Ie.setValue(F,"viewMatrix",C.matrixWorldInverse);const vn=Ie.map.cameraPosition;vn!==void 0&&vn.setValue(F,Jt.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ie.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Ge=!0,Li=!0)}if(J.isSkinnedMesh){Ie.setOptional(F,J,"bindMatrix"),Ie.setOptional(F,J,"bindMatrixInverse");const fn=J.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ie.setValue(F,"boneTexture",fn.boneTexture,L))}J.isBatchedMesh&&(Ie.setOptional(F,J,"batchingTexture"),Ie.setValue(F,"batchingTexture",J._matricesTexture,L),Ie.setOptional(F,J,"batchingIdTexture"),Ie.setValue(F,"batchingIdTexture",J._indirectTexture,L),Ie.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&Ie.setValue(F,"batchingColorTexture",J._colorsTexture,L));const rn=ut.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&jt.update(J,ut,Mn),(Ge||qt.receiveShadow!==J.receiveShadow)&&(qt.receiveShadow=J.receiveShadow,Ie.setValue(F,"receiveShadow",J.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(En.envMap.value=zt,En.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&Q.environment!==null&&(En.envMapIntensity.value=Q.environmentIntensity),Ge&&(Ie.setValue(F,"toneMappingExposure",U.toneMappingExposure),qt.needsLights&&oa(En,Li),Tt&&ht.fog===!0&&Rt.refreshFogUniforms(En,Tt),Rt.refreshMaterialUniforms(En,ht,V,X,_.state.transmissionRenderTarget[C.id]),Rc.upload(F,wi(qt),En,L)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Rc.upload(F,wi(qt),En,L),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ie.setValue(F,"center",J.center),Ie.setValue(F,"modelViewMatrix",J.modelViewMatrix),Ie.setValue(F,"normalMatrix",J.normalMatrix),Ie.setValue(F,"modelMatrix",J.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const fn=ht.uniformsGroups;for(let vn=0,vi=fn.length;vn<vi;vn++){const Ni=fn[vn];Y.update(Ni,Mn),Y.bind(Ni,Mn)}}return Mn}function oa(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function $e(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,Q,ut){const ht=Ht.get(C);ht.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),Ht.get(C.texture).__webglTexture=Q,Ht.get(C.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ut,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const ut=Ht.get(C);ut.__webglFramebuffer=Q,ut.__useDefaultFramebuffer=Q===void 0};const Io=F.createFramebuffer();this.setRenderTarget=function(C,Q=0,ut=0){$=C,I=Q,H=ut;let ht=!0,J=null,Tt=!1,Ct=!1;if(C){const zt=Ht.get(C);if(zt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(F.FRAMEBUFFER,null),ht=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(zt.__hasExternalTextures)L.rebindTextures(C,Ht.get(C.texture).__webglTexture,Ht.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&Ht.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const $t=C.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Wt=Ht.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[Q])?J=Wt[Q][ut]:J=Wt[Q],Tt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?J=Ht.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?J=Wt[ut]:J=Wt,P.copy(C.viewport),j.copy(C.scissor),q=C.scissorTest}else P.copy(Z).multiplyScalar(V).floor(),j.copy(nt).multiplyScalar(V).floor(),q=vt;if(ut!==0&&(J=Io),Xt.bindFramebuffer(F.FRAMEBUFFER,J)&&ht&&Xt.drawBuffers(C,J),Xt.viewport(P),Xt.scissor(j),Xt.setScissorTest(q),Tt){const zt=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Q,zt.__webglTexture,ut)}else if(Ct){const zt=Ht.get(C.texture),$t=Q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,ut,$t)}else if(C!==null&&ut!==0){const zt=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,ut)}D=-1},this.readRenderTargetPixels=function(C,Q,ut,ht,J,Tt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Xt.bindFramebuffer(F.FRAMEBUFFER,wt);try{const zt=C.texture,$t=zt.format,Wt=zt.type;if(!ne.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ht&&ut>=0&&ut<=C.height-J&&F.readPixels(Q,ut,ht,J,ee.convert($t),ee.convert(Wt),Tt)}finally{const zt=$!==null?Ht.get($).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ut,ht,J,Tt,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(Q>=0&&Q<=C.width-ht&&ut>=0&&ut<=C.height-J){Xt.bindFramebuffer(F.FRAMEBUFFER,wt);const zt=C.texture,$t=zt.format,Wt=zt.type;if(!ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(Q,ut,ht,J,ee.convert($t),ee.convert(Wt),0);const fe=$!==null?Ht.get($).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,fe);const Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ZS(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(kt),F.deleteSync(Ee),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,ut=0){const ht=Math.pow(2,-ut),J=Math.floor(C.image.width*ht),Tt=Math.floor(C.image.height*ht),Ct=Q!==null?Q.x:0,wt=Q!==null?Q.y:0;L.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,ut,0,0,Ct,wt,J,Tt),Xt.unbindTexture()};const Fo=F.createFramebuffer(),Ui=F.createFramebuffer();this.copyTextureToTexture=function(C,Q,ut=null,ht=null,J=0,Tt=null){Tt===null&&(J!==0?(Ac("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=J,J=0):Tt=0);let Ct,wt,zt,$t,Wt,kt,fe,Ee,We;const ge=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(ut!==null)Ct=ut.max.x-ut.min.x,wt=ut.max.y-ut.min.y,zt=ut.isBox3?ut.max.z-ut.min.z:1,$t=ut.min.x,Wt=ut.min.y,kt=ut.isBox3?ut.min.z:0;else{const rn=Math.pow(2,-J);Ct=Math.floor(ge.width*rn),wt=Math.floor(ge.height*rn),C.isDataArrayTexture?zt=ge.depth:C.isData3DTexture?zt=Math.floor(ge.depth*rn):zt=1,$t=0,Wt=0,kt=0}ht!==null?(fe=ht.x,Ee=ht.y,We=ht.z):(fe=0,Ee=0,We=0);const _e=ee.convert(Q.format),qt=ee.convert(Q.type);let Ye;Q.isData3DTexture?(L.setTexture3D(Q,0),Ye=F.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(L.setTexture2DArray(Q,0),Ye=F.TEXTURE_2D_ARRAY):(L.setTexture2D(Q,0),Ye=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment);const Se=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),la=F.getParameter(F.UNPACK_SKIP_PIXELS),Ge=F.getParameter(F.UNPACK_SKIP_ROWS),Li=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const Ie=C.isDataArrayTexture||C.isData3DTexture,En=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const rn=Ht.get(C),fn=Ht.get(Q),vn=Ht.get(rn.__renderTarget),vi=Ht.get(fn.__renderTarget);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,vn.__webglFramebuffer),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Ni=0;Ni<zt;Ni++)Ie&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(C).__webglTexture,J,kt+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(Q).__webglTexture,Tt,We+Ni)),F.blitFramebuffer($t,Wt,Ct,wt,fe,Ee,Ct,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||Ht.has(C)){const rn=Ht.get(C),fn=Ht.get(Q);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,Fo),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ui);for(let vn=0;vn<zt;vn++)Ie?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,J,kt+vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,J),En?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,Tt,We+vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,Tt),J!==0?F.blitFramebuffer($t,Wt,Ct,wt,fe,Ee,Ct,wt,F.COLOR_BUFFER_BIT,F.NEAREST):En?F.copyTexSubImage3D(Ye,Tt,fe,Ee,We+vn,$t,Wt,Ct,wt):F.copyTexSubImage2D(Ye,Tt,fe,Ee,$t,Wt,Ct,wt);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else En?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ye,Tt,fe,Ee,We,Ct,wt,zt,_e,qt,ge.data):Q.isCompressedArrayTexture?F.compressedTexSubImage3D(Ye,Tt,fe,Ee,We,Ct,wt,zt,_e,ge.data):F.texSubImage3D(Ye,Tt,fe,Ee,We,Ct,wt,zt,_e,qt,ge):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,fe,Ee,Ct,wt,_e,qt,ge.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,fe,Ee,ge.width,ge.height,_e,ge.data):F.texSubImage2D(F.TEXTURE_2D,Tt,fe,Ee,Ct,wt,_e,qt,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,la),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Li),Tt===0&&Q.generateMipmaps&&F.generateMipmap(Ye),Xt.unbindTexture()},this.copyTextureToTexture3D=function(C,Q,ut=null,ht=null,J=0){return Ac('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Q,ut,ht,J)},this.initRenderTarget=function(C){Ht.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){I=0,H=0,$=null,Xt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}function vA(){fi.registerPlugin(Ff);const o=new yy;o.background=null;const e=new Kn(60,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,0,5),e.lookAt(0,0,0);const i=new _A({antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setClearColor(0,0),i.shadowMap.enabled=!0,i.shadowMap.type=m0,document.body.appendChild(i.domElement);const r=i.domElement;r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.zIndex="10",r.style.pointerEvents="none";function l(){const A=document.createElement("canvas");A.width=64,A.height=64;const P=A.getContext("2d"),j=P.createRadialGradient(32,32,0,32,32,32);j.addColorStop(0,"rgba(255, 255, 255, 1)"),j.addColorStop(.1,"rgba(255, 255, 255, 0.95)"),j.addColorStop(.3,"rgba(200, 200, 255, 0.7)"),j.addColorStop(.6,"rgba(140, 140, 230, 0.4)"),j.addColorStop(1,"rgba(40, 40, 120, 0)"),P.fillStyle=j,P.fillRect(0,0,64,64),P.globalCompositeOperation="lighten";const q=P.createLinearGradient(32,0,32,64);q.addColorStop(0,"rgba(100, 100, 230, 0)"),q.addColorStop(.5,"rgba(250, 250, 255, 0.7)"),q.addColorStop(1,"rgba(100, 100, 230, 0)"),P.fillStyle=q,P.fillRect(28,0,8,64);const at=P.createLinearGradient(0,32,64,32);at.addColorStop(0,"rgba(100, 100, 230, 0)"),at.addColorStop(.5,"rgba(250, 250, 255, 0.7)"),at.addColorStop(1,"rgba(100, 100, 230, 0)"),P.fillStyle=at,P.fillRect(0,28,64,8);const rt=new Un(A);return rt.needsUpdate=!0,rt}const u=new bo;o.add(u);const h=new ys(2,2,2,4,4,4),d=`
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,m={iTime:{value:0},iResolution:{value:new Ae(512,512)},scrollProgress:{value:0}},p=`
  uniform float iTime;
  uniform vec2 iResolution;
  uniform float scrollProgress;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void mainImage(out vec4 O, vec2 I) {
      vec2 r = iResolution.xy;
      vec2 z;
      vec2 i;
      vec2 f = I*(z+=4.-4.*abs(.7-dot(I=(I+I-r)/r.y, I)));
      
      // Add subtle movement to pattern
      float timeOffset = sin(iTime * 0.2) * 0.1;
      f.x += timeOffset;
      f.y -= timeOffset;
      
      // More iterations based on scroll progress for increasing detail
      float iterations = mix(8.0, 12.0, scrollProgress);
      
      for(O *= 0.; i.y++<iterations;
          O += (sin(f += cos(f.yx*i.y+i+iTime)/i.y+.7)+1.).xyyx
          * abs(f.x-f.y));
      
      O = tanh(7.*exp(z.x-4.-I.y*vec4(-1,1,2,0))/O);
      
      // Add pulsing effect
      float pulse = 1.0 + 0.2 * sin(iTime * 0.5);
      O.rgb *= pulse;
      
      // Add color shifting nebula effect
      float nebula = sin(I.x * 0.01 + iTime * 0.3) * sin(I.y * 0.01 - iTime * 0.2);
      nebula = abs(nebula) * 0.5;
      
      // Create shifting color palette that changes with scroll
      vec3 color1 = mix(vec3(0.1, 0.2, 0.8), vec3(0.8, 0.1, 0.5), scrollProgress); // Blue to purple
      vec3 color2 = mix(vec3(0.8, 0.2, 0.7), vec3(0.2, 0.8, 0.7), scrollProgress); // Purple to teal
      vec3 colorMix = mix(color1, color2, sin(iTime * 0.2) * 0.5 + 0.5);
      
      // Apply nebula color to darker areas
      O.rgb = mix(O.rgb, colorMix, nebula * (1.0 - length(O.rgb)));
  }
  
  void main() {
      // Map the position on the cube face to shader coordinates
      vec2 cubeUV = vUv * iResolution;
      
      vec4 fragColor;
      mainImage(fragColor, cubeUV);
      
      // Add depth effect based on normals and position
      float depthFactor = abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
      fragColor.rgb *= 0.7 + 0.3 * depthFactor;
      
      // Add edge glow - intensity increases with scroll
      float edge = 1.0 - max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) * 2.0;
      edge = pow(edge, 4.0);
      fragColor.rgb += edge * vec3(0.1, 0.2, 0.8) * (0.6 + scrollProgress * 0.4);
      
      // Boost brightness
      fragColor.rgb *= 2.0;
      
      gl_FragColor = fragColor;
  }
`,g=new aa({vertexShader:d,fragmentShader:p,uniforms:m,transparent:!0,opacity:1,side:bi}),v=new Ri(h,g);v.castShadow=!0,v.receiveShadow=!0,u.add(v);const x=new B_(new Ay(h,10),new hd({color:4491519,linewidth:1.5,transparent:!0,opacity:.1}));x.scale.setScalar(1.001),u.add(x);function M(A,P,j){return A*(1-j)+P*j}function b(){const A={PARTICLE_COUNT:2e3,PARTICLE_MOUSE_INFLUENCE:1e-4,PARTICLE_REPULSION_RADIUS:.8,PARTICLE_REPULSION_STRENGTH:8e-5,PARTICLE_CONNECTION_DISTANCE:.5,PARTICLE_DEPTH_RANGE:12},P=new oi,j=A.PARTICLE_COUNT,q=new Float32Array(j*3),at=new Float32Array(j*3),rt=new Float32Array(j*3),N=new Float32Array(j),X=new Float32Array(j*3),V=new Float32Array(j);for(let tt=0;tt<j;tt++){const ft=Math.random()*Math.PI*2,Mt=Math.acos(2*Math.random()-1),At=3+Math.random()*3,Jt=Math.random()*A.PARTICLE_DEPTH_RANGE-A.PARTICLE_DEPTH_RANGE/2;q[tt*3]=At*Math.sin(Mt)*Math.cos(ft),q[tt*3+1]=At*Math.sin(Mt)*Math.sin(ft),q[tt*3+2]=At*Math.cos(Mt)+Jt,at[tt*3]=q[tt*3],at[tt*3+1]=q[tt*3+1],at[tt*3+2]=q[tt*3+2],V[tt]=q[tt*3+2],rt[tt*3]=(Math.random()-.5)*4e-4,rt[tt*3+1]=(Math.random()-.5)*4e-4,rt[tt*3+2]=(Math.random()-.5)*2e-4;const ye=(q[tt*3+2]+A.PARTICLE_DEPTH_RANGE/2)/A.PARTICLE_DEPTH_RANGE;N[tt]=.008+.03*(1-ye);const pe=.5+.5*(1-ye);X[tt*3]=.4+.3*pe,X[tt*3+1]=.4+.3*pe,X[tt*3+2]=.7+.3*pe}P.setAttribute("position",new Cn(q,3)),P.setAttribute("originalPosition",new Cn(at,3)),P.setAttribute("velocity",new Cn(rt,3)),P.setAttribute("size",new Cn(N,1)),P.setAttribute("color",new Cn(X,3)),P.setAttribute("depth",new Cn(V,1));const pt=l(),w=new B0({size:.03,map:pt,transparent:!0,vertexColors:!0,opacity:.9,blending:Cc,depthWrite:!1,sizeAttenuation:!0}),Z=new by(P,w);o.add(Z);const nt=new hd({color:3368703,transparent:!0,opacity:.08,blending:Cc}),vt=new oi,W=new B_(vt,nt);return o.add(W),{particleSystem:Z,constellationSystem:W,settings:A}}const R=b();function y(A){if(!R||!R.particleSystem)return;const P=R.particleSystem,j=P.geometry.attributes.position.array,q=P.geometry.attributes.originalPosition.array,at=P.geometry.attributes.size.array,rt=P.geometry.attributes.color.array,N=j.length/3;let X;A<.5?X=fi.utils.clamp(0,1,A*2):X=fi.utils.clamp(0,1,2-A*2),X=fi.parseEase("power2.inOut")(X);for(let V=0;V<N;V++){const pt=V*3,w=q[pt+2];Math.sqrt(q[pt]*q[pt]+q[pt+1]*q[pt+1]);const Z=1+X*1.5;j[pt]=q[pt]*Z,j[pt+1]=q[pt+1]*Z;let nt=w;Math.abs(w)>1?nt=w*(1-X*.5):nt=w-X*Math.sign(w)*2,j[pt+2]=M(j[pt+2],nt,.1);const vt=Math.abs(j[pt+2]),W=Math.max(0,1-vt/5),tt=1+X*4;at[V]=(.008+.03*W)*tt;const ft=X*.3,At=.5+W*.5+ft;rt[pt]=.4+.3*At,rt[pt+1]=.4+.3*At,rt[pt+2]=.7+.3*At}P.geometry.attributes.position.needsUpdate=!0,P.geometry.attributes.size.needsUpdate=!0,P.geometry.attributes.color.needsUpdate=!0}function _(){return{emitFromCube:function(P=15){if(!R||!R.particleSystem)return;const j=R.particleSystem,q=j.geometry.attributes.position.array,at=j.geometry.attributes.velocity.array,rt=j.geometry.attributes.size.array,N=j.geometry.attributes.color.array,X=q.length/3,V=[],pt=v.geometry.attributes.position;for(let w=0;w<pt.count;w++)V.push(new et(pt.getX(w),pt.getY(w),pt.getZ(w)));for(let w=0;w<P;w++){const Z=Math.floor(Math.random()*X),nt=Z*3,vt=Math.floor(Math.random()*V.length),W=V[vt].clone();W.applyMatrix4(v.matrixWorld),q[nt]=W.x,q[nt+1]=W.y,q[nt+2]=W.z;const tt=.02+Math.random()*.04;at[nt]=(Math.random()-.5)*tt,at[nt+1]=(Math.random()-.5)*tt,at[nt+2]=(Math.random()-.5)*tt,rt[Z]=.03+Math.random()*.03,N[nt]=.8+Math.random()*.2,N[nt+1]=.8+Math.random()*.2,N[nt+2]=1}j.geometry.attributes.position.needsUpdate=!0,j.geometry.attributes.velocity.needsUpdate=!0,j.geometry.attributes.size.needsUpdate=!0,j.geometry.attributes.color.needsUpdate=!0},createWhirlpool:function(P=2){if(!R||!R.particleSystem)return;const j=R.particleSystem,q=j.geometry.attributes.position.array,at=j.geometry.attributes.velocity.array,rt=q.length/3,N=new Float32Array(at);let X=performance.now();function V(){const pt=(performance.now()-X)/1e3;if(Math.min(pt/P,1)<1){for(let Z=0;Z<rt;Z++){const nt=Z*3,vt=q[nt]-u.position.x,W=q[nt+1]-u.position.y,tt=q[nt+2]-u.position.z,ft=Math.sqrt(vt*vt+W*W+tt*tt);if(ft<8){const Mt=(1-Math.min(ft/8,1))*.001,At=-W*Mt,Jt=vt*Mt,Vt=-2e-4*ft;at[nt]=N[nt]+At,at[nt+1]=N[nt+1]+Jt,at[nt+2]=N[nt+2]+Vt}}j.geometry.attributes.velocity.needsUpdate=!0,requestAnimationFrame(V)}else{for(let Z=0;Z<at.length;Z++)at[Z]=N[Z];j.geometry.attributes.velocity.needsUpdate=!0}}V()},emitPulseWave:function(){if(!R||!R.particleSystem)return;const P=R.particleSystem,j=P.geometry.attributes.position.array,q=P.geometry.attributes.size.array,at=P.geometry.attributes.color.array,rt=j.length/3,N=new Float32Array(q),X=new Float32Array(at),V=3,pt=2.5,w=1;let Z=performance.now();function nt(){const vt=(performance.now()-Z)/1e3,W=vt*V;if(vt<pt){for(let tt=0;tt<rt;tt++){const ft=tt*3,Mt=j[ft]-u.position.x,At=j[ft+1]-u.position.y,Jt=j[ft+2]-u.position.z,Vt=Math.sqrt(Mt*Mt+At*At+Jt*Jt),ye=Math.abs(Vt-W);if(ye<w){const pe=1-ye/w;q[tt]=N[tt]*(1+pe*2),at[ft]=X[ft]+pe*.4,at[ft+1]=X[ft+1]+pe*.2,at[ft+2]=X[ft+2]+pe*.7}else q[tt]=N[tt],at[ft]=X[ft],at[ft+1]=X[ft+1],at[ft+2]=X[ft+2]}P.geometry.attributes.size.needsUpdate=!0,P.geometry.attributes.color.needsUpdate=!0,requestAnimationFrame(nt)}else{for(let tt=0;tt<rt;tt++){const ft=tt*3;q[tt]=N[tt],at[ft]=X[ft],at[ft+1]=X[ft+1],at[ft+2]=X[ft+2]}P.geometry.attributes.size.needsUpdate=!0,P.geometry.attributes.color.needsUpdate=!0}}nt()}}}const B=_(),O=new Ny(16777215,.8);o.add(O);const U=new Ly(16777215,1.5);U.position.set(5,10,7),U.castShadow=!0,o.add(U);const k=new Dy(3368703,1.5,20);k.position.set(-3,2,5),o.add(k),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2))});const I=new Ae(0,0);window.addEventListener("mousemove",A=>{I.x=A.clientX/window.innerWidth*2-1,I.y=-(A.clientY/window.innerHeight)*2+1,Ff.isScrolling()||fi.to(u.rotation,{x:"+="+(I.y*.03-u.rotation.x*.02),y:"+="+(I.x*.03-u.rotation.y*.02),duration:1,ease:"power2.out",overwrite:"auto"})}),document.addEventListener("click",()=>{switch(fi.to(u.rotation,{x:u.rotation.x+Math.PI*.25*(Math.random()-.5),y:u.rotation.y+Math.PI*.25*(Math.random()-.5),z:u.rotation.z+Math.PI*.25*(Math.random()-.5),duration:1,ease:"back.out(1.5)"}),Math.floor(Math.random()*3)){case 0:B.emitFromCube();break;case 1:B.createWhirlpool();break;case 2:B.emitPulseWave();break}});function H(){const A=document.querySelectorAll(".title"),P=document.querySelectorAll(".description");document.querySelectorAll(".section").forEach((j,q)=>{const at=fi.timeline({scrollTrigger:{trigger:j,start:"top 80%",end:"top 20%",scrub:1,toggleActions:"play none none reverse"}});at.to(A[q],{opacity:1,y:0,duration:1,ease:"power2.out"},0),at.to(P[q],{opacity:1,y:0,duration:1,ease:"power2.out",delay:.2},0),at.to(u.position,{z:-1*q,duration:1},0)})}const $=fi.timeline({scrollTrigger:{trigger:".content",start:"top top",end:"bottom bottom",scrub:1.5,markers:!1,onUpdate:A=>{m.scrollProgress.value=A.progress;let P;A.progress<.5?P=fi.utils.clamp(0,1,A.progress*2):P=fi.utils.clamp(0,1,2-A.progress*2),P=fi.parseEase("power2.inOut")(P);const j=20,q=60;e.fov=q-(q-j)*P,e.updateProjectionMatrix(),u.scale.setScalar(1+(1.2-1)*P)}}});$.to(u.rotation,{x:Math.PI*1.2,y:Math.PI*2,z:Math.PI*.3,ease:"power2.inOut",immediateRender:!1}).to(e.position,{z:.8,y:.2,x:0,ease:"power2.inOut"},.5).to(e.position,{z:4,y:0,x:0,ease:"power2.inOut"},1).to({},{duration:1,onUpdate:function(){e.lookAt(u.position)}},0),$.to(O,{intensity:1.2,ease:"power1.inOut"},0);function D(A){requestAnimationFrame(D);const P=A*.001;if(m.iTime.value=P,Ff.isScrolling()||(u.rotation.x+=5e-4,u.rotation.y+=8e-4),R&&R.particleSystem){const j=R.particleSystem,q=R.constellationSystem,at=R.settings,rt=j.geometry.attributes.position.array,N=j.geometry.attributes.velocity.array;j.geometry.attributes.color.array;const X=rt.length/3,V=m.scrollProgress.value;y(V);const pt=[];for(let Z=0;Z<X;Z++){const nt=Z*3;if(rt[nt]+=N[nt],rt[nt+1]+=N[nt+1],rt[nt+2]+=N[nt+2],rt[nt]+=(I.x*3-rt[nt])*at.PARTICLE_MOUSE_INFLUENCE,rt[nt+1]+=(I.y*3-rt[nt+1])*at.PARTICLE_MOUSE_INFLUENCE,Math.sqrt(rt[nt]*rt[nt]+rt[nt+1]*rt[nt+1]+rt[nt+2]*rt[nt+2])>10){const W=Math.random()*Math.PI*2,tt=Math.acos(2*Math.random()-1),ft=5+Math.random()*2;rt[nt]=ft*Math.sin(tt)*Math.cos(W),rt[nt+1]=ft*Math.sin(tt)*Math.sin(W),rt[nt+2]=ft*Math.cos(tt)*(1-V*.3),N[nt]=(Math.random()-.5)*4e-4,N[nt+1]=(Math.random()-.5)*4e-4,N[nt+2]=(Math.random()-.5)*2e-4}if(Z%50===0&&V>.6)for(let W=Z+1;W<Math.min(Z+100,X);W+=10){const tt=W*3,ft=rt[nt]-rt[tt],Mt=rt[nt+1]-rt[tt+1],At=rt[nt+2]-rt[tt+2];Math.sqrt(ft*ft+Mt*Mt+At*At)<.5&&rt[nt+2]<3&&rt[tt+2]<3&&pt.push(rt[nt],rt[nt+1],rt[nt+2],rt[tt],rt[tt+1],rt[tt+2])}}const w=q.geometry;w.setAttribute("position",new _i(pt,3)),w.attributes.position.needsUpdate=!0,q.material.opacity=Math.max(0,V-.6)*.15,j.geometry.attributes.position.needsUpdate=!0}i.render(o,e)}return window.addEventListener("DOMContentLoaded",()=>{H()}),D(0),bh.jsx("div",{style:{background:"black",height:"10000px"}})}aS.createRoot(document.getElementById("root")).render(bh.jsx(Qx.StrictMode,{children:bh.jsx(vA,{})}));
