"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[111],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(k,i(i({ref:n},c),{},{components:t})):o.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1194:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],p={id:"bootstrapping",title:"Bootstrapping"},s="Bootstrapping",l={unversionedId:"core-concepts/bootstrapping",id:"core-concepts/bootstrapping",title:"Bootstrapping",description:"Lerna links different projects within the repo so they can import each other without having to publish anything to NPM. To show how Lerna does it, we will take this repository as an example.",source:"@site/docs/core-concepts/bootstrapping.md",sourceDirName:"core-concepts",slug:"/core-concepts/bootstrapping",permalink:"/docs/core-concepts/bootstrapping",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/core-concepts/bootstrapping.md",tags:[],version:"current",frontMatter:{id:"bootstrapping",title:"Bootstrapping"},sidebar:"main",previous:{title:"Core Concepts",permalink:"/docs/core-concepts"},next:{title:"Running Tasks",permalink:"/docs/core-concepts/running-tasks"}},c={},d=[{value:"Hoisting",id:"hoisting",level:2},{value:"Linking Different Folders",id:"linking-different-folders",level:2},{value:"<code>useWorkspaces</code>",id:"useworkspaces",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bootstrapping"},"Bootstrapping"),(0,r.kt)("p",null,"Lerna links different projects within the repo so they can import each other without having to publish anything to NPM. To show how Lerna does it, we will take ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/getting-started-example"},"this repository")," as an example."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you learn better by doing, clone the repo and follow along.")),(0,r.kt)("p",null,"The repo contains three packages or projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header")," (a library of React components)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"footer")," (a library of React components)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remixapp")," (an app written using the Remix framework which depends on both ",(0,r.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"footer"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"packages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,r.kt)("p",null,"The Remix app imports the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," libraries as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="packages/remixapp/app/routes/index.tsx"',jsx:!0,title:'"packages/remixapp/app/routes/index.tsx"'},'import { Header } from "header";\nimport { Footer } from "footer";\n\nexport default function Index() {\n  return (\n    <>\n      <Header />\n      <div>Content!</div>\n      <Footer />\n    </>\n  );\n}\n')),(0,r.kt)("p",null,"And it depends on them in its ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/remixapp/package.json"',title:'"packages/remixapp/package.json"'},'{\n  "dependencies": {\n    "@remix-run/node": "^1.5.1",\n    "@remix-run/react": "^1.5.1",\n    "@remix-run/serve": "^1.5.1",\n    "react": "^17.0.2",\n    "react-dom": "^17.0.2",\n    "header": "*",\n    "footer": "*"\n  }\n}\n')),(0,r.kt)("p",null,"There are several ways to set up your monorepo such that ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp")," can find ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer"),", and one of them is to make it such that the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," end up in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder of ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp")," (or a different folder at the root)--that's what ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," does."),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," will invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," in each of the packages, and will link local package such that the resulting structure will look like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"packages/\n    header/\n        node_modules/\n            react/\n            ...\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        node_modules/\n            react/\n            ...\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        node_modules/\n            react/\n            header (symlinked to ../../header)\n            footer (symlinked to ../../footer)\n            ...\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,r.kt)("h2",{id:"hoisting"},"Hoisting"),(0,r.kt)("p",null,"By default, Lerna is going to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," in every directory which results in node modules duplication. You can dedupe the packages by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--hoist"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> lerna bootstrap --hoist\n")),(0,r.kt)("p",null,"the following happens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node_modules/\n    react/\n    header (symlinked to ../packages/header)\n    footer (symlinked to ../packages/footer)\n            ...\npackages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"../guides/hoisting"},"hoisting in the corresponding guide"),"."),(0,r.kt)("h2",{id:"linking-different-folders"},"Linking Different Folders"),(0,r.kt)("p",null,"By default, Lerna links the contents of the folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node_modules/\n    header/\n        src/\n        package.json\n        rollup.config.json\n        jest.config.js\n            ...\npackages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n")),(0,r.kt)("p",null,"This happens to work if you set the main property to point to the compiler artifact, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," package does."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/header/package.json"',title:'"packages/header/package.json"'},'{\n  "name": "header",\n  "version": "0.1.0",\n  "private": true,\n  "main": "dist/index.js",\n  "scripts": {\n    "build": "rm -rf dist && rollup --config",\n    "test": "jest"\n  }\n}\n')),(0,r.kt)("p",null,"You can also link a subdirectory as follows using ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap --contents=dist"),". The name has to apply to all the\npackages."),(0,r.kt)("h2",{id:"useworkspaces"},(0,r.kt)("inlineCode",{parentName:"h2"},"useWorkspaces")),(0,r.kt)("p",null,"Since Lerna was created, all major package managers (npm, yarn, and pnpm) have added the ability to cross-link packages in the same repo and dedupe node modules. If you'd like Lerna to delegate this process to the package manager you use, invoke the bootstrap command as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> lerna bootstrap --use-workspaces\n")),(0,r.kt)("p",null,"Alternatively you can configure this as the default behavior in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lerna.json"',title:'"lerna.json"'},'{\n    ...\n    "useWorkspaces": true\n}\n')))}m.isMDXComponent=!0}}]);