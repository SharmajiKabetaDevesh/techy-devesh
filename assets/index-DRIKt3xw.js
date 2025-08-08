(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function H_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Tf={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function xx(){if(Pg)return mo;Pg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var zg;function Sx(){return zg||(zg=1,Tf.exports=xx()),Tf.exports}var Ct=Sx(),Af={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Mx(){if(Bg)return oe;Bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,D={};function M(U,J,vt){this.props=U,this.context=J,this.refs=D,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function O(U,J,vt){this.props=U,this.context=J,this.refs=D,this.updater=vt||y}var L=O.prototype=new _;L.constructor=O,b(L,M.prototype),L.isPureReactComponent=!0;var R=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function F(U,J,vt,St,wt,et){return vt=et.ref,{$$typeof:o,type:U,key:J,ref:vt!==void 0?vt:null,props:et}}function X(U,J){return F(U.type,J,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function C(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return J[vt]})}var I=/\/+/g;function st(U,J){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):J.toString(36)}function lt(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(lt,lt):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,J,vt,St,wt){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(et){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case o:case e:dt=!0;break;case g:return dt=U._init,ht(dt(U._payload),J,vt,St,wt)}}if(dt)return wt=wt(U),dt=St===""?"."+st(U,0):St,R(wt)?(vt="",dt!=null&&(vt=dt.replace(I,"$&/")+"/"),ht(wt,J,vt,"",function(Yt){return Yt})):wt!=null&&(w(wt)&&(wt=X(wt,vt+(wt.key==null||U&&U.key===wt.key?"":(""+wt.key).replace(I,"$&/")+"/")+dt)),J.push(wt)),1;dt=0;var Mt=St===""?".":St+":";if(R(U))for(var Pt=0;Pt<U.length;Pt++)St=U[Pt],et=Mt+st(St,Pt),dt+=ht(St,J,vt,et,wt);else if(Pt=S(U),typeof Pt=="function")for(U=Pt.call(U),Pt=0;!(St=U.next()).done;)St=St.value,et=Mt+st(St,Pt++),dt+=ht(St,J,vt,et,wt);else if(et==="object"){if(typeof U.then=="function")return ht(ft(U),J,vt,St,wt);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return dt}function z(U,J,vt){if(U==null)return U;var St=[],wt=0;return ht(U,St,"","",function(et){return J.call(vt,et,wt++)}),St}function Z(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function xt(){}return oe.Children={map:z,forEach:function(U,J,vt){z(U,function(){J.apply(this,arguments)},vt)},count:function(U){var J=0;return z(U,function(){J++}),J},toArray:function(U){return z(U,function(J){return J})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=O,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,J,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=b({},U.props),wt=U.key,et=void 0;if(J!=null)for(dt in J.ref!==void 0&&(et=void 0),J.key!==void 0&&(wt=""+J.key),J)!G.call(J,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&J.ref===void 0||(St[dt]=J[dt]);var dt=arguments.length-2;if(dt===1)St.children=vt;else if(1<dt){for(var Mt=Array(dt),Pt=0;Pt<dt;Pt++)Mt[Pt]=arguments[Pt+2];St.children=Mt}return F(U.type,wt,void 0,void 0,et,St)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,J,vt){var St,wt={},et=null;if(J!=null)for(St in J.key!==void 0&&(et=""+J.key),J)G.call(J,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(wt[St]=J[St]);var dt=arguments.length-2;if(dt===1)wt.children=vt;else if(1<dt){for(var Mt=Array(dt),Pt=0;Pt<dt;Pt++)Mt[Pt]=arguments[Pt+2];wt.children=Mt}if(U&&U.defaultProps)for(St in dt=U.defaultProps,dt)wt[St]===void 0&&(wt[St]=dt[St]);return F(U,et,void 0,void 0,null,wt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=w,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},oe.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},oe.startTransition=function(U){var J=B.T,vt={};B.T=vt;try{var St=U(),wt=B.S;wt!==null&&wt(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,Y)}catch(et){Y(et)}finally{B.T=J}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(U){return B.H.use(U)},oe.useActionState=function(U,J,vt){return B.H.useActionState(U,J,vt)},oe.useCallback=function(U,J){return B.H.useCallback(U,J)},oe.useContext=function(U){return B.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,J){return B.H.useDeferredValue(U,J)},oe.useEffect=function(U,J,vt){var St=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,J)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(U,J,vt){return B.H.useImperativeHandle(U,J,vt)},oe.useInsertionEffect=function(U,J){return B.H.useInsertionEffect(U,J)},oe.useLayoutEffect=function(U,J){return B.H.useLayoutEffect(U,J)},oe.useMemo=function(U,J){return B.H.useMemo(U,J)},oe.useOptimistic=function(U,J){return B.H.useOptimistic(U,J)},oe.useReducer=function(U,J,vt){return B.H.useReducer(U,J,vt)},oe.useRef=function(U){return B.H.useRef(U)},oe.useState=function(U){return B.H.useState(U)},oe.useSyncExternalStore=function(U,J,vt){return B.H.useSyncExternalStore(U,J,vt)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.1.1",oe}var Ig;function Zh(){return Ig||(Ig=1,Af.exports=Mx()),Af.exports}var oh=Zh();const yx=H_(oh);var bf={exports:{}},go={},Rf={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Ex(){return Fg||(Fg=1,function(o){function e(z,Z){var Y=z.length;z.push(Z);t:for(;0<Y;){var xt=Y-1>>>1,U=z[xt];if(0<l(U,Z))z[xt]=Z,z[Y]=U,Y=xt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],Y=z.pop();if(Y!==Z){z[0]=Y;t:for(var xt=0,U=z.length,J=U>>>1;xt<J;){var vt=2*(xt+1)-1,St=z[vt],wt=vt+1,et=z[wt];if(0>l(St,Y))wt<U&&0>l(et,St)?(z[xt]=et,z[wt]=Y,xt=wt):(z[xt]=St,z[vt]=Y,xt=vt);else if(wt<U&&0>l(et,Y))z[xt]=et,z[wt]=Y,xt=wt;else break t}}return Z}function l(z,Z){var Y=z.sortIndex-Z.sortIndex;return Y!==0?Y:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,S=3,y=!1,b=!1,D=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function B(z){if(D=!1,R(z),!b)if(i(m)!==null)b=!0,G||(G=!0,st());else{var Z=i(p);Z!==null&&ht(B,Z.startTime-z)}}var G=!1,F=-1,X=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<X)}function I(){if(M=!1,G){var z=o.unstable_now();w=z;var Z=!0;try{t:{b=!1,D&&(D=!1,O(F),F=-1),y=!0;var Y=S;try{e:{for(R(z),v=i(m);v!==null&&!(v.expirationTime>z&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,S=v.priorityLevel;var U=xt(v.expirationTime<=z);if(z=o.unstable_now(),typeof U=="function"){v.callback=U,R(z),Z=!0;break e}v===i(m)&&r(m),R(z)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var J=i(p);J!==null&&ht(B,J.startTime-z),Z=!1}}break t}finally{v=null,S=Y,y=!1}Z=void 0}}finally{Z?st():G=!1}}}var st;if(typeof L=="function")st=function(){L(I)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ft=lt.port2;lt.port1.onmessage=I,st=function(){ft.postMessage(null)}}else st=function(){_(I,0)};function ht(z,Z){F=_(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var Y=S;S=Z;try{return z()}finally{S=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=S;S=z;try{return Z()}finally{S=Y}},o.unstable_scheduleCallback=function(z,Z,Y){var xt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,z={id:g++,callback:Z,priorityLevel:z,startTime:Y,expirationTime:U,sortIndex:-1},Y>xt?(z.sortIndex=Y,e(p,z),i(m)===null&&z===i(p)&&(D?(O(F),F=-1):D=!0,ht(B,Y-xt))):(z.sortIndex=U,e(m,z),b||y||(b=!0,G||(G=!0,st()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var Z=S;return function(){var Y=S;S=Z;try{return z.apply(this,arguments)}finally{S=Y}}}}(Cf)),Cf}var Hg;function Tx(){return Hg||(Hg=1,Rf.exports=Ex()),Rf.exports}var wf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Ax(){if(Gg)return An;Gg=1;var o=Zh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.1",An}var Vg;function bx(){if(Vg)return wf.exports;Vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),wf.exports=Ax(),wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Rx(){if(kg)return go;kg=1;var o=Tx(),e=Zh(),i=bx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,s=f;break}if(T===s){x=!0,s=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=c;break}if(T===s){x=!0,s=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case M:return"Profiler";case D:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case L:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var ht=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],U=-1;function J(t){return{current:t}}function vt(t){0>U||(t.current=xt[U],xt[U]=null,U--)}function St(t,n){U++,xt[U]=t.current,t.current=n}var wt=J(null),et=J(null),dt=J(null),Mt=J(null);function Pt(t,n){switch(St(dt,n),St(et,t),St(wt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cg(n),t=ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(wt),St(wt,t)}function Yt(){vt(wt),vt(et),vt(dt)}function ie(t){t.memoizedState!==null&&St(Mt,t);var n=wt.current,a=ug(n,t.type);n!==a&&(St(et,t),St(wt,a))}function Fe(t){et.current===t&&(vt(wt),vt(et)),Mt.current===t&&(vt(Mt),co._currentValue=Y)}var pe=Object.prototype.hasOwnProperty,H=o.unstable_scheduleCallback,Re=o.unstable_cancelCallback,Qt=o.unstable_shouldYield,Se=o.unstable_requestPaint,Ft=o.unstable_now,He=o.unstable_getCurrentPriorityLevel,Ht=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,We=o.unstable_NormalPriority,qe=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,$=o.unstable_setDisableYieldValue,ct=null,_t=null;function ot(t){if(typeof E=="function"&&$(t),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ct,t)}catch{}}var zt=Math.clz32?Math.clz32:qt,bt=Math.log,Xt=Math.LN2;function qt(t){return t>>>=0,t===0?32:31-(bt(t)/Xt|0)|0}var yt=256,Lt=4194304;function Zt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Zt(s):(x&=T,x!==0?c=Zt(x):a||(a=T&~t,a!==0&&(c=Zt(a))))):(T=s&~f,T!==0?c=Zt(T):x!==0?c=Zt(x):a||(a=s&~t,a!==0&&(c=Zt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Dt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function re(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),t}function At(){var t=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Et(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-zt(a),mt=1<<ut;T[ut]=0,P[ut]=-1;var tt=Q[ut];if(tt!==null)for(Q[ut]=null,ut=0;ut<tt.length;ut++){var nt=tt[ut];nt!==null&&(nt.lane&=-536870913)}a&=~mt}s!==0&&gt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function gt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Vt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ae(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ce(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:wg(t.type))}function si(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var sn=Math.random().toString(36).slice(2),on="__reactFiber$"+sn,je="__reactProps$"+sn,_i="__reactContainer$"+sn,mr="__reactEvents$"+sn,Lo="__reactListeners$"+sn,gr="__reactHandles$"+sn,Ms="__reactResources$"+sn,vi="__reactMarker$"+sn;function _r(t){delete t[on],delete t[je],delete t[mr],delete t[Lo],delete t[gr]}function Di(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=pg(t);t!==null;){if(a=t[on])return a;t=pg(t)}return n}t=a,a=t.parentNode}return null}function na(t){if(t=t[on]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ia(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ia(t){var n=t[Ms];return n||(n=t[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[vi]=!0}var No=new Set,Oo={};function A(t,n){W(t,n),W(t+"Capture",n)}function W(t,n){for(Oo[t]=n,t=0;t<n.length;t++)No.add(n[t])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},j={};function Tt(t){return pe.call(j,t)?!0:pe.call(rt,t)?!1:at.test(t)?j[t]=!0:(rt[t]=!0,!1)}function Ut(t,n,a){if(Tt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function It(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Jt,te;function Wt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+te}var ce=!1;function ye(t,n){if(!t||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(nt){var tt=nt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(nt){tt=nt}t.call(mt.prototype)}}else{try{throw Error()}catch(nt){tt=nt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(nt){if(nt&&tt&&typeof nt.stack=="string")return[nt.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var P=x.split(`
`),Q=T.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===Q.length)for(s=P.length-1,c=Q.length-1;1<=s&&0<=c&&P[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==Q[c]){var ut=`
`+P[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function ke(t){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return ye(t.type,!1);case 11:return ye(t.type.render,!1);case 1:return ye(t.type,!0);case 31:return Wt("Activity");default:return""}}function Ue(t){try{var n="";do n+=ke(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ve(t){var n=Kt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function me(t){t._valueTracker||(t._valueTracker=Ve(t))}function yn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Kt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function oi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cn=/[\n"\\]/g;function dn(t){return t.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,a,s,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?En(t,x,ue(n)):a!=null?En(t,x,ue(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ue(T):t.removeAttribute("name")}function wn(t,n,a,s,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function En(t,n,a){n==="number"&&oi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ze(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function vr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||gv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ud(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&cd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&cd(t,f,n[f])}function yc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _v=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return vv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ec=null;function Tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Sr=null;function fd(t){var n=na(t);if(n&&(t=n.stateNode)){var a=t[je]||null;t:switch(t=n.stateNode,n.type){case"input":if(Be(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[je]||null;if(!c)throw Error(r(90));Be(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&yn(s)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(t,!!a.multiple,n,!1)}}}var Ac=!1;function hd(t,n,a){if(Ac)return t(n,a);Ac=!0;try{var s=t(n);return s}finally{if(Ac=!1,(xr!==null||Sr!==null)&&(Sl(),xr&&(n=xr,t=Sr,Sr=xr=null,fd(n),t)))for(n=0;n<t.length;n++)fd(t[n])}}function ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=!1;if(Ui)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{bc=!1}var aa=null,Rc=null,zo=null;function dd(){if(zo)return zo;var t,n=Rc,a=n.length,s,c="value"in aa?aa.value:aa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return zo=c.slice(t,1<s?1-s:void 0)}function Bo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function pd(){return!1}function Nn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:pd,this.isPropagationStopped=pd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Nn(Fa),Ts=g({},Fa,{view:0,detail:0}),xv=Nn(Ts),Cc,wc,As,Ho=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Cc=t.screenX-As.screenX,wc=t.screenY-As.screenY):wc=Cc=0,As=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),md=Nn(Ho),Sv=g({},Ho,{dataTransfer:0}),Mv=Nn(Sv),yv=g({},Ts,{relatedTarget:0}),Dc=Nn(yv),Ev=g({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=Nn(Ev),Av=g({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=Nn(Av),Rv=g({},Fa,{data:0}),gd=Nn(Rv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Dv[t])?!!n[t]:!1}function Uc(){return Uv}var Lv=g({},Ts,{key:function(t){if(t.key){var n=Cv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nv=Nn(Lv),Ov=g({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Nn(Ov),Pv=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),zv=Nn(Pv),Bv=g({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=Nn(Bv),Fv=g({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=Nn(Fv),Gv=g({},Fa,{newState:0,oldState:0}),Vv=Nn(Gv),kv=[9,13,27,32],Lc=Ui&&"CompositionEvent"in window,bs=null;Ui&&"documentMode"in document&&(bs=document.documentMode);var Xv=Ui&&"TextEvent"in window&&!bs,vd=Ui&&(!Lc||bs&&8<bs&&11>=bs),xd=" ",Sd=!1;function Md(t,n){switch(t){case"keyup":return kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function Wv(t,n){switch(t){case"compositionend":return yd(n);case"keypress":return n.which!==32?null:(Sd=!0,xd);case"textInput":return t=n.data,t===xd&&Sd?null:t;default:return null}}function qv(t,n){if(Mr)return t==="compositionend"||!Lc&&Md(t,n)?(t=dd(),zo=Rc=aa=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vd&&n.locale!=="ko"?null:n.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Yv[t.type]:n==="textarea"}function Td(t,n,a,s){xr?Sr?Sr.push(s):Sr=[s]:xr=s,n=bl(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function jv(t){ag(t,0)}function Go(t){var n=Ia(t);if(yn(n))return t}function Ad(t,n){if(t==="change")return n}var bd=!1;if(Ui){var Nc;if(Ui){var Oc="oninput"in document;if(!Oc){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Oc=typeof Rd.oninput=="function"}Nc=Oc}else Nc=!1;bd=Nc&&(!document.documentMode||9<document.documentMode)}function Cd(){Rs&&(Rs.detachEvent("onpropertychange",wd),Cs=Rs=null)}function wd(t){if(t.propertyName==="value"&&Go(Cs)){var n=[];Td(n,Cs,t,Tc(t)),hd(jv,n)}}function Zv(t,n,a){t==="focusin"?(Cd(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",wd)):t==="focusout"&&Cd()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Cs)}function Qv(t,n){if(t==="click")return Go(n)}function Jv(t,n){if(t==="input"||t==="change")return Go(n)}function $v(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:$v;function ws(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!pe.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,n){var a=Dd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dd(a)}}function Ld(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ld(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Nd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=oi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=oi(t.document)}return n}function Pc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var t0=Ui&&"documentMode"in document&&11>=document.documentMode,yr=null,zc=null,Ds=null,Bc=!1;function Od(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||yr==null||yr!==oi(s)||(s=yr,"selectionStart"in s&&Pc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ds&&ws(Ds,s)||(Ds=s,s=bl(zc,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=yr)))}function Ha(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Er={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Ic={},Pd={};Ui&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Ga(t){if(Ic[t])return Ic[t];if(!Er[t])return t;var n=Er[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pd)return Ic[t]=n[a];return t}var zd=Ga("animationend"),Bd=Ga("animationiteration"),Id=Ga("animationstart"),e0=Ga("transitionrun"),n0=Ga("transitionstart"),i0=Ga("transitioncancel"),Fd=Ga("transitionend"),Hd=new Map,Fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fc.push("scrollEnd");function li(t,n){Hd.set(t,n),A(n,[t])}var Gd=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=Gd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ue(n)},Gd.set(t,n),n)}return{value:t,source:n,stack:Ue(n)}}var Qn=[],Tr=0,Hc=0;function Vo(){for(var t=Tr,n=Hc=Tr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var c=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Vd(a,c,f)}}function ko(t,n,a,s){Qn[Tr++]=t,Qn[Tr++]=n,Qn[Tr++]=a,Qn[Tr++]=s,Hc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Gc(t,n,a,s){return ko(t,n,a,s),Xo(t)}function Ar(t,n){return ko(t,null,null,n),Xo(t)}function Vd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-zt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Xo(t){if(50<eo)throw eo=0,Yu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var br={};function a0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new a0(t,n,a,s)}function Vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function kd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wo(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Vc(t)&&(x=1);else if(typeof t=="string")x=sx(t,a,wt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Gn(31,a,n,c),t.elementType=w,t.lanes=f,t;case b:return Va(a.children,c,f,n);case D:x=8,c|=24;break;case M:return t=Gn(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case B:return t=Gn(13,a,n,c),t.elementType=B,t.lanes=f,t;case G:return t=Gn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:x=10;break t;case O:x=9;break t;case R:x=11;break t;case F:x=14;break t;case X:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Va(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function kc(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function Xc(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rr=[],Cr=0,qo=null,Yo=0,Jn=[],$n=0,ka=null,Ni=1,Oi="";function Xa(t,n){Rr[Cr++]=Yo,Rr[Cr++]=qo,qo=t,Yo=n}function Xd(t,n,a){Jn[$n++]=Ni,Jn[$n++]=Oi,Jn[$n++]=ka,ka=t;var s=Ni;t=Oi;var c=32-zt(s)-1;s&=~(1<<c),a+=1;var f=32-zt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ni=1<<32-zt(n)+c|a<<c|s,Oi=f+t}else Ni=1<<f|a<<c|s,Oi=t}function Wc(t){t.return!==null&&(Xa(t,1),Xd(t,1,0))}function qc(t){for(;t===qo;)qo=Rr[--Cr],Rr[Cr]=null,Yo=Rr[--Cr],Rr[Cr]=null;for(;t===ka;)ka=Jn[--$n],Jn[$n]=null,Oi=Jn[--$n],Jn[$n]=null,Ni=Jn[--$n],Jn[$n]=null}var Dn=null,Ke=null,Ae=!1,Wa=null,xi=!1,Yc=Error(r(519));function qa(t){var n=Error(r(418,""));throw Ns(Kn(n,t)),Yc}function Wd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[je]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)_e(io[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),me(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),vr(n,s.value,s.defaultValue,s.children),me(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||lg(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Rl),n=!0):n=!1,n||qa(t)}function qd(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Dn=Dn.return}}function Us(t){if(t!==Dn)return!1;if(!Ae)return qd(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||uf(t.type,t.memoizedProps)),a=!a),a&&Ke&&qa(t),qd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ke=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ke=null}}else n===27?(n=Ke,Sa(t.type)?(t=pf,pf=null,Ke=t):Ke=n):Ke=Dn?ui(t.stateNode.nextSibling):null;return!0}function Ls(){Ke=Dn=null,Ae=!1}function Yd(){var t=Wa;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),Wa=null),t}function Ns(t){Wa===null?Wa=[t]:Wa.push(t)}var jc=J(null),Ya=null,Pi=null;function ra(t,n,a){St(jc,n._currentValue),n._currentValue=a}function zi(t){t._currentValue=jc.current,vt(jc)}function Zc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Kc(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Zc(f.return,a,t),s||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Zc(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Os(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;Hn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===Mt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}c=c.return}t!==null&&Kc(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Ya=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return jd(Ya,t)}function Zo(t,n){return Ya===null&&ja(t),jd(t,n)}function jd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var r0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},s0=o.unstable_scheduleCallback,o0=o.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new r0,data:new Map,refCount:0}}function Ps(t){t.refCount--,t.refCount===0&&s0(o0,function(){t.controller.abort()})}var zs=null,Jc=0,wr=0,Dr=null;function l0(t,n){if(zs===null){var a=zs=[];Jc=0,wr=tf(),Dr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Jc++,n.then(Zd,Zd),n}function Zd(){if(--Jc===0&&zs!==null){Dr!==null&&(Dr.status="fulfilled");var t=zs;zs=null,wr=0,Dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function c0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Kd=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&l0(t,n),Kd!==null&&Kd(t,n)};var Za=J(null);function $c(){var t=Za.current;return t!==null?t:Ge.pooledCache}function Ko(t,n){n===null?St(Za,Za.current):St(Za,n.pool)}function Qd(){var t=$c();return t===null?null:{parent:ln._currentValue,pool:t}}var Bs=Error(r(460)),Jd=Error(r(474)),Qo=Error(r(542)),tu={then:function(){}};function $d(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jo(){}function tp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,np(t),t;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,np(t),t}throw Is=n,Bs}}var Is=null;function ep(){if(Is===null)throw Error(r(459));var t=Is;return Is=null,t}function np(t){if(t===Bs||t===Qo)throw Error(r(483))}var sa=!1;function eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function la(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Xo(t),Vd(t,null,a),n}return ko(t,s,n,a),Xo(t)}function Fs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vt(t,a)}}function iu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var au=!1;function Hs(){if(au){var t=Dr;if(t!==null)throw t}}function Gs(t,n,a,s){au=!1;var c=t.updateQueue;sa=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,Q=P.next;P.next=null,x===null?f=Q:x.next=Q,x=P;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==x&&(T===null?ut.firstBaseUpdate=Q:T.next=Q,ut.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;x=0,ut=Q=P=null,T=f;do{var tt=T.lane&-536870913,nt=tt!==T.lane;if(nt?(xe&tt)===tt:(s&tt)===tt){tt!==0&&tt===wr&&(au=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=t,$t=T;tt=n;var Oe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){mt=ne.call(Oe,mt,tt);break t}mt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,tt=typeof ne=="function"?ne.call(Oe,mt,tt):ne,tt==null)break t;mt=g({},mt,tt);break t;case 2:sa=!0}}tt=T.callback,tt!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[tt]:nt.push(tt))}else nt={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(Q=ut=nt,P=mt):ut=ut.next=nt,x|=tt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ut===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=Q,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ga|=x,t.lanes=x,t.memoizedState=mt}}function ip(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ap(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ip(a[t],n)}var Ur=J(null),$o=J(0);function rp(t,n){t=ki,St($o,t),St(Ur,n),ki=t|n.baseLanes}function ru(){St($o,ki),St(Ur,Ur.current)}function su(){ki=$o.current,vt(Ur),vt($o)}var ca=0,he=null,Le=null,nn=null,tl=!1,Lr=!1,Ka=!1,el=0,Vs=0,Nr=null,u0=0;function Je(){throw Error(r(321))}function ou(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function lu(t,n,a,s,c,f){return ca=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Vp:kp,Ka=!1,f=a(s,c),Ka=!1,Lr&&(f=op(n,a,s,c)),sp(t),f}function sp(t){z.H=ol;var n=Le!==null&&Le.next!==null;if(ca=0,nn=Le=he=null,tl=!1,Vs=0,Nr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&jo(t)&&(pn=!0))}function op(t,n,a,s){he=t;var c=0;do{if(Lr&&(Nr=null),Vs=0,Lr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=_0,f=n(a,s)}while(Lr);return f}function f0(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?ks(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(he.flags|=1024),n}function cu(){var t=el!==0;return el=0,t}function uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function fu(t){if(tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tl=!1}ca=0,nn=Le=he=null,Lr=!1,Vs=el=0,Nr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?he.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Le===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=nn===null?he.memoizedState:nn.next;if(n!==null)nn=n,Le=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},nn===null?he.memoizedState=nn=t:nn=nn.next=t}return nn}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ks(t){var n=Vs;return Vs+=1,Nr===null&&(Nr=[]),t=tp(Nr,t,n),n=he,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Vp:kp),t}function nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ks(t);if(t.$$typeof===L)return Tn(t)}throw Error(r(438,String(t)))}function du(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Bi(t,n){return typeof n=="function"?n(t):n}function il(t){var n=an();return pu(n,Le,t)}function pu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,P=null,Q=n,ut=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(xe&mt)===mt:(ca&mt)===mt){var tt=Q.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===wr&&(ut=!0);else if((ca&tt)===tt){Q=Q.next,tt===wr&&(ut=!0);continue}else mt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=mt,x=f):P=P.next=mt,he.lanes|=tt,ga|=tt;mt=Q.action,Ka&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else tt={lane:mt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=tt,x=f):P=P.next=tt,he.lanes|=mt,ga|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?x=f:P.next=T,!Hn(f,t.memoizedState)&&(pn=!0,ut&&(a=Dr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function mu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Hn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function lp(t,n,a){var s=he,c=an(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Hn((Le||c).memoizedState,a);x&&(c.memoizedState=a,pn=!0),c=c.queue;var T=fp.bind(null,s,c,t);if(Xs(2048,8,T,[t]),c.getSnapshot!==n||x||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Or(9,al(),up.bind(null,s,c,a,n),null),Ge===null)throw Error(r(349));f||(ca&124)!==0||cp(s,n,a)}return a}function cp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=hu(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function up(t,n,a,s){n.value=a,n.getSnapshot=s,hp(n)&&dp(t)}function fp(t,n,a){return a(function(){hp(n)&&dp(t)})}function hp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function dp(t){var n=Ar(t,2);n!==null&&qn(n,t,2)}function gu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),Ka){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},n}function pp(t,n,a,s){return t.baseState=a,pu(t,Le,typeof s=="function"?s:Bi)}function h0(t,n,a,s,c){if(sl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function mp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var T=a(c,s),P=z.S;P!==null&&P(x,T),gp(t,n,T)}catch(Q){_u(t,n,Q)}finally{z.T=f}}else try{f=a(c,s),gp(t,n,f)}catch(Q){_u(t,n,Q)}}function gp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){_p(t,n,s)},function(s){return _u(t,n,s)}):_p(t,n,a)}function _p(t,n,a){n.status="fulfilled",n.value=a,vp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,mp(t,a)))}function _u(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,vp(n),n=n.next;while(n!==s)}t.action=null}function vp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xp(t,n){return n}function Sp(t,n){if(Ae){var a=Ge.formState;if(a!==null){t:{var s=he;if(Ae){if(Ke){e:{for(var c=Ke,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=ui(c.nextSibling),s=c.data==="F!";break t}}qa(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xp,lastRenderedState:n},a.queue=s,a=Fp.bind(null,he,s),s.dispatch=a,s=gu(!1),f=yu.bind(null,he,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=h0.bind(null,he,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mp(t){var n=an();return yp(n,Le,t)}function yp(t,n,a){if(n=pu(t,n,xp)[0],t=il(Bi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ks(n)}catch(x){throw x===Bs?Qo:x}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Or(9,al(),d0.bind(null,c,a),null)),[s,f,t]}function d0(t,n){t.action=n}function Ep(t){var n=an(),a=Le;if(a!==null)return yp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Or(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=hu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function al(){return{destroy:void 0,resource:void 0}}function Tp(){return an().memoizedState}function rl(t,n,a,s){var c=On();s=s===void 0?null:s,he.flags|=t,c.memoizedState=Or(1|n,al(),a,s)}function Xs(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Le!==null&&s!==null&&ou(s,Le.memoizedState.deps)?c.memoizedState=Or(n,f,a,s):(he.flags|=t,c.memoizedState=Or(1|n,f,a,s))}function Ap(t,n){rl(8390656,8,t,n)}function bp(t,n){Xs(2048,8,t,n)}function Rp(t,n){return Xs(4,2,t,n)}function Cp(t,n){return Xs(4,4,t,n)}function wp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Dp(t,n,a){a=a!=null?a.concat([t]):null,Xs(4,4,wp.bind(null,n,t),a)}function vu(){}function Up(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ou(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ou(n,s[1]))return s[0];if(s=t(),Ka){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s}function xu(t,n,a){return a===void 0||(ca&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Pm(),he.lanes|=t,ga|=t,a)}function Np(t,n,a,s){return Hn(a,n)?a:Ur.current!==null?(t=xu(t,a,s),Hn(t,n)||(pn=!0),t):(ca&42)===0?(pn=!0,t.memoizedState=a):(t=Pm(),he.lanes|=t,ga|=t,n)}function Op(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=z.T,T={};z.T=T,yu(t,!1,n,a);try{var P=c(),Q=z.S;if(Q!==null&&Q(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=c0(P,s);Ws(t,n,ut,Wn(t))}else Ws(t,n,s,Wn(t))}catch(mt){Ws(t,n,{then:function(){},status:"rejected",reason:mt},Wn())}finally{Z.p=f,z.T=x}}function p0(){}function Su(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Pp(t).queue;Op(t,c,n,Y,a===null?p0:function(){return zp(t),a(s)})}function Pp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zp(t){var n=Pp(t).next.queue;Ws(t,n,{},Wn())}function Mu(){return Tn(co)}function Bp(){return an().memoizedState}function Ip(){return an().memoizedState}function m0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=oa(a);var s=la(n,t,a);s!==null&&(qn(s,n,a),Fs(s,n,a)),n={cache:Qc()},t.payload=n;return}n=n.return}}function g0(t,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},sl(t)?Hp(n,a):(a=Gc(t,n,a,s),a!==null&&(qn(a,t,s),Gp(a,n,s)))}function Fp(t,n,a){var s=Wn();Ws(t,n,a,s)}function Ws(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(sl(t))Hp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Hn(T,x))return ko(t,n,c,0),Ge===null&&Vo(),!1}catch{}finally{}if(a=Gc(t,n,c,s),a!==null)return qn(a,t,s),Gp(a,n,s),!0}return!1}function yu(t,n,a,s){if(s={lane:2,revertLane:tf(),action:s,hasEagerState:!1,eagerState:null,next:null},sl(t)){if(n)throw Error(r(479))}else n=Gc(t,a,s,2),n!==null&&qn(n,t,2)}function sl(t){var n=t.alternate;return t===he||n!==null&&n===he}function Hp(t,n){Lr=tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Gp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vt(t,a)}}var ol={readContext:Tn,use:nl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Vp={readContext:Tn,use:nl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Ap,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,rl(4194308,4,wp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return rl(4194308,4,t,n)},useInsertionEffect:function(t,n){rl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(Ka){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(Ka){ot(!0);try{a(n)}finally{ot(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=g0.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=gu(t);var n=t.queue,a=Fp.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:vu,useDeferredValue:function(t,n){var a=On();return xu(a,t,n)},useTransition:function(){var t=gu(!1);return t=Op.bind(null,he,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,c=On();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(xe&124)!==0||cp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ap(fp.bind(null,s,f,t),[t]),s.flags|=2048,Or(9,al(),up.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Ge.identifierPrefix;if(Ae){var a=Oi,s=Ni;a=(s&~(1<<32-zt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=el++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=u0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Mu,useFormState:Sp,useActionState:Sp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:du,useCacheRefresh:function(){return On().memoizedState=m0.bind(null,he)}},kp={readContext:Tn,use:nl,useCallback:Up,useContext:Tn,useEffect:bp,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:Lp,useReducer:il,useRef:Tp,useState:function(){return il(Bi)},useDebugValue:vu,useDeferredValue:function(t,n){var a=an();return Np(a,Le.memoizedState,t,n)},useTransition:function(){var t=il(Bi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:lp,useId:Bp,useHostTransitionStatus:Mu,useFormState:Mp,useActionState:Mp,useOptimistic:function(t,n){var a=an();return pp(a,Le,t,n)},useMemoCache:du,useCacheRefresh:Ip},_0={readContext:Tn,use:nl,useCallback:Up,useContext:Tn,useEffect:bp,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:Lp,useReducer:mu,useRef:Tp,useState:function(){return mu(Bi)},useDebugValue:vu,useDeferredValue:function(t,n){var a=an();return Le===null?xu(a,t,n):Np(a,Le.memoizedState,t,n)},useTransition:function(){var t=mu(Bi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:lp,useId:Bp,useHostTransitionStatus:Mu,useFormState:Ep,useActionState:Ep,useOptimistic:function(t,n){var a=an();return Le!==null?pp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:du,useCacheRefresh:Ip},Pr=null,qs=0;function ll(t){var n=qs;return qs+=1,Pr===null&&(Pr=[]),tp(Pr,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xp(t){var n=t._init;return n(t._payload)}function Wp(t){function n(q,V){if(t){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=Li(q,V),q.index=0,q.sibling=null,q}function f(q,V,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=67108866,V):K):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,K,pt){return V===null||V.tag!==6?(V=kc(K,q.mode,pt),V.return=q,V):(V=c(V,K),V.return=q,V)}function P(q,V,K,pt){var Gt=K.type;return Gt===b?ut(q,V,K.props.children,pt,K.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&Xp(Gt)===V.type)?(V=c(V,K.props),Ys(V,K),V.return=q,V):(V=Wo(K.type,K.key,K.props,null,q.mode,pt),Ys(V,K),V.return=q,V)}function Q(q,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Xc(K,q.mode,pt),V.return=q,V):(V=c(V,K.children||[]),V.return=q,V)}function ut(q,V,K,pt,Gt){return V===null||V.tag!==7?(V=Va(K,q.mode,pt,Gt),V.return=q,V):(V=c(V,K),V.return=q,V)}function mt(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=kc(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return K=Wo(V.type,V.key,V.props,null,q.mode,K),Ys(K,V),K.return=q,K;case y:return V=Xc(V,q.mode,K),V.return=q,V;case X:var pt=V._init;return V=pt(V._payload),mt(q,V,K)}if(ht(V)||st(V))return V=Va(V,q.mode,K,null),V.return=q,V;if(typeof V.then=="function")return mt(q,ll(V),K);if(V.$$typeof===L)return mt(q,Zo(q,V),K);cl(q,V)}return null}function tt(q,V,K,pt){var Gt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Gt!==null?null:T(q,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return K.key===Gt?P(q,V,K,pt):null;case y:return K.key===Gt?Q(q,V,K,pt):null;case X:return Gt=K._init,K=Gt(K._payload),tt(q,V,K,pt)}if(ht(K)||st(K))return Gt!==null?null:ut(q,V,K,pt,null);if(typeof K.then=="function")return tt(q,V,ll(K),pt);if(K.$$typeof===L)return tt(q,V,Zo(q,K),pt);cl(q,K)}return null}function nt(q,V,K,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(K)||null,T(V,q,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return q=q.get(pt.key===null?K:pt.key)||null,P(V,q,pt,Gt);case y:return q=q.get(pt.key===null?K:pt.key)||null,Q(V,q,pt,Gt);case X:var de=pt._init;return pt=de(pt._payload),nt(q,V,K,pt,Gt)}if(ht(pt)||st(pt))return q=q.get(K)||null,ut(V,q,pt,Gt,null);if(typeof pt.then=="function")return nt(q,V,K,ll(pt),Gt);if(pt.$$typeof===L)return nt(q,V,K,Zo(V,pt),Gt);cl(V,pt)}return null}function ne(q,V,K,pt){for(var Gt=null,de=null,jt=V,ee=V=0,gn=null;jt!==null&&ee<K.length;ee++){jt.index>ee?(gn=jt,jt=null):gn=jt.sibling;var Ee=tt(q,jt,K[ee],pt);if(Ee===null){jt===null&&(jt=gn);break}t&&jt&&Ee.alternate===null&&n(q,jt),V=f(Ee,V,ee),de===null?Gt=Ee:de.sibling=Ee,de=Ee,jt=gn}if(ee===K.length)return a(q,jt),Ae&&Xa(q,ee),Gt;if(jt===null){for(;ee<K.length;ee++)jt=mt(q,K[ee],pt),jt!==null&&(V=f(jt,V,ee),de===null?Gt=jt:de.sibling=jt,de=jt);return Ae&&Xa(q,ee),Gt}for(jt=s(jt);ee<K.length;ee++)gn=nt(jt,q,ee,K[ee],pt),gn!==null&&(t&&gn.alternate!==null&&jt.delete(gn.key===null?ee:gn.key),V=f(gn,V,ee),de===null?Gt=gn:de.sibling=gn,de=gn);return t&&jt.forEach(function(Aa){return n(q,Aa)}),Ae&&Xa(q,ee),Gt}function $t(q,V,K,pt){if(K==null)throw Error(r(151));for(var Gt=null,de=null,jt=V,ee=V=0,gn=null,Ee=K.next();jt!==null&&!Ee.done;ee++,Ee=K.next()){jt.index>ee?(gn=jt,jt=null):gn=jt.sibling;var Aa=tt(q,jt,Ee.value,pt);if(Aa===null){jt===null&&(jt=gn);break}t&&jt&&Aa.alternate===null&&n(q,jt),V=f(Aa,V,ee),de===null?Gt=Aa:de.sibling=Aa,de=Aa,jt=gn}if(Ee.done)return a(q,jt),Ae&&Xa(q,ee),Gt;if(jt===null){for(;!Ee.done;ee++,Ee=K.next())Ee=mt(q,Ee.value,pt),Ee!==null&&(V=f(Ee,V,ee),de===null?Gt=Ee:de.sibling=Ee,de=Ee);return Ae&&Xa(q,ee),Gt}for(jt=s(jt);!Ee.done;ee++,Ee=K.next())Ee=nt(jt,q,ee,Ee.value,pt),Ee!==null&&(t&&Ee.alternate!==null&&jt.delete(Ee.key===null?ee:Ee.key),V=f(Ee,V,ee),de===null?Gt=Ee:de.sibling=Ee,de=Ee);return t&&jt.forEach(function(vx){return n(q,vx)}),Ae&&Xa(q,ee),Gt}function Oe(q,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case S:t:{for(var Gt=K.key;V!==null;){if(V.key===Gt){if(Gt=K.type,Gt===b){if(V.tag===7){a(q,V.sibling),pt=c(V,K.props.children),pt.return=q,q=pt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&Xp(Gt)===V.type){a(q,V.sibling),pt=c(V,K.props),Ys(pt,K),pt.return=q,q=pt;break t}a(q,V);break}else n(q,V);V=V.sibling}K.type===b?(pt=Va(K.props.children,q.mode,pt,K.key),pt.return=q,q=pt):(pt=Wo(K.type,K.key,K.props,null,q.mode,pt),Ys(pt,K),pt.return=q,q=pt)}return x(q);case y:t:{for(Gt=K.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(q,V.sibling),pt=c(V,K.children||[]),pt.return=q,q=pt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}pt=Xc(K,q.mode,pt),pt.return=q,q=pt}return x(q);case X:return Gt=K._init,K=Gt(K._payload),Oe(q,V,K,pt)}if(ht(K))return ne(q,V,K,pt);if(st(K)){if(Gt=st(K),typeof Gt!="function")throw Error(r(150));return K=Gt.call(K),$t(q,V,K,pt)}if(typeof K.then=="function")return Oe(q,V,ll(K),pt);if(K.$$typeof===L)return Oe(q,V,Zo(q,K),pt);cl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(q,V.sibling),pt=c(V,K),pt.return=q,q=pt):(a(q,V),pt=kc(K,q.mode,pt),pt.return=q,q=pt),x(q)):a(q,V)}return function(q,V,K,pt){try{qs=0;var Gt=Oe(q,V,K,pt);return Pr=null,Gt}catch(jt){if(jt===Bs||jt===Qo)throw jt;var de=Gn(29,jt,null,q.mode);return de.lanes=pt,de.return=q,de}finally{}}}var zr=Wp(!0),qp=Wp(!1),ti=J(null),Si=null;function ua(t){var n=t.alternate;St(cn,cn.current&1),St(ti,t),Si===null&&(n===null||Ur.current!==null||n.memoizedState!==null)&&(Si=t)}function Yp(t){if(t.tag===22){if(St(cn,cn.current),St(ti,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else fa()}function fa(){St(cn,cn.current),St(ti,ti.current)}function Ii(t){vt(ti),Si===t&&(Si=null),vt(cn)}var cn=J(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||df(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Eu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Tu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=oa(s);c.payload=n,a!=null&&(c.callback=a),n=la(t,c,s),n!==null&&(qn(n,t,s),Fs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=oa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=la(t,c,s),n!==null&&(qn(n,t,s),Fs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=oa(a);s.tag=2,n!=null&&(s.callback=n),n=la(t,s,a),n!==null&&(qn(n,t,a),Fs(n,t,a))}};function jp(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(c,f):!0}function Zp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Tu.enqueueReplaceState(n,n.state,null)}function Qa(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Kp(t){fl(t)}function Qp(t){console.error(t)}function Jp(t){fl(t)}function hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function $p(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Au(t,n,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,n)},a}function tm(t){return t=oa(t),t.tag=3,t}function em(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){$p(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){$p(n,a,s),typeof c!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function v0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return Si===null?Zu():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Qu(t,s,c)),!1;case 22:return a.flags|=65536,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Qu(t,s,c)),!1}throw Error(r(435,a.tag))}return Qu(t,s,c),Zu(),!1}if(Ae)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Yc&&(t=Error(r(422),{cause:s}),Ns(Kn(t,a)))):(s!==Yc&&(n=Error(r(423),{cause:s}),Ns(Kn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Kn(s,a),c=Au(t.stateNode,s,c),iu(t,c),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),to===null?to=[f]:to.push(f),Qe!==4&&(Qe=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Au(a.stateNode,s,t),iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=tm(c),em(c,t,a,s),iu(a,c),!1}a=a.return}while(a!==null);return!1}var nm=Error(r(461)),pn=!1;function xn(t,n,a,s){n.child=t===null?qp(n,null,a,s):zr(n,t.child,a,s)}function im(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return ja(n),s=lu(t,n,a,x,f,c),T=cu(),t!==null&&!pn?(uu(t,n,c),Fi(t,n,c)):(Ae&&T&&Wc(n),n.flags|=1,xn(t,n,s,c),n.child)}function am(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Vc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,rm(t,n,f,s,c)):(t=Wo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Nu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(x,s)&&t.ref===n.ref)return Fi(t,n,c)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function rm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Nu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Fi(t,n,c)}return bu(t,n,a,s,c)}function sm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return om(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ko(n,f!==null?f.cachePool:null),f!==null?rp(n,f):ru(),Yp(n);else return n.lanes=n.childLanes=536870912,om(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Ko(n,f.cachePool),rp(n,f),fa(),n.memoizedState=null):(t!==null&&Ko(n,null),ru(),fa());return xn(t,n,c,a),n.child}function om(t,n,a,s){var c=$c();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Ko(n,null),ru(),Yp(n),t!==null&&Os(t,n,s,!0),null}function dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bu(t,n,a,s,c){return ja(n),a=lu(t,n,a,s,void 0,c),s=cu(),t!==null&&!pn?(uu(t,n,c),Fi(t,n,c)):(Ae&&s&&Wc(n),n.flags|=1,xn(t,n,a,c),n.child)}function lm(t,n,a,s,c,f){return ja(n),n.updateQueue=null,a=op(n,s,a,c),sp(t),s=cu(),t!==null&&!pn?(uu(t,n,f),Fi(t,n,f)):(Ae&&s&&Wc(n),n.flags|=1,xn(t,n,a,f),n.child)}function cm(t,n,a,s,c){if(ja(n),n.stateNode===null){var f=br,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Tu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},eu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):br,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Eu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Tu.enqueueReplaceState(f,f.state,null),Gs(n,s,f,c),Hs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=Qa(a,T);f.props=P;var Q=f.context,ut=a.contextType;x=br,typeof ut=="object"&&ut!==null&&(x=Tn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==x)&&Zp(n,f,s,x),sa=!1;var tt=n.memoizedState;f.state=tt,Gs(n,s,f,c),Hs(),Q=n.memoizedState,T||tt!==Q||sa?(typeof mt=="function"&&(Eu(n,a,mt,s),Q=n.memoizedState),(P=sa||jp(n,a,P,s,tt,Q,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=x,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,nu(t,n),x=n.memoizedProps,ut=Qa(a,x),f.props=ut,mt=n.pendingProps,tt=f.context,Q=a.contextType,P=br,typeof Q=="object"&&Q!==null&&(P=Tn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==mt||tt!==P)&&Zp(n,f,s,P),sa=!1,tt=n.memoizedState,f.state=tt,Gs(n,s,f,c),Hs();var nt=n.memoizedState;x!==mt||tt!==nt||sa||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof T=="function"&&(Eu(n,a,T,s),nt=n.memoizedState),(ut=sa||jp(n,a,ut,s,tt,nt,P)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,nt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,nt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=P,s=ut):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=zr(n,t.child,null,c),n.child=zr(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Fi(t,n,c),t}function um(t,n,a,s){return Ls(),n.flags|=256,xn(t,n,a,s),n.child}var Ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(t){return{baseLanes:t,cachePool:Qd()}}function wu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function fm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(c?ua(n):fa(),Ae){var T=Ke,P;if(P=T){t:{for(P=T,T=xi;P.nodeType!==8;){if(!T){T=null;break t}if(P=ui(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:ka!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},P=Gn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Dn=n,Ke=null,P=!0):P=!1}P||qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return df(T)?n.lanes=32:n.lanes=536870912,null;Ii(n)}return T=s.children,s=s.fallback,c?(fa(),c=n.mode,T=pl({mode:"hidden",children:T},c),s=Va(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=Cu(a),c.childLanes=wu(t,x,a),n.memoizedState=Ru,s):(ua(n),Du(n,T))}if(P=t.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(ua(n),n.flags&=-257,n=Uu(t,n,a)):n.memoizedState!==null?(fa(),n.child=t.child,n.flags|=128,n=null):(fa(),c=s.fallback,T=n.mode,s=pl({mode:"visible",children:s.children},T),c=Va(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,zr(n,t.child,null,a),s=n.child,s.memoizedState=Cu(a),s.childLanes=wu(t,x,a),n.memoizedState=Ru,n=c);else if(ua(n),df(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var Q=x.dgst;x=Q,s=Error(r(419)),s.stack="",s.digest=x,Ns({value:s,source:null,stack:null}),n=Uu(t,n,a)}else if(pn||Os(t,n,a,!1),x=(a&t.childLanes)!==0,pn||x){if(x=Ge,x!==null&&(s=a&-a,s=(s&42)!==0?1:ae(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Ar(t,s),qn(x,t,s),nm;T.data==="$?"||Zu(),n=Uu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Ke=ui(T.nextSibling),Dn=n,Ae=!0,Wa=null,xi=!1,t!==null&&(Jn[$n++]=Ni,Jn[$n++]=Oi,Jn[$n++]=ka,Ni=t.id,Oi=t.overflow,ka=n),n=Du(n,s.children),n.flags|=4096);return n}return c?(fa(),c=s.fallback,T=n.mode,P=t.child,Q=P.sibling,s=Li(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,Q!==null?c=Li(Q,c):(c=Va(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=Cu(a):(P=T.cachePool,P!==null?(Q=ln._currentValue,P=P.parent!==Q?{parent:Q,pool:Q}:P):P=Qd(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=wu(t,x,a),n.memoizedState=Ru,s):(ua(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Du(t,n){return n=pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pl(t,n){return t=Gn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Uu(t,n,a){return zr(n,t.child,null,a),t=Du(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function hm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Zc(t.return,n,a)}function Lu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function dm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(xn(t,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,a,n);else if(t.tag===19)hm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(St(cn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Lu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Lu(n,!0,a,null,f);break;case"together":Lu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function x0(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ra(n,ln,t.memoizedState.cache),Ls();break;case 27:case 5:ie(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ra(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?fm(t,n,a):(ua(n),t=Fi(t,n,a),t!==null?t.sibling:null);ua(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Os(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return dm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,sm(t,n,a);case 24:ra(n,ln,t.memoizedState.cache)}return Fi(t,n,a)}function pm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Nu(t,a)&&(n.flags&128)===0)return pn=!1,x0(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&Xd(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Vc(s)?(t=Qa(s,t),n.tag=1,n=cm(null,n,s,t,a)):(n.tag=0,n=bu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===R){n.tag=11,n=im(null,n,s,t,a);break t}else if(c===F){n.tag=14,n=am(null,n,s,t,a);break t}}throw n=ft(s)||s,Error(r(306,n,""))}}return n;case 0:return bu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Qa(s,n.pendingProps),cm(t,n,s,c,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,nu(t,n),Gs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,ra(n,ln,s),s!==f.cache&&Kc(n,[ln],a,!0),Hs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=um(t,n,s,a);break t}else if(s!==c){c=Kn(Error(r(424)),n),Ns(c),n=um(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=ui(t.firstChild),Dn=n,Ae=!0,Wa=null,xi=!0,a=qp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),s===c){n=Fi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return dl(t,n),t===null?(a=vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=Cl(dt.current).createElement(a),s[on]=n,s[je]=t,Mn(s,a,t),en(s),n.stateNode=s):n.memoizedState=vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ie(n),t===null&&Ae&&(s=n.stateNode=mg(n.type,n.pendingProps,dt.current),Dn=n,xi=!0,c=Ke,Sa(n.type)?(pf=c,Ke=ui(s.firstChild)):Ke=c),xn(t,n,n.pendingProps.children,a),dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((c=s=Ke)&&(s=Y0(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,Dn=n,Ke=ui(s.firstChild),xi=!1,c=!0):c=!1),c||qa(n)),ie(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,uf(c,f)?s=null:x!==null&&uf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=lu(t,n,f0,null,null,a),co._currentValue=c),dl(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=Ke)&&(a=j0(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Dn=n,Ke=null,t=!0):t=!1),t||qa(n)),null;case 13:return fm(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zr(n,null,s,a):xn(t,n,s,a),n.child;case 11:return im(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ra(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ja(n),c=Tn(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return am(t,n,n.type,n.pendingProps,a);case 15:return rm(t,n,n.type,n.pendingProps,a);case 19:return dm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=pl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Li(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return sm(t,n,a);case 24:return ja(n),s=Tn(ln),t===null?(c=$c(),c===null&&(c=Ge,f=Qc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},eu(n),ra(n,ln,c)):((t.lanes&a)!==0&&(nu(t,n),Gs(n,null,null,a),Hs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ra(n,ln,s)):(s=f.cache,ra(n,ln,s),s!==c.cache&&Kc(n,[ln],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function mm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Eg(n)){if(n=ti.current,n!==null&&((xe&4194048)===xe?Si!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==Si))throw Is=tu,Jd;t.flags|=8192}}function ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?At():536870912,t.lanes|=n,Hr|=n)}function js(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function S0(t,n,a){var s=n.pendingProps;switch(qc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(ln),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yd())),Ye(n),null;case 26:return a=n.memoizedState,t===null?(Hi(n),a!==null?(Ye(n),mm(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Hi(n),Ye(n),mm(n,a)):(Ye(n),n.flags&=-16777217):(t.memoizedProps!==s&&Hi(n),Ye(n),n.flags&=-16777217),null;case 27:Fe(n),a=dt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}t=wt.current,Us(n)?Wd(n):(t=mg(c,s,a),n.stateNode=t,Hi(n))}return Ye(n),null;case 5:if(Fe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(t=wt.current,Us(n))Wd(n);else{switch(c=Cl(dt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[on]=n,t[je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Mn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=dt.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lg(t.nodeValue,a)),t||qa(n)}else t=Cl(t).createTextNode(s),t[on]=n,n.stateNode=t}return Ye(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Us(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=Yd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),Ye(n),null;case 4:return Yt(),t===null&&rf(n.stateNode.containerInfo),Ye(n),null;case 10:return zi(n.type),Ye(n),null;case 19:if(vt(cn),c=n.memoizedState,c===null)return Ye(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)js(c,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,js(c,!1),t=f.updateQueue,n.updateQueue=t,ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)kd(a,t),a=a.sibling;return St(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&Ft()>vl&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304)}else{if(!s)if(t=ul(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,ml(n,t),js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return Ye(n),null}else 2*Ft()-c.renderingStartTime>vl&&a!==536870912&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ft(),n.sibling=null,t=cn.current,St(cn,s?t&1|2:t&1),n):(Ye(n),null);case 22:case 23:return Ii(n),su(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(Za),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(ln),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function M0(t,n){switch(qc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zi(ln),Yt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 13:if(Ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(cn),null;case 4:return Yt(),null;case 10:return zi(n.type),null;case 22:case 23:return Ii(n),su(),t!==null&&vt(Za),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zi(ln),null;case 25:return null;default:return null}}function gm(t,n){switch(qc(n),n.tag){case 3:zi(ln),Yt();break;case 26:case 27:case 5:Fe(n);break;case 4:Yt();break;case 13:Ii(n);break;case 19:vt(cn);break;case 10:zi(n.type);break;case 22:case 23:Ii(n),su(),t!==null&&vt(Za);break;case 24:zi(ln)}}function Zs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function ha(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var P=a,Q=T;try{Q()}catch(ut){Ie(c,P,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ie(n,n.return,ut)}}function _m(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ap(n,a)}catch(s){Ie(t,t.return,s)}}}function vm(t,n,a){a.props=Qa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function Ks(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ie(t,n,c)}}function Mi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function xm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function Ou(t,n,a){try{var s=t.stateNode;V0(s,t.type,a,n),s[je]=n}catch(c){Ie(t,t.return,c)}}function Sm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Sa(t.type)||t.tag===4}function Pu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Sm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Sa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Rl));else if(s!==4&&(s===27&&Sa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(zu(t,n,a),t=t.sibling;t!==null;)zu(t,n,a),t=t.sibling}function gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Sa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}function Mm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[on]=t,n[je]=a}catch(f){Ie(t,t.return,f)}}var Gi=!1,$e=!1,Bu=!1,ym=typeof WeakSet=="function"?WeakSet:Set,mn=null;function y0(t,n){if(t=t.containerInfo,lf=Ol,t=Nd(t),Pc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,P=-1,Q=0,ut=0,mt=t,tt=null;e:for(;;){for(var nt;mt!==a||c!==0&&mt.nodeType!==3||(T=x+c),mt!==f||s!==0&&mt.nodeType!==3||(P=x+s),mt.nodeType===3&&(x+=mt.nodeValue.length),(nt=mt.firstChild)!==null;)tt=mt,mt=nt;for(;;){if(mt===t)break e;if(tt===a&&++Q===c&&(T=x),tt===f&&++ut===s&&(P=x),(nt=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=nt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(cf={focusedElem:t,selectionRange:a},Ol=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=Qa(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){Ie(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Em(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),s&4&&Zs(5,a);break;case 1:if(da(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var c=Qa(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}s&64&&_m(a),s&512&&Ks(a,a.return);break;case 3:if(da(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ap(t,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&s&4&&Mm(a);case 26:case 5:da(t,a),n===null&&s&4&&xm(a),s&512&&Ks(a,a.return);break;case 12:da(t,a);break;case 13:da(t,a),s&4&&bm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=U0.bind(null,a),Z0(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||$e,c=Gi;var f=$e;Gi=s,($e=n)&&!f?pa(t,a,(a.subtreeFlags&8772)!==0):da(t,a),Gi=c,$e=f}break;case 30:break;default:da(t,a)}}function Tm(t){var n=t.alternate;n!==null&&(t.alternate=null,Tm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&_r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xe=null,Pn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)Am(t,n,a),a=a.sibling}function Am(t,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:$e||Mi(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Mi(a,n);var s=Xe,c=Pn;Sa(a.type)&&(Xe=a.stateNode,Pn=!1),Vi(t,n,a),ro(a.stateNode),Xe=s,Pn=c;break;case 5:$e||Mi(a,n);case 6:if(s=Xe,c=Pn,Xe=null,Vi(t,n,a),Xe=s,Pn=c,Xe!==null)if(Pn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Xe!==null&&(Pn?(t=Xe,dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),po(t)):dg(Xe,a.stateNode));break;case 4:s=Xe,c=Pn,Xe=a.stateNode.containerInfo,Pn=!0,Vi(t,n,a),Xe=s,Pn=c;break;case 0:case 11:case 14:case 15:$e||ha(2,a,n),$e||ha(4,a,n),Vi(t,n,a);break;case 1:$e||(Mi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&vm(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:$e=(s=$e)||a.memoizedState!==null,Vi(t,n,a),$e=s;break;default:Vi(t,n,a)}}function bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(a){Ie(n,n.return,a)}}function E0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ym),n;default:throw Error(r(435,t.tag))}}function Iu(t,n){var a=E0(t);n.forEach(function(s){var c=L0.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Sa(T.type)){Xe=T.stateNode,Pn=!1;break t}break;case 5:Xe=T.stateNode,Pn=!1;break t;case 3:case 4:Xe=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(Xe===null)throw Error(r(160));Am(f,x,c),Xe=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Rm(n,t),n=n.sibling}var ci=null;function Rm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),s&4&&(ha(3,t,t.return),Zs(3,t),ha(5,t,t.return));break;case 1:Vn(n,t),kn(t),s&512&&($e||a===null||Mi(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ci;if(Vn(n,t),kn(t),s&512&&($e||a===null||Mi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[vi]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[on]=t,en(f),s=f;break t;case"link":var x=Mg("link","href",c).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Mg("meta","content",c).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,en(f),s=f}t.stateNode=s}else yg(c,t.type,t.stateNode);else t.stateNode=Sg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?yg(c,t.type,t.stateNode):Sg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ou(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),s&512&&($e||a===null||Mi(a,a.return)),a!==null&&s&4&&Ou(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),s&512&&($e||a===null||Mi(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(nt){Ie(t,t.return,nt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Ou(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Bu=!0);break;case 6:if(Vn(n,t),kn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(nt){Ie(t,t.return,nt)}}break;case 3:if(Ul=null,c=ci,ci=wl(n.containerInfo),Vn(n,t),ci=c,kn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(nt){Ie(t,t.return,nt)}Bu&&(Bu=!1,Cm(t));break;case 4:s=ci,ci=wl(t.stateNode.containerInfo),Vn(n,t),kn(t),ci=s;break;case 12:Vn(n,t),kn(t);break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xu=Ft()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Iu(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=Gi,ut=$e;if(Gi=Q||c,$e=ut||P,Vn(n,t),$e=ut,Gi=Q,kn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Gi||$e||Ja(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(nt){Ie(P,P.return,nt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(nt){Ie(P,P.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Iu(t,a))));break;case 19:Vn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Iu(t,s)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Sm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Pu(t);gl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ln(x,""),a.flags&=-33);var T=Pu(t);gl(t,T,x);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=Pu(t);zu(t,Q,P);break;default:throw Error(r(161))}}catch(ut){Ie(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Em(t,n.alternate,n),n=n.sibling}function Ja(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ha(4,n,n.return),Ja(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vm(n,n.return,a),Ja(n);break;case 27:ro(n.stateNode);case 26:case 5:Mi(n,n.return),Ja(n);break;case 22:n.memoizedState===null&&Ja(n);break;case 30:Ja(n);break;default:Ja(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:pa(c,f,a),Zs(4,f);break;case 1:if(pa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ie(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)ip(P[c],T)}catch(Q){Ie(s,s.return,Q)}}a&&x&64&&_m(f),Ks(f,f.return);break;case 27:Mm(f);case 26:case 5:pa(c,f,a),a&&s===null&&x&4&&xm(f),Ks(f,f.return);break;case 12:pa(c,f,a);break;case 13:pa(c,f,a),a&&x&4&&bm(c,f);break;case 22:f.memoizedState===null&&pa(c,f,a),Ks(f,f.return);break;case 30:break;default:pa(c,f,a)}n=n.sibling}}function Fu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ps(a))}function Hu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t))}function yi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wm(t,n,a,s),n=n.sibling}function wm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&Zs(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t)));break;case 12:if(c&2048){yi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Ie(n,n.return,P)}}else yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,s):Qs(t,n):f._visibility&2?yi(t,n,a,s):(f._visibility|=2,Br(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Fu(x,n);break;case 24:yi(t,n,a,s),c&2048&&Hu(n.alternate,n);break;default:yi(t,n,a,s)}}function Br(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,T=a,P=s,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Br(f,x,T,P,c),Zs(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Br(f,x,T,P,c):Qs(f,x):(ut._visibility|=2,Br(f,x,T,P,c)),c&&Q&2048&&Fu(x.alternate,x);break;case 24:Br(f,x,T,P,c),c&&Q&2048&&Hu(x.alternate,x);break;default:Br(f,x,T,P,c)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Qs(a,s),c&2048&&Fu(s.alternate,s);break;case 24:Qs(a,s),c&2048&&Hu(s.alternate,s);break;default:Qs(a,s)}n=n.sibling}}var Js=8192;function Ir(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)Dm(t),t=t.sibling}function Dm(t){switch(t.tag){case 26:Ir(t),t.flags&Js&&t.memoizedState!==null&&lx(ci,t.memoizedState,t.memoizedProps);break;case 5:Ir(t);break;case 3:case 4:var n=ci;ci=wl(t.stateNode.containerInfo),Ir(t),ci=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,Ir(t),Js=n):Ir(t));break;default:Ir(t)}}function Um(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Nm(s,t)}Um(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(t),t=t.sibling}function Lm(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&ha(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_l(t)):$s(t);break;default:$s(t)}}function _l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Nm(s,t)}Um(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ha(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,_l(n));break;default:_l(n)}t=t.sibling}}function Nm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Tm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var T0={getCacheForType:function(t){var n=Tn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},A0=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,ge=null,xe=0,De=0,Xn=null,ma=!1,Fr=!1,Gu=!1,ki=0,Qe=0,ga=0,$a=0,Vu=0,ei=0,Hr=0,to=null,zn=null,ku=!1,Xu=0,vl=1/0,xl=null,_a=null,Sn=0,va=null,Gr=null,Vr=0,Wu=0,qu=null,Om=null,eo=0,Yu=null;function Wn(){if((we&2)!==0&&xe!==0)return xe&-xe;if(z.T!==null){var t=wr;return t!==0?t:tf()}return Me()}function Pm(){ei===0&&(ei=(xe&536870912)===0||Ae?k():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function qn(t,n,a){(t===Ge&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(kr(t,0),xa(t,xe,ei,!1)),Bt(t,a),((we&2)===0||t!==Ge)&&(t===Ge&&((we&2)===0&&($a|=a),Qe===4&&xa(t,xe,ei,!1)),Ei(t))}function zm(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Dt(t,n),c=s?C0(t,n):Ku(t,n,!0),f=s;do{if(c===0){Fr&&!s&&xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!b0(a)){c=Ku(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=to;var P=T.current.memoizedState.isDehydrated;if(P&&(kr(T,x).flags|=256),x=Ku(T,x,!1),x!==2){if(Gu&&!P){T.errorRecoveryDisabledLanes|=f,$a|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){kr(t,0),xa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:xa(s,n,ei,!ma);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Xu+300-Ft(),10<c)){if(xa(s,n,ei,!ma),kt(s,0,!0)!==0)break t;s.timeoutHandle=fg(Bm.bind(null,s,a,zn,xl,ku,n,ei,$a,Hr,ma,f,2,-0,0),c);break t}Bm(s,a,zn,xl,ku,n,ei,$a,Hr,ma,f,0,-0,0)}}break}while(!0);Ei(t)}function Bm(t,n,a,s,c,f,x,T,P,Q,ut,mt,tt,nt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(lo={stylesheets:null,count:0,unsuspend:ox},Dm(n),mt=cx(),mt!==null)){t.cancelPendingCommit=mt(Xm.bind(null,t,n,f,a,s,c,x,T,P,ut,1,tt,nt)),xa(t,f,x,!Q);return}Xm(t,n,f,a,s,c,x,T,P)}function b0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xa(t,n,a,s){n&=~Vu,n&=~$a,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-zt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&gt(t,a,n)}function Sl(){return(we&6)===0?(no(0),!1):!0}function ju(){if(ge!==null){if(De===0)var t=ge.return;else t=ge,Pi=Ya=null,fu(t),Pr=null,qs=0,t=ge;for(;t!==null;)gm(t.alternate,t),t=t.return;ge=null}}function kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,X0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ju(),Ge=t,ge=a=Li(t.current,null),xe=n,De=0,Xn=null,ma=!1,Fr=Dt(t,n),Gu=!1,Hr=ei=Vu=$a=ga=Qe=0,zn=to=null,ku=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-zt(s),f=1<<c;n|=t[c],s&=~f}return ki=n,Vo(),a}function Im(t,n){he=null,z.H=ol,n===Bs||n===Qo?(n=ep(),De=3):n===Jd?(n=ep(),De=4):De=n===nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,ge===null&&(Qe=1,hl(t,Kn(n,t.current)))}function Fm(){var t=z.H;return z.H=ol,t===null?ol:t}function Hm(){var t=z.A;return z.A=T0,t}function Zu(){Qe=4,ma||(xe&4194048)!==xe&&ti.current!==null||(Fr=!0),(ga&134217727)===0&&($a&134217727)===0||Ge===null||xa(Ge,xe,ei,!1)}function Ku(t,n,a){var s=we;we|=2;var c=Fm(),f=Hm();(Ge!==t||xe!==n)&&(xl=null,kr(t,n)),n=!1;var x=Qe;t:do try{if(De!==0&&ge!==null){var T=ge,P=Xn;switch(De){case 8:ju(),x=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var Q=De;if(De=0,Xn=null,Xr(t,T,P,Q),a&&Fr){x=0;break t}break;default:Q=De,De=0,Xn=null,Xr(t,T,P,Q)}}R0(),x=Qe;break}catch(ut){Im(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Pi=Ya=null,we=s,z.H=c,z.A=f,ge===null&&(Ge=null,xe=0,Vo()),x}function R0(){for(;ge!==null;)Gm(ge)}function C0(t,n){var a=we;we|=2;var s=Fm(),c=Hm();Ge!==t||xe!==n?(xl=null,vl=Ft()+500,kr(t,n)):Fr=Dt(t,n);t:do try{if(De!==0&&ge!==null){n=ge;var f=Xn;e:switch(De){case 1:De=0,Xn=null,Xr(t,n,f,1);break;case 2:case 9:if($d(f)){De=0,Xn=null,Vm(n);break}n=function(){De!==2&&De!==9||Ge!==t||(De=7),Ei(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:$d(f)?(De=0,Xn=null,Vm(n)):(De=0,Xn=null,Xr(t,n,f,7));break;case 5:var x=null;switch(ge.tag){case 26:x=ge.memoizedState;case 5:case 27:var T=ge;if(!x||Eg(x)){De=0,Xn=null;var P=T.sibling;if(P!==null)ge=P;else{var Q=T.return;Q!==null?(ge=Q,Ml(Q)):ge=null}break e}}De=0,Xn=null,Xr(t,n,f,5);break;case 6:De=0,Xn=null,Xr(t,n,f,6);break;case 8:ju(),Qe=6;break t;default:throw Error(r(462))}}w0();break}catch(ut){Im(t,ut)}while(!0);return Pi=Ya=null,z.H=s,z.A=c,we=a,ge!==null?0:(Ge=null,xe=0,Vo(),Qe)}function w0(){for(;ge!==null&&!Qt();)Gm(ge)}function Gm(t){var n=pm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Ml(t):ge=n}function Vm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=lm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=lm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:fu(n);default:gm(a,n),n=ge=kd(n,ki),n=pm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Ml(t):ge=n}function Xr(t,n,a,s){Pi=Ya=null,fu(n),Pr=null,qs=0;var c=n.return;try{if(v0(t,c,n,a,xe)){Qe=1,hl(t,Kn(a,t.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;Qe=1,hl(t,Kn(a,t.current)),ge=null;return}n.flags&32768?(Ae||s===1?t=!0:Fr||(xe&536870912)!==0?t=!1:(ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),km(n,t)):Ml(n)}function Ml(t){var n=t;do{if((n.flags&32768)!==0){km(n,ma);return}t=n.return;var a=S0(n.alternate,n,ki);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);Qe===0&&(Qe=5)}function km(t,n){do{var a=M0(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);Qe=6,ge=null}function Xm(t,n,a,s,c,f,x,T,P){t.cancelPendingCommit=null;do yl();while(Sn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Hc,Et(t,a,f,x,T,P),t===Ge&&(ge=Ge=null,xe=0),Gr=n,va=t,Vr=a,Wu=f,qu=c,Om=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,N0(We,function(){return Zm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=Z.p,Z.p=2,x=we,we|=4;try{y0(t,n,a)}finally{we=x,Z.p=c,z.T=s}}Sn=1,Wm(),qm(),Ym()}}function Wm(){if(Sn===1){Sn=0;var t=va,n=Gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var c=we;we|=4;try{Rm(n,t);var f=cf,x=Nd(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Ld(T.ownerDocument.documentElement,T)){if(P!==null&&Pc(T)){var Q=P.start,ut=P.end;if(ut===void 0&&(ut=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var nt=tt.getSelection(),ne=T.textContent.length,$t=Math.min(P.start,ne),Oe=P.end===void 0?$t:Math.min(P.end,ne);!nt.extend&&$t>Oe&&(x=Oe,Oe=$t,$t=x);var q=Ud(T,$t),V=Ud(T,Oe);if(q&&V&&(nt.rangeCount!==1||nt.anchorNode!==q.node||nt.anchorOffset!==q.offset||nt.focusNode!==V.node||nt.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(q.node,q.offset),nt.removeAllRanges(),$t>Oe?(nt.addRange(K),nt.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),nt.addRange(K))}}}}for(mt=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&mt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ol=!!lf,cf=lf=null}finally{we=c,Z.p=s,z.T=a}}t.current=n,Sn=2}}function qm(){if(Sn===2){Sn=0;var t=va,n=Gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var c=we;we|=4;try{Em(t,n.alternate,n)}finally{we=c,Z.p=s,z.T=a}}Sn=3}}function Ym(){if(Sn===4||Sn===3){Sn=0,Se();var t=va,n=Gr,a=Vr,s=Om;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Gr=va=null,jm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(_a=null),Ce(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{z.T=n,Z.p=c}}(Vr&3)!==0&&yl(),Ei(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Yu?eo++:(eo=0,Yu=t):eo=0,no(0)}}function jm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ps(n)))}function yl(t){return Wm(),qm(),Ym(),Zm()}function Zm(){if(Sn!==5)return!1;var t=va,n=Wu;Wu=0;var a=Ce(Vr),s=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=qu,qu=null;var f=va,x=Vr;if(Sn=0,Gr=va=null,Vr=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,Lm(f.current),wm(f,f.current,x,a),we=T,no(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{Z.p=c,z.T=s,jm(t,n)}}function Km(t,n,a){n=Kn(a,n),n=Au(t.stateNode,n,2),t=la(t,n,2),t!==null&&(Bt(t,2),Ei(t))}function Ie(t,n,a){if(t.tag===3)Km(t,t,a);else for(;n!==null;){if(n.tag===3){Km(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_a===null||!_a.has(s))){t=Kn(a,t),a=tm(2),s=la(n,a,2),s!==null&&(em(a,s,n,t),Bt(s,2),Ei(s));break}}n=n.return}}function Qu(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new A0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Gu=!0,c.add(a),t=D0.bind(null,t,n,a),n.then(t,t))}function D0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(xe&a)===a&&(Qe===4||Qe===3&&(xe&62914560)===xe&&300>Ft()-Xu?(we&2)===0&&kr(t,0):Vu|=a,Hr===xe&&(Hr=0)),Ei(t)}function Qm(t,n){n===0&&(n=At()),t=Ar(t,n),t!==null&&(Bt(t,n),Ei(t))}function U0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qm(t,a)}function L0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Qm(t,a)}function N0(t,n){return H(t,n)}var El=null,Wr=null,Ju=!1,Tl=!1,$u=!1,tr=0;function Ei(t){t!==Wr&&t.next===null&&(Wr===null?El=Wr=t:Wr=Wr.next=t),Tl=!0,Ju||(Ju=!0,P0())}function no(t,n){if(!$u&&Tl){$u=!0;do for(var a=!1,s=El;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,eg(s,f))}else f=xe,f=kt(s,s===Ge?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Dt(s,f)||(a=!0,eg(s,f));s=s.next}while(a);$u=!1}}function O0(){Jm()}function Jm(){Tl=Ju=!1;var t=0;tr!==0&&(k0()&&(t=tr),tr=0);for(var n=Ft(),a=null,s=El;s!==null;){var c=s.next,f=$m(s,n);f===0?(s.next=null,a===null?El=c:a.next=c,c===null&&(Wr=a)):(a=s,(t!==0||(f&3)!==0)&&(Tl=!0)),s=c}no(t)}function $m(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-zt(f),T=1<<x,P=c[x];P===-1?((T&a)===0||(T&s)!==0)&&(c[x]=re(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ge,a=xe,a=kt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Re(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Dt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Re(s),Ce(a)){case 2:case 8:a=se;break;case 32:a=We;break;case 268435456:a=N;break;default:a=We}return s=tg.bind(null,t),a=H(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Re(s),t.callbackPriority=2,t.callbackNode=null,2}function tg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(yl()&&t.callbackNode!==a)return null;var s=xe;return s=kt(t,t===Ge?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(zm(t,s,n),$m(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?tg.bind(null,t):null)}function eg(t,n){if(yl())return null;zm(t,n,!0)}function P0(){W0(function(){(we&6)!==0?H(Ht,O0):Jm()})}function tf(){return tr===0&&(tr=k()),tr}function ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function ig(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function z0(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=ng((c[je]||null).action),x=s.submitter;x&&(n=(n=x[je]||null)?ng(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Fo("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(tr!==0){var P=x?ig(c,x):new FormData(c);Su(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=x?ig(c,x):new FormData(c),Su(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var ef=0;ef<Fc.length;ef++){var nf=Fc[ef],B0=nf.toLowerCase(),I0=nf[0].toUpperCase()+nf.slice(1);li(B0,"on"+I0)}li(zd,"onAnimationEnd"),li(Bd,"onAnimationIteration"),li(Id,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(e0,"onTransitionRun"),li(n0,"onTransitionStart"),li(i0,"onTransitionCancel"),li(Fd,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function ag(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],P=T.instance,Q=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ut){fl(ut)}c.currentTarget=null,f=P}else for(x=0;x<s.length;x++){if(T=s[x],P=T.instance,Q=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ut){fl(ut)}c.currentTarget=null,f=P}}}}function _e(t,n){var a=n[mr];a===void 0&&(a=n[mr]=new Set);var s=t+"__bubble";a.has(s)||(rg(n,t,2,!1),a.add(s))}function af(t,n,a){var s=0;n&&(s|=4),rg(a,t,s,n)}var Al="_reactListening"+Math.random().toString(36).slice(2);function rf(t){if(!t[Al]){t[Al]=!0,No.forEach(function(a){a!=="selectionchange"&&(F0.has(a)||af(a,!1,t),af(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Al]||(n[Al]=!0,af("selectionchange",!1,n))}}function rg(t,n,a,s){switch(wg(n)){case 2:var c=hx;break;case 8:c=dx;break;default:c=xf}a=c.bind(null,n,a,t),c=void 0,!bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function sf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=s.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=Di(T),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){s=f=x;continue t}T=T.parentNode}}s=s.return}hd(function(){var Q=f,ut=Tc(a),mt=[];t:{var tt=Hd.get(t);if(tt!==void 0){var nt=Fo,ne=t;switch(t){case"keypress":if(Bo(a)===0)break t;case"keydown":case"keyup":nt=Nv;break;case"focusin":ne="focus",nt=Dc;break;case"focusout":ne="blur",nt=Dc;break;case"beforeblur":case"afterblur":nt=Dc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=zv;break;case zd:case Bd:case Id:nt=Tv;break;case Fd:nt=Iv;break;case"scroll":case"scrollend":nt=xv;break;case"wheel":nt=Hv;break;case"copy":case"cut":case"paste":nt=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=_d;break;case"toggle":case"beforetoggle":nt=Vv}var $t=(n&4)!==0,Oe=!$t&&(t==="scroll"||t==="scrollend"),q=$t?tt!==null?tt+"Capture":null:tt;$t=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||q===null||(pt=ys(V,q),pt!=null&&$t.push(ao(V,pt,K))),Oe)break;V=V.return}0<$t.length&&(tt=new nt(tt,ne,null,a,ut),mt.push({event:tt,listeners:$t}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",tt&&a!==Ec&&(ne=a.relatedTarget||a.fromElement)&&(Di(ne)||ne[_i]))break t;if((nt||tt)&&(tt=ut.window===ut?ut:(tt=ut.ownerDocument)?tt.defaultView||tt.parentWindow:window,nt?(ne=a.relatedTarget||a.toElement,nt=Q,ne=ne?Di(ne):null,ne!==null&&(Oe=u(ne),$t=ne.tag,ne!==Oe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(nt=null,ne=Q),nt!==ne)){if($t=md,pt="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=_d,pt="onPointerLeave",q="onPointerEnter",V="pointer"),Oe=nt==null?tt:Ia(nt),K=ne==null?tt:Ia(ne),tt=new $t(pt,V+"leave",nt,a,ut),tt.target=Oe,tt.relatedTarget=K,pt=null,Di(ut)===Q&&($t=new $t(q,V+"enter",ne,a,ut),$t.target=K,$t.relatedTarget=Oe,pt=$t),Oe=pt,nt&&ne)e:{for($t=nt,q=ne,V=0,K=$t;K;K=qr(K))V++;for(K=0,pt=q;pt;pt=qr(pt))K++;for(;0<V-K;)$t=qr($t),V--;for(;0<K-V;)q=qr(q),K--;for(;V--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=qr($t),q=qr(q)}$t=null}else $t=null;nt!==null&&sg(mt,tt,nt,$t,!1),ne!==null&&Oe!==null&&sg(mt,Oe,ne,$t,!0)}}t:{if(tt=Q?Ia(Q):window,nt=tt.nodeName&&tt.nodeName.toLowerCase(),nt==="select"||nt==="input"&&tt.type==="file")var Gt=Ad;else if(Ed(tt))if(bd)Gt=Jv;else{Gt=Kv;var de=Zv}else nt=tt.nodeName,!nt||nt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&yc(Q.elementType)&&(Gt=Ad):Gt=Qv;if(Gt&&(Gt=Gt(t,Q))){Td(mt,Gt,a,ut);break t}de&&de(t,tt,Q),t==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&En(tt,"number",tt.value)}switch(de=Q?Ia(Q):window,t){case"focusin":(Ed(de)||de.contentEditable==="true")&&(yr=de,zc=Q,Ds=null);break;case"focusout":Ds=zc=yr=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Od(mt,a,ut);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":Od(mt,a,ut)}var jt;if(Lc)t:{switch(t){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Mr?Md(t,a)&&(ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(vd&&a.locale!=="ko"&&(Mr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Mr&&(jt=dd()):(aa=ut,Rc="value"in aa?aa.value:aa.textContent,Mr=!0)),de=bl(Q,ee),0<de.length&&(ee=new gd(ee,t,null,a,ut),mt.push({event:ee,listeners:de}),jt?ee.data=jt:(jt=yd(a),jt!==null&&(ee.data=jt)))),(jt=Xv?Wv(t,a):qv(t,a))&&(ee=bl(Q,"onBeforeInput"),0<ee.length&&(de=new gd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:de,listeners:ee}),de.data=jt)),z0(mt,t,Q,a,ut)}ag(mt,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ys(t,a),c!=null&&s.unshift(ao(t,c,f)),c=ys(t,n),c!=null&&s.push(ao(t,c,f))),t.tag===3)return s;t=t.return}return[]}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sg(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,P=T.alternate,Q=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||Q===null||(P=Q,c?(Q=ys(a,f),Q!=null&&x.unshift(ao(a,Q,P))):c||(Q=ys(a,f),Q!=null&&x.push(ao(a,Q,P)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var H0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(H0,`
`).replace(G0,"")}function lg(t,n){return n=og(n),og(t)===n}function Rl(){}function Ne(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":It(t,"class",s);break;case"tabIndex":It(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":It(t,a,s);break;case"style":ud(t,s,f);break;case"data":if(n!=="object"){It(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",c.name,c,null),Ne(t,n,"formEncType",c.formEncType,c,null),Ne(t,n,"formMethod",c.formMethod,c,null),Ne(t,n,"formTarget",c.formTarget,c,null)):(Ne(t,n,"encType",c.encType,c,null),Ne(t,n,"method",c.method,c,null),Ne(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),Ut(t,"popover",s);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ut(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_v.get(a)||a,Ut(t,a,s))}}function of(t,n,a,s,c,f){switch(a){case"style":ud(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[je]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ut(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,x,a,null)}}c&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=x=c=null,P=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":x=ut;break;case"checked":P=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ne(t,n,s,ut,a,null)}}wn(t,f,T,P,Q,x,c,!1),me(t);return;case"select":_e("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Ne(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!s,n!=null?Ze(t,!!s,n,!1):a!=null&&Ze(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(t,n,x,T,a,null)}vr(t,s,c,f),me(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,P,s,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<io.length;s++)_e(io[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,Q,s,a,null)}return;default:if(yc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&of(t,n,ut,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ne(t,n,T,s,a,null))}function V0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,P=null,Q=null,ut=null;for(nt in a){var mt=a[nt];if(a.hasOwnProperty(nt)&&mt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":P=mt;default:s.hasOwnProperty(nt)||Ne(t,n,nt,null,s,mt)}}for(var tt in s){var nt=s[tt];if(mt=a[tt],s.hasOwnProperty(tt)&&(nt!=null||mt!=null))switch(tt){case"type":f=nt;break;case"name":c=nt;break;case"checked":Q=nt;break;case"defaultChecked":ut=nt;break;case"value":x=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==mt&&Ne(t,n,tt,nt,s,mt)}}Be(t,x,T,P,Q,ut,f,c);return;case"select":nt=x=T=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":nt=P;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==P&&Ne(t,n,c,f,s,P)}n=T,a=x,s=nt,tt!=null?Ze(t,!!a,tt,!1):!!s!=!!a&&(n!=null?Ze(t,!!a,n,!0):Ze(t,!!a,a?[]:"",!1));return;case"textarea":nt=tt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(t,n,T,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":tt=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ne(t,n,x,c,s,f)}vn(t,tt,nt);return;case"option":for(var ne in a)if(tt=a[ne],a.hasOwnProperty(ne)&&tt!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":t.selected=!1;break;default:Ne(t,n,ne,null,s,tt)}for(P in s)if(tt=s[P],nt=a[P],s.hasOwnProperty(P)&&tt!==nt&&(tt!=null||nt!=null))switch(P){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ne(t,n,P,tt,s,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)tt=a[$t],a.hasOwnProperty($t)&&tt!=null&&!s.hasOwnProperty($t)&&Ne(t,n,$t,null,s,tt);for(Q in s)if(tt=s[Q],nt=a[Q],s.hasOwnProperty(Q)&&tt!==nt&&(tt!=null||nt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Ne(t,n,Q,tt,s,nt)}return;default:if(yc(n)){for(var Oe in a)tt=a[Oe],a.hasOwnProperty(Oe)&&tt!==void 0&&!s.hasOwnProperty(Oe)&&of(t,n,Oe,void 0,s,tt);for(ut in s)tt=s[ut],nt=a[ut],!s.hasOwnProperty(ut)||tt===nt||tt===void 0&&nt===void 0||of(t,n,ut,tt,s,nt);return}}for(var q in a)tt=a[q],a.hasOwnProperty(q)&&tt!=null&&!s.hasOwnProperty(q)&&Ne(t,n,q,null,s,tt);for(mt in s)tt=s[mt],nt=a[mt],!s.hasOwnProperty(mt)||tt===nt||tt==null&&nt==null||Ne(t,n,mt,tt,s,nt)}var lf=null,cf=null;function Cl(t){return t.nodeType===9?t:t.ownerDocument}function cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ff=null;function k0(){var t=window.event;return t&&t.type==="popstate"?t===ff?!1:(ff=t,!0):(ff=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(q0)}:fg;function q0(t){setTimeout(function(){throw t})}function Sa(t){return t==="head"}function dg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&ro(x.documentElement),a&2&&ro(x.body),a&4)for(a=x.head,ro(a),x=a.firstChild;x;){var T=x.nextSibling,P=x.nodeName;x[vi]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(c===0){t.removeChild(f),po(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);po(n)}function hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hf(a),_r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Y0(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[vi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function j0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Z0(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var pf=null;function pg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function mg(t,n,a){switch(n=Cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_r(t)}var ni=new Map,gg=new Set;function wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=Z.d;Z.d={f:K0,r:Q0,D:J0,C:$0,L:tx,m:ex,X:ix,S:nx,M:ax};function K0(){var t=Xi.f(),n=Sl();return t||n}function Q0(t){var n=na(t);n!==null&&n.tag===5&&n.type==="form"?zp(n):Xi.r(t)}var Yr=typeof document>"u"?null:document;function _g(t,n,a){var s=Yr;if(s&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),gg.has(c)||(gg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function J0(t){Xi.D(t),_g("dns-prefetch",t,null)}function $0(t,n){Xi.C(t,n),_g("preconnect",t,n)}function tx(t,n,a){Xi.L(t,n,a);var s=Yr;if(s&&t&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(t)+'"]';var f=c;switch(n){case"style":f=jr(t);break;case"script":f=Zr(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(so(f))||n==="script"&&s.querySelector(oo(f))||(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function ex(t,n){Xi.m(t,n);var a=Yr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(s)+'"][href="'+dn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(oo(f)))return}s=a.createElement("link"),Mn(s,"link",t),en(s),a.head.appendChild(s)}}}function nx(t,n,a){Xi.S(t,n,a);var s=Yr;if(s&&t){var c=ia(s).hoistableStyles,f=jr(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(so(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&mf(t,a);var P=x=s.createElement("link");en(P),Mn(P,"link",t),P._p=new Promise(function(Q,ut){P.onload=Q,P.onerror=ut}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Dl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function ix(t,n){Xi.X(t,n);var a=Yr;if(a&&t){var s=ia(a).hoistableScripts,c=Zr(t),f=s.get(c);f||(f=a.querySelector(oo(c)),f||(t=g({src:t,async:!0},n),(n=ni.get(c))&&gf(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ax(t,n){Xi.M(t,n);var a=Yr;if(a&&t){var s=ia(a).hoistableScripts,c=Zr(t),f=s.get(c);f||(f=a.querySelector(oo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&gf(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function vg(t,n,a,s){var c=(c=dt.current)?wl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=ia(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var f=ia(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(so(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||rx(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=ia(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function jr(t){return'href="'+dn(t)+'"'}function so(t){return'link[rel="stylesheet"]['+t+"]"}function xg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function rx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),en(n),t.head.appendChild(n))}function Zr(t){return'[src="'+dn(t)+'"]'}function oo(t){return"script[async]"+t}function Sg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),Mn(s,"style",c),Dl(s,a.precedence,t),n.instance=s;case"stylesheet":c=jr(a.href);var f=t.querySelector(so(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=xg(a),(c=ni.get(c))&&mf(s,c),f=(t.ownerDocument||t).createElement("link"),en(f);var x=f;return x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),Mn(f,"link",s),n.state.loading|=4,Dl(f,a.precedence,t),n.instance=f;case"script":return f=Zr(a.src),(c=t.querySelector(oo(f)))?(n.instance=c,en(c),c):(s=a,(c=ni.get(f))&&(s=g({},a),gf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),en(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Dl(s,a.precedence,t));return n.instance}function Dl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ul=null;function Mg(t,n,a){if(Ul===null){var s=new Map,c=Ul=new Map;c.set(a,s)}else c=Ul,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[vi]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function yg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function sx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lo=null;function ox(){}function lx(t,n,a){if(lo===null)throw Error(r(475));var s=lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=jr(a.href),f=t.querySelector(so(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ll.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=xg(a),(c=ni.get(c))&&mf(a,c),f=f.createElement("link"),en(f);var x=f;x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ll.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function cx(){if(lo===null)throw Error(r(475));var t=lo;return t.stylesheets&&t.count===0&&_f(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&_f(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)_f(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nl=null;function _f(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nl=new Map,n.forEach(ux,t),Nl=null,Ll.call(t))}function ux(t,n){if(!(n.state.loading&4)){var a=Nl.get(t);if(a)var s=a.get(null);else{a=new Map,Nl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Ll.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var co={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function fx(t,n,a,s,c,f,x,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Tg(t,n,a,s,c,f,x,T,P,Q,ut,mt){return t=new fx(t,n,a,x,T,P,Q,mt),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=Qc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},eu(f),t}function Ag(t){return t?(t=br,t):br}function bg(t,n,a,s,c,f){c=Ag(c),s.context===null?s.context=c:s.pendingContext=c,s=oa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=la(t,s,n),a!==null&&(qn(a,t,n),Fs(a,t,n))}function Rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vf(t,n){Rg(t,n),(t=t.alternate)&&Rg(t,n)}function Cg(t){if(t.tag===13){var n=Ar(t,67108864);n!==null&&qn(n,t,67108864),vf(t,67108864)}}var Ol=!0;function hx(t,n,a,s){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,xf(t,n,a,s)}finally{Z.p=f,z.T=c}}function dx(t,n,a,s){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,xf(t,n,a,s)}finally{Z.p=f,z.T=c}}function xf(t,n,a,s){if(Ol){var c=Sf(s);if(c===null)sf(t,n,s,Pl,a),Dg(t,s);else if(mx(c,t,n,a,s))s.stopPropagation();else if(Dg(t,s),n&4&&-1<px.indexOf(t)){for(;c!==null;){var f=na(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Zt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var P=1<<31-zt(x);T.entanglements[1]|=P,x&=~P}Ei(f),(we&6)===0&&(vl=Ft()+500,no(0))}}break;case 13:T=Ar(f,2),T!==null&&qn(T,f,2),Sl(),vf(f,2)}if(f=Sf(s),f===null&&sf(t,n,s,Pl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else sf(t,n,s,null,a)}}function Sf(t){return t=Tc(t),Mf(t)}var Pl=null;function Mf(t){if(Pl=null,t=Di(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pl=t,null}function wg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case Ht:return 2;case se:return 8;case We:case qe:return 32;case N:return 268435456;default:return 32}default:return 32}}var yf=!1,Ma=null,ya=null,Ea=null,uo=new Map,fo=new Map,Ta=[],px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dg(t,n){switch(t){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=na(n),n!==null&&Cg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function mx(t,n,a,s,c){switch(n){case"focusin":return Ma=ho(Ma,t,n,a,s,c),!0;case"dragenter":return ya=ho(ya,t,n,a,s,c),!0;case"mouseover":return Ea=ho(Ea,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return uo.set(f,ho(uo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,s,c)),!0}return!1}function Ug(t){var n=Di(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,si(t.priority,function(){if(a.tag===13){var s=Wn();s=ae(s);var c=Ar(a,s);c!==null&&qn(c,a,s),vf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ec=s,a.target.dispatchEvent(s),Ec=null}else return n=na(a),n!==null&&Cg(n),t.blockedOn=a,!1;n.shift()}return!0}function Lg(t,n,a){zl(t)&&a.delete(n)}function gx(){yf=!1,Ma!==null&&zl(Ma)&&(Ma=null),ya!==null&&zl(ya)&&(ya=null),Ea!==null&&zl(Ea)&&(Ea=null),uo.forEach(Lg),fo.forEach(Lg)}function Bl(t,n){t.blockedOn===n&&(t.blockedOn=null,yf||(yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,gx)))}var Il=null;function Ng(t){Il!==t&&(Il=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Il===t&&(Il=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Mf(s||a)===null)continue;break}var f=na(a);f!==null&&(t.splice(n,3),n-=3,Su(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function po(t){function n(P){return Bl(P,t)}Ma!==null&&Bl(Ma,t),ya!==null&&Bl(ya,t),Ea!==null&&Bl(Ea,t),uo.forEach(n),fo.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Ug(a),a.blockedOn===null&&Ta.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[je]||null;if(typeof f=="function")x||Ng(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[je]||null)T=x.formAction;else if(Mf(c)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Ng(a)}}}function Ef(t){this._internalRoot=t}Fl.prototype.render=Ef.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();bg(a,s,t,n,null,null)},Fl.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;bg(t.current,2,null,t,null,null),Sl(),n[_i]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,t),a===0&&Ug(t)}};var Og=e.version;if(Og!=="19.1.1")throw Error(r(527,Og,"19.1.1"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var _x={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{ct=Hl.inject(_x),_t=Hl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Kp,f=Qp,x=Jp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Tg(t,1,!1,null,null,a,s,c,f,x,T,null),t[_i]=n.current,rf(t),new Ef(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Kp,x=Qp,T=Jp,P=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=Tg(t,1,!0,n,a??null,s,c,f,x,T,P,Q),n.context=Ag(null),a=n.current,s=Wn(),s=ae(s),c=oa(s),c.callback=null,la(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Ei(n),t[_i]=n.current,rf(t),new Fl(n)},go.version="19.1.1",go}var Xg;function Cx(){if(Xg)return bf.exports;Xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),bf.exports=Rx(),bf.exports}var wx=Cx();const Dx=H_(wx);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="179",Ux=0,Wg=1,Lx=2,G_=1,Nx=2,Ki=3,Pa=0,In=1,Qi=2,Na=0,fs=1,qg=2,Yg=3,jg=4,Ox=5,cr=100,Px=101,zx=102,Bx=103,Ix=104,Fx=200,Hx=201,Gx=202,Vx=203,lh=204,ch=205,kx=206,Xx=207,Wx=208,qx=209,Yx=210,jx=211,Zx=212,Kx=213,Qx=214,uh=0,fh=1,hh=2,ps=3,dh=4,ph=5,mh=6,gh=7,V_=0,Jx=1,$x=2,Oa=0,tS=1,eS=2,nS=3,iS=4,aS=5,rS=6,sS=7,k_=300,ms=301,gs=302,_h=303,vh=304,vc=306,xh=1e3,fr=1001,Sh=1002,gi=1003,oS=1004,Gl=1005,Ai=1006,Df=1007,hr=1008,ta=1009,X_=1010,W_=1011,Eo=1012,Qh=1013,dr=1014,Ji=1015,Ro=1016,Jh=1017,$h=1018,To=1020,q_=35902,Y_=1021,j_=1022,mi=1023,Ao=1026,bo=1027,Z_=1028,td=1029,K_=1030,ed=1031,nd=1033,cc=33776,uc=33777,fc=33778,hc=33779,Mh=35840,yh=35841,Eh=35842,Th=35843,Ah=36196,bh=37492,Rh=37496,Ch=37808,wh=37809,Dh=37810,Uh=37811,Lh=37812,Nh=37813,Oh=37814,Ph=37815,zh=37816,Bh=37817,Ih=37818,Fh=37819,Hh=37820,Gh=37821,dc=36492,Vh=36494,kh=36495,Q_=36283,Xh=36284,Wh=36285,qh=36286,lS=3200,cS=3201,uS=0,fS=1,La="",ai="srgb",_s="srgb-linear",mc="linear",Pe="srgb",Kr=7680,Zg=519,hS=512,dS=513,pS=514,J_=515,mS=516,gS=517,_S=518,vS=519,Kg=35044,Qg="300 es",bi=2e3,gc=2001;class xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=Math.PI/180,Yh=180/Math.PI;function Co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function xS(o,e){return(o%e+e)%e}function Lf(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,i=0){be.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const S=u[h+0],y=u[h+1],b=u[h+2],D=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=D;return}if(v!==D||m!==S||p!==y||g!==b){let M=1-d;const _=m*S+p*y+g*b+v*D,O=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const B=Math.sqrt(L),G=Math.atan2(B,_*O);M=Math.sin(M*G)/B,d=Math.sin(d*G)/B}const R=d*O;if(m=m*M+S*R,p=p*M+y*R,g=g*M+b*R,v=v*M+D*R,M===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],S=u[h+1],y=u[h+2],b=u[h+3];return e[i]=d*b+g*v+m*y-p*S,e[i+1]=m*b+g*S+p*v-d*y,e[i+2]=p*b+g*y+d*S-m*v,e[i+3]=g*b-d*v-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),S=m(r/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"YXZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"ZXY":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"ZYX":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"YZX":this._x=S*g*v+p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v-S*y*b;break;case"XZY":this._x=S*g*v-p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Jg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Jg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nf.copy(this).projectOnVector(e),this.sub(Nf)}reflect(e){return this.sub(Nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nf=new it,Jg=new wo;class le{constructor(e,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],y=r[5],b=r[8],D=l[0],M=l[3],_=l[6],O=l[1],L=l[4],R=l[7],B=l[2],G=l[5],F=l[8];return u[0]=h*D+d*O+m*B,u[3]=h*M+d*L+m*G,u[6]=h*_+d*R+m*F,u[1]=p*D+g*O+v*B,u[4]=p*M+g*L+v*G,u[7]=p*_+g*R+v*F,u[2]=S*D+y*O+b*B,u[5]=S*M+y*L+b*G,u[8]=S*_+y*R+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,S=d*m-g*u,y=p*u-h*m,b=i*v+r*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=v*D,e[1]=(l*p-g*r)*D,e[2]=(d*r-l*h)*D,e[3]=S*D,e[4]=(g*i-l*m)*D,e[5]=(l*u-d*i)*D,e[6]=y*D,e[7]=(r*m-p*i)*D,e[8]=(h*i-r*u)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Of.makeScale(e,i)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,i){return this.premultiply(Of.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Of=new le;function $_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function SS(){const o=_c("canvas");return o.style.display="block",o}const $g={};function hs(o){o in $g||($g[o]=!0,console.warn(o))}function MS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const t_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yS(){const o={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=$i(l.r),l.g=$i(l.g),l.b=$i(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=ds(l.r),l.g=ds(l.g),l.b=ds(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===La?mc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[_s]:{primaries:e,whitePoint:r,transfer:mc,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Te=yS();function $i(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class ES{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qr===void 0&&(Qr=_c("canvas")),Qr.width=e.width,Qr.height=e.height;const l=Qr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=_c("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=$i(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($i(i[r]/255)*255):i[r]=$i(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TS=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Pf(l[h].image)):u.push(Pf(l[h]))}else u=Pf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Pf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ES.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;const zf=new it;class Fn extends xs{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=fr,l=fr,u=Ai,h=hr,d=mi,m=ta,p=Fn.DEFAULT_ANISOTROPY,g=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Co(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zf).x}get height(){return this.source.getSize(zf).y}get depth(){return this.source.getSize(zf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=k_;Fn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],S=m[1],y=m[5],b=m[9],D=m[2],M=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-D)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+D)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,R=(y+1)/2,B=(_+1)/2,G=(g+S)/4,F=(v+D)/4,X=(b+M)/4;return L>R&&L>B?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=G/r,u=F/r):R>B?R<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),r=G/l,u=X/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=F/u,l=X/u),this.set(r,l,u,i),this}let O=Math.sqrt((M-b)*(M-b)+(v-D)*(v-D)+(S-g)*(S-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(v-D)/O,this.z=(S-g)/O,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bS extends xs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new id(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends bS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class tv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vl.copy(r.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),kl.subVectors(this.max,vo),Jr.subVectors(e.a,vo),$r.subVectors(e.b,vo),ts.subVectors(e.c,vo),ba.subVectors($r,Jr),Ra.subVectors(ts,$r),er.subVectors(Jr,ts);let i=[0,-ba.z,ba.y,0,-Ra.z,Ra.y,0,-er.z,er.y,ba.z,0,-ba.x,Ra.z,0,-Ra.x,er.z,0,-er.x,-ba.y,ba.x,0,-Ra.y,Ra.x,0,-er.y,er.x,0];return!Bf(i,Jr,$r,ts,kl)||(i=[1,0,0,0,1,0,0,0,1],!Bf(i,Jr,$r,ts,kl))?!1:(Xl.crossVectors(ba,Ra),i=[Xl.x,Xl.y,Xl.z],Bf(i,Jr,$r,ts,kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new it,new it,new it,new it,new it,new it,new it,new it],fi=new it,Vl=new Do,Jr=new it,$r=new it,ts=new it,ba=new it,Ra=new it,er=new it,vo=new it,kl=new it,Xl=new it,nr=new it;function Bf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){nr.fromArray(o,u);const d=l.x*Math.abs(nr.x)+l.y*Math.abs(nr.y)+l.z*Math.abs(nr.z),m=e.dot(nr),p=i.dot(nr),g=r.dot(nr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const CS=new Do,xo=new it,If=new it;class ad{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):CS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const i=xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(If.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(If)),this.expandByPoint(xo.copy(e.center).sub(If))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qi=new it,Ff=new it,Wl=new it,Ca=new it,Hf=new it,ql=new it,Gf=new it;class wS{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ff.copy(e).add(i).multiplyScalar(.5),Wl.copy(i).sub(e).normalize(),Ca.copy(this.origin).sub(Ff);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Wl),d=Ca.dot(this.direction),m=-Ca.dot(Wl),p=Ca.lengthSq(),g=Math.abs(1-h*h);let v,S,y,b;if(g>0)if(v=h*m-d,S=h*d-m,b=u*g,v>=0)if(S>=-b)if(S<=b){const D=1/g;v*=D,S*=D,y=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ff).addScaledVector(Wl,S),y}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,u){Hf.subVectors(i,e),ql.subVectors(r,e),Gf.crossVectors(Hf,ql);let h=this.direction.dot(Gf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ca.subVectors(this.origin,e);const m=d*this.direction.dot(ql.crossVectors(Ca,ql));if(m<0)return null;const p=d*this.direction.dot(Hf.cross(Ca));if(p<0||m+p>h)return null;const g=-d*Ca.dot(Gf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,i,r,l,u,h,d,m,p,g,v,S,y,b,D,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,S,y,b,D,M)}set(e,i,r,l,u,h,d,m,p,g,v,S,y,b,D,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=b,_[11]=D,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/es.setFromMatrixColumn(e,0).length(),u=1/es.setFromMatrixColumn(e,1).length(),h=1/es.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*g,y=h*v,b=d*g,D=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=S-D*p,i[9]=-d*m,i[2]=D-S*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,y=m*v,b=p*g,D=p*v;i[0]=S+D*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=D+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,y=m*v,b=p*g,D=p*v;i[0]=S-D*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=D-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,y=h*v,b=d*g,D=d*v;i[0]=m*g,i[4]=b*p-y,i[8]=S*p+D,i[1]=m*v,i[5]=D*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,b=d*m,D=d*p;i[0]=m*g,i[4]=D-S*v,i[8]=b*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+b,i[10]=S-D*v}else if(e.order==="XZY"){const S=h*m,y=h*p,b=d*m,D=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+D,i[5]=h*g,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*g,i[10]=D*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DS,e,US)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),wa.crossVectors(r,Yn),wa.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),wa.crossVectors(r,Yn)),wa.normalize(),Yl.crossVectors(Yn,wa),l[0]=wa.x,l[4]=Yl.x,l[8]=Yn.x,l[1]=wa.y,l[5]=Yl.y,l[9]=Yn.y,l[2]=wa.z,l[6]=Yl.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],y=r[13],b=r[2],D=r[6],M=r[10],_=r[14],O=r[3],L=r[7],R=r[11],B=r[15],G=l[0],F=l[4],X=l[8],w=l[12],C=l[1],I=l[5],st=l[9],lt=l[13],ft=l[2],ht=l[6],z=l[10],Z=l[14],Y=l[3],xt=l[7],U=l[11],J=l[15];return u[0]=h*G+d*C+m*ft+p*Y,u[4]=h*F+d*I+m*ht+p*xt,u[8]=h*X+d*st+m*z+p*U,u[12]=h*w+d*lt+m*Z+p*J,u[1]=g*G+v*C+S*ft+y*Y,u[5]=g*F+v*I+S*ht+y*xt,u[9]=g*X+v*st+S*z+y*U,u[13]=g*w+v*lt+S*Z+y*J,u[2]=b*G+D*C+M*ft+_*Y,u[6]=b*F+D*I+M*ht+_*xt,u[10]=b*X+D*st+M*z+_*U,u[14]=b*w+D*lt+M*Z+_*J,u[3]=O*G+L*C+R*ft+B*Y,u[7]=O*F+L*I+R*ht+B*xt,u[11]=O*X+L*st+R*z+B*U,u[15]=O*w+L*lt+R*Z+B*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],S=e[10],y=e[14],b=e[3],D=e[7],M=e[11],_=e[15];return b*(+u*m*v-l*p*v-u*d*S+r*p*S+l*d*y-r*m*y)+D*(+i*m*y-i*p*S+u*h*S-l*h*y+l*p*g-u*m*g)+M*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*S+l*h*v-r*h*S+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],S=e[10],y=e[11],b=e[12],D=e[13],M=e[14],_=e[15],O=v*M*p-D*S*p+D*m*y-d*M*y-v*m*_+d*S*_,L=b*S*p-g*M*p-b*m*y+h*M*y+g*m*_-h*S*_,R=g*D*p-b*v*p+b*d*y-h*D*y-g*d*_+h*v*_,B=b*v*m-g*D*m-b*d*S+h*D*S+g*d*M-h*v*M,G=i*O+r*L+l*R+u*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return e[0]=O*F,e[1]=(D*S*u-v*M*u-D*l*y+r*M*y+v*l*_-r*S*_)*F,e[2]=(d*M*u-D*m*u+D*l*p-r*M*p-d*l*_+r*m*_)*F,e[3]=(v*m*u-d*S*u-v*l*p+r*S*p+d*l*y-r*m*y)*F,e[4]=L*F,e[5]=(g*M*u-b*S*u+b*l*y-i*M*y-g*l*_+i*S*_)*F,e[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*F,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*y+i*m*y)*F,e[8]=R*F,e[9]=(b*v*u-g*D*u-b*r*y+i*D*y+g*r*_-i*v*_)*F,e[10]=(h*D*u-b*d*u+b*r*p-i*D*p-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*y-i*d*y)*F,e[12]=B*F,e[13]=(g*D*l-b*v*l+b*r*S-i*D*S-g*r*M+i*v*M)*F,e[14]=(b*d*l-h*D*l-b*r*m+i*D*m+h*r*M-i*d*M)*F,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*S+i*d*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,S=u*p,y=u*g,b=u*v,D=h*g,M=h*v,_=d*v,O=m*p,L=m*g,R=m*v,B=r.x,G=r.y,F=r.z;return l[0]=(1-(D+_))*B,l[1]=(y+R)*B,l[2]=(b-L)*B,l[3]=0,l[4]=(y-R)*G,l[5]=(1-(S+_))*G,l[6]=(M+O)*G,l[7]=0,l[8]=(b+L)*F,l[9]=(M-O)*F,l[10]=(1-(S+D))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=es.set(l[0],l[1],l[2]).length();const h=es.set(l[4],l[5],l[6]).length(),d=es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const p=1/u,g=1/h,v=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=bi,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(r-l),S=(i+e)/(i-e),y=(r+l)/(r-l);let b,D;if(m)b=u/(h-u),D=h*u/(h-u);else if(d===bi)b=-(h+u)/(h-u),D=-2*h*u/(h-u);else if(d===gc)b=-h/(h-u),D=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=bi,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),S=-(i+e)/(i-e),y=-(r+l)/(r-l);let b,D;if(m)b=1/(h-u),D=h/(h-u);else if(d===bi)b=-2/(h-u),D=-(h+u)/(h-u);else if(d===gc)b=-1/(h-u),D=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const es=new it,hi=new un,DS=new it(0,0,0),US=new it(1,1,1),wa=new it,Yl=new it,Yn=new it,n_=new un,i_=new wo;class ea{constructor(e=0,i=0,r=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return n_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return i_.setFromEuler(this),this.setFromQuaternion(i_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LS=0;const a_=new it,ns=new wo,Yi=new un,jl=new it,So=new it,NS=new it,OS=new wo,r_=new it(1,0,0),s_=new it(0,1,0),o_=new it(0,0,1),l_={type:"added"},PS={type:"removed"},is={type:"childadded",child:null},Vf={type:"childremoved",child:null};class Zn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new it,i=new ea,r=new wo,l=new it(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new le}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ns.setFromAxisAngle(e,i),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,i){return ns.setFromAxisAngle(e,i),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,i){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?jl.copy(e):jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(So,jl,this.up):Yi.lookAt(jl,So,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),ns.setFromRotationMatrix(Yi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l_),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(PS),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l_),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,NS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,OS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Zn.DEFAULT_UP=new it(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new it,ji=new it,kf=new it,Zi=new it,as=new it,rs=new it,c_=new it,Xf=new it,Wf=new it,qf=new it,Yf=new tn,jf=new tn,Zf=new tn;class pi{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),di.subVectors(e,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){di.subVectors(l,i),ji.subVectors(r,i),kf.subVectors(e,i);const h=di.dot(di),d=di.dot(ji),m=di.dot(kf),p=ji.dot(ji),g=ji.dot(kf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Zi.x),m.addScaledVector(h,Zi.y),m.addScaledVector(d,Zi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return Yf.setScalar(0),jf.setScalar(0),Zf.setScalar(0),Yf.fromBufferAttribute(e,i),jf.fromBufferAttribute(e,r),Zf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Yf,u.x),h.addScaledVector(jf,u.y),h.addScaledVector(Zf,u.z),h}static isFrontFacing(e,i,r,l){return di.subVectors(r,i),ji.subVectors(e,i),di.cross(ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),di.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;as.subVectors(l,r),rs.subVectors(u,r),Xf.subVectors(e,r);const m=as.dot(Xf),p=rs.dot(Xf);if(m<=0&&p<=0)return i.copy(r);Wf.subVectors(e,l);const g=as.dot(Wf),v=rs.dot(Wf);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(as,h);qf.subVectors(e,u);const y=as.dot(qf),b=rs.dot(qf);if(b>=0&&y<=b)return i.copy(u);const D=y*p-m*b;if(D<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(rs,d);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return c_.subVectors(u,l),d=(v-g)/(v-g+(y-b)),i.copy(l).addScaledVector(c_,d);const _=1/(M+D+S);return h=D*_,d=S*_,i.copy(r).addScaledVector(as,h).addScaledVector(rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Kf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ze{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=xS(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Kf(h,u,e+1/3),this.g=Kf(h,u,e),this.b=Kf(h,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=nv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Te.workingToColorSpace(Rn.copy(this),e),Math.round(ve(Rn.r*255,0,255))*65536+Math.round(ve(Rn.g*255,0,255))*256+Math.round(ve(Rn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ai){Te.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+i,Da.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Da),e.getHSL(Zl);const r=Lf(Da.h,Zl.h,i),l=Lf(Da.s,Zl.s,i),u=Lf(Da.l,Zl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ze;ze.NAMES=nv;let zS=0;class xc extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=fs,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(r.blending=this.blending),this.side!==Pa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lh&&(r.blendSrc=this.blendSrc),this.blendDst!==ch&&(r.blendDst=this.blendDst),this.blendEquation!==cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rd extends xc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new it,Kl=new be;let BS=0;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Kg,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Kl.fromBufferAttribute(this,i),Kl.applyMatrix3(e),this.setXY(i,Kl.x,Kl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kg&&(e.usage=this.usage),e}}class iv extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class av extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class wi extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let IS=0;const ii=new un,Qf=new Zn,ss=new it,jn=new Do,Mo=new Do,_n=new it;class Ba extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?av:iv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return Qf.lookAt(e),Qf.updateMatrix(),this.applyMatrix4(Qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Mo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(jn.min,Mo.min),jn.expandByPoint(_n),_n.addVectors(jn.max,Mo.max),jn.expandByPoint(_n)):(jn.expandByPoint(Mo.min),jn.expandByPoint(Mo.max))}jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(ss.fromBufferAttribute(e,p),_n.add(ss)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new it,m[X]=new it;const p=new it,g=new it,v=new it,S=new be,y=new be,b=new be,D=new it,M=new it;function _(X,w,C){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),S.fromBufferAttribute(u,X),y.fromBufferAttribute(u,w),b.fromBufferAttribute(u,C),g.sub(p),v.sub(p),y.sub(S),b.sub(S);const I=1/(y.x*b.y-b.x*y.y);isFinite(I)&&(D.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(I),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(I),d[X].add(D),d[w].add(D),d[C].add(D),m[X].add(M),m[w].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let X=0,w=O.length;X<w;++X){const C=O[X],I=C.start,st=C.count;for(let lt=I,ft=I+st;lt<ft;lt+=3)_(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const L=new it,R=new it,B=new it,G=new it;function F(X){B.fromBufferAttribute(l,X),G.copy(B);const w=d[X];L.copy(w),L.sub(B.multiplyScalar(B.dot(w))).normalize(),R.crossVectors(G,w);const I=R.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,I)}for(let X=0,w=O.length;X<w;++X){const C=O[X],I=C.start,st=C.count;for(let lt=I,ft=I+st;lt<ft;lt+=3)F(e.getX(lt+0)),F(e.getX(lt+1)),F(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new it,u=new it,h=new it,d=new it,m=new it,p=new it,g=new it,v=new it;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),D=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,S=new p.constructor(m.length*g);let y=0,b=0;for(let D=0,M=m.length;D<M;D++){d.isInterleavedBufferAttribute?y=m[D]*d.data.stride+d.offset:y=m[D]*g;for(let _=0;_<g;_++)S[b++]=p[y++]}return new Ci(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ba,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const S=p[g],y=e(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u_=new un,ir=new wS,Ql=new ad,f_=new it,Jl=new it,$l=new it,tc=new it,Jf=new it,ec=new it,h_=new it,nc=new it;class Ri extends Zn{constructor(e=new Ba,i=new rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(Jf.fromBufferAttribute(v,e),h?ec.addScaledVector(Jf,g):ec.addScaledVector(Jf.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(u),ir.copy(e.ray).recast(e.near),!(Ql.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ql,f_)===null||ir.origin.distanceToSquared(f_)>(e.far-e.near)**2))&&(u_.copy(u).invert(),ir.copy(e.ray).applyMatrix4(u_),!(r.boundingBox!==null&&ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ir)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,D=S.length;b<D;b++){const M=S[b],_=h[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let R=O,B=L;R<B;R+=3){const G=d.getX(R),F=d.getX(R+1),X=d.getX(R+2);l=ic(this,_,e,r,p,g,v,G,F,X),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(d.count,y.start+y.count);for(let M=b,_=D;M<_;M+=3){const O=d.getX(M),L=d.getX(M+1),R=d.getX(M+2);l=ic(this,h,e,r,p,g,v,O,L,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,D=S.length;b<D;b++){const M=S[b],_=h[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let R=O,B=L;R<B;R+=3){const G=R,F=R+1,X=R+2;l=ic(this,_,e,r,p,g,v,G,F,X),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let M=b,_=D;M<_;M+=3){const O=M,L=M+1,R=M+2;l=ic(this,h,e,r,p,g,v,O,L,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function FS(o,e,i,r,l,u,h,d){let m;if(e.side===In?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Pa,d),m===null)return null;nc.copy(d),nc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(nc);return p<i.near||p>i.far?null:{distance:p,point:nc.clone(),object:o}}function ic(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,Jl),o.getVertexPosition(m,$l),o.getVertexPosition(p,tc);const g=FS(o,e,i,r,Jl,$l,tc,h_);if(g){const v=new it;pi.getBarycoord(h_,Jl,$l,tc,v),l&&(g.uv=pi.getInterpolatedAttribute(l,d,m,p,v,new be)),u&&(g.uv1=pi.getInterpolatedAttribute(u,d,m,p,v,new be)),h&&(g.normal=pi.getInterpolatedAttribute(h,d,m,p,v,new it),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new it,materialIndex:0};pi.getNormal(Jl,$l,tc,S.normal),g.face=S,g.barycoord=v}return g}class Uo extends Ba{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let S=0,y=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(v,2));function b(D,M,_,O,L,R,B,G,F,X,w){const C=R/F,I=B/X,st=R/2,lt=B/2,ft=G/2,ht=F+1,z=X+1;let Z=0,Y=0;const xt=new it;for(let U=0;U<z;U++){const J=U*I-lt;for(let vt=0;vt<ht;vt++){const St=vt*C-st;xt[D]=St*O,xt[M]=J*L,xt[_]=ft,p.push(xt.x,xt.y,xt.z),xt[D]=0,xt[M]=0,xt[_]=G>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(vt/F),v.push(1-U/X),Z+=1}}for(let U=0;U<X;U++)for(let J=0;J<F;J++){const vt=S+J+ht*U,St=S+J+ht*(U+1),wt=S+(J+1)+ht*(U+1),et=S+(J+1)+ht*U;m.push(vt,St,et),m.push(St,wt,et),Y+=6}d.addGroup(y,Y,w),y+=Y,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=vs(o[i]);for(const l in r)e[l]=r[l]}return e}function HS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const GS={clone:vs,merge:Un};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class za extends xc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class sv extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new it,d_=new be,p_=new be;class ri extends sv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(Uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z)}getViewSize(e,i){return this.getViewBounds(e,d_,p_),i.subVectors(p_,d_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Uf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const os=-90,ls=1;class XS extends Zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(os,ls,e,i);l.layers=this.layers,this.add(l);const u=new ri(os,ls,e,i);u.layers=this.layers,this.add(u);const h=new ri(os,ls,e,i);h.layers=this.layers,this.add(h);const d=new ri(os,ls,e,i);d.layers=this.layers,this.add(d);const m=new ri(os,ls,e,i);m.layers=this.layers,this.add(m);const p=new ri(os,ls,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class ov extends Fn{constructor(e=[],i=ms,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends pr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new ov(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Uo(5,5,5),u=new za({name:"CubemapFromEquirect",uniforms:vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Na});u.uniforms.tEquirect.value=i;const h=new Ri(l,u),d=i.minFilter;return i.minFilter===hr&&(i.minFilter=Ai),new XS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class ac extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const D of e.hand.values()){const M=i.getJointPose(D,r),_=this._getHandJoint(p,D);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ac;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class YS extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const th=new it,jS=new it,ZS=new le;class or{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=th.subVectors(r,i).cross(jS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ZS.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new ad,KS=new be(.5,.5),rc=new it;class lv{constructor(e=new or,i=new or,r=new or,l=new or,u=new or,h=new or){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=bi,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],S=u[6],y=u[7],b=u[8],D=u[9],M=u[10],_=u[11],O=u[12],L=u[13],R=u[14],B=u[15];if(l[0].setComponents(p-h,y-g,_-b,B-O).normalize(),l[1].setComponents(p+h,y+g,_+b,B+O).normalize(),l[2].setComponents(p+d,y+v,_+D,B+L).normalize(),l[3].setComponents(p-d,y-v,_-D,B-L).normalize(),r)l[4].setComponents(m,S,M,R).normalize(),l[5].setComponents(p-m,y-S,_-M,B-R).normalize();else if(l[4].setComponents(p-m,y-S,_-M,B-R).normalize(),i===bi)l[5].setComponents(p+m,y+S,_+M,B+R).normalize();else if(i===gc)l[5].setComponents(m,S,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const i=KS.distanceTo(e.center);return ar.radius=.7071067811865476+i,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(rc.x=l.normal.x>0?e.max.x:e.min.x,rc.y=l.normal.y>0?e.max.y:e.min.y,rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cv extends Fn{constructor(e,i,r=dr,l,u,h,d=gi,m=gi,p,g=Ao,v=1){if(g!==Ao&&g!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class sd extends Ba{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],h=[];d(l),p(r),g(),this.setAttribute("position",new wi(u,3)),this.setAttribute("normal",new wi(u.slice(),3)),this.setAttribute("uv",new wi(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(O){const L=new it,R=new it,B=new it;for(let G=0;G<i.length;G+=3)y(i[G+0],L),y(i[G+1],R),y(i[G+2],B),m(L,R,B,O)}function m(O,L,R,B){const G=B+1,F=[];for(let X=0;X<=G;X++){F[X]=[];const w=O.clone().lerp(R,X/G),C=L.clone().lerp(R,X/G),I=G-X;for(let st=0;st<=I;st++)st===0&&X===G?F[X][st]=w:F[X][st]=w.clone().lerp(C,st/I)}for(let X=0;X<G;X++)for(let w=0;w<2*(G-X)-1;w++){const C=Math.floor(w/2);w%2===0?(S(F[X][C+1]),S(F[X+1][C]),S(F[X][C])):(S(F[X][C+1]),S(F[X+1][C+1]),S(F[X+1][C]))}}function p(O){const L=new it;for(let R=0;R<u.length;R+=3)L.x=u[R+0],L.y=u[R+1],L.z=u[R+2],L.normalize().multiplyScalar(O),u[R+0]=L.x,u[R+1]=L.y,u[R+2]=L.z}function g(){const O=new it;for(let L=0;L<u.length;L+=3){O.x=u[L+0],O.y=u[L+1],O.z=u[L+2];const R=M(O)/2/Math.PI+.5,B=_(O)/Math.PI+.5;h.push(R,1-B)}b(),v()}function v(){for(let O=0;O<h.length;O+=6){const L=h[O+0],R=h[O+2],B=h[O+4],G=Math.max(L,R,B),F=Math.min(L,R,B);G>.9&&F<.1&&(L<.2&&(h[O+0]+=1),R<.2&&(h[O+2]+=1),B<.2&&(h[O+4]+=1))}}function S(O){u.push(O.x,O.y,O.z)}function y(O,L){const R=O*3;L.x=e[R+0],L.y=e[R+1],L.z=e[R+2]}function b(){const O=new it,L=new it,R=new it,B=new it,G=new be,F=new be,X=new be;for(let w=0,C=0;w<u.length;w+=9,C+=6){O.set(u[w+0],u[w+1],u[w+2]),L.set(u[w+3],u[w+4],u[w+5]),R.set(u[w+6],u[w+7],u[w+8]),G.set(h[C+0],h[C+1]),F.set(h[C+2],h[C+3]),X.set(h[C+4],h[C+5]),B.copy(O).add(L).add(R).divideScalar(3);const I=M(B);D(G,C+0,O,I),D(F,C+2,L,I),D(X,C+4,R,I)}}function D(O,L,R,B){B<0&&O.x===1&&(h[L]=O.x-1),R.x===0&&R.z===0&&(h[L]=B/2/Math.PI+.5)}function M(O){return Math.atan2(O.z,-O.x)}function _(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.vertices,e.indices,e.radius,e.details)}}class od extends sd{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new od(e.radius,e.detail)}}class Sc extends Ba{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,S=i/m,y=[],b=[],D=[],M=[];for(let _=0;_<g;_++){const O=_*S-h;for(let L=0;L<p;L++){const R=L*v-u;b.push(R,-O,0),D.push(0,0,1),M.push(L/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const L=O+p*_,R=O+p*(_+1),B=O+1+p*(_+1),G=O+1+p*_;y.push(L,R,G),y.push(R,B,G)}this.setIndex(y),this.setAttribute("position",new wi(b,3)),this.setAttribute("normal",new wi(D,3)),this.setAttribute("uv",new wi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class QS extends xc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JS extends xc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $S extends sv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tM extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function m_(o,e,i,r){const l=eM(r);switch(i){case Y_:return o*e;case Z_:return o*e/l.components*l.byteLength;case td:return o*e/l.components*l.byteLength;case K_:return o*e*2/l.components*l.byteLength;case ed:return o*e*2/l.components*l.byteLength;case j_:return o*e*3/l.components*l.byteLength;case mi:return o*e*4/l.components*l.byteLength;case nd:return o*e*4/l.components*l.byteLength;case cc:case uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case fc:case hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yh:case Th:return Math.max(o,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(o,8)*Math.max(e,8)/2;case Ah:case bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case dc:case Vh:case kh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Q_:case Xh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wh:case qh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eM(o){switch(o){case ta:case X_:return{byteLength:1,components:1};case Eo:case W_:case Ro:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case dr:case Qh:case Ji:return{byteLength:4,components:1};case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function nM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<v.length;y++){const b=v[S],D=v[y];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++S,v[S]=D)}v.length=S+1;for(let y=0,b=v.length;y<b;y++){const D=v[y];o.bufferSubData(p,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
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
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
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
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
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
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bM=`#define PI 3.141592653589793
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
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
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
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
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
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
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
#endif`,ey=`struct PhysicalMaterial {
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
}`,ny=`
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ry=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hy=`#if defined( USE_POINTS_UV )
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
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,my=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
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
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
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
}`,cE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uE=`#define DISTANCE
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
}`,fE=`#define DISTANCE
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,_E=`uniform vec3 diffuse;
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
}`,vE=`#define LAMBERT
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
}`,xE=`#define LAMBERT
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
}`,SE=`#define MATCAP
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
}`,ME=`#define MATCAP
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
}`,yE=`#define NORMAL
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
}`,EE=`#define NORMAL
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
}`,TE=`#define PHONG
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
}`,AE=`#define PHONG
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
}`,bE=`#define STANDARD
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
}`,RE=`#define STANDARD
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
}`,CE=`#define TOON
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
}`,wE=`#define TOON
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
}`,DE=`uniform float size;
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
}`,UE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,NE=`uniform vec3 color;
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
}`,OE=`uniform float rotation;
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
}`,PE=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:iM,alphahash_pars_fragment:aM,alphamap_fragment:rM,alphamap_pars_fragment:sM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:hM,begin_vertex:dM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:MM,color_fragment:yM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:AM,common:bM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:wM,displacementmap_vertex:DM,emissivemap_fragment:UM,emissivemap_pars_fragment:LM,colorspace_fragment:NM,colorspace_pars_fragment:OM,envmap_fragment:PM,envmap_common_pars_fragment:zM,envmap_pars_fragment:BM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:ZM,envmap_vertex:FM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:VM,fog_pars_fragment:kM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:WM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:YM,lights_pars_begin:jM,lights_toon_fragment:KM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:$M,lights_physical_fragment:ty,lights_physical_pars_fragment:ey,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ay,logdepthbuf_fragment:ry,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:uy,map_particle_fragment:fy,map_particle_pars_fragment:hy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:Sy,normal_fragment_maps:My,normal_pars_fragment:yy,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:wy,opaque_fragment:Dy,packing:Uy,premultiplied_alpha_fragment:Ly,project_vertex:Ny,dithering_fragment:Oy,dithering_pars_fragment:Py,roughnessmap_fragment:zy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Gy,skinbase_vertex:Vy,skinning_pars_vertex:ky,skinning_vertex:Xy,skinnormal_vertex:Wy,specularmap_fragment:qy,specularmap_pars_fragment:Yy,tonemapping_fragment:jy,tonemapping_pars_fragment:Zy,transmission_fragment:Ky,transmission_pars_fragment:Qy,uv_pars_fragment:Jy,uv_pars_vertex:$y,uv_vertex:tE,worldpos_vertex:eE,background_vert:nE,background_frag:iE,backgroundCube_vert:aE,backgroundCube_frag:rE,cube_vert:sE,cube_frag:oE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:fE,equirect_vert:hE,equirect_frag:dE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:_E,meshlambert_vert:vE,meshlambert_frag:xE,meshmatcap_vert:SE,meshmatcap_frag:ME,meshnormal_vert:yE,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:AE,meshphysical_vert:bE,meshphysical_frag:RE,meshtoon_vert:CE,meshtoon_frag:wE,points_vert:DE,points_frag:UE,shadow_vert:LE,shadow_frag:NE,sprite_vert:OE,sprite_frag:PE},Ot={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ti={basic:{uniforms:Un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ze(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Un([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Un([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ze(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Un([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Un([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Un([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Un([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Un([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Un([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Un([Ot.common,Ot.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Un([Ot.lights,Ot.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ti.physical={uniforms:Un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const sc={r:0,b:0,g:0},rr=new ea,zE=new un;function BE(o,e,i,r,l,u,h){const d=new ze(0);let m=u===!0?0:1,p,g,v=null,S=0,y=null;function b(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?i:e).get(R)),R}function D(L){let R=!1;const B=b(L);B===null?_(d,m):B&&B.isColor&&(_(B,1),R=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,R){const B=b(R);B&&(B.isCubeTexture||B.mapping===vc)?(g===void 0&&(g=new Ri(new Uo(1,1,1),new za({name:"BackgroundCubeMaterial",uniforms:vs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),rr.copy(R.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(zE.makeRotationFromEuler(rr)),g.material.toneMapped=Te.getTransfer(B.colorSpace)!==Pe,(v!==B||S!==B.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=B,S=B.version,y=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Ri(new Sc(2,2),new za({name:"BackgroundMaterial",uniforms:vs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Pe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||S!==B.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,S=B.version,y=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,R){L.getRGB(sc,rv(o)),r.buffers.color.setClear(sc.r,sc.g,sc.b,R,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,R=1){d.set(L),m=R,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:D,addToRenderList:M,dispose:O}}function IE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,I,st,lt,ft){let ht=!1;const z=v(lt,st,I);u!==z&&(u=z,p(u.object)),ht=y(C,lt,st,ft),ht&&b(C,lt,st,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,R(C,I,st,lt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,I,st){const lt=st.wireframe===!0;let ft=r[C.id];ft===void 0&&(ft={},r[C.id]=ft);let ht=ft[I.id];ht===void 0&&(ht={},ft[I.id]=ht);let z=ht[lt];return z===void 0&&(z=S(m()),ht[lt]=z),z}function S(C){const I=[],st=[],lt=[];for(let ft=0;ft<i;ft++)I[ft]=0,st[ft]=0,lt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:st,attributeDivisors:lt,object:C,attributes:{},index:null}}function y(C,I,st,lt){const ft=u.attributes,ht=I.attributes;let z=0;const Z=st.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const U=ft[Y];let J=ht[Y];if(J===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;z++}return u.attributesNum!==z||u.index!==lt}function b(C,I,st,lt){const ft={},ht=I.attributes;let z=0;const Z=st.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let U=ht[Y];U===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ft[Y]=J,z++}u.attributes=ft,u.attributesNum=z,u.index=lt}function D(){const C=u.newAttributes;for(let I=0,st=C.length;I<st;I++)C[I]=0}function M(C){_(C,0)}function _(C,I){const st=u.newAttributes,lt=u.enabledAttributes,ft=u.attributeDivisors;st[C]=1,lt[C]===0&&(o.enableVertexAttribArray(C),lt[C]=1),ft[C]!==I&&(o.vertexAttribDivisor(C,I),ft[C]=I)}function O(){const C=u.newAttributes,I=u.enabledAttributes;for(let st=0,lt=I.length;st<lt;st++)I[st]!==C[st]&&(o.disableVertexAttribArray(st),I[st]=0)}function L(C,I,st,lt,ft,ht,z){z===!0?o.vertexAttribIPointer(C,I,st,ft,ht):o.vertexAttribPointer(C,I,st,lt,ft,ht)}function R(C,I,st,lt){D();const ft=lt.attributes,ht=st.getAttributes(),z=I.defaultAttributeValues;for(const Z in ht){const Y=ht[Z];if(Y.location>=0){let xt=ft[Z];if(xt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const U=xt.normalized,J=xt.itemSize,vt=e.get(xt);if(vt===void 0)continue;const St=vt.buffer,wt=vt.type,et=vt.bytesPerElement,dt=wt===o.INT||wt===o.UNSIGNED_INT||xt.gpuType===Qh;if(xt.isInterleavedBufferAttribute){const Mt=xt.data,Pt=Mt.stride,Yt=xt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ie=0;ie<Y.locationSize;ie++)_(Y.location+ie,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ie=0;ie<Y.locationSize;ie++)M(Y.location+ie);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ie=0;ie<Y.locationSize;ie++)L(Y.location+ie,J/Y.locationSize,wt,U,Pt*et,(Yt+J/Y.locationSize*ie)*et,dt)}else{if(xt.isInstancedBufferAttribute){for(let Mt=0;Mt<Y.locationSize;Mt++)_(Y.location+Mt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)M(Y.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<Y.locationSize;Mt++)L(Y.location+Mt,J/Y.locationSize,wt,U,J*et,J/Y.locationSize*Mt*et,dt)}}else if(z!==void 0){const U=z[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}O()}function B(){X();for(const C in r){const I=r[C];for(const st in I){const lt=I[st];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete I[st]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const I=r[C.id];for(const st in I){const lt=I[st];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete I[st]}delete r[C.id]}function F(C){for(const I in r){const st=r[I];if(st[C.id]===void 0)continue;const lt=st[C.id];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete st[C.id]}}function X(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:D,enableAttribute:M,disableUnusedAttributes:O}}function FE(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];i.update(y,r,1)}function m(p,g,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let b=0;for(let D=0;D<v;D++)b+=g[D]*S[D];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function HE(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==mi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const X=F===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ta&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ji&&!X)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:B,maxSamples:G}}function GE(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new or,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const b=v.clippingPlanes,D=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!M)u?g(null):p();else{const O=u?0:r,L=O*4;let R=_.clippingState||null;m.value=R,R=g(b,S,L,y);for(let B=0;B!==L;++B)R[B]=i[B];_.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,y,b){const D=v!==null?v.length:0;let M=null;if(D!==0){if(M=m.value,b!==!0||M===null){const _=y+D*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<_)&&(M=new Float32Array(_));for(let L=0,R=y;L!==D;++L,R+=4)h.copy(v[L]).applyMatrix4(O,d),h.normal.toArray(M,R),M[R+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,M}}function VE(o){let e=new WeakMap;function i(h,d){return d===_h?h.mapping=ms:d===vh&&(h.mapping=gs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===_h||d===vh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new WS(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const us=4,g_=[.125,.215,.35,.446,.526,.582],ur=20,eh=new $S,__=new ze;let nh=null,ih=0,ah=0,rh=!1;const lr=(1+Math.sqrt(5))/2,cs=1/lr,v_=[new it(-lr,cs,0),new it(lr,cs,0),new it(-cs,0,lr),new it(cs,0,lr),new it(0,lr,-cs),new it(0,lr,cs),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],kE=new it;class x_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=kE}=u;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Ro,format:mi,colorSpace:_s,depthBuffer:!1},l=S_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XE(u)),this._blurMaterial=WE(u,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,eh)}_sceneToCubeUV(e,i,r,l,u){const m=new ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(__),v.toneMapping=Oa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const D=new rd({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new Ri(new Uo,D);let _=!1;const O=e.background;O?O.isColor&&(D.color.copy(O),e.background=null,_=!0):(D.color.copy(__),_=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):R===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const B=this._cubeSize;oc(l,R*B,L>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(M,m),v.render(e,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ms||e.mapping===gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;oc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,eh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=v_[(l-u-1)%v_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ri(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ur-1),D=u/b,M=isFinite(u)?1+Math.floor(g*D):ur;M>ur&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ur}`);const _=[];let O=0;for(let F=0;F<ur;++F){const X=F/D,w=Math.exp(-X*X/2);_.push(w),F===0?O+=w:F<M&&(O+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/O;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=b,S.mipInt.value=L-r;const R=this._sizeLods[l],B=3*R*(l>L-us?l-L+us:0),G=4*(this._cubeSize-R);oc(i,B,G,3*R,2*R),m.setRenderTarget(i),m.render(v,eh)}}function XE(o){const e=[],i=[],r=[];let l=o;const u=o-us+1+g_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-us?m=g_[h-o+us-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,D=3,M=2,_=1,O=new Float32Array(D*b*y),L=new Float32Array(M*b*y),R=new Float32Array(_*b*y);for(let G=0;G<y;G++){const F=G%3*2/3-1,X=G>2?0:-1,w=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];O.set(w,D*b*G),L.set(S,M*b*G);const C=[G,G,G,G,G,G];R.set(C,_*b*G)}const B=new Ba;B.setAttribute("position",new Ci(O,D)),B.setAttribute("uv",new Ci(L,M)),B.setAttribute("faceIndex",new Ci(R,_)),e.push(B),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function S_(o,e,i){const r=new pr(o,e,i);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function oc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function WE(o,e,i){const r=new Float32Array(ur),l=new it(0,1,0);return new za({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function M_(){return new za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function y_(){return new za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function ld(){return`

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
	`}function qE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===_h||m===vh,g=m===ms||m===gs;if(p||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new x_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new x_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function YE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&hs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function jE(o,e,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(v){const S=[],y=v.index,b=v.attributes.position;let D=0;if(y!==null){const O=y.array;D=y.version;for(let L=0,R=O.length;L<R;L+=3){const B=O[L+0],G=O[L+1],F=O[L+2];S.push(B,G,G,F,F,B)}}else if(b!==void 0){const O=b.array;D=b.version;for(let L=0,R=O.length/3-1;L<R;L+=3){const B=L+0,G=L+1,F=L+2;S.push(B,G,G,F,F,B)}}else return;const M=new($_(S)?av:iv)(S,1);M.version=D;const _=u.get(v);_&&e.remove(_),u.set(v,M)}function g(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function ZE(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*h),i.update(y,r,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(r,y,u,S*h,b),i.update(y,r,b))}function g(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function v(S,y,b,D){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],D[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,D,0,b);let _=0;for(let O=0;O<b;O++)_+=y[O]*D[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function KE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function QE(o,e,i){const r=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let C=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;b===!0&&(R=1),D===!0&&(R=2),M===!0&&(R=3);let B=d.attributes.position.count*R,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const F=new Float32Array(B*G*4*v),X=new tv(F,B,G,v);X.type=Ji,X.needsUpdate=!0;const w=R*4;for(let I=0;I<v;I++){const st=_[I],lt=O[I],ft=L[I],ht=B*G*4*I;for(let z=0;z<st.count;z++){const Z=z*w;b===!0&&(l.fromBufferAttribute(st,z),F[ht+Z+0]=l.x,F[ht+Z+1]=l.y,F[ht+Z+2]=l.z,F[ht+Z+3]=0),D===!0&&(l.fromBufferAttribute(lt,z),F[ht+Z+4]=l.x,F[ht+Z+5]=l.y,F[ht+Z+6]=l.z,F[ht+Z+7]=0),M===!0&&(l.fromBufferAttribute(ft,z),F[ht+Z+8]=l.x,F[ht+Z+9]=l.y,F[ht+Z+10]=l.z,F[ht+Z+11]=ft.itemSize===4?l.w:1)}}S={count:v,texture:X,size:new be(B,G)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const D=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function JE(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const fv=new Fn,E_=new cv(1,1),hv=new tv,dv=new RS,pv=new ov,T_=[],A_=[],b_=new Float32Array(16),R_=new Float32Array(9),C_=new Float32Array(4);function Ss(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=T_[l];if(u===void 0&&(u=new Float32Array(l),T_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Mc(o,e){let i=A_[e];i===void 0&&(i=new Int32Array(e),A_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function $E(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function tT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function eT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function nT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function iT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;C_.set(r),o.uniformMatrix2fv(this.addr,!1,C_),hn(i,r)}}function aT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;R_.set(r),o.uniformMatrix3fv(this.addr,!1,R_),hn(i,r)}}function rT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;b_.set(r),o.uniformMatrix4fv(this.addr,!1,b_),hn(i,r)}}function sT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function uT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function pT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(E_.compareFunction=J_,u=E_):u=fv,i.setTexture2D(e||u,l)}function mT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||dv,l)}function gT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||pv,l)}function _T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||hv,l)}function vT(o){switch(o){case 5126:return $E;case 35664:return tT;case 35665:return eT;case 35666:return nT;case 35674:return iT;case 35675:return aT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return fT;case 36295:return hT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return _T}}function xT(o,e){o.uniform1fv(this.addr,e)}function ST(o,e){const i=Ss(e,this.size,2);o.uniform2fv(this.addr,i)}function MT(o,e){const i=Ss(e,this.size,3);o.uniform3fv(this.addr,i)}function yT(o,e){const i=Ss(e,this.size,4);o.uniform4fv(this.addr,i)}function ET(o,e){const i=Ss(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function TT(o,e){const i=Ss(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function AT(o,e){const i=Ss(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function bT(o,e){o.uniform1iv(this.addr,e)}function RT(o,e){o.uniform2iv(this.addr,e)}function CT(o,e){o.uniform3iv(this.addr,e)}function wT(o,e){o.uniform4iv(this.addr,e)}function DT(o,e){o.uniform1uiv(this.addr,e)}function UT(o,e){o.uniform2uiv(this.addr,e)}function LT(o,e){o.uniform3uiv(this.addr,e)}function NT(o,e){o.uniform4uiv(this.addr,e)}function OT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||fv,u[h])}function PT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||dv,u[h])}function zT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||pv,u[h])}function BT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||hv,u[h])}function IT(o){switch(o){case 5126:return xT;case 35664:return ST;case 35665:return MT;case 35666:return yT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return bT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return wT;case 5125:return DT;case 36294:return UT;case 36295:return LT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}class FT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=vT(i.type)}}class HT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IT(i.type)}}class GT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function w_(o,e){o.seq.push(e),o.map[e.id]=e}function VT(o,e,i){const r=o.name,l=r.length;for(sh.lastIndex=0;;){const u=sh.exec(r),h=sh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){w_(i,p===void 0?new FT(d,o,e):new HT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new GT(d),w_(i,v)),i=v}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);VT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function D_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const kT=37297;let XT=0;function WT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const U_=new le;function qT(o){Te._getMatrix(U_,Te.workingColorSpace,o);const e=`mat3( ${U_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case mc:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function L_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+WT(o.getShaderSource(e),d)}else return u}function YT(o,e){const i=qT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function jT(o,e){let i;switch(e){case tS:i="Linear";break;case eS:i="Reinhard";break;case nS:i="Cineon";break;case iS:i="ACESFilmic";break;case rS:i="AgX";break;case sS:i="Neutral";break;case aS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lc=new it;function ZT(){Te.getLuminanceCoefficients(lc);const o=lc.x.toFixed(4),e=lc.y.toFixed(4),i=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function QT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function JT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function yo(o){return o!==""}function N_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(o){return o.replace($T,eA)}const tA=new Map;function eA(o,e){let i=fe[e];if(i===void 0){const r=tA.get(e);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jh(i)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(o){return o.replace(nA,iA)}function iA(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function z_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function aA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===G_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function rA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function oA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case V_:e="ENVMAP_BLENDING_MULTIPLY";break;case Jx:e="ENVMAP_BLENDING_MIX";break;case $x:e="ENVMAP_BLENDING_ADD";break}return e}function lA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function cA(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=aA(i),p=rA(i),g=sA(i),v=oA(i),S=lA(i),y=KT(i),b=QT(u),D=l.createProgram();let M,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(yo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(yo).join(`
`),_.length>0&&(_+=`
`)):(M=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),_=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Oa?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,YT("linearToOutputTexel",i.outputColorSpace),ZT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yo).join(`
`)),h=jh(h),h=N_(h,i),h=O_(h,i),d=jh(d),d=N_(d,i),d=O_(d,i),h=P_(h),d=P_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=O+M+h,R=O+_+d,B=D_(l,l.VERTEX_SHADER,L),G=D_(l,l.FRAGMENT_SHADER,R);l.attachShader(D,B),l.attachShader(D,G),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function F(I){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(D)||"",lt=l.getShaderInfoLog(B)||"",ft=l.getShaderInfoLog(G)||"",ht=st.trim(),z=lt.trim(),Z=ft.trim();let Y=!0,xt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,B,G);else{const U=L_(l,B,"vertex"),J=L_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ht+`
`+U+`
`+J)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(z===""||Z==="")&&(xt=!1);xt&&(I.diagnostics={runnable:Y,programLog:ht,vertexShader:{log:z,prefix:M},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(B),l.deleteShader(G),X=new pc(l,D),w=JT(l,D)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(D,kT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=XT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=G,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new hA(e),i.set(e,r)),r}}class hA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function dA(o,e,i,r,l,u,h){const d=new ev,m=new fA,p=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,I,st,lt){const ft=st.fog,ht=lt.geometry,z=w.isMeshStandardMaterial?st.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),Y=Z&&Z.mapping===vc?Z.image.height:null,xt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,J=U!==void 0?U.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,wt,et,dt;if(xt){const Me=Ti[xt];St=Me.vertexShader,wt=Me.fragmentShader}else St=w.vertexShader,wt=w.fragmentShader,m.update(w),et=m.getVertexShaderID(w),dt=m.getFragmentShaderID(w);const Mt=o.getRenderTarget(),Pt=o.state.buffers.depth.getReversed(),Yt=lt.isInstancedMesh===!0,ie=lt.isBatchedMesh===!0,Fe=!!w.map,pe=!!w.matcap,H=!!Z,Re=!!w.aoMap,Qt=!!w.lightMap,Se=!!w.bumpMap,Ft=!!w.normalMap,He=!!w.displacementMap,Ht=!!w.emissiveMap,se=!!w.metalnessMap,We=!!w.roughnessMap,qe=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,ct=w.sheen>0,_t=w.transmission>0,ot=qe&&!!w.anisotropyMap,zt=N&&!!w.clearcoatMap,bt=N&&!!w.clearcoatNormalMap,Xt=N&&!!w.clearcoatRoughnessMap,qt=$&&!!w.iridescenceMap,yt=$&&!!w.iridescenceThicknessMap,Lt=ct&&!!w.sheenColorMap,Zt=ct&&!!w.sheenRoughnessMap,kt=!!w.specularMap,Dt=!!w.specularColorMap,re=!!w.specularIntensityMap,k=_t&&!!w.transmissionMap,At=_t&&!!w.thicknessMap,Rt=!!w.gradientMap,Bt=!!w.alphaMap,Et=w.alphaTest>0,gt=!!w.alphaHash,Vt=!!w.extensions;let ae=Oa;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Ce={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:wt,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ie,batchingColor:ie&&lt._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&lt.instanceColor!==null,instancingMorph:Yt&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:_s,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:pe,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Re,lightMap:Qt,bumpMap:Se,normalMap:Ft,displacementMap:S&&He,emissiveMap:Ht,normalMapObjectSpace:Ft&&w.normalMapType===fS,normalMapTangentSpace:Ft&&w.normalMapType===uS,metalnessMap:se,roughnessMap:We,anisotropy:qe,anisotropyMap:ot,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:bt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:$,iridescenceMap:qt,iridescenceThicknessMap:yt,sheen:ct,sheenColorMap:Lt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:re,transmission:_t,transmissionMap:k,thicknessMap:At,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===fs&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:gt,combine:w.combine,mapUv:Fe&&D(w.map.channel),aoMapUv:Re&&D(w.aoMap.channel),lightMapUv:Qt&&D(w.lightMap.channel),bumpMapUv:Se&&D(w.bumpMap.channel),normalMapUv:Ft&&D(w.normalMap.channel),displacementMapUv:He&&D(w.displacementMap.channel),emissiveMapUv:Ht&&D(w.emissiveMap.channel),metalnessMapUv:se&&D(w.metalnessMap.channel),roughnessMapUv:We&&D(w.roughnessMap.channel),anisotropyMapUv:ot&&D(w.anisotropyMap.channel),clearcoatMapUv:zt&&D(w.clearcoatMap.channel),clearcoatNormalMapUv:bt&&D(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&D(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&D(w.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&D(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&D(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&D(w.sheenRoughnessMap.channel),specularMapUv:kt&&D(w.specularMap.channel),specularColorMapUv:Dt&&D(w.specularColorMap.channel),specularIntensityMapUv:re&&D(w.specularIntensityMap.channel),transmissionMapUv:k&&D(w.transmissionMap.channel),thicknessMapUv:At&&D(w.thicknessMap.channel),alphaMapUv:Bt&&D(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Ft||qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ht.attributes.uv&&(Fe||Bt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:lt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&Te.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Te.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qi,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Vt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&w.extensions.multiDraw===!0||ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)C.push(I),C.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(O(C,w),L(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function R(w){const C=b[w.type];let I;if(C){const st=Ti[C];I=GS.clone(st.uniforms)}else I=w.uniforms;return I}function B(w,C){let I;for(let st=0,lt=g.length;st<lt;st++){const ft=g[st];if(ft.cacheKey===C){I=ft,++I.usedTimes;break}}return I===void 0&&(I=new cA(o,C,w,u),g.push(I)),I}function G(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:R,acquireProgram:B,releaseProgram:G,releaseShaderCache:F,programs:g,dispose:X}}function pA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function mA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function B_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function I_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,b,D,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:b,renderOrder:v.renderOrder,z:D,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=D,_.group=M),e++,_}function d(v,S,y,b,D,M){const _=h(v,S,y,b,D,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,S,y,b,D,M){const _=h(v,S,y,b,D,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||mA),r.length>1&&r.sort(S||B_),l.length>1&&l.sort(S||B_)}function g(){for(let v=e,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function gA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new I_,o.set(r,[h])):l>=u.length?(h=new I_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function _A(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new ze};break;case"SpotLight":i={position:new it,direction:new it,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function vA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let xA=0;function SA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function MA(o){const e=new _A,i=vA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,u=new un,h=new un;function d(p){let g=0,v=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,D=0,M=0,_=0,O=0,L=0,R=0,B=0,G=0,F=0;p.sort(SA);for(let w=0,C=p.length;w<C;w++){const I=p[w],st=I.color,lt=I.intensity,ft=I.distance,ht=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=st.r*lt,v+=st.g*lt,S+=st.b*lt;else if(I.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(I.sh.coefficients[z],lt);F++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,Y=i.get(I);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=I.shadow.matrix,O++}r.directional[y]=z,y++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(st).multiplyScalar(lt),z.distance=ft,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,r.spot[D]=z;const Z=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,Z.updateMatrices(I),I.castShadow&&G++),r.spotLightMatrix[D]=Z.matrix,I.castShadow){const Y=i.get(I);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[D]=Y,r.spotShadowMap[D]=ht,R++}D++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(st).multiplyScalar(lt),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=z,M++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const Z=I.shadow,Y=i.get(I);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=I.shadow.matrix,L++}r.point[b]=z,b++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(lt),z.groundColor.copy(I.groundColor).multiplyScalar(lt),r.hemi[_]=z,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const X=r.hash;(X.directionalLength!==y||X.pointLength!==b||X.spotLength!==D||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==O||X.numPointShadows!==L||X.numSpotShadows!==R||X.numSpotMaps!==B||X.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=D,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+B-G,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=F,X.directionalLength=y,X.pointLength=b,X.spotLength=D,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=O,X.numPointShadows=L,X.numSpotShadows=R,X.numSpotMaps=B,X.numLightProbes=F,r.version=xA++)}function m(p,g){let v=0,S=0,y=0,b=0,D=0;const M=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const L=p[_];if(L.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),v++}else if(L.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),h.identity(),u.copy(L.matrixWorld),u.premultiply(M),h.extractRotation(u),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const R=r.point[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),S++}else if(L.isHemisphereLight){const R=r.hemi[D];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(M),D++}}}return{setup:d,setupView:m,state:r}}function F_(o){const e=new MA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function yA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new F_(o),e.set(l,[d])):u>=h.length?(d=new F_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`;function AA(o,e,i){let r=new lv;const l=new be,u=new be,h=new tn,d=new QS({depthPacking:cS}),m=new JS,p={},g=i.maxTextureSize,v={[Pa]:In,[In]:Pa,[Qi]:Qi},S=new za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ba;b.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ri(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G_;let _=this.type;this.render=function(G,F,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Na),st.buffers.depth.getReversed()?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const lt=_!==Ki&&this.type===Ki,ft=_===Ki&&this.type!==Ki;for(let ht=0,z=G.length;ht<z;ht++){const Z=G[ht],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,Y.mapSize.y=u.y)),Y.map===null||lt===!0||ft===!0){const J=this.type!==Ki?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pr(l.x,l.y,J),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let J=0;J<U;J++){const vt=Y.getViewport(J);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),st.viewport(h),Y.updateMatrices(Z,J),r=Y.getFrustum(),R(F,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Ki&&O(Y,X),Y.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,I)};function O(G,F){const X=e.update(D);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new pr(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(F,null,X,S,D,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(F,null,X,y,D,null)}function L(G,F,X,w){let C=null;const I=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(I!==void 0)C=I;else if(C=X.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const st=C.uuid,lt=F.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let ht=ft[lt];ht===void 0&&(ht=C.clone(),ft[lt]=ht,F.addEventListener("dispose",B)),C=ht}if(C.visible=F.visible,C.wireframe=F.wireframe,w===Ki?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const st=o.properties.get(C);st.light=X}return C}function R(G,F,X,w,C){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===Ki)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const lt=e.update(G),ft=G.material;if(Array.isArray(ft)){const ht=lt.groups;for(let z=0,Z=ht.length;z<Z;z++){const Y=ht[z],xt=ft[Y.materialIndex];if(xt&&xt.visible){const U=L(G,xt,w,C);G.onBeforeShadow(o,G,F,X,lt,U,Y),o.renderBufferDirect(X,null,lt,U,G,Y),G.onAfterShadow(o,G,F,X,lt,U,Y)}}}else if(ft.visible){const ht=L(G,ft,w,C);G.onBeforeShadow(o,G,F,X,lt,ht,null),o.renderBufferDirect(X,null,lt,ht,G,null),G.onAfterShadow(o,G,F,X,lt,ht,null)}}const st=G.children;for(let lt=0,ft=st.length;lt<ft;lt++)R(st[lt],F,X,w,C)}function B(G){G.target.removeEventListener("dispose",B);for(const X in p){const w=p[X],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const bA={[uh]:fh,[hh]:mh,[dh]:gh,[ps]:ph,[fh]:uh,[mh]:hh,[gh]:dh,[ph]:ps};function RA(o,e){function i(){let k=!1;const At=new tn;let Rt=null;const Bt=new tn(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!k&&(o.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){k=Et},setClear:function(Et,gt,Vt,ae,Ce){Ce===!0&&(Et*=ae,gt*=ae,Vt*=ae),At.set(Et,gt,Vt,ae),Bt.equals(At)===!1&&(o.clearColor(Et,gt,Vt,ae),Bt.copy(At))},reset:function(){k=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,At=!1,Rt=null,Bt=null,Et=null;return{setReversed:function(gt){if(At!==gt){const Vt=e.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),At=gt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(gt){gt?Mt(o.DEPTH_TEST):Pt(o.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!k&&(o.depthMask(gt),Rt=gt)},setFunc:function(gt){if(At&&(gt=bA[gt]),Bt!==gt){switch(gt){case uh:o.depthFunc(o.NEVER);break;case fh:o.depthFunc(o.ALWAYS);break;case hh:o.depthFunc(o.LESS);break;case ps:o.depthFunc(o.LEQUAL);break;case dh:o.depthFunc(o.EQUAL);break;case ph:o.depthFunc(o.GEQUAL);break;case mh:o.depthFunc(o.GREATER);break;case gh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){Et!==gt&&(At&&(gt=1-gt),o.clearDepth(gt),Et=gt)},reset:function(){k=!1,Rt=null,Bt=null,Et=null,At=!1}}}function l(){let k=!1,At=null,Rt=null,Bt=null,Et=null,gt=null,Vt=null,ae=null,Ce=null;return{setTest:function(Me){k||(Me?Mt(o.STENCIL_TEST):Pt(o.STENCIL_TEST))},setMask:function(Me){At!==Me&&!k&&(o.stencilMask(Me),At=Me)},setFunc:function(Me,si,sn){(Rt!==Me||Bt!==si||Et!==sn)&&(o.stencilFunc(Me,si,sn),Rt=Me,Bt=si,Et=sn)},setOp:function(Me,si,sn){(gt!==Me||Vt!==si||ae!==sn)&&(o.stencilOp(Me,si,sn),gt=Me,Vt=si,ae=sn)},setLocked:function(Me){k=Me},setClear:function(Me){Ce!==Me&&(o.clearStencil(Me),Ce=Me)},reset:function(){k=!1,At=null,Rt=null,Bt=null,Et=null,gt=null,Vt=null,ae=null,Ce=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,y=[],b=null,D=!1,M=null,_=null,O=null,L=null,R=null,B=null,G=null,F=new ze(0,0,0),X=0,w=!1,C=null,I=null,st=null,lt=null,ft=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=Z>=2);let xt=null,U={};const J=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new tn().fromArray(J),wt=new tn().fromArray(vt);function et(k,At,Rt,Bt){const Et=new Uint8Array(4),gt=o.createTexture();o.bindTexture(k,gt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<Rt;Vt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(At+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return gt}const dt={};dt[o.TEXTURE_2D]=et(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(ps),Se(!1),Ft(Wg),Mt(o.CULL_FACE),Re(Na);function Mt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Pt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function Yt(k,At){return v[k]!==At?(o.bindFramebuffer(k,At),v[k]=At,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ie(k,At){let Rt=y,Bt=!1;if(k){Rt=S.get(At),Rt===void 0&&(Rt=[],S.set(At,Rt));const Et=k.textures;if(Rt.length!==Et.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Vt=Et.length;gt<Vt;gt++)Rt[gt]=o.COLOR_ATTACHMENT0+gt;Rt.length=Et.length,Bt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Rt)}function Fe(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const pe={[cr]:o.FUNC_ADD,[Px]:o.FUNC_SUBTRACT,[zx]:o.FUNC_REVERSE_SUBTRACT};pe[Bx]=o.MIN,pe[Ix]=o.MAX;const H={[Fx]:o.ZERO,[Hx]:o.ONE,[Gx]:o.SRC_COLOR,[lh]:o.SRC_ALPHA,[Yx]:o.SRC_ALPHA_SATURATE,[Wx]:o.DST_COLOR,[kx]:o.DST_ALPHA,[Vx]:o.ONE_MINUS_SRC_COLOR,[ch]:o.ONE_MINUS_SRC_ALPHA,[qx]:o.ONE_MINUS_DST_COLOR,[Xx]:o.ONE_MINUS_DST_ALPHA,[jx]:o.CONSTANT_COLOR,[Zx]:o.ONE_MINUS_CONSTANT_COLOR,[Kx]:o.CONSTANT_ALPHA,[Qx]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(k,At,Rt,Bt,Et,gt,Vt,ae,Ce,Me){if(k===Na){D===!0&&(Pt(o.BLEND),D=!1);return}if(D===!1&&(Mt(o.BLEND),D=!0),k!==Ox){if(k!==M||Me!==w){if((_!==cr||R!==cr)&&(o.blendEquation(o.FUNC_ADD),_=cr,R=cr),Me)switch(k){case fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFunc(o.ONE,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case jg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Yg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,L=null,B=null,G=null,F.set(0,0,0),X=0,M=k,w=Me}return}Et=Et||At,gt=gt||Rt,Vt=Vt||Bt,(At!==_||Et!==R)&&(o.blendEquationSeparate(pe[At],pe[Et]),_=At,R=Et),(Rt!==O||Bt!==L||gt!==B||Vt!==G)&&(o.blendFuncSeparate(H[Rt],H[Bt],H[gt],H[Vt]),O=Rt,L=Bt,B=gt,G=Vt),(ae.equals(F)===!1||Ce!==X)&&(o.blendColor(ae.r,ae.g,ae.b,Ce),F.copy(ae),X=Ce),M=k,w=!1}function Qt(k,At){k.side===Qi?Pt(o.CULL_FACE):Mt(o.CULL_FACE);let Rt=k.side===In;At&&(Rt=!Rt),Se(Rt),k.blending===fs&&k.transparent===!1?Re(Na):Re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Ft(k){k!==Ux?(Mt(o.CULL_FACE),k!==I&&(k===Wg?o.cullFace(o.BACK):k===Lx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pt(o.CULL_FACE),I=k}function He(k){k!==st&&(z&&o.lineWidth(k),st=k)}function Ht(k,At,Rt){k?(Mt(o.POLYGON_OFFSET_FILL),(lt!==At||ft!==Rt)&&(o.polygonOffset(At,Rt),lt=At,ft=Rt)):Pt(o.POLYGON_OFFSET_FILL)}function se(k){k?Mt(o.SCISSOR_TEST):Pt(o.SCISSOR_TEST)}function We(k){k===void 0&&(k=o.TEXTURE0+ht-1),xt!==k&&(o.activeTexture(k),xt=k)}function qe(k,At,Rt){Rt===void 0&&(xt===null?Rt=o.TEXTURE0+ht-1:Rt=xt);let Bt=U[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},U[Rt]=Bt),(Bt.type!==k||Bt.texture!==At)&&(xt!==Rt&&(o.activeTexture(Rt),xt=Rt),o.bindTexture(k,At||dt[k]),Bt.type=k,Bt.texture=At)}function N(){const k=U[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Zt(k){wt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),wt.copy(k))}function kt(k,At){let Rt=p.get(At);Rt===void 0&&(Rt=new WeakMap,p.set(At,Rt));let Bt=Rt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(At,k.name),Rt.set(k,Bt))}function Dt(k,At){const Bt=p.get(At).get(k);m.get(At)!==Bt&&(o.uniformBlockBinding(At,Bt,k.__bindingPointIndex),m.set(At,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,U={},v={},S=new WeakMap,y=[],b=null,D=!1,M=null,_=null,O=null,L=null,R=null,B=null,G=null,F=new ze(0,0,0),X=0,w=!1,C=null,I=null,st=null,lt=null,ft=null,St.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:Pt,bindFramebuffer:Yt,drawBuffers:ie,useProgram:Fe,setBlending:Re,setMaterial:Qt,setFlipSided:Se,setCullFace:Ft,setLineWidth:He,setPolygonOffset:Ht,setScissorTest:se,activeTexture:We,bindTexture:qe,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:qt,texImage3D:yt,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:bt,texStorage3D:Xt,texSubImage2D:ct,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:zt,scissor:Lt,viewport:Zt,reset:re}}function CA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return y?new OffscreenCanvas(N,E):_c("canvas")}function D(N,E,$){let ct=1;const _t=qe(N);if((_t.width>$||_t.height>$)&&(ct=$/Math.max(_t.width,_t.height)),ct<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ot=Math.floor(ct*_t.width),zt=Math.floor(ct*_t.height);v===void 0&&(v=b(ot,zt));const bt=E?b(ot,zt):v;return bt.width=ot,bt.height=zt,bt.getContext("2d").drawImage(N,0,0,ot,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ot+"x"+zt+")."),bt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,E,$,ct,_t=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ot=E;if(E===o.RED&&($===o.FLOAT&&(ot=o.R32F),$===o.HALF_FLOAT&&(ot=o.R16F),$===o.UNSIGNED_BYTE&&(ot=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.R8UI),$===o.UNSIGNED_SHORT&&(ot=o.R16UI),$===o.UNSIGNED_INT&&(ot=o.R32UI),$===o.BYTE&&(ot=o.R8I),$===o.SHORT&&(ot=o.R16I),$===o.INT&&(ot=o.R32I)),E===o.RG&&($===o.FLOAT&&(ot=o.RG32F),$===o.HALF_FLOAT&&(ot=o.RG16F),$===o.UNSIGNED_BYTE&&(ot=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RG8UI),$===o.UNSIGNED_SHORT&&(ot=o.RG16UI),$===o.UNSIGNED_INT&&(ot=o.RG32UI),$===o.BYTE&&(ot=o.RG8I),$===o.SHORT&&(ot=o.RG16I),$===o.INT&&(ot=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),$===o.UNSIGNED_INT&&(ot=o.RGB32UI),$===o.BYTE&&(ot=o.RGB8I),$===o.SHORT&&(ot=o.RGB16I),$===o.INT&&(ot=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),$===o.UNSIGNED_INT&&(ot=o.RGBA32UI),$===o.BYTE&&(ot=o.RGBA8I),$===o.SHORT&&(ot=o.RGBA16I),$===o.INT&&(ot=o.RGBA32I)),E===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),E===o.RGBA){const zt=_t?mc:Te.getTransfer(ct);$===o.FLOAT&&(ot=o.RGBA32F),$===o.HALF_FLOAT&&(ot=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ot=zt===Pe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function R(N,E){let $;return N?E===null||E===dr||E===To?$=o.DEPTH24_STENCIL8:E===Ji?$=o.DEPTH32F_STENCIL8:E===Eo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===dr||E===To?$=o.DEPTH_COMPONENT24:E===Ji?$=o.DEPTH_COMPONENT32F:E===Eo&&($=o.DEPTH_COMPONENT16),$}function B(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==gi&&N.minFilter!==Ai?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function G(N){const E=N.target;E.removeEventListener("dispose",G),X(E),E.isVideoTexture&&g.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),C(E)}function X(N){const E=r.get(N);if(E.__webglInit===void 0)return;const $=N.source,ct=S.get($);if(ct){const _t=ct[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&w(N),Object.keys(ct).length===0&&S.delete($)}r.remove(N)}function w(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const $=N.source,ct=S.get($);delete ct[E.__cacheKey],h.memory.textures--}function C(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let _t=0;_t<E.__webglFramebuffer[ct].length;_t++)o.deleteFramebuffer(E.__webglFramebuffer[ct][_t]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=N.textures;for(let ct=0,_t=$.length;ct<_t;ct++){const ot=r.get($[ct]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove($[ct])}r.remove(N)}let I=0;function st(){I=0}function lt(){const N=I;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),I+=1,N}function ft(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ht(N,E){const $=r.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const ct=N.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt($,N,E);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function z(N,E){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){dt($,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Z(N,E){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){dt($,N,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function Y(N,E){const $=r.get(N);if(N.version>0&&$.__version!==N.version){Mt($,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const xt={[xh]:o.REPEAT,[fr]:o.CLAMP_TO_EDGE,[Sh]:o.MIRRORED_REPEAT},U={[gi]:o.NEAREST,[oS]:o.NEAREST_MIPMAP_NEAREST,[Gl]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[Df]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},J={[hS]:o.NEVER,[vS]:o.ALWAYS,[dS]:o.LESS,[J_]:o.LEQUAL,[pS]:o.EQUAL,[_S]:o.GEQUAL,[mS]:o.GREATER,[gS]:o.NOTEQUAL};function vt(N,E){if(E.type===Ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ai||E.magFilter===Df||E.magFilter===Gl||E.magFilter===hr||E.minFilter===Ai||E.minFilter===Df||E.minFilter===Gl||E.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,xt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==Gl&&E.minFilter!==hr||E.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",G));const ct=E.source;let _t=S.get(ct);_t===void 0&&(_t={},S.set(ct,_t));const ot=ft(E);if(ot!==N.__cacheKey){_t[ot]===void 0&&(_t[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),_t[ot].usedTimes++;const zt=_t[N.__cacheKey];zt!==void 0&&(_t[N.__cacheKey].usedTimes--,zt.usedTimes===0&&w(E)),N.__cacheKey=ot,N.__webglTexture=_t[ot].texture}return $}function wt(N,E,$){return Math.floor(Math.floor(N/$)/E)}function et(N,E,$,ct){const ot=N.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,ct,E.data);else{ot.sort((yt,Lt)=>yt.start-Lt.start);let zt=0;for(let yt=1;yt<ot.length;yt++){const Lt=ot[zt],Zt=ot[yt],kt=Lt.start+Lt.count,Dt=wt(Zt.start,E.width,4),re=wt(Lt.start,E.width,4);Zt.start<=kt+1&&Dt===re&&wt(Zt.start+Zt.count-1,E.width,4)===Dt?Lt.count=Math.max(Lt.count,Zt.start+Zt.count-Lt.start):(++zt,ot[zt]=Zt)}ot.length=zt+1;const bt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,Lt=ot.length;yt<Lt;yt++){const Zt=ot[yt],kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),re=kt%E.width,k=Math.floor(kt/E.width),At=Dt,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,re,k,At,Rt,$,ct,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,bt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function dt(N,E,$){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const _t=St(N,E),ot=E.source;i.bindTexture(ct,N.__webglTexture,o.TEXTURE0+$);const zt=r.get(ot);if(ot.version!==zt.__version||_t===!0){i.activeTexture(o.TEXTURE0+$);const bt=Te.getPrimaries(Te.workingColorSpace),Xt=E.colorSpace===La?null:Te.getPrimaries(E.colorSpace),qt=E.colorSpace===La||bt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let yt=D(E.image,!1,l.maxTextureSize);yt=We(E,yt);const Lt=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let kt=L(E.internalFormat,Lt,Zt,E.colorSpace,E.isVideoTexture);vt(ct,E);let Dt;const re=E.mipmaps,k=E.isVideoTexture!==!0,At=zt.__version===void 0||_t===!0,Rt=ot.dataReady,Bt=B(E,yt);if(E.isDepthTexture)kt=R(E.format===bo,E.type),At&&(k?i.texStorage2D(o.TEXTURE_2D,1,kt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,kt,yt.width,yt.height,0,Lt,Zt,null));else if(E.isDataTexture)if(re.length>0){k&&At&&i.texStorage2D(o.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Dt=re[Et],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Lt,Zt,Dt.data);E.generateMipmaps=!1}else k?(At&&i.texStorage2D(o.TEXTURE_2D,Bt,kt,yt.width,yt.height),Rt&&et(E,yt,Lt,Zt)):i.texImage2D(o.TEXTURE_2D,0,kt,yt.width,yt.height,0,Lt,Zt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,kt,re[0].width,re[0].height,yt.depth);for(let Et=0,gt=re.length;Et<gt;Et++)if(Dt=re[Et],E.format!==mi)if(Lt!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Vt=m_(Dt.width,Dt.height,E.format,E.type);for(const ae of E.layerUpdates){const Ce=Dt.data.subarray(ae*Vt/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ae,Dt.width,Dt.height,1,Lt,Ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,yt.depth,Lt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Dt.width,Dt.height,yt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,yt.depth,Lt,Zt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Dt.width,Dt.height,yt.depth,0,Lt,Zt,Dt.data)}else{k&&At&&i.texStorage2D(o.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Dt=re[Et],E.format!==mi?Lt!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Lt,Zt,Dt.data)}else if(E.isDataArrayTexture)if(k){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,kt,yt.width,yt.height,yt.depth),Rt)if(E.layerUpdates.size>0){const Et=m_(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const Vt=yt.data.subarray(gt*Et/yt.data.BYTES_PER_ELEMENT,(gt+1)*Et/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Lt,Zt,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Lt,Zt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,yt.width,yt.height,yt.depth,0,Lt,Zt,yt.data);else if(E.isData3DTexture)k?(At&&i.texStorage3D(o.TEXTURE_3D,Bt,kt,yt.width,yt.height,yt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Lt,Zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,yt.width,yt.height,yt.depth,0,Lt,Zt,yt.data);else if(E.isFramebufferTexture){if(At)if(k)i.texStorage2D(o.TEXTURE_2D,Bt,kt,yt.width,yt.height);else{let Et=yt.width,gt=yt.height;for(let Vt=0;Vt<Bt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,kt,Et,gt,0,Lt,Zt,null),Et>>=1,gt>>=1}}else if(re.length>0){if(k&&At){const Et=qe(re[0]);i.texStorage2D(o.TEXTURE_2D,Bt,kt,Et.width,Et.height)}for(let Et=0,gt=re.length;Et<gt;Et++)Dt=re[Et],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt,Zt,Dt):i.texImage2D(o.TEXTURE_2D,Et,kt,Lt,Zt,Dt);E.generateMipmaps=!1}else if(k){if(At){const Et=qe(yt);i.texStorage2D(o.TEXTURE_2D,Bt,kt,Et.width,Et.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,Zt,yt)}else i.texImage2D(o.TEXTURE_2D,0,kt,Lt,Zt,yt);M(E)&&_(ct),zt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Mt(N,E,$){if(E.image.length!==6)return;const ct=St(N,E),_t=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+$);const ot=r.get(_t);if(_t.version!==ot.__version||ct===!0){i.activeTexture(o.TEXTURE0+$);const zt=Te.getPrimaries(Te.workingColorSpace),bt=E.colorSpace===La?null:Te.getPrimaries(E.colorSpace),Xt=E.colorSpace===La||zt===bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let gt=0;gt<6;gt++)!qt&&!yt?Lt[gt]=D(E.image[gt],!0,l.maxCubemapSize):Lt[gt]=yt?E.image[gt].image:E.image[gt],Lt[gt]=We(E,Lt[gt]);const Zt=Lt[0],kt=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),re=L(E.internalFormat,kt,Dt,E.colorSpace),k=E.isVideoTexture!==!0,At=ot.__version===void 0||ct===!0,Rt=_t.dataReady;let Bt=B(E,Zt);vt(o.TEXTURE_CUBE_MAP,E);let Et;if(qt){k&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Et=Lt[gt].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];E.format!==mi?kt!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,kt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,kt,Dt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,re,ae.width,ae.height,0,kt,Dt,ae.data)}}}else{if(Et=E.mipmaps,k&&At){Et.length>0&&Bt++;const gt=qe(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Lt[gt].width,Lt[gt].height,kt,Dt,Lt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Lt[gt].width,Lt[gt].height,0,kt,Dt,Lt[gt].data);for(let Vt=0;Vt<Et.length;Vt++){const Ce=Et[Vt].image[gt].image;k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,Ce.width,Ce.height,kt,Dt,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,re,Ce.width,Ce.height,0,kt,Dt,Ce.data)}}else{k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Dt,Lt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,kt,Dt,Lt[gt]);for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,kt,Dt,ae.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,re,kt,Dt,ae.image[gt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ot.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Pt(N,E,$,ct,_t,ot){const zt=u.convert($.format,$.colorSpace),bt=u.convert($.type),Xt=L($.internalFormat,zt,bt,$.colorSpace),qt=r.get(E),yt=r.get($);if(yt.__renderTarget=E,!qt.__hasExternalTextures){const Lt=Math.max(1,E.width>>ot),Zt=Math.max(1,E.height>>ot);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,ot,Xt,Lt,Zt,E.depth,0,zt,bt,null):i.texImage2D(_t,ot,Xt,Lt,Zt,0,zt,bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,_t,yt.__webglTexture,0,He(E)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,_t,yt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(N,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ct=E.depthTexture,_t=ct&&ct.isDepthTexture?ct.type:null,ot=R(E.stencilBuffer,_t),zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=He(E);Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,bt,ot,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,bt,ot,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ot,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,N)}else{const ct=E.textures;for(let _t=0;_t<ct.length;_t++){const ot=ct[_t],zt=u.convert(ot.format,ot.colorSpace),bt=u.convert(ot.type),Xt=L(ot.internalFormat,zt,bt,ot.colorSpace),qt=He(E);$&&Ht(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Xt,E.width,E.height):Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ie(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const _t=ct.__webglTexture,ot=He(E);if(E.depthTexture.format===Ao)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(E.depthTexture.format===bo)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const E=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ct=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",_t)};ct.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ct}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ct=N.texture.mipmaps;ct&&ct.length>0?ie(E.__webglFramebuffer[0],N):ie(E.__webglFramebuffer,N)}else if($){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),Yt(E.__webglDepthbuffer[ct],N,!1);else{const _t=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ot)}}else{const ct=N.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Yt(E.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function pe(N,E,$){const ct=r.get(N);E!==void 0&&Pt(ct.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Fe(N)}function H(N){const E=N.texture,$=r.get(N),ct=r.get(E);N.addEventListener("dispose",F);const _t=N.textures,ot=N.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),ot){$.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[bt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)$.__webglFramebuffer[bt][Xt]=o.createFramebuffer()}else $.__webglFramebuffer[bt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)$.__webglFramebuffer[bt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(zt)for(let bt=0,Xt=_t.length;bt<Xt;bt++){const qt=r.get(_t[bt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Ht(N)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let bt=0;bt<_t.length;bt++){const Xt=_t[bt];$.__webglColorRenderbuffer[bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[bt]);const qt=u.convert(Xt.format,Xt.colorSpace),yt=u.convert(Xt.type),Lt=L(Xt.internalFormat,qt,yt,Xt.colorSpace,N.isXRRenderTarget===!0),Zt=He(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Lt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+bt,o.RENDERBUFFER,$.__webglColorRenderbuffer[bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Yt($.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Pt($.__webglFramebuffer[bt][Xt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt);else Pt($.__webglFramebuffer[bt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let bt=0,Xt=_t.length;bt<Xt;bt++){const qt=_t[bt],yt=r.get(qt);let Lt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,yt.__webglTexture),vt(Lt,qt),Pt($.__webglFramebuffer,N,qt,o.COLOR_ATTACHMENT0+bt,Lt,0),M(qt)&&_(Lt)}i.unbindTexture()}else{let bt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,ct.__webglTexture),vt(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Pt($.__webglFramebuffer[Xt],N,E,o.COLOR_ATTACHMENT0,bt,Xt);else Pt($.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,bt,0);M(E)&&_(bt),i.unbindTexture()}N.depthBuffer&&Fe(N)}function Re(N){const E=N.textures;for(let $=0,ct=E.length;$<ct;$++){const _t=E[$];if(M(_t)){const ot=O(N),zt=r.get(_t).__webglTexture;i.bindTexture(ot,zt),_(ot),i.unbindTexture()}}}const Qt=[],Se=[];function Ft(N){if(N.samples>0){if(Ht(N)===!1){const E=N.textures,$=N.width,ct=N.height;let _t=o.COLOR_BUFFER_BIT;const ot=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(N),bt=E.length>1;if(bt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const yt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,$,ct,0,0,$,ct,_t,o.NEAREST),m===!0&&(Qt.length=0,Se.length=0,Qt.push(o.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qt.push(ot),Se.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),bt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const yt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function He(N){return Math.min(l.maxSamples,N.samples)}function Ht(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function We(N,E){const $=N.colorSpace,ct=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==_s&&$!==La&&(Te.getTransfer($)===Pe?(ct!==mi||_t!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=st,this.setTexture2D=ht,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=pe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ht}function wA(o,e){function i(r,l=La){let u;const h=Te.getTransfer(l);if(r===ta)return o.UNSIGNED_BYTE;if(r===Jh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return o.UNSIGNED_SHORT_5_5_5_1;if(r===q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===X_)return o.BYTE;if(r===W_)return o.SHORT;if(r===Eo)return o.UNSIGNED_SHORT;if(r===Qh)return o.INT;if(r===dr)return o.UNSIGNED_INT;if(r===Ji)return o.FLOAT;if(r===Ro)return o.HALF_FLOAT;if(r===Y_)return o.ALPHA;if(r===j_)return o.RGB;if(r===mi)return o.RGBA;if(r===Ao)return o.DEPTH_COMPONENT;if(r===bo)return o.DEPTH_STENCIL;if(r===Z_)return o.RED;if(r===td)return o.RED_INTEGER;if(r===K_)return o.RG;if(r===ed)return o.RG_INTEGER;if(r===nd)return o.RGBA_INTEGER;if(r===cc||r===uc||r===fc||r===hc)if(h===Pe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mh||r===yh||r===Eh||r===Th)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Mh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Th)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ah||r===bh||r===Rh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ah||r===bh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Rh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Bh||r===Ih||r===Fh||r===Hh||r===Gh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ch)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dc||r===Vh||r===kh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===dc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Q_||r===Xh||r===Wh||r===qh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===dc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===To?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class mv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new mv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new za({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Sc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends xs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,S=null,y=null,b=null;const D=new LA,M={},_=i.getContextAttributes();let O=null,L=null;const R=[],B=[],G=new be;let F=null;const X=new ri;X.viewport=new tn;const w=new ri;w.viewport=new tn;const C=[X,w],I=new tM;let st=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=R[et];return dt===void 0&&(dt=new $f,R[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=R[et];return dt===void 0&&(dt=new $f,R[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=R[et];return dt===void 0&&(dt=new $f,R[et]=dt),dt.getHandSpace()};function ft(et){const dt=B.indexOf(et.inputSource);if(dt===-1)return;const Mt=R[dt];Mt!==void 0&&(Mt.update(et.inputSource,et.frame,p||h),Mt.dispatchEvent({type:et.type,data:et.inputSource}))}function ht(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",z);for(let et=0;et<R.length;et++){const dt=B[et];dt!==null&&(B[et]=null,R[et].disconnect(dt))}st=null,lt=null,D.reset();for(const et in M)delete M[et];e.setRenderTarget(O),y=null,S=null,v=null,l=null,L=null,wt.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Pt=null,Yt=null;_.depth&&(Yt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=_.stencil?bo:Ao,Pt=_.stencil?To:dr);const ie={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:u};S=v.createProjectionLayer(ie),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new pr(S.textureWidth,S.textureHeight,{format:mi,type:ta,depthTexture:new cv(S.textureWidth,S.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new pr(y.framebufferWidth,y.framebufferHeight,{format:mi,type:ta,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function z(et){for(let dt=0;dt<et.removed.length;dt++){const Mt=et.removed[dt],Pt=B.indexOf(Mt);Pt>=0&&(B[Pt]=null,R[Pt].disconnect(Mt))}for(let dt=0;dt<et.added.length;dt++){const Mt=et.added[dt];let Pt=B.indexOf(Mt);if(Pt===-1){for(let ie=0;ie<R.length;ie++)if(ie>=B.length){B.push(Mt),Pt=ie;break}else if(B[ie]===null){B[ie]=Mt,Pt=ie;break}if(Pt===-1)break}const Yt=R[Pt];Yt&&Yt.connect(Mt)}}const Z=new it,Y=new it;function xt(et,dt,Mt){Z.setFromMatrixPosition(dt.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const Pt=Z.distanceTo(Y),Yt=dt.projectionMatrix.elements,ie=Mt.projectionMatrix.elements,Fe=Yt[14]/(Yt[10]-1),pe=Yt[14]/(Yt[10]+1),H=(Yt[9]+1)/Yt[5],Re=(Yt[9]-1)/Yt[5],Qt=(Yt[8]-1)/Yt[0],Se=(ie[8]+1)/ie[0],Ft=Fe*Qt,He=Fe*Se,Ht=Pt/(-Qt+Se),se=Ht*-Qt;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(se),et.translateZ(Ht),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Yt[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const We=Fe+Ht,qe=pe+Ht,N=Ft-se,E=He+(Pt-se),$=H*pe/qe*We,ct=Re*pe/qe*We;et.projectionMatrix.makePerspective(N,E,$,ct,We,qe),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let dt=et.near,Mt=et.far;D.texture!==null&&(D.depthNear>0&&(dt=D.depthNear),D.depthFar>0&&(Mt=D.depthFar)),I.near=w.near=X.near=dt,I.far=w.far=X.far=Mt,(st!==I.near||lt!==I.far)&&(l.updateRenderState({depthNear:I.near,depthFar:I.far}),st=I.near,lt=I.far),I.layers.mask=et.layers.mask|6,X.layers.mask=I.layers.mask&3,w.layers.mask=I.layers.mask&5;const Pt=et.parent,Yt=I.cameras;U(I,Pt);for(let ie=0;ie<Yt.length;ie++)U(Yt[ie],Pt);Yt.length===2?xt(I,X,w):I.projectionMatrix.copy(X.projectionMatrix),J(et,I,Pt)};function J(et,dt,Mt){Mt===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(Mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Yh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(I)},this.getCameraTexture=function(et){return M[et]};let vt=null;function St(et,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const Mt=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Pt=!1;Mt.length!==I.cameras.length&&(I.cameras.length=0,Pt=!0);for(let pe=0;pe<Mt.length;pe++){const H=Mt[pe];let Re=null;if(y!==null)Re=y.getViewport(H);else{const Se=v.getViewSubImage(S,H);Re=Se.viewport,pe===0&&(e.setRenderTargetTextures(L,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(L))}let Qt=C[pe];Qt===void 0&&(Qt=new ri,Qt.layers.enable(pe),Qt.viewport=new tn,C[pe]=Qt),Qt.matrix.fromArray(H.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(H.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&(I.matrix.copy(Qt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pt===!0&&I.cameras.push(Qt)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const pe=v.getDepthInformation(Mt[0]);pe&&pe.isValid&&pe.texture&&D.init(pe,l.renderState)}if(Yt&&Yt.includes("camera-access")&&(e.state.unbindTexture(),v))for(let pe=0;pe<Mt.length;pe++){const H=Mt[pe].camera;if(H){let Re=M[H];Re||(Re=new mv,M[H]=Re);const Qt=v.getCameraImage(H);Re.sourceTexture=Qt}}}for(let Mt=0;Mt<R.length;Mt++){const Pt=B[Mt],Yt=R[Mt];Pt!==null&&Yt!==void 0&&Yt.update(Pt,dt,p||h)}vt&&vt(et,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const wt=new uv;wt.setAnimationLoop(St),this.setAnimationLoop=function(et){vt=et},this.dispose=function(){}}}const sr=new ea,OA=new un;function PA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,rv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,O,L,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,R)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),D(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,O,L):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===In&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===In&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const O=e.get(_),L=O.envMap,R=O.envMapRotation;L&&(M.envMap.value=L,sr.copy(R),sr.x*=-1,sr.y*=-1,sr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),M.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(sr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,O,L){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*O,M.scale.value=L*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,O){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function D(M,_){const O=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function zA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const R=L.program;r.uniformBlockBinding(O,R)}function p(O,L){let R=l[O.id];R===void 0&&(b(O),R=g(O),l[O.id]=R,O.addEventListener("dispose",M));const B=L.program;r.updateUBOMapping(O,B);const G=e.render.frame;u[O.id]!==G&&(S(O),u[O.id]=G)}function g(O){const L=v();O.__bindingPointIndex=L;const R=o.createBuffer(),B=O.__size,G=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,B,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,R),R}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const L=l[O.id],R=O.uniforms,B=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,F=R.length;G<F;G++){const X=Array.isArray(R[G])?R[G]:[R[G]];for(let w=0,C=X.length;w<C;w++){const I=X[w];if(y(I,G,w,B)===!0){const st=I.__offset,lt=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let ht=0;ht<lt.length;ht++){const z=lt[ht],Z=D(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,st+ft,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,ft),ft+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,L,R,B){const G=O.value,F=L+"_"+R;if(B[F]===void 0)return typeof G=="number"||typeof G=="boolean"?B[F]=G:B[F]=G.clone(),!0;{const X=B[F];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return B[F]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function b(O){const L=O.uniforms;let R=0;const B=16;for(let F=0,X=L.length;F<X;F++){const w=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,I=w.length;C<I;C++){const st=w[C],lt=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,ht=lt.length;ft<ht;ft++){const z=lt[ft],Z=D(z),Y=R%B,xt=Y%Z.boundary,U=Y+xt;R+=xt,U!==0&&B-U<Z.storage&&(R+=B-U),st.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=Z.storage}}}const G=R%B;return G>0&&(R+=B-G),O.__size=R,O.__cache={},this}function D(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function M(O){const L=O.target;L.removeEventListener("dispose",M);const R=h.indexOf(L.__bindingPointIndex);h.splice(R,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class BA{constructor(e={}){const{canvas:i=SS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),D=new Int32Array(4);let M=null,_=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let B=!1;this._outputColorSpace=ai;let G=0,F=0,X=null,w=-1,C=null;const I=new tn,st=new tn;let lt=null;const ft=new ze(0);let ht=0,z=i.width,Z=i.height,Y=1,xt=null,U=null;const J=new tn(0,0,z,Z),vt=new tn(0,0,z,Z);let St=!1;const wt=new lv;let et=!1,dt=!1;const Mt=new un,Pt=new it,Yt=new tn,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function pe(){return X===null?Y:1}let H=r;function Re(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kh}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),H===null){const W="webgl2";if(H=Re(W,A),H===null)throw Re(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Se,Ft,He,Ht,se,We,qe,N,E,$,ct,_t,ot,zt,bt,Xt,qt,yt,Lt,Zt,kt,Dt,re;function k(){Qt=new YE(H),Qt.init(),kt=new wA(H,Qt),Se=new HE(H,Qt,e,kt),Ft=new RA(H,Qt),Se.reversedDepthBuffer&&S&&Ft.buffers.depth.setReversed(!0),He=new KE(H),Ht=new pA,se=new CA(H,Qt,Ft,Ht,Se,kt,He),We=new VE(R),qe=new qE(R),N=new nM(H),Dt=new IE(H,N),E=new jE(H,N,He,Dt),$=new JE(H,E,N,He),yt=new QE(H,Se,se),bt=new GE(Ht),ct=new dA(R,We,qe,Qt,Se,Dt,bt),_t=new PA(R,Ht),ot=new gA,zt=new yA(Qt),qt=new BE(R,We,qe,Ft,$,y,m),Xt=new AA(R,$,Se),re=new zA(H,He,Se,Ft),Lt=new FE(H,Qt,He),Zt=new ZE(H,Qt,He),He.programs=ct.programs,R.capabilities=Se,R.extensions=Qt,R.properties=Ht,R.renderLists=ot,R.shadowMap=Xt,R.state=Ft,R.info=He}k();const At=new NA(R,H);this.xr=At,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(z,Z,!1))},this.getSize=function(A){return A.set(z,Z)},this.setSize=function(A,W,at=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Z=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(z*Y,Z*Y).floor()},this.setDrawingBufferSize=function(A,W,at){z=A,Z=W,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,W,at,rt){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,W,at,rt),Ft.viewport(I.copy(J).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,at,rt),Ft.scissor(st.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Ft.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let rt=0;if(A){let j=!1;if(X!==null){const Tt=X.texture.format;j=Tt===nd||Tt===ed||Tt===td}if(j){const Tt=X.texture.type,Ut=Tt===ta||Tt===dr||Tt===Eo||Tt===To||Tt===Jh||Tt===$h,It=qt.getClearColor(),Nt=qt.getClearAlpha(),Jt=It.r,te=It.g,Wt=It.b;Ut?(b[0]=Jt,b[1]=te,b[2]=Wt,b[3]=Nt,H.clearBufferuiv(H.COLOR,0,b)):(D[0]=Jt,D[1]=te,D[2]=Wt,D[3]=Nt,H.clearBufferiv(H.COLOR,0,D))}else rt|=H.COLOR_BUFFER_BIT}W&&(rt|=H.DEPTH_BUFFER_BIT),at&&(rt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),qt.dispose(),ot.dispose(),zt.dispose(),Ht.dispose(),We.dispose(),qe.dispose(),$.dispose(),Dt.dispose(),re.dispose(),ct.dispose(),At.dispose(),At.removeEventListener("sessionstart",sn),At.removeEventListener("sessionend",on),je.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=He.autoReset,W=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,j=Xt.type;k(),He.autoReset=A,Xt.enabled=W,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=j}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const W=A.target;W.removeEventListener("dispose",gt),Vt(W)}function Vt(A){ae(A),Ht.remove(A)}function ae(A){const W=Ht.get(A).programs;W!==void 0&&(W.forEach(function(at){ct.releaseProgram(at)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,rt,j,Tt){W===null&&(W=ie);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,It=na(A,W,at,rt,j);Ft.setMaterial(rt,Ut);let Nt=at.index,Jt=1;if(rt.wireframe===!0){if(Nt=E.getWireframeAttribute(at),Nt===void 0)return;Jt=2}const te=at.drawRange,Wt=at.attributes.position;let ce=te.start*Jt,ye=(te.start+te.count)*Jt;Tt!==null&&(ce=Math.max(ce,Tt.start*Jt),ye=Math.min(ye,(Tt.start+Tt.count)*Jt)),Nt!==null?(ce=Math.max(ce,0),ye=Math.min(ye,Nt.count)):Wt!=null&&(ce=Math.max(ce,0),ye=Math.min(ye,Wt.count));const ke=ye-ce;if(ke<0||ke===1/0)return;Dt.setup(j,rt,It,at,Nt);let Ue,ue=Lt;if(Nt!==null&&(Ue=N.get(Nt),ue=Zt,ue.setIndex(Ue)),j.isMesh)rt.wireframe===!0?(Ft.setLineWidth(rt.wireframeLinewidth*pe()),ue.setMode(H.LINES)):ue.setMode(H.TRIANGLES);else if(j.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Ft.setLineWidth(Kt*pe()),j.isLineSegments?ue.setMode(H.LINES):j.isLineLoop?ue.setMode(H.LINE_LOOP):ue.setMode(H.LINE_STRIP)}else j.isPoints?ue.setMode(H.POINTS):j.isSprite&&ue.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ue.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Ve=j._multiDrawCounts,me=j._multiDrawCount,yn=Nt?N.get(Nt).bytesPerElement:1,oi=Ht.get(rt).currentProgram.getUniforms();for(let Cn=0;Cn<me;Cn++)oi.setValue(H,"_gl_DrawID",Cn),ue.render(Kt[Cn]/yn,Ve[Cn])}else if(j.isInstancedMesh)ue.renderInstances(ce,ke,j.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ve=Math.min(at.instanceCount,Kt);ue.renderInstances(ce,ke,Ve)}else ue.render(ce,ke)};function Ce(A,W,at){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,vi(A,W,at),A.side=Pa,A.needsUpdate=!0,vi(A,W,at),A.side=Qi):vi(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),_=zt.get(at),_.init(W),L.push(_),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const rt=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const It=Tt[Ut];Ce(It,at,j),rt.add(It)}else Ce(Tt,at,j),rt.add(Tt)}),_=L.pop(),rt},this.compileAsync=function(A,W,at=null){const rt=this.compile(A,W,at);return new Promise(j=>{function Tt(){if(rt.forEach(function(Ut){Ht.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){j(A);return}setTimeout(Tt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Me=null;function si(A){Me&&Me(A)}function sn(){je.stop()}function on(){je.start()}const je=new uv;je.setAnimationLoop(si),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){Me=A,At.setAnimationLoop(A),A===null?je.stop():je.start()},At.addEventListener("sessionstart",sn),At.addEventListener("sessionend",on),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(W),W=At.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,X),_=zt.get(A,L.length),_.init(W),L.push(_),Mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),wt.setFromProjectionMatrix(Mt,bi,W.reversedDepth),dt=this.localClippingEnabled,et=bt.init(this.clippingPlanes,dt),M=ot.get(A,O.length),M.init(),O.push(M),At.enabled===!0&&At.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&_i(Tt,W,-1/0,R.sortObjects)}_i(A,W,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(xt,U),Fe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Fe&&qt.addToRenderList(M,A),this.info.render.frame++,et===!0&&bt.beginShadows();const at=_.state.shadowsArray;Xt.render(at,A,W),et===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,j=M.transmissive;if(_.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(j.length>0)for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Nt=Tt[Ut];Lo(rt,j,A,Nt)}Fe&&qt.render(A);for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Nt=Tt[Ut];mr(M,A,Nt,Nt.viewport)}}else j.length>0&&Lo(rt,j,A,W),Fe&&qt.render(A),mr(M,A,W);X!==null&&F===0&&(se.updateMultisampleRenderTarget(X),se.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(R,A,W),Dt.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],et===!0&&bt.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function _i(A,W,at,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||wt.intersectsSprite(A)){rt&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Ut=$.update(A),It=A.material;It.visible&&M.push(A,Ut,It,at,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||wt.intersectsObject(A))){const Ut=$.update(A),It=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Yt.copy(Ut.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(It)){const Nt=Ut.groups;for(let Jt=0,te=Nt.length;Jt<te;Jt++){const Wt=Nt[Jt],ce=It[Wt.materialIndex];ce&&ce.visible&&M.push(A,Ut,ce,at,Yt.z,Wt)}}else It.visible&&M.push(A,Ut,It,at,Yt.z,null)}}const Tt=A.children;for(let Ut=0,It=Tt.length;Ut<It;Ut++)_i(Tt[Ut],W,at,rt)}function mr(A,W,at,rt){const j=A.opaque,Tt=A.transmissive,Ut=A.transparent;_.setupLightsView(at),et===!0&&bt.setGlobalState(R.clippingPlanes,at),rt&&Ft.viewport(I.copy(rt)),j.length>0&&gr(j,W,at),Tt.length>0&&gr(Tt,W,at),Ut.length>0&&gr(Ut,W,at),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Lo(A,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new pr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Ro:ta,minFilter:hr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||I;Tt.setSize(Ut.z*R.transmissionResolutionScale,Ut.w*R.transmissionResolutionScale);const It=R.getRenderTarget(),Nt=R.getActiveCubeFace(),Jt=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(ft),ht=R.getClearAlpha(),ht<1&&R.setClearColor(16777215,.5),R.clear(),Fe&&qt.render(at);const te=R.toneMapping;R.toneMapping=Oa;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),et===!0&&bt.setGlobalState(R.clippingPlanes,rt),gr(A,at,rt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let ye=0,ke=W.length;ye<ke;ye++){const Ue=W[ye],ue=Ue.object,Kt=Ue.geometry,Ve=Ue.material,me=Ue.group;if(Ve.side===Qi&&ue.layers.test(rt.layers)){const yn=Ve.side;Ve.side=In,Ve.needsUpdate=!0,Ms(ue,at,rt,Kt,Ve,me),Ve.side=yn,Ve.needsUpdate=!0,ce=!0}}ce===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}R.setRenderTarget(It,Nt,Jt),R.setClearColor(ft,ht),Wt!==void 0&&(rt.viewport=Wt),R.toneMapping=te}function gr(A,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Ut=A[j],It=Ut.object,Nt=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&rt!==null&&(te=rt),It.layers.test(at.layers)&&Ms(It,W,at,Nt,te,Jt)}}function Ms(A,W,at,rt,j,Tt){A.onBeforeRender(R,W,at,rt,j,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,W,at,rt,A,Tt),j.transparent===!0&&j.side===Qi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,R.renderBufferDirect(at,W,rt,j,A,Tt),j.side=Pa,j.needsUpdate=!0,R.renderBufferDirect(at,W,rt,j,A,Tt),j.side=Qi):R.renderBufferDirect(at,W,rt,j,A,Tt),A.onAfterRender(R,W,at,rt,j,Tt)}function vi(A,W,at){W.isScene!==!0&&(W=ie);const rt=Ht.get(A),j=_.state.lights,Tt=_.state.shadowsArray,Ut=j.state.version,It=ct.getParameters(A,j.state,Tt,W,at),Nt=ct.getProgramCacheKey(It);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?qe:We).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",gt),Jt=new Map,rt.programs=Jt);let te=Jt.get(Nt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return Di(A,It),te}else It.uniforms=ct.getUniforms(A),A.onBeforeCompile(It,R),te=ct.acquireProgram(It,Nt),Jt.set(Nt,te),rt.uniforms=It.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=bt.uniform),Di(A,It),rt.needsLights=ia(A),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function _r(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=pc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Di(A,W){const at=Ht.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function na(A,W,at,rt,j){W.isScene!==!0&&(W=ie),se.resetTextureUnits();const Tt=W.fog,Ut=rt.isMeshStandardMaterial?W.environment:null,It=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:_s,Nt=(rt.isMeshStandardMaterial?qe:We).get(rt.envMap||Ut),Jt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,ye=!!at.morphAttributes.color;let ke=Oa;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ke=R.toneMapping);const Ue=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ue=Ue!==void 0?Ue.length:0,Kt=Ht.get(rt),Ve=_.state.lights;if(et===!0&&(dt===!0||A!==C)){const Ze=A===C&&rt.id===w;bt.setState(rt,A,Ze)}let me=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ve.state.version||Kt.outputColorSpace!==It||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Nt||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==te||Kt.morphTargets!==Wt||Kt.morphNormals!==ce||Kt.morphColors!==ye||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ue)&&(me=!0):(me=!0,Kt.__version=rt.version);let yn=Kt.currentProgram;me===!0&&(yn=vi(rt,W,j));let oi=!1,Cn=!1,dn=!1;const Be=yn.getUniforms(),wn=Kt.uniforms;if(Ft.useProgram(yn.program)&&(oi=!0,Cn=!0,dn=!0),rt.id!==w&&(w=rt.id,Cn=!0),oi||C!==A){Ft.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(H,"projectionMatrix",A.projectionMatrix),Be.setValue(H,"viewMatrix",A.matrixWorldInverse);const vn=Be.map.cameraPosition;vn!==void 0&&vn.setValue(H,Pt.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Cn=!0,dn=!0)}if(j.isSkinnedMesh){Be.setOptional(H,j,"bindMatrix"),Be.setOptional(H,j,"bindMatrixInverse");const Ze=j.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Be.setValue(H,"boneTexture",Ze.boneTexture,se))}j.isBatchedMesh&&(Be.setOptional(H,j,"batchingTexture"),Be.setValue(H,"batchingTexture",j._matricesTexture,se),Be.setOptional(H,j,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",j._indirectTexture,se),Be.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",j._colorsTexture,se));const En=at.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&yt.update(j,at,yn),(Cn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Be.setValue(H,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(wn.envMap.value=Nt,wn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),Cn&&(Be.setValue(H,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&Ia(wn,dn),Tt&&rt.fog===!0&&_t.refreshFogUniforms(wn,Tt),_t.refreshMaterialUniforms(wn,rt,Y,Z,_.state.transmissionRenderTarget[A.id]),pc.upload(H,_r(Kt),wn,se)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(pc.upload(H,_r(Kt),wn,se),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(H,"center",j.center),Be.setValue(H,"modelViewMatrix",j.modelViewMatrix),Be.setValue(H,"normalMatrix",j.normalMatrix),Be.setValue(H,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ze=rt.uniformsGroups;for(let vn=0,vr=Ze.length;vn<vr;vn++){const Ln=Ze[vn];re.update(Ln,yn),re.bind(Ln,yn)}}return yn}function Ia(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,at){const rt=Ht.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=W,Ht.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Ht.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const en=H.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){X=A,G=W,F=at;let rt=!0,j=null,Tt=!1,Ut=!1;if(A){const Nt=Ht.get(A);if(Nt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(H.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Nt.__hasExternalTextures)se.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&Ht.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?j=te[W][at]:j=te[W],Tt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?j=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[at]:j=te,I.copy(A.viewport),st.copy(A.scissor),lt=A.scissorTest}else I.copy(J).multiplyScalar(Y).floor(),st.copy(vt).multiplyScalar(Y).floor(),lt=St;if(at!==0&&(j=en),Ft.bindFramebuffer(H.FRAMEBUFFER,j)&&rt&&Ft.drawBuffers(A,j),Ft.viewport(I),Ft.scissor(st),Ft.setScissorTest(lt),Tt){const Nt=Ht.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,at)}else if(Ut){const Nt=W;for(let Jt=0;Jt<A.textures.length;Jt++){const te=Ht.get(A.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,te.__webglTexture,at,Nt)}}else if(A!==null&&at!==0){const Nt=Ht.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,W,at,rt,j,Tt,Ut,It=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Ft.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Jt=A.textures[It],te=Jt.format,Wt=Jt.type;if(!Se.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-j&&(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(W,at,rt,j,kt.convert(te),kt.convert(Wt),Tt))}finally{const Jt=X!==null?Ht.get(X).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,rt,j,Tt,Ut,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-j){Ft.bindFramebuffer(H.FRAMEBUFFER,Nt);const Jt=A.textures[It],te=Jt.format,Wt=Jt.type;if(!Se.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(W,at,rt,j,kt.convert(te),kt.convert(Wt),0);const ye=X!==null?Ht.get(X).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,ye);const ke=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await MS(H,ke,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(ce),H.deleteSync(ke),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const rt=Math.pow(2,-at),j=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Ut=W!==null?W.x:0,It=W!==null?W.y:0;se.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,Ut,It,j,Tt),Ft.unbindTexture()};const No=H.createFramebuffer(),Oo=H.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,rt=null,j=0,Tt=null){Tt===null&&(j!==0?(hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ut,It,Nt,Jt,te,Wt,ce,ye,ke;const Ue=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)Ut=at.max.x-at.min.x,It=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,te=at.min.y,Wt=at.isBox3?at.min.z:0;else{const En=Math.pow(2,-j);Ut=Math.floor(Ue.width*En),It=Math.floor(Ue.height*En),A.isDataArrayTexture?Nt=Ue.depth:A.isData3DTexture?Nt=Math.floor(Ue.depth*En):Nt=1,Jt=0,te=0,Wt=0}rt!==null?(ce=rt.x,ye=rt.y,ke=rt.z):(ce=0,ye=0,ke=0);const ue=kt.convert(W.format),Kt=kt.convert(W.type);let Ve;W.isData3DTexture?(se.setTexture3D(W,0),Ve=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Ve=H.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Ve=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const me=H.getParameter(H.UNPACK_ROW_LENGTH),yn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),oi=H.getParameter(H.UNPACK_SKIP_PIXELS),Cn=H.getParameter(H.UNPACK_SKIP_ROWS),dn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ue.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ue.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,te),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Wt);const Be=A.isDataArrayTexture||A.isData3DTexture,wn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const En=Ht.get(A),Ze=Ht.get(W),vn=Ht.get(En.__renderTarget),vr=Ht.get(Ze.__renderTarget);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Ln=0;Ln<Nt;Ln++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,j,Wt+Ln),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,Tt,ke+Ln)),H.blitFramebuffer(Jt,te,Ut,It,ce,ye,Ut,It,H.DEPTH_BUFFER_BIT,H.NEAREST);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ht.has(A)){const En=Ht.get(A),Ze=Ht.get(W);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,No),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,Oo);for(let vn=0;vn<Nt;vn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,En.__webglTexture,j,Wt+vn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,En.__webglTexture,j),wn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.__webglTexture,Tt,ke+vn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ze.__webglTexture,Tt),j!==0?H.blitFramebuffer(Jt,te,Ut,It,ce,ye,Ut,It,H.COLOR_BUFFER_BIT,H.NEAREST):wn?H.copyTexSubImage3D(Ve,Tt,ce,ye,ke+vn,Jt,te,Ut,It):H.copyTexSubImage2D(Ve,Tt,ce,ye,Jt,te,Ut,It);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else wn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ve,Tt,ce,ye,ke,Ut,It,Nt,ue,Kt,Ue.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Ve,Tt,ce,ye,ke,Ut,It,Nt,ue,Ue.data):H.texSubImage3D(Ve,Tt,ce,ye,ke,Ut,It,Nt,ue,Kt,Ue):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,ce,ye,Ut,It,ue,Kt,Ue.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,ce,ye,Ue.width,Ue.height,ue,Ue.data):H.texSubImage2D(H.TEXTURE_2D,Tt,ce,ye,Ut,It,ue,Kt,Ue);H.pixelStorei(H.UNPACK_ROW_LENGTH,me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,oi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,dn),Tt===0&&W.generateMipmaps&&H.generateMipmap(Ve),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,W,at=null,rt=null,j=0){return hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,at,rt,j)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){G=0,F=0,X=null,Ft.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}function IA(){const o=oh.useRef(null);return oh.useEffect(()=>{if(!(()=>{try{const v=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(v.getContext("webgl")||v.getContext("experimental-webgl")))}catch{return!1}})()){console.error("WebGL is not supported by your browser or device.");return}const i=new YS,r=new ri(75,window.innerWidth/window.innerHeight,.1,1e3),l=new BA({alpha:!0});l.setSize(window.innerWidth,window.innerHeight),o.current&&o.current.appendChild(l.domElement);const u=new od(2,1),h=new rd({color:6619098,wireframe:!0}),d=new Ri(u,h);i.add(d),r.position.z=5;let m;const p=()=>{m=requestAnimationFrame(p),d.rotation.x+=.001,d.rotation.y+=.001,l.render(i,r)};p();const g=()=>{l.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()};return window.addEventListener("resize",g),()=>{window.cancelAnimationFrame(m),o.current&&l.domElement&&o.current.removeChild(l.domElement),window.removeEventListener("resize",g)}},[]),Ct.jsxs("div",{id:"app",children:[Ct.jsx("div",{id:"animus-background",ref:o}),Ct.jsxs("div",{className:"main-content",children:[Ct.jsxs("header",{id:"profile",children:[Ct.jsx("h1",{children:"[SUBJECT: DEVESH SHARMA]"}),Ct.jsx("h2",{children:"AI & DATA SCIENCE ENGINEER // MLOPS & DEVOPS"}),Ct.jsx("p",{className:"summary",children:"AI & Data Science Engineer with hands-on experience in MLOps, DevOps, and cloud infrastructure. Proven track record in building end-to-end ML pipelines and deploying scalable applications."}),Ct.jsxs("div",{className:"social-links",children:[Ct.jsx("a",{href:"https://linkedin.com/in/devesh-sharma-814b3919a",target:"_blank",rel:"noopener noreferrer",children:">> LinkedIn_"}),Ct.jsx("a",{href:"https://github.com/SharmajiKabetaDevesh",target:"_blank",rel:"noopener noreferrer",children:">> GitHub_"}),Ct.jsx("a",{href:"mailto:deveshrs2016@gmail.com",children:">> Email_"})]})]}),Ct.jsxs("main",{children:[Ct.jsxs("section",{id:"sequences",children:[Ct.jsx("h2",{children:"[MEMORY SEQUENCES] // PROJECTS"}),Ct.jsxs("div",{className:"project-grid",children:[Ct.jsxs("div",{className:"project-card",children:[Ct.jsx("h3",{children:"Wine Quality Predictor: End-to-End MLOps Pipeline"}),Ct.jsx("p",{children:"Architected a complete MLOps pipeline featuring automated data ingestion, schema validation, and model versioning with DVC. Achieved 95% accuracy via automated hyperparameter tuning."}),Ct.jsxs("div",{className:"technologies",children:[Ct.jsx("span",{children:"Python"}),Ct.jsx("span",{children:"MLflow"}),Ct.jsx("span",{children:"DVC"}),Ct.jsx("span",{children:"Azure"}),Ct.jsx("span",{children:"Docker"}),Ct.jsx("span",{children:"CI/CD"})]})]}),Ct.jsxs("div",{className:"project-card",children:[Ct.jsx("h3",{children:"2048 Game: Cloud-Native Deployment"}),Ct.jsx("p",{children:"Implemented an automated CI/CD pipeline with GitHub Actions, cutting compute costs by 50%. Deployed the application on Azure Kubernetes Service with zero-downtime rollouts."}),Ct.jsxs("div",{className:"technologies",children:[Ct.jsx("span",{children:"GitHub Actions"}),Ct.jsx("span",{children:"Docker"}),Ct.jsx("span",{children:"AKS"}),Ct.jsx("span",{children:"DNS"})]})]}),Ct.jsxs("div",{className:"project-card",children:[Ct.jsx("h3",{children:"Fly: Chat App with ML Content Moderation"}),Ct.jsx("p",{children:"Developed real-time content moderation using computer vision models. Deployed production-ready ML services with 99.9% uptime using Kubernetes orchestration."}),Ct.jsxs("div",{className:"technologies",children:[Ct.jsx("span",{children:"Python"}),Ct.jsx("span",{children:"CompVision"}),Ct.jsx("span",{children:"Azure ML"}),Ct.jsx("span",{children:"Kubernetes"}),Ct.jsx("span",{children:"Firebase"})]})]}),Ct.jsxs("div",{className:"project-card",children:[Ct.jsx("h3",{children:"Swasthaveda: RAG Medicine Recommender"}),Ct.jsx("p",{children:"Architected a Retrieval-Augmented Generation system on Azure. Built scalable REST API endpoints with automated testing and production deployment workflows."}),Ct.jsxs("div",{className:"technologies",children:[Ct.jsx("span",{children:"Python"}),Ct.jsx("span",{children:"RAG"}),Ct.jsx("span",{children:"Azure"}),Ct.jsx("span",{children:"Docker"}),Ct.jsx("span",{children:"Kubernetes"})]})]})]})]}),Ct.jsxs("section",{id:"arsenal",children:[Ct.jsx("h2",{children:"[SKILLS & ARSENAL] // TECHNICAL ABILITIES"}),Ct.jsxs("div",{className:"skill-category",children:[Ct.jsxs("h3",{children:[">>"," Cloud & DevOps_"]}),Ct.jsx("p",{children:"Microsoft Azure, Docker, Kubernetes, Jenkins, Terraform, Git, CI/CD, GitHub Actions, Linux."})]}),Ct.jsxs("div",{className:"skill-category",children:[Ct.jsxs("h3",{children:[">>"," MLOps & ML Tools_"]}),Ct.jsx("p",{children:"MLflow, DVC, Airflow, Model Versioning, Experiment Tracking, Model Deployment."})]}),Ct.jsxs("div",{className:"skill-category",children:[Ct.jsxs("h3",{children:[">>"," Programming & Data Science_"]}),Ct.jsx("p",{children:"Python, Java, SQL, Pandas, NumPy, Scikit-learn, Keras, PyTorch."})]}),Ct.jsxs("div",{className:"skill-category",children:[Ct.jsxs("h3",{children:[">>"," Frameworks_"]}),Ct.jsx("p",{children:"Spring Boot, Flask."})]})]}),Ct.jsxs("section",{id:"chronicles",children:[Ct.jsx("h2",{children:"[CHRONICLES] // EXPERIENCE"}),Ct.jsx("div",{className:"timeline-item",children:Ct.jsxs("div",{className:"timeline-content",children:[Ct.jsx("h3",{children:"DevOps Intern // Eastri Quick Commerce Startup"}),Ct.jsx("p",{className:"date",children:"[JULY 2025 – AUGUST 2025]"}),Ct.jsxs("ul",{children:[Ct.jsx("li",{children:"> Built comprehensive CI/CD pipelines for backend and Flutter mobile app deployments."}),Ct.jsx("li",{children:"> Deployed microservices architecture on Amazon EKS with automated container orchestration."}),Ct.jsx("li",{children:"> Implemented infrastructure automation, reducing deployment time by 60%."})]})]})})]})]}),Ct.jsxs("footer",{id:"contact",children:[Ct.jsx("h2",{children:"[CONTACT THE BROTHERHOOD]"}),Ct.jsx("p",{children:"I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to initiate contact."}),Ct.jsx("a",{href:"mailto:deveshrs2016@gmail.com",className:"cta-button",children:">> SEND MESSAGE_"}),Ct.jsx("p",{className:"copyright",children:"© 2025 DEVESH SHARMA"})]})]})]})}Dx.createRoot(document.getElementById("root")).render(Ct.jsx(yx.StrictMode,{children:Ct.jsx(IA,{})}));
