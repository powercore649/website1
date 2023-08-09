"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"lerna-and-nx-version-matrix",title:"Lerna and Nx Version Matrix",type:"explainer"},i="Lerna and Nx Versions",o={unversionedId:"lerna-and-nx-version-matrix",id:"lerna-and-nx-version-matrix",title:"Lerna and Nx Version Matrix",description:"The latest version of Lerna is kept up to date with the latest major version of Nx in order to support the latest features. If you have an older version of Lerna or Nx, you can use the table below to ensure compatibility between the two.",source:"@site/docs/lerna-and-nx-version-matrix.md",sourceDirName:".",slug:"/lerna-and-nx-version-matrix",permalink:"/docs/lerna-and-nx-version-matrix",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/lerna-and-nx-version-matrix.md",tags:[],version:"current",frontMatter:{id:"lerna-and-nx-version-matrix",title:"Lerna and Nx Version Matrix",type:"explainer"},sidebar:"main",previous:{title:"Utilities",permalink:"/docs/api-reference/utilities"},next:{title:"Legacy Package Management",permalink:"/docs/legacy-package-management"}},p={},s=[{value:"Lerna and Nx Version Compatibility Matrix",id:"lerna-and-nx-version-compatibility-matrix",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lerna-and-nx-versions"},"Lerna and Nx Versions"),(0,a.kt)("p",null,"The latest version of Lerna is kept up to date with the latest major version of Nx in order to support the latest features. If you have an older version of Lerna or Nx, you can use the table below to ensure compatibility between the two."),(0,a.kt)("h2",{id:"lerna-and-nx-version-compatibility-matrix"},"Lerna and Nx Version Compatibility Matrix"),(0,a.kt)("p",null,"Below is a reference table that matches versions of Lerna to the version of Nx that is compatible with it."),(0,a.kt)("p",null,"We provide a recommended version, and it is usually the latest minor version of Nx in the range provided because there will have been bug fixes added since the first release in the range."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Lerna Version"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Nx Version ",(0,a.kt)("em",{parentName:"strong"},"(recommended)"))),(0,a.kt)("th",{parentName:"tr",align:null},"Nx Version ",(0,a.kt)("em",{parentName:"th"},"(range)")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">=7.1.4 <= latest"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"latest")),(0,a.kt)("td",{parentName:"tr",align:null},">=16.5.1 <= latest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 7.0.0 < 7.1.4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"latest")),(0,a.kt)("td",{parentName:"tr",align:null},">=16.3.1 <= latest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 6.5.0 < 7.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},"15.9.4"),(0,a.kt)("td",{parentName:"tr",align:null},">=15.5.2 < 16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 6.4.0 < 6.5.0"),(0,a.kt)("td",{parentName:"tr",align:null},"15.9.4"),(0,a.kt)("td",{parentName:"tr",align:null},">=15.4.2 < 16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 6.0.1 < 6.4.0"),(0,a.kt)("td",{parentName:"tr",align:null},"15.9.4"),(0,a.kt)("td",{parentName:"tr",align:null},">=14.8.6 < 16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 5.6.0 < 6.0.1"),(0,a.kt)("td",{parentName:"tr",align:null},"15.9.4"),(0,a.kt)("td",{parentName:"tr",align:null},">=14.8.1 < 16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">=5.5.0 < 5.6.0"),(0,a.kt)("td",{parentName:"tr",align:null},"15.9.4"),(0,a.kt)("td",{parentName:"tr",align:null},">=14.6.1 < 16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">=5.4.0 < 5.5.0"),(0,a.kt)("td",{parentName:"tr",align:null},"15.9.4"),(0,a.kt)("td",{parentName:"tr",align:null},">=14.5.4 < 16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 5.2.0 < 5.4.0"),(0,a.kt)("td",{parentName:"tr",align:null},"15.9.4"),(0,a.kt)("td",{parentName:"tr",align:null},">=14.4.3 < 16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"< 5.2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A","*"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A","*")))),(0,a.kt)("p",null,"*","Lerna does not depend on Nx before version 5.2.0"))}m.isMDXComponent=!0}}]);