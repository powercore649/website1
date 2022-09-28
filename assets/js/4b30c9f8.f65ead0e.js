"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[210],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"lerna-and-nx",title:"Lerna and Nx",type:"explainer"},s="Lerna and Nx",u={unversionedId:"lerna-and-nx",id:"lerna-and-nx",title:"Lerna and Nx",description:"Nrwl (the company behind the open source build system Nx) has taken over stewardship of Lerna. Nx is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna v5 is the first release under this new stewardship, updating outdated packages and starting to do some cleanup on the repository itself. Starting with v5.1+, Lerna comes with the new possibility to integrate Nx and defer a lot of the task scheduling work to it.",source:"@site/docs/lerna-and-nx.md",sourceDirName:".",slug:"/lerna-and-nx",permalink:"/docs/lerna-and-nx",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/lerna-and-nx.md",tags:[],version:"current",frontMatter:{id:"lerna-and-nx",title:"Lerna and Nx",type:"explainer"},sidebar:"main",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Features",permalink:"/docs/features"}},p={},d=[{value:"Lerna",id:"lerna",level:2},{value:"Features",id:"features",level:3},{value:"Cost",id:"cost",level:3},{value:"Set up",id:"set-up",level:3},{value:"Nx",id:"nx",level:2},{value:"Features",id:"features-1",level:3},{value:"Cost",id:"cost-1",level:3},{value:"Set up",id:"set-up-1",level:3},{value:"Nx Cloud",id:"nx-cloud",level:2},{value:"Features",id:"features-2",level:3},{value:"Cost",id:"cost-2",level:3},{value:"Set up",id:"set-up-2",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lerna-and-nx"},"Lerna and Nx"),(0,i.kt)("p",null,"Nrwl (the company behind the open source build system Nx) has taken over ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/nrwl/lerna-is-dead-long-live-lerna-3jal"},"stewardship of Lerna"),". ",(0,i.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx")," is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna v5 is the first release under this new stewardship, updating outdated packages and starting to do some cleanup on the repository itself. Starting with v5.1+, Lerna comes with the new possibility to integrate Nx and defer a lot of the task scheduling work to it."),(0,i.kt)("p",null,"The following is a high level overview of what each tool provides. Note that all of the existing Lerna commands will continue to function as they have. Adding Nx or Nx Cloud simply improves what you're already doing."),(0,i.kt)("h2",{id:"lerna"},"Lerna"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/bootstrap"},"Bootstrap")," - Link packages together in the same repo so they can be imported as if they were installed from NPM."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/version-and-publish"},"Version")," - Automatically increment versions of packages"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/version-and-publish"},"Publish")," - Automatically create tags and publish packages")),(0,i.kt)("h3",{id:"cost"},"Cost"),(0,i.kt)("p",null,"Free and open source"),(0,i.kt)("h3",{id:"set-up"},"Set up"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm install lerna")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx lerna init"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"nx"},"Nx"),(0,i.kt)("h3",{id:"features-1"},"Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/run-tasks"},"Run only tasks affected by a code change")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/run-tasks"},"Run prerequisite tasks first")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/cache-tasks"},"Cache task results locally")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/project-graph"},"Visualize the project graph")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/project-graph"},"Nx Console")," - Visual Studio Code plugin")),(0,i.kt)("h3",{id:"cost-1"},"Cost"),(0,i.kt)("p",null,"Free and open source"),(0,i.kt)("h3",{id:"set-up-1"},"Set up"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm install nx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx nx init")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},'"useNx": true')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"lerna.json")),(0,i.kt)("li",{parentName:"ul"},"Continue using Lerna as usual")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When Lerna is set to use Nx and detects ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json")," in the workspace, it will defer to Nx to detect task dependencies. Some options for ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna run")," will behave differently. See ",(0,i.kt)("a",{parentName:"p",href:"./recipes/using-lerna-powered-by-nx-to-run-tasks"},"Using Lerna (Powered by Nx) to Run Tasks")," for more details."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"nx-cloud"},"Nx Cloud"),(0,i.kt)("h3",{id:"features-2"},"Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/cache-tasks#distributed-computation-caching"},"Share cached task results across the organization")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./features/distribute-tasks"},"Distribute task execution")," efficiently across agent machines")),(0,i.kt)("h3",{id:"cost-2"},"Cost"),(0,i.kt)("p",null,"Free for open source projects"),(0,i.kt)("p",null,"For closed source repositories, the first 500 computation hours per month are free. Most repositories do not exceed this limit. $1 per computation hour after that."),(0,i.kt)("h3",{id:"set-up-2"},"Set up"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx nx connect-to-nx-cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nx generate @nrwl/workspace:ci-workflow")," (or set up your CI manually)"),(0,i.kt)("li",{parentName:"ul"},"Continue using Lerna as usual")))}m.isMDXComponent=!0}}]);