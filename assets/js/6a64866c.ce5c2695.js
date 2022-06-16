"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[769],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9091:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"running-tasks",title:"Running Tasks"},l="Running Tasks",p={unversionedId:"core-concepts/running-tasks",id:"core-concepts/running-tasks",title:"Running Tasks",description:"Monorepos can have hundreds or even thousands of projects, so being able to run npm scripts against all (or some) of",source:"@site/docs/core-concepts/running-tasks.md",sourceDirName:"core-concepts",slug:"/core-concepts/running-tasks",permalink:"/docs/core-concepts/running-tasks",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/core-concepts/running-tasks.md",tags:[],version:"current",frontMatter:{id:"running-tasks",title:"Running Tasks"},sidebar:"main",previous:{title:"Bootstrapping",permalink:"/docs/core-concepts/bootstrapping"},next:{title:"Versioning and Publishing",permalink:"/docs/core-concepts/versioning-and-publishing"}},u={},c=[{value:"Definitions",id:"definitions",level:2},{value:"Capabilities of a Modern Monorepo Tool",id:"capabilities-of-a-modern-monorepo-tool",level:2},{value:"Examples",id:"examples",level:2},{value:"Run Everything",id:"run-everything",level:2},{value:"Target Dependencies (aka task pipelines)",id:"target-dependencies-aka-task-pipelines",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Caching",id:"caching",level:2}],d={toc:c};function m(e){var n=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-tasks"},"Running Tasks"),(0,i.kt)("p",null,"Monorepos can have hundreds or even thousands of projects, so being able to run npm scripts against all (or some) of\nthem is a key feature of a tool like Lerna."),(0,i.kt)("h2",{id:"definitions"},"Definitions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Command -")," anything the developer types into the terminal (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"lerna run build --scope=header --concurrency=5"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Target -")," the name of an npm script (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"build"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Task -")," an invocation of an npm script (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"header:build"),").")),(0,i.kt)("h2",{id:"capabilities-of-a-modern-monorepo-tool"},"Capabilities of a Modern Monorepo Tool"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Filtering tasks."),(0,i.kt)("li",{parentName:"ul"},"Defining dependencies between tasks."),(0,i.kt)("li",{parentName:"ul"},"Running tasks in the right order, and whenever possible, in parallel."),(0,i.kt)("li",{parentName:"ul"},"Caching tasks such that re-running the exact same task is instant."),(0,i.kt)("li",{parentName:"ul"},"Distributing tasks across multiple machines.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Starting with version 5"),", Lerna can do all of these really well because it now integrates with Nx. This integration\nis opt-in, so make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"useNx")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna.json"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Note, when it comes to running tasks, Lerna and Nx can be used mostly interchangeably. When we say "Lerna can cache\nbuilds", we mean that Lerna uses Nx which can cache builds.')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Examples are based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lerna/getting-started-example"},"this repository"),", so feel free to clone it\nand follow along.")),(0,i.kt)("p",null,"The repo contains three packages or projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," (a library of React components)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"footer")," (a library of React components)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remixapp")," (an app written using the Remix framework which depends on both ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"footer"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"packages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\nlerna.json\nnx.json\npackage.json\n")),(0,i.kt)("h2",{id:"run-everything"},"Run Everything"),(0,i.kt)("p",null,"Each project has the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," scripts defined."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"npx lerna run build")," will build the projects in the right order: ",(0,i.kt)("inlineCode",{parentName:"p"},"footer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"remixapp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u2714  header:build (501ms)\n    \u2714  footer:build (503ms)\n    \u2714  remixapp:build (670ms)\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (1s)\n\n")),(0,i.kt)("p",null,"Note that Lerna doesn't care what each of the build scripts does. The name ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," is also ",(0,i.kt)("strong",{parentName:"p"},"not")," special: it's simply\nthe name of the npm script."),(0,i.kt)("p",null,"Lerna delegates the running of npm scripts (forking processes etc) to Nx. The ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json")," file is the place where you can\nconfigure how Nx does it."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't have ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json"),", run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx nx init"),"."))),(0,i.kt)("p",null,"If you want to increase the number of processes running the scripts to, say, 5 (by default, it is 3), pass the\nfollowing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna run build --concurrency=5\n")),(0,i.kt)("p",null,"Note, you can also change the default in ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json"),", like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nx.json"',title:'"nx.json"'},'{\n  "tasksRunnerOptions": {\n    "default": {\n      "runner": "nx/tasks-runners/default",\n      "options": {\n        "cacheableOperations": [],\n        "parallel": 5\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"To run the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," script for each of the projects, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna run test --no-sort\n")),(0,i.kt)("p",null,"You should see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u2714  footer:test (1s)\n    \u2714  header:test (1s)\n    \u2714  remixapp:test (236ms)\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target test for 3 projects (1s)\n")),(0,i.kt)("p",null,"Note that we are passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-sort")," to tell Lerna that tasks can run in any order."),(0,i.kt)("h2",{id:"target-dependencies-aka-task-pipelines"},"Target Dependencies (aka task pipelines)"),(0,i.kt)("p",null,"Without our help Lerna cannot know what targets (scripts) require order and which don't. That's why you can\npass ",(0,i.kt)("inlineCode",{parentName:"p"},"--sort")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-sort"),", but this isn't the best way to go about it."),(0,i.kt)("p",null,"If builds have to run in the topological order, they ",(0,i.kt)("strong",{parentName:"p"},"always")," have to run in that order; otherwise things will be broken. On the other hand, if tests can run in any order, it never make sense to run them in topological order. That would only make them slower."),(0,i.kt)("p",null,"A better way to do it is to tell Lerna how targets relate. Add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nx.json"',title:'"nx.json"'},'{\n  ...\n  "targetDefaults": {\n    "build": {\n      "dependsOn": ["^build"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"With this, Lerna knows that before it can build a project, it needs to build all of its dependencies first. There are,\nhowever, no constraints on tests."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Once you define the ",(0,i.kt)("inlineCode",{parentName:"p"},"targetDefaults")," property the sort flag is ignored.")),(0,i.kt)("p",null,"This mechanism is very flexible. Let's look at this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nx.json"',title:'"nx.json"'},'{\n  ...\n  "targetDefaults": {\n    "build": {\n      "dependsOn": ["^build", "prebuild"]\n    },\n    "test": {\n      "dependsOn": ["build"]\n    }\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note, older versions of Nx used targetDependencies instead of targetDefaults. Both still work, but targetDefaults is\nrecommended.")),(0,i.kt)("p",null,"When running ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna run test --scope=myproj"),", the above configuration would tell Lerna to"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," command for ",(0,i.kt)("inlineCode",{parentName:"li"},"myproj")),(0,i.kt)("li",{parentName:"ol"},"But since there's a dependency defined from ",(0,i.kt)("inlineCode",{parentName:"li"},"test -> build")," (see ",(0,i.kt)("inlineCode",{parentName:"li"},'test:["build"]'),"), Lerna runs ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"myproj"),"\nfirst."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"build")," itself defines a dependency on ",(0,i.kt)("inlineCode",{parentName:"li"},"prebuild")," (on the same project) as well as ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," of all the dependencies.\nTherefore, it will run the ",(0,i.kt)("inlineCode",{parentName:"li"},"prebuild")," script and will run the ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," script for all the dependencies.")),(0,i.kt)("p",null,"Note, Lerna doesn't have to run all builds before it starts running tests. The task orchestrator will run as many tasks\nin parallel as possible as long as the constraints are met."),(0,i.kt)("p",null,"Situations like this are pretty common:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mixing Targets",src:t(9743).Z,width:"475",height:"372"})),(0,i.kt)("p",null,"Because we described the rules in ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json"),", they will apply to all the projects in the repo. You can also define\nproject-specific rules by adding them the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "nx": {\n    "targets": {\n      "test": {\n        "dependsOn": [\n          "build"\n        ]\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"While developing you rarely run all the builds or all the tests. Instead, you often run things only against the projects\nyou are changing. For instance, you can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," tests like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna run test --scope=header\n")),(0,i.kt)("p",null,"You can also run a command for all the projects affected in your PR like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna run test --since=origin/main\n")),(0,i.kt)("p",null,"Learn more ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/filter-options"},"here"),"."),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"Lerna via Nx has the most sophisticated and battle-tested computation caching system. It knows when the task you are\nabout to run has been executed before, so it can restore the results of running that task from cache."),(0,i.kt)("p",null,"We previously adjusted the ",(0,i.kt)("inlineCode",{parentName:"p"},"cacheableOperations")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json")," to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," tasks. If you don't have\nthat yet, add them now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nx.json"',title:'"nx.json"'},'{\n  "tasksRunnerOptions": {\n    "default": {\n      "runner": "nx/tasks-runners/default",\n      "options": {\n        "cacheableOperations": ["build", "test"]\n      }\n    }\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note, ",(0,i.kt)("inlineCode",{parentName:"p"},"cacheableOperations")," need to be side effect free, meaning that given the same input they should always result in\nthe same output. As an example, e2e test runs that hit the backend API cannot be cached as the backend might influence\nthe result of the test run."))),(0,i.kt)("p",null,"Now, run ",(0,i.kt)("inlineCode",{parentName:"p"},"> lerna run test --scope=header")," twice. The second time the operation will be instant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> lerna run test --scope=header\n\n> header:test  [existing outputs match the cache, left as is]\n\n> header@0.1.0 test\n> jest\n\nPASS  src/Header.spec.tsx\n\u2713 renders header (12 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        0.439 s, estimated 1 s\nRan all test suites.\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n>  Lerna (powered by Nx)   Successfully ran target test for project header (4ms)\n\n   Nx read the output from the cache instead of running the command for 1 out of 1 tasks.\n")))}m.isMDXComponent=!0},9743:function(e,n,t){n.Z=t.p+"assets/images/mixing-targets-3bab2c060242f73baa4eb94f32ccabbc.png"}}]);