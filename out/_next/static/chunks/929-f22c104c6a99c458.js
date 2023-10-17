"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{5277:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return addLocale}}),r(474);let addLocale=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5468:function(e,t,r){function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(474),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6964:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let n=r(1024),o=r(8533),i=o._(r(2265)),a=n._(r(4887)),l=n._(r(9232)),u=r(3655),s=r(6921),c=r(8143);r(7707);let f=r(7650),d=n._(r(5324)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,n,o,i){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:l,decoding:u,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:g,fill:m,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:v,onLoad:P,onError:_,...S}=e;return i.default.createElement("img",{...S,...getDynamicProps(f),loading:p,width:l,height:a,decoding:u,"data-nimg":m?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&handleLoading(e,d,h,y,b,g))},[r,d,h,y,b,_,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,d,h,y,b,g)},onError:e=>{v(!0),"empty"!==d&&b(!0),_&&_(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let m=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let h=(0,i.useRef)(l);(0,i.useEffect)(()=>{h.current=l},[l]);let[y,b]=(0,i.useState)(!1),[v,P]=(0,i.useState)(!1),{props:_,meta:S}=(0,u.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:y,showAltText:v});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:P,ref:t}),S.priority?i.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4724:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(1024),o=n._(r(2265)),i=r(7896),a=r(9357),l=r(7746),u=r(2337),s=r(5277),c=r(7650),f=r(1792),d=r(1013),p=r(5468),g=r(9207),m=r(2271),h=new Set;function prefetch(e,t,r,n,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:h,children:y,prefetch:b=null,passHref:v,replace:P,shallow:_,scroll:S,locale:R,onClick:O,onMouseEnter:w,onTouchStart:E,legacyBehavior:j=!1,...x}=e;r=y,j&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let C=o.default.useContext(c.RouterContext),M=o.default.useContext(f.AppRouterContext),N=null!=C?C:M,I=!C,U=!1!==b,k=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:L,as:A}=o.default.useMemo(()=>{if(!C){let e=formatStringOrUrl(l);return{href:e,as:h?formatStringOrUrl(h):e}}let[e,t]=(0,i.resolveHref)(C,l,!0);return{href:e,as:h?(0,i.resolveHref)(C,h):t||e}},[C,l,h]),z=o.default.useRef(L),T=o.default.useRef(A);j&&(n=o.default.Children.only(r));let D=j?n&&"object"==typeof n&&n.ref:t,[W,F,B]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(T.current!==A||z.current!==L)&&(B(),T.current=A,z.current=L),W(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[A,D,L,B,W]);o.default.useEffect(()=>{N&&F&&U&&prefetch(N,L,A,{locale:R},{kind:k},I)},[A,L,F,R,U,null==C?void 0:C.locale,N,I,k]);let K={ref:q,onClick(e){j||"function"!=typeof O||O(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,i,l,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,N,L,A,P,_,S,R,I,U)},onMouseEnter(e){j||"function"!=typeof w||w(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(U||!I)&&prefetch(N,L,A,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:k},I)},onTouchStart(e){j||"function"!=typeof E||E(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(U||!I)&&prefetch(N,L,A,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:k},I)}};if((0,u.isAbsoluteUrl)(A))K.href=A;else if(!j||v||"a"===n.type&&!("href"in n.props)){let e=void 0!==R?R:null==C?void 0:C.locale,t=(null==C?void 0:C.isLocaleDomain)&&(0,p.getDomainLocale)(A,e,null==C?void 0:C.locales,null==C?void 0:C.domainLocales);K.href=t||(0,g.addBasePath)((0,s.addLocale)(A,e,null==C?void 0:C.defaultLocale))}return j?o.default.cloneElement(n,K):o.default.createElement("a",{...x,...K},r)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4913:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7896:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});let n=r(8888),o=r(7746),i=r(9946),a=r(2337),l=r(474),u=r(9357),s=r(1956),c=r(5125);function resolveHref(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),g=p?d.slice(p[0].length):d,m=g.split("?");if((m[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(g);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(r,l)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1013:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(2265),o=r(4913),i="function"==typeof IntersectionObserver,a=new Map,l=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6948:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let n=r(1024),o=n._(r(2265)),i=o.default.createContext({})},8827:function(e,t){function isInAmpMode(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},2361:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(e){return r.test(e)?e.replace(n,"\\$&"):e}},3655:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(7707);let n=r(8932),o=r(6921);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let i,a,l,{src:u,sizes:s,unoptimized:c=!1,priority:f=!1,loading:d,className:p,quality:g,width:m,height:h,fill:y=!1,style:b,onLoad:v,onLoadingComplete:P,placeholder:_="empty",blurDataURL:S,fetchPriority:R,layout:O,objectFit:w,objectPosition:E,lazyBoundary:j,lazyRoot:x,...C}=e,{imgConf:M,showAltText:N,blurComplete:I,defaultLoader:U}=t,k=M||o.imageConfigDefault;if("allSizes"in k)i=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);i={...k,allSizes:e,deviceSizes:t}}let L=C.loader||U;delete C.loader,delete C.srcSet;let A="__next_img_default"in L;if(A){if("custom"===i.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!s&&(s=t)}let z="",T=getInt(m),D=getInt(h);if("object"==typeof(r=u)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,l=e.blurHeight,S=S||e.blurDataURL,z=e.src,!y){if(T||D){if(T&&!D){let t=T/e.width;D=Math.round(e.height*t)}else if(!T&&D){let t=D/e.height;T=Math.round(e.width*t)}}else T=e.width,D=e.height}}let W=!f&&("lazy"===d||void 0===d);(!(u="string"==typeof u?u:z)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,W=!1),i.unoptimized&&(c=!0),A&&u.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(c=!0),f&&(R="high");let F=getInt(g),B=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:w,objectPosition:E}:{},N?{}:{color:"transparent"},b),q=I||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:T,heightInt:D,blurWidth:a,blurHeight:l,blurDataURL:S||"",objectFit:B.objectFit})+'")':'url("'+_+'")',K=q?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:i,width:u[c]})}}({config:i,src:u,unoptimized:c,width:T,quality:F,sizes:s,loader:L}),G={...C,loading:W?"lazy":d,fetchPriority:R,width:T,height:D,decoding:"async",className:p,style:{...B,...K},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Q={unoptimized:c,priority:f,placeholder:_,fill:y};return{props:G,meta:Q}}},9232:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return defaultHead},default:function(){return _default}});let n=r(1024),o=r(8533),i=o._(r(2265)),a=n._(r(5184)),l=r(6948),u=r(3305),s=r(8827);function defaultHead(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7707);let c=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){let{inAmpMode:r}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let _default=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:reduceComponents,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8932:function(e,t){function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n?40*n:t,u=o?40*o:r,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},8143:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(1024),o=n._(r(2265)),i=r(6921),a=o.default.createContext(i.imageConfigDefault)},6921:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5324:function(e,t){function defaultLoader(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},7650:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let n=r(1024),o=n._(r(2265)),i=o.default.createContext(null)},7746:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return a},formatWithValidation:function(){return formatWithValidation}});let n=r(8533),o=n._(r(8888)),i=/https?|ftp|gopher|file/;function formatUrl(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(o.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+n+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(e){return formatUrl(e)}},1956:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(3799),o=r(9731)},5125:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});let n=r(5366),o=r(5319);function interpolateAs(e,t,r){let i="",a=(0,o.getRouteRegex)(e),l=a.groups,u=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;i=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(i=i.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},9731:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return isDynamicRoute}});let r=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(e){return r.test(e)}},9357:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});let n=r(2337),o=r(4561);function isLocalURL(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},9946:function(e,t){function omit(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return omit}})},8888:function(e,t){function searchParamsToUrlQuery(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function stringifyUrlQueryParam(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function urlQueryToSearchParams(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,n]=e;Array.isArray(n)?n.forEach(e=>t.append(r,stringifyUrlQueryParam(e))):t.set(r,stringifyUrlQueryParam(n))}),t}function assign(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},5366:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});let n=r(2337);function getRouteMatcher(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let decode=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>decode(e)):t.repeat?[decode(n)]:decode(n))}),i}}},5319:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});let n=r(4507),o=r(2361),i=r(993);function parseParameter(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function getParametrizedRoute(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},a=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:n,repeat:l}=parseParameter(i[1]);return r[e]={pos:a++,repeat:l,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=parseParameter(i[1]);return r[e]={pos:a++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function getRouteRegex(e){let{parameterizedRoute:t,groups:r}=getParametrizedRoute(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function getSafeKeyFromSegment(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:i,optional:a,repeat:l}=parseParameter(r),u=i.replace(/\W/g,"");o&&(u=""+o+u);let s=!1;return(0===u.length||u.length>30)&&(s=!0),isNaN(parseInt(u.slice(0,1)))||(s=!0),s&&(u=t()),o?n[u]=""+o+i:n[u]=""+i,l?a?"(?:/(?<"+u+">.+?))?":"/(?<"+u+">.+?)":"/(?<"+u+">[^/]+?)"}function getNamedParametrizedRoute(e,t){let r;let a=(0,i.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:a.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);return r&&i?getSafeKeyFromSegment({getSafeRouteKey:l,segment:i[1],routeKeys:u,keyPrefix:t?"nxtI":void 0}):i?getSafeKeyFromSegment({getSafeRouteKey:l,segment:i[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function getNamedRouteRegex(e,t){let r=getNamedParametrizedRoute(e,t);return{...getRouteRegex(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function getNamedMiddlewareRegex(e,t){let{parameterizedRoute:r}=getParametrizedRoute(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=getNamedParametrizedRoute(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},3799:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return getSortedRoutes}});let UrlNode=class UrlNode{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let n=e[0];if(n.startsWith("[")&&n.endsWith("]")){let o=n.slice(1,-1),i=!1;if(o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1),i=!0),o.startsWith("...")&&(o=o.substring(3),r=!0),o.startsWith("[")||o.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+o+"').");if(o.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+o+"').");function handleSlug(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===n.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(r){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');handleSlug(this.optionalRestSlugName,o),this.optionalRestSlugName=o,n="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');handleSlug(this.restSlugName,o),this.restSlugName=o,n="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');handleSlug(this.slugName,o),this.slugName=o,n="[]"}}this.children.has(n)||this.children.set(n,new UrlNode),this.children.get(n)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}};function getSortedRoutes(e){let t=new UrlNode;return e.forEach(e=>t.insert(e)),t.smoosh()}},5184:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let n=r(8533),o=n._(r(2265)),i=o.useLayoutEffect,a=o.useEffect;function SideEffect(e){let{headManager:t,reduceComponentsToState:r}=e;function emitChange(){if(t&&t.mountedInstances){let n=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=emitChange),()=>{t&&(t._pendingUpdate=emitChange)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2337:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return execOnce},isAbsoluteUrl:function(){return isAbsoluteUrl},getLocationOrigin:function(){return getLocationOrigin},getURL:function(){return getURL},getDisplayName:function(){return getDisplayName},isResSent:function(){return isResSent},normalizeRepeatedSlashes:function(){return normalizeRepeatedSlashes},loadGetInitialProps:function(){return loadGetInitialProps},SP:function(){return o},ST:function(){return i},DecodeError:function(){return DecodeError},NormalizeError:function(){return NormalizeError},PageNotFoundError:function(){return PageNotFoundError},MissingStaticPage:function(){return MissingStaticPage},MiddlewareNotFoundError:function(){return MiddlewareNotFoundError},stringifyError:function(){return stringifyError}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function execOnce(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=e=>n.test(e);function getLocationOrigin(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function getURL(){let{href:e}=window.location,t=getLocationOrigin();return e.substring(t.length)}function getDisplayName(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function isResSent(e){return e.finished||e.headersSent}function normalizeRepeatedSlashes(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function loadGetInitialProps(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await loadGetInitialProps(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&isResSent(r))return n;if(!n){let t='"'+getDisplayName(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let o="undefined"!=typeof performance,i=o&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);let DecodeError=class DecodeError extends Error{};let NormalizeError=class NormalizeError extends Error{};let PageNotFoundError=class PageNotFoundError extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}};let MissingStaticPage=class MissingStaticPage extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}};let MiddlewareNotFoundError=class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}};function stringifyError(e){return JSON.stringify({message:e.message,stack:e.stack})}},7707:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}}}]);