(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();function Ky(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xd={exports:{}},_l={};var xv;function Qy(){if(xv)return _l;xv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:r,key:h,ref:u!==void 0?u:null,props:f}}return _l.Fragment=e,_l.jsx=i,_l.jsxs=i,_l}var Sv;function Jy(){return Sv||(Sv=1,xd.exports=Qy()),xd.exports}var Jt=Jy(),Sd={exports:{}},he={};var Mv;function $y(){if(Mv)return he;Mv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function b(G){return G===null||typeof G!="object"?null:(G=y&&G[y]||G["@@iterator"],typeof G=="function"?G:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function w(G,_t,et){this.props=G,this.context=_t,this.refs=S,this.updater=et||D}w.prototype.isReactComponent={},w.prototype.setState=function(G,_t){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,_t,"setState")},w.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function L(){}L.prototype=w.prototype;function U(G,_t,et){this.props=G,this.context=_t,this.refs=S,this.updater=et||D}var H=U.prototype=new L;H.constructor=U,M(H,w.prototype),H.isPureReactComponent=!0;var F=Array.isArray;function P(){}var E={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function it(G,_t,et){var dt=et.ref;return{$$typeof:o,type:G,key:_t,ref:dt!==void 0?dt:null,props:et}}function O(G,_t){return it(G.type,_t,G.props)}function q(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function W(G){var _t={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(et){return _t[et]})}var Q=/\/+/g;function Y(G,_t){return typeof G=="object"&&G!==null&&G.key!=null?W(""+G.key):_t.toString(36)}function z(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(P,P):(G.status="pending",G.then(function(_t){G.status==="pending"&&(G.status="fulfilled",G.value=_t)},function(_t){G.status==="pending"&&(G.status="rejected",G.reason=_t)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function V(G,_t,et,dt,St){var It=typeof G;(It==="undefined"||It==="boolean")&&(G=null);var Dt=!1;if(G===null)Dt=!0;else switch(It){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(G.$$typeof){case o:case e:Dt=!0;break;case _:return Dt=G._init,V(Dt(G._payload),_t,et,dt,St)}}if(Dt)return St=St(G),Dt=dt===""?"."+Y(G,0):dt,F(St)?(et="",Dt!=null&&(et=Dt.replace(Q,"$&/")+"/"),V(St,_t,et,"",function(le){return le})):St!=null&&(q(St)&&(St=O(St,et+(St.key==null||G&&G.key===St.key?"":(""+St.key).replace(Q,"$&/")+"/")+Dt)),_t.push(St)),1;Dt=0;var Et=dt===""?".":dt+":";if(F(G))for(var Xt=0;Xt<G.length;Xt++)dt=G[Xt],It=Et+Y(dt,Xt),Dt+=V(dt,_t,et,It,St);else if(Xt=b(G),typeof Xt=="function")for(G=Xt.call(G),Xt=0;!(dt=G.next()).done;)dt=dt.value,It=Et+Y(dt,Xt++),Dt+=V(dt,_t,et,It,St);else if(It==="object"){if(typeof G.then=="function")return V(z(G),_t,et,dt,St);throw _t=String(G),Error("Objects are not valid as a React child (found: "+(_t==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":_t)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function ft(G,_t,et){if(G==null)return G;var dt=[],St=0;return V(G,dt,"","",function(It){return _t.call(et,It,St++)}),dt}function mt(G){if(G._status===-1){var _t=G._result,et=_t();et.then(function(dt){(G._status===0||G._status===-1)&&(G._status=1,G._result=dt,et.status===void 0&&(et.status="fulfilled",et.value=dt))},function(dt){(G._status===0||G._status===-1)&&(G._status=2,G._result=dt,et.status===void 0&&(et.status="rejected",et.reason=dt))}),G._status===-1&&(G._status=0,G._result=et)}if(G._status===1)return G._result.default;throw G._result}var yt=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(_t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function Tt(G){var _t=E.T,et={};et.types=_t!==null?_t.types:null,E.T=et;try{var dt=G(),St=E.S;St!==null&&St(et,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(P,yt)}catch(It){yt(It)}finally{_t!==null&&et.types!==null&&(_t.types=et.types),E.T=_t}}function Ut(G){var _t=E.T;if(_t!==null){var et=_t.types;et===null?_t.types=[G]:et.indexOf(G)===-1&&et.push(G)}else Tt(Ut.bind(null,G))}var $t={map:ft,forEach:function(G,_t,et){ft(G,function(){_t.apply(this,arguments)},et)},count:function(G){var _t=0;return ft(G,function(){_t++}),_t},toArray:function(G){return ft(G,function(_t){return _t})||[]},only:function(G){if(!q(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return he.Activity=g,he.Children=$t,he.Component=w,he.Fragment=i,he.Profiler=u,he.PureComponent=U,he.StrictMode=r,he.Suspense=m,he.ViewTransition=v,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,he.__COMPILER_RUNTIME={__proto__:null,c:function(G){return E.H.useMemoCache(G)}},he.addTransitionType=Ut,he.cache=function(G){return function(){return G.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(G,_t,et){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var dt=M({},G.props),St=G.key;if(_t!=null)for(It in _t.key!==void 0&&(St=""+_t.key),_t)!C.call(_t,It)||It==="key"||It==="__self"||It==="__source"||It==="ref"&&_t.ref===void 0||(dt[It]=_t[It]);var It=arguments.length-2;if(It===1)dt.children=et;else if(1<It){for(var Dt=Array(It),Et=0;Et<It;Et++)Dt[Et]=arguments[Et+2];dt.children=Dt}return it(G.type,St,dt)},he.createContext=function(G){return G={$$typeof:h,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:f,_context:G},G},he.createElement=function(G,_t,et){var dt,St={},It=null;if(_t!=null)for(dt in _t.key!==void 0&&(It=""+_t.key),_t)C.call(_t,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(St[dt]=_t[dt]);var Dt=arguments.length-2;if(Dt===1)St.children=et;else if(1<Dt){for(var Et=Array(Dt),Xt=0;Xt<Dt;Xt++)Et[Xt]=arguments[Xt+2];St.children=Et}if(G&&G.defaultProps)for(dt in Dt=G.defaultProps,Dt)St[dt]===void 0&&(St[dt]=Dt[dt]);return it(G,It,St)},he.createRef=function(){return{current:null}},he.forwardRef=function(G){return{$$typeof:d,render:G}},he.isValidElement=q,he.lazy=function(G){return{$$typeof:_,_payload:{_status:-1,_result:G},_init:mt}},he.memo=function(G,_t){return{$$typeof:p,type:G,compare:_t===void 0?null:_t}},he.startTransition=Tt,he.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},he.use=function(G){return E.H.use(G)},he.useActionState=function(G,_t,et){return E.H.useActionState(G,_t,et)},he.useCallback=function(G,_t){return E.H.useCallback(G,_t)},he.useContext=function(G){return E.H.useContext(G)},he.useDebugValue=function(){},he.useDeferredValue=function(G,_t){return E.H.useDeferredValue(G,_t)},he.useEffect=function(G,_t){return E.H.useEffect(G,_t)},he.useEffectEvent=function(G){return E.H.useEffectEvent(G)},he.useId=function(){return E.H.useId()},he.useImperativeHandle=function(G,_t,et){return E.H.useImperativeHandle(G,_t,et)},he.useInsertionEffect=function(G,_t){return E.H.useInsertionEffect(G,_t)},he.useLayoutEffect=function(G,_t){return E.H.useLayoutEffect(G,_t)},he.useMemo=function(G,_t){return E.H.useMemo(G,_t)},he.useOptimistic=function(G,_t){return E.H.useOptimistic(G,_t)},he.useReducer=function(G,_t,et){return E.H.useReducer(G,_t,et)},he.useRef=function(G){return E.H.useRef(G)},he.useState=function(G){return E.H.useState(G)},he.useSyncExternalStore=function(G,_t,et){return E.H.useSyncExternalStore(G,_t,et)},he.useTransition=function(){return E.H.useTransition()},he.version="19.3.1",he}var yv;function jp(){return yv||(yv=1,Sd.exports=$y()),Sd.exports}var Ln=jp();const tE=Ky(Ln);var Md={exports:{}},vl={},yd={exports:{}},Ed={};var Ev;function eE(){return Ev||(Ev=1,(function(o){function e(z,V){var ft=z.length;z.push(V);t:for(;0<ft;){var mt=ft-1>>>1,yt=z[mt];if(0<u(yt,V))z[mt]=V,z[ft]=yt,ft=mt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],ft=z.pop();if(ft!==V){z[0]=ft;t:for(var mt=0,yt=z.length,Tt=yt>>>1;mt<Tt;){var Ut=2*(mt+1)-1,$t=z[Ut],G=Ut+1,_t=z[G];if(0>u($t,ft))G<yt&&0>u(_t,$t)?(z[mt]=_t,z[G]=ft,mt=G):(z[mt]=$t,z[Ut]=ft,mt=Ut);else if(G<yt&&0>u(_t,ft))z[mt]=_t,z[G]=ft,mt=G;else break t}}return V}function u(z,V){var ft=z.sortIndex-V.sortIndex;return ft!==0?ft:z.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,v=3,y=!1,b=!1,D=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=z)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function H(z){if(D=!1,U(z),!b)if(i(m)!==null)b=!0,F||(F=!0,q());else{var V=i(p);V!==null&&Y(H,V.startTime-z)}}var F=!1,P=-1,E=5,C=-1;function it(){return M?!0:!(o.unstable_now()-C<E)}function O(){if(M=!1,F){var z=o.unstable_now();C=z;var V=!0;try{t:{b=!1,D&&(D=!1,w(P),P=-1),y=!0;var ft=v;try{e:{for(U(z),g=i(m);g!==null&&!(g.expirationTime>z&&it());){var mt=g.callback;if(typeof mt=="function"){g.callback=null,v=g.priorityLevel;var yt=mt(g.expirationTime<=z);if(z=o.unstable_now(),typeof yt=="function"){g.callback=yt,U(z),V=!0;break e}g===i(m)&&r(m),U(z)}else r(m);g=i(m)}if(g!==null)V=!0;else{var Tt=i(p);Tt!==null&&Y(H,Tt.startTime-z),V=!1}}break t}finally{g=null,v=ft,y=!1}V=void 0}}finally{V?q():F=!1}}}var q;if(typeof L=="function")q=function(){L(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Q=W.port2;W.port1.onmessage=O,q=function(){Q.postMessage(null)}}else q=function(){S(O,0)};function Y(z,V){P=S(function(){z(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(z){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var ft=v;v=V;try{return z()}finally{v=ft}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ft=v;v=z;try{return V()}finally{v=ft}},o.unstable_scheduleCallback=function(z,V,ft){var mt=o.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?mt+ft:mt):ft=mt,z){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=ft+yt,z={id:_++,callback:V,priorityLevel:z,startTime:ft,expirationTime:yt,sortIndex:-1},ft>mt?(z.sortIndex=ft,e(p,z),i(m)===null&&z===i(p)&&(D?(w(P),P=-1):D=!0,Y(H,ft-mt))):(z.sortIndex=yt,e(m,z),b||y||(b=!0,F||(F=!0,q()))),z},o.unstable_shouldYield=it,o.unstable_wrapCallback=function(z){var V=v;return function(){var ft=v;v=V;try{return z.apply(this,arguments)}finally{v=ft}}}})(Ed)),Ed}var Tv;function nE(){return Tv||(Tv=1,yd.exports=eE()),yd.exports}var Td={exports:{}},Nn={};var bv;function iE(){if(bv)return Nn;bv=1;var o=jp();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:y===h?h:""+y,children:_,containerInfo:g,implementation:v}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.browser=function(_){return{$$typeof:f,_reason:_}},Nn.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(_,g,null,v)},Nn.flushSync=function(_){var g=m.T,v=r.p;try{if(m.T=null,r.p=2,_)return _()}finally{m.T=g,r.p=v,r.d.f()}},Nn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},Nn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},Nn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,y=p(v,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:b,fetchPriority:D}):v==="script"&&r.d.X(_,{crossOrigin:y,integrity:b,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Nn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(_)},Nn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=p(v,g.crossOrigin);r.d.L(_,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Nn.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=p(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(_)},Nn.requestFormReset=function(_){r.d.r(_)},Nn.unstable_batchedUpdates=function(_,g){return _(g)},Nn.useFormState=function(_,g,v){return m.H.useFormState(_,g,v)},Nn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Nn.version="19.3.1",Nn}var Av;function aE(){if(Av)return Td.exports;Av=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Td.exports=iE(),Td.exports}var Rv;function sE(){if(Rv)return vl;Rv=1;var o=nE(),e=jp(),i=aE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return m(l),t;if(c===s)return m(l),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=c;else{for(var x=!1,A=l.child;A;){if(A===a){x=!0,a=l,s=c;break}if(A===s){x=!0,s=l,a=c;break}A=A.sibling}if(!x){for(A=c.child;A;){if(A===a){x=!0,a=c,s=l;break}if(A===s){x=!0,s=c,a=l;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,l,c))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=v(t);return a===null||D(n,t,a.child,{foundSelf:!1}),n}function D(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,w=null;function L(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function U(t,n,a){return t===a?(w=t,!1):t===n?(w!==null&&(S=t),!0):!1}function H(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function F(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var c=n;c;c=a(c))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,E=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),it=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Ut=Symbol.for("react.legacy_hidden"),$t=Symbol.for("react.memo_cache_sentinel"),G=Symbol.for("react.view_transition"),_t=Symbol.for("react.recoverable"),et=Symbol.iterator;function dt(t){return t===null||typeof t!="object"?null:(t=et&&t[et]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function It(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case W:return"Profiler";case q:return"StrictMode";case V:return"Suspense";case ft:return"SuspenseList";case Tt:return"Activity";case G:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case it:return"Portal";case Y:return t.displayName||"Context";case Q:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mt:return n=t.displayName||null,n!==null?n:It(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return It(t(n))}catch{}}return null}var Dt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Re=[],Te=-1;function ne(t){return{current:t}}function ue(t){0>Te||(t.current=Re[Te],Re[Te]=null,Te--)}function B(t,n){Te++,Re[Te]=t.current,t.current=n}var De=ne(null),oe=ne(null),ge=ne(null),Bt=ne(null);function N(t,n){switch(B(ge,n),B(oe,t),B(De,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?C_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=C_(n),t=w_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(De),B(De,t)}function T(){ue(De),ue(oe),ue(ge)}function j(t){var n=t.memoizedState;n!==null&&(Yr._currentValue=n.memoizedState,B(Bt,t)),n=De.current;var a=w_(n,t.type);n!==a&&(B(oe,t),B(De,a))}function gt(t){oe.current===t&&(ue(De),ue(oe)),Bt.current===t&&(ue(Bt),Yr._currentValue=le)}var Mt,pt;function Vt(t){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+pt}var At=!1;function Zt(t,n){if(!t||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(Ot){var Z=Ot}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(Ot){Z=Ot}xt=!1;try{var ot=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(ot!==void 0?Object.defineProperty(t.prototype,"props",ot):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){Z=Ot}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(Ot){if(Ot&&Z&&typeof Ot.stack=="string")return[Ot.stack,Z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),x=c[0],A=c[1];if(x&&A){var I=x.split(`
`),$=A.split(`
`);for(l=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;if(s===I.length||l===$.length)for(s=I.length-1,l=$.length-1;1<=s&&0<=l&&I[s]!==$[l];)l--;for(;1<=s&&0<=l;s--,l--)if(I[s]!==$[l]){if(s!==1||l!==1)do if(s--,l--,0>l||I[s]!==$[l]){var ct=`
`+I[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=l);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Vt(a):""}function ie(t,n){switch(t.tag){case 26:case 27:case 5:return Vt(t.type);case 16:return Vt("Lazy");case 13:return t.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Zt(t.type,!1);case 11:return Zt(t.type.render,!1);case 1:return Zt(t.type,!0);case 31:return Vt("Activity");case 30:return Vt("ViewTransition");default:return""}}function bt(t){try{var n="",a=null;do n+=ie(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Rt=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,Ht=o.unstable_shouldYield,me=o.unstable_requestPaint,k=o.unstable_now,Lt=o.unstable_getCurrentPriorityLevel,Ct=o.unstable_ImmediatePriority,K=o.unstable_UserBlockingPriority,rt=o.unstable_NormalPriority,at=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Kt=o.log,fe=o.unstable_setDisableYieldValue,ae=null,Be=null;function Ze(t){if(typeof Kt=="function"&&fe(t),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(ae,t)}catch{}}var Sn=Math.clz32?Math.clz32:pa,Ts=Math.log,Ao=Math.LN2;function pa(t){return t>>>=0,t===0?32:31-(Ts(t)/Ao|0)|0}var Pn=256,Gn=262144,Wi=4194304;function Vn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ji(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~c,s!==0?l=Vn(s):(x&=A,x!==0?l=Vn(x):a||(a=A&~t,a!==0&&(l=Vn(a))))):(A=s&~c,A!==0?l=Vn(A):x!==0?l=Vn(x):a||(a=s&~t,a!==0&&(l=Vn(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function xi(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function bs(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Sn(a),l=1<<s;n|=t[s],a&=~l}return n}function Ha(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var t=Wi;return Wi<<=1,(Wi&62914560)===0&&(Wi=4194304),t}function ur(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function As(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wc(t,n,a,s,l,c){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var ct=31-Sn(a),xt=1<<ct;A[ct]=0,I[ct]=-1;var Z=$[ct];if(Z!==null)for($[ct]=null,ct=0;ct<Z.length;ct++){var ot=Z[ct];ot!==null&&(ot.lane&=-536870913)}a&=~xt}s!==0&&zl(t,s,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(x&~n))}function zl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Sn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Fl(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Sn(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function Bl(t,n){var a=n&-n;return a=(a&42)!==0?1:Co(a),(a&(t.suspendedLanes|n))!==0?0:a}function Co(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function R(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tt(){var t=Xt.p;return t!==0?t:(t=window.event,t===void 0?32:hv(t.type))}function ht(t,n){var a=Xt.p;try{return Xt.p=t,n()}finally{Xt.p=a}}var lt=Math.random().toString(36).slice(2),nt="__reactFiber$"+lt,Nt="__reactProps$"+lt,Gt="__reactContainer$"+lt,zt="__reactEvents$"+lt,jt="__reactListeners$"+lt,te="__reactHandles$"+lt,de="__reactResources$"+lt,pe="__reactMarker$"+lt,Qt="__reactLoad$"+lt;function Pe(t){delete t[nt],delete t[Nt],delete t[jt],delete t[te]}function Ve(t){var n;if(n=t[nt])return n;for(var a=t.parentNode;a;){if(n=a[Gt]||a[nt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Y_(t);t!==null;){if(a=t[nt])return a;t=Y_(t)}return n}t=a,a=t.parentNode}return null}function Xe(t){if(t=t[nt]||t[Gt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ne(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function en(t){var n=t[de];return n||(n=t[de]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pt(t){t[pe]=!0}function In(t){t[Qt]=void 0}var Ue=new Set,Kn={};function Mn(t,n){Qn(t,n),Qn(t+"Capture",n)}function Qn(t,n){for(Kn[t]=n,t=0;t<n.length;t++)Ue.add(n[t])}var Ga=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),He={},cn={};function Zi(t){return Rt.call(cn,t)?!0:Rt.call(He,t)?!1:Ga.test(t)?cn[t]=!0:(He[t]=!0,!1)}var se=!1;function Ui(){var t=se;return se=!1,t}function Ni(t,n,a){if(Zi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Rs(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ma(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function oi(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gS(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(x){a=""+x,c.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jc(t){if(!t._valueTracker){var n=mm(t)?"checked":"value";t._valueTracker=gS(t,n,""+t[n])}}function gm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=mm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var _S=/[\n"\\]/g;function Si(t){return t.replace(_S,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zc(t,n,a,s,l,c,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+oi(n)):t.value!==""+oi(n)&&(t.value=""+oi(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?x==="number"&&t.value==n?Kc(t,oi(t.value)):Kc(t,oi(n)):a!=null?Kc(t,oi(a)):s!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+oi(A):t.removeAttribute("name")}function _m(t,n,a,s,l,c,x,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){jc(t);return}a=a!=null?""+oi(a):"",n=n!=null?""+oi(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),jc(t)}function Kc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function cr(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+oi(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function vm(t,n,a){if(n!=null&&(n=""+oi(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+oi(a):""}function xm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=oi(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),jc(t)}function fr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||vS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Mm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",se=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(Sm(t,l,s),se=!0)}else for(var c in n)n.hasOwnProperty(c)&&Sm(t,c,n[c])}function Qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hl(t){return SS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hr=null,dr=null;function ym(t){var n=Xe(t);if(n&&(t=n.stateNode)){var a=t[Nt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Zc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Si(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[Nt]||null;if(!l)throw Error(r(90));Zc(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&gm(s)}break t;case"textarea":vm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&cr(t,!!a.multiple,n,!1)}}}var tf=!1;function Em(t,n,a){if(tf)return t(n,a);tf=!0;try{var s=t(n);return s}finally{if(tf=!1,(hr!==null||dr!==null)&&(Hu(),hr&&(n=hr,t=dr,dr=hr=null,ym(n),t)))for(n=0;n<t.length;n++)ym(t[n])}}function wo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Nt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(ga)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{ef=!1}var Va=null,nf=null,Gl=null;function Tm(){if(Gl)return Gl;var t,n=nf,a=n.length,s,l="value"in Va?Va.value:Va.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===l[c-s];s++);return Gl=l.slice(t,1<s?1-s:void 0)}function Vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function bm(){return!1}function Xn(t){function n(a,s,l,c,x){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Xl:bm,this.isPropagationStopped=bm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Xn(Xa),Uo=P({},Xa,{view:0,detail:0}),MS=Xn(Uo),af,sf,No,ql=P({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(af=t.screenX-No.screenX,sf=t.screenY-No.screenY):sf=af=0,No=t),af)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),Am=Xn(ql),yS=P({},ql,{dataTransfer:0}),ES=Xn(yS),TS=P({},Uo,{relatedTarget:0}),rf=Xn(TS),bS=P({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),AS=Xn(bS),RS=P({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CS=Xn(RS),wS=P({},Xa,{data:0}),Rm=Xn(wS),DS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},US={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=NS[t])?!!n[t]:!1}function of(){return LS}var OS=P({},Uo,{key:function(t){if(t.key){var n=DS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?US[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PS=Xn(OS),IS=P({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=Xn(IS),zS=P({},Xa,{submitter:0}),FS=Xn(zS),BS=P({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),HS=Xn(BS),GS=P({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),VS=Xn(GS),XS=P({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kS=Xn(XS),qS=P({},Xa,{newState:0,oldState:0,source:0}),YS=Xn(qS),WS=[9,13,27,32],lf=ga&&"CompositionEvent"in window,Lo=null;ga&&"documentMode"in document&&(Lo=document.documentMode);var jS=ga&&"TextEvent"in window&&!Lo,wm=ga&&(!lf||Lo&&8<Lo&&11>=Lo),Dm=" ",Um=!1;function Nm(t,n){switch(t){case"keyup":return WS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function ZS(t,n){switch(t){case"compositionend":return Lm(n);case"keypress":return n.which!==32?null:(Um=!0,Dm);case"textInput":return t=n.data,t===Dm&&Um?null:t;default:return null}}function KS(t,n){if(pr)return t==="compositionend"||!lf&&Nm(t,n)?(t=Tm(),Gl=nf=Va=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wm&&n.locale!=="ko"?null:n.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!QS[t.type]:n==="textarea"}function Pm(t,n,a,s){hr?dr?dr.push(s):dr=[s]:hr=s,n=Yu(n,"onChange"),0<n.length&&(a=new kl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Oo=null,Po=null;function JS(t){y_(t,0)}function Yl(t){var n=Ne(t);if(gm(n))return t}function Im(t,n){if(t==="change")return n}var zm=!1;if(ga){var uf;if(ga){var cf="oninput"in document;if(!cf){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),cf=typeof Fm.oninput=="function"}uf=cf}else uf=!1;zm=uf&&(!document.documentMode||9<document.documentMode)}function Bm(){Oo&&(Oo.detachEvent("onpropertychange",Hm),Po=Oo=null)}function Hm(t){if(t.propertyName==="value"&&Yl(Po)){var n=[];Pm(n,Po,t,$c(t)),Em(JS,n)}}function $S(t,n,a){t==="focusin"?(Bm(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",Hm)):t==="focusout"&&Bm()}function tM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Po)}function eM(t,n){if(t==="click")return Yl(n)}function nM(t,n){if(t==="input"||t==="change")return Yl(n)}function iM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var li=typeof Object.is=="function"?Object.is:iM;function Io(t,n){if(li(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Rt.call(n,l)||!li(t[l],n[l]))return!1}return!0}function ff(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,n){var a=Gm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gm(a)}}function Xm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function km(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ff(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ff(t.document)}return n}function hf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var aM=ga&&"documentMode"in document&&11>=document.documentMode,mr=null,df=null,zo=null,pf=!1;function qm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||mr==null||mr!==ff(s)||(s=mr,"selectionStart"in s&&hf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zo&&Io(zo,s)||(zo=s,s=Yu(df,"onSelect"),0<s.length&&(n=new kl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=mr)))}function Cs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var gr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},mf={},Ym={};ga&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function ws(t){if(mf[t])return mf[t];if(!gr[t])return t;var n=gr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ym)return mf[t]=n[a];return t}var Wm=ws("animationend"),jm=ws("animationiteration"),Zm=ws("animationstart"),sM=ws("transitionrun"),rM=ws("transitionstart"),oM=ws("transitioncancel"),Km=ws("transitionend"),Qm=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function Li(t,n){Qm.set(t,n),Mn(n,[t])}var lM=0;function _a(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=zi.identifierPrefix;var a=lM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Jm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ir;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function va(t,n){return t=Jm(t),n=Jm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],_r=0,_f=0;function jl(){for(var t=_r,n=_f=_r=0;n<t;){var a=Mi[n];Mi[n++]=null;var s=Mi[n];Mi[n++]=null;var l=Mi[n];Mi[n++]=null;var c=Mi[n];if(Mi[n++]=null,s!==null&&l!==null){var x=s.pending;x===null?l.next=l:(l.next=x.next,x.next=l),s.pending=l}c!==0&&$m(a,l,c)}}function Zl(t,n,a,s){Mi[_r++]=t,Mi[_r++]=n,Mi[_r++]=a,Mi[_r++]=s,_f|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function vf(t,n,a,s){return Zl(t,n,a,s),Kl(t)}function Ds(t,n){return Zl(t,null,null,n),Kl(t)}function $m(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Sn(a),t=c.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),c):null}function Kl(t){if(50<sl)throw sl=0,Bu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var vr={};function uM(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,s){return new uM(t,n,a,s)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function t0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ql(t,n,a,s,l,c){var x=0;if(s=t,typeof s=="function")xf(s)&&(x=1);else if(typeof s=="string")x=zy(t,a,De.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Tt:return t=Jn(31,a,n,l),t.elementType=Tt,t.lanes=c,t;case O:return Us(a.children,l,c,n);case q:x=8,l|=24;break;case W:return t=Jn(12,a,n,l|2),t.elementType=W,t.lanes=c,t;case V:return t=Jn(13,a,n,l),t.elementType=V,t.lanes=c,t;case ft:return t=Jn(19,a,n,l),t.elementType=ft,t.lanes=c,t;case Ut:case G:return t=l|32,t=Jn(30,a,n,t),t.elementType=G,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Y:x=10;break t;case Q:x=9;break t;case z:x=11;break t;case mt:x=14;break t;case yt:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Jn(x,a,n,l),n.elementType=t,n.type=s,n.lanes=c,n}function Us(t,n,a,s){return t=Jn(7,t,s,n),t.lanes=a,t}function Sf(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function e0(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Mf(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var n0=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=n0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},n0.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var xr=[],Sr=0,Jl=null,Fo=0,Ei=[],Ti=0,ka=null,Qi=1,Ji="";function Sa(t,n){xr[Sr++]=Fo,xr[Sr++]=Jl,Jl=t,Fo=n}function i0(t,n,a){Ei[Ti++]=Qi,Ei[Ti++]=Ji,Ei[Ti++]=ka,ka=t;var s=Qi;t=Ji;var l=32-Sn(s)-1;s&=~(1<<l),a+=1;var c=32-Sn(n)+l;if(30<c){var x=l-l%5;c=(s&(1<<x)-1).toString(32),s>>=x,l-=x,Qi=1<<32-Sn(n)+l|a<<l|s,Ji=c+t}else Qi=1<<c|a<<l|s,Ji=t}function $l(t){t.return!==null&&(Sa(t,1),i0(t,1,0))}function yf(t){for(;t===Jl;)Jl=xr[--Sr],xr[Sr]=null,Fo=xr[--Sr],xr[Sr]=null;for(;t===ka;)ka=Ei[--Ti],Ei[Ti]=null,Ji=Ei[--Ti],Ei[Ti]=null,Qi=Ei[--Ti],Ei[Ti]=null}function a0(t,n){Ei[Ti++]=Qi,Ei[Ti++]=Ji,Ei[Ti++]=ka,Qi=n.id,Ji=n.overflow,ka=t}var yn=null,Qe=null,Me=!1,qa=null,bi=!1,Ef=Error(r(519));function Ya(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(yi(n,t)),Ef}function s0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[nt]=t,n[Nt]=s,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ae(ol[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),_m(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),xm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||A_(n.textContent,a)?(s.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),s.onScroll!=null&&Ae("scroll",n),s.onScrollEnd!=null&&Ae("scrollend",n),s.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ya(t,!0)}function tu(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:yn=yn.return}}function Mr(t){if(t!==yn)return!1;if(!Me)return tu(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$h(t.type,t.memoizedProps)),a=!a),a&&Qe&&Ya(t),tu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=q_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=q_(t)}else n===27?(n=Qe,ls(t.type)?(t=ld,ld=null,Qe=t):Qe=n):Qe=yn?Ri(t.stateNode.nextSibling):null;return!0}function Ns(){Qe=yn=null,Me=!1}function Tf(){var t=qa;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),qa=null),t}function Bo(t){qa===null?qa=[t]:qa.push(t)}var bf=ne(null),Ls=null,Ma=null;function Wa(t,n,a){B(bf,n._currentValue),n._currentValue=a}function ya(t){t._currentValue=bf.current,ue(bf)}function eu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var x=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),eu(c.return,a,t),s||(x=null);break t}c=A.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(r(341));x.lanes|=a,c=x.alternate,c!==null&&(c.lanes|=a),eu(x,a,t),x=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,x=l.alternate,x!==null&&(x.lanes|=a),eu(l.return,a,t),x=l.child,x=x!==null?x.sibling:null):x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===t){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function Os(t,n,a,s){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=l.type;li(l.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(l===Bt.current){if(x=l.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Yr):t=[Yr])}l=l.return}return t!==null&&Af(n,t,a,s),n.flags|=262144,t!==null}function nu(t){for(t=t.firstContext;t!==null;){if(!li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ps(t){Ls=t,Ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return r0(Ls,t)}function iu(t,n){return Ls===null&&Ps(t),r0(t,n)}function r0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ma===null){if(t===null)throw Error(r(308));Ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ma=Ma.next=n;return a}var cM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fM=o.unstable_scheduleCallback,hM=o.unstable_NormalPriority,fn={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new cM,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&fM(hM,function(){t.controller.abort()})}function o0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Go=null;function dM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Vo=null,Cf=0,Is=0,yr=null;function pM(t,n){if(Vo===null){var a=Vo=[];Cf=0,Is=kh(),yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Cf++,n.then(l0,l0),n}function l0(){if(--Cf===0&&(Go=null,Vo!==null)){yr!==null&&(yr.status="fulfilled");var t=Vo;Vo=null,Is=0,yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mM(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var u0=Et.S;Et.S=function(t,n){if(e_=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pM(t,n),Go!==null)for(var a=Hr;a!==null;)o0(a,Go),a=a.next;if(a=t.types,a!==null){for(var s=Hr;s!==null;)o0(s,a),s=s.next;if(Is!==0){s=Go,s===null&&(s=Go=[]);for(var l=0;l<a.length;l++){var c=a[l];s.indexOf(c)===-1&&s.push(c)}}}u0!==null&&u0(t,n)};var zs=ne(null);function wf(){var t=zs.current;return t!==null?t:Ke.pooledCache}function au(t,n){n===null?B(zs,zs.current):B(zs,n.pool)}function c0(){var t=wf();return t===null?null:{parent:fn._currentValue,pool:t}}var Er=Error(r(460)),Df=Error(r(474)),su=Error(r(542)),ru={then:function(){}};function f0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function h0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,p0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,p0(t),t}throw Bs=n,Er}}function Fs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Bs=a,Er):a}}var Bs=null;function d0(){if(Bs===null)throw Error(r(459));var t=Bs;return Bs=null,t}function p0(t){if(t===Er||t===su)throw Error(r(483))}var Tr=null,Xo=0;function ou(t){var n=Xo;return Xo+=1,Tr===null&&(Tr=[]),h0(Tr,t,n)}function ja(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function lu(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function m0(t){function n(J,X){if(t){var st=J.deletions;st===null?(J.deletions=[X],J.flags|=16):st.push(X)}}function a(J,X){if(!t)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function s(J){for(var X=new Map;J!==null;)J.key===null?X.set(J.index,J):X.set(J.key,J),J=J.sibling;return X}function l(J,X){return J=xa(J,X),J.index=0,J.sibling=null,J}function c(J,X,st){return J.index=st,t?(st=J.alternate,st!==null?(st=st.index,st<X?(J.flags|=2,X):st):(J.flags|=134217730,X)):(J.flags|=1048576,X)}function x(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function A(J,X,st,vt){return X===null||X.tag!==6?(X=Sf(st,J.mode,vt),X.return=J,X):(X=l(X,st),X.return=J,X)}function I(J,X,st,vt){var qt=st.type;return qt===O?(J=ct(J,X,st.props.children,vt,st.key),ja(J,st),J):X!==null&&(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===yt&&Fs(qt)===X.type)?(X=l(X,st.props),ja(X,st),X.return=J,X):(X=Ql(st.type,st.key,st.props,null,J.mode,vt),ja(X,st),X.return=J,X)}function $(J,X,st,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==st.containerInfo||X.stateNode.implementation!==st.implementation?(X=Mf(st,J.mode,vt),X.return=J,X):(X=l(X,st.children||[]),X.return=J,X)}function ct(J,X,st,vt,qt){return X===null||X.tag!==7?(X=Us(st,J.mode,vt,qt),X.return=J,X):(X=l(X,st),X.return=J,X)}function xt(J,X,st){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Sf(""+X,J.mode,st),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case C:return st=Ql(X.type,X.key,X.props,null,J.mode,st),ja(st,X),st.return=J,st;case it:return X=Mf(X,J.mode,st),X.return=J,X;case yt:return X=Fs(X),xt(J,X,st)}if(Dt(X)||dt(X))return X=Us(X,J.mode,st,null),X.return=J,X;if(typeof X.then=="function")return xt(J,ou(X),st);if(X.$$typeof===Y)return xt(J,iu(J,X),st);lu(J,X)}return null}function Z(J,X,st,vt){var qt=X!==null?X.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return qt!==null?null:A(J,X,""+st,vt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case C:return st.key===qt?I(J,X,st,vt):null;case it:return st.key===qt?$(J,X,st,vt):null;case yt:return st=Fs(st),Z(J,X,st,vt)}if(Dt(st)||dt(st))return qt!==null?null:ct(J,X,st,vt,null);if(typeof st.then=="function")return Z(J,X,ou(st),vt);if(st.$$typeof===Y)return Z(J,X,iu(J,st),vt);lu(J,st)}return null}function ot(J,X,st,vt,qt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(st)||null,A(X,J,""+vt,qt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case C:return J=J.get(vt.key===null?st:vt.key)||null,I(X,J,vt,qt);case it:return J=J.get(vt.key===null?st:vt.key)||null,$(X,J,vt,qt);case yt:return vt=Fs(vt),ot(J,X,st,vt,qt)}if(Dt(vt)||dt(vt))return J=J.get(st)||null,ct(X,J,vt,qt,null);if(typeof vt.then=="function")return ot(J,X,st,ou(vt),qt);if(vt.$$typeof===Y)return ot(J,X,st,iu(X,vt),qt);lu(X,vt)}return null}function Ot(J,X,st,vt){for(var qt=null,we=null,ee=X,re=X=0,pn=null;ee!==null&&re<st.length;re++){ee.index>re?(pn=ee,ee=null):pn=ee.sibling;var Le=Z(J,ee,st[re],vt);if(Le===null){ee===null&&(ee=pn);break}t&&ee&&Le.alternate===null&&n(J,ee),X=c(Le,X,re),we===null?qt=Le:we.sibling=Le,we=Le,ee=pn}if(re===st.length)return a(J,ee),Me&&Sa(J,re),qt;if(ee===null){for(;re<st.length;re++)ee=xt(J,st[re],vt),ee!==null&&(X=c(ee,X,re),we===null?qt=ee:we.sibling=ee,we=ee);return Me&&Sa(J,re),qt}for(ee=s(ee);re<st.length;re++)pn=ot(ee,J,re,st[re],vt),pn!==null&&(t&&(Le=pn.alternate,Le!==null&&ee.delete(Le.key===null?re:Le.key)),X=c(pn,X,re),we===null?qt=pn:we.sibling=pn,we=pn);return t&&ee.forEach(function(ds){return n(J,ds)}),Me&&Sa(J,re),qt}function Wt(J,X,st,vt){if(st==null)throw Error(r(151));for(var qt=null,we=null,ee=X,re=X=0,pn=null,Le=st.next();ee!==null&&!Le.done;re++,Le=st.next()){ee.index>re?(pn=ee,ee=null):pn=ee.sibling;var ds=Z(J,ee,Le.value,vt);if(ds===null){ee===null&&(ee=pn);break}t&&ee&&ds.alternate===null&&n(J,ee),X=c(ds,X,re),we===null?qt=ds:we.sibling=ds,we=ds,ee=pn}if(Le.done)return a(J,ee),Me&&Sa(J,re),qt;if(ee===null){for(;!Le.done;re++,Le=st.next())Le=xt(J,Le.value,vt),Le!==null&&(X=c(Le,X,re),we===null?qt=Le:we.sibling=Le,we=Le);return Me&&Sa(J,re),qt}for(ee=s(ee);!Le.done;re++,Le=st.next())Le=ot(ee,J,re,Le.value,vt),Le!==null&&(t&&(pn=Le.alternate,pn!==null&&ee.delete(pn.key===null?re:pn.key)),X=c(Le,X,re),we===null?qt=Le:we.sibling=Le,we=Le);return t&&ee.forEach(function(Zy){return n(J,Zy)}),Me&&Sa(J,re),qt}function ve(J,X,st,vt){if(typeof st=="object"&&st!==null&&st.type===O&&st.key===null&&st.props.ref===void 0&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case C:t:{for(var qt=st.key;X!==null;){if(X.key===qt){if(qt=st.type,qt===O){if(X.tag===7){a(J,X.sibling),vt=l(X,st.props.children),ja(vt,st),vt.return=J,J=vt;break t}}else if(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===yt&&Fs(qt)===X.type){a(J,X.sibling),vt=l(X,st.props),ja(vt,st),vt.return=J,J=vt;break t}a(J,X);break}else n(J,X);X=X.sibling}st.type===O?(vt=Us(st.props.children,J.mode,vt,st.key),ja(vt,st),vt.return=J,J=vt):(vt=Ql(st.type,st.key,st.props,null,J.mode,vt),ja(vt,st),vt.return=J,J=vt)}return x(J);case it:t:{for(qt=st.key;X!==null;){if(X.key===qt)if(X.tag===4&&X.stateNode.containerInfo===st.containerInfo&&X.stateNode.implementation===st.implementation){a(J,X.sibling),vt=l(X,st.children||[]),vt.return=J,J=vt;break t}else{a(J,X);break}else n(J,X);X=X.sibling}vt=Mf(st,J.mode,vt),vt.return=J,J=vt}return x(J);case yt:return st=Fs(st),ve(J,X,st,vt)}if(Dt(st))return Ot(J,X,st,vt);if(dt(st)){if(qt=dt(st),typeof qt!="function")throw Error(r(150));return st=qt.call(st),Wt(J,X,st,vt)}if(typeof st.then=="function")return ve(J,X,ou(st),vt);if(st.$$typeof===Y)return ve(J,X,iu(J,st),vt);lu(J,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,X!==null&&X.tag===6?(a(J,X.sibling),vt=l(X,st),vt.return=J,J=vt):(a(J,X),vt=Sf(st,J.mode,vt),vt.return=J,J=vt),x(J)):a(J,X)}return function(J,X,st,vt){try{Xo=0;var qt=ve(J,X,st,vt);return Tr=null,qt}catch(ee){if(ee===Er||ee===su)throw ee;var we=Jn(29,ee,null,J.mode);return we.lanes=vt,we.return=J,we}}}var Hs=m0(!0),g0=m0(!1),Za=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Fe&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Kl(t),$m(t,null,a),n}return Zl(t,s,n,a),Kl(t)}function ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Fl(t,a)}}function Lf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=x:c=c.next=x,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function qo(){if(Of){var t=yr;if(t!==null)throw t}}function Yo(t,n,a,s){Of=!1;var l=t.updateQueue;Za=!1;var c=l.firstBaseUpdate,x=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var I=A,$=I.next;I.next=null,x===null?c=$:x.next=$,x=I;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==x&&(A===null?ct.firstBaseUpdate=$:A.next=$,ct.lastBaseUpdate=I))}if(c!==null){var xt=l.baseState;x=0,ct=$=I=null,A=c;do{var Z=A.lane&-536870913,ot=Z!==A.lane;if(ot?(Ce&Z)===Z:(s&Z)===Z){Z!==0&&Z===Is&&(Of=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=t,Wt=A;Z=n;var ve=a;switch(Wt.tag){case 1:if(Ot=Wt.payload,typeof Ot=="function"){xt=Ot.call(ve,xt,Z);break t}xt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Wt.payload,Z=typeof Ot=="function"?Ot.call(ve,xt,Z):Ot,Z==null)break t;xt=P({},xt,Z);break t;case 2:Za=!0}}Z=A.callback,Z!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=l.callbacks,ot===null?l.callbacks=[Z]:ot.push(Z))}else ot={lane:Z,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?($=ct=ot,I=xt):ct=ct.next=ot,x|=Z;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,l.lastBaseUpdate=ot,l.shared.pending=null}}while(!0);ct===null&&(I=xt),l.baseState=I,l.firstBaseUpdate=$,l.lastBaseUpdate=ct,c===null&&(l.shared.lanes=0),as|=x,t.lanes=x,t.memoizedState=xt}}function _0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function v0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_0(a[t],n)}var Ja=ne(null),uu=ne(0);function x0(t,n){t=Ra,B(uu,t),B(Ja,n),Ra=t|n.baseLanes}function Pf(){B(uu,Ra),B(Ja,Ja.current)}function If(){Ra=uu.current,ue(Ja),ue(uu)}var Cn=ne(null),zn=null;function $a(t){var n=t.alternate;B(wn,wn.current&1),B(Cn,t),zn===null&&(n===null||Ja.current!==null||n.memoizedState!==null)&&(zn=t)}function zf(t){B(wn,wn.current),B(Cn,t),zn===null&&(zn=t)}function S0(t){t.tag===22?(B(wn,wn.current),B(Cn,t),zn===null&&(zn=t)):ts()}function ts(){B(wn,wn.current),B(Cn,Cn.current)}function ui(t){ue(Cn),zn===t&&(zn=null),ue(wn)}var wn=ne(0);function Wo(t,n){B(Cn,Cn.current),B(wn,n)}function Ff(t){ue(wn),ue(Cn),zn===t&&(zn=null)}function cu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||od(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,_e=null,je=null,hn=null,fu=!1,br=!1,Gs=!1,hu=0,jo=0,Ar=null,gM=0;function an(){throw Error(r(321))}function Bf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!li(t[a],n[a]))return!1;return!0}function Hf(t,n,a,s,l,c){return Ea=c,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?ig:ag,Gs=!1,c=a(s,l),Gs=!1,br&&(c=y0(n,a,s,l)),M0(t),c}function M0(t){Et.H=xu;var n=je!==null&&je.next!==null;if(Ea=0,hn=je=_e=null,fu=!1,jo=0,Ar=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&nu(t)&&(dn=!0))}function y0(t,n,a,s){_e=t;var l=0;do{if(br&&(Ar=null),jo=0,br=!1,25<=l)throw Error(r(301));if(l+=1,hn=je=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=TM,c=n(a,s)}while(br);return c}function _M(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?Zo(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(_e.flags|=1024),n}function Gf(){var t=hu!==0;return hu=0,t}function Vf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xf(t){if(fu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fu=!1}Ea=0,hn=je=_e=null,br=!1,jo=hu=0,Ar=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?_e.memoizedState=hn=t:hn=hn.next=t,hn}function on(){if(je===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=hn===null?_e.memoizedState:hn.next;if(n!==null)hn=n,je=t;else{if(t===null)throw _e.alternate===null?Error(r(467)):Error(r(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},hn===null?_e.memoizedState=hn=t:hn=hn.next=t}return hn}function du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(t){var n=jo;return jo+=1,Ar===null&&(Ar=[]),t=h0(Ar,t,n),n=_e,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?ig:ag),t}function pu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zo(t);if(t.$$typeof===_t)return;if(t.$$typeof===Y)return Rn(t)}throw Error(r(438,String(t)))}function kf(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=du(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=$t;return n.index++,a}function Ta(t,n){return typeof n=="function"?n(t):n}function mu(t){var n=on();return qf(n,je,t)}function qf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,c=s.pending;if(c!==null){if(l!==null){var x=l.next;l.next=c.next,c.next=x}n.baseQueue=l=c,s.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=x=null,I=null,$=n,ct=!1;do{var xt=$.lane&-536870913;if(xt!==$.lane?(Ce&xt)===xt:(Ea&xt)===xt){var Z=$.revertLane;if(Z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xt===Is&&(ct=!0);else if((Ea&Z)===Z){$=$.next,Z===Is&&(ct=!0);continue}else xt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=xt,x=c):I=I.next=xt,_e.lanes|=Z,as|=Z;xt=$.action,Gs&&a(c,xt),c=$.hasEagerState?$.eagerState:a(c,xt)}else Z={lane:xt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=Z,x=c):I=I.next=Z,_e.lanes|=xt,as|=xt;$=$.next}while($!==null&&$!==n);if(I===null?x=c:I.next=A,!li(c,t.memoizedState)&&(dn=!0,ct&&(a=yr,a!==null)))throw a;t.memoizedState=c,t.baseState=x,t.baseQueue=I,s.lastRenderedState=c}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Yf(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var x=l=l.next;do c=t(c,x.action),x=x.next;while(x!==l);li(c,n.memoizedState)||(dn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function E0(t,n,a){var s=_e,l=on(),c=Me;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!li((je||l).memoizedState,a);if(x&&(l.memoizedState=a,dn=!0),l=l.queue,Zf(A0.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||x||hn!==null&&(hn.memoizedState.tag&1)!==0,Rr(t?9:8,{destroy:void 0},b0.bind(null,s,l,a,n),null),t){if(s.flags|=2048,Ke===null)throw Error(r(349));c||(Ea&127)!==0||T0(s,n,a)}return a}function T0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=du(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function b0(t,n,a,s){n.value=a,n.getSnapshot=s,R0(n)&&C0(t)}function A0(t,n,a){return a(function(){R0(n)&&C0(t)})}function R0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!li(t,a)}catch{return!0}}function C0(t){var n=Ds(t,2);n!==null&&ni(n,t,2)}function Wf(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Gs){Ze(!0);try{a()}finally{Ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},n}function w0(t,n,a,s){return t.baseState=a,qf(t,je,typeof s=="function"?s:Ta)}function vM(t,n,a,s,l){if(vu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){c.listeners.push(x)}};Et.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,D0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function D0(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var c=Et.T,x={};x.types=c!==null?c.types:null,Et.T=x;try{var A=a(l,s),I=Et.S;I!==null&&I(x,A),U0(t,n,A)}catch($){jf(t,n,$)}finally{c!==null&&x.types!==null&&(c.types=x.types),Et.T=c}}else try{c=a(l,s),U0(t,n,c)}catch($){jf(t,n,$)}}function U0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){N0(t,n,s)},function(s){return jf(t,n,s)}):N0(t,n,a)}function N0(t,n,a){n.status="fulfilled",n.value=a,L0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,D0(t,a)))}function jf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,L0(n),n=n.next;while(n!==s)}t.action=null}function L0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function O0(t,n){return n}function P0(t,n){if(Me){var a=Ke.formState;if(a!==null){t:{var s=_e;if(Me){if(Qe){e:{for(var l=Qe,c=bi;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ri(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Qe=Ri(l.nextSibling),s=l.data==="F!";break t}}Ya(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:O0,lastRenderedState:n},a.queue=s,a=tg.bind(null,_e,s),s.dispatch=a,s=Wf(!1),c=th.bind(null,_e,!1,s.queue),s=kn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=vM.bind(null,_e,l,c,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function I0(t){var n=on();return z0(n,je,t)}function z0(t,n,a){if(n=qf(t,n,O0)[0],t=mu(Ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Zo(n)}catch(x){throw x===Er?su:x}else s=n;n=on();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,Rr(9,{destroy:void 0},xM.bind(null,l,a),null)),[s,c,t]}function xM(t,n){t.action=n}function F0(t){var n=on(),a=je;if(a!==null)return z0(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Rr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=du(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function B0(){return on().memoizedState}function gu(t,n,a,s){var l=kn();_e.flags|=t,l.memoizedState=Rr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _u(t,n,a,s){var l=on();s=s===void 0?null:s;var c=l.memoizedState.inst;je!==null&&s!==null&&Bf(s,je.memoizedState.deps)?l.memoizedState=Rr(n,c,a,s):(_e.flags|=t,l.memoizedState=Rr(1|n,c,a,s))}function H0(t,n){gu(8390656,8,t,n)}function Zf(t,n){_u(2048,8,t,n)}function SM(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=du(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function G0(t){var n=on().memoizedState;return SM({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function V0(t,n){return _u(4,2,t,n)}function X0(t,n){return _u(4,4,t,n)}function k0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function q0(t,n,a){a=a!=null?a.concat([t]):null,_u(4,4,k0.bind(null,n,t),a)}function Kf(){}function Y0(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Bf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function W0(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Bf(n,s[1]))return s[0];if(s=t(),Gs){Ze(!0);try{t()}finally{Ze(!1)}}return a.memoizedState=[s,n],s}function Qf(t,n,a){return a===void 0||(Ea&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=i_(),_e.lanes|=t,as|=t,a)}function j0(t,n,a,s){return li(a,n)?a:Ja.current!==null?(t=Qf(t,a,s),li(t,n)||(dn=!0),t):(Ea&106)===0||(Ea&1073741824)!==0&&(Ce&261930)===0?(dn=!0,t.memoizedState=a):(t=i_(),_e.lanes|=t,as|=t,n)}function Z0(t,n,a,s,l){var c=Xt.p;Xt.p=c!==0&&8>c?c:8;var x=Et.T,A={};A.types=x!==null?x.types:null,Et.T=A,th(t,!1,n,a);try{var I=l(),$=Et.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=mM(I,s);Ko(t,n,ct,di(t))}else Ko(t,n,s,di(t))}catch(xt){Ko(t,n,{then:function(){},status:"rejected",reason:xt},di())}finally{Xt.p=c,x!==null&&A.types!==null&&(x.types=A.types),Et.T=x}}function MM(){}function Jf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=K0(t).queue;Z0(t,l,n,le,a===null?MM:function(){return Q0(t),a(s)})}function K0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Q0(t){var n=K0(t);n.next===null&&(n=t.alternate.memoizedState),Ko(t,n.next.queue,{},di())}function $f(){return Rn(Yr)}function J0(){return on().memoizedState}function $0(){return on().memoizedState}function yM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();t=Ka(a);var s=Qa(n,t,a);s!==null&&(ni(s,n,a),ko(s,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function EM(t,n,a){var s=di();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vu(t)?eg(n,a):(a=vf(t,n,a,s),a!==null&&(ni(a,t,s),ng(a,n,s)))}function tg(t,n,a){var s=di();Ko(t,n,a,s)}function Ko(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vu(t))eg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var x=n.lastRenderedState,A=c(x,a);if(l.hasEagerState=!0,l.eagerState=A,li(A,x))return Zl(t,n,l,0),Ke===null&&jl(),!1}catch{}if(a=vf(t,n,l,s),a!==null)return ni(a,t,s),ng(a,n,s),!0}return!1}function th(t,n,a,s){if(s={lane:2,revertLane:kh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vu(t)){if(n)throw Error(r(479))}else n=vf(t,a,s,2),n!==null&&ni(n,t,2)}function vu(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function eg(t,n){br=fu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ng(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Fl(t,a)}}var xu={readContext:Rn,use:pu,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},ig={readContext:Rn,use:pu,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:H0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gu(4194308,4,k0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gu(4194308,4,t,n)},useInsertionEffect:function(t,n){gu(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Gs){Ze(!0);try{t()}finally{Ze(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var l=a(n);if(Gs){Ze(!0);try{a(n)}finally{Ze(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=EM.bind(null,_e,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wf(t);var n=t.queue,a=tg.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Kf,useDeferredValue:function(t,n){var a=kn();return Qf(a,t,n)},useTransition:function(){var t=Wf(!1);return t=Z0.bind(null,_e,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=_e,l=kn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ke===null)throw Error(r(349));(Ce&127)!==0||T0(s,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,H0(A0.bind(null,s,c,t),[t]),s.flags|=2048,Rr(9,{destroy:void 0},b0.bind(null,s,c,a,n),null),a},useId:function(){var t=kn(),n=Ke.identifierPrefix;if(Me){var a=Ji,s=Qi;a=(s&~(1<<32-Sn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$f,useFormState:P0,useActionState:P0,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=th.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:kf,useCacheRefresh:function(){return kn().memoizedState=yM.bind(null,_e)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ag={readContext:Rn,use:pu,useCallback:Y0,useContext:Rn,useEffect:Zf,useImperativeHandle:q0,useInsertionEffect:V0,useLayoutEffect:X0,useMemo:W0,useReducer:mu,useRef:B0,useState:function(){return mu(Ta)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=on();return j0(a,je.memoizedState,t,n)},useTransition:function(){var t=mu(Ta)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Zo(t),n]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:$f,useFormState:I0,useActionState:I0,useOptimistic:function(t,n){var a=on();return w0(a,je,t,n)},useMemoCache:kf,useCacheRefresh:$0,useEffectEvent:G0},TM={readContext:Rn,use:pu,useCallback:Y0,useContext:Rn,useEffect:Zf,useImperativeHandle:q0,useInsertionEffect:V0,useLayoutEffect:X0,useMemo:W0,useReducer:Yf,useRef:B0,useState:function(){return Yf(Ta)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=on();return je===null?Qf(a,t,n):j0(a,je.memoizedState,t,n)},useTransition:function(){var t=Yf(Ta)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Zo(t),n]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:$f,useFormState:F0,useActionState:F0,useOptimistic:function(t,n){var a=on();return je!==null?w0(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:kf,useCacheRefresh:$0,useEffectEvent:G0};function eh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=di(),l=Ka(s);l.payload=n,a!=null&&(l.callback=a),n=Qa(t,l,s),n!==null&&(ni(n,t,s),ko(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=di(),l=Ka(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Qa(t,l,s),n!==null&&(ni(n,t,s),ko(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=di(),s=Ka(a);s.tag=2,n!=null&&(s.callback=n),n=Qa(t,s,a),n!==null&&(ni(n,t,a),ko(n,t,a))}};function sg(t,n,a,s,l,c,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,x):n.prototype&&n.prototype.isPureReactComponent?!Io(a,s)||!Io(l,c):!0}function rg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&nh.enqueueReplaceState(n,n.state,null)}function Vs(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function og(t){Wl(t)}function lg(t){console.error(t)}function ug(t){Wl(t)}function Su(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function cg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ih(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Su(t,n)},a}function fg(t){return t=Ka(t),t.tag=3,t}function hg(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=s.value;t.payload=function(){return l(c)},t.callback=function(){cg(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){cg(n,a,s),typeof l!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function bM(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,l,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Gu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===ru?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Gh(t,s,l)),!1;case 22:return a.flags|=65536,s===ru?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Gh(t,s,l)),!1}throw Error(r(435,a.tag))}return Gh(t,s,l),Gu(),!1}if(Me)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==Ef&&(t=Error(r(422),{cause:s}),Bo(yi(t,a)))):(s!==Ef&&(n=Error(r(423),{cause:s}),Bo(yi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=yi(s,a),l=ih(t.stateNode,s,l),Lf(t,l),sn!==4&&(sn=2)),!1;var c=Error(r(520),{cause:s});if(c=yi(c,a),al===null?al=[c]:al.push(c),sn!==4&&(sn=2),n===null)return!0;s=yi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=ih(a.stateNode,s,t),Lf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ss===null||!ss.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=fg(l),hg(l,t,a,s),Lf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ah=Error(r(461)),dn=!1;function gn(t,n,a,s){n.child=t===null?g0(n,null,a,s):Hs(n,t.child,a,s)}function dg(t,n,a,s,l){a=a.render;var c=n.ref;if("ref"in s){var x={};for(var A in s)A!=="ref"&&(x[A]=s[A])}else x=s;return Ps(n),s=Hf(t,n,a,x,c,l),A=Gf(),t!==null&&!dn?(Vf(t,n,l),ba(t,n,l)):(Me&&A&&$l(n),n.flags|=1,gn(t,n,s,l),n.child)}function pg(t,n,a,s,l){if(t===null){var c=a.type;return typeof c=="function"&&!xf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,mg(t,n,c,s,l)):(t=Ql(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!hh(t,l)){var x=c.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(x,s)&&t.ref===n.ref)return ba(t,n,l)}return n.flags|=1,t=xa(c,s),t.ref=n.ref,t.return=n,n.child=t}function mg(t,n,a,s,l){if(t!==null){var c=t.memoizedProps;if(Io(c,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=c,hh(t,l))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,ba(t,n,l)}return sh(t,n,a,s,l)}function gg(t,n,a,s){var l=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~c}else s=0,n.child=null;return _g(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&au(n,c!==null?c.cachePool:null),c!==null?x0(n,c):Pf(),S0(n);else return s=n.lanes=536870912,_g(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(au(n,c.cachePool),x0(n,c),ts(),n.memoizedState=null):(t!==null&&au(n,null),Pf(),ts());return gn(t,n,l,a),n.child}function Qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _g(t,n,a,s,l){var c=wf();return c=c===null?null:{parent:fn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&au(n,null),Pf(),S0(n),t!==null&&Os(t,n,s,!0),n.childLanes=l,null}function Mu(t,n){return n=yu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function vg(t,n,a){return Hs(n,t.child,null,a),t=Mu(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function AM(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=Mu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Qo(null,t);if(zf(n),(t=Qe)?(t=k_(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=e0(t),a.return=n,n.child=a,yn=n,Qe=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return Mu(n,s)}var c=t.memoizedState;if(c!==null){var x=c.dehydrated;if(zf(n),l)if(n.flags&256)n.flags&=-257,n=vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Os(t,n,a,!1),l=(a&t.childLanes)!==0,dn||l){if(Ja.current===null){if(s=Ke,s!==null&&(x=Bl(s,a),x!==0&&x!==c.retryLane))throw c.retryLane=x,Ds(t,x),ni(s,t,x),ah;Gu()}n=vg(t,n,a)}else t=c.treeContext,Qe=Ri(x.nextSibling),yn=n,Me=!0,qa=null,bi=!1,t!==null&&a0(n,t),n=Mu(n,s),n.flags|=134221824;return n}return t=xa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sh(t,n,a,s,l){return Ps(n),a=Hf(t,n,a,s,void 0,l),s=Gf(),t!==null&&!dn?(Vf(t,n,l),ba(t,n,l)):(Me&&s&&$l(n),n.flags|=1,gn(t,n,a,l),n.child)}function xg(t,n,a,s,l,c){return Ps(n),n.updateQueue=null,a=y0(n,s,a,l),M0(t),s=Gf(),t!==null&&!dn?(Vf(t,n,c),ba(t,n,c)):(Me&&s&&$l(n),n.flags|=1,gn(t,n,a,c),n.child)}function Sg(t,n,a,s,l){if(Ps(n),n.stateNode===null){var c=vr,x=a.contextType;typeof x=="object"&&x!==null&&(c=Rn(x)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=nh,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},Uf(n),x=a.contextType,c.context=typeof x=="object"&&x!==null?Rn(x):vr,c.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(eh(n,a,x,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(x=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),x!==c.state&&nh.enqueueReplaceState(c,c.state,null),Yo(n,s,c,l),qo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,I=Vs(a,A);c.props=I;var $=c.context,ct=a.contextType;x=vr,typeof ct=="object"&&ct!==null&&(x=Rn(ct));var xt=a.getDerivedStateFromProps;ct=typeof xt=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||$!==x)&&rg(n,c,s,x),Za=!1;var Z=n.memoizedState;c.state=Z,Yo(n,s,c,l),qo(),$=n.memoizedState,A||Z!==$||Za?(typeof xt=="function"&&(eh(n,a,xt,s),$=n.memoizedState),(I=Za||sg(n,a,I,s,Z,$,x))?(ct||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),c.props=s,c.state=$,c.context=x,s=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Nf(t,n),x=n.memoizedProps,ct=Vs(a,x),c.props=ct,xt=n.pendingProps,Z=c.context,$=a.contextType,I=vr,typeof $=="object"&&$!==null&&(I=Rn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x!==xt||Z!==I)&&rg(n,c,s,I),Za=!1,Z=n.memoizedState,c.state=Z,Yo(n,s,c,l),qo();var ot=n.memoizedState;x!==xt||Z!==ot||Za||t!==null&&t.dependencies!==null&&nu(t.dependencies)?(typeof A=="function"&&(eh(n,a,A,s),ot=n.memoizedState),(ct=Za||sg(n,a,ct,s,Z,ot,I)||t!==null&&t.dependencies!==null&&nu(t.dependencies))?($||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,ot,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,ot,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||x===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),c.props=s,c.state=ot,c.context=I,s=ct):(typeof c.componentDidUpdate!="function"||x===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,Cr(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Hs(n,t.child,null,l),n.child=Hs(n,null,a,l)):gn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=ba(t,n,l),t}function Mg(t,n,a,s){return Ns(),n.flags|=256,gn(t,n,a,s),n.child}var rh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(t){return{baseLanes:t,cachePool:c0()}}function lh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=hi),t}function yg(t,n,a){var s=n.pendingProps,l=!1,c=(n.flags&128)!==0,x;if((x=c)||(x=t!==null&&t.memoizedState===null?!1:(wn.current&2)!==0),x&&(l=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(l?$a(n):ts(),(t=Qe)?(t=k_(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=e0(t),a.return=n,n.child=a,yn=n,Qe=null)):t=null,t===null)throw Ya(n);return od(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,l?(ts(),l=n.mode,c=yu({mode:"hidden",children:c},l),s=Us(s,l,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=oh(a),s.childLanes=lh(t,x,a),n.memoizedState=rh,Qo(null,s)):($a(n),uh(n,c))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return RM(t,n,c,x,s,I,A,a)}return l?(ts(),l=s.fallback,c=n.mode,A=t.child,I=A.sibling,s=xa(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,I!==null?l=xa(I,l):(l=Us(l,c,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Qo(null,s),s=n.child,l=t.child.memoizedState,l===null?l=oh(a):(c=l.cachePool,c!==null?(A=fn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=c0(),l={baseLanes:l.baseLanes|a,cachePool:c}),s.memoizedState=l,s.childLanes=lh(t,x,a),n.memoizedState=rh,Qo(t.child,s)):($a(n),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function uh(t,n){return n=yu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yu(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function Eu(t,n,a){return Hs(n,t.child,null,a),t=uh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function RM(t,n,a,s,l,c,x,A){if(a)return n.flags&256?($a(n),n.flags&=-257,Eu(t,n,A)):n.memoizedState!==null?(ts(),n.child=t.child,n.flags|=128,null):(ts(),c=l.fallback,x=n.mode,l=yu({mode:"visible",children:l.children},x),c=Us(c,x,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Hs(n,t.child,null,A),l=n.child,l.memoizedState=oh(A),l.childLanes=lh(t,s,A),n.memoizedState=rh,Qo(null,l));if($a(n),od(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Bo({value:l,source:null,stack:null})),Eu(t,n,A)}if(dn||Os(t,n,A,!1),s=(A&t.childLanes)!==0,dn||s){if(Ja.current!==null)return Eu(t,n,A);if(s=Ke,s!==null&&(l=Bl(s,A),l!==0&&l!==x.retryLane))throw x.retryLane=l,Ds(t,l),ni(s,t,l),ah;return rd(c)||Gu(),Eu(t,n,A)}return rd(c)?(n.flags|=192,n.child=t.child,null):(t=x.treeContext,Qe=Ri(c.nextSibling),yn=n,Me=!0,qa=null,bi=!1,t!==null&&a0(n,t),n=uh(n,l.children),n.flags|=134221824,n)}function Eg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),eu(t.return,n,a)}function Tg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&cu(a)===null&&(n=t),t=t.sibling}return n}function Tu(t,n,a,s,l,c){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:c}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=l,x.treeForkCount=c)}function ch(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function fh(t,n,a){var s=n.pendingProps,l=s.revealOrder,c=s.tail;s=s.children;var x=wn.current;if(n.flags&128)return Wo(n,x),null;var A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,Wo(n,x),l==="backwards"&&t!==null?(ch(t),gn(t,n,s,a),ch(t)):gn(t,n,s,a),s=Me?Fo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,a,n);else if(t.tag===19)Eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=Tg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,ch(n)),Tu(n,!0,l,null,c,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&cu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Tu(n,!0,a,null,c,s);break;case"together":Tu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Tg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),Tu(n,!1,l,a,c,s)}return n.child}function bg(t,n,a){var s=n.pendingProps;return Wa(n,n.type,s.value),gn(t,n,s.children,a),n.child}function ba(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),as|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=xa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nu(t)))}function CM(t,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),Wa(n,fn,t.memoizedState.cache),Ns();break;case 27:case 5:j(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return $a(n),n.flags|=128,null;s=Os(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?yg(t,n,a):($a(n),t=ba(t,n,a),t!==null?t.sibling:null)}$a(n);break;case 19:if(n.flags&128)return fh(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Os(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return fh(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Wo(n,wn.current),s)break;return null;case 22:return n.lanes=0,gg(t,n,a,n.pendingProps);case 24:Wa(n,fn,t.memoizedState.cache)}return ba(t,n,a)}function Ag(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!hh(t,a)&&(n.flags&128)===0)return dn=!1,CM(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Me&&(n.flags&1048576)!==0&&i0(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Fs(n.elementType),n.type=t,typeof t=="function")xf(t)?(s=Vs(t,s),n.tag=1,n=Sg(null,n,t,s,a)):(n.tag=0,n=sh(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===z){n.tag=11,n=dg(null,n,t,s,a);break t}else if(l===mt){n.tag=14,n=pg(null,n,t,s,a);break t}else if(l===Y){n.tag=10,n.type=t,n=bg(null,n,a);break t}}throw n=It(t)||t,Error(r(306,n,""))}}return n;case 0:return sh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Vs(s,n.pendingProps),Sg(t,n,s,l,a);case 3:t:{if(N(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;l=c.element,Nf(t,n),Yo(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Wa(n,fn,s),s!==c.cache&&Af(n,[fn],a,!0),qo(),s=x.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Mg(t,n,s,a);break t}else if(s!==l){l=yi(Error(r(424)),n),Bo(l),n=Mg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qe=Ri(t.firstChild),yn=n,Me=!0,qa=null,bi=!0,a=g0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ns(),s===l){n=ba(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return Cr(t,n),t===null?(a=Q_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=D_(n.type,n.pendingProps,ge.current,n)):n.memoizedState=Q_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return j(n),t===null&&Me&&(s=n.stateNode=W_(n.type,n.pendingProps,ge.current),yn=n,bi=!0,l=Qe,ls(n.type)?(ld=l,Qe=Ri(s.firstChild)):Qe=l),gn(t,n,n.pendingProps.children,a),Cr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((l=s=Qe)&&(s=yy(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,yn=n,Qe=Ri(s.firstChild),bi=!1,l=!0):l=!1),l||Ya(n)),j(n),l=n.type,c=n.pendingProps,x=t!==null?t.memoizedProps:null,s=c.children,$h(l,c)?s=null:x!==null&&$h(l,x)&&(n.flags|=32),n.memoizedState!==null&&(l=Hf(t,n,_M,null,null,a),Yr._currentValue=l),Cr(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Qe)&&(a=Ey(a,n.pendingProps,bi),a!==null?(n.stateNode=a,yn=n,Qe=null,t=!0):t=!1),t||Ya(n)),null;case 13:return yg(t,n,a);case 4:return N(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Hs(n,null,s,a):gn(t,n,s,a),n.child;case 11:return dg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Cr(t,n),gn(t,n,s,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return bg(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,Ps(n),l=Rn(l),s=s(l),n.flags|=1,gn(t,n,s,a),n.child;case 14:return pg(t,n,n.type,n.pendingProps,a);case 15:return mg(t,n,n.type,n.pendingProps,a);case 19:return fh(t,n,a);case 31:return AM(t,n,a);case 22:return gg(t,n,a,n.pendingProps);case 24:return Ps(n),s=Rn(fn),t===null?(l=wf(),l===null&&(l=Ke,c=Rf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:s,cache:l},Uf(n),Wa(n,fn,l)):((t.lanes&a)!==0&&(Nf(t,n),Yo(n,null,null,a),qo()),l=t.memoizedState,c=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Wa(n,fn,s)):(s=c.cache,Wa(n,fn,s),s!==l.cache&&Af(n,[fn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&$l(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Cr(t,n),gn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Aa(t){t.flags|=4}function dh(t,n,a,s,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?ev(n,s):ev(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(o_())t.flags|=8192;else throw Bs=ru,Df}else t.flags&=-16777217}function Rg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nv(n))if(o_())t.flags|=8192;else throw Bs=ru,Df}function bu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ro():536870912,t.lanes|=n,Lr|=n)}function Jo(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function wM(t,n,a){var s=n.pendingProps;switch(yf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ya(fn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Mr(n)?Aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tf())),Je(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(Aa(n),c!==null?(Je(n),Rg(n,c)):(Je(n),dh(n,l,null,s,a))):c?c!==t.memoizedState?(Aa(n),Je(n),Rg(n,c)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Aa(n),Je(n),dh(n,l,t,s,a)),null;case 27:if(gt(n),a=ge.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}t=De.current,Mr(n)?s0(n):(t=W_(l,s,a),n.stateNode=t,Aa(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}if(c=De.current,Mr(n))s0(n);else{var x=ul(ge.current);switch(c){case 1:c=x.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=x.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=x.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?x.createElement(l,{is:s.is}):x.createElement(l)}}c[nt]=n,c[Nt]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)c.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=c;t:switch(Un(c,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Aa(n)}}return Je(n),n.subtreeFlags&=-33554433,dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ge.current,Mr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=yn,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[nt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||A_(t.nodeValue,a)),t||Ya(n,!0)}else t=ul(t).createTextNode(s),t[nt]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Mr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[nt]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Mr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[nt]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),l=!1}else l=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),bu(n,n.updateQueue),Je(n),null);case 4:return T(),t===null&&jh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return ya(n.type),Je(n),null;case 19:if(Ff(n),s=n.memoizedState,s===null)return Je(n),null;if(l=(n.flags&128)!==0,c=s.rendering,c===null)if(l)Jo(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=cu(t),c!==null){for(n.flags|=128,Jo(s,!1),t=c.updateQueue,n.updateQueue=t,bu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)t0(a,t),a=a.sibling;return Wo(n,wn.current&1|2),Me&&Sa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&k()>zu&&(n.flags|=128,l=!0,Jo(s,!1),n.lanes=4194304)}else{if(!l)if(t=cu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,bu(n,t),Jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!Me)return Je(n),null}else 2*k()-s.renderingStartTime>zu&&a!==536870912&&(n.flags|=128,l=!0,Jo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=k(),t.sibling=null,c=wn.current,c=l?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Me?Wo(n,c):(a=c,B(Cn,n),B(wn,a),zn===null&&(zn=n)),Me&&Sa(n,s.treeForkCount),t}return Je(n),null;case 22:case 23:return ui(n),If(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&bu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ue(zs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ya(fn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(r(156,n.tag))}function DM(t,n){switch(yf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ya(fn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(r(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ff(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ya(n.type),null;case 22:case 23:return ui(n),If(),t!==null&&ue(zs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ya(fn),null;case 25:return null;default:return null}}function Cg(t,n){switch(yf(n),n.tag){case 3:ya(fn),T();break;case 26:case 27:case 5:gt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Ff(n);break;case 10:ya(n.type);break;case 22:case 23:ui(n),If(),t!==null&&ue(zs);break;case 24:ya(fn)}}function $o(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var c=a.create,x=a.inst;s=c(),x.destroy=s}a=a.next}while(a!==l)}}catch(A){qe(n,n.return,A)}}function es(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){var x=s.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,l=n;var I=a,$=A;try{$()}catch(ct){qe(l,I,ct)}}}s=s.next}while(s!==c)}}catch(ct){qe(n,n.return,ct)}}function wg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{v0(n,a)}catch(s){qe(t,t.return,s)}}}function Dg(t,n,a){a.props=Vs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){qe(t,n,s)}}function $i(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,c=_a(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=z_(c)),s=l.ref;break;case 7:if(t.stateNode===null){var x=new pi(t);g(t.child,!1,Sy,x,void 0,void 0),t.stateNode=x}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){qe(t,n,A)}}function Dn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){qe(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qe(t,n,l)}else a.current=null}function Au(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)X_(t.stateNode,n[a])}function Ug(t){for(var n=t.return;n!==null&&(mh(n)&&X_(t.stateNode,n.stateNode),!ph(n));)n=n.return}function tl(t){for(var n=t.return;n!==null&&(mh(n)&&My(t.stateNode,n.stateNode),!ph(n));)n=n.return}function ph(t){return t.tag===5||t.tag===3||t.tag===27}function mh(t){return t&&t.tag===7&&t.stateNode!==null}function gh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){qe(t,t.return,l)}}function _h(t,n,a){try{var s=t.stateNode;ny(s,t.type,a,n),s[Nt]=n}catch(l){qe(t,t.return,l)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ls(t.type)||t.tag===4}function vh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ls(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki)),Au(t,s),se=!0;else if(l!==4&&(l===27&&(Au(t,s),s=null,ls(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(xh(t,n,a,s),t=t.sibling;t!==null;)xh(t,n,a,s),t=t.sibling}function Ru(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Au(t,s),se=!0;else if(l!==4&&(l===27&&(Au(t,s),s=null,ls(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Ru(t,n,a,s),t=t.sibling;t!==null;)Ru(t,n,a,s),t=t.sibling}function Lg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Un(n,s,a),n[nt]=t,n[Nt]=a}catch(c){qe(t,t.return,c)}}var Cu=!1,ci=null;function Og(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Cu=!0)}var ta=null;function Pg(){var t=ta;return ta=null,t}var $n=0;function wr(t,n,a,s,l){return $n=0,Ig(t.child,n,a,s,l)}function Ig(t,n,a,s,l){for(var c=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(s!==null){var A=nd(x);s.push(A),A.view&&(c=!0)}else c||nd(x).view&&(c=!0);Cu=!0,P_(x,$n===0?n:n+"_"+$n,a),$n++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Ig(t.child,n,a,s,l)&&(c=!0));t=t.sibling}return c}function ea(t,n){for(;t!==null;)t.tag===5?I_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ea(t.child,n)),t=t.sibling}function wu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(wu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=va(n.default,n.share),n!=="none"&&(wr(t,a,n,null,!1)||ea(t.child,!1))}t=t.sibling}}function Sh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=_a(s,a),c=va(s.default,a.paired?s.share:s.enter);c!=="none"?wr(t,l,c,null,!1)?(wu(t),a.paired||n||zr(t,s.onEnter)):ea(t.child,!1):wu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sh(t,n),t=t.sibling;else wu(t)}function Mh(t){if(ci!==null&&ci.size!==0){var n=ci;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var c=va(a.default,a.share);if(c!=="none"&&(wr(t,s,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,zr(t,a.onShare)):ea(t.child,!1)),n.delete(s),n.size===0)break}}}Mh(t)}t=t.sibling}}}function yh(t){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode),s=ci!==null?ci.get(a):void 0,l=va(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(wr(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ci.delete(a),zr(t,n.onShare)):zr(t,n.onExit):ea(t.child,!1)),ci!==null&&Mh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yh(t),t=t.sibling;else ci!==null&&Mh(t)}function zg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode);n=va(n.default,n.update),t.flags&=-5,n!=="none"&&wr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&zg(t);t=t.sibling}}function Eh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ea(t.child,!1))}Eh(t)}t=t.sibling}}function Du(t){if(t.tag===30)t.stateNode.paired=null,ea(t.child,!1),Eh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Du(t),t=t.sibling;else Eh(t)}function Fg(t){for(t=t.child;t!==null;)t.tag===30?ea(t.child,!1):(t.subtreeFlags&33554432)!==0&&Fg(t),t=t.sibling}function Th(t,n,a,s,l,c,x){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&$n<c.length){var $=c[$n],ct=nd(I);($.view||ct.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(ct.clip)xt=!0;else{xt=$.rect;var Z=ct.rect;xt=xt.y!==Z.y||xt.x!==Z.x||xt.height!==Z.height||xt.width!==Z.width}xt&&(t.flags|=4),ct.abs?ct=!$.abs:($=$.rect,ct=ct.rect,ct=$.height!==ct.height||$.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&P_(I,$n===0?a:a+"_"+$n,l),A&&(t.flags&4)!==0||(ta===null&&(ta=[]),ta.push(I,$n===0?s:s+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?t.flags|=n.flags&32:Th(t,n.child,a,s,l,c,x)&&(A=!0));n=n.sibling}return A}function Bg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=_a(a,s),c=va(a.default,a.update),x;x=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;$n=0,l=Th(s,A,l,l,c,x,!1),(t.flags&4)!==0&&l&&zr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Bg(t);t=t.sibling}}var En=!1,Ge=!1,na=!1,bh=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Tn=null,ia=!1,el=!1,Uu=!1,Ah=!1;function UM(t,n,a){if(t=t.containerInfo,Qh=Wr,t=km(t),hf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,x=l.focusNode;l=l.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break t}var A=0,I=-1,$=-1,ct=0,xt=0,Z=t,ot=null;e:for(;;){for(var Ot;Z!==s||c!==0&&Z.nodeType!==3||(I=A+c),Z!==x||l!==0&&Z.nodeType!==3||($=A+l),Z.nodeType===3&&(A+=Z.nodeValue.length),(Ot=Z.firstChild)!==null;)ot=Z,Z=Ot;for(;;){if(Z===t)break e;if(ot===s&&++ct===c&&(I=A),ot===x&&++xt===l&&($=A),(Ot=Z.nextSibling)!==null)break;Z=ot,ot=Z.parentNode}Z=Ot}s=I===-1||$===-1?null:{start:I,end:$}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jh={focusedElem:t,selectionRange:s},Wr=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&yh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&Og(t),Nu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&yh(s),Nu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Og(t),Nu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Tn=s):(a&&zg(t),Nu(a))}}ci=null}function Nu(t){for(;Tn!==null;){var n=Tn,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var x=Vs(n.type,l);a=c.getSnapshotBeforeUpdate(x,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){qe(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)sd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":sd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=_a(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=va(l.default,l.update),l!=="none"&&wr(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Tn=s;break}Tn=n.return}}function Gg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),s&4&&$o(5,a);break;case 1:if(aa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){qe(a,a.return,x)}else{var l=Vs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){qe(a,a.return,x)}}s&64&&wg(a),s&512&&$i(a,a.return);break;case 3:if(aa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{v0(t,n)}catch(x){qe(a,a.return,x)}}break;case 27:n===null&&s&4&&Lg(a);case 26:case 5:aa(t,a),n===null&&s&4&&gh(a),s&512&&$i(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),s&4&&qg(t,a);break;case 13:aa(t,a),s&4&&Yg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=XM.bind(null,a),Ty(t,a))));break;case 22:if(s=a.memoizedState!==null||En,!s){var c=n!==null&&n.memoizedState!==null||Ge;n=En,l=Ge,En=s,(Ge=c)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ii(t,a,s)):aa(t,a),En=n,Ge=l}break;case 30:aa(t,a),s&512&&$i(a,a.return);break;case 7:s&512&&$i(a,a.return);default:aa(t,a)}}function Rh(t,n){for(t=t.child;t!==null;)Vg(t,n),t=t.sibling}function Vg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,x=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(I){qe(t,t.return,I)}Ch(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,se=!0}catch(I){qe(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?O_(A,!0):O_(t.stateNode,!1)}catch(I){qe(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Rh(t,n);break;default:Rh(t,n)}}function Ch(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Vg(a,s);break t;case 22:a.memoizedState===null&&Ch(a,s);break t;default:Ch(a,s)}}t=t.sibling}}function Xg(t){var n=t.alternate;n!==null&&(t.alternate=null,Xg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pe(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,ti=!1;function Oi(t,n,a){for(a=a.child;a!==null;)kg(t,n,a),a=a.sibling}function kg(t,n,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:Ge||Dn(a,n),Oi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Dn(a,n),tl(a);var s=tn,l=ti;ls(a.type)&&(tn=a.stateNode,ti=!1),Oi(t,n,a),j_(a.stateNode,a.type,a.memoizedProps),tn=s,ti=l;break;case 5:Ge||Dn(a,n),tl(a);case 6:if(a.tag===6&&tl(a),s=tn,l=ti,tn=null,Oi(t,n,a),tn=s,ti=l,tn!==null)if(ti)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),se=!0}catch(c){qe(a,n,c)}else try{tn.removeChild(a.stateNode),se=!0}catch(c){qe(a,n,c)}break;case 18:tn!==null&&(ti?(t=tn,L_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),jr(t)):L_(tn,a.stateNode));break;case 4:s=tn,l=ti,tn=a.stateNode.containerInfo,ti=!0,Oi(t,n,a),tn=s,ti=l;break;case 0:case 11:case 14:case 15:es(2,a,n),Ge||es(4,a,n),Oi(t,n,a);break;case 1:Ge||(Dn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Dg(a,n,s)),Oi(t,n,a);break;case 21:Oi(t,n,a);break;case 22:Ge=(s=Ge)||a.memoizedState!==null,Oi(t,n,a),Ge=s;break;case 30:Dn(a,n),Oi(t,n,a);break;case 7:Ge||Dn(a,n),Oi(t,n,a);break;default:Oi(t,n,a)}}function qg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{jr(t)}catch(a){qe(n,n.return,a)}}}function Yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jr(t)}catch(a){qe(n,n.return,a)}}function NM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Hg),n;default:throw Error(r(435,t.tag))}}function Lu(t,n){var a=NM(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=kM.bind(null,t,s);s.then(l,l)}})}function qn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],x=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(ls(I.type)){tn=I.stateNode,ti=!1;break t}break;case 5:tn=I.stateNode,ti=!1;break t;case 3:case 4:tn=I.stateNode.containerInfo,ti=!0;break t}I=I.return}if(tn===null)throw Error(r(160));kg(x,A,c),tn=null,ti=!1,x=c.alternate,x!==null&&(x.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,t,a),n=n.sibling}var Pi=null;function Wg(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var x=s[c];x.ref.impl=x.nextImpl}qn(n,t,a),Yn(t),l&4&&(es(3,t,t.return),$o(3,t),es(5,t,t.return));break;case 1:qn(n,t,a),Yn(t),l&512&&(Ge||s===null||Dn(s,s.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Pi,qn(n,t,a),Yn(t),l&512&&(Ge||s===null||Dn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=D_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[pe]||s[nt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Un(s,n,a),s[nt]=t,Pt(s),n=s;break t;case"link":if(c=tv("link","href",l).get(n+(a.href||""))){for(x=0;x<c.length;x++)if(s=c[x],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(x,1);break e}}s=l.createElement(n),Un(s,n,a),l.head.appendChild(s);break;case"meta":if(c=tv("meta","content",l).get(n+(a.content||""))){for(x=0;x<c.length;x++)if(s=c[x],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(x,1);break e}}s=l.createElement(n),Un(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[nt]=t,Pt(s),n=s}t.stateNode=n}else En||hd(c,t.type,t.stateNode);else t.stateNode=$_(c,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||Ge||n.parentNode.removeChild(n)):l.count--,a===null?En||hd(c,t.type,t.stateNode):$_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&_h(t,t.memoizedProps,s.memoizedProps);break;case 27:qn(n,t,a),Yn(t),l&512&&(Ge||s===null||Dn(s,s.return)),s!==null&&l&4&&_h(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=na,na=!1,qn(n,t,a),na=c,Yn(t),l&512&&(Ge||s===null||Dn(s,s.return)),t.flags&32){n=t.stateNode;try{fr(n,""),se=!0}catch(ct){qe(t,t.return,ct)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,_h(t,n,s!==null?s.memoizedProps:n)),l&1024&&(bh=!0);break;case 6:if(qn(n,t,a),Yn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,se=!0}catch(ct){qe(t,t.return,ct)}}break;case 3:if(se=!1,ju=null,c=Pi,Pi=cl(n.containerInfo),qn(n,t,a),Pi=c,Yn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(ct){qe(t,t.return,ct)}bh&&(bh=!1,jg(t)),se=!1;break;case 4:l=na,na=En,s=Ui(),c=Pi,Pi=cl(t.stateNode.containerInfo),qn(n,t,a),Yn(t),Pi=c,se&&el&&(Uu=!0),se=s,na=l;break;case 12:qn(n,t,a),Yn(t);break;case 31:qn(n,t,a),Yn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Lu(t,n)));break;case 13:qn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Iu=k()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Lu(t,n)));break;case 22:c=t.memoizedState!==null,x=s!==null&&s.memoizedState!==null;var A=En,I=Ge,$=na;En=A||c,na=$||c,Ge=I||x,qn(n,t,a),Ge=I,na=$,En=A,Yn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||x||En||Ge||(n=x||Ge,a=En,s=Ge,En=c||En,Ge=n,ns(t,2),En=a,Ge=s),!c&&na||Rh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Lu(t,a))));break;case 19:qn(n,t,a),Yn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Lu(t,n)));break;case 30:l&512&&(Ge||s===null||Dn(s,s.return)),l=Ui(),c=el,x=(a&335544064)===a,A=t.memoizedProps,el=x&&va(A.default,A.update)!=="none",qn(n,t,a),Yn(t),x&&s!==null&&se&&(t.flags|=4),el=c,se=l;break;case 21:break;case 7:l&512&&(Ge||s===null||Dn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:qn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Ng(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(mh(l)){var c=l.stateNode;s===null?s=[c]:s.push(c)}if(ph(l))break;l=l.return}var x=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,I=vh(t);Ru(t,I,A,x);break;case 5:var $=a.stateNode;a.flags&32&&(fr($,""),a.flags&=-33);var ct=vh(t);Ru(t,ct,$,x);break;case 3:case 4:var xt=a.stateNode.containerInfo,Z=vh(t);xh(t,Z,xt,x);break;default:throw Error(r(161))}}catch(ot){qe(t,t.return,ot)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function jg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;jg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Wr=!0,n.reset(),Wr=!1),t=t.sibling}}function Dr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Zg(n,t),n=n.sibling;else Bg(n)}function Zg(t,n){var a=t.alternate;if(a===null)Sh(t,!1);else switch(t.tag){case 3:if(Ah=ia=!1,Pg(),Dr(n,t),!ia&&!Uu){if(t=ta,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];I_(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ah=!0}ta=null;break;case 5:Dr(n,t);break;case 4:s=ia,ia=!1,Dr(n,t),ia&&(Uu=!0),ia=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Sh(t,!1):Dr(n,t));break;case 30:s=ia,l=Pg(),ia=!1,Dr(n,t),ia&&(t.flags|=4);var c=t.memoizedProps,x=t.stateNode;n=_a(c,x),x=_a(a.memoizedProps,x);var A=va(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,$n=0,n=Th(t,a,n,x,A,c,!0),$n!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(zr(t,t.memoizedProps.onUpdate),ta=l):l!==null&&(l.push.apply(l,ta),ta=l),ia=(t.flags&32)!==0?!0:s;break;default:Dr(n,t)}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gg(t,n.alternate,n),n=n.sibling}function ns(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:es(4,a,a.return),ns(a,s);break;case 1:Dn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Dg(a,a.return,l),ns(a,s);break;case 27:(s&2)!==0&&j_(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||tl(a),ns(a,s);break;case 6:tl(a);break;case 26:Dn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Ge||l.parentNode.removeChild(l),ns(a,s);break;case 22:a.memoizedState===null&&ns(a,s);break;case 30:Dn(a,a.return),ns(a,s);break;case 7:Dn(a,a.return);default:ns(a,s)}t=t.sibling}}function Ii(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,c=n,x=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ii(l,c,a),$o(4,c);break;case 1:if(Ii(l,c,a),s=c,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ct){qe(s,s.return,ct)}if(s=c,l=s.updateQueue,l!==null){var I=s.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)_0($[l],I)}catch(ct){qe(s,s.return,ct)}}A&&x&64&&wg(c),$i(c,c.return);break;case 27:(a&2)!==0&&Lg(c);case 5:c.tag!==5&&c.tag!==27||Ug(c),Ii(l,c,a),A&&s===null&&x&4&&gh(c),$i(c,c.return);break;case 6:Ug(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||En||hd(cl(I.ownerDocument),c.type,I),Ii(l,c,a),A&&s===null&&x&4&&gh(c),$i(c,c.return);break;case 12:Ii(l,c,a);break;case 31:Ii(l,c,a),A&&x&4&&qg(l,c);break;case 13:Ii(l,c,a),A&&x&4&&Yg(l,c);break;case 22:c.memoizedState===null&&Ii(l,c,a),$i(c,c.return);break;case 30:Ii(l,c,a),$i(c,c.return);break;case 7:$i(c,c.return);default:Ii(l,c,a)}n=n.sibling}}function wh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ho(a))}function Dh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function Ai(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Kg(t,n,a,s),n=n.sibling;else l&&Fg(n)}function Kg(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Du(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,s),c&2048&&$o(9,n);break;case 1:Ai(t,n,a,s);break;case 3:Ai(t,n,a,s),l&&Ah&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ho(c)));break;case 12:if(c&2048){Ai(t,n,a,s),c=n.stateNode;try{var x=n.memoizedProps,A=x.id,I=x.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch($){qe(n,n.return,$)}}else Ai(t,n,a,s);break;case 31:Ai(t,n,a,s);break;case 13:Ai(t,n,a,s);break;case 23:break;case 22:x=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&Du(A),x._visibility&2?Ai(t,n,a,s):nl(t,n)):(l&&A!==null&&A.memoizedState!==null&&Du(n),x._visibility&2?Ai(t,n,a,s):(x._visibility|=2,Ur(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&wh(A,n);break;case 24:Ai(t,n,a,s),c&2048&&Dh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ea(c.child,!0),ea(n.child,!0))),Ai(t,n,a,s);break;default:Ai(t,n,a,s)}}function Ur(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,x=n,A=a,I=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:Ur(c,x,A,I,l),$o(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&2?Ur(c,x,A,I,l):nl(c,x):(ct._visibility|=2,Ur(c,x,A,I,l)),l&&$&2048&&wh(x.alternate,x);break;case 24:Ur(c,x,A,I,l),l&&$&2048&&Dh(x.alternate,x);break;default:Ur(c,x,A,I,l)}n=n.sibling}}function nl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:nl(a,s),l&2048&&wh(s.alternate,s);break;case 24:nl(a,s),l&2048&&Dh(s.alternate,s);break;default:nl(a,s)}n=n.sibling}}var Xs=8192;function ks(t,n,a){if(t.subtreeFlags&Xs)for(t=t.child;t!==null;)Qg(t,n,a),t=t.sibling}function Qg(t,n,a){switch(t.tag){case 26:ks(t,n,a),t.flags&Xs&&(t.memoizedState!==null?Fy(a,Pi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&av(a,t)));break;case 5:ks(t,n,a),t.flags&Xs&&(t=t.stateNode,(n&335544128)===n&&av(a,t));break;case 3:case 4:var s=Pi;Pi=cl(t.stateNode.containerInfo),ks(t,n,a),Pi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Xs,Xs=16777216,ks(t,n,a),Xs=s):ks(t,n,a));break;case 30:if((t.flags&Xs)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ci===null&&(ci=new Map),ci.set(s,l)}ks(t,n,a);break;default:ks(t,n,a)}}function Jg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Tn=s,t_(s,t)}Jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$g(t),t=t.sibling}function $g(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&es(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ou(t)):il(t);break;default:il(t)}}function Ou(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Tn=s,t_(s,t)}Jg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:es(8,n,n.return),Ou(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ou(n));break;default:Ou(n)}t=t.sibling}}function t_(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:es(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Tn=s;else t:for(a=t;Tn!==null;){s=Tn;var l=s.sibling,c=s.return;if(Xg(s),s===a){Tn=null;break t}if(l!==null){l.return=c,Tn=l;break t}Tn=c}}}var LM={getCacheForType:function(t){var n=Rn(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(fn).controller.signal}},OM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ke=null,be=null,Ce=0,ke=0,fi=null,is=!1,Nr=!1,Uh=!1,Ra=0,sn=0,as=0,qs=0,Pu=0,hi=0,Lr=0,al=null,ei=null,Nh=!1,Iu=0,e_=0,zu=1/0,Fu=null,ss=null,nn=0,zi=null,Ys=null,sa=0,Lh=0,Oh=null,n_=null,Or=null,Pr=null,Ir=null,sl=0,Bu=null;function di(){return(Fe&2)!==0&&Ce!==0?Ce&-Ce:Et.T!==null?kh():tt()}function i_(){if(hi===0)if((Ce&536870912)===0||Me){var t=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),hi=t}else hi=536870912;return t=Cn.current,t!==null&&(t.flags|=32),hi}function zr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=z_(_a(t.memoizedProps,a))),Pr===null&&(Pr=[]),Pr.push(n.bind(null,s))}}function ni(t,n,a){(t===Ke&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(Fr(t,0),rs(t,Ce,hi,!1)),As(t,a),((Fe&2)===0||t!==Ke)&&(t===Ke&&((Fe&2)===0&&(qs|=a),sn===4&&rs(t,Ce,hi,!1)),ra(t))}function a_(t,n,a){if((Fe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||xi(t,n),l=s?zM(t,n):Ih(t,n,!0),c=s;do{if(l===0){Nr&&!s&&rs(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!PM(a)){l=Ih(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=t;l=al;var I=A.current.memoizedState.isDehydrated;if(I&&(Fr(A,x).flags|=256),x=Ih(A,x,!1),x!==2&&x!==6){if(Uh&&!I){A.errorRecoveryDisabledLanes|=c,qs|=c,l=4;break t}c=ei,ei=l,c!==null&&(ei===null?ei=c:ei.push.apply(ei,c))}l=x}if(c=!1,l!==2)continue}}if(l===1){Fr(t,0),rs(t,n,0,!0);break}t:{switch(s=t,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:rs(s,n,hi,!is);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Iu+300-k(),10<l)){if(rs(s,n,hi,!is),ji(s,0,!0)!==0)break t;sa=n,s.timeoutHandle=ed(s_.bind(null,s,a,ei,Fu,Nh,n,hi,qs,Lr,is,c,"Throttled",-0,0),l);break t}s_(s,a,ei,Fu,Nh,n,hi,qs,Lr,is,c,null,-0,0)}}break}while(!0);ra(t)}function s_(t,n,a,s,l,c,x,A,I,$,ct,xt,Z,ot){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Wt=(c&335544064)===c;if(xt=null,(Wt||Ot&8192||(Ot&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},ci=null,Qg(n,c,xt),Wt&&(Ot=xt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=dl.bind(Ot),Wt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?Iu-k():(c&4194048)===c?e_-k():0,Ot=By(xt,Ot),Ot!==null)){sa=c,t.cancelPendingCommit=Ot(d_.bind(null,t,n,c,a,s,l,x,A,I,$,ct,xt,null,Z,ot)),rs(t,c,x,!$);return}d_(t,n,c,a,s,l,x,A,I,$,ct,xt)}function PM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],c=l.getSnapshot;l=l.value;try{if(!li(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rs(t,n,a,s){n=bs(t,n),n&=~Pu,n&=~qs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var c=31-Sn(l),x=1<<c;s[c]=-1,l&=~x}a!==0&&zl(t,a,n)}function Hu(){return(Fe&6)===0?(rl(0),!1):!0}function Ph(){if(be!==null){if(ke===0)var t=be.return;else t=be,Ma=Ls=null,Xf(t),Tr=null,Xo=0,t=be;for(;t!==null;)Cg(t.alternate,t),t=t.return;be=null}}function Fr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,sy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Ph(),Ke=t,be=a=xa(t.current,null),Ce=n,ke=0,fi=null,is=!1,Nr=xi(t,n),Uh=!1,Lr=hi=Pu=qs=as=sn=0,ei=al=null,Nh=!1,Ra=bs(t,n),jl(),a}function r_(t,n){_e=null,Et.H=xu,n===Er||n===su?(n=d0(),ke=3):n===Df?(n=d0(),ke=4):ke=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,be===null&&(sn=1,Su(t,yi(n,t.current)))}function o_(){var t=Cn.current;return t===null?!0:(Ce&4194048)===Ce?zn===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===zn:!1}function l_(){var t=Et.H;return Et.H=xu,t===null?xu:t}function u_(){var t=Et.A;return Et.A=LM,t}function Gu(){sn=4,is||(Ce&4194048)!==Ce&&Cn.current!==null||(Nr=!0),(as&134217727)===0&&(qs&134217727)===0||Ke===null||rs(Ke,Ce,hi,!1)}function Ih(t,n,a){var s=Fe;Fe|=2;var l=l_(),c=u_();(Ke!==t||Ce!==n)&&(Fu=null,Fr(t,n)),n=!1;var x=sn;t:do try{if(ke!==0&&be!==null){var A=be,I=fi;switch(ke){case 8:Ph(),x=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var $=ke;if(ke=0,fi=null,Br(t,A,I,$),a&&Nr){x=0;break t}break;default:$=ke,ke=0,fi=null,Br(t,A,I,$)}}IM(),x=sn;break}catch(ct){r_(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Ma=Ls=null,Fe=s,Et.H=l,Et.A=c,be===null&&(Ke=null,Ce=0,jl()),x}function IM(){for(;be!==null;)c_(be)}function zM(t,n){var a=Fe;Fe|=2;var s=l_(),l=u_();Ke!==t||Ce!==n?(Fu=null,zu=k()+500,Fr(t,n)):Nr=xi(t,n);t:do try{if(ke!==0&&be!==null){n=be;var c=fi;e:switch(ke){case 1:ke=0,fi=null,Br(t,n,c,1);break;case 2:case 9:if(f0(c)){ke=0,fi=null,f_(n);break}n=function(){ke!==2&&ke!==9||Ke!==t||(ke=7),ra(t)},c.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:f0(c)?(ke=0,fi=null,f_(n)):(ke=0,fi=null,Br(t,n,c,7));break;case 5:var x=null;switch(be.tag){case 26:x=be.memoizedState;case 5:case 27:var A=be;if(x?nv(x):A.stateNode.complete){ke=0,fi=null;var I=A.sibling;if(I!==null)be=I;else{var $=A.return;$!==null?(be=$,Vu($)):be=null}break e}}ke=0,fi=null,Br(t,n,c,5);break;case 6:ke=0,fi=null,Br(t,n,c,6);break;case 8:Ph(),sn=6;break t;default:throw Error(r(462))}}FM();break}catch(ct){r_(t,ct)}while(!0);return Ma=Ls=null,Et.H=s,Et.A=l,Fe=a,be!==null?0:(Ke=null,Ce=0,jl(),sn)}function FM(){for(;be!==null&&!Ht();)c_(be)}function c_(t){var n=Ag(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,n===null?Vu(t):be=n}function f_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:Xf(n);var s=n;s===yn&&(Me?(tu(s),s.tag===5&&s.stateNode!=null&&(Qe=s.stateNode)):(tu(s),Me=!0));default:Cg(a,n),n=be=t0(n,Ra),n=Ag(a,n,Ra)}t.memoizedProps=t.pendingProps,n===null?Vu(t):be=n}function Br(t,n,a,s){Ma=Ls=null,Xf(n),Tr=null,Xo=0;var l=n.return;try{if(bM(t,l,n,a,Ce)){sn=1,Su(t,yi(a,t.current)),be=null;return}}catch(c){if(l!==null)throw be=l,c;sn=1,Su(t,yi(a,t.current)),be=null;return}n.flags&32768?(Me||s===1?t=!0:Nr||(Ce&536870912)!==0?t=!1:(is=t=!0,(s===2||s===9||s===3||s===6)&&(s=Cn.current,s!==null&&s.tag===13&&(s.flags|=16384))),h_(n,t)):Vu(n)}function Vu(t){var n=t;do{if((n.flags&32768)!==0){h_(n,is);return}t=n.return;var a=wM(n.alternate,n,Ra);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);sn===0&&(sn=5)}function h_(t,n){do{var a=DM(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);sn=6,be=null}function d_(t,n,a,s,l,c,x,A,I,$,ct,xt){t.cancelPendingCommit=null;do Xu();while(nn!==0);if((Fe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ke&&(be=Ke=null,Ce=0),Ys=n,zi=t,sa=a,Oh=l,n_=s,BM(t,n,a,x,A,I,xt)}}function BM(t,n,a,s,l,c,x){var A=n.lanes|n.childLanes;if(Lh=A,A|=_f,Wc(t,a,A,s,l,c),Pr=null,(a&335544064)===a?(Ir=dM(t),s=10262):(Ir=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,qM(rt,function(){return Hh(),null})):(t.callbackNode=null,t.callbackPriority=0),Cu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null,l=Xt.p,Xt.p=2,c=Fe,Fe|=4;try{UM(t,n,a)}finally{Fe=c,Xt.p=l,Et.T=s}}nn=1,Cu?Or=fy(x,t.containerInfo,Ir,zh,Fh,GM,Bh,Hh,HM):(zh(),Fh(),Bh())}function HM(t){if(nn!==0){var n=zi.onRecoverableError;n(t,{componentStack:null})}}function GM(){nn===3&&(nn=0,Zg(Ys,zi),nn=4)}function zh(){if(nn===1){nn=0;var t=zi,n=Ys,a=sa,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null;var l=Xt.p;Xt.p=2;var c=Fe;Fe|=4;try{el=Uu=!1,Wg(n,t,a),a=Jh;var x=km(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(x!==A&&A&&A.ownerDocument&&Xm(A.ownerDocument.documentElement,A)){if(I!==null&&hf(A)){var $=I.start,ct=I.end;if(ct===void 0&&(ct=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ct,A.value.length);else{var xt=A.ownerDocument||document,Z=xt&&xt.defaultView||window;if(Z.getSelection){var ot=Z.getSelection(),Ot=A.textContent.length,Wt=Math.min(I.start,Ot),ve=I.end===void 0?Wt:Math.min(I.end,Ot);!ot.extend&&Wt>ve&&(x=ve,ve=Wt,Wt=x);var J=Vm(A,Wt),X=Vm(A,ve);if(J&&X&&(ot.rangeCount!==1||ot.anchorNode!==J.node||ot.anchorOffset!==J.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var st=xt.createRange();st.setStart(J.node,J.offset),ot.removeAllRanges(),Wt>ve?(ot.addRange(st),ot.extend(X.node,X.offset)):(st.setEnd(X.node,X.offset),ot.addRange(st))}}}}for(xt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&xt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Wr=!!Qh,Jh=Qh=null}finally{Fe=c,Xt.p=l,Et.T=s}}t.current=n,nn=2}}function Fh(){if(nn===2){nn=0;var t=zi,n=Ys,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var s=Xt.p;Xt.p=2;var l=Fe;Fe|=4;try{Gg(t,n.alternate,n)}finally{Fe=l,Xt.p=s,Et.T=a}}nn=3}}function Bh(){if(nn===4||nn===3){nn=0;var t=Or;Or=null,me();var n=zi,a=Ys,s=sa,l=n_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?nn=5:(nn=0,Ys=zi=null,p_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ss=null),R(s),a=a.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ae,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Et.T,c=Xt.p,Xt.p=2,Et.T=null;try{for(var x=n.onRecoverableError,A=0;A<l.length;A++){var I=l[A];x(I.value,{componentStack:I.stack})}}finally{Et.T=a,Xt.p=c}}if(l=Pr,x=Ir,Ir=null,l!==null&&(Pr=null,x===null&&(x=[]),t!==null))for(I=0;I<l.length;I++)a=(0,l[I])(x),a!==void 0&&t.finished.finally(a);(sa&3)!==0&&Xu(),ra(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Bu?sl++:(sl=0,Bu=n):(sl=0,Bu=null),rl(0)}}function p_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function Xu(){return Or!==null&&(Or.skipTransition(),Or=null),zh(),Fh(),Bh(),Hh()}function Hh(){if(nn!==5)return!1;var t=zi,n=Lh;Lh=0;var a=R(sa),s=Et.T,l=Xt.p;try{Xt.p=32>a?32:a,Et.T=null,a=Oh,Oh=null;var c=zi,x=sa;if(nn=0,Ys=zi=null,sa=0,(Fe&6)!==0)throw Error(r(331));var A=Fe;if(Fe|=4,$g(c.current),Kg(c,c.current,x,a),Fe=A,rl(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ae,c)}catch{}return!0}finally{Xt.p=l,Et.T=s,p_(t,n)}}function m_(t,n,a){n=yi(a,n),n=ih(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(As(t,2),ra(t))}function qe(t,n,a){if(t.tag===3)m_(t,t,a);else for(;n!==null;){if(n.tag===3){m_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ss===null||!ss.has(s))){t=yi(a,t),a=fg(2),s=Qa(n,a,2),s!==null&&(hg(a,s,n,t),As(s,2),ra(s));break}}n=n.return}}function Gh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new OM;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(Uh=!0,l.add(a),t=VM.bind(null,t,n,a),n.then(t,t))}function VM(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(Ce&a)===a&&((sn===4||sn===3&&(Ce&62914560)===Ce&&300>k()-Iu)&&(Fe&2)===0?Fr(t,0):Pu|=a,Lr===Ce&&(Lr=0)),ra(t)}function g_(t,n){n===0&&(n=Ro()),t=Ds(t,n),t!==null&&(As(t,n),ra(t))}function XM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),g_(t,a)}function kM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),g_(t,a)}function qM(t,n){return kt(t,n)}var Hr=null,Gr=null,Vh=!1,ku=!1,Xh=!1,os=0;function ra(t){t!==Gr&&t.next===null&&(Gr===null?Hr=Gr=t:Gr=Gr.next=t),ku=!0,Vh||(Vh=!0,WM())}function rl(t,n){if(!Xh&&ku){Xh=!0;do for(var a=!1,s=Hr;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var c=0;else{var x=s.suspendedLanes,A=s.pingedLanes;c=(1<<31-Sn(42|t)+1)-1,c&=l&~(x&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,S_(s,c))}else c=Ce,c=ji(s,s===Ke?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||xi(s,c)||(a=!0,S_(s,c));s=s.next}while(a);Xh=!1}}function YM(){__()}function __(){ku=Vh=!1;var t=0;os!==0&&ay()&&(t=os);for(var n=k(),a=null,s=Hr;s!==null;){var l=s.next,c=v_(s,n);c===0?(s.next=null,a===null?Hr=l:a.next=l,l===null&&(Gr=a)):(a=s,(t!==0||(c&3)!==0)&&(ku=!0)),s=l}nn!==0&&nn!==5||rl(t),os!==0&&(os=0)}function v_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var x=31-Sn(c),A=1<<x,I=l[x];I===-1?((A&a)===0||(A&s)!==0)&&(l[x]=Ha(A,n)):I<=n&&(t.expiredLanes|=A),c&=~A}if(n=Ke,a=Ce,a=ji(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Yt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||xi(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Yt(s),R(a)){case 2:case 8:a=K;break;case 32:a=rt;break;case 268435456:a=wt;break;default:a=rt}return s=x_.bind(null,t),a=kt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Yt(s),t.callbackPriority=2,t.callbackNode=null,2}function x_(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xu()&&t.callbackNode!==a)return null;var s=Ce;return s=ji(t,t===Ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(a_(t,s,n),v_(t,k()),t.callbackNode!=null&&t.callbackNode===a?x_.bind(null,t):null)}function S_(t,n){if(Xu())return null;a_(t,n,!0)}function WM(){ry(function(){(Fe&6)!==0?kt(Ct,YM):__()})}function kh(){if(os===0){var t=Is;t===0&&(t=Pn,Pn<<=1,(Pn&261888)===0&&(Pn=256)),os=t}return os}function M_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Hl(t)}function jM(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var c=M_((l[Nt]||null).action),x=s.submitter;x&&(n=(n=x[Nt]||null)?M_(n.formAction):x.getAttribute("formAction"),n!==null&&(c=n,x=null));var A=new kl("action","action",null,s,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(os!==0){var I=new FormData(l,x);Jf(a,{pending:!0,data:I,method:l.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(l,x),Jf(a,{pending:!0,data:I,method:l.method,action:c},c,I))},currentTarget:l}]})}}for(var qh=0;qh<gf.length;qh++){var Yh=gf[qh],ZM=Yh.toLowerCase(),KM=Yh[0].toUpperCase()+Yh.slice(1);Li(ZM,"on"+KM)}Li(Wm,"onAnimationEnd"),Li(jm,"onAnimationIteration"),Li(Zm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(sM,"onTransitionRun"),Li(rM,"onTransitionStart"),Li(oM,"onTransitionCancel"),Li(Km,"onTransitionEnd"),Qn("onMouseEnter",["mouseout","mouseover"]),Qn("onMouseLeave",["mouseout","mouseover"]),Qn("onPointerEnter",["pointerout","pointerover"]),Qn("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function y_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var x=s.length-1;0<=x;x--){var A=s[x],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=$;try{c(l)}catch(ct){Wl(ct)}l.currentTarget=null,c=I}else for(x=0;x<s.length;x++){if(A=s[x],I=A.instance,$=A.currentTarget,A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=$;try{c(l)}catch(ct){Wl(ct)}l.currentTarget=null,c=I}}}}function Ae(t,n){var a=n[zt];a===void 0&&(a=n[zt]=new Set);var s=t+"__bubble";a.has(s)||(E_(n,t,2,!1),a.add(s))}function Wh(t,n,a){var s=0;n&&(s|=4),E_(a,t,s,n)}var qu="_reactListening"+Math.random().toString(36).slice(2);function jh(t){if(!t[qu]){t[qu]=!0,Ue.forEach(function(a){a!=="selectionchange"&&(QM.has(a)||Wh(a,!1,t),Wh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[qu]||(n[qu]=!0,Wh("selectionchange",!1,n))}}function E_(t,n,a,s){switch(hv(n)){case 2:var l=Xy;break;case 8:l=ky;break;default:l=pd}a=l.bind(null,n,a,t),l=void 0,!ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Zh(t,n,a,s,l){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var A=s.stateNode.containerInfo;if(A===l)break;if(x===4)for(x=s.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===l)return;x=x.return}for(;A!==null;){if(x=Ve(A),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){s=c=x;continue t}A=A.parentNode}}s=s.return}Em(function(){var $=c,ct=$c(a),xt=[];t:{var Z=Qm.get(t);if(Z!==void 0){var ot=kl,Ot=t;switch(t){case"keypress":if(Vl(a)===0)break t;case"keydown":case"keyup":ot=PS;break;case"focusin":Ot="focus",ot=rf;break;case"focusout":Ot="blur",ot=rf;break;case"beforeblur":case"afterblur":ot=rf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=ES;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=HS;break;case Wm:case jm:case Zm:ot=AS;break;case Km:ot=VS;break;case"scroll":case"scrollend":ot=MS;break;case"wheel":ot=kS;break;case"copy":case"cut":case"paste":ot=CS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Cm;break;case"submit":ot=FS;break;case"toggle":case"beforetoggle":ot=YS}var Wt=(n&4)!==0,ve=!Wt&&(t==="scroll"||t==="scrollend"),J=Wt?Z!==null?Z+"Capture":null:Z;Wt=[];for(var X=$,st;X!==null;){var vt=X;if(st=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||st===null||J===null||(vt=wo(X,J),vt!=null&&Wt.push(ll(X,vt,st))),ve)break;X=X.return}0<Wt.length&&(Z=new ot(Z,Ot,null,a,ct),xt.push({event:Z,listeners:Wt}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",ot&&a!==Jc&&(Ot=a.relatedTarget||a.fromElement)&&(Ve(Ot)||Ot[Gt]))break t;(Z||ot)&&(Ot=ct.window===ct?ct:(ot=ct.ownerDocument)?ot.defaultView||ot.parentWindow:window,Z?(ot=a.relatedTarget||a.toElement,Z=$,ot=ot?Ve(ot):null,ot!==null&&(ve=f(ot),Wt=ot.tag,ot!==ve||Wt!==5&&Wt!==27&&Wt!==6)&&(ot=null)):(Z=null,ot=$),Z!==ot&&(Wt=Am,vt="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=Cm,vt="onPointerLeave",J="onPointerEnter",X="pointer"),ve=Z==null?Ot:Ne(Z),st=ot==null?Ot:Ne(ot),Ot=new Wt(vt,X+"leave",Z,a,ct),Ot.target=ve,Ot.relatedTarget=st,vt=null,Ve(ct)===$&&(Wt=new Wt(J,X+"enter",ot,a,ct),Wt.target=st,Wt.relatedTarget=ve,vt=Wt),ve=vt,Wt=Z&&ot?F(Z,ot,JM):null,Z!==null&&T_(xt,Ot,Z,Wt,!1),ot!==null&&ve!==null&&T_(xt,ve,ot,Wt,!0)))}t:{if(Z=$?Ne($):window,ot=Z.nodeName&&Z.nodeName.toLowerCase(),ot==="select"||ot==="input"&&Z.type==="file")var qt=Im;else if(Om(Z))if(zm)qt=nM;else{qt=tM;var we=$S}else ot=Z.nodeName,!ot||ot.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?$&&Qc($.elementType)&&(qt=Im):qt=eM;if(qt&&(qt=qt(t,$))){Pm(xt,qt,a,ct);break t}we&&we(t,Z,$)}switch(we=$?Ne($):window,t){case"focusin":(Om(we)||we.contentEditable==="true")&&(mr=we,df=$,zo=null);break;case"focusout":zo=df=mr=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,qm(xt,a,ct);break;case"selectionchange":if(aM)break;case"keydown":case"keyup":qm(xt,a,ct)}var ee;if(lf)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else pr?Nm(t,a)&&(re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(wm&&a.locale!=="ko"&&(pr||re!=="onCompositionStart"?re==="onCompositionEnd"&&pr&&(ee=Tm()):(Va=ct,nf="value"in Va?Va.value:Va.textContent,pr=!0)),we=Yu($,re),0<we.length&&(re=new Rm(re,t,null,a,ct),xt.push({event:re,listeners:we}),ee?re.data=ee:(ee=Lm(a),ee!==null&&(re.data=ee)))),(ee=jS?ZS(t,a):KS(t,a))&&(re=Yu($,"onBeforeInput"),0<re.length&&(we=new Rm("onBeforeInput","beforeinput",null,a,ct),xt.push({event:we,listeners:re}),we.data=ee)),jM(xt,t,$,a,ct)}y_(xt,n)})}function ll(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yu(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=wo(t,a),l!=null&&s.unshift(ll(t,l,c)),l=wo(t,n),l!=null&&s.push(ll(t,l,c))),t.tag===3)return s;t=t.return}return[]}function JM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T_(t,n,a,s,l){for(var c=n._reactName,x=[];a!==null&&a!==s;){var A=a,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===s)break;A!==5&&A!==26&&A!==27||$===null||(I=$,l?($=wo(a,c),$!=null&&x.unshift(ll(a,$,I))):l||($=wo(a,c),$!=null&&x.push(ll(a,$,I)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var $M=/\r\n?/g,ty=/\u0000|\uFFFD/g;function b_(t){return(typeof t=="string"?t:""+t).replace($M,`
`).replace(ty,"")}function A_(t,n){return n=b_(n),b_(t)===n}function Ye(t,n,a,s,l,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||fr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&fr(t,""+s);else return;break;case"className":Rs(t,"class",s);break;case"tabIndex":Rs(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Rs(t,a,s);break;case"style":Mm(t,s,c);return;case"data":if(n!=="object"){Rs(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Hl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",l.name,l,null),Ye(t,n,"formEncType",l.formEncType,l,null),Ye(t,n,"formMethod",l.formMethod,l,null),Ye(t,n,"formTarget",l.formTarget,l,null)):(Ye(t,n,"encType",l.encType,l,null),Ye(t,n,"method",l.method,l,null),Ye(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Hl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ki);return;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Hl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),Ni(t,"popover",s);break;case"xlinkActuate":ma(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ma(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ma(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ma(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ma(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ma(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ma(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ma(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ma(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ni(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=xS.get(a)||a,Ni(t,a,s);else return}se=!0}function Kh(t,n,a,s,l,c){switch(a){case"style":Mm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")fr(t,s);else if(typeof s=="number"||typeof s=="bigint")fr(t,""+s);else return;break;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Kn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Nt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,l);break t}se=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ni(t,a,s)}return}se=!0}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var s=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var x=a[c];if(x!=null)switch(c){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,c,x,a,null)}}l&&Ye(t,n,"srcSet",a.srcSet,a,null),s&&Ye(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var A=c=x=l=null,I=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":l=ct;break;case"type":x=ct;break;case"checked":I=ct;break;case"defaultChecked":$=ct;break;case"value":c=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ye(t,n,s,ct,a,null)}}_m(t,c,A,I,$,x,l,!1);return;case"select":Ae("invalid",t),s=x=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":x=A;break;case"multiple":s=A;default:Ye(t,n,l,A,a,null)}n=c,a=x,t.multiple=!!s,n!=null?cr(t,!!s,n,!1):a!=null&&cr(t,!!s,a,!0);return;case"textarea":Ae("invalid",t),c=l=s=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":s=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ye(t,n,x,A,a,null)}xm(t,s,l,c);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ye(t,n,I,s,a,null));return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(s=0;s<ol.length;s++)Ae(ol[s],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,$,s,a,null)}return;default:if(Qc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&Kh(t,n,ct,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ye(t,n,A,s,a,null))}var ey={};function ny(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,x=null,A=null,I=null,$=null,ct=null;for(ot in a){var xt=a[ot];if(a.hasOwnProperty(ot)&&xt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=xt;default:s.hasOwnProperty(ot)||Ye(t,n,ot,null,s,xt)}}for(var Z in s){var ot=s[Z];if(xt=a[Z],s.hasOwnProperty(Z)&&(ot!=null||xt!=null))switch(Z){case"type":ot!==xt&&(se=!0),c=ot;break;case"name":ot!==xt&&(se=!0),l=ot;break;case"checked":ot!==xt&&(se=!0),$=ot;break;case"defaultChecked":ot!==xt&&(se=!0),ct=ot;break;case"value":ot!==xt&&(se=!0),x=ot;break;case"defaultValue":ot!==xt&&(se=!0),A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==xt&&Ye(t,n,Z,ot,s,xt)}}Zc(t,x,A,I,$,ct,c,l);return;case"select":ot=x=A=Z=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":ot=I;default:s.hasOwnProperty(c)||Ye(t,n,c,null,s,I)}for(l in s)if(c=s[l],I=a[l],s.hasOwnProperty(l)&&(c!=null||I!=null))switch(l){case"value":c!==I&&(se=!0),Z=c;break;case"defaultValue":c!==I&&(se=!0),A=c;break;case"multiple":c!==I&&(se=!0),x=c;default:c!==I&&Ye(t,n,l,c,s,I)}n=A,a=x,s=ot,Z!=null?cr(t,!!a,Z,!1):!!s!=!!a&&(n!=null?cr(t,!!a,n,!0):cr(t,!!a,a?[]:"",!1));return;case"textarea":ot=Z=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ye(t,n,A,null,s,l)}for(x in s)if(l=s[x],c=a[x],s.hasOwnProperty(x)&&(l!=null||c!=null))switch(x){case"value":l!==c&&(se=!0),Z=l;break;case"defaultValue":l!==c&&(se=!0),ot=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&Ye(t,n,x,l,s,c)}vm(t,Z,ot);return;case"option":for(var Ot in a)Z=a[Ot],a.hasOwnProperty(Ot)&&Z!=null&&!s.hasOwnProperty(Ot)&&(Ot==="selected"?t.selected=!1:Ye(t,n,Ot,null,s,Z));for(I in s)Z=s[I],ot=a[I],s.hasOwnProperty(I)&&Z!==ot&&(Z!=null||ot!=null)&&(I==="selected"?(Z!==ot&&(se=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol"):Ye(t,n,I,Z,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)Z=a[Wt],a.hasOwnProperty(Wt)&&Z!=null&&!s.hasOwnProperty(Wt)&&Ye(t,n,Wt,null,s,Z);for($ in s)if(Z=s[$],ot=a[$],s.hasOwnProperty($)&&Z!==ot&&(Z!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,n));break;default:Ye(t,n,$,Z,s,ot)}return;default:if(Qc(n)){for(var ve in a)Z=a[ve],a.hasOwnProperty(ve)&&Z!==void 0&&!s.hasOwnProperty(ve)&&Kh(t,n,ve,void 0,s,Z);for(ct in s)Z=s[ct],ot=a[ct],!s.hasOwnProperty(ct)||Z===ot||Z===void 0&&ot===void 0||Kh(t,n,ct,Z,s,ot);return}}for(var J in a)Z=a[J],a.hasOwnProperty(J)&&Z!=null&&!s.hasOwnProperty(J)&&Ye(t,n,J,null,s,Z);for(xt in s)Z=s[xt],ot=a[xt],!s.hasOwnProperty(xt)||Z===ot||Z==null&&ot==null||Ye(t,n,xt,Z,s,ot)}function R_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],c=l.transferSize,x=l.initiatorType,A=l.duration;if(c&&A&&R_(x)){for(x=0,A=l.responseEnd,s+=1;s<a.length;s++){var I=a[s],$=I.startTime;if($>A)break;var ct=I.transferSize,xt=I.initiatorType;ct&&R_(xt)&&(I=I.responseEnd,x+=ct*(I<A?1:(A-$)/(I-$)))}if(--s,n+=8*(c+x)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qh=null,Jh=null;function ul(t){return t.nodeType===9?t:t.ownerDocument}function C_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function D_(t,n,a,s){return a=ul(a).createElement(t),a[nt]=s,a[Nt]=n,Un(a,t,n),Pt(a),a}function $h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function ay(){var t=window.event;return t&&t.type==="popstate"?t===td?!1:(td=t,!0):(td=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,U_=typeof Promise=="function"?Promise:void 0,N_=typeof requestAnimationFrame=="function"?requestAnimationFrame:ed,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof U_<"u"?function(t){return U_.resolve(null).then(t).catch(oy)}:ed;function oy(t){setTimeout(function(){throw t})}function ls(t){return t==="head"}function L_(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),jr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ud(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ud(a);for(var c=a.firstChild;c;){var x=c.nextSibling,A=c.nodeName;c[pe]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=x}}else a==="body"&&ud(t.ownerDocument.body);a=l}while(a);jr(n)}function O_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function P_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function I_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ly(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function nd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return ly(n,a,t)}function uy(t){return t.documentElement.clientHeight}function cy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function fy(t,n,a,s,l,c,x,A,I){var $=n.nodeType===9?n:n.ownerDocument;try{var ct=$.startViewTransition({update:function(){var Z=$.defaultView,ot=Z.navigation&&Z.navigation.transition,Ot=$.fonts.status;s();var Wt=[];if(Ot==="loaded"&&(uy($),$.fonts.status==="loading"&&Wt.push($.fonts.ready)),Ot=Wt.length,t!==null)for(var ve=t.suspenseyImages,J=0,X=0;X<ve.length;X++){var st=ve[X];if(!st.complete){var vt=st.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<Z.innerHeight&&vt.left<Z.innerWidth){if(J+=iv(st),J>Zu){Wt.length=Ot;break}st=new Promise(cy.bind(st)),Wt.push(st)}}}if(0<Wt.length)return Z=Promise.race([Promise.all(Wt),new Promise(function(qt){return setTimeout(qt,500)})]).then(l,l),(ot?Promise.allSettled([ot.finished,Z]):Z).then(c,c);if(l(),ot)return ot.finished.then(c,c);c()},types:a});$.__reactViewTransition=ct;var xt=[];return ct.ready.then(function(){for(var Z=$.documentElement.getAnimations({subtree:!0}),ot=0;ot<Z.length;ot++){var Ot=Z[ot],Wt=Ot.effect,ve=Wt.pseudoElement;if(ve!=null&&ve.startsWith("::view-transition")){xt.push(Ot),Ot=Wt.getKeyframes();for(var J=ve=void 0,X=!0,st=0;st<Ot.length;st++){var vt=Ot[st],qt=vt.width;if(ve===void 0)ve=qt;else if(ve!==qt){X=!1;break}if(qt=vt.height,J===void 0)J=qt;else if(J!==qt){X=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}X&&ve!==void 0&&J!==void 0&&(Wt.setKeyframes(Ot),X=getComputedStyle(Wt.target,Wt.pseudoElement),X.width!==ve||X.height!==J)&&(X=Ot[0],X.width=ve,X.height=J,X=Ot[Ot.length-1],X.width=ve,X.height=J,Wt.setKeyframes(Ot))}}x()},function(Z){$.__reactViewTransition===ct&&($.__reactViewTransition=null);try{typeof Z=="object"&&Z!==null&&Z.name==="InvalidStateError"&&(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null),Z!==null&&I(Z)}finally{s(),l(),x()}}),ct.finished.finally(function(){for(var Z=0;Z<xt.length;Z++)xt[Z].cancel();$.__reactViewTransition===ct&&($.__reactViewTransition=null),A()}),ct}catch{return s(),l(),x(),null}}function Ws(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ws.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ws.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[l])}return s},Ws.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function z_(t){return{name:t,group:new Ws("group",t),imagePair:new Ws("image-pair",t),old:new Ws("old",t),new:new Ws("new",t)}}function pi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(B_(c,t,n,a)===-1){var x=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){x.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(l=x.removeEventListener.bind(x,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Vr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),g(this._fragmentFiber.child,!1,hy,t,A,s)}this._eventListeners=c}};function hy(t,n,a,s){return M(t).addEventListener(n,a,s),!1}pi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=B_(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var c=l.cleanup;l=Vr(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,dy,t,a,l),s.splice(n,1),c!==null&&c()}};function dy(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Vr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function F_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function B_(t,n,a,s){if(t.length===0)return-1;s=F_(s);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&F_(c.optionsOrUseCapture)===s)return l}return-1}pi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];s.addEventListener(c.type,c.attachedListener,Vr(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],s.removeEventListener(c.type,c.attachedListener,Vr(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},pi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,H_,t,void 0,void 0)};function H_(t,n){return t.tag===6?!1:(t=M(t),by(t,n))}pi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,id,n,void 0,void 0);for(var a=n.length-1;0<=a&&!H_(n[a],t);a--);};function id(t,n){return n.push(t),!1}pi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=ul(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,py,t,void 0,void 0))};function py(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,my,t,void 0,void 0)};function my(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}pi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,gy,t,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var s=Fi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Fi[n++]=s}Fi.length=n}};function gy(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Fi=[],ad=!1;function _y(t,n,a){Fi.push({fragmentInstance:t,observer:n,instance:a}),ad||(ad=!0,Ay(function(){ad=!1;var s=Fi;Fi=[];for(var l=0;l<s.length;l++){var c=s[l];c.observer.unobserve(c.instance)}}))}pi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,vy,t,void 0,void 0),t};function vy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}pi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},pi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,id,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var c=y(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),I=x&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&c&&x&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&l===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||xy(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function xy(t,n,a,s,l){var c=Ve(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=v(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=F(a,c,H),n===null?n=!1:(g(n,!0,L,c,a),c=S,S=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=F(s,c,H),n===null?n=!1:(g(n,!0,U,c,s),c=S,w=S=null,n=c!==null)),n):!1}function G_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,id,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),G_(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=M(l),G_(l,a)):M(l).scrollIntoView(t),s+=a?-1:1}};function Sy(t,n){return t=M(t),V_(t,n),!1}function V_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function X_(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Vr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var x=0,A=0;A<Fi.length;A++){var I=Fi[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Fi[x++]=I)}Fi.length=x,c.observe(t)}),V_(t,n))}function My(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Vr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?_y(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),Pe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yy(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[pe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function Ey(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function k_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ty(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function q_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Y_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function by(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function Ay(t){N_(function(){N_(function(n){return t(n)})})}function W_(t,n,a){switch(n=ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function j_(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Ye(t,n,s,null,ey,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ki&&(t.onclick=null),Pe(t)}function ud(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pe(t)}var Ci=new Map,Z_=new Set;function cl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ca=Xt.d;Xt.d={f:Ry,r:Cy,D:wy,C:Dy,L:Uy,m:Ny,X:Oy,S:Ly,M:Py};function Ry(){var t=Ca.f(),n=Hu();return t||n}function Cy(t){var n=Xe(t);n!==null&&n.tag===5&&n.type==="form"?Q0(n):Ca.r(t)}var Xr=typeof document>"u"?null:document;function K_(t,n,a){var s=Xr;if(s&&typeof n=="string"&&n){var l=Si(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Z_.has(l)||(Z_.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Un(n,"link",t),Pt(n),s.head.appendChild(n)))}}function wy(t){Ca.D(t),K_("dns-prefetch",t,null)}function Dy(t,n){Ca.C(t,n),K_("preconnect",t,n)}function Uy(t,n,a){Ca.L(t,n,a);var s=Xr;if(s&&t&&n){var l='link[rel="preload"][as="'+Si(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Si(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Si(a.imageSizes)+'"]')):l+='[href="'+Si(t)+'"]';var c=l;switch(n){case"style":c=kr(t);break;case"script":c=qr(t)}if(!(Ci.has(c)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(c,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(fl(c))||n==="script"&&s.querySelector(hl(c))))){var x=s.createElement("link");Un(x,"link",t),n==="style"&&(x[Qt]=!0,x.onload=x.onerror=function(){In(x)}),Pt(x),s.head.appendChild(x)}}}function Ny(t,n){Ca.m(t,n);var a=Xr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Si(s)+'"][href="'+Si(t)+'"]',c=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=qr(t)}if(!Ci.has(c)&&(t=P({rel:"modulepreload",href:t},n),Ci.set(c,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(c)))return}s=a.createElement("link"),Un(s,"link",t),Pt(s),a.head.appendChild(s)}}}function Ly(t,n,a){Ca.S(t,n,a);var s=Xr;if(s&&t){var l=en(s).hoistableStyles,c=kr(t);n=n||"default";var x=l.get(c);if(!x){var A={loading:0,preload:null};if(x=s.querySelector(fl(c)))A.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(c))&&cd(t,a);var I=x=s.createElement("link");Pt(I),Un(I,"link",t),I._p=new Promise(function($,ct){I.onload=$,I.onerror=ct}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Wu(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:A},l.set(c,x)}}}function Oy(t,n){Ca.X(t,n);var a=Xr;if(a&&t){var s=en(a).hoistableScripts,l=qr(t),c=s.get(l);c||(c=a.querySelector(hl(l)),c||(t=P({src:t,async:!0},n),(n=Ci.get(l))&&fd(t,n),c=a.createElement("script"),Pt(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function Py(t,n){Ca.M(t,n);var a=Xr;if(a&&t){var s=en(a).hoistableScripts,l=qr(t),c=s.get(l);c||(c=a.querySelector(hl(l)),c||(t=P({src:t,async:!0,type:"module"},n),(n=Ci.get(l))&&fd(t,n),c=a.createElement("script"),Pt(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function Q_(t,n,a,s){var l=(l=ge.current)?cl(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=kr(a.href),n=en(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=kr(a.href);var c=en(l).hoistableStyles,x=c.get(t);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,x),(c=l.querySelector(fl(t)))?c._p||(x.instance=c,x.state.loading=5):(c=Ci.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,c)),Iy(l,t,c,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=qr(a),n=en(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function kr(t){return'href="'+Si(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function J_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Qt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Qt]=!0,n.onload=n.onerror=In.bind(null,n),Un(n,"link",a),Pt(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function qr(t){return'[src="'+Si(t)+'"]'}function hl(t){return"script[async]"+t}function $_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Si(a.href)+'"]');if(s)return n.instance=s,Pt(s),s;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Pt(s),Un(s,"style",l),Wu(s,a.precedence,t),n.instance=s;case"stylesheet":l=kr(a.href);var c=t.querySelector(fl(l));if(c)return n.state.loading|=4,n.instance=c,Pt(c),c;s=J_(a),(l=Ci.get(l))&&cd(s,l),c=(t.ownerDocument||t).createElement("link"),Pt(c);var x=c;return x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),Un(c,"link",s),n.state.loading|=4,Wu(c,a.precedence,t),n.instance=c;case"script":return c=qr(a.src),(l=t.querySelector(hl(c)))?(n.instance=l,Pt(l),l):(s=a,(l=Ci.get(c))&&(s=P({},a),fd(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),Pt(l),Un(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Wu(s,a.precedence,t));return n.instance}function Wu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,c=l,x=0;x<s.length;x++){var A=s[x];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ju=null;function tv(t,n,a){if(ju===null){var s=new Map,l=ju=new Map;l.set(a,s)}else l=ju,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[pe]||c[nt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var x=c.getAttribute(n)||"";x=t+x;var A=s.get(x);A?A.push(c):s.set(x,[c])}}return s}function hd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function zy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ev(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function nv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function iv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function av(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=iv(n),t.suspenseyImages.push(n)),t=Hy.bind(t),n.decode().then(t,t))}function Fy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=kr(s.href),c=n.querySelector(fl(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Pt(c);return}c=n.ownerDocument||n,s=J_(s),(l=Ci.get(l))&&cd(s,l),c=c.createElement("link"),Pt(c);var x=c;x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),Un(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=dl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zu=0;function By(t,n){return t.stylesheets&&t.count===0&&Qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Zu===0&&(Zu=62500*iy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Zu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function sv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Qu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function dl(){this.count--,sv(this)}function Hy(){this.imgCount--,sv(this)}var Ku=null;function Qu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ku=new Map,n.forEach(Gy,t),Ku=null,dl.call(t))}function Gy(t,n){if(!(n.state.loading&4)){var a=Ku.get(t);if(a)var s=a.get(null);else{a=new Map,Ku.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var x=l[c];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}l=n.instance,x=l.getAttribute("data-precedence"),c=a.get(x)||s,c===s&&a.set(null,l),a.set(x,l),this.count++,s=dl.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Yr={$$typeof:Y,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Vy(t,n,a,s,l,c,x,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ur(0),this.hiddenUpdates=ur(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function rv(t,n,a,s,l,c,x,A,I,$,ct,xt){return t=new Vy(t,n,a,x,I,$,ct,xt,A),n=1,c===!0&&(n|=24),c=Jn(3,null,null,n),t.current=c,c.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},Uf(c),t}function ov(t){return t?(t=vr,t):vr}function lv(t,n,a,s,l,c){l=ov(l),s.context===null?s.context=l:s.pendingContext=l,s=Ka(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Qa(t,s,n),a!==null&&(ni(a,t,n),ko(a,t,n))}function uv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){uv(t,n),(t=t.alternate)&&uv(t,n)}function cv(t){if(t.tag===13||t.tag===31){var n=Ds(t,67108864);n!==null&&ni(n,t,67108864),dd(t,67108864)}}function fv(t){if(t.tag===13||t.tag===31){var n=di();n=Co(n);var a=Ds(t,n);a!==null&&ni(a,t,n),dd(t,n)}}var Wr=!0;function Xy(t,n,a,s){var l=Et.T;Et.T=null;var c=Xt.p;try{Xt.p=2,pd(t,n,a,s)}finally{Xt.p=c,Et.T=l}}function ky(t,n,a,s){var l=Et.T;Et.T=null;var c=Xt.p;try{Xt.p=8,pd(t,n,a,s)}finally{Xt.p=c,Et.T=l}}function pd(t,n,a,s){if(Wr){var l=md(s);if(l===null)Zh(t,n,s,Ju,a),dv(t,s);else if(Yy(l,t,n,a,s))s.stopPropagation();else if(dv(t,s),n&4&&-1<qy.indexOf(t)){for(;l!==null;){var c=Xe(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var x=Vn(c.pendingLanes);if(x!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var I=1<<31-Sn(x);A.entanglements[1]|=I,x&=~I}ra(c),(Fe&6)===0&&(zu=k()+500,rl(0))}}break;case 31:case 13:A=Ds(c,2),A!==null&&ni(A,c,2),Hu(),dd(c,2)}if(c=md(s),c===null&&Zh(t,n,s,Ju,a),c===l)break;l=c}l!==null&&s.stopPropagation()}else Zh(t,n,s,null,a)}}function md(t){return t=$c(t),gd(t)}var Ju=null;function gd(t){if(Ju=null,t=Ve(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ju=t,null}function hv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case Ct:return 2;case K:return 8;case rt:case at:return 32;case wt:return 268435456;default:return 32}default:return 32}}var _d=!1,us=null,cs=null,fs=null,pl=new Map,ml=new Map,hs=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dv(t,n){switch(t){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(t,n,a,s,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},n!==null&&(n=Xe(n),n!==null&&cv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function Yy(t,n,a,s,l){switch(n){case"focusin":return us=gl(us,t,n,a,s,l),!0;case"dragenter":return cs=gl(cs,t,n,a,s,l),!0;case"mouseover":return fs=gl(fs,t,n,a,s,l),!0;case"pointerover":var c=l.pointerId;return pl.set(c,gl(pl.get(c)||null,t,n,a,s,l)),!0;case"gotpointercapture":return c=l.pointerId,ml.set(c,gl(ml.get(c)||null,t,n,a,s,l)),!0}return!1}function pv(t){var n=Ve(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ht(t.priority,function(){fv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ht(t.priority,function(){fv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Jc=s,a.target.dispatchEvent(s),Jc=null}else return n=Xe(a),n!==null&&cv(n),t.blockedOn=a,!1;n.shift()}return!0}function mv(t,n,a){$u(t)&&a.delete(n)}function Wy(){_d=!1,us!==null&&$u(us)&&(us=null),cs!==null&&$u(cs)&&(cs=null),fs!==null&&$u(fs)&&(fs=null),pl.forEach(mv),ml.forEach(mv)}function tc(t,n){t.blockedOn===n&&(t.blockedOn=null,_d||(_d=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wy)))}var ec=null;function gv(t){ec!==t&&(ec=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===t&&(ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(gd(s||a)===null)continue;break}var c=Xe(a);c!==null&&(t.splice(n,3),n-=3,Jf(c,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function jr(t){function n(I){return tc(I,t)}us!==null&&tc(us,t),cs!==null&&tc(cs,t),fs!==null&&tc(fs,t),pl.forEach(n),ml.forEach(n);for(var a=0;a<hs.length;a++){var s=hs[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<hs.length&&(a=hs[0],a.blockedOn===null);)pv(a),a.blockedOn===null&&hs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],c=a[s+1],x=l[Nt]||null;if(typeof c=="function")x||gv(a);else if(x){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,x=c[Nt]||null)A=x.formAction;else if(gd(l)!==null)continue}else A=x.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),gv(a)}}}function _v(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(x){return l=x})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function vd(t){this._internalRoot=t}nc.prototype.render=vd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=di();lv(a,s,t,n,null,null)},nc.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;lv(t.current,2,null,t,null,null),Hu(),n[Gt]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var n=tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<hs.length&&n!==0&&n<hs[a].priority;a++);hs.splice(a,0,t),a===0&&pv(t)}};var vv=e.version;if(vv!=="19.3.1")throw Error(r(527,vv,"19.3.1"));Xt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var jy={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ae=ic.inject(jy),Be=ic}catch{}}return vl.createRoot=function(t,n){if(!u(t))throw Error(r(299));var a=!1,s="",l=og,c=lg,x=ug;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=rv(t,1,!1,null,null,a,s,null,l,c,x,_v),t[Gt]=n.current,jh(t),new vd(n)},vl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(r(299));var s=!1,l="",c=og,x=lg,A=ug,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=rv(t,1,!0,n,a??null,s,l,I,c,x,A,_v),n.context=ov(null),a=n.current,s=di(),s=Co(s),l=Ka(s),l.callback=null,Qa(a,l,s),a=s,n.current.lanes=a,As(n,a),ra(n),t[Gt]=n.current,jh(t),new nc(n)},vl.version="19.3.1",vl}var Cv;function rE(){if(Cv)return Md.exports;Cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Md.exports=sE(),Md.exports}var oE=rE();const Zp="183",lE=0,wv=1,uE=2,Dc=1,Lx=2,Rl=3,Es=0,Zn=1,Pa=2,za=0,po=1,Dv=2,Uv=3,Nv=4,cE=5,er=100,fE=101,hE=102,dE=103,pE=104,mE=200,gE=201,_E=202,vE=203,ip=204,ap=205,xE=206,SE=207,ME=208,yE=209,EE=210,TE=211,bE=212,AE=213,RE=214,sp=0,rp=1,op=2,go=3,lp=4,up=5,cp=6,fp=7,Kp=0,CE=1,wE=2,fa=0,Ox=1,Px=2,Ix=3,Qp=4,zx=5,Fx=6,Bx=7,Hx=300,ar=301,_o=302,bd=303,Ad=304,Xc=306,Ic=1e3,Xi=1001,hp=1002,On=1003,DE=1004,ac=1005,un=1006,Rd=1007,Ms=1008,_i=1009,Gx=1010,Vx=1011,Ll=1012,Jp=1013,da=1014,ai=1015,vi=1016,$p=1017,tm=1018,Ol=1020,Xx=35902,kx=35899,qx=1021,Yx=1022,ki=1023,Ba=1026,ir=1027,em=1028,nm=1029,vo=1030,im=1031,am=1033,Uc=33776,Nc=33777,Lc=33778,Oc=33779,dp=35840,pp=35841,mp=35842,gp=35843,_p=36196,vp=37492,xp=37496,Sp=37488,Mp=37489,yp=37490,Ep=37491,Tp=37808,bp=37809,Ap=37810,Rp=37811,Cp=37812,wp=37813,Dp=37814,Up=37815,Np=37816,Lp=37817,Op=37818,Pp=37819,Ip=37820,zp=37821,Fp=36492,Bp=36494,Hp=36495,Gp=36283,Vp=36284,Xp=36285,kp=36286,UE=3200,sm=0,NE=1,Ss="",Di="srgb",sr="srgb-linear",zc="linear",We="srgb",Zr=7680,Lv=519,LE=512,OE=513,PE=514,rm=515,IE=516,zE=517,om=518,FE=519,Ov=35044,Pv="300 es",ca=2e3,Pl=2001;function BE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function HE(){const o=Fc("canvas");return o.style.display="block",o}const Iv={};function zv(...o){const e="THREE."+o.shift();console.log(e,...o)}function Wx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ce(...o){o=Wx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function ze(...o){o=Wx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Bc(...o){const e=o.join(" ");e in Iv||(Iv[e]=!0,ce(...o))}function GE(o,e,i){return new Promise(function(r,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const VE={[sp]:rp,[op]:cp,[lp]:fp,[go]:up,[rp]:sp,[cp]:op,[fp]:lp,[up]:go};class Mo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const u=r[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const u=r.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fv=1234567;const Dl=Math.PI/180,xo=180/Math.PI;function yo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function lm(o,e){return(o%e+e)%e}function XE(o,e,i,r,u){return r+(o-e)*(u-r)/(i-e)}function kE(o,e,i){return o!==e?(i-o)/(e-o):0}function Ul(o,e,i){return(1-i)*o+i*e}function qE(o,e,i,r){return Ul(o,e,1-Math.exp(-i*r))}function YE(o,e=1){return e-Math.abs(lm(o,e*2)-e)}function WE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function jE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function ZE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function KE(o,e){return o+Math.random()*(e-o)}function QE(o){return o*(.5-Math.random())}function JE(o){o!==void 0&&(Fv=o);let e=Fv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $E(o){return o*Dl}function t1(o){return o*xo}function e1(o){return(o&o-1)===0&&o!==0}function n1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function i1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function a1(o,e,i,r,u){const f=Math.cos,h=Math.sin,d=f(i/2),m=h(i/2),p=f((e+r)/2),_=h((e+r)/2),g=f((e-r)/2),v=h((e-r)/2),y=f((r-e)/2),b=h((r-e)/2);switch(u){case"XYX":o.set(d*_,m*g,m*v,d*p);break;case"YZY":o.set(m*v,d*_,m*g,d*p);break;case"ZXZ":o.set(m*g,m*v,d*_,d*p);break;case"XZX":o.set(d*_,m*b,m*y,d*p);break;case"YXY":o.set(m*y,d*_,m*b,d*p);break;case"ZYZ":o.set(m*b,m*y,d*_,d*p);break;default:ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function ho(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Kr={DEG2RAD:Dl,RAD2DEG:xo,generateUUID:yo,clamp:Ee,euclideanModulo:lm,mapLinear:XE,inverseLerp:kE,lerp:Ul,damp:qE,pingpong:YE,smoothstep:WE,smootherstep:jE,randInt:ZE,randFloat:KE,randFloatSpread:QE,seededRandom:JE,degToRad:$E,radToDeg:t1,isPowerOfTwo:e1,ceilPowerOfTwo:n1,floorPowerOfTwo:i1,setQuaternionFromProperEuler:a1,normalize:Wn,denormalize:ho};class Oe{constructor(e=0,i=0){Oe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6],this.y=u[1]*i+u[4]*r+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),u=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*u+e.x,this.y=f*u+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Eo{constructor(e=0,i=0,r=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=u}static slerpFlat(e,i,r,u,f,h,d){let m=r[u+0],p=r[u+1],_=r[u+2],g=r[u+3],v=f[h+0],y=f[h+1],b=f[h+2],D=f[h+3];if(g!==D||m!==v||p!==y||_!==b){let M=m*v+p*y+_*b+g*D;M<0&&(v=-v,y=-y,b=-b,D=-D,M=-M);let S=1-d;if(M<.9995){const w=Math.acos(M),L=Math.sin(w);S=Math.sin(S*w)/L,d=Math.sin(d*w)/L,m=m*S+v*d,p=p*S+y*d,_=_*S+b*d,g=g*S+D*d}else{m=m*S+v*d,p=p*S+y*d,_=_*S+b*d,g=g*S+D*d;const w=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=w,p*=w,_*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,u,f,h){const d=r[u],m=r[u+1],p=r[u+2],_=r[u+3],g=f[h],v=f[h+1],y=f[h+2],b=f[h+3];return e[i]=d*b+_*g+m*y-p*v,e[i+1]=m*b+_*v+p*g-d*y,e[i+2]=p*b+_*y+d*v-m*g,e[i+3]=_*b-d*g-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,u){return this._x=e,this._y=i,this._z=r,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(u/2),g=d(f/2),v=m(r/2),y=m(u/2),b=m(f/2);switch(h){case"XYZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"YZX":this._x=v*_*g+p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g-v*y*b;break;case"XZY":this._x=v*_*g-p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g+v*y*b;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,u=Math.sin(r);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],u=i[4],f=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],v=r+d+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(f-p)*y,this._z=(h-u)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(u+h)/y,this._z=(f+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(f-p)/y,this._x=(u+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(h-u)/y,this._x=(f+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const u=Math.min(1,i/r);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,u=e._y,f=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+u*p-f*m,this._y=u*_+h*m+f*d-r*p,this._z=f*_+h*p+r*m-u*d,this._w=h*_-r*d-u*m-f*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,u=e._y,f=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,u=-u,f=-f,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),u=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(e=0,i=0,r=0){ut.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Bv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Bv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*u,this.y=f[1]*i+f[4]*r+f[7]*u,this.z=f[2]*i+f[5]*r+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*u+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*u+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*u+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,u=this.z,f=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*u-d*r),_=2*(d*i-f*u),g=2*(f*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-f*g,this.z=u+m*g+f*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*u,this.y=f[1]*i+f[5]*r+f[9]*u,this.z=f[2]*i+f[6]*r+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,u=e.y,f=e.z,h=i.x,d=i.y,m=i.z;return this.x=u*m-f*d,this.y=f*h-r*m,this.z=r*d-u*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,u=this.z-e.z;return i*i+r*r+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const u=Math.sin(i)*e;return this.x=u*Math.sin(r),this.y=Math.cos(i)*e,this.z=u*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new ut,Bv=new Eo;class xe{constructor(e,i,r,u,f,h,d,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,m,p)}set(e,i,r,u,f,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=u,_[2]=d,_[3]=i,_[4]=f,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],v=r[2],y=r[5],b=r[8],D=u[0],M=u[3],S=u[6],w=u[1],L=u[4],U=u[7],H=u[2],F=u[5],P=u[8];return f[0]=h*D+d*w+m*H,f[3]=h*M+d*L+m*F,f[6]=h*S+d*U+m*P,f[1]=p*D+_*w+g*H,f[4]=p*M+_*L+g*F,f[7]=p*S+_*U+g*P,f[2]=v*D+y*w+b*H,f[5]=v*M+y*L+b*F,f[8]=v*S+y*U+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*f*_+r*d*m+u*f*p-u*h*m}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,v=d*m-_*f,y=p*f-h*m,b=i*g+r*v+u*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=g*D,e[1]=(u*p-_*r)*D,e[2]=(d*r-u*h)*D,e[3]=v*D,e[4]=(_*i-u*m)*D,e[5]=(u*f-d*i)*D,e[6]=y*D,e[7]=(r*m-p*i)*D,e[8]=(h*i-r*f)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,u,f,h,d){const m=Math.cos(f),p=Math.sin(f);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-u*p,u*m,-u*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(wd.makeScale(e,i)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<9;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new xe,Hv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s1(){const o={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===We&&(u.r=Fa(u.r),u.g=Fa(u.g),u.b=Fa(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===We&&(u.r=mo(u.r),u.g=mo(u.g),u.b=mo(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===Ss?zc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return Bc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return Bc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[sr]:{primaries:e,whitePoint:r,transfer:zc,toXYZ:Hv,fromXYZ:Gv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:r,transfer:We,toXYZ:Hv,fromXYZ:Gv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),o}const Ie=s1();function Fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class r1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qr===void 0&&(Qr=Fc("canvas")),Qr.width=e.width,Qr.height=e.height;const u=Qr.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),r=Qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Fc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const u=r.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Fa(f[h]/255)*255;return r.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Fa(i[r]/255)*255):i[r]=Fa(i[r]);return{data:i,width:e.width,height:e.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(Dd(u[h].image)):f.push(Dd(u[h]))}else f=Dd(u);r.url=f}return i||(e.images[this.uuid]=r),r}}function Dd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?r1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let l1=0;const Ud=new ut;class Hn extends Mo{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Xi,u=Xi,f=un,h=Ms,d=ki,m=_i,p=Hn.DEFAULT_ANISOTROPY,_=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=yo(),this.name="",this.source=new um(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&r&&u.isVector2&&r.isVector2||u&&r&&u.isVector3&&r.isVector3||u&&r&&u.isMatrix3&&r.isMatrix3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case hp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case hp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Hx;Hn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,u=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,u){return this.x=e,this.y=i,this.z=r,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*u+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*u+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*u+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,u,f;const m=e.elements,p=m[0],_=m[4],g=m[8],v=m[1],y=m[5],b=m[9],D=m[2],M=m[6],S=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-D)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+D)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(y+1)/2,H=(S+1)/2,F=(_+v)/4,P=(g+D)/4,E=(b+M)/4;return L>U&&L>H?L<.01?(r=0,u=.707106781,f=.707106781):(r=Math.sqrt(L),u=F/r,f=P/r):U>H?U<.01?(r=.707106781,u=0,f=.707106781):(u=Math.sqrt(U),r=F/u,f=E/u):H<.01?(r=.707106781,u=.707106781,f=0):(f=Math.sqrt(H),r=P/f,u=E/f),this.set(r,u,f,i),this}let w=Math.sqrt((M-b)*(M-b)+(g-D)*(g-D)+(v-_)*(v-_));return Math.abs(w)<.001&&(w=1),this.x=(M-b)/w,this.y=(g-D)/w,this.z=(v-_)/w,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u1 extends Mo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:r.depth},f=new Hn(u),h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=r,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new um(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ha extends u1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class jx extends Hn{constructor(e=null,i=1,r=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=On,this.minFilter=On,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c1 extends Hn{constructor(e=null,i=1,r=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=On,this.minFilter=On,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(e,i,r,u,f,h,d,m,p,_,g,v,y,b,D,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,m,p,_,g,v,y,b,D,M)}set(e,i,r,u,f,h,d,m,p,_,g,v,y,b,D,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=u,S[1]=f,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=g,S[14]=v,S[3]=y,S[7]=b,S[11]=D,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,u=1/Jr.setFromMatrixColumn(e,0).length(),f=1/Jr.setFromMatrixColumn(e,1).length(),h=1/Jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*u,i[1]=r[1]*u,i[2]=r[2]*u,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,u=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(u),p=Math.sin(u),_=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const v=h*_,y=h*g,b=d*_,D=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=v-D*p,i[9]=-d*m,i[2]=D-v*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const v=m*_,y=m*g,b=p*_,D=p*g;i[0]=v+D*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=D+v*d,i[10]=h*m}else if(e.order==="ZXY"){const v=m*_,y=m*g,b=p*_,D=p*g;i[0]=v-D*d,i[4]=-h*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=D-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const v=h*_,y=h*g,b=d*_,D=d*g;i[0]=m*_,i[4]=b*p-y,i[8]=v*p+D,i[1]=m*g,i[5]=D*p+v,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const v=h*m,y=h*p,b=d*m,D=d*p;i[0]=m*_,i[4]=D-v*g,i[8]=b*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+b,i[10]=v-D*g}else if(e.order==="XZY"){const v=h*m,y=h*p,b=d*m,D=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=v*g+D,i[5]=h*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*_,i[10]=D*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f1,e,h1)}lookAt(e,i,r){const u=this.elements;return mi.subVectors(e,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),ps.crossVectors(r,mi),ps.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),ps.crossVectors(r,mi)),ps.normalize(),sc.crossVectors(mi,ps),u[0]=ps.x,u[4]=sc.x,u[8]=mi.x,u[1]=ps.y,u[5]=sc.y,u[9]=mi.y,u[2]=ps.z,u[6]=sc.z,u[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],v=r[9],y=r[13],b=r[2],D=r[6],M=r[10],S=r[14],w=r[3],L=r[7],U=r[11],H=r[15],F=u[0],P=u[4],E=u[8],C=u[12],it=u[1],O=u[5],q=u[9],W=u[13],Q=u[2],Y=u[6],z=u[10],V=u[14],ft=u[3],mt=u[7],yt=u[11],Tt=u[15];return f[0]=h*F+d*it+m*Q+p*ft,f[4]=h*P+d*O+m*Y+p*mt,f[8]=h*E+d*q+m*z+p*yt,f[12]=h*C+d*W+m*V+p*Tt,f[1]=_*F+g*it+v*Q+y*ft,f[5]=_*P+g*O+v*Y+y*mt,f[9]=_*E+g*q+v*z+y*yt,f[13]=_*C+g*W+v*V+y*Tt,f[2]=b*F+D*it+M*Q+S*ft,f[6]=b*P+D*O+M*Y+S*mt,f[10]=b*E+D*q+M*z+S*yt,f[14]=b*C+D*W+M*V+S*Tt,f[3]=w*F+L*it+U*Q+H*ft,f[7]=w*P+L*O+U*Y+H*mt,f[11]=w*E+L*q+U*z+H*yt,f[15]=w*C+L*W+U*V+H*Tt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],u=e[8],f=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],v=e[10],y=e[14],b=e[3],D=e[7],M=e[11],S=e[15],w=m*y-p*v,L=d*y-p*g,U=d*v-m*g,H=h*y-p*_,F=h*v-m*_,P=h*g-d*_;return i*(D*w-M*L+S*U)-r*(b*w-M*H+S*F)+u*(b*L-D*H+S*P)-f*(b*U-D*F+M*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],v=e[10],y=e[11],b=e[12],D=e[13],M=e[14],S=e[15],w=i*d-r*h,L=i*m-u*h,U=i*p-f*h,H=r*m-u*d,F=r*p-f*d,P=u*p-f*m,E=_*D-g*b,C=_*M-v*b,it=_*S-y*b,O=g*M-v*D,q=g*S-y*D,W=v*S-y*M,Q=w*W-L*q+U*O+H*it-F*C+P*E;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/Q;return e[0]=(d*W-m*q+p*O)*Y,e[1]=(u*q-r*W-f*O)*Y,e[2]=(D*P-M*F+S*H)*Y,e[3]=(v*F-g*P-y*H)*Y,e[4]=(m*it-h*W-p*C)*Y,e[5]=(i*W-u*it+f*C)*Y,e[6]=(M*U-b*P-S*L)*Y,e[7]=(_*P-v*U+y*L)*Y,e[8]=(h*q-d*it+p*E)*Y,e[9]=(r*it-i*q-f*E)*Y,e[10]=(b*F-D*U+S*w)*Y,e[11]=(g*U-_*F-y*w)*Y,e[12]=(d*C-h*O-m*E)*Y,e[13]=(i*O-r*C+u*E)*Y,e[14]=(D*L-b*H-M*w)*Y,e[15]=(_*H-g*L+v*w)*Y,this}scale(e){const i=this.elements,r=e.x,u=e.y,f=e.z;return i[0]*=r,i[4]*=u,i[8]*=f,i[1]*=r,i[5]*=u,i[9]*=f,i[2]*=r,i[6]*=u,i[10]*=f,i[3]*=r,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,u))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),u=Math.sin(i),f=1-r,h=e.x,d=e.y,m=e.z,p=f*h,_=f*d;return this.set(p*h+r,p*d-u*m,p*m+u*d,0,p*d+u*m,_*d+r,_*m-u*h,0,p*m-u*d,_*m+u*h,f*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,u,f,h){return this.set(1,r,f,0,e,1,h,0,i,u,1,0,0,0,0,1),this}compose(e,i,r){const u=this.elements,f=i._x,h=i._y,d=i._z,m=i._w,p=f+f,_=h+h,g=d+d,v=f*p,y=f*_,b=f*g,D=h*_,M=h*g,S=d*g,w=m*p,L=m*_,U=m*g,H=r.x,F=r.y,P=r.z;return u[0]=(1-(D+S))*H,u[1]=(y+U)*H,u[2]=(b-L)*H,u[3]=0,u[4]=(y-U)*F,u[5]=(1-(v+S))*F,u[6]=(M+w)*F,u[7]=0,u[8]=(b+L)*P,u[9]=(M-w)*P,u[10]=(1-(v+D))*P,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,r){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinant();if(f===0)return r.set(1,1,1),i.identity(),this;let h=Jr.set(u[0],u[1],u[2]).length();const d=Jr.set(u[4],u[5],u[6]).length(),m=Jr.set(u[8],u[9],u[10]).length();f<0&&(h=-h),Bi.copy(this);const p=1/h,_=1/d,g=1/m;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=g,Bi.elements[9]*=g,Bi.elements[10]*=g,i.setFromRotationMatrix(Bi),r.x=h,r.y=d,r.z=m,this}makePerspective(e,i,r,u,f,h,d=ca,m=!1){const p=this.elements,_=2*f/(i-e),g=2*f/(r-u),v=(i+e)/(i-e),y=(r+u)/(r-u);let b,D;if(m)b=f/(h-f),D=h*f/(h-f);else if(d===ca)b=-(h+f)/(h-f),D=-2*h*f/(h-f);else if(d===Pl)b=-h/(h-f),D=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,u,f,h,d=ca,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-u),v=-(i+e)/(i-e),y=-(r+u)/(r-u);let b,D;if(m)b=1/(h-f),D=h/(h-f);else if(d===ca)b=-2/(h-f),D=-(h+f)/(h-f);else if(d===Pl)b=-1/(h-f),D=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<16;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Jr=new ut,Bi=new $e,f1=new ut(0,0,0),h1=new ut(1,1,1),ps=new ut,sc=new ut,mi=new ut,Vv=new $e,Xv=new Eo;class qi{constructor(e=0,i=0,r=0,u=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,u=this._order){return this._x=e,this._y=i,this._z=r,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],m=u[1],p=u[5],_=u[9],g=u[2],v=u[6],y=u[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Vv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Xv.setFromEuler(this),this.setFromQuaternion(Xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d1=0;const kv=new ut,$r=new Eo,wa=new $e,rc=new ut,xl=new ut,p1=new ut,m1=new Eo,qv=new ut(1,0,0),Yv=new ut(0,1,0),Wv=new ut(0,0,1),jv={type:"added"},g1={type:"removed"},to={type:"childadded",child:null},Nd={type:"childremoved",child:null};class _n extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new ut,i=new qi,r=new Eo,u=new ut(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new $e},normalMatrix:{value:new xe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(qv,e)}rotateY(e){return this.rotateOnAxis(Yv,e)}rotateZ(e){return this.rotateOnAxis(Wv,e)}translateOnAxis(e,i){return kv.copy(e).applyQuaternion(this.quaternion),this.position.add(kv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(qv,e)}translateY(e){return this.translateOnAxis(Yv,e)}translateZ(e){return this.translateOnAxis(Wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const u=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(xl,rc,this.up):wa.lookAt(rc,xl,this.up),this.quaternion.setFromRotationMatrix(wa),u&&(wa.extractRotation(u.matrixWorld),$r.setFromRotationMatrix(wa),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jv),to.child=e,this.dispatchEvent(to),to.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(g1),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,u=this.children.length;r<u;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,p1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,m1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*r-f[8]*u,f[13]+=r-f[1]*i-f[5]*r-f[9]*u,f[14]+=u-f[2]*i-f[6]*r-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),this.static!==!1&&(u.static=this.static),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];f(e.shapes,g)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(f(e.materials,this.material[m]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];u.animations.push(f(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),v=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=u,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const u=e.children[r];this.add(u.clone())}return this}}_n.DEFAULT_UP=new ut(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cl extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _1={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let u=null,f=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const D of e.hand.values()){const M=i.getJointPose(D,r),S=this._getHandJoint(p,D);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(u=i.getPose(e.targetRaySpace,r),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_1)))}return d!==null&&(d.visible=u!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Cl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Od(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(e,i,r,u=Ie.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ie.colorSpaceToWorking(this,u),this}setHSL(e,i,r,u=Ie.workingColorSpace){if(e=lm(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Od(h,f,e+1/3),this.g=Od(h,f,e),this.b=Od(h,f,e-1/3)}return Ie.colorSpaceToWorking(this,u),this}setStyle(e,i=Di){function r(f){f!==void 0&&parseFloat(f)<1&&ce("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:ce("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Di){const r=Kx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Ie.workingToColorSpace(Bn.copy(this),e),Math.round(Ee(Bn.r*255,0,255))*65536+Math.round(Ee(Bn.g*255,0,255))*256+Math.round(Ee(Bn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ie.workingColorSpace){Ie.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,u=Bn.g,f=Bn.b,h=Math.max(r,u,f),d=Math.min(r,u,f);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(u-f)/g+(u<f?6:0);break;case u:m=(f-r)/g+2;break;case f:m=(r-u)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Di){Ie.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,u=Bn.b;return e!==Di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(u*255)})`}offsetHSL(e,i,r){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+i,ms.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ms),e.getHSL(oc);const r=Ul(ms.h,oc.h,i),u=Ul(ms.s,oc.s,i),f=Ul(ms.l,oc.l,i);return this.setHSL(r,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*u,this.g=f[1]*i+f[4]*r+f[7]*u,this.b=f[2]*i+f[5]*r+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ye;ye.NAMES=Kx;class Qx extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hi=new ut,Da=new ut,Pd=new ut,Ua=new ut,eo=new ut,no=new ut,Zv=new ut,Id=new ut,zd=new ut,Fd=new ut,Bd=new rn,Hd=new rn,Gd=new rn;class Vi{constructor(e=new ut,i=new ut,r=new ut){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,u){u.subVectors(r,i),Hi.subVectors(e,i),u.cross(Hi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,r,u,f){Hi.subVectors(u,i),Da.subVectors(r,i),Pd.subVectors(e,i);const h=Hi.dot(Hi),d=Hi.dot(Da),m=Hi.dot(Pd),p=Da.dot(Da),_=Da.dot(Pd),g=h*p-d*d;if(g===0)return f.set(0,0,0),null;const v=1/g,y=(p*m-d*_)*v,b=(h*_-d*m)*v;return f.set(1-y-b,b,y)}static containsPoint(e,i,r,u){return this.getBarycoord(e,i,r,u,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,r,u,f,h,d,m){return this.getBarycoord(e,i,r,u,Ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ua.x),m.addScaledVector(h,Ua.y),m.addScaledVector(d,Ua.z),m)}static getInterpolatedAttribute(e,i,r,u,f,h){return Bd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Bd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,r),Gd.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(Bd,f.x),h.addScaledVector(Hd,f.y),h.addScaledVector(Gd,f.z),h}static isFrontFacing(e,i,r,u){return Hi.subVectors(r,i),Da.subVectors(e,i),Hi.cross(Da).dot(u)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,u){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,r,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Hi.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,u,f){return Vi.getInterpolation(e,this.a,this.b,this.c,i,r,u,f)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,u=this.b,f=this.c;let h,d;eo.subVectors(u,r),no.subVectors(f,r),Id.subVectors(e,r);const m=eo.dot(Id),p=no.dot(Id);if(m<=0&&p<=0)return i.copy(r);zd.subVectors(e,u);const _=eo.dot(zd),g=no.dot(zd);if(_>=0&&g<=_)return i.copy(u);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(eo,h);Fd.subVectors(e,f);const y=eo.dot(Fd),b=no.dot(Fd);if(b>=0&&y<=b)return i.copy(f);const D=y*p-m*b;if(D<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(no,d);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return Zv.subVectors(f,u),d=(g-_)/(g-_+(y-b)),i.copy(u).addScaledVector(Zv,d);const S=1/(M+D+v);return h=D*S,d=v*S,i.copy(r).addScaledVector(eo,h).addScaledVector(no,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rr{constructor(e=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Gi):Gi.fromBufferAttribute(f,h),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),uc.subVectors(this.max,Sl),io.subVectors(e.a,Sl),ao.subVectors(e.b,Sl),so.subVectors(e.c,Sl),gs.subVectors(ao,io),_s.subVectors(so,ao),js.subVectors(io,so);let i=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-js.z,js.y,gs.z,0,-gs.x,_s.z,0,-_s.x,js.z,0,-js.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-js.y,js.x,0];return!Vd(i,io,ao,so,uc)||(i=[1,0,0,0,1,0,0,0,1],!Vd(i,io,ao,so,uc))?!1:(cc.crossVectors(gs,_s),i=[cc.x,cc.y,cc.z],Vd(i,io,ao,so,uc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Gi=new ut,lc=new rr,io=new ut,ao=new ut,so=new ut,gs=new ut,_s=new ut,js=new ut,Sl=new ut,uc=new ut,cc=new ut,Zs=new ut;function Vd(o,e,i,r,u){for(let f=0,h=o.length-3;f<=h;f+=3){Zs.fromArray(o,f);const d=u.x*Math.abs(Zs.x)+u.y*Math.abs(Zs.y)+u.z*Math.abs(Zs.z),m=e.dot(Zs),p=i.dot(Zs),_=r.dot(Zs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Ia=v1();function v1(){const o=new ArrayBuffer(4),e=new Float32Array(o),i=new Uint32Array(o),r=new Uint32Array(512),u=new Uint32Array(512);for(let m=0;m<256;++m){const p=m-127;p<-27?(r[m]=0,r[m|256]=32768,u[m]=24,u[m|256]=24):p<-14?(r[m]=1024>>-p-14,r[m|256]=1024>>-p-14|32768,u[m]=-p-1,u[m|256]=-p-1):p<=15?(r[m]=p+15<<10,r[m|256]=p+15<<10|32768,u[m]=13,u[m|256]=13):p<128?(r[m]=31744,r[m|256]=64512,u[m]=24,u[m|256]=24):(r[m]=31744,r[m|256]=64512,u[m]=13,u[m|256]=13)}const f=new Uint32Array(2048),h=new Uint32Array(64),d=new Uint32Array(64);for(let m=1;m<1024;++m){let p=m<<13,_=0;for(;(p&8388608)===0;)p<<=1,_-=8388608;p&=-8388609,_+=947912704,f[m]=p|_}for(let m=1024;m<2048;++m)f[m]=939524096+(m-1024<<13);for(let m=1;m<31;++m)h[m]=m<<23;h[31]=1199570944,h[32]=2147483648;for(let m=33;m<63;++m)h[m]=2147483648+(m-32<<23);h[63]=3347054592;for(let m=1;m<64;++m)m!==32&&(d[m]=1024);return{floatView:e,uint32View:i,baseTable:r,shiftTable:u,mantissaTable:f,exponentTable:h,offsetTable:d}}function x1(o){Math.abs(o)>65504&&ce("DataUtils.toHalfFloat(): Value out of range."),o=Ee(o,-65504,65504),Ia.floatView[0]=o;const e=Ia.uint32View[0],i=e>>23&511;return Ia.baseTable[i]+((e&8388607)>>Ia.shiftTable[i])}function S1(o){const e=o>>10;return Ia.uint32View[0]=Ia.mantissaTable[Ia.offsetTable[e]+(o&1023)]+Ia.exponentTable[e],Ia.floatView[0]}class fc{static toHalfFloat(e){return x1(e)}static fromHalfFloat(e){return S1(e)}}const mn=new ut,hc=new Oe;let M1=0;class si{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Ov,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[r+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(e),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ho(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ho(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ho(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ho(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ho(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,u){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),u=Wn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this}setXYZW(e,i,r,u,f){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),u=Wn(u,this.array),f=Wn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ov&&(e.usage=this.usage),e}}class Jx extends si{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class $x extends si{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class An extends si{constructor(e,i,r){super(new Float32Array(e),i,r)}}const y1=new rr,Ml=new ut,Xd=new ut;class To{constructor(e=new ut,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):y1.setFromPoints(e).getCenter(r);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ml.subVectors(e,this.center);const i=Ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),u=(r-this.radius)*.5;this.center.addScaledVector(Ml,u/r),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ml.copy(e.center).add(Xd)),this.expandByPoint(Ml.copy(e.center).sub(Xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let E1=0;const wi=new $e,kd=new _n,ro=new ut,gi=new rr,yl=new rr,bn=new ut;class ri extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BE(e)?$x:Jx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new xe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,r){return wi.makeTranslation(e,i,r),this.applyMatrix4(wi),this}scale(e,i,r){return wi.makeScale(e,i,r),this.applyMatrix4(wi),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(e.length,i.count);for(let u=0;u<r;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,u=i.length;r<u;r++){const f=i[r];gi.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];yl.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(gi.min,yl.min),gi.expandByPoint(bn),bn.addVectors(gi.max,yl.max),gi.expandByPoint(bn)):(gi.expandByPoint(yl.min),gi.expandByPoint(yl.max))}gi.getCenter(r);let u=0;for(let f=0,h=e.count;f<h;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,r.distanceToSquared(bn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)bn.fromBufferAttribute(d,p),m&&(ro.fromBufferAttribute(e,p),bn.add(ro)),u=Math.max(u,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let E=0;E<r.count;E++)d[E]=new ut,m[E]=new ut;const p=new ut,_=new ut,g=new ut,v=new Oe,y=new Oe,b=new Oe,D=new ut,M=new ut;function S(E,C,it){p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,it),v.fromBufferAttribute(f,E),y.fromBufferAttribute(f,C),b.fromBufferAttribute(f,it),_.sub(p),g.sub(p),y.sub(v),b.sub(v);const O=1/(y.x*b.y-b.x*y.y);isFinite(O)&&(D.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(O),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(O),d[E].add(D),d[C].add(D),d[it].add(D),m[E].add(M),m[C].add(M),m[it].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,C=w.length;E<C;++E){const it=w[E],O=it.start,q=it.count;for(let W=O,Q=O+q;W<Q;W+=3)S(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new ut,U=new ut,H=new ut,F=new ut;function P(E){H.fromBufferAttribute(u,E),F.copy(H);const C=d[E];L.copy(C),L.sub(H.multiplyScalar(H.dot(C))).normalize(),U.crossVectors(F,C);const O=U.dot(m[E])<0?-1:1;h.setXYZW(E,L.x,L.y,L.z,O)}for(let E=0,C=w.length;E<C;++E){const it=w[E],O=it.start,q=it.count;for(let W=O,Q=O+q;W<Q;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const u=new ut,f=new ut,h=new ut,d=new ut,m=new ut,p=new ut,_=new ut,g=new ut;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),D=e.getX(v+1),M=e.getX(v+2);u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),_.subVectors(h,f),g.subVectors(u,f),_.cross(g),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)u.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),_.subVectors(h,f),g.subVectors(u,f),_.cross(g),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,v=new p.constructor(m.length*_);let y=0,b=0;for(let D=0,M=m.length;D<M;D++){d.isInterleavedBufferAttribute?y=m[D]*d.data.stride+d.offset:y=m[D]*_;for(let S=0;S<_;S++)v[b++]=p[y++]}return new si(v,_,g)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ri,r=this.index.array,u=this.attributes;for(const d in u){const m=u[d],p=e(m,r);i.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const m=[],p=f[d];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=e(v,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const u={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(u[m]=_,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const u=e.attributes;for(const p in u){const _=u[p];this.setAttribute(p,_.clone(i))}const f=e.morphAttributes;for(const p in f){const _=[],g=f[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let T1=0;class or extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=po,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ip,this.blendDst=ap,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(r):u&&u.isVector3&&r&&r.isVector3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(r.blending=this.blending),this.side!==Es&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ip&&(r.blendSrc=this.blendSrc),this.blendDst!==ap&&(r.blendDst=this.blendDst),this.blendEquation!==er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function u(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}if(i){const f=u(e.textures),h=u(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const u=i.length;r=new Array(u);for(let f=0;f!==u;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const La=new ut,qd=new ut,dc=new ut,vs=new ut,Yd=new ut,pc=new ut,Wd=new ut;class tS{constructor(e=new ut,i=new ut(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,La)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=La.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(La.copy(this.origin).addScaledVector(this.direction,i),La.distanceToSquared(e))}distanceSqToSegment(e,i,r,u){qd.copy(e).add(i).multiplyScalar(.5),dc.copy(i).sub(e).normalize(),vs.copy(this.origin).sub(qd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(dc),d=vs.dot(this.direction),m=-vs.dot(dc),p=vs.lengthSq(),_=Math.abs(1-h*h);let g,v,y,b;if(_>0)if(g=h*m-d,v=h*d-m,b=f*_,g>=0)if(v>=-b)if(v<=b){const D=1/_;g*=D,v*=D,y=g*(g+h*v+2*d)+v*(h*g+v+2*m)+p}else v=f,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*m)+p;else v=-f,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*m)+p;else v<=-b?(g=Math.max(0,-(-h*f+d)),v=g>0?-f:Math.min(Math.max(-f,-m),f),y=-g*g+v*(v+2*m)+p):v<=b?(g=0,v=Math.min(Math.max(-f,-m),f),y=v*(v+2*m)+p):(g=Math.max(0,-(h*f+d)),v=g>0?f:Math.min(Math.max(-f,-m),f),y=-g*g+v*(v+2*m)+p);else v=h>0?-f:f,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),u&&u.copy(qd).addScaledVector(dc,v),y}intersectSphere(e,i){La.subVectors(e.center,this.origin);const r=La.dot(this.direction),u=La.dot(La)-r*r,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,u,f,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,u=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,u=(e.min.x-v.x)*p),_>=0?(f=(e.min.y-v.y)*_,h=(e.max.y-v.y)*_):(f=(e.max.y-v.y)*_,h=(e.min.y-v.y)*_),r>h||f>u||((f>r||isNaN(r))&&(r=f),(h<u||isNaN(u))&&(u=h),g>=0?(d=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),r>m||d>u)||((d>r||r!==r)&&(r=d),(m<u||u!==u)&&(u=m),u<0)?null:this.at(r>=0?r:u,i)}intersectsBox(e){return this.intersectBox(e,La)!==null}intersectTriangle(e,i,r,u,f){Yd.subVectors(i,e),pc.subVectors(r,e),Wd.crossVectors(Yd,pc);let h=this.direction.dot(Wd),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;vs.subVectors(this.origin,e);const m=d*this.direction.dot(pc.crossVectors(vs,pc));if(m<0)return null;const p=d*this.direction.dot(Yd.cross(vs));if(p<0||m+p>h)return null;const _=-d*vs.dot(Wd);return _<0?null:this.at(_/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eS extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kv=new $e,Ks=new tS,mc=new To,Qv=new ut,gc=new ut,_c=new ut,vc=new ut,jd=new ut,xc=new ut,Jv=new ut,Sc=new ut;class ln extends _n{constructor(e=new ri,i=new eS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,u=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){xc.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const _=d[m],g=f[m];_!==0&&(jd.fromBufferAttribute(g,e),h?xc.addScaledVector(jd,_):xc.addScaledVector(jd.sub(i),_))}i.add(xc)}return i}raycast(e,i){const r=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(f),Ks.copy(e.ray).recast(e.near),!(mc.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(mc,Qv)===null||Ks.origin.distanceToSquared(Qv)>(e.far-e.near)**2))&&(Kv.copy(f).invert(),Ks.copy(e.ray).applyMatrix4(Kv),!(r.boundingBox!==null&&Ks.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ks)))}_computeIntersections(e,i,r){let u;const f=this.geometry,h=this.material,d=f.index,m=f.attributes.position,p=f.attributes.uv,_=f.attributes.uv1,g=f.attributes.normal,v=f.groups,y=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,D=v.length;b<D;b++){const M=v[b],S=h[M.materialIndex],w=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=w,H=L;U<H;U+=3){const F=d.getX(U),P=d.getX(U+1),E=d.getX(U+2);u=Mc(this,S,e,r,p,_,g,F,P,E),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const b=Math.max(0,y.start),D=Math.min(d.count,y.start+y.count);for(let M=b,S=D;M<S;M+=3){const w=d.getX(M),L=d.getX(M+1),U=d.getX(M+2);u=Mc(this,h,e,r,p,_,g,w,L,U),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,D=v.length;b<D;b++){const M=v[b],S=h[M.materialIndex],w=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=w,H=L;U<H;U+=3){const F=U,P=U+1,E=U+2;u=Mc(this,S,e,r,p,_,g,F,P,E),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const b=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let M=b,S=D;M<S;M+=3){const w=M,L=M+1,U=M+2;u=Mc(this,h,e,r,p,_,g,w,L,U),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function b1(o,e,i,r,u,f,h,d){let m;if(e.side===Zn?m=r.intersectTriangle(h,f,u,!0,d):m=r.intersectTriangle(u,f,h,e.side===Es,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function Mc(o,e,i,r,u,f,h,d,m,p){o.getVertexPosition(d,gc),o.getVertexPosition(m,_c),o.getVertexPosition(p,vc);const _=b1(o,e,i,r,gc,_c,vc,Jv);if(_){const g=new ut;Vi.getBarycoord(Jv,gc,_c,vc,g),u&&(_.uv=Vi.getInterpolatedAttribute(u,d,m,p,g,new Oe)),f&&(_.uv1=Vi.getInterpolatedAttribute(f,d,m,p,g,new Oe)),h&&(_.normal=Vi.getInterpolatedAttribute(h,d,m,p,g,new ut),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new ut,materialIndex:0};Vi.getNormal(gc,_c,vc,v.normal),_.face=v,_.barycoord=g}return _}class cm extends Hn{constructor(e=null,i=1,r=1,u,f,h,d,m,p=On,_=On,g,v){super(null,h,d,m,p,_,u,f,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $v extends si{constructor(e,i,r,u=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=u}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const oo=new $e,tx=new $e,yc=[],ex=new rr,A1=new $e,El=new ln,Tl=new To;class nS extends ln{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new $v(new Float32Array(r*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let u=0;u<r;u++)this.setMatrixAt(u,A1)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,oo),ex.copy(e.boundingBox).applyMatrix4(oo),this.boundingBox.union(ex)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new To),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,oo),Tl.copy(e.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(Tl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,u=this.morphTexture.source.data.data,f=r.length+1,h=e*f+1;for(let d=0;d<r.length;d++)r[d]=u[h+d]}raycast(e,i){const r=this.matrixWorld,u=this.count;if(El.geometry=this.geometry,El.material=this.material,El.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(r),e.ray.intersectsSphere(Tl)!==!1))for(let f=0;f<u;f++){this.getMatrixAt(f,oo),tx.multiplyMatrices(r,oo),El.matrixWorld=tx,El.raycast(e,yc);for(let h=0,d=yc.length;h<d;h++){const m=yc[h];m.instanceId=f,m.object=this,i.push(m)}yc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new $v(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,u=r.length+1;this.morphTexture===null&&(this.morphTexture=new cm(new Float32Array(u*this.count),u,this.count,em,ai));const f=this.morphTexture.source.data.data;let h=0;for(let p=0;p<r.length;p++)h+=r[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=u*e;f[m]=d,f.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zd=new ut,R1=new ut,C1=new xe;class tr{constructor(e=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,u){return this.normal.set(e,i,r),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const u=Zd.subVectors(r,i).cross(R1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Zd),u=this.normal.dot(r);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||C1.getNormalMatrix(e),u=this.coplanarPoint(Zd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new To,w1=new Oe(.5,.5),Ec=new ut;class fm{constructor(e=new tr,i=new tr,r=new tr,u=new tr,f=new tr,h=new tr){this.planes=[e,i,r,u,f,h]}set(e,i,r,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ca,r=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],m=f[2],p=f[3],_=f[4],g=f[5],v=f[6],y=f[7],b=f[8],D=f[9],M=f[10],S=f[11],w=f[12],L=f[13],U=f[14],H=f[15];if(u[0].setComponents(p-h,y-_,S-b,H-w).normalize(),u[1].setComponents(p+h,y+_,S+b,H+w).normalize(),u[2].setComponents(p+d,y+g,S+D,H+L).normalize(),u[3].setComponents(p-d,y-g,S-D,H-L).normalize(),r)u[4].setComponents(m,v,M,U).normalize(),u[5].setComponents(p-m,y-v,S-M,H-U).normalize();else if(u[4].setComponents(p-m,y-v,S-M,H-U).normalize(),i===ca)u[5].setComponents(p+m,y+v,S+M,H+U).normalize();else if(i===Pl)u[5].setComponents(m,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const i=w1.distanceTo(e.center);return Qs.radius=.7071067811865476+i,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const i=this.planes,r=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const u=i[r];if(Ec.x=u.normal.x>0?e.max.x:e.min.x,Ec.y=u.normal.y>0?e.max.y:e.min.y,Ec.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D1 extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nx=new $e,qp=new tS,Tc=new To,bc=new ut;class U1 extends _n{constructor(e=new ri,i=new D1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(u),Tc.radius+=f,e.ray.intersectsSphere(Tc)===!1)return;nx.copy(u).invert(),qp.copy(e.ray).applyMatrix4(nx);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const v=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=v,D=y;b<D;b++){const M=p.getX(b);bc.fromBufferAttribute(g,M),ix(bc,M,m,u,e,i,this)}}else{const v=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let b=v,D=y;b<D;b++)bc.fromBufferAttribute(g,b),ix(bc,b,m,u,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function ix(o,e,i,r,u,f,h){const d=qp.distanceSqToPoint(o);if(d<i){const m=new ut;qp.closestPointToPoint(o,m),m.applyMatrix4(r);const p=u.ray.origin.distanceTo(m);if(p<u.near||p>u.far)return;f.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class iS extends Hn{constructor(e=[],i=ar,r,u,f,h,d,m,p,_){super(e,i,r,u,f,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N1 extends Hn{constructor(e,i,r,u,f,h,d,m,p){super(e,i,r,u,f,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Il extends Hn{constructor(e,i,r=da,u,f,h,d=On,m=On,p,_=Ba,g=1){if(_!==Ba&&_!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,u,f,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class L1 extends Il{constructor(e,i=da,r=ar,u,f,h=On,d=On,m,p=Ba){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,u,f,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class aS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lr extends ri{constructor(e=1,i=1,r=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const m=[],p=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,r,i,e,h,f,0),b("z","y","x",1,-1,r,i,-e,h,f,1),b("x","z","y",1,1,e,r,i,u,h,2),b("x","z","y",1,-1,e,r,-i,u,h,3),b("x","y","z",1,-1,e,i,r,u,f,4),b("x","y","z",-1,-1,e,i,-r,u,f,5),this.setIndex(m),this.setAttribute("position",new An(p,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(g,2));function b(D,M,S,w,L,U,H,F,P,E,C){const it=U/P,O=H/E,q=U/2,W=H/2,Q=F/2,Y=P+1,z=E+1;let V=0,ft=0;const mt=new ut;for(let yt=0;yt<z;yt++){const Tt=yt*O-W;for(let Ut=0;Ut<Y;Ut++){const $t=Ut*it-q;mt[D]=$t*w,mt[M]=Tt*L,mt[S]=Q,p.push(mt.x,mt.y,mt.z),mt[D]=0,mt[M]=0,mt[S]=F>0?1:-1,_.push(mt.x,mt.y,mt.z),g.push(Ut/P),g.push(1-yt/E),V+=1}}for(let yt=0;yt<E;yt++)for(let Tt=0;Tt<P;Tt++){const Ut=v+Tt+Y*yt,$t=v+Tt+Y*(yt+1),G=v+(Tt+1)+Y*(yt+1),_t=v+(Tt+1)+Y*yt;m.push(Ut,$t,_t),m.push($t,G,_t),ft+=6}d.addGroup(y,ft,C),y+=ft,v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nl extends ri{constructor(e=1,i=1,r=1,u=32,f=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:u,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:m};const p=this;u=Math.floor(u),f=Math.floor(f);const _=[],g=[],v=[],y=[];let b=0;const D=[],M=r/2;let S=0;w(),h===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(v,3)),this.setAttribute("uv",new An(y,2));function w(){const U=new ut,H=new ut;let F=0;const P=(i-e)/r;for(let E=0;E<=f;E++){const C=[],it=E/f,O=it*(i-e)+e;for(let q=0;q<=u;q++){const W=q/u,Q=W*m+d,Y=Math.sin(Q),z=Math.cos(Q);H.x=O*Y,H.y=-it*r+M,H.z=O*z,g.push(H.x,H.y,H.z),U.set(Y,P,z).normalize(),v.push(U.x,U.y,U.z),y.push(W,1-it),C.push(b++)}D.push(C)}for(let E=0;E<u;E++)for(let C=0;C<f;C++){const it=D[C][E],O=D[C+1][E],q=D[C+1][E+1],W=D[C][E+1];(e>0||C!==0)&&(_.push(it,O,W),F+=3),(i>0||C!==f-1)&&(_.push(O,q,W),F+=3)}p.addGroup(S,F,0),S+=F}function L(U){const H=b,F=new Oe,P=new ut;let E=0;const C=U===!0?e:i,it=U===!0?1:-1;for(let q=1;q<=u;q++)g.push(0,M*it,0),v.push(0,it,0),y.push(.5,.5),b++;const O=b;for(let q=0;q<=u;q++){const Q=q/u*m+d,Y=Math.cos(Q),z=Math.sin(Q);P.x=C*z,P.y=M*it,P.z=C*Y,g.push(P.x,P.y,P.z),v.push(0,it,0),F.x=Y*.5+.5,F.y=z*.5*it+.5,y.push(F.x,F.y),b++}for(let q=0;q<u;q++){const W=H+q,Q=O+q;U===!0?_.push(Q,Q+1,W):_.push(Q+1,Q,W),E+=3}p.addGroup(S,E,U===!0?1:2),S+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kc extends ri{constructor(e=1,i=1,r=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:u};const f=e/2,h=i/2,d=Math.floor(r),m=Math.floor(u),p=d+1,_=m+1,g=e/d,v=i/m,y=[],b=[],D=[],M=[];for(let S=0;S<_;S++){const w=S*v-h;for(let L=0;L<p;L++){const U=L*g-f;b.push(U,-w,0),D.push(0,0,1),M.push(L/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<d;w++){const L=w+p*S,U=w+p*(S+1),H=w+1+p*(S+1),F=w+1+p*S;y.push(L,U,F),y.push(U,H,F)}this.setIndex(y),this.setAttribute("position",new An(b,3)),this.setAttribute("normal",new An(D,3)),this.setAttribute("uv",new An(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.widthSegments,e.heightSegments)}}class hm extends ri{constructor(e=1,i=32,r=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const _=[],g=new ut,v=new ut,y=[],b=[],D=[],M=[];for(let S=0;S<=r;S++){const w=[],L=S/r;let U=0;S===0&&h===0?U=.5/i:S===r&&m===Math.PI&&(U=-.5/i);for(let H=0;H<=i;H++){const F=H/i;g.x=-e*Math.cos(u+F*f)*Math.sin(h+L*d),g.y=e*Math.cos(h+L*d),g.z=e*Math.sin(u+F*f)*Math.sin(h+L*d),b.push(g.x,g.y,g.z),v.copy(g).normalize(),D.push(v.x,v.y,v.z),M.push(F+U,1-L),w.push(p++)}_.push(w)}for(let S=0;S<r;S++)for(let w=0;w<i;w++){const L=_[S][w+1],U=_[S][w],H=_[S+1][w],F=_[S+1][w+1];(S!==0||h>0)&&y.push(L,U,F),(S!==r-1||m<Math.PI)&&y.push(U,H,F)}this.setIndex(y),this.setAttribute("position",new An(b,3)),this.setAttribute("normal",new An(D,3)),this.setAttribute("uv",new An(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hc extends ri{constructor(e=1,i=.4,r=12,u=48,f=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:u,arc:f,thetaStart:h,thetaLength:d},r=Math.floor(r),u=Math.floor(u);const m=[],p=[],_=[],g=[],v=new ut,y=new ut,b=new ut;for(let D=0;D<=r;D++){const M=h+D/r*d;for(let S=0;S<=u;S++){const w=S/u*f;y.x=(e+i*Math.cos(M))*Math.cos(w),y.y=(e+i*Math.cos(M))*Math.sin(w),y.z=i*Math.sin(M),p.push(y.x,y.y,y.z),v.x=e*Math.cos(w),v.y=e*Math.sin(w),b.subVectors(y,v).normalize(),_.push(b.x,b.y,b.z),g.push(S/u),g.push(D/r)}}for(let D=1;D<=r;D++)for(let M=1;M<=u;M++){const S=(u+1)*D+M-1,w=(u+1)*(D-1)+M-1,L=(u+1)*(D-1)+M,U=(u+1)*D+M;m.push(S,w,U),m.push(w,L,U)}this.setIndex(m),this.setAttribute("position",new An(p,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function So(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const u=o[i][r];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=u.clone():Array.isArray(u)?e[i][r]=u.slice():e[i][r]=u}}return e}function jn(o){const e={};for(let i=0;i<o.length;i++){const r=So(o[i]);for(const u in r)e[u]=r[u]}return e}function O1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function sS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ie.workingColorSpace}const P1={clone:So,merge:jn};var I1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I1,this.fragmentShader=z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=O1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?i.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[u]={type:"m4",value:h.toArray()}:i.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const u in this.extensions)this.extensions[u]===!0&&(r[u]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class F1 extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gc extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sm,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B1 extends Gc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class H1 extends or{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sm,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Kp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G1 extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V1 extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ax={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(sx(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!sx(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function sx(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class X1{constructor(e,i,r){const u=this;let f=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,f===!1&&u.onStart!==void 0&&u.onStart(_,h,d),f=!0},this.itemEnd=function(_){h++,u.onProgress!==void 0&&u.onProgress(_,h,d),h===d&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(_){u.onError!==void 0&&u.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=p.length;g<v;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const k1=new X1;class dm{constructor(e){this.manager=e!==void 0?e:k1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(u,f){r.load(e,u,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}dm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oa={};class q1 extends Error{constructor(e,i){super(e),this.response=i}}class Y1 extends dm{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,i,r,u){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=ax.get(`file:${e}`);if(f!==void 0)return this.manager.itemStart(e),setTimeout(()=>{i&&i(f),this.manager.itemEnd(e)},0),f;if(Oa[e]!==void 0){Oa[e].push({onLoad:i,onProgress:r,onError:u});return}Oa[e]=[],Oa[e].push({onLoad:i,onProgress:r,onError:u});const h=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=Oa[e],g=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,b=y!==0;let D=0;const M=new ReadableStream({start(S){w();function w(){g.read().then(({done:L,value:U})=>{if(L)S.close();else{D+=U.byteLength;const H=new ProgressEvent("progress",{lengthComputable:b,loaded:D,total:y});for(let F=0,P=_.length;F<P;F++){const E=_[F];E.onProgress&&E.onProgress(H)}S.enqueue(U),w()}},L=>{S.error(L)})}}});return new Response(M)}else throw new q1(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,d));case"json":return p.json();default:if(d==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),v=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(b=>y.decode(b))}}}).then(p=>{ax.add(`file:${e}`,p);const _=Oa[e];delete Oa[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onLoad&&y.onLoad(p)}}).catch(p=>{const _=Oa[e];if(_===void 0)throw this.manager.itemError(e),p;delete Oa[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class W1 extends dm{constructor(e){super(e)}load(e,i,r,u){const f=this,h=new cm,d=new Y1(this.manager);return d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setPath(this.path),d.setWithCredentials(f.withCredentials),d.load(e,function(m){let p;try{p=f.parse(m)}catch(_){if(u!==void 0)u(_);else{_(_);return}}p.image!==void 0?h.image=p.image:p.data!==void 0&&(h.image.width=p.width,h.image.height=p.height,h.image.data=p.data),h.wrapS=p.wrapS!==void 0?p.wrapS:Xi,h.wrapT=p.wrapT!==void 0?p.wrapT:Xi,h.magFilter=p.magFilter!==void 0?p.magFilter:un,h.minFilter=p.minFilter!==void 0?p.minFilter:un,h.anisotropy=p.anisotropy!==void 0?p.anisotropy:1,p.colorSpace!==void 0&&(h.colorSpace=p.colorSpace),p.flipY!==void 0&&(h.flipY=p.flipY),p.format!==void 0&&(h.format=p.format),p.type!==void 0&&(h.type=p.type),p.mipmaps!==void 0&&(h.mipmaps=p.mipmaps,h.minFilter=Ms),p.mipmapCount===1&&(h.minFilter=un),p.generateMipmaps!==void 0&&(h.generateMipmaps=p.generateMipmaps),h.needsUpdate=!0,i&&i(h,p)},r,u),h}}class pm extends _n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class j1 extends pm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Kd=new $e,rx=new ut,ox=new ut;class rS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fm,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;rx.setFromMatrixPosition(e.matrixWorld),i.position.copy(rx),ox.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ox),i.updateMatrixWorld(),Kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Pl||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ac=new ut,Rc=new Eo,oa=new ut;class oS extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ac,Rc,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Rc,oa.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Ac,Rc,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Rc,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new ut,lx=new Oe,ux=new Oe;class ii extends oS{constructor(e=50,i=1,r=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,i){return this.getViewBounds(e,lx,ux),i.subVectors(ux,lx)}setViewOffset(e,i,r,u,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Dl*.5*this.fov)/this.zoom,r=2*i,u=this.aspect*r,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;f+=h.offsetX*u/m,i-=h.offsetY*r/p,u*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Z1 extends rS{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,r=xo*2*e.angle*this.focus,u=this.mapSize.width/this.mapSize.height*this.aspect,f=e.distance||i.far;(r!==i.fov||u!==i.aspect||f!==i.far)&&(i.fov=r,i.aspect=u,i.far=f,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class K1 extends pm{constructor(e,i,r=0,u=Math.PI/3,f=0,h=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.distance=r,this.angle=u,this.penumbra=f,this.decay=h,this.map=null,this.shadow=new Z1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class Q1 extends rS{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class lS extends pm{constructor(e,i,r=0,u=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=u,this.shadow=new Q1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class uS extends oS{constructor(e=-1,i=1,r=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=u+i,m=u-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const lo=-90,uo=1;class J1 extends _n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new ii(lo,uo,e,i);u.layers=this.layers,this.add(u);const f=new ii(lo,uo,e,i);f.layers=this.layers,this.add(f);const h=new ii(lo,uo,e,i);h.layers=this.layers,this.add(h);const d=new ii(lo,uo,e,i);d.layers=this.layers,this.add(d);const m=new ii(lo,uo,e,i);m.layers=this.layers,this.add(m);const p=new ii(lo,uo,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,u,f,h,d,m]=i;for(const p of i)this.remove(p);if(e===ca)r.up.set(0,1,0),r.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,m,p,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(g,v,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class $1 extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function cx(o,e,i,r){const u=tT(r);switch(i){case qx:return o*e;case em:return o*e/u.components*u.byteLength;case nm:return o*e/u.components*u.byteLength;case vo:return o*e*2/u.components*u.byteLength;case im:return o*e*2/u.components*u.byteLength;case Yx:return o*e*3/u.components*u.byteLength;case ki:return o*e*4/u.components*u.byteLength;case am:return o*e*4/u.components*u.byteLength;case Uc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:case gp:return Math.max(o,16)*Math.max(e,8)/4;case dp:case mp:return Math.max(o,8)*Math.max(e,8)/2;case _p:case vp:case Sp:case Mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xp:case yp:case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case zp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Fp:case Bp:case Hp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Gp:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tT(o){switch(o){case _i:case Gx:return{byteLength:1,components:1};case Ll:case Vx:case vi:return{byteLength:2,components:1};case $p:case tm:return{byteLength:2,components:4};case da:case Jp:case ai:return{byteLength:4,components:1};case Xx:case kx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);function cS(){let o=null,e=!1,i=null,r=null;function u(f,h){i(f,h),r=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function eT(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(m,v),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],D=g[y];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++v,g[v]=D)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const D=g[y];o.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:u,remove:f,update:h}}var nT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
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
#endif`,aT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lT=`#ifdef USE_AOMAP
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
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mT=`#ifdef USE_IRIDESCENCE
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
#endif`,gT=`#ifdef USE_BUMPMAP
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bT=`#define PI 3.141592653589793
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
} // validated`,AT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RT=`vec3 transformedNormal = objectNormal;
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
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",LT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OT=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XT=`#ifdef USE_GRADIENTMAP
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
}`,kT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
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
#endif`,jT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,ZT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$T=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,tb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fb=`#if defined( USE_POINTS_UV )
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
#endif`,hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
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
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
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
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Db=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
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
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nA=`uniform sampler2D t2D;
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`#include <common>
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
}`,lA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,uA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`uniform float scale;
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#include <common>
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
}`,gA=`uniform vec3 diffuse;
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
}`,_A=`#define LAMBERT
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
}`,vA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,xA=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,MA=`#define NORMAL
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
}`,yA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,EA=`#define PHONG
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
}`,TA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,bA=`#define STANDARD
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
}`,AA=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,RA=`#define TOON
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
}`,CA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,wA=`uniform float size;
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
}`,DA=`uniform vec3 diffuse;
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
}`,UA=`#include <common>
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
}`,NA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,LA=`uniform float rotation;
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
}`,OA=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:nT,alphahash_pars_fragment:iT,alphamap_fragment:aT,alphamap_pars_fragment:sT,alphatest_fragment:rT,alphatest_pars_fragment:oT,aomap_fragment:lT,aomap_pars_fragment:uT,batching_pars_vertex:cT,batching_vertex:fT,begin_vertex:hT,beginnormal_vertex:dT,bsdfs:pT,iridescence_fragment:mT,bumpmap_pars_fragment:gT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:vT,clipping_planes_pars_vertex:xT,clipping_planes_vertex:ST,color_fragment:MT,color_pars_fragment:yT,color_pars_vertex:ET,color_vertex:TT,common:bT,cube_uv_reflection_fragment:AT,defaultnormal_vertex:RT,displacementmap_pars_vertex:CT,displacementmap_vertex:wT,emissivemap_fragment:DT,emissivemap_pars_fragment:UT,colorspace_fragment:NT,colorspace_pars_fragment:LT,envmap_fragment:OT,envmap_common_pars_fragment:PT,envmap_pars_fragment:IT,envmap_pars_vertex:zT,envmap_physical_pars_fragment:jT,envmap_vertex:FT,fog_vertex:BT,fog_pars_vertex:HT,fog_fragment:GT,fog_pars_fragment:VT,gradientmap_pars_fragment:XT,lightmap_pars_fragment:kT,lights_lambert_fragment:qT,lights_lambert_pars_fragment:YT,lights_pars_begin:WT,lights_toon_fragment:ZT,lights_toon_pars_fragment:KT,lights_phong_fragment:QT,lights_phong_pars_fragment:JT,lights_physical_fragment:$T,lights_physical_pars_fragment:tb,lights_fragment_begin:eb,lights_fragment_maps:nb,lights_fragment_end:ib,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:sb,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:ob,map_fragment:lb,map_pars_fragment:ub,map_particle_fragment:cb,map_particle_pars_fragment:fb,metalnessmap_fragment:hb,metalnessmap_pars_fragment:db,morphinstance_vertex:pb,morphcolor_vertex:mb,morphnormal_vertex:gb,morphtarget_pars_vertex:_b,morphtarget_vertex:vb,normal_fragment_begin:xb,normal_fragment_maps:Sb,normal_pars_fragment:Mb,normal_pars_vertex:yb,normal_vertex:Eb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Ab,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Cb,opaque_fragment:wb,packing:Db,premultiplied_alpha_fragment:Ub,project_vertex:Nb,dithering_fragment:Lb,dithering_pars_fragment:Ob,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:Fb,shadowmap_vertex:Bb,shadowmask_pars_fragment:Hb,skinbase_vertex:Gb,skinning_pars_vertex:Vb,skinning_vertex:Xb,skinnormal_vertex:kb,specularmap_fragment:qb,specularmap_pars_fragment:Yb,tonemapping_fragment:Wb,tonemapping_pars_fragment:jb,transmission_fragment:Zb,transmission_pars_fragment:Kb,uv_pars_fragment:Qb,uv_pars_vertex:Jb,uv_vertex:$b,worldpos_vertex:tA,background_vert:eA,background_frag:nA,backgroundCube_vert:iA,backgroundCube_frag:aA,cube_vert:sA,cube_frag:rA,depth_vert:oA,depth_frag:lA,distance_vert:uA,distance_frag:cA,equirect_vert:fA,equirect_frag:hA,linedashed_vert:dA,linedashed_frag:pA,meshbasic_vert:mA,meshbasic_frag:gA,meshlambert_vert:_A,meshlambert_frag:vA,meshmatcap_vert:xA,meshmatcap_frag:SA,meshnormal_vert:MA,meshnormal_frag:yA,meshphong_vert:EA,meshphong_frag:TA,meshphysical_vert:bA,meshphysical_frag:AA,meshtoon_vert:RA,meshtoon_frag:CA,points_vert:wA,points_frag:DA,shadow_vert:UA,shadow_frag:NA,sprite_vert:LA,sprite_frag:OA},Ft={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ua={basic:{uniforms:jn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:jn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:jn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:jn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:jn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:jn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:jn([Ft.points,Ft.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:jn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:jn([Ft.common,Ft.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:jn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:jn([Ft.sprite,Ft.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:jn([Ft.common,Ft.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:jn([Ft.lights,Ft.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};ua.physical={uniforms:jn([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Cc={r:0,b:0,g:0},Js=new qi,PA=new $e;function IA(o,e,i,r,u,f){const h=new ye(0);let d=u===!0?0:1,m,p,_=null,g=0,v=null;function y(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const U=w.backgroundBlurriness>0;L=e.get(L,U)}return L}function b(w){let L=!1;const U=y(w);U===null?M(h,d):U&&U.isColor&&(M(U,1),L=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(w,L){const U=y(L);U&&(U.isCubeTexture||U.mapping===Xc)?(p===void 0&&(p=new ln(new lr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:So(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,F,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Js.copy(L.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(PA.makeRotationFromEuler(Js)),p.material.toneMapped=Ie.getTransfer(U.colorSpace)!==We,(_!==U||g!==U.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=U,g=U.version,v=o.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new ln(new kc(2,2),new Yi({name:"BackgroundMaterial",uniforms:So(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ie.getTransfer(U.colorSpace)!==We,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||g!==U.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,_=U,g=U.version,v=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,L){w.getRGB(Cc,sS(o)),i.buffers.color.setClear(Cc.r,Cc.g,Cc.b,L,f)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,L=1){h.set(w),d=L,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,M(h,d)},render:b,addToRenderList:D,dispose:S}}function zA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},u=v(null);let f=u,h=!1;function d(O,q,W,Q,Y){let z=!1;const V=g(O,Q,W,q);f!==V&&(f=V,p(f.object)),z=y(O,Q,W,Y),z&&b(O,Q,W,Y),Y!==null&&e.update(Y,o.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,U(O,q,W,Q),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return o.createVertexArray()}function p(O){return o.bindVertexArray(O)}function _(O){return o.deleteVertexArray(O)}function g(O,q,W,Q){const Y=Q.wireframe===!0;let z=r[q.id];z===void 0&&(z={},r[q.id]=z);const V=O.isInstancedMesh===!0?O.id:0;let ft=z[V];ft===void 0&&(ft={},z[V]=ft);let mt=ft[W.id];mt===void 0&&(mt={},ft[W.id]=mt);let yt=mt[Y];return yt===void 0&&(yt=v(m()),mt[Y]=yt),yt}function v(O){const q=[],W=[],Q=[];for(let Y=0;Y<i;Y++)q[Y]=0,W[Y]=0,Q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:W,attributeDivisors:Q,object:O,attributes:{},index:null}}function y(O,q,W,Q){const Y=f.attributes,z=q.attributes;let V=0;const ft=W.getAttributes();for(const mt in ft)if(ft[mt].location>=0){const Tt=Y[mt];let Ut=z[mt];if(Ut===void 0&&(mt==="instanceMatrix"&&O.instanceMatrix&&(Ut=O.instanceMatrix),mt==="instanceColor"&&O.instanceColor&&(Ut=O.instanceColor)),Tt===void 0||Tt.attribute!==Ut||Ut&&Tt.data!==Ut.data)return!0;V++}return f.attributesNum!==V||f.index!==Q}function b(O,q,W,Q){const Y={},z=q.attributes;let V=0;const ft=W.getAttributes();for(const mt in ft)if(ft[mt].location>=0){let Tt=z[mt];Tt===void 0&&(mt==="instanceMatrix"&&O.instanceMatrix&&(Tt=O.instanceMatrix),mt==="instanceColor"&&O.instanceColor&&(Tt=O.instanceColor));const Ut={};Ut.attribute=Tt,Tt&&Tt.data&&(Ut.data=Tt.data),Y[mt]=Ut,V++}f.attributes=Y,f.attributesNum=V,f.index=Q}function D(){const O=f.newAttributes;for(let q=0,W=O.length;q<W;q++)O[q]=0}function M(O){S(O,0)}function S(O,q){const W=f.newAttributes,Q=f.enabledAttributes,Y=f.attributeDivisors;W[O]=1,Q[O]===0&&(o.enableVertexAttribArray(O),Q[O]=1),Y[O]!==q&&(o.vertexAttribDivisor(O,q),Y[O]=q)}function w(){const O=f.newAttributes,q=f.enabledAttributes;for(let W=0,Q=q.length;W<Q;W++)q[W]!==O[W]&&(o.disableVertexAttribArray(W),q[W]=0)}function L(O,q,W,Q,Y,z,V){V===!0?o.vertexAttribIPointer(O,q,W,Y,z):o.vertexAttribPointer(O,q,W,Q,Y,z)}function U(O,q,W,Q){D();const Y=Q.attributes,z=W.getAttributes(),V=q.defaultAttributeValues;for(const ft in z){const mt=z[ft];if(mt.location>=0){let yt=Y[ft];if(yt===void 0&&(ft==="instanceMatrix"&&O.instanceMatrix&&(yt=O.instanceMatrix),ft==="instanceColor"&&O.instanceColor&&(yt=O.instanceColor)),yt!==void 0){const Tt=yt.normalized,Ut=yt.itemSize,$t=e.get(yt);if($t===void 0)continue;const G=$t.buffer,_t=$t.type,et=$t.bytesPerElement,dt=_t===o.INT||_t===o.UNSIGNED_INT||yt.gpuType===Jp;if(yt.isInterleavedBufferAttribute){const St=yt.data,It=St.stride,Dt=yt.offset;if(St.isInstancedInterleavedBuffer){for(let Et=0;Et<mt.locationSize;Et++)S(mt.location+Et,St.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Et=0;Et<mt.locationSize;Et++)M(mt.location+Et);o.bindBuffer(o.ARRAY_BUFFER,G);for(let Et=0;Et<mt.locationSize;Et++)L(mt.location+Et,Ut/mt.locationSize,_t,Tt,It*et,(Dt+Ut/mt.locationSize*Et)*et,dt)}else{if(yt.isInstancedBufferAttribute){for(let St=0;St<mt.locationSize;St++)S(mt.location+St,yt.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let St=0;St<mt.locationSize;St++)M(mt.location+St);o.bindBuffer(o.ARRAY_BUFFER,G);for(let St=0;St<mt.locationSize;St++)L(mt.location+St,Ut/mt.locationSize,_t,Tt,Ut*et,Ut/mt.locationSize*St*et,dt)}}else if(V!==void 0){const Tt=V[ft];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(mt.location,Tt);break;case 3:o.vertexAttrib3fv(mt.location,Tt);break;case 4:o.vertexAttrib4fv(mt.location,Tt);break;default:o.vertexAttrib1fv(mt.location,Tt)}}}}w()}function H(){C();for(const O in r){const q=r[O];for(const W in q){const Q=q[W];for(const Y in Q){const z=Q[Y];for(const V in z)_(z[V].object),delete z[V];delete Q[Y]}}delete r[O]}}function F(O){if(r[O.id]===void 0)return;const q=r[O.id];for(const W in q){const Q=q[W];for(const Y in Q){const z=Q[Y];for(const V in z)_(z[V].object),delete z[V];delete Q[Y]}}delete r[O.id]}function P(O){for(const q in r){const W=r[q];for(const Q in W){const Y=W[Q];if(Y[O.id]===void 0)continue;const z=Y[O.id];for(const V in z)_(z[V].object),delete z[V];delete Y[O.id]}}}function E(O){for(const q in r){const W=r[q],Q=O.isInstancedMesh===!0?O.id:0,Y=W[Q];if(Y!==void 0){for(const z in Y){const V=Y[z];for(const ft in V)_(V[ft].object),delete V[ft];delete Y[z]}delete W[Q],Object.keys(W).length===0&&delete r[q]}}}function C(){it(),h=!0,f!==u&&(f=u,p(f.object))}function it(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:C,resetDefaultState:it,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfObject:E,releaseStatesOfProgram:P,initAttributes:D,enableAttribute:M,disableUnusedAttributes:w}}function FA(o,e,i){let r;function u(p){r=p}function f(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,r,1)}function m(p,_,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,v,0,g);let b=0;for(let D=0;D<g;D++)b+=_[D]*v[D];i.update(b,r,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BA(o,e,i,r){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(P){return!(P!==ki&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const E=P===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_i&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ai&&!E)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ce("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:U,maxSamples:H,samples:F}}function HA(o){const e=this;let i=null,r=0,u=!1,f=!1;const h=new tr,d=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||u;return u=v,r=g.length,y},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,D=g.clipIntersection,M=g.clipShadows,S=o.get(g);if(!u||b===null||b.length===0||f&&!M)f?_(null):p();else{const w=f?0:r,L=w*4;let U=S.clippingState||null;m.value=U,U=_(b,v,L,y);for(let H=0;H!==L;++H)U[H]=i[H];S.clippingState=U,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,v,y,b){const D=g!==null?g.length:0;let M=null;if(D!==0){if(M=m.value,b!==!0||M===null){const S=y+D*4,w=v.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,U=y;L!==D;++L,U+=4)h.copy(g[L]).applyMatrix4(w,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,M}}const ys=4,fx=[.125,.215,.35,.446,.526,.582],nr=20,GA=256,bl=new uS,hx=new ye;let Qd=null,Jd=0,$d=0,tp=!1;const VA=new ut;class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,u=100,f={}){const{size:h=256,position:d=VA}=f;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,u,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=tp,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ar||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:un,minFilter:un,generateMipmaps:!1,type:vi,format:ki,colorSpace:sr,depthBuffer:!1},u=dx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dx(e,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XA(f)),this._blurMaterial=qA(f,e,i),this._ggxMaterial=kA(f,e,i)}return u}_compileMaterial(e){const i=new ln(new ri,e);this._renderer.compile(i,bl)}_sceneToCubeUV(e,i,r,u,f){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(hx),g.toneMapping=fa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(u),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new lr,new eS({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let S=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,S=!0):(M.color.copy(hx),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+_[L],f.y,f.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+_[L],f.z)):(m.up.set(0,p[L],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+_[L]));const H=this._cubeSize;co(u,U*H,L>2?H:0,H,H),g.setRenderTarget(u),S&&g.render(D,m),g.render(e,m)}g.toneMapping=y,g.autoClear=v,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,u=e.mapping===ar||e.mapping===_o;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=px());const f=u?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=f;const d=f.uniforms;d.envMap.value=e;const m=this._cubeSize;co(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,bl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=r}_applyGGXFilter(e,i,r){const u=this._renderer,f=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),v=0+p*1.25,y=g*v,{_lodMax:b}=this,D=this._sizeLods[r],M=3*D*(r>b-ys?r-b+ys:0),S=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,co(f,M,S,3*D,2*D),u.setRenderTarget(f),u.render(d,bl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=b-r,co(e,M,S,3*D,2*D),u.setRenderTarget(e),u.render(d,bl)}_blur(e,i,r,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,u,"latitudinal",f),this._halfBlur(h,e,r,r,u,"longitudinal",f)}_halfBlur(e,i,r,u,f,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[u];g.material=p;const v=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*y):2*Math.PI/(2*nr-1),D=f/b,M=isFinite(f)?1+Math.floor(_*D):nr;M>nr&&ce(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${nr}`);const S=[];let w=0;for(let P=0;P<nr;++P){const E=P/D,C=Math.exp(-E*E/2);S.push(C),P===0?w+=C:P<M&&(w+=2*C)}for(let P=0;P<S.length;P++)S[P]=S[P]/w;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=S,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-r;const U=this._sizeLods[u],H=3*U*(u>L-ys?u-L+ys:0),F=4*(this._cubeSize-U);co(i,H,F,3*U,2*U),m.setRenderTarget(i),m.render(g,bl)}}function XA(o){const e=[],i=[],r=[];let u=o;const f=o-ys+1+fx.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);e.push(d);let m=1/d;h>o-ys?m=fx[h-o+ys-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,D=3,M=2,S=1,w=new Float32Array(D*b*y),L=new Float32Array(M*b*y),U=new Float32Array(S*b*y);for(let F=0;F<y;F++){const P=F%3*2/3-1,E=F>2?0:-1,C=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];w.set(C,D*b*F),L.set(v,M*b*F);const it=[F,F,F,F,F,F];U.set(it,S*b*F)}const H=new ri;H.setAttribute("position",new si(w,D)),H.setAttribute("uv",new si(L,M)),H.setAttribute("faceIndex",new si(U,S)),r.push(new ln(H,null)),u>ys&&u--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function dx(o,e,i){const r=new ha(o,e,i);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function co(o,e,i,r,u){o.viewport.set(e,i,r,u),o.scissor.set(e,i,r,u)}function kA(o,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function qA(o,e,i){const r=new Float32Array(nr),u=new ut(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:qc(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function px(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function mx(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}class fS extends ha{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},u=[r,r,r,r,r,r];this.texture=new iS(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new lr(5,5,5),f=new Yi({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:za});f.uniforms.tEquirect.value=i;const h=new ln(u,f),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=un),new J1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,u);e.setRenderTarget(f)}}function YA(o){let e=new WeakMap,i=new WeakMap,r=null;function u(v,y=!1){return v==null?null:y?h(v):f(v)}function f(v){if(v&&v.isTexture){const y=v.mapping;if(y===bd||y===Ad)if(e.has(v)){const b=e.get(v).texture;return d(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const D=new fS(b.height);return D.fromEquirectangularTexture(o,v),e.set(v,D),v.addEventListener("dispose",p),d(D.texture,v.mapping)}else return null}}return v}function h(v){if(v&&v.isTexture){const y=v.mapping,b=y===bd||y===Ad,D=y===ar||y===_o;if(b||D){let M=i.get(v);const S=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Vc(o)),M=b?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const w=v.image;return b&&w&&w.height>0||D&&w&&m(w)?(r===null&&(r=new Vc(o)),M=b?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",_),M.texture):null}}}return v}function d(v,y){return y===bd?v.mapping=ar:y===Ad&&(v.mapping=_o),v}function m(v){let y=0;const b=6;for(let D=0;D<b;D++)v[D]!==void 0&&y++;return y===b}function p(v){const y=v.target;y.removeEventListener("dispose",p);const b=e.get(y);b!==void 0&&(e.delete(y),b.dispose())}function _(v){const y=v.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:u,dispose:g}}function WA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const u=o.getExtension(r);return e[r]=u,u}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const u=i(r);return u===null&&Bc("WebGLRenderer: "+r+" extension not supported."),u}}}function jA(o,e,i,r){const u={},f=new WeakMap;function h(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",h),delete u[v.id];const y=f.get(v);y&&(e.remove(y),f.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return u[v.id]===!0||(v.addEventListener("dispose",h),u[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,b=g.attributes.position;let D=0;if(b===void 0)return;if(y!==null){const w=y.array;D=y.version;for(let L=0,U=w.length;L<U;L+=3){const H=w[L+0],F=w[L+1],P=w[L+2];v.push(H,F,F,P,P,H)}}else{const w=b.array;D=b.version;for(let L=0,U=w.length/3-1;L<U;L+=3){const H=L+0,F=L+1,P=L+2;v.push(H,F,F,P,P,H)}}const M=new(b.count>=65535?$x:Jx)(v,1);M.version=D;const S=f.get(g);S&&e.remove(S),f.set(g,M)}function _(g){const v=f.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return f.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function ZA(o,e,i){let r;function u(v){r=v}let f,h;function d(v){f=v.type,h=v.bytesPerElement}function m(v,y){o.drawElements(r,y,f,v*h),i.update(y,r,1)}function p(v,y,b){b!==0&&(o.drawElementsInstanced(r,y,f,v*h,b),i.update(y,r,b))}function _(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,f,v,0,b);let M=0;for(let S=0;S<b;S++)M+=y[S];i.update(M,r,1)}function g(v,y,b,D){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<v.length;S++)p(v[S]/h,y[S],D[S]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,f,v,0,D,0,b);let S=0;for(let w=0;w<b;w++)S+=y[w]*D[w];i.update(S,r,1)}}this.setMode=u,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function KA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:ze("WebGLInfo: Unknown draw mode:",h);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:r}}function QA(o,e,i){const r=new WeakMap,u=new rn;function f(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==g){let it=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",it)};var y=it;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),D===!0&&(U=2),M===!0&&(U=3);let H=d.attributes.position.count*U,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*F*4*g),E=new jx(P,H,F,g);E.type=ai,E.needsUpdate=!0;const C=U*4;for(let O=0;O<g;O++){const q=S[O],W=w[O],Q=L[O],Y=H*F*4*O;for(let z=0;z<q.count;z++){const V=z*C;b===!0&&(u.fromBufferAttribute(q,z),P[Y+V+0]=u.x,P[Y+V+1]=u.y,P[Y+V+2]=u.z,P[Y+V+3]=0),D===!0&&(u.fromBufferAttribute(W,z),P[Y+V+4]=u.x,P[Y+V+5]=u.y,P[Y+V+6]=u.z,P[Y+V+7]=0),M===!0&&(u.fromBufferAttribute(Q,z),P[Y+V+8]=u.x,P[Y+V+9]=u.y,P[Y+V+10]=u.z,P[Y+V+11]=Q.itemSize===4?u.w:1)}}v={count:g,texture:E,size:new Oe(H,F)},r.set(d,v),d.addEventListener("dispose",it)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const D=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function JA(o,e,i,r,u){let f=new WeakMap;function h(p){const _=u.render.frame,g=p.geometry,v=e.get(p,g);if(f.get(v)!==_&&(e.update(v),f.set(v,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;f.get(y)!==_&&(y.update(),f.set(y,_))}return v}function d(){f=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const $A={[Ox]:"LINEAR_TONE_MAPPING",[Px]:"REINHARD_TONE_MAPPING",[Ix]:"CINEON_TONE_MAPPING",[Qp]:"ACES_FILMIC_TONE_MAPPING",[Fx]:"AGX_TONE_MAPPING",[Bx]:"NEUTRAL_TONE_MAPPING",[zx]:"CUSTOM_TONE_MAPPING"};function tR(o,e,i,r,u){const f=new ha(e,i,{type:o,depthBuffer:r,stencilBuffer:u}),h=new ha(e,i,{type:vi,depthBuffer:!1,stencilBuffer:!1}),d=new ri;d.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new An([0,2,0,0,2,0],2));const m=new F1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ln(d,m),_=new uS(-1,1,1,-1,0,1);let g=null,v=null,y=!1,b,D=null,M=[],S=!1;this.setSize=function(w,L){f.setSize(w,L),h.setSize(w,L);for(let U=0;U<M.length;U++){const H=M[U];H.setSize&&H.setSize(w,L)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const L=f.width,U=f.height;for(let H=0;H<M.length;H++){const F=M[H];F.setSize&&F.setSize(L,U)}},this.begin=function(w,L){if(y||w.toneMapping===fa&&M.length===0)return!1;if(D=L,L!==null){const U=L.width,H=L.height;(f.width!==U||f.height!==H)&&this.setSize(U,H)}return S===!1&&w.setRenderTarget(f),b=w.toneMapping,w.toneMapping=fa,!0},this.hasRenderPass=function(){return S},this.end=function(w,L){w.toneMapping=b,y=!0;let U=f,H=h;for(let F=0;F<M.length;F++){const P=M[F];if(P.enabled!==!1&&(P.render(w,H,U,L),P.needsSwap!==!1)){const E=U;U=H,H=E}}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,m.defines={},Ie.getTransfer(g)===We&&(m.defines.SRGB_TRANSFER="");const F=$A[v];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(D),w.render(p,_),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){f.dispose(),h.dispose(),d.dispose(),m.dispose()}}const hS=new Hn,Yp=new Il(1,1),dS=new jx,pS=new c1,mS=new iS,gx=[],_x=[],vx=new Float32Array(16),xx=new Float32Array(9),Sx=new Float32Array(4);function bo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const u=e*i;let f=gx[u];if(f===void 0&&(f=new Float32Array(u),gx[u]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Yc(o,e){let i=_x[e];i===void 0&&(i=new Int32Array(e),_x[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function eR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function nR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function iR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function aR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function sR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;Sx.set(r),o.uniformMatrix2fv(this.addr,!1,Sx),xn(i,r)}}function rR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;xx.set(r),o.uniformMatrix3fv(this.addr,!1,xx),xn(i,r)}}function oR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;vx.set(r),o.uniformMatrix4fv(this.addr,!1,vx),xn(i,r)}}function lR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function uR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function cR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function fR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function hR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function dR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function pR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function gR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Yp.compareFunction=i.isReversedDepthBuffer()?om:rm,f=Yp):f=hS,i.setTexture2D(e||f,u)}function _R(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture3D(e||pS,u)}function vR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTextureCube(e||mS,u)}function xR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture2DArray(e||dS,u)}function SR(o){switch(o){case 5126:return eR;case 35664:return nR;case 35665:return iR;case 35666:return aR;case 35674:return sR;case 35675:return rR;case 35676:return oR;case 5124:case 35670:return lR;case 35667:case 35671:return uR;case 35668:case 35672:return cR;case 35669:case 35673:return fR;case 5125:return hR;case 36294:return dR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return xR}}function MR(o,e){o.uniform1fv(this.addr,e)}function yR(o,e){const i=bo(e,this.size,2);o.uniform2fv(this.addr,i)}function ER(o,e){const i=bo(e,this.size,3);o.uniform3fv(this.addr,i)}function TR(o,e){const i=bo(e,this.size,4);o.uniform4fv(this.addr,i)}function bR(o,e){const i=bo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function AR(o,e){const i=bo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function RR(o,e){const i=bo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function CR(o,e){o.uniform1iv(this.addr,e)}function wR(o,e){o.uniform2iv(this.addr,e)}function DR(o,e){o.uniform3iv(this.addr,e)}function UR(o,e){o.uniform4iv(this.addr,e)}function NR(o,e){o.uniform1uiv(this.addr,e)}function LR(o,e){o.uniform2uiv(this.addr,e)}function OR(o,e){o.uniform3uiv(this.addr,e)}function PR(o,e){o.uniform4uiv(this.addr,e)}function IR(o,e,i){const r=this.cache,u=e.length,f=Yc(i,u);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));let h;this.type===o.SAMPLER_2D_SHADOW?h=Yp:h=hS;for(let d=0;d!==u;++d)i.setTexture2D(e[d]||h,f[d])}function zR(o,e,i){const r=this.cache,u=e.length,f=Yc(i,u);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));for(let h=0;h!==u;++h)i.setTexture3D(e[h]||pS,f[h])}function FR(o,e,i){const r=this.cache,u=e.length,f=Yc(i,u);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));for(let h=0;h!==u;++h)i.setTextureCube(e[h]||mS,f[h])}function BR(o,e,i){const r=this.cache,u=e.length,f=Yc(i,u);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));for(let h=0;h!==u;++h)i.setTexture2DArray(e[h]||dS,f[h])}function HR(o){switch(o){case 5126:return MR;case 35664:return yR;case 35665:return ER;case 35666:return TR;case 35674:return bR;case 35675:return AR;case 35676:return RR;case 5124:case 35670:return CR;case 35667:case 35671:return wR;case 35668:case 35672:return DR;case 35669:case 35673:return UR;case 5125:return NR;case 36294:return LR;case 36295:return OR;case 36296:return PR;case 35678:case 36198:case 36298:case 36306:case 35682:return IR;case 35679:case 36299:case 36307:return zR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return BR}}class GR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=SR(i.type)}}class VR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=HR(i.type)}}class XR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,i[d.id],r)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function Mx(o,e){o.seq.push(e),o.map[e.id]=e}function kR(o,e,i){const r=o.name,u=r.length;for(ep.lastIndex=0;;){const f=ep.exec(r),h=ep.lastIndex;let d=f[1];const m=f[2]==="]",p=f[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===u){Mx(i,p===void 0?new GR(d,o,e):new VR(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new XR(d),Mx(i,g)),i=g}}}class Pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);kR(d,m,this)}const u=[],f=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(h):f.push(h);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,r,u){const f=this.map[i];f!==void 0&&f.setValue(e,r,u)}setOptional(e,i,r){const u=i[r];u!==void 0&&this.setValue(e,r,u)}static upload(e,i,r,u){for(let f=0,h=i.length;f!==h;++f){const d=i[f],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,u)}}static seqWithValue(e,i){const r=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in i&&r.push(h)}return r}}function yx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const qR=37297;let YR=0;function WR(o,e){const i=o.split(`
`),r=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=u;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Ex=new xe;function jR(o){Ie._getMatrix(Ex,Ie.workingColorSpace,o);const e=`mat3( ${Ex.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(o)){case zc:return[e,"LinearTransferOETF"];case We:return[e,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Tx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+WR(o.getShaderSource(e),d)}else return f}function ZR(o,e){const i=jR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const KR={[Ox]:"Linear",[Px]:"Reinhard",[Ix]:"Cineon",[Qp]:"ACESFilmic",[Fx]:"AgX",[Bx]:"Neutral",[zx]:"Custom"};function QR(o,e){const i=KR[e];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new ut;function JR(){Ie.getLuminanceCoefficients(wc);const o=wc.x.toFixed(4),e=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $R(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function t3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function e3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<r;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function wl(o){return o!==""}function bx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ax(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(o){return o.replace(n3,a3)}const i3=new Map;function a3(o,e){let i=Se[e];if(i===void 0){const r=i3.get(e);if(r!==void 0)i=Se[r],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wp(i)}const s3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(o){return o.replace(s3,r3)}function r3(o,e,i,r){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function Cx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const o3={[Dc]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function l3(o){return o3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u3={[ar]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function c3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":u3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const f3={[_o]:"ENVMAP_MODE_REFRACTION"};function h3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":f3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d3={[Kp]:"ENVMAP_BLENDING_MULTIPLY",[CE]:"ENVMAP_BLENDING_MIX",[wE]:"ENVMAP_BLENDING_ADD"};function p3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":d3[o.combine]||"ENVMAP_BLENDING_NONE"}function m3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function g3(o,e,i,r){const u=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=l3(i),p=c3(i),_=h3(i),g=p3(i),v=m3(i),y=$R(i),b=t3(f),D=u.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wl).join(`
`),S.length>0&&(S+=`
`)):(M=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),S=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?Se.tonemapping_pars_fragment:"",i.toneMapping!==fa?QR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,ZR("linearToOutputTexel",i.outputColorSpace),JR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wl).join(`
`)),h=Wp(h),h=bx(h,i),h=Ax(h,i),d=Wp(d),d=bx(d,i),d=Ax(d,i),h=Rx(h),d=Rx(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=w+M+h,U=w+S+d,H=yx(u,u.VERTEX_SHADER,L),F=yx(u,u.FRAGMENT_SHADER,U);u.attachShader(D,H),u.attachShader(D,F),i.index0AttributeName!==void 0?u.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(D,0,"position"),u.linkProgram(D);function P(O){if(o.debug.checkShaderErrors){const q=u.getProgramInfoLog(D)||"",W=u.getShaderInfoLog(H)||"",Q=u.getShaderInfoLog(F)||"",Y=q.trim(),z=W.trim(),V=Q.trim();let ft=!0,mt=!0;if(u.getProgramParameter(D,u.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,D,H,F);else{const yt=Tx(u,H,"vertex"),Tt=Tx(u,F,"fragment");ze("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(D,u.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Y+`
`+yt+`
`+Tt)}else Y!==""?ce("WebGLProgram: Program Info Log:",Y):(z===""||V==="")&&(mt=!1);mt&&(O.diagnostics={runnable:ft,programLog:Y,vertexShader:{log:z,prefix:M},fragmentShader:{log:V,prefix:S}})}u.deleteShader(H),u.deleteShader(F),E=new Pc(u,D),C=e3(u,D)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let it=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return it===!1&&(it=u.getProgramParameter(D,qR)),it},this.destroy=function(){r.releaseStatesOfProgram(this),u.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YR++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=H,this.fragmentShader=F,this}let _3=0;class v3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new x3(e),i.set(e,r)),r}}class x3{constructor(e){this.id=_3++,this.code=e,this.usedTimes=0}}function S3(o,e,i,r,u,f){const h=new Zx,d=new v3,m=new Set,p=[],_=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return m.add(E),E===0?"uv":`uv${E}`}function D(E,C,it,O,q){const W=O.fog,Q=q.geometry,Y=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,V=e.get(E.envMap||Y,z),ft=V&&V.mapping===Xc?V.image.height:null,mt=y[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&ce("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=yt!==void 0?yt.length:0;let Ut=0;Q.morphAttributes.position!==void 0&&(Ut=1),Q.morphAttributes.normal!==void 0&&(Ut=2),Q.morphAttributes.color!==void 0&&(Ut=3);let $t,G,_t,et;if(mt){const ae=ua[mt];$t=ae.vertexShader,G=ae.fragmentShader}else $t=E.vertexShader,G=E.fragmentShader,d.update(E),_t=d.getVertexShaderID(E),et=d.getFragmentShaderID(E);const dt=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),It=q.isInstancedMesh===!0,Dt=q.isBatchedMesh===!0,Et=!!E.map,Xt=!!E.matcap,le=!!V,Re=!!E.aoMap,Te=!!E.lightMap,ne=!!E.bumpMap,ue=!!E.normalMap,B=!!E.displacementMap,De=!!E.emissiveMap,oe=!!E.metalnessMap,ge=!!E.roughnessMap,Bt=E.anisotropy>0,N=E.clearcoat>0,T=E.dispersion>0,j=E.iridescence>0,gt=E.sheen>0,Mt=E.transmission>0,pt=Bt&&!!E.anisotropyMap,Vt=N&&!!E.clearcoatMap,At=N&&!!E.clearcoatNormalMap,Zt=N&&!!E.clearcoatRoughnessMap,ie=j&&!!E.iridescenceMap,bt=j&&!!E.iridescenceThicknessMap,Rt=gt&&!!E.sheenColorMap,kt=gt&&!!E.sheenRoughnessMap,Yt=!!E.specularMap,Ht=!!E.specularColorMap,me=!!E.specularIntensityMap,k=Mt&&!!E.transmissionMap,Lt=Mt&&!!E.thicknessMap,Ct=!!E.gradientMap,K=!!E.alphaMap,rt=E.alphaTest>0,at=!!E.alphaHash,wt=!!E.extensions;let Kt=fa;E.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Kt=o.toneMapping);const fe={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:G,defines:E.defines,customVertexShaderID:_t,customFragmentShaderID:et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Dt,batchingColor:Dt&&q._colorsTexture!==null,instancing:It,instancingColor:It&&q.instanceColor!==null,instancingMorph:It&&q.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:sr,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:Xt,envMap:le,envMapMode:le&&V.mapping,envMapCubeUVHeight:ft,aoMap:Re,lightMap:Te,bumpMap:ne,normalMap:ue,displacementMap:B,emissiveMap:De,normalMapObjectSpace:ue&&E.normalMapType===NE,normalMapTangentSpace:ue&&E.normalMapType===sm,metalnessMap:oe,roughnessMap:ge,anisotropy:Bt,anisotropyMap:pt,clearcoat:N,clearcoatMap:Vt,clearcoatNormalMap:At,clearcoatRoughnessMap:Zt,dispersion:T,iridescence:j,iridescenceMap:ie,iridescenceThicknessMap:bt,sheen:gt,sheenColorMap:Rt,sheenRoughnessMap:kt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:me,transmission:Mt,transmissionMap:k,thicknessMap:Lt,gradientMap:Ct,opaque:E.transparent===!1&&E.blending===po&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:rt,alphaHash:at,combine:E.combine,mapUv:Et&&b(E.map.channel),aoMapUv:Re&&b(E.aoMap.channel),lightMapUv:Te&&b(E.lightMap.channel),bumpMapUv:ne&&b(E.bumpMap.channel),normalMapUv:ue&&b(E.normalMap.channel),displacementMapUv:B&&b(E.displacementMap.channel),emissiveMapUv:De&&b(E.emissiveMap.channel),metalnessMapUv:oe&&b(E.metalnessMap.channel),roughnessMapUv:ge&&b(E.roughnessMap.channel),anisotropyMapUv:pt&&b(E.anisotropyMap.channel),clearcoatMapUv:Vt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:kt&&b(E.sheenRoughnessMap.channel),specularMapUv:Yt&&b(E.specularMap.channel),specularColorMapUv:Ht&&b(E.specularColorMap.channel),specularIntensityMapUv:me&&b(E.specularIntensityMap.channel),transmissionMapUv:k&&b(E.transmissionMap.channel),thicknessMapUv:Lt&&b(E.thicknessMap.channel),alphaMapUv:K&&b(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ue||Bt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(Et||K),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&ue===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:St,skinning:q.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ut,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&it.length>0,shadowMapType:o.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&Ie.getTransfer(E.map.colorSpace)===We,decodeVideoTextureEmissive:De&&E.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(E.emissiveMap.colorSpace)===We,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pa,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:wt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&E.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=m.has(1),fe.vertexUv2s=m.has(2),fe.vertexUv3s=m.has(3),m.clear(),fe}function M(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const it in E.defines)C.push(it),C.push(E.defines[it]);return E.isRawShaderMaterial===!1&&(S(C,E),w(C,E),C.push(o.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function S(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function w(E,C){h.disableAll(),C.instancing&&h.enable(0),C.instancingColor&&h.enable(1),C.instancingMorph&&h.enable(2),C.matcap&&h.enable(3),C.envMap&&h.enable(4),C.normalMapObjectSpace&&h.enable(5),C.normalMapTangentSpace&&h.enable(6),C.clearcoat&&h.enable(7),C.iridescence&&h.enable(8),C.alphaTest&&h.enable(9),C.vertexColors&&h.enable(10),C.vertexAlphas&&h.enable(11),C.vertexUv1s&&h.enable(12),C.vertexUv2s&&h.enable(13),C.vertexUv3s&&h.enable(14),C.vertexTangents&&h.enable(15),C.anisotropy&&h.enable(16),C.alphaHash&&h.enable(17),C.batching&&h.enable(18),C.dispersion&&h.enable(19),C.batchingColor&&h.enable(20),C.gradientMap&&h.enable(21),E.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),E.push(h.mask)}function L(E){const C=y[E.type];let it;if(C){const O=ua[C];it=P1.clone(O.uniforms)}else it=E.uniforms;return it}function U(E,C){let it=_.get(C);return it!==void 0?++it.usedTimes:(it=new g3(o,C,E,u),p.push(it),_.set(C,it)),it}function H(E){if(--E.usedTimes===0){const C=p.indexOf(E);p[C]=p[p.length-1],p.pop(),_.delete(E.cacheKey),E.destroy()}}function F(E){d.remove(E)}function P(){d.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:L,acquireProgram:U,releaseProgram:H,releaseShaderCache:F,programs:p,dispose:P}}function M3(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function u(h,d,m){o.get(h)[d]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:u,dispose:f}}function y3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function wx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Dx(){const o=[];let e=0;const i=[],r=[],u=[];function f(){e=0,i.length=0,r.length=0,u.length=0}function h(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function d(v,y,b,D,M,S){let w=o[e];return w===void 0?(w={id:v.id,object:v,geometry:y,material:b,materialVariant:h(v),groupOrder:D,renderOrder:v.renderOrder,z:M,group:S},o[e]=w):(w.id=v.id,w.object=v,w.geometry=y,w.material=b,w.materialVariant=h(v),w.groupOrder=D,w.renderOrder=v.renderOrder,w.z=M,w.group=S),e++,w}function m(v,y,b,D,M,S){const w=d(v,y,b,D,M,S);b.transmission>0?r.push(w):b.transparent===!0?u.push(w):i.push(w)}function p(v,y,b,D,M,S){const w=d(v,y,b,D,M,S);b.transmission>0?r.unshift(w):b.transparent===!0?u.unshift(w):i.unshift(w)}function _(v,y){i.length>1&&i.sort(v||y3),r.length>1&&r.sort(y||wx),u.length>1&&u.sort(y||wx)}function g(){for(let v=e,y=o.length;v<y;v++){const b=o[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:u,init:f,push:m,unshift:p,finish:g,sort:_}}function E3(){let o=new WeakMap;function e(r,u){const f=o.get(r);let h;return f===void 0?(h=new Dx,o.set(r,[h])):u>=f.length?(h=new Dx,f.push(h)):h=f[u],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function T3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ut,color:new ye};break;case"SpotLight":i={position:new ut,direction:new ut,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[e.id]=i,i}}}function b3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let A3=0;function R3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function C3(o){const e=new T3,i=b3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ut);const u=new ut,f=new $e,h=new $e;function d(p){let _=0,g=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,b=0,D=0,M=0,S=0,w=0,L=0,U=0,H=0,F=0,P=0;p.sort(R3);for(let C=0,it=p.length;C<it;C++){const O=p[C],q=O.color,W=O.intensity,Q=O.distance;let Y=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===vo?Y=O.shadow.map.texture:Y=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)_+=q.r*W,g+=q.g*W,v+=q.b*W;else if(O.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(O.sh.coefficients[z],W);P++}else if(O.isDirectionalLight){const z=e.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const V=O.shadow,ft=i.get(O);ft.shadowIntensity=V.intensity,ft.shadowBias=V.bias,ft.shadowNormalBias=V.normalBias,ft.shadowRadius=V.radius,ft.shadowMapSize=V.mapSize,r.directionalShadow[y]=ft,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=O.shadow.matrix,w++}r.directional[y]=z,y++}else if(O.isSpotLight){const z=e.get(O);z.position.setFromMatrixPosition(O.matrixWorld),z.color.copy(q).multiplyScalar(W),z.distance=Q,z.coneCos=Math.cos(O.angle),z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),z.decay=O.decay,r.spot[D]=z;const V=O.shadow;if(O.map&&(r.spotLightMap[H]=O.map,H++,V.updateMatrices(O),O.castShadow&&F++),r.spotLightMatrix[D]=V.matrix,O.castShadow){const ft=i.get(O);ft.shadowIntensity=V.intensity,ft.shadowBias=V.bias,ft.shadowNormalBias=V.normalBias,ft.shadowRadius=V.radius,ft.shadowMapSize=V.mapSize,r.spotShadow[D]=ft,r.spotShadowMap[D]=Y,U++}D++}else if(O.isRectAreaLight){const z=e.get(O);z.color.copy(q).multiplyScalar(W),z.halfWidth.set(O.width*.5,0,0),z.halfHeight.set(0,O.height*.5,0),r.rectArea[M]=z,M++}else if(O.isPointLight){const z=e.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity),z.distance=O.distance,z.decay=O.decay,O.castShadow){const V=O.shadow,ft=i.get(O);ft.shadowIntensity=V.intensity,ft.shadowBias=V.bias,ft.shadowNormalBias=V.normalBias,ft.shadowRadius=V.radius,ft.shadowMapSize=V.mapSize,ft.shadowCameraNear=V.camera.near,ft.shadowCameraFar=V.camera.far,r.pointShadow[b]=ft,r.pointShadowMap[b]=Y,r.pointShadowMatrix[b]=O.shadow.matrix,L++}r.point[b]=z,b++}else if(O.isHemisphereLight){const z=e.get(O);z.skyColor.copy(O.color).multiplyScalar(W),z.groundColor.copy(O.groundColor).multiplyScalar(W),r.hemi[S]=z,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=v;const E=r.hash;(E.directionalLength!==y||E.pointLength!==b||E.spotLength!==D||E.rectAreaLength!==M||E.hemiLength!==S||E.numDirectionalShadows!==w||E.numPointShadows!==L||E.numSpotShadows!==U||E.numSpotMaps!==H||E.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=D,r.rectArea.length=M,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=U+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,E.directionalLength=y,E.pointLength=b,E.spotLength=D,E.rectAreaLength=M,E.hemiLength=S,E.numDirectionalShadows=w,E.numPointShadows=L,E.numSpotShadows=U,E.numSpotMaps=H,E.numLightProbes=P,r.version=A3++)}function m(p,_){let g=0,v=0,y=0,b=0,D=0;const M=_.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const L=p[S];if(L.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(M),g++}else if(L.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),h.identity(),f.copy(L.matrixWorld),f.premultiply(M),h.extractRotation(f),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const U=r.hemi[D];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(M),D++}}}return{setup:d,setupView:m,state:r}}function Ux(o){const e=new C3(o),i=[],r=[];function u(_){p.camera=_,i.length=0,r.length=0}function f(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:p,setupLights:d,setupLightsView:m,pushLight:f,pushShadow:h}}function w3(o){let e=new WeakMap;function i(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new Ux(o),e.set(u,[d])):f>=h.length?(d=new Ux(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const D3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N3=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],L3=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],Nx=new $e,Al=new ut,np=new ut;function O3(o,e,i){let r=new fm;const u=new Oe,f=new Oe,h=new rn,d=new G1,m=new V1,p={},_=i.maxTextureSize,g={[Es]:Zn,[Zn]:Es,[Pa]:Pa},v=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:D3,fragmentShader:U3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new ri;b.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ln(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let S=this.type;this.render=function(F,P,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;this.type===Lx&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dc);const C=o.getRenderTarget(),it=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),q=o.state;q.setBlending(za),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=S!==this.type;W&&P.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(Y=>Y.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,Y=F.length;Q<Y;Q++){const z=F[Q],V=z.shadow;if(V===void 0){ce("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;u.copy(V.mapSize);const ft=V.getFrameExtents();u.multiply(ft),f.copy(V.mapSize),(u.x>_||u.y>_)&&(u.x>_&&(f.x=Math.floor(_/ft.x),u.x=f.x*ft.x,V.mapSize.x=f.x),u.y>_&&(f.y=Math.floor(_/ft.y),u.y=f.y*ft.y,V.mapSize.y=f.y));const mt=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=mt,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Rl){if(z.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ha(u.x,u.y,{format:vo,type:vi,minFilter:un,magFilter:un,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new Il(u.x,u.y,ai),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Ba,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On}else z.isPointLight?(V.map=new fS(u.x),V.map.depthTexture=new L1(u.x,da)):(V.map=new ha(u.x,u.y),V.map.depthTexture=new Il(u.x,u.y,da)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Ba,this.type===Dc?(V.map.depthTexture.compareFunction=mt?om:rm,V.map.depthTexture.minFilter=un,V.map.depthTexture.magFilter=un):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On);V.camera.updateProjectionMatrix()}const yt=V.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<yt;Tt++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,Tt),o.clear();else{Tt===0&&(o.setRenderTarget(V.map),o.clear());const Ut=V.getViewport(Tt);h.set(f.x*Ut.x,f.y*Ut.y,f.x*Ut.z,f.y*Ut.w),q.viewport(h)}if(z.isPointLight){const Ut=V.camera,$t=V.matrix,G=z.distance||Ut.far;G!==Ut.far&&(Ut.far=G,Ut.updateProjectionMatrix()),Al.setFromMatrixPosition(z.matrixWorld),Ut.position.copy(Al),np.copy(Ut.position),np.add(N3[Tt]),Ut.up.copy(L3[Tt]),Ut.lookAt(np),Ut.updateMatrixWorld(),$t.makeTranslation(-Al.x,-Al.y,-Al.z),Nx.multiplyMatrices(Ut.projectionMatrix,Ut.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Nx,Ut.coordinateSystem,Ut.reversedDepth)}else V.updateMatrices(z);r=V.getFrustum(),U(P,E,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===Rl&&w(V,E),V.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(C,it,O)};function w(F,P){const E=e.update(D);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ha(u.x,u.y,{format:vo,type:vi})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,E,v,D,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,E,y,D,null)}function L(F,P,E,C){let it=null;const O=E.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)it=O;else if(it=E.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const q=it.uuid,W=P.uuid;let Q=p[q];Q===void 0&&(Q={},p[q]=Q);let Y=Q[W];Y===void 0&&(Y=it.clone(),Q[W]=Y,P.addEventListener("dispose",H)),it=Y}if(it.visible=P.visible,it.wireframe=P.wireframe,C===Rl?it.side=P.shadowSide!==null?P.shadowSide:P.side:it.side=P.shadowSide!==null?P.shadowSide:g[P.side],it.alphaMap=P.alphaMap,it.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,it.map=P.map,it.clipShadows=P.clipShadows,it.clippingPlanes=P.clippingPlanes,it.clipIntersection=P.clipIntersection,it.displacementMap=P.displacementMap,it.displacementScale=P.displacementScale,it.displacementBias=P.displacementBias,it.wireframeLinewidth=P.wireframeLinewidth,it.linewidth=P.linewidth,E.isPointLight===!0&&it.isMeshDistanceMaterial===!0){const q=o.properties.get(it);q.light=E}return it}function U(F,P,E,C,it){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&it===Rl)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,F.matrixWorld);const W=e.update(F),Q=F.material;if(Array.isArray(Q)){const Y=W.groups;for(let z=0,V=Y.length;z<V;z++){const ft=Y[z],mt=Q[ft.materialIndex];if(mt&&mt.visible){const yt=L(F,mt,C,it);F.onBeforeShadow(o,F,P,E,W,yt,ft),o.renderBufferDirect(E,null,W,yt,F,ft),F.onAfterShadow(o,F,P,E,W,yt,ft)}}}else if(Q.visible){const Y=L(F,Q,C,it);F.onBeforeShadow(o,F,P,E,W,Y,null),o.renderBufferDirect(E,null,W,Y,F,null),F.onAfterShadow(o,F,P,E,W,Y,null)}}const q=F.children;for(let W=0,Q=q.length;W<Q;W++)U(q[W],P,E,C,it)}function H(F){F.target.removeEventListener("dispose",H);for(const E in p){const C=p[E],it=F.target.uuid;it in C&&(C[it].dispose(),delete C[it])}}}function P3(o,e){function i(){let k=!1;const Lt=new rn;let Ct=null;const K=new rn(0,0,0,0);return{setMask:function(rt){Ct!==rt&&!k&&(o.colorMask(rt,rt,rt,rt),Ct=rt)},setLocked:function(rt){k=rt},setClear:function(rt,at,wt,Kt,fe){fe===!0&&(rt*=Kt,at*=Kt,wt*=Kt),Lt.set(rt,at,wt,Kt),K.equals(Lt)===!1&&(o.clearColor(rt,at,wt,Kt),K.copy(Lt))},reset:function(){k=!1,Ct=null,K.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,Ct=null,K=null,rt=null;return{setReversed:function(at){if(Lt!==at){const wt=e.get("EXT_clip_control");at?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Lt=at;const Kt=rt;rt=null,this.setClear(Kt)}},getReversed:function(){return Lt},setTest:function(at){at?dt(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(at){Ct!==at&&!k&&(o.depthMask(at),Ct=at)},setFunc:function(at){if(Lt&&(at=VE[at]),K!==at){switch(at){case sp:o.depthFunc(o.NEVER);break;case rp:o.depthFunc(o.ALWAYS);break;case op:o.depthFunc(o.LESS);break;case go:o.depthFunc(o.LEQUAL);break;case lp:o.depthFunc(o.EQUAL);break;case up:o.depthFunc(o.GEQUAL);break;case cp:o.depthFunc(o.GREATER);break;case fp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}K=at}},setLocked:function(at){k=at},setClear:function(at){rt!==at&&(rt=at,Lt&&(at=1-at),o.clearDepth(at))},reset:function(){k=!1,Ct=null,K=null,rt=null,Lt=!1}}}function u(){let k=!1,Lt=null,Ct=null,K=null,rt=null,at=null,wt=null,Kt=null,fe=null;return{setTest:function(ae){k||(ae?dt(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(ae){Lt!==ae&&!k&&(o.stencilMask(ae),Lt=ae)},setFunc:function(ae,Be,Ze){(Ct!==ae||K!==Be||rt!==Ze)&&(o.stencilFunc(ae,Be,Ze),Ct=ae,K=Be,rt=Ze)},setOp:function(ae,Be,Ze){(at!==ae||wt!==Be||Kt!==Ze)&&(o.stencilOp(ae,Be,Ze),at=ae,wt=Be,Kt=Ze)},setLocked:function(ae){k=ae},setClear:function(ae){fe!==ae&&(o.clearStencil(ae),fe=ae)},reset:function(){k=!1,Lt=null,Ct=null,K=null,rt=null,at=null,wt=null,Kt=null,fe=null}}}const f=new i,h=new r,d=new u,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],b=null,D=!1,M=null,S=null,w=null,L=null,U=null,H=null,F=null,P=new ye(0,0,0),E=0,C=!1,it=null,O=null,q=null,W=null,Q=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const ft=o.getParameter(o.VERSION);ft.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ft)[1]),z=V>=1):ft.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),z=V>=2);let mt=null,yt={};const Tt=o.getParameter(o.SCISSOR_BOX),Ut=o.getParameter(o.VIEWPORT),$t=new rn().fromArray(Tt),G=new rn().fromArray(Ut);function _t(k,Lt,Ct,K){const rt=new Uint8Array(4),at=o.createTexture();o.bindTexture(k,at),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let wt=0;wt<Ct;wt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,K,0,o.RGBA,o.UNSIGNED_BYTE,rt):o.texImage2D(Lt+wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,rt);return at}const et={};et[o.TEXTURE_2D]=_t(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=_t(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=_t(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=_t(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(o.DEPTH_TEST),h.setFunc(go),ne(!1),ue(wv),dt(o.CULL_FACE),Re(za);function dt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function St(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function It(k,Lt){return g[k]!==Lt?(o.bindFramebuffer(k,Lt),g[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Dt(k,Lt){let Ct=y,K=!1;if(k){Ct=v.get(Lt),Ct===void 0&&(Ct=[],v.set(Lt,Ct));const rt=k.textures;if(Ct.length!==rt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let at=0,wt=rt.length;at<wt;at++)Ct[at]=o.COLOR_ATTACHMENT0+at;Ct.length=rt.length,K=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,K=!0);K&&o.drawBuffers(Ct)}function Et(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Xt={[er]:o.FUNC_ADD,[fE]:o.FUNC_SUBTRACT,[hE]:o.FUNC_REVERSE_SUBTRACT};Xt[dE]=o.MIN,Xt[pE]=o.MAX;const le={[mE]:o.ZERO,[gE]:o.ONE,[_E]:o.SRC_COLOR,[ip]:o.SRC_ALPHA,[EE]:o.SRC_ALPHA_SATURATE,[ME]:o.DST_COLOR,[xE]:o.DST_ALPHA,[vE]:o.ONE_MINUS_SRC_COLOR,[ap]:o.ONE_MINUS_SRC_ALPHA,[yE]:o.ONE_MINUS_DST_COLOR,[SE]:o.ONE_MINUS_DST_ALPHA,[TE]:o.CONSTANT_COLOR,[bE]:o.ONE_MINUS_CONSTANT_COLOR,[AE]:o.CONSTANT_ALPHA,[RE]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(k,Lt,Ct,K,rt,at,wt,Kt,fe,ae){if(k===za){D===!0&&(St(o.BLEND),D=!1);return}if(D===!1&&(dt(o.BLEND),D=!0),k!==cE){if(k!==M||ae!==C){if((S!==er||U!==er)&&(o.blendEquation(o.FUNC_ADD),S=er,U=er),ae)switch(k){case po:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dv:o.blendFunc(o.ONE,o.ONE);break;case Uv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Nv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ze("WebGLState: Invalid blending: ",k);break}else switch(k){case po:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Uv:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nv:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",k);break}w=null,L=null,H=null,F=null,P.set(0,0,0),E=0,M=k,C=ae}return}rt=rt||Lt,at=at||Ct,wt=wt||K,(Lt!==S||rt!==U)&&(o.blendEquationSeparate(Xt[Lt],Xt[rt]),S=Lt,U=rt),(Ct!==w||K!==L||at!==H||wt!==F)&&(o.blendFuncSeparate(le[Ct],le[K],le[at],le[wt]),w=Ct,L=K,H=at,F=wt),(Kt.equals(P)===!1||fe!==E)&&(o.blendColor(Kt.r,Kt.g,Kt.b,fe),P.copy(Kt),E=fe),M=k,C=!1}function Te(k,Lt){k.side===Pa?St(o.CULL_FACE):dt(o.CULL_FACE);let Ct=k.side===Zn;Lt&&(Ct=!Ct),ne(Ct),k.blending===po&&k.transparent===!1?Re(za):Re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const K=k.stencilWrite;d.setTest(K),K&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(k){it!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),it=k)}function ue(k){k!==lE?(dt(o.CULL_FACE),k!==O&&(k===wv?o.cullFace(o.BACK):k===uE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),O=k}function B(k){k!==q&&(z&&o.lineWidth(k),q=k)}function De(k,Lt,Ct){k?(dt(o.POLYGON_OFFSET_FILL),(W!==Lt||Q!==Ct)&&(W=Lt,Q=Ct,h.getReversed()&&(Lt=-Lt),o.polygonOffset(Lt,Ct))):St(o.POLYGON_OFFSET_FILL)}function oe(k){k?dt(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function ge(k){k===void 0&&(k=o.TEXTURE0+Y-1),mt!==k&&(o.activeTexture(k),mt=k)}function Bt(k,Lt,Ct){Ct===void 0&&(mt===null?Ct=o.TEXTURE0+Y-1:Ct=mt);let K=yt[Ct];K===void 0&&(K={type:void 0,texture:void 0},yt[Ct]=K),(K.type!==k||K.texture!==Lt)&&(mt!==Ct&&(o.activeTexture(Ct),mt=Ct),o.bindTexture(k,Lt||et[k]),K.type=k,K.texture=Lt)}function N(){const k=yt[mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function j(){try{o.compressedTexImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function gt(){try{o.texSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function At(){try{o.texStorage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function Zt(){try{o.texStorage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function ie(){try{o.texImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function bt(){try{o.texImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function Rt(k){$t.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),$t.copy(k))}function kt(k){G.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),G.copy(k))}function Yt(k,Lt){let Ct=p.get(Lt);Ct===void 0&&(Ct=new WeakMap,p.set(Lt,Ct));let K=Ct.get(k);K===void 0&&(K=o.getUniformBlockIndex(Lt,k.name),Ct.set(k,K))}function Ht(k,Lt){const K=p.get(Lt).get(k);m.get(Lt)!==K&&(o.uniformBlockBinding(Lt,K,k.__bindingPointIndex),m.set(Lt,K))}function me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},mt=null,yt={},g={},v=new WeakMap,y=[],b=null,D=!1,M=null,S=null,w=null,L=null,U=null,H=null,F=null,P=new ye(0,0,0),E=0,C=!1,it=null,O=null,q=null,W=null,Q=null,$t.set(0,0,o.canvas.width,o.canvas.height),G.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:dt,disable:St,bindFramebuffer:It,drawBuffers:Dt,useProgram:Et,setBlending:Re,setMaterial:Te,setFlipSided:ne,setCullFace:ue,setLineWidth:B,setPolygonOffset:De,setScissorTest:oe,activeTexture:ge,bindTexture:Bt,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:ie,texImage3D:bt,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:At,texStorage3D:Zt,texSubImage2D:gt,texSubImage3D:Mt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Vt,scissor:Rt,viewport:kt,reset:me}}function I3(o,e,i,r,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Oe,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return y?new OffscreenCanvas(N,T):Fc("canvas")}function D(N,T,j){let gt=1;const Mt=Bt(N);if((Mt.width>j||Mt.height>j)&&(gt=j/Math.max(Mt.width,Mt.height)),gt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(gt*Mt.width),Vt=Math.floor(gt*Mt.height);g===void 0&&(g=b(pt,Vt));const At=T?b(pt,Vt):g;return At.width=pt,At.height=Vt,At.getContext("2d").drawImage(N,0,0,pt,Vt),ce("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+Vt+")."),At}else return"data"in N&&ce("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function M(N){return N.generateMipmaps}function S(N){o.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,T,j,gt,Mt=!1){if(N!==null){if(o[N]!==void 0)return o[N];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=T;if(T===o.RED&&(j===o.FLOAT&&(pt=o.R32F),j===o.HALF_FLOAT&&(pt=o.R16F),j===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(pt=o.R8UI),j===o.UNSIGNED_SHORT&&(pt=o.R16UI),j===o.UNSIGNED_INT&&(pt=o.R32UI),j===o.BYTE&&(pt=o.R8I),j===o.SHORT&&(pt=o.R16I),j===o.INT&&(pt=o.R32I)),T===o.RG&&(j===o.FLOAT&&(pt=o.RG32F),j===o.HALF_FLOAT&&(pt=o.RG16F),j===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(pt=o.RG8UI),j===o.UNSIGNED_SHORT&&(pt=o.RG16UI),j===o.UNSIGNED_INT&&(pt=o.RG32UI),j===o.BYTE&&(pt=o.RG8I),j===o.SHORT&&(pt=o.RG16I),j===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),j===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),j===o.UNSIGNED_INT&&(pt=o.RGB32UI),j===o.BYTE&&(pt=o.RGB8I),j===o.SHORT&&(pt=o.RGB16I),j===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),j===o.UNSIGNED_INT&&(pt=o.RGBA32UI),j===o.BYTE&&(pt=o.RGBA8I),j===o.SHORT&&(pt=o.RGBA16I),j===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&(j===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),j===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),T===o.RGBA){const Vt=Mt?zc:Ie.getTransfer(gt);j===o.FLOAT&&(pt=o.RGBA32F),j===o.HALF_FLOAT&&(pt=o.RGBA16F),j===o.UNSIGNED_BYTE&&(pt=Vt===We?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function U(N,T){let j;return N?T===null||T===da||T===Ol?j=o.DEPTH24_STENCIL8:T===ai?j=o.DEPTH32F_STENCIL8:T===Ll&&(j=o.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===da||T===Ol?j=o.DEPTH_COMPONENT24:T===ai?j=o.DEPTH_COMPONENT32F:T===Ll&&(j=o.DEPTH_COMPONENT16),j}function H(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function F(N){const T=N.target;T.removeEventListener("dispose",F),E(T),T.isVideoTexture&&_.delete(T)}function P(N){const T=N.target;T.removeEventListener("dispose",P),it(T)}function E(N){const T=r.get(N);if(T.__webglInit===void 0)return;const j=N.source,gt=v.get(j);if(gt){const Mt=gt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(N),Object.keys(gt).length===0&&v.delete(j)}r.remove(N)}function C(N){const T=r.get(N);o.deleteTexture(T.__webglTexture);const j=N.source,gt=v.get(j);delete gt[T.__cacheKey],h.memory.textures--}function it(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let Mt=0;Mt<T.__webglFramebuffer[gt].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[gt][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[gt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=N.textures;for(let gt=0,Mt=j.length;gt<Mt;gt++){const pt=r.get(j[gt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(j[gt])}r.remove(N)}let O=0;function q(){O=0}function W(){const N=O;return N>=u.maxTextures&&ce("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u.maxTextures),O+=1,N}function Q(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function Y(N,T){const j=r.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){const gt=N.image;if(gt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,N,T);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+T)}function z(N,T){const j=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){et(j,N,T);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+T)}function V(N,T){const j=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){et(j,N,T);return}i.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+T)}function ft(N,T){const j=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){dt(j,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+T)}const mt={[Ic]:o.REPEAT,[Xi]:o.CLAMP_TO_EDGE,[hp]:o.MIRRORED_REPEAT},yt={[On]:o.NEAREST,[DE]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[un]:o.LINEAR,[Rd]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},Tt={[LE]:o.NEVER,[FE]:o.ALWAYS,[OE]:o.LESS,[rm]:o.LEQUAL,[PE]:o.EQUAL,[om]:o.GEQUAL,[IE]:o.GREATER,[zE]:o.NOTEQUAL};function Ut(N,T){if(T.type===ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===Rd||T.magFilter===ac||T.magFilter===Ms||T.minFilter===un||T.minFilter===Rd||T.minFilter===ac||T.minFilter===Ms)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,mt[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,mt[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,mt[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Tt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==ac&&T.minFilter!==Ms||T.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function $t(N,T){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",F));const gt=T.source;let Mt=v.get(gt);Mt===void 0&&(Mt={},v.set(gt,Mt));const pt=Q(T);if(pt!==N.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,j=!0),Mt[pt].usedTimes++;const Vt=Mt[N.__cacheKey];Vt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Vt.usedTimes===0&&C(T)),N.__cacheKey=pt,N.__webglTexture=Mt[pt].texture}return j}function G(N,T,j){return Math.floor(Math.floor(N/j)/T)}function _t(N,T,j,gt){const pt=N.updateRanges;if(pt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,j,gt,T.data);else{pt.sort((bt,Rt)=>bt.start-Rt.start);let Vt=0;for(let bt=1;bt<pt.length;bt++){const Rt=pt[Vt],kt=pt[bt],Yt=Rt.start+Rt.count,Ht=G(kt.start,T.width,4),me=G(Rt.start,T.width,4);kt.start<=Yt+1&&Ht===me&&G(kt.start+kt.count-1,T.width,4)===Ht?Rt.count=Math.max(Rt.count,kt.start+kt.count-Rt.start):(++Vt,pt[Vt]=kt)}pt.length=Vt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Rt=pt.length;bt<Rt;bt++){const kt=pt[bt],Yt=Math.floor(kt.start/4),Ht=Math.ceil(kt.count/4),me=Yt%T.width,k=Math.floor(Yt/T.width),Lt=Ht,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,me),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,me,k,Lt,Ct,j,gt,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ie)}}function et(N,T,j){let gt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=o.TEXTURE_3D);const Mt=$t(N,T),pt=T.source;i.bindTexture(gt,N.__webglTexture,o.TEXTURE0+j);const Vt=r.get(pt);if(pt.version!==Vt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+j);const At=Ie.getPrimaries(Ie.workingColorSpace),Zt=T.colorSpace===Ss?null:Ie.getPrimaries(T.colorSpace),ie=T.colorSpace===Ss||At===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let bt=D(T.image,!1,u.maxTextureSize);bt=ge(T,bt);const Rt=f.convert(T.format,T.colorSpace),kt=f.convert(T.type);let Yt=L(T.internalFormat,Rt,kt,T.colorSpace,T.isVideoTexture);Ut(gt,T);let Ht;const me=T.mipmaps,k=T.isVideoTexture!==!0,Lt=Vt.__version===void 0||Mt===!0,Ct=pt.dataReady,K=H(T,bt);if(T.isDepthTexture)Yt=U(T.format===ir,T.type),Lt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Yt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Rt,kt,null));else if(T.isDataTexture)if(me.length>0){k&&Lt&&i.texStorage2D(o.TEXTURE_2D,K,Yt,me[0].width,me[0].height);for(let rt=0,at=me.length;rt<at;rt++)Ht=me[rt],k?Ct&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ht.width,Ht.height,Rt,kt,Ht.data):i.texImage2D(o.TEXTURE_2D,rt,Yt,Ht.width,Ht.height,0,Rt,kt,Ht.data);T.generateMipmaps=!1}else k?(Lt&&i.texStorage2D(o.TEXTURE_2D,K,Yt,bt.width,bt.height),Ct&&_t(T,bt,Rt,kt)):i.texImage2D(o.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Rt,kt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,K,Yt,me[0].width,me[0].height,bt.depth);for(let rt=0,at=me.length;rt<at;rt++)if(Ht=me[rt],T.format!==ki)if(Rt!==null)if(k){if(Ct)if(T.layerUpdates.size>0){const wt=cx(Ht.width,Ht.height,T.format,T.type);for(const Kt of T.layerUpdates){const fe=Ht.data.subarray(Kt*wt/Ht.data.BYTES_PER_ELEMENT,(Kt+1)*wt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,Kt,Ht.width,Ht.height,1,Rt,fe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ht.width,Ht.height,bt.depth,Rt,Ht.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,rt,Yt,Ht.width,Ht.height,bt.depth,0,Ht.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ht.width,Ht.height,bt.depth,Rt,kt,Ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,rt,Yt,Ht.width,Ht.height,bt.depth,0,Rt,kt,Ht.data)}else{k&&Lt&&i.texStorage2D(o.TEXTURE_2D,K,Yt,me[0].width,me[0].height);for(let rt=0,at=me.length;rt<at;rt++)Ht=me[rt],T.format!==ki?Rt!==null?k?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,rt,0,0,Ht.width,Ht.height,Rt,Ht.data):i.compressedTexImage2D(o.TEXTURE_2D,rt,Yt,Ht.width,Ht.height,0,Ht.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ct&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ht.width,Ht.height,Rt,kt,Ht.data):i.texImage2D(o.TEXTURE_2D,rt,Yt,Ht.width,Ht.height,0,Rt,kt,Ht.data)}else if(T.isDataArrayTexture)if(k){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,K,Yt,bt.width,bt.height,bt.depth),Ct)if(T.layerUpdates.size>0){const rt=cx(bt.width,bt.height,T.format,T.type);for(const at of T.layerUpdates){const wt=bt.data.subarray(at*rt/bt.data.BYTES_PER_ELEMENT,(at+1)*rt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,at,bt.width,bt.height,1,Rt,kt,wt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Rt,kt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,bt.width,bt.height,bt.depth,0,Rt,kt,bt.data);else if(T.isData3DTexture)k?(Lt&&i.texStorage3D(o.TEXTURE_3D,K,Yt,bt.width,bt.height,bt.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Rt,kt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,bt.width,bt.height,bt.depth,0,Rt,kt,bt.data);else if(T.isFramebufferTexture){if(Lt)if(k)i.texStorage2D(o.TEXTURE_2D,K,Yt,bt.width,bt.height);else{let rt=bt.width,at=bt.height;for(let wt=0;wt<K;wt++)i.texImage2D(o.TEXTURE_2D,wt,Yt,rt,at,0,Rt,kt,null),rt>>=1,at>>=1}}else if(me.length>0){if(k&&Lt){const rt=Bt(me[0]);i.texStorage2D(o.TEXTURE_2D,K,Yt,rt.width,rt.height)}for(let rt=0,at=me.length;rt<at;rt++)Ht=me[rt],k?Ct&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Rt,kt,Ht):i.texImage2D(o.TEXTURE_2D,rt,Yt,Rt,kt,Ht);T.generateMipmaps=!1}else if(k){if(Lt){const rt=Bt(bt);i.texStorage2D(o.TEXTURE_2D,K,Yt,rt.width,rt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,kt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Yt,Rt,kt,bt);M(T)&&S(gt),Vt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function dt(N,T,j){if(T.image.length!==6)return;const gt=$t(N,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+j);const pt=r.get(Mt);if(Mt.version!==pt.__version||gt===!0){i.activeTexture(o.TEXTURE0+j);const Vt=Ie.getPrimaries(Ie.workingColorSpace),At=T.colorSpace===Ss?null:Ie.getPrimaries(T.colorSpace),Zt=T.colorSpace===Ss||Vt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const ie=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let at=0;at<6;at++)!ie&&!bt?Rt[at]=D(T.image[at],!0,u.maxCubemapSize):Rt[at]=bt?T.image[at].image:T.image[at],Rt[at]=ge(T,Rt[at]);const kt=Rt[0],Yt=f.convert(T.format,T.colorSpace),Ht=f.convert(T.type),me=L(T.internalFormat,Yt,Ht,T.colorSpace),k=T.isVideoTexture!==!0,Lt=pt.__version===void 0||gt===!0,Ct=Mt.dataReady;let K=H(T,kt);Ut(o.TEXTURE_CUBE_MAP,T);let rt;if(ie){k&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,K,me,kt.width,kt.height);for(let at=0;at<6;at++){rt=Rt[at].mipmaps;for(let wt=0;wt<rt.length;wt++){const Kt=rt[wt];T.format!==ki?Yt!==null?k?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,Kt.width,Kt.height,Yt,Kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,me,Kt.width,Kt.height,0,Kt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,Kt.width,Kt.height,Yt,Ht,Kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,me,Kt.width,Kt.height,0,Yt,Ht,Kt.data)}}}else{if(rt=T.mipmaps,k&&Lt){rt.length>0&&K++;const at=Bt(Rt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,K,me,at.width,at.height)}for(let at=0;at<6;at++)if(bt){k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Rt[at].width,Rt[at].height,Yt,Ht,Rt[at].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,me,Rt[at].width,Rt[at].height,0,Yt,Ht,Rt[at].data);for(let wt=0;wt<rt.length;wt++){const fe=rt[wt].image[at].image;k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,fe.width,fe.height,Yt,Ht,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,me,fe.width,fe.height,0,Yt,Ht,fe.data)}}else{k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Yt,Ht,Rt[at]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,me,Yt,Ht,Rt[at]);for(let wt=0;wt<rt.length;wt++){const Kt=rt[wt];k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,Yt,Ht,Kt.image[at]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,me,Yt,Ht,Kt.image[at])}}}M(T)&&S(o.TEXTURE_CUBE_MAP),pt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function St(N,T,j,gt,Mt,pt){const Vt=f.convert(j.format,j.colorSpace),At=f.convert(j.type),Zt=L(j.internalFormat,Vt,At,j.colorSpace),ie=r.get(T),bt=r.get(j);if(bt.__renderTarget=T,!ie.__hasExternalTextures){const Rt=Math.max(1,T.width>>pt),kt=Math.max(1,T.height>>pt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,pt,Zt,Rt,kt,T.depth,0,Vt,At,null):i.texImage2D(Mt,pt,Zt,Rt,kt,0,Vt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),De(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,Mt,bt.__webglTexture,0,B(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,Mt,bt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(N,T,j){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const gt=T.depthTexture,Mt=gt&&gt.isDepthTexture?gt.type:null,pt=U(T.stencilBuffer,Mt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;De(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,B(T),pt,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,B(T),pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,N)}else{const gt=T.textures;for(let Mt=0;Mt<gt.length;Mt++){const pt=gt[Mt],Vt=f.convert(pt.format,pt.colorSpace),At=f.convert(pt.type),Zt=L(pt.internalFormat,Vt,At,pt.colorSpace);De(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,B(T),Zt,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,B(T),Zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(N,T,j){const gt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=r.get(T.depthTexture);if(Mt.__renderTarget=T,(!Mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),gt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),Mt.__webglTexture===void 0){Mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Mt.__webglTexture),Ut(o.TEXTURE_CUBE_MAP,T.depthTexture);const ie=f.convert(T.depthTexture.format),bt=f.convert(T.depthTexture.type);let Rt;T.depthTexture.format===Ba?Rt=o.DEPTH_COMPONENT24:T.depthTexture.format===ir&&(Rt=o.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Rt,T.width,T.height,0,ie,bt,null)}}else Y(T.depthTexture,0);const pt=Mt.__webglTexture,Vt=B(T),At=gt?o.TEXTURE_CUBE_MAP_POSITIVE_X+j:o.TEXTURE_2D,Zt=T.depthTexture.format===ir?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ba)De(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,At,pt,0,Vt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,At,pt,0);else if(T.depthTexture.format===ir)De(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,At,pt,0,Vt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,At,pt,0);else throw new Error("Unknown depthTexture format")}function Et(N){const T=r.get(N),j=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const gt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",Mt)};gt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=gt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let gt=0;gt<6;gt++)Dt(T.__webglFramebuffer[gt],N,gt);else{const gt=N.texture.mipmaps;gt&&gt.length>0?Dt(T.__webglFramebuffer[0],N,0):Dt(T.__webglFramebuffer,N,0)}else if(j){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=o.createRenderbuffer(),It(T.__webglDepthbuffer[gt],N,!1);else{const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,pt)}}else{const gt=N.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),It(T.__webglDepthbuffer,N,!1);else{const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,pt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(N,T,j){const gt=r.get(N);T!==void 0&&St(gt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&Et(N)}function le(N){const T=N.texture,j=r.get(N),gt=r.get(T);N.addEventListener("dispose",P);const Mt=N.textures,pt=N.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=T.version,h.memory.textures++),pt){j.__webglFramebuffer=[];for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[At]=[];for(let Zt=0;Zt<T.mipmaps.length;Zt++)j.__webglFramebuffer[At][Zt]=o.createFramebuffer()}else j.__webglFramebuffer[At]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)j.__webglFramebuffer[At]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let At=0,Zt=Mt.length;At<Zt;At++){const ie=r.get(Mt[At]);ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&De(N)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Zt=Mt[At];j.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[At]);const ie=f.convert(Zt.format,Zt.colorSpace),bt=f.convert(Zt.type),Rt=L(Zt.internalFormat,ie,bt,Zt.colorSpace,N.isXRRenderTarget===!0),kt=B(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Rt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,j.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),It(j.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),Ut(o.TEXTURE_CUBE_MAP,T);for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)St(j.__webglFramebuffer[At][Zt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Zt);else St(j.__webglFramebuffer[At],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(T)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let At=0,Zt=Mt.length;At<Zt;At++){const ie=Mt[At],bt=r.get(ie);let Rt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,bt.__webglTexture),Ut(Rt,ie),St(j.__webglFramebuffer,N,ie,o.COLOR_ATTACHMENT0+At,Rt,0),M(ie)&&S(Rt)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,gt.__webglTexture),Ut(At,T),T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)St(j.__webglFramebuffer[Zt],N,T,o.COLOR_ATTACHMENT0,At,Zt);else St(j.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,At,0);M(T)&&S(At),i.unbindTexture()}N.depthBuffer&&Et(N)}function Re(N){const T=N.textures;for(let j=0,gt=T.length;j<gt;j++){const Mt=T[j];if(M(Mt)){const pt=w(N),Vt=r.get(Mt).__webglTexture;i.bindTexture(pt,Vt),S(pt),i.unbindTexture()}}}const Te=[],ne=[];function ue(N){if(N.samples>0){if(De(N)===!1){const T=N.textures,j=N.width,gt=N.height;let Mt=o.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(N),At=T.length>1;if(At)for(let ie=0;ie<T.length;ie++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Zt=N.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ie=0;ie<T.length;ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[ie]);const bt=r.get(T[ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,j,gt,0,0,j,gt,Mt,o.NEAREST),m===!0&&(Te.length=0,ne.length=0,Te.push(o.COLOR_ATTACHMENT0+ie),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Te.push(pt),ne.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let ie=0;ie<T.length;ie++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[ie]);const bt=r.get(T[ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function B(N){return Math.min(u.maxSamples,N.samples)}function De(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(N){const T=h.render.frame;_.get(N)!==T&&(_.set(N,T),N.update())}function ge(N,T){const j=N.colorSpace,gt=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==sr&&j!==Ss&&(Ie.getTransfer(j)===We?(gt!==ki||Mt!==_i)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",j)),T}function Bt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=ft,this.rebindTextures=Xt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=St,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function z3(o,e){function i(r,u=Ss){let f;const h=Ie.getTransfer(u);if(r===_i)return o.UNSIGNED_BYTE;if(r===$p)return o.UNSIGNED_SHORT_4_4_4_4;if(r===tm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Xx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===kx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Gx)return o.BYTE;if(r===Vx)return o.SHORT;if(r===Ll)return o.UNSIGNED_SHORT;if(r===Jp)return o.INT;if(r===da)return o.UNSIGNED_INT;if(r===ai)return o.FLOAT;if(r===vi)return o.HALF_FLOAT;if(r===qx)return o.ALPHA;if(r===Yx)return o.RGB;if(r===ki)return o.RGBA;if(r===Ba)return o.DEPTH_COMPONENT;if(r===ir)return o.DEPTH_STENCIL;if(r===em)return o.RED;if(r===nm)return o.RED_INTEGER;if(r===vo)return o.RG;if(r===im)return o.RG_INTEGER;if(r===am)return o.RGBA_INTEGER;if(r===Uc||r===Nc||r===Lc||r===Oc)if(h===We)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Uc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Uc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dp||r===pp||r===mp||r===gp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===dp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_p||r===vp||r===xp||r===Sp||r===Mp||r===yp||r===Ep)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===_p||r===vp)return h===We?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===xp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(r===Sp)return f.COMPRESSED_R11_EAC;if(r===Mp)return f.COMPRESSED_SIGNED_R11_EAC;if(r===yp)return f.COMPRESSED_RG11_EAC;if(r===Ep)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Tp||r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Up||r===Np||r===Lp||r===Op||r===Pp||r===Ip||r===zp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Tp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ap)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Up)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Np)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Op)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ip)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zp)return h===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fp||r===Bp||r===Hp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Fp)return h===We?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gp||r===Vp||r===Xp||r===kp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Gp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Vp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ol?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const F3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B3=`
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

}`;class H3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new aS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Yi({vertexShader:F3,fragmentShader:B3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ln(new kc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G3 extends Mo{constructor(e,i){super();const r=this;let u=null,f=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,v=null,y=null,b=null;const D=typeof XRWebGLBinding<"u",M=new H3,S={},w=i.getContextAttributes();let L=null,U=null;const H=[],F=[],P=new Oe;let E=null;const C=new ii;C.viewport=new rn;const it=new ii;it.viewport=new rn;const O=[C,it],q=new $1;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=H[et];return dt===void 0&&(dt=new Ld,H[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=H[et];return dt===void 0&&(dt=new Ld,H[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=H[et];return dt===void 0&&(dt=new Ld,H[et]=dt),dt.getHandSpace()};function Y(et){const dt=F.indexOf(et.inputSource);if(dt===-1)return;const St=H[dt];St!==void 0&&(St.update(et.inputSource,et.frame,p||h),St.dispatchEvent({type:et.type,data:et.inputSource}))}function z(){u.removeEventListener("select",Y),u.removeEventListener("selectstart",Y),u.removeEventListener("selectend",Y),u.removeEventListener("squeeze",Y),u.removeEventListener("squeezestart",Y),u.removeEventListener("squeezeend",Y),u.removeEventListener("end",z),u.removeEventListener("inputsourceschange",V);for(let et=0;et<H.length;et++){const dt=F[et];dt!==null&&(F[et]=null,H[et].disconnect(dt))}W=null,Q=null,M.reset();for(const et in S)delete S[et];e.setRenderTarget(L),y=null,v=null,g=null,u=null,U=null,_t.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){f=et,r.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&D&&(g=new XRWebGLBinding(u,i)),g},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(et){if(u=et,u!==null){if(L=e.getRenderTarget(),u.addEventListener("select",Y),u.addEventListener("selectstart",Y),u.addEventListener("selectend",Y),u.addEventListener("squeeze",Y),u.addEventListener("squeezestart",Y),u.addEventListener("squeezeend",Y),u.addEventListener("end",z),u.addEventListener("inputsourceschange",V),w.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,It=null,Dt=null;w.depth&&(Dt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=w.stencil?ir:Ba,It=w.stencil?Ol:da);const Et={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:f};g=this.getBinding(),v=g.createProjectionLayer(Et),u.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new ha(v.textureWidth,v.textureHeight,{format:ki,type:_i,depthTexture:new Il(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(u,i,St),u.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new ha(y.framebufferWidth,y.framebufferHeight,{format:ki,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await u.requestReferenceSpace(d),_t.setContext(u),_t.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(et){for(let dt=0;dt<et.removed.length;dt++){const St=et.removed[dt],It=F.indexOf(St);It>=0&&(F[It]=null,H[It].disconnect(St))}for(let dt=0;dt<et.added.length;dt++){const St=et.added[dt];let It=F.indexOf(St);if(It===-1){for(let Et=0;Et<H.length;Et++)if(Et>=F.length){F.push(St),It=Et;break}else if(F[Et]===null){F[Et]=St,It=Et;break}if(It===-1)break}const Dt=H[It];Dt&&Dt.connect(St)}}const ft=new ut,mt=new ut;function yt(et,dt,St){ft.setFromMatrixPosition(dt.matrixWorld),mt.setFromMatrixPosition(St.matrixWorld);const It=ft.distanceTo(mt),Dt=dt.projectionMatrix.elements,Et=St.projectionMatrix.elements,Xt=Dt[14]/(Dt[10]-1),le=Dt[14]/(Dt[10]+1),Re=(Dt[9]+1)/Dt[5],Te=(Dt[9]-1)/Dt[5],ne=(Dt[8]-1)/Dt[0],ue=(Et[8]+1)/Et[0],B=Xt*ne,De=Xt*ue,oe=It/(-ne+ue),ge=oe*-ne;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ge),et.translateZ(oe),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Dt[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Bt=Xt+oe,N=le+oe,T=B-ge,j=De+(It-ge),gt=Re*le/N*Bt,Mt=Te*le/N*Bt;et.projectionMatrix.makePerspective(T,j,gt,Mt,Bt,N),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Tt(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(u===null)return;let dt=et.near,St=et.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(St=M.depthFar)),q.near=it.near=C.near=dt,q.far=it.far=C.far=St,(W!==q.near||Q!==q.far)&&(u.updateRenderState({depthNear:q.near,depthFar:q.far}),W=q.near,Q=q.far),q.layers.mask=et.layers.mask|6,C.layers.mask=q.layers.mask&-5,it.layers.mask=q.layers.mask&-3;const It=et.parent,Dt=q.cameras;Tt(q,It);for(let Et=0;Et<Dt.length;Et++)Tt(Dt[Et],It);Dt.length===2?yt(q,C,it):q.projectionMatrix.copy(C.projectionMatrix),Ut(et,q,It)};function Ut(et,dt,St){St===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(St.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=xo*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(et){m=et,v!==null&&(v.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(et){return S[et]};let $t=null;function G(et,dt){if(_=dt.getViewerPose(p||h),b=dt,_!==null){const St=_.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let It=!1;St.length!==q.cameras.length&&(q.cameras.length=0,It=!0);for(let le=0;le<St.length;le++){const Re=St[le];let Te=null;if(y!==null)Te=y.getViewport(Re);else{const ue=g.getViewSubImage(v,Re);Te=ue.viewport,le===0&&(e.setRenderTargetTextures(U,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(U))}let ne=O[le];ne===void 0&&(ne=new ii,ne.layers.enable(le),ne.viewport=new rn,O[le]=ne),ne.matrix.fromArray(Re.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Re.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Te.x,Te.y,Te.width,Te.height),le===0&&(q.matrix.copy(ne.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),It===!0&&q.cameras.push(ne)}const Dt=u.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&D){g=r.getBinding();const le=g.getDepthInformation(St[0]);le&&le.isValid&&le.texture&&M.init(le,u.renderState)}if(Dt&&Dt.includes("camera-access")&&D){e.state.unbindTexture(),g=r.getBinding();for(let le=0;le<St.length;le++){const Re=St[le].camera;if(Re){let Te=S[Re];Te||(Te=new aS,S[Re]=Te);const ne=g.getCameraImage(Re);Te.sourceTexture=ne}}}}for(let St=0;St<H.length;St++){const It=F[St],Dt=H[St];It!==null&&Dt!==void 0&&Dt.update(It,dt,p||h)}$t&&$t(et,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const _t=new cS;_t.setAnimationLoop(G),this.setAnimationLoop=function(et){$t=et},this.dispose=function(){}}}const $s=new qi,V3=new $e;function X3(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,sS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function u(M,S,w,L,U){S.isMeshBasicMaterial?f(M,S):S.isMeshLambertMaterial?(f(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(M,S),g(M,S)):S.isMeshPhongMaterial?(f(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(f(M,S),b(M,S)):S.isMeshDepthMaterial?f(M,S):S.isMeshDistanceMaterial?(f(M,S),D(M,S)):S.isMeshNormalMaterial?f(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,w,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Zn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Zn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=e.get(S),L=w.envMap,U=w.envMapRotation;L&&(M.envMap.value=L,$s.copy(U),$s.x*=-1,$s.y*=-1,$s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),M.envMapRotation.value.setFromMatrix4(V3.makeRotationFromEuler($s)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function D(M,S){const w=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:u}}function k3(o,e,i,r){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,L){const U=L.program;r.uniformBlockBinding(w,U)}function p(w,L){let U=u[w.id];U===void 0&&(b(w),U=_(w),u[w.id]=U,w.addEventListener("dispose",M));const H=L.program;r.updateUBOMapping(w,H);const F=e.render.frame;f[w.id]!==F&&(v(w),f[w.id]=F)}function _(w){const L=g();w.__bindingPointIndex=L;const U=o.createBuffer(),H=w.__size,F=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,U),U}function g(){for(let w=0;w<d;w++)if(h.indexOf(w)===-1)return h.push(w),w;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const L=u[w.id],U=w.uniforms,H=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,P=U.length;F<P;F++){const E=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,it=E.length;C<it;C++){const O=E[C];if(y(O,F,C,H)===!0){const q=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let Q=0;for(let Y=0;Y<W.length;Y++){const z=W[Y],V=D(z);typeof z=="number"||typeof z=="boolean"?(O.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,q+Q,O.__data)):z.isMatrix3?(O.__data[0]=z.elements[0],O.__data[1]=z.elements[1],O.__data[2]=z.elements[2],O.__data[3]=0,O.__data[4]=z.elements[3],O.__data[5]=z.elements[4],O.__data[6]=z.elements[5],O.__data[7]=0,O.__data[8]=z.elements[6],O.__data[9]=z.elements[7],O.__data[10]=z.elements[8],O.__data[11]=0):(z.toArray(O.__data,Q),Q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(w,L,U,H){const F=w.value,P=L+"_"+U;if(H[P]===void 0)return typeof F=="number"||typeof F=="boolean"?H[P]=F:H[P]=F.clone(),!0;{const E=H[P];if(typeof F=="number"||typeof F=="boolean"){if(E!==F)return H[P]=F,!0}else if(E.equals(F)===!1)return E.copy(F),!0}return!1}function b(w){const L=w.uniforms;let U=0;const H=16;for(let P=0,E=L.length;P<E;P++){const C=Array.isArray(L[P])?L[P]:[L[P]];for(let it=0,O=C.length;it<O;it++){const q=C[it],W=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,Y=W.length;Q<Y;Q++){const z=W[Q],V=D(z),ft=U%H,mt=ft%V.boundary,yt=ft+mt;U+=mt,yt!==0&&H-yt<V.storage&&(U+=H-yt),q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=U,U+=V.storage}}}const F=U%H;return F>0&&(U+=H-F),w.__size=U,w.__cache={},this}function D(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ce("WebGLRenderer: Unsupported uniform value type.",w),L}function M(w){const L=w.target;L.removeEventListener("dispose",M);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(u[L.id]),delete u[L.id],delete f[L.id]}function S(){for(const w in u)o.deleteBuffer(u[w]);h=[],u={},f={}}return{bind:m,update:p,dispose:S}}const q3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let la=null;function Y3(){return la===null&&(la=new cm(q3,16,16,vo,vi),la.name="DFG_LUT",la.minFilter=un,la.magFilter=un,la.wrapS=Xi,la.wrapT=Xi,la.generateMipmaps=!1,la.needsUpdate=!0),la}class W3{constructor(e={}){const{canvas:i=HE(),context:r=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=_i}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=h;const D=y,M=new Set([am,im,nm]),S=new Set([_i,da,Ll,Ol,$p,tm]),w=new Uint32Array(4),L=new Int32Array(4);let U=null,H=null;const F=[],P=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let it=!1;this._outputColorSpace=Di;let O=0,q=0,W=null,Q=-1,Y=null;const z=new rn,V=new rn;let ft=null;const mt=new ye(0);let yt=0,Tt=i.width,Ut=i.height,$t=1,G=null,_t=null;const et=new rn(0,0,Tt,Ut),dt=new rn(0,0,Tt,Ut);let St=!1;const It=new fm;let Dt=!1,Et=!1;const Xt=new $e,le=new ut,Re=new rn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ue(){return W===null?$t:1}let B=r;function De(R,tt){return i.getContext(R,tt)}try{const R={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zp}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Kt,!1),i.addEventListener("webglcontextcreationerror",fe,!1),B===null){const tt="webgl2";if(B=De(tt,R),B===null)throw De(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw ze("WebGLRenderer: "+R.message),R}let oe,ge,Bt,N,T,j,gt,Mt,pt,Vt,At,Zt,ie,bt,Rt,kt,Yt,Ht,me,k,Lt,Ct,K;function rt(){oe=new WA(B),oe.init(),Lt=new z3(B,oe),ge=new BA(B,oe,e,Lt),Bt=new P3(B,oe),ge.reversedDepthBuffer&&v&&Bt.buffers.depth.setReversed(!0),N=new KA(B),T=new M3,j=new I3(B,oe,Bt,T,ge,Lt,N),gt=new YA(C),Mt=new eT(B),Ct=new zA(B,Mt),pt=new jA(B,Mt,N,Ct),Vt=new JA(B,pt,Mt,Ct,N),Ht=new QA(B,ge,j),Rt=new HA(T),At=new S3(C,gt,oe,ge,Ct,Rt),Zt=new X3(C,T),ie=new E3,bt=new w3(oe),Yt=new IA(C,gt,Bt,Vt,b,m),kt=new O3(C,Vt,ge),K=new k3(B,N,ge,Bt),me=new FA(B,oe,N),k=new ZA(B,oe,N),N.programs=At.programs,C.capabilities=ge,C.extensions=oe,C.properties=T,C.renderLists=ie,C.shadowMap=kt,C.state=Bt,C.info=N}rt(),D!==_i&&(E=new tR(D,i.width,i.height,u,f));const at=new G3(C,B);this.xr=at,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $t},this.setPixelRatio=function(R){R!==void 0&&($t=R,this.setSize(Tt,Ut,!1))},this.getSize=function(R){return R.set(Tt,Ut)},this.setSize=function(R,tt,ht=!0){if(at.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=R,Ut=tt,i.width=Math.floor(R*$t),i.height=Math.floor(tt*$t),ht===!0&&(i.style.width=R+"px",i.style.height=tt+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,R,tt)},this.getDrawingBufferSize=function(R){return R.set(Tt*$t,Ut*$t).floor()},this.setDrawingBufferSize=function(R,tt,ht){Tt=R,Ut=tt,$t=ht,i.width=Math.floor(R*ht),i.height=Math.floor(tt*ht),this.setViewport(0,0,R,tt)},this.setEffects=function(R){if(D===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let tt=0;tt<R.length;tt++)if(R[tt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,tt,ht,lt){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,tt,ht,lt),Bt.viewport(z.copy(et).multiplyScalar($t).round())},this.getScissor=function(R){return R.copy(dt)},this.setScissor=function(R,tt,ht,lt){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,tt,ht,lt),Bt.scissor(V.copy(dt).multiplyScalar($t).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Bt.setScissorTest(St=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){_t=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,tt=!0,ht=!0){let lt=0;if(R){let nt=!1;if(W!==null){const Nt=W.texture.format;nt=M.has(Nt)}if(nt){const Nt=W.texture.type,Gt=S.has(Nt),zt=Yt.getClearColor(),jt=Yt.getClearAlpha(),te=zt.r,de=zt.g,pe=zt.b;Gt?(w[0]=te,w[1]=de,w[2]=pe,w[3]=jt,B.clearBufferuiv(B.COLOR,0,w)):(L[0]=te,L[1]=de,L[2]=pe,L[3]=jt,B.clearBufferiv(B.COLOR,0,L))}else lt|=B.COLOR_BUFFER_BIT}tt&&(lt|=B.DEPTH_BUFFER_BIT),ht&&(lt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&B.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Kt,!1),i.removeEventListener("webglcontextcreationerror",fe,!1),Yt.dispose(),ie.dispose(),bt.dispose(),T.dispose(),gt.dispose(),Vt.dispose(),Ct.dispose(),K.dispose(),At.dispose(),at.dispose(),at.removeEventListener("sessionstart",pa),at.removeEventListener("sessionend",Pn),Gn.stop()};function wt(R){R.preventDefault(),zv("WebGLRenderer: Context Lost."),it=!0}function Kt(){zv("WebGLRenderer: Context Restored."),it=!1;const R=N.autoReset,tt=kt.enabled,ht=kt.autoUpdate,lt=kt.needsUpdate,nt=kt.type;rt(),N.autoReset=R,kt.enabled=tt,kt.autoUpdate=ht,kt.needsUpdate=lt,kt.type=nt}function fe(R){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const tt=R.target;tt.removeEventListener("dispose",ae),Be(tt)}function Be(R){Ze(R),T.remove(R)}function Ze(R){const tt=T.get(R).programs;tt!==void 0&&(tt.forEach(function(ht){At.releaseProgram(ht)}),R.isShaderMaterial&&At.releaseShaderCache(R))}this.renderBufferDirect=function(R,tt,ht,lt,nt,Nt){tt===null&&(tt=Te);const Gt=nt.isMesh&&nt.matrixWorld.determinant()<0,zt=As(R,tt,ht,lt,nt);Bt.setMaterial(lt,Gt);let jt=ht.index,te=1;if(lt.wireframe===!0){if(jt=pt.getWireframeAttribute(ht),jt===void 0)return;te=2}const de=ht.drawRange,pe=ht.attributes.position;let Qt=de.start*te,Pe=(de.start+de.count)*te;Nt!==null&&(Qt=Math.max(Qt,Nt.start*te),Pe=Math.min(Pe,(Nt.start+Nt.count)*te)),jt!==null?(Qt=Math.max(Qt,0),Pe=Math.min(Pe,jt.count)):pe!=null&&(Qt=Math.max(Qt,0),Pe=Math.min(Pe,pe.count));const Ve=Pe-Qt;if(Ve<0||Ve===1/0)return;Ct.setup(nt,lt,zt,ht,jt);let Xe,Ne=me;if(jt!==null&&(Xe=Mt.get(jt),Ne=k,Ne.setIndex(Xe)),nt.isMesh)lt.wireframe===!0?(Bt.setLineWidth(lt.wireframeLinewidth*ue()),Ne.setMode(B.LINES)):Ne.setMode(B.TRIANGLES);else if(nt.isLine){let en=lt.linewidth;en===void 0&&(en=1),Bt.setLineWidth(en*ue()),nt.isLineSegments?Ne.setMode(B.LINES):nt.isLineLoop?Ne.setMode(B.LINE_LOOP):Ne.setMode(B.LINE_STRIP)}else nt.isPoints?Ne.setMode(B.POINTS):nt.isSprite&&Ne.setMode(B.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Bc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Ne.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const en=nt._multiDrawStarts,Pt=nt._multiDrawCounts,In=nt._multiDrawCount,Ue=jt?Mt.get(jt).bytesPerElement:1,Kn=T.get(lt).currentProgram.getUniforms();for(let Mn=0;Mn<In;Mn++)Kn.setValue(B,"_gl_DrawID",Mn),Ne.render(en[Mn]/Ue,Pt[Mn])}else if(nt.isInstancedMesh)Ne.renderInstances(Qt,Ve,nt.count);else if(ht.isInstancedBufferGeometry){const en=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Pt=Math.min(ht.instanceCount,en);Ne.renderInstances(Qt,Ve,Pt)}else Ne.render(Qt,Ve)};function Sn(R,tt,ht){R.transparent===!0&&R.side===Pa&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Ha(R,tt,ht),R.side=Es,R.needsUpdate=!0,Ha(R,tt,ht),R.side=Pa):Ha(R,tt,ht)}this.compile=function(R,tt,ht=null){ht===null&&(ht=R),H=bt.get(ht),H.init(tt),P.push(H),ht.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(H.pushLight(nt),nt.castShadow&&H.pushShadow(nt))}),R!==ht&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(H.pushLight(nt),nt.castShadow&&H.pushShadow(nt))}),H.setupLights();const lt=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Nt=nt.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const zt=Nt[Gt];Sn(zt,ht,nt),lt.add(zt)}else Sn(Nt,ht,nt),lt.add(Nt)}),H=P.pop(),lt},this.compileAsync=function(R,tt,ht=null){const lt=this.compile(R,tt,ht);return new Promise(nt=>{function Nt(){if(lt.forEach(function(Gt){T.get(Gt).currentProgram.isReady()&&lt.delete(Gt)}),lt.size===0){nt(R);return}setTimeout(Nt,10)}oe.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ts=null;function Ao(R){Ts&&Ts(R)}function pa(){Gn.stop()}function Pn(){Gn.start()}const Gn=new cS;Gn.setAnimationLoop(Ao),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(R){Ts=R,at.setAnimationLoop(R),R===null?Gn.stop():Gn.start()},at.addEventListener("sessionstart",pa),at.addEventListener("sessionend",Pn),this.render=function(R,tt){if(tt!==void 0&&tt.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(it===!0)return;const ht=at.enabled===!0&&at.isPresenting===!0,lt=E!==null&&(W===null||ht)&&E.begin(C,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(tt),tt=at.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,tt,W),H=bt.get(R,P.length),H.init(tt),P.push(H),Xt.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),It.setFromProjectionMatrix(Xt,ca,tt.reversedDepth),Et=this.localClippingEnabled,Dt=Rt.init(this.clippingPlanes,Et),U=ie.get(R,F.length),U.init(),F.push(U),at.enabled===!0&&at.isPresenting===!0){const Gt=C.xr.getDepthSensingMesh();Gt!==null&&Wi(Gt,tt,-1/0,C.sortObjects)}Wi(R,tt,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(G,_t),ne=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,ne&&Yt.addToRenderList(U,R),this.info.render.frame++,Dt===!0&&Rt.beginShadows();const nt=H.state.shadowsArray;if(kt.render(nt,R,tt),Dt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&E.hasRenderPass())===!1){const Gt=U.opaque,zt=U.transmissive;if(H.setupLights(),tt.isArrayCamera){const jt=tt.cameras;if(zt.length>0)for(let te=0,de=jt.length;te<de;te++){const pe=jt[te];ji(Gt,zt,R,pe)}ne&&Yt.render(R);for(let te=0,de=jt.length;te<de;te++){const pe=jt[te];Vn(U,R,pe,pe.viewport)}}else zt.length>0&&ji(Gt,zt,R,tt),ne&&Yt.render(R),Vn(U,R,tt)}W!==null&&q===0&&(j.updateMultisampleRenderTarget(W),j.updateRenderTargetMipmap(W)),lt&&E.end(C),R.isScene===!0&&R.onAfterRender(C,R,tt),Ct.resetDefaultState(),Q=-1,Y=null,P.pop(),P.length>0?(H=P[P.length-1],Dt===!0&&Rt.setGlobalState(C.clippingPlanes,H.state.camera)):H=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function Wi(R,tt,ht,lt){if(R.visible===!1)return;if(R.layers.test(tt.layers)){if(R.isGroup)ht=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(tt);else if(R.isLight)H.pushLight(R),R.castShadow&&H.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||It.intersectsSprite(R)){lt&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xt);const Gt=Vt.update(R),zt=R.material;zt.visible&&U.push(R,Gt,zt,ht,Re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||It.intersectsObject(R))){const Gt=Vt.update(R),zt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Re.copy(Gt.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4(Xt)),Array.isArray(zt)){const jt=Gt.groups;for(let te=0,de=jt.length;te<de;te++){const pe=jt[te],Qt=zt[pe.materialIndex];Qt&&Qt.visible&&U.push(R,Gt,Qt,ht,Re.z,pe)}}else zt.visible&&U.push(R,Gt,zt,ht,Re.z,null)}}const Nt=R.children;for(let Gt=0,zt=Nt.length;Gt<zt;Gt++)Wi(Nt[Gt],tt,ht,lt)}function Vn(R,tt,ht,lt){const{opaque:nt,transmissive:Nt,transparent:Gt}=R;H.setupLightsView(ht),Dt===!0&&Rt.setGlobalState(C.clippingPlanes,ht),lt&&Bt.viewport(z.copy(lt)),nt.length>0&&xi(nt,tt,ht),Nt.length>0&&xi(Nt,tt,ht),Gt.length>0&&xi(Gt,tt,ht),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function ji(R,tt,ht,lt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[lt.id]===void 0){const Qt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[lt.id]=new ha(1,1,{generateMipmaps:!0,type:Qt?vi:_i,minFilter:Ms,samples:Math.max(4,ge.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}const Nt=H.state.transmissionRenderTarget[lt.id],Gt=lt.viewport||z;Nt.setSize(Gt.z*C.transmissionResolutionScale,Gt.w*C.transmissionResolutionScale);const zt=C.getRenderTarget(),jt=C.getActiveCubeFace(),te=C.getActiveMipmapLevel();C.setRenderTarget(Nt),C.getClearColor(mt),yt=C.getClearAlpha(),yt<1&&C.setClearColor(16777215,.5),C.clear(),ne&&Yt.render(ht);const de=C.toneMapping;C.toneMapping=fa;const pe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),H.setupLightsView(lt),Dt===!0&&Rt.setGlobalState(C.clippingPlanes,lt),xi(R,ht,lt),j.updateMultisampleRenderTarget(Nt),j.updateRenderTargetMipmap(Nt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Pe=0,Ve=tt.length;Pe<Ve;Pe++){const Xe=tt[Pe],{object:Ne,geometry:en,material:Pt,group:In}=Xe;if(Pt.side===Pa&&Ne.layers.test(lt.layers)){const Ue=Pt.side;Pt.side=Zn,Pt.needsUpdate=!0,bs(Ne,ht,lt,en,Pt,In),Pt.side=Ue,Pt.needsUpdate=!0,Qt=!0}}Qt===!0&&(j.updateMultisampleRenderTarget(Nt),j.updateRenderTargetMipmap(Nt))}C.setRenderTarget(zt,jt,te),C.setClearColor(mt,yt),pe!==void 0&&(lt.viewport=pe),C.toneMapping=de}function xi(R,tt,ht){const lt=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Nt=R.length;nt<Nt;nt++){const Gt=R[nt],{object:zt,geometry:jt,group:te}=Gt;let de=Gt.material;de.allowOverride===!0&&lt!==null&&(de=lt),zt.layers.test(ht.layers)&&bs(zt,tt,ht,jt,de,te)}}function bs(R,tt,ht,lt,nt,Nt){R.onBeforeRender(C,tt,ht,lt,nt,Nt),R.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(C,tt,ht,lt,R,Nt),nt.transparent===!0&&nt.side===Pa&&nt.forceSinglePass===!1?(nt.side=Zn,nt.needsUpdate=!0,C.renderBufferDirect(ht,tt,lt,nt,R,Nt),nt.side=Es,nt.needsUpdate=!0,C.renderBufferDirect(ht,tt,lt,nt,R,Nt),nt.side=Pa):C.renderBufferDirect(ht,tt,lt,nt,R,Nt),R.onAfterRender(C,tt,ht,lt,nt,Nt)}function Ha(R,tt,ht){tt.isScene!==!0&&(tt=Te);const lt=T.get(R),nt=H.state.lights,Nt=H.state.shadowsArray,Gt=nt.state.version,zt=At.getParameters(R,nt.state,Nt,tt,ht),jt=At.getProgramCacheKey(zt);let te=lt.programs;lt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?tt.environment:null,lt.fog=tt.fog;const de=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;lt.envMap=gt.get(R.envMap||lt.environment,de),lt.envMapRotation=lt.environment!==null&&R.envMap===null?tt.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",ae),te=new Map,lt.programs=te);let pe=te.get(jt);if(pe!==void 0){if(lt.currentProgram===pe&&lt.lightsStateVersion===Gt)return ur(R,zt),pe}else zt.uniforms=At.getUniforms(R),R.onBeforeCompile(zt,C),pe=At.acquireProgram(zt,jt),te.set(jt,pe),lt.uniforms=zt.uniforms;const Qt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Rt.uniform),ur(R,zt),lt.needsLights=zl(R),lt.lightsStateVersion=Gt,lt.needsLights&&(Qt.ambientLightColor.value=nt.state.ambient,Qt.lightProbe.value=nt.state.probe,Qt.directionalLights.value=nt.state.directional,Qt.directionalLightShadows.value=nt.state.directionalShadow,Qt.spotLights.value=nt.state.spot,Qt.spotLightShadows.value=nt.state.spotShadow,Qt.rectAreaLights.value=nt.state.rectArea,Qt.ltc_1.value=nt.state.rectAreaLTC1,Qt.ltc_2.value=nt.state.rectAreaLTC2,Qt.pointLights.value=nt.state.point,Qt.pointLightShadows.value=nt.state.pointShadow,Qt.hemisphereLights.value=nt.state.hemi,Qt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Qt.spotLightMatrix.value=nt.state.spotLightMatrix,Qt.spotLightMap.value=nt.state.spotLightMap,Qt.pointShadowMatrix.value=nt.state.pointShadowMatrix),lt.currentProgram=pe,lt.uniformsList=null,pe}function Ro(R){if(R.uniformsList===null){const tt=R.currentProgram.getUniforms();R.uniformsList=Pc.seqWithValue(tt.seq,R.uniforms)}return R.uniformsList}function ur(R,tt){const ht=T.get(R);ht.outputColorSpace=tt.outputColorSpace,ht.batching=tt.batching,ht.batchingColor=tt.batchingColor,ht.instancing=tt.instancing,ht.instancingColor=tt.instancingColor,ht.instancingMorph=tt.instancingMorph,ht.skinning=tt.skinning,ht.morphTargets=tt.morphTargets,ht.morphNormals=tt.morphNormals,ht.morphColors=tt.morphColors,ht.morphTargetsCount=tt.morphTargetsCount,ht.numClippingPlanes=tt.numClippingPlanes,ht.numIntersection=tt.numClipIntersection,ht.vertexAlphas=tt.vertexAlphas,ht.vertexTangents=tt.vertexTangents,ht.toneMapping=tt.toneMapping}function As(R,tt,ht,lt,nt){tt.isScene!==!0&&(tt=Te),j.resetTextureUnits();const Nt=tt.fog,Gt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?tt.environment:null,zt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:sr,jt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,te=gt.get(lt.envMap||Gt,jt),de=lt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pe=!!ht.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Qt=!!ht.morphAttributes.position,Pe=!!ht.morphAttributes.normal,Ve=!!ht.morphAttributes.color;let Xe=fa;lt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xe=C.toneMapping);const Ne=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,en=Ne!==void 0?Ne.length:0,Pt=T.get(lt),In=H.state.lights;if(Dt===!0&&(Et===!0||R!==Y)){const se=R===Y&&lt.id===Q;Rt.setState(lt,R,se)}let Ue=!1;lt.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==In.state.version||Pt.outputColorSpace!==zt||nt.isBatchedMesh&&Pt.batching===!1||!nt.isBatchedMesh&&Pt.batching===!0||nt.isBatchedMesh&&Pt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Pt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Pt.instancing===!1||!nt.isInstancedMesh&&Pt.instancing===!0||nt.isSkinnedMesh&&Pt.skinning===!1||!nt.isSkinnedMesh&&Pt.skinning===!0||nt.isInstancedMesh&&Pt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Pt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Pt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Pt.instancingMorph===!1&&nt.morphTexture!==null||Pt.envMap!==te||lt.fog===!0&&Pt.fog!==Nt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Rt.numPlanes||Pt.numIntersection!==Rt.numIntersection)||Pt.vertexAlphas!==de||Pt.vertexTangents!==pe||Pt.morphTargets!==Qt||Pt.morphNormals!==Pe||Pt.morphColors!==Ve||Pt.toneMapping!==Xe||Pt.morphTargetsCount!==en)&&(Ue=!0):(Ue=!0,Pt.__version=lt.version);let Kn=Pt.currentProgram;Ue===!0&&(Kn=Ha(lt,tt,nt));let Mn=!1,Qn=!1,Ga=!1;const He=Kn.getUniforms(),cn=Pt.uniforms;if(Bt.useProgram(Kn.program)&&(Mn=!0,Qn=!0,Ga=!0),lt.id!==Q&&(Q=lt.id,Qn=!0),Mn||Y!==R){Bt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),He.setValue(B,"projectionMatrix",R.projectionMatrix),He.setValue(B,"viewMatrix",R.matrixWorldInverse);const Ui=He.map.cameraPosition;Ui!==void 0&&Ui.setValue(B,le.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&He.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&He.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,Qn=!0,Ga=!0)}if(Pt.needsLights&&(In.state.directionalShadowMap.length>0&&He.setValue(B,"directionalShadowMap",In.state.directionalShadowMap,j),In.state.spotShadowMap.length>0&&He.setValue(B,"spotShadowMap",In.state.spotShadowMap,j),In.state.pointShadowMap.length>0&&He.setValue(B,"pointShadowMap",In.state.pointShadowMap,j)),nt.isSkinnedMesh){He.setOptional(B,nt,"bindMatrix"),He.setOptional(B,nt,"bindMatrixInverse");const se=nt.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),He.setValue(B,"boneTexture",se.boneTexture,j))}nt.isBatchedMesh&&(He.setOptional(B,nt,"batchingTexture"),He.setValue(B,"batchingTexture",nt._matricesTexture,j),He.setOptional(B,nt,"batchingIdTexture"),He.setValue(B,"batchingIdTexture",nt._indirectTexture,j),He.setOptional(B,nt,"batchingColorTexture"),nt._colorsTexture!==null&&He.setValue(B,"batchingColorTexture",nt._colorsTexture,j));const Zi=ht.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Ht.update(nt,ht,Kn),(Qn||Pt.receiveShadow!==nt.receiveShadow)&&(Pt.receiveShadow=nt.receiveShadow,He.setValue(B,"receiveShadow",nt.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&tt.environment!==null&&(cn.envMapIntensity.value=tt.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Y3()),Qn&&(He.setValue(B,"toneMappingExposure",C.toneMappingExposure),Pt.needsLights&&Wc(cn,Ga),Nt&&lt.fog===!0&&Zt.refreshFogUniforms(cn,Nt),Zt.refreshMaterialUniforms(cn,lt,$t,Ut,H.state.transmissionRenderTarget[R.id]),Pc.upload(B,Ro(Pt),cn,j)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Pc.upload(B,Ro(Pt),cn,j),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&He.setValue(B,"center",nt.center),He.setValue(B,"modelViewMatrix",nt.modelViewMatrix),He.setValue(B,"normalMatrix",nt.normalMatrix),He.setValue(B,"modelMatrix",nt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const se=lt.uniformsGroups;for(let Ui=0,Ni=se.length;Ui<Ni;Ui++){const Rs=se[Ui];K.update(Rs,Kn),K.bind(Rs,Kn)}}return Kn}function Wc(R,tt){R.ambientLightColor.needsUpdate=tt,R.lightProbe.needsUpdate=tt,R.directionalLights.needsUpdate=tt,R.directionalLightShadows.needsUpdate=tt,R.pointLights.needsUpdate=tt,R.pointLightShadows.needsUpdate=tt,R.spotLights.needsUpdate=tt,R.spotLightShadows.needsUpdate=tt,R.rectAreaLights.needsUpdate=tt,R.hemisphereLights.needsUpdate=tt}function zl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,tt,ht){const lt=T.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=tt,T.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ht,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,tt){const ht=T.get(R);ht.__webglFramebuffer=tt,ht.__useDefaultFramebuffer=tt===void 0};const Fl=B.createFramebuffer();this.setRenderTarget=function(R,tt=0,ht=0){W=R,O=tt,q=ht;let lt=null,nt=!1,Nt=!1;if(R){const zt=T.get(R);if(zt.__useDefaultFramebuffer!==void 0){Bt.bindFramebuffer(B.FRAMEBUFFER,zt.__webglFramebuffer),z.copy(R.viewport),V.copy(R.scissor),ft=R.scissorTest,Bt.viewport(z),Bt.scissor(V),Bt.setScissorTest(ft),Q=-1;return}else if(zt.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(zt.__hasExternalTextures)j.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const de=R.depthTexture;if(zt.__boundDepthTexture!==de){if(de!==null&&T.has(de)&&(R.width!==de.image.width||R.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Nt=!0);const te=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[tt])?lt=te[tt][ht]:lt=te[tt],nt=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?lt=T.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?lt=te[ht]:lt=te,z.copy(R.viewport),V.copy(R.scissor),ft=R.scissorTest}else z.copy(et).multiplyScalar($t).floor(),V.copy(dt).multiplyScalar($t).floor(),ft=St;if(ht!==0&&(lt=Fl),Bt.bindFramebuffer(B.FRAMEBUFFER,lt)&&Bt.drawBuffers(R,lt),Bt.viewport(z),Bt.scissor(V),Bt.setScissorTest(ft),nt){const zt=T.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+tt,zt.__webglTexture,ht)}else if(Nt){const zt=tt;for(let jt=0;jt<R.textures.length;jt++){const te=T.get(R.textures[jt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+jt,te.__webglTexture,ht,zt)}}else if(R!==null&&ht!==0){const zt=T.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zt.__webglTexture,ht)}Q=-1},this.readRenderTargetPixels=function(R,tt,ht,lt,nt,Nt,Gt,zt=0){if(!(R&&R.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(jt=jt[Gt]),jt){Bt.bindFramebuffer(B.FRAMEBUFFER,jt);try{const te=R.textures[zt],de=te.format,pe=te.type;if(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),!ge.textureFormatReadable(de)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(pe)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=R.width-lt&&ht>=0&&ht<=R.height-nt&&B.readPixels(tt,ht,lt,nt,Lt.convert(de),Lt.convert(pe),Nt)}finally{const te=W!==null?T.get(W).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,tt,ht,lt,nt,Nt,Gt,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(jt=jt[Gt]),jt)if(tt>=0&&tt<=R.width-lt&&ht>=0&&ht<=R.height-nt){Bt.bindFramebuffer(B.FRAMEBUFFER,jt);const te=R.textures[zt],de=te.format,pe=te.type;if(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),!ge.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Qt),B.bufferData(B.PIXEL_PACK_BUFFER,Nt.byteLength,B.STREAM_READ),B.readPixels(tt,ht,lt,nt,Lt.convert(de),Lt.convert(pe),0);const Pe=W!==null?T.get(W).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,Pe);const Ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await GE(B,Ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Qt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Nt),B.deleteBuffer(Qt),B.deleteSync(Ve),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,tt=null,ht=0){const lt=Math.pow(2,-ht),nt=Math.floor(R.image.width*lt),Nt=Math.floor(R.image.height*lt),Gt=tt!==null?tt.x:0,zt=tt!==null?tt.y:0;j.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ht,0,0,Gt,zt,nt,Nt),Bt.unbindTexture()};const Bl=B.createFramebuffer(),Co=B.createFramebuffer();this.copyTextureToTexture=function(R,tt,ht=null,lt=null,nt=0,Nt=0){let Gt,zt,jt,te,de,pe,Qt,Pe,Ve;const Xe=R.isCompressedTexture?R.mipmaps[Nt]:R.image;if(ht!==null)Gt=ht.max.x-ht.min.x,zt=ht.max.y-ht.min.y,jt=ht.isBox3?ht.max.z-ht.min.z:1,te=ht.min.x,de=ht.min.y,pe=ht.isBox3?ht.min.z:0;else{const cn=Math.pow(2,-nt);Gt=Math.floor(Xe.width*cn),zt=Math.floor(Xe.height*cn),R.isDataArrayTexture?jt=Xe.depth:R.isData3DTexture?jt=Math.floor(Xe.depth*cn):jt=1,te=0,de=0,pe=0}lt!==null?(Qt=lt.x,Pe=lt.y,Ve=lt.z):(Qt=0,Pe=0,Ve=0);const Ne=Lt.convert(tt.format),en=Lt.convert(tt.type);let Pt;tt.isData3DTexture?(j.setTexture3D(tt,0),Pt=B.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(j.setTexture2DArray(tt,0),Pt=B.TEXTURE_2D_ARRAY):(j.setTexture2D(tt,0),Pt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,tt.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,tt.unpackAlignment);const In=B.getParameter(B.UNPACK_ROW_LENGTH),Ue=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kn=B.getParameter(B.UNPACK_SKIP_PIXELS),Mn=B.getParameter(B.UNPACK_SKIP_ROWS),Qn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,de),B.pixelStorei(B.UNPACK_SKIP_IMAGES,pe);const Ga=R.isDataArrayTexture||R.isData3DTexture,He=tt.isDataArrayTexture||tt.isData3DTexture;if(R.isDepthTexture){const cn=T.get(R),Zi=T.get(tt),se=T.get(cn.__renderTarget),Ui=T.get(Zi.__renderTarget);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,se.__webglFramebuffer),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ni=0;Ni<jt;Ni++)Ga&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,T.get(R).__webglTexture,nt,pe+Ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,T.get(tt).__webglTexture,Nt,Ve+Ni)),B.blitFramebuffer(te,de,Gt,zt,Qt,Pe,Gt,zt,B.DEPTH_BUFFER_BIT,B.NEAREST);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||T.has(R)){const cn=T.get(R),Zi=T.get(tt);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,Bl),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Co);for(let se=0;se<jt;se++)Ga?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cn.__webglTexture,nt,pe+se):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cn.__webglTexture,nt),He?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zi.__webglTexture,Nt,Ve+se):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zi.__webglTexture,Nt),nt!==0?B.blitFramebuffer(te,de,Gt,zt,Qt,Pe,Gt,zt,B.COLOR_BUFFER_BIT,B.NEAREST):He?B.copyTexSubImage3D(Pt,Nt,Qt,Pe,Ve+se,te,de,Gt,zt):B.copyTexSubImage2D(Pt,Nt,Qt,Pe,te,de,Gt,zt);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else He?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Pt,Nt,Qt,Pe,Ve,Gt,zt,jt,Ne,en,Xe.data):tt.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,Nt,Qt,Pe,Ve,Gt,zt,jt,Ne,Xe.data):B.texSubImage3D(Pt,Nt,Qt,Pe,Ve,Gt,zt,jt,Ne,en,Xe):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Nt,Qt,Pe,Gt,zt,Ne,en,Xe.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Nt,Qt,Pe,Xe.width,Xe.height,Ne,Xe.data):B.texSubImage2D(B.TEXTURE_2D,Nt,Qt,Pe,Gt,zt,Ne,en,Xe);B.pixelStorei(B.UNPACK_ROW_LENGTH,In),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Mn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qn),Nt===0&&tt.generateMipmaps&&B.generateMipmap(Pt),Bt.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),Bt.unbindTexture()},this.resetState=function(){O=0,q=0,W=null,Bt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ie._getUnpackColorSpace()}}class j3 extends W1{constructor(e){super(e),this.type=vi}parse(e){const h=function(E,C){switch(E){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},g=function(E,C,it){C=C||1024;let q=E.pos,W=-1,Q=0,Y="",z=String.fromCharCode.apply(null,new Uint16Array(E.subarray(q,q+128)));for(;0>(W=z.indexOf(`
`))&&Q<C&&q<E.byteLength;)Y+=z,Q+=z.length,q+=128,z+=String.fromCharCode.apply(null,new Uint16Array(E.subarray(q,q+128)));return-1<W?(E.pos+=Q+W+1,Y+z.slice(0,W)):!1},v=function(E){const C=/^#\?(\S+)/,it=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,q=/^\s*FORMAT=(\S+)\s*$/,W=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,Q={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Y,z;for((E.pos>=E.byteLength||!(Y=g(E)))&&h(1,"no header found"),(z=Y.match(C))||h(3,"bad initial token"),Q.valid|=1,Q.programtype=z[1],Q.string+=Y+`
`;Y=g(E),Y!==!1;){if(Q.string+=Y+`
`,Y.charAt(0)==="#"){Q.comments+=Y+`
`;continue}if((z=Y.match(it))&&(Q.gamma=parseFloat(z[1])),(z=Y.match(O))&&(Q.exposure=parseFloat(z[1])),(z=Y.match(q))&&(Q.valid|=2,Q.format=z[1]),(z=Y.match(W))&&(Q.valid|=4,Q.height=parseInt(z[1],10),Q.width=parseInt(z[2],10)),Q.valid&2&&Q.valid&4)break}return Q.valid&2||h(3,"missing format specifier"),Q.valid&4||h(3,"missing image size specifier"),Q},y=function(E,C,it){const O=C;if(O<8||O>32767||E[0]!==2||E[1]!==2||E[2]&128)return new Uint8Array(E);O!==(E[2]<<8|E[3])&&h(3,"wrong scanline width");const q=new Uint8Array(4*C*it);q.length||h(4,"unable to allocate buffer space");let W=0,Q=0;const Y=4*O,z=new Uint8Array(4),V=new Uint8Array(Y);let ft=it;for(;ft>0&&Q<E.byteLength;){Q+4>E.byteLength&&h(1),z[0]=E[Q++],z[1]=E[Q++],z[2]=E[Q++],z[3]=E[Q++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=O)&&h(3,"bad rgbe scanline format");let mt=0,yt;for(;mt<Y&&Q<E.byteLength;){yt=E[Q++];const Ut=yt>128;if(Ut&&(yt-=128),(yt===0||mt+yt>Y)&&h(3,"bad scanline data"),Ut){const $t=E[Q++];for(let G=0;G<yt;G++)V[mt++]=$t}else V.set(E.subarray(Q,Q+yt),mt),mt+=yt,Q+=yt}const Tt=O;for(let Ut=0;Ut<Tt;Ut++){let $t=0;q[W]=V[Ut+$t],$t+=O,q[W+1]=V[Ut+$t],$t+=O,q[W+2]=V[Ut+$t],$t+=O,q[W+3]=V[Ut+$t],W+=4}ft--}return q},b=function(E,C,it,O){const q=E[C+3],W=Math.pow(2,q-128)/255;it[O+0]=E[C+0]*W,it[O+1]=E[C+1]*W,it[O+2]=E[C+2]*W,it[O+3]=1},D=function(E,C,it,O){const q=E[C+3],W=Math.pow(2,q-128)/255;it[O+0]=fc.toHalfFloat(Math.min(E[C+0]*W,65504)),it[O+1]=fc.toHalfFloat(Math.min(E[C+1]*W,65504)),it[O+2]=fc.toHalfFloat(Math.min(E[C+2]*W,65504)),it[O+3]=fc.toHalfFloat(1)},M=new Uint8Array(e);M.pos=0;const S=v(M),w=S.width,L=S.height,U=y(M.subarray(M.pos),w,L);let H,F,P;switch(this.type){case ai:P=U.length/4;const E=new Float32Array(P*4);for(let it=0;it<P;it++)b(U,it*4,E,it*4);H=E,F=ai;break;case vi:P=U.length/4;const C=new Uint16Array(P*4);for(let it=0;it<P;it++)D(U,it*4,C,it*4);H=C,F=vi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:w,height:L,data:H,header:S.string,gamma:S.gamma,exposure:S.exposure,type:F}}setDataType(e){return this.type=e,this}load(e,i,r,u){function f(h,d){switch(h.type){case ai:case vi:h.colorSpace=sr,h.minFilter=un,h.magFilter=un,h.generateMipmaps=!1,h.flipY=!0;break}i&&i(h,d)}return super.load(e,f,r,u)}}class Z3 extends j3{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}class K3 extends Qx{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new lr;e.deleteAttribute("uv");const i=new Gc({side:Zn}),r=new Gc,u=new lS(16777215,900,28,2);u.position.set(.418,16.199,.3),this.add(u);const f=new ln(e,i);f.position.set(-.757,13.219,.717),f.scale.set(31.713,28.305,28.591),this.add(f);const h=new nS(e,r,6),d=new _n;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new ln(e,fo(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new ln(e,fo(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new ln(e,fo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new ln(e,fo(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const v=new ln(e,fo(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const y=new ln(e,fo(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const e=new Set;this.traverse(i=>{i.isMesh&&(e.add(i.geometry),e.add(i.material))});for(const i of e)i.dispose()}}function fo(o){return new H1({color:0,emissive:16777215,emissiveIntensity:o})}function Q3({running:o,onFallback:e}){const i=Ln.useRef(null),r=Ln.useRef(o),u=Ln.useRef(e),f=Ln.useRef(()=>{}),[h,d]=Ln.useState(!1);return Ln.useEffect(()=>{r.current=o,u.current=e},[o,e]),Ln.useEffect(()=>{u.current?.(h)},[h]),Ln.useEffect(()=>{const m=i.current;if(!m)return;let p;try{p=new W3({antialias:!0})}catch{d(!0);return}p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),p.toneMapping=Qp,p.toneMappingExposure=1.15,p.shadowMap.enabled=!0,p.shadowMap.type=Lx;const _=p.domElement;_.tabIndex=0,_.setAttribute("aria-label","에어샤워 3D 프리뷰. 드래그로 둘러보고 W A S D 또는 방향키로 이동합니다."),m.appendChild(_);const g=new Qx;g.background=new ye("#e1e5e6");const v=new ii(65,1,.05,40);v.position.set(0,1.62,1.4);let y=!1,b=null;const D=new Vc(p),M=new K3,S=D.fromScene(M,.025);g.environment=S.texture,g.environmentIntensity=1.1,M.dispose(),D.dispose(),new Z3().load("/airshower-assets/studio_small_04_1k.hdr",K=>{if(y){K.dispose();return}const rt=new Vc(p);b=rt.fromEquirectangular(K),g.environment=b.texture,K.dispose(),rt.dispose()},void 0,()=>{});const w=new Set,L=new Set,U=[],H=K=>(w.add(K),K),F=K=>{const rt=new Gc(K);return L.add(rt),rt},P=document.createElement("canvas");P.width=P.height=512;const E=P.getContext("2d");let C=51;const it=()=>(C=C*1664525+1013904223>>>0,C/4294967296);if(E){E.fillStyle="#b5b6b7",E.fillRect(0,0,512,512);for(let K=0;K<512;K++){const rt=140+Math.floor(it()*70);E.strokeStyle=`rgb(${rt},${rt},${rt})`,E.lineWidth=.6,E.beginPath(),E.moveTo(0,K),E.lineTo(512,K),E.stroke()}for(let K=0;K<1500;K++)E.fillStyle=`rgba(255,255,255,${it()*.12})`,E.fillRect(it()*512,it()*512,20+it()*150,.5)}const O=new N1(P);O.wrapS=O.wrapT=Ic,O.repeat.set(2,2),U.push(O);const q=F({color:12632771,metalness:.96,roughness:.32,roughnessMap:O,bumpMap:O,bumpScale:.004}),W=F({color:13685460,metalness:1,roughness:.18}),Q=F({color:1580064,metalness:.55,roughness:.4}),Y=F({color:3554366,roughness:.9}),z=F({color:15264489,roughness:.65}),V=F({color:16745499,roughness:.4}),ft=new B1({color:14282224,metalness:0,roughness:.06,transparent:!0,opacity:.22,depthWrite:!1,clearcoat:1});L.add(ft);const mt=F({color:16777215,emissive:16383487,emissiveIntensity:3}),yt=H(new lr(1,1,1)),Tt=(K,rt,at,wt,Kt,fe,ae,Be=g)=>{const Ze=new ln(yt,wt);return Ze.scale.set(K,rt,at),Ze.position.set(Kt,fe,ae),Ze.castShadow=wt!==ft&&wt!==mt,Ze.receiveShadow=wt!==ft,Be.add(Ze),Ze},Ut=H(new Hc(.05,.009,8,28)),$t=H(new hm(.105,24,16)),G=H(new Hc(.126,.018,12,40)),_t=H(new Nl(.155,.14,.035,40)),et=H(new Nl(.047,.055,.045,24)),dt=H(new Nl(.012,.012,.007,12)),St=(K,rt,at,wt=0,Kt=0,fe=0)=>{const ae=new ln(K,rt);return ae.position.set(wt,Kt,fe),at.add(ae),ae},It=(K,rt,at)=>{const wt=new Cl;wt.position.set(K*1.18,rt,at),wt.rotation.y=-K*Math.PI/2,g.add(wt);const Kt=St(_t,q,wt);Kt.rotation.x=Math.PI/2,St(G,W,wt,0,0,.03),St($t,W,wt,0,0,-.01);const fe=St(et,Q,wt,0,0,.09);fe.rotation.x=Math.PI/2;const ae=St(Ut,q,wt,0,0,.116);ae.rotation.x=0};for(const K of[-1,1]){for(let rt=0;rt<3;rt++)for(let at=0;at<4;at++){const wt=.49+rt*.88,Kt=-1.875+at*1.25;Tt(.075,.87,1.24,q,K*1.25,wt,Kt);for(const fe of[-.38,.38])for(const ae of[-.56,.56]){const Be=St(dt,W,g,K*1.208,wt+fe,Kt+ae);Be.rotation.z=Math.PI/2,Tt(.004,.003,.014,Q,K*1.203,wt+fe,Kt+ae)}}for(const rt of[-1.65,-.45,.75,1.95])for(const at of[.8,1.45,2.1])It(K,at,rt);Tt(.04,.28,4.7,Q,K*1.2,.16,0);for(let rt=0;rt<6;rt++)Tt(.045,.015,4.65,q,K*1.17,.065+rt*.037,0);Tt(.09,.06,5,W,K*1.2,2.69,0)}Tt(2.58,.1,5.15,q,0,-.06,0),Tt(2.58,.08,5.15,q,0,2.76,0);for(let K=-1.1;K<1.2;K+=.2)for(let rt=-2.35;rt<2.4;rt+=.16)Tt(.095,.003,.025,Q,K,.001,rt);for(const K of[-1.6,0,1.6]){Tt(1.35,.045,.7,Q,0,2.69,K),Tt(1.27,.018,.62,mt,0,2.66,K);const rt=new lS(16186111,14,6,2);rt.position.set(0,2.48,K),g.add(rt)}const Dt=new K1(16777215,45,9,.9,.8,1.4);Dt.position.set(0,2.5,1.9),Dt.target.position.set(0,.5,-1),Dt.castShadow=!0,Dt.shadow.mapSize.set(1024,1024),Dt.shadow.bias=-.001,g.add(Dt,Dt.target),g.add(new j1(16054266,9409430,1.1));for(const K of[-1,1]){const rt=K*2.53;for(const at of[-1.13,1.13])Tt(.24,2.7,.09,Y,at,1.35,rt),Tt(.23,2.65,.1,q,at,1.35,rt-K*.04);Tt(2.1,.56,.1,q,0,.28,rt-K*.04),Tt(2.1,.36,.1,q,0,2.54,rt-K*.04);for(const at of[-.97,.97])Tt(.11,1.85,.1,W,at,1.46,rt-K*.07);Tt(1.85,1.8,.018,ft,0,1.46,rt-K*.1),Tt(2.5,2.7,.1,z,0,1.35,rt+K*2.5);for(const at of[-1.3,1.3])Tt(.1,2.7,2.5,z,at,1.35,rt+K*1.25);Tt(2.6,.1,2.5,q,0,-.05,rt+K*1.25),Tt(1.1,.03,1.1,mt,0,2.69,rt+K*1.25),Tt(.08,1.65,.015,W,0,1.55,rt-K*.15),Tt(1.8,.08,.13,W,0,.78,rt-K*.17);for(const at of[-.65,.65])Tt(.055,.36,.07,W,at,1.2,rt-K*.17),Tt(.055,.04,.16,W,at,1.04,rt-K*.2),Tt(.055,.04,.16,W,at,1.36,rt-K*.2);Tt(.33,.2,.025,Q,.85,2.39,rt-K*.1),Tt(.25,.05,.026,V,.85,2.39,rt-K*.12)}g.updateMatrixWorld(!0);const Et=new Map,Xt=[];g.traverse(K=>{if(!(K instanceof ln)||Array.isArray(K.material)||K.material.transparent)return;const rt=`${K.geometry.id}/${K.material.id}/${K.castShadow}/${K.receiveShadow}`,at=Et.get(rt)||[];at.push(K),Et.set(rt,at)});for(const K of Et.values()){if(K.length<2)continue;const rt=K[0],at=new nS(rt.geometry,rt.material,K.length);at.castShadow=rt.castShadow,at.receiveShadow=rt.receiveShadow,K.forEach((wt,Kt)=>{at.setMatrixAt(Kt,wt.matrixWorld),wt.removeFromParent()}),at.instanceMatrix.needsUpdate=!0,at.computeBoundingSphere(),g.add(at),Xt.push(at)}p.shadowMap.autoUpdate=!1,p.shadowMap.needsUpdate=!0;const le=768,Re=new Float32Array(le*3),Te=new Float32Array(le),ne=new Float32Array(le),ue=H(new ri);ue.setAttribute("position",new si(Re,3)),ue.setAttribute("fade",new si(Te,1)),ue.setAttribute("particleSize",new si(ne,1));const B=new Yi({transparent:!0,depthWrite:!1,uniforms:{pixelScale:{value:300}},vertexShader:"attribute float fade; attribute float particleSize; varying float vFade; uniform float pixelScale; void main(){vFade=fade; vec4 p=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*p; gl_PointSize=clamp(particleSize*pixelScale/max(.1,-p.z),1.0,32.0);}",fragmentShader:"varying float vFade; void main(){vec2 p=gl_PointCoord*2.0-1.0; float radius=dot(p,p); if(radius>1.0)discard; float soft=exp(-4.5*radius)*(1.0-smoothstep(.45,1.0,radius)); gl_FragColor=vec4(.87,.94,1.0,soft*vFade*.19);}"});L.add(B);const De=new U1(ue,B);De.frustumCulled=!1,g.add(De);let oe=0,ge=0,Bt=null,N=0,T=!1,j=!1,gt=performance.now(),Mt=0;const pt=new Set,Vt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;f.current=K=>{if(K==="reset"){oe=0,ge=0,v.position.set(0,1.62,1.4);return}const rt=K==="forward"?1:K==="back"?-1:0,at=K==="right"?1:K==="left"?-1:0;v.position.x=Kr.clamp(v.position.x+(Math.sin(oe)*rt+Math.cos(oe)*at)*.25,-.82,.82),v.position.z=Kr.clamp(v.position.z+(-Math.cos(oe)*rt+Math.sin(oe)*at)*.25,-2.05,2.05)};const At=()=>{const K=Bt;Bt=null,pt.clear(),K&&_.hasPointerCapture(K.id)&&_.releasePointerCapture(K.id)},Zt=K=>{K.button!==0||!K.isPrimary||(_.focus({preventScroll:!0}),Bt={id:K.pointerId,x:K.clientX,y:K.clientY},_.setPointerCapture(K.pointerId))},ie=K=>{!Bt||Bt.id!==K.pointerId||(oe-=(K.clientX-Bt.x)*.004,ge=Kr.clamp(ge+(K.clientY-Bt.y)*.003,-1.2,1.2),Bt={id:K.pointerId,x:K.clientX,y:K.clientY})},bt=K=>{Bt?.id===K.pointerId&&At()},Rt=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]),kt=K=>{Rt.has(K.code)&&(K.preventDefault(),pt.add(K.code))},Yt=K=>pt.delete(K.code);_.addEventListener("pointerdown",Zt),_.addEventListener("pointermove",ie),_.addEventListener("pointerup",bt),_.addEventListener("pointercancel",bt),_.addEventListener("lostpointercapture",bt),_.addEventListener("keydown",kt),_.addEventListener("keyup",Yt),_.addEventListener("blur",At),window.addEventListener("blur",At),document.addEventListener("visibilitychange",At);const Ht=()=>{const K=Math.max(m.clientWidth,1),rt=Math.max(m.clientHeight,1);p.setSize(K,rt),v.aspect=K/rt,v.updateProjectionMatrix()},me=new ResizeObserver(Ht);me.observe(m),Ht();const k=new ut,Lt=K=>{if(T||j)return;N=requestAnimationFrame(Lt);const rt=Math.min((K-gt)/1e3,.05);if(gt=K,document.hidden)return;const at=Number(pt.has("KeyW")||pt.has("ArrowUp"))-Number(pt.has("KeyS")||pt.has("ArrowDown")),wt=Number(pt.has("KeyD")||pt.has("ArrowRight"))-Number(pt.has("KeyA")||pt.has("ArrowLeft")),Kt=Math.hypot(at,wt)||1;if(v.position.x=Kr.clamp(v.position.x+(Math.sin(oe)*at+Math.cos(oe)*wt)*rt*.85/Kt,-.82,.82),v.position.z=Kr.clamp(v.position.z+(-Math.cos(oe)*at+Math.sin(oe)*wt)*rt*.85/Kt,-2.05,2.05),k.set(v.position.x+Math.sin(oe)*Math.cos(ge),1.62+Math.sin(ge),v.position.z-Math.cos(oe)*Math.cos(ge)),v.lookAt(k),De.visible=r.current,r.current){Vt||(Mt+=rt),B.uniforms.pixelScale.value=p.domElement.height/(2*Math.tan(Kr.degToRad(v.fov/2)));for(let fe=0;fe<le;fe++){const ae=Math.floor(fe/32),Be=fe%32,Ze=ae%2?-1:1,Sn=Math.floor(ae/2)%3,Ts=Math.floor(ae/6),Ao=Math.sin(fe*127.1+31.7)*43758.5453%1,pa=Math.abs(Ao),Pn=(Be/32+pa*.17+Mt*(.34+pa*.12))%1,Gn=Be*2.399963+ae*.73,Wi=.018+.36*Pn,Vn=Mt*.9+Pn*5+ae,ji=Math.sqrt(.18+pa*.82)*Wi,xi=Ze*(1.08-Pn*1.04),bs=.8+Sn*.65+Math.cos(Gn+Vn*.35)*ji+Math.sin(Vn)*.035*Pn,Ha=-1.65+Ts*1.2+Math.sin(Gn+Vn*.35)*ji+Math.cos(Vn*1.3)*.045*Pn;Re.set([xi,bs,Ha],fe*3),Te[fe]=Math.min(1,Pn/.1)*Math.pow(1-Pn,1.25),ne[fe]=(.025+.027*pa)*(1+Pn*1.6)}ue.attributes.position.needsUpdate=!0,ue.attributes.fade.needsUpdate=!0,ue.attributes.particleSize.needsUpdate=!0}p.render(g,v)},Ct=K=>{K.preventDefault(),j=!0,y=!0,cancelAnimationFrame(N),At(),d(!0)};return _.addEventListener("webglcontextlost",Ct),N=requestAnimationFrame(Lt),()=>{f.current=()=>{},T=!0,y=!0,b?.dispose(),cancelAnimationFrame(N),At(),me.disconnect(),_.removeEventListener("pointerdown",Zt),_.removeEventListener("pointermove",ie),_.removeEventListener("pointerup",bt),_.removeEventListener("pointercancel",bt),_.removeEventListener("lostpointercapture",bt),_.removeEventListener("keydown",kt),_.removeEventListener("keyup",Yt),_.removeEventListener("blur",At),window.removeEventListener("blur",At),document.removeEventListener("visibilitychange",At),_.removeEventListener("webglcontextlost",Ct),Xt.forEach(K=>K.dispose()),w.forEach(K=>K.dispose()),L.forEach(K=>K.dispose()),U.forEach(K=>K.dispose()),S.dispose(),Dt.shadow.dispose(),p.dispose(),_.remove()}},[]),Jt.jsxs("div",{className:"air-preview-scene",ref:i,children:[!h&&Jt.jsxs("div",{className:"air-preview-move",role:"group","aria-label":"3D 위치 이동",children:[Jt.jsx("button",{type:"button",onClick:()=>f.current("left"),"aria-label":"왼쪽으로 한 걸음",children:"←"}),Jt.jsx("button",{type:"button",onClick:()=>f.current("forward"),"aria-label":"앞으로 한 걸음",children:"↑"}),Jt.jsx("button",{type:"button",onClick:()=>f.current("back"),"aria-label":"뒤로 한 걸음",children:"↓"}),Jt.jsx("button",{type:"button",onClick:()=>f.current("right"),"aria-label":"오른쪽으로 한 걸음",children:"→"}),Jt.jsx("button",{type:"button",onClick:()=>f.current("reset"),children:"시점 초기화"})]}),h&&Jt.jsxs("div",{className:"air-preview-fallback",role:"img","aria-label":"3D를 사용할 수 없는 환경의 2D 에어샤워 개념도",children:[Jt.jsxs("svg",{viewBox:"0 0 900 600",children:[Jt.jsx("rect",{width:"900",height:"600",fill:"#c7cbcd"}),Jt.jsx("path",{d:"M0 0 270 130v340L0 600ZM900 0 630 130v340l270 130Z",fill:"#92999d"}),Jt.jsx("rect",{x:"280",y:"135",width:"340",height:"330",fill:"#bbc6cb",stroke:"#e5e8e9",strokeWidth:"10"}),Jt.jsx("rect",{x:"320",y:"175",width:"260",height:"200",fill:"#dce9ec"}),[200,300,400].map(m=>Jt.jsx("g",{children:[140,760].map(p=>Jt.jsxs("g",{children:[Jt.jsx("ellipse",{cx:p,cy:m,rx:"30",ry:"40",fill:"#cdd1d3"}),Jt.jsx("ellipse",{cx:p,cy:m,rx:"14",ry:"23",fill:"#353b3f"})]},p))},m))]}),Jt.jsx("p",{children:"2D 대체 화면 · 이 환경에서는 3D 회전과 이동을 사용할 수 없어요."})]})]})}class J3{context=null;source=null;gain=null;filters=[];desired=0;disposed=!1;async play(e){if(this.disposed)return!1;this.desired=Math.max(0,Math.min(1,e))*.28;try{if(!this.context){const i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;const r=this.context=new i,u=r.createBuffer(1,r.sampleRate*4,r.sampleRate),f=u.getChannelData(0);let h=0;for(let g=0;g<f.length;g++){const v=Math.random()*2-1;h=.97*h+.03*v,f[g]=v*.55+h*3.5}const d=this.source=r.createBufferSource();d.buffer=u,d.loop=!0;const m=r.createBiquadFilter();m.type="highpass",m.frequency.value=170,m.Q.value=.4;const p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=3700,p.Q.value=.5,this.filters=[m,p];const _=this.gain=r.createGain();_.gain.value=0,d.connect(m),m.connect(p),p.connect(_),_.connect(r.destination),d.start()}return await this.context.resume(),this.disposed||this.context.state!=="running"?!1:(this.ramp(this.desired,.28),!0)}catch{return!1}}setVolume(e){this.desired=Math.max(0,Math.min(1,e))*.28,this.ramp(this.desired,.12)}stop(){this.desired=0,this.ramp(0,.15)}ramp(e,i){if(!this.gain||!this.context||this.context.state==="closed")return;const r=this.gain.gain,u=this.context.currentTime;r.cancelScheduledValues(u),r.setValueAtTime(r.value,u),r.linearRampToValueAtTime(e,u+i)}dispose(){this.disposed=!0,this.desired=0;try{this.source?.stop()}catch{}this.source?.disconnect(),this.filters.forEach(e=>e.disconnect()),this.gain?.disconnect(),this.context?.close().catch(()=>{}),this.context=null,this.source=null,this.gain=null}}function $3(){const[o,e]=Ln.useState(!1),[i,r]=Ln.useState(!1),[u,f]=Ln.useState(!1),[h,d]=Ln.useState(.35),[m,p]=Ln.useState(!1),_=Ln.useRef(null);Ln.useEffect(()=>{const b=()=>{document.hidden&&(e(!1),_.current?.stop())};return document.addEventListener("visibilitychange",b),()=>{document.removeEventListener("visibilitychange",b),_.current?.dispose(),_.current=null}},[]),Ln.useEffect(()=>{i&&(e(!1),_.current?.stop())},[i]);const g=()=>{_.current||(_.current=new J3),_.current.play(h).then(b=>p(!b))},v=()=>{o?(e(!1),_.current?.stop()):(e(!0),u||g())},y=()=>{u?(f(!1),o&&g()):(_.current?.stop(),f(!0))};return Jt.jsxs("main",{className:"asp-page",children:[Jt.jsxs("header",{children:[Jt.jsxs("b",{children:[Jt.jsx("span",{children:"▥"})," 방구석 반도체"]}),Jt.jsx("span",{children:"에어샤워실 · 3D 품질 검토"}),Jt.jsx("small",{children:"로컬 프리뷰 · 미배포"})]}),Jt.jsx("div",{className:"asp-caution",children:"실제 시설의 승인된 SOP와 교육을 따르세요. 실제 설비·제진 성능을 재현하는 시뮬레이터가 아닌 시각 시제품입니다."}),Jt.jsxs("div",{className:"asp-layout",children:[Jt.jsxs("aside",{children:[Jt.jsx("span",{className:"asp-kicker",children:"SPACE STUDY / 01"}),Jt.jsx("h1",{children:"에어샤워실"}),Jt.jsx("p",{children:"좁은 스테인리스 공간 안에서 노즐, 문, 천장 조명을 가까이 살펴보세요."}),Jt.jsx("h2",{children:"직접 둘러보기"}),Jt.jsxs("ul",{children:[Jt.jsx("li",{children:"화면을 드래그: 시선 회전"}),Jt.jsx("li",{children:"W A S D 또는 방향키: 이동"}),Jt.jsx("li",{children:"하단 이동 버튼: 터치·마우스 이동"})]}),Jt.jsx("p",{children:"이동은 실내 경계 안으로 제한돼요. 다른 조작을 할 때는 이동 키를 놓아 주세요."}),Jt.jsx("button",{disabled:i,onClick:v,children:o?"공기 분사 일시정지":"공기 분사 재생"}),Jt.jsxs("div",{className:"asp-audio",children:[Jt.jsx("button",{className:"asp-mute","aria-pressed":u,onClick:y,children:u?"소리 켜기":"소리 끄기"}),Jt.jsxs("label",{children:["바람 소리 크기 ",Jt.jsx("input",{type:"range",min:"0",max:"100",value:Math.round(h*100),onChange:b=>{const D=Number(b.target.value)/100;d(D),o&&!u&&_.current?.setVolume(D)}}),Jt.jsxs("output",{children:[Math.round(h*100),"%"]})]}),Jt.jsx("small",{children:"재생 버튼을 누른 뒤 부드러운 ‘솨~’ 합성음을 재생해요. 탭을 떠나면 분사와 소리가 멈춰요."}),m&&Jt.jsx("p",{role:"status",children:"소리가 허용되지 않았어요. 재생 버튼을 다시 누르거나 소리 없이 체험할 수 있어요."})]}),Jt.jsxs("div",{className:"asp-note",children:[Jt.jsx("strong",{children:"검토할 것"}),Jt.jsx("p",{children:"금속 반사, 공간의 깊이, 노즐의 입체감, 이동 시 시차를 확인해 주세요."})]}),Jt.jsx("small",{children:"퍼지는 입자는 바람을 설명하기 위한 가시화예요. 실제 공기나 오염 입자의 크기·농도를 재현하지 않으며 소리도 실제 설비 녹음이 아닌 합성음입니다."})]}),Jt.jsx("section",{className:"asp-stage",children:Jt.jsx(Q3,{running:o,onFallback:r})}),Jt.jsxs("aside",{children:[Jt.jsx("h2",{children:"제작 범위"}),Jt.jsx("p",{children:"실제 Three.js 기하 모델과 조명으로 렌더링해요. 사진을 붙인 배경이나 완성 영상이 아닙니다."}),Jt.jsx("p",{children:"사진 수준 실사 충족 여부는 GPU 렌더 화면을 보고 판단해야 하며, 현재 완성이라고 주장하지 않습니다."}),Jt.jsxs("div",{className:"asp-note",children:[Jt.jsx("strong",{children:i?"3D 검증 환경이 필요해요":"3D 품질 검토용"}),Jt.jsx("p",{children:i?"현재 브라우저는 WebGL을 지원하지 않아요. 여기 보이는 안내 화면으로 3D 품질을 판단할 수 없습니다.":"금속 재질·노즐·문·공기 흐름을 살펴보세요. 캐릭터 착의와 팹 확장은 이번 단일 공간 검토 범위가 아닙니다."})]}),Jt.jsx("h2",{children:"자산 출처"}),Jt.jsx("p",{children:"확보된 외부 자산만 로컬 파일로 사용하며 출처·라이선스는 프로젝트에 기록합니다. 공간 형상은 독자 제작합니다."})]})]})]})}oE.createRoot(document.getElementById("root")).render(Jt.jsx(tE.StrictMode,{children:Jt.jsx($3,{})}));
