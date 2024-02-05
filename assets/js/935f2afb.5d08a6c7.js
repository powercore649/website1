"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[696],{5988:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"main":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction","unlisted":false},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started","unlisted":false},{"type":"link","label":"Lerna and Nx","href":"/docs/lerna-and-nx","docId":"lerna-and-nx","unlisted":false},{"type":"category","label":"Features","items":[{"type":"link","label":"Run Tasks","href":"/docs/features/run-tasks","docId":"features/run-tasks","unlisted":false},{"type":"link","label":"Cache Task Results","href":"/docs/features/cache-tasks","docId":"features/cache-tasks","unlisted":false},{"type":"link","label":"Share Your Cache","href":"/docs/features/share-your-cache","docId":"features/share-your-cache","unlisted":false},{"type":"link","label":"Explore the Project Graph","href":"/docs/features/project-graph","docId":"features/project-graph","unlisted":false},{"type":"link","label":"Distribute Task Execution","href":"/docs/features/distribute-tasks","docId":"features/distribute-tasks","unlisted":false},{"type":"link","label":"Version and Publish","href":"/docs/features/version-and-publish","docId":"features/version-and-publish","unlisted":false},{"type":"link","label":"Editor Integrations","href":"/docs/features/editor-integrations","docId":"features/editor-integrations","unlisted":false},{"type":"link","label":"Workspace Watching","href":"/docs/features/workspace-watching","docId":"features/workspace-watching","unlisted":false}],"collapsed":false,"collapsible":true,"href":"/docs/features"},{"type":"category","label":"Concepts","items":[{"type":"link","label":"Task Pipeline Configuration","href":"/docs/concepts/task-pipeline-configuration","docId":"concepts/task-pipeline-configuration","unlisted":false},{"type":"link","label":"How Caching Works","href":"/docs/concepts/how-caching-works","docId":"concepts/how-caching-works","unlisted":false},{"type":"link","label":"Distributed Task Execution Guide","href":"/docs/concepts/dte-guide","docId":"concepts/dte-guide","unlisted":false},{"type":"link","label":"Configuring Published Files","href":"/docs/concepts/configuring-published-files","docId":"concepts/configuring-published-files","unlisted":false}],"collapsed":false,"collapsible":true,"href":"/docs/concepts"},{"type":"category","label":"Recipes","items":[{"type":"link","label":"Using pnpm with Lerna","href":"/docs/recipes/using-pnpm-with-lerna","docId":"recipes/using-pnpm-with-lerna","unlisted":false}],"collapsed":false,"collapsible":true},{"type":"category","label":"API Reference","items":[{"type":"link","label":"Commands","href":"/docs/api-reference/commands","docId":"api-reference/commands","unlisted":false},{"type":"link","label":"Configuration","href":"/docs/api-reference/configuration","docId":"api-reference/configuration","unlisted":false},{"type":"link","label":"Utilities","href":"/docs/api-reference/utilities","docId":"api-reference/utilities","unlisted":false}],"collapsed":false,"collapsible":true},{"type":"link","label":"Lerna and Nx Version Matrix","href":"/docs/lerna-and-nx-version-matrix","docId":"lerna-and-nx-version-matrix","unlisted":false},{"type":"link","label":"Legacy Package Management","href":"/docs/legacy-package-management","docId":"legacy-package-management","unlisted":false},{"type":"link","label":"FAQ","href":"/docs/faq","docId":"faq","unlisted":false},{"type":"link","label":"Lerna 6: Obsolete Options","href":"/docs/lerna6-obsolete-options","docId":"lerna6-obsolete-options","unlisted":false},{"type":"link","label":"Troubleshooting","href":"/docs/troubleshooting","docId":"troubleshooting","unlisted":false}]},"docs":{"api-reference/commands":{"id":"api-reference/commands","title":"Commands","description":"- lerna add-caching","sidebar":"main"},"api-reference/configuration":{"id":"api-reference/configuration","title":"Configuration","description":"Lerna\'s configuration is split into two files: lerna.json and nx.json.","sidebar":"main"},"api-reference/utilities":{"id":"api-reference/utilities","title":"Utilities","description":"Lerna ships some utility functions that can be used in creating your own tools within a Lerna monorepo.","sidebar":"main"},"concepts/configuring-published-files":{"id":"concepts/configuring-published-files","title":"Configuring Published Files","description":"When publishing a package to a registry, the default is to publish everything in the package\'s source directory. This is not always optimal, since there are often files only relevant for development, such as tests and configuration files, and it could be that you first compile your source files and output them to a centralized location in a monorepo setup.","sidebar":"main"},"concepts/dte-guide":{"id":"concepts/dte-guide","title":"Distributed Task Execution Guide","description":"The illustrations in this guide are created by Nrwlian Nicole Oliver","sidebar":"main"},"concepts/how-caching-works":{"id":"concepts/how-caching-works","title":"How Caching Works","description":"Before running any task, Lerna computes its computation hash. As long as the computation hash is the same, the output of","sidebar":"main"},"concepts/task-pipeline-configuration":{"id":"concepts/task-pipeline-configuration","title":"Task Pipeline Configuration","description":"Lerna delegates the running of npm scripts (forking processes etc) to Nx. The nx.json file is the place where you can","sidebar":"main"},"faq":{"id":"faq","title":"FAQ","description":"This document is a work in progress.","sidebar":"main"},"features/cache-tasks":{"id":"features/cache-tasks","title":"Cache Task Results","description":"When it comes to running tasks, caching etc., Lerna and Nx can be used interchangeably. When we say \\"Lerna can cache","sidebar":"main"},"features/distribute-tasks":{"id":"features/distribute-tasks","title":"Distribute Task Execution","description":"Lerna speeds up your average CI time with caching and the --since flag. But neither of these features help with the worst case scenario. When something at the core of your repo has been modified and every task needs to be run in CI, the only way to improve the performance is by adding more agent jobs and efficiently parallelizing the tasks.","sidebar":"main"},"features/editor-integrations":{"id":"features/editor-integrations","title":"Editor Integrations","description":"Nx Console displays the npm scripts for all your projects in the VS Code sidebar and allows you to run them with a single click or open the script definition in your editor.","sidebar":"main"},"features/project-graph":{"id":"features/project-graph","title":"Explore the Project Graph","description":"For Lerna (and Nx) to run tasks quickly and correctly, it creates a graph of the dependencies between all the projects in the repository.  Exploring this graph visually can be useful to understand why Lerna is behaving in a certain way and to get a high level view of your code architecture.","sidebar":"main"},"features/run-tasks":{"id":"features/run-tasks","title":"Run Tasks","description":"Monorepos can have hundreds or even thousands of projects, so being able to run npm scripts against all (or some) of","sidebar":"main"},"features/share-your-cache":{"id":"features/share-your-cache","title":"Share Your Cache","description":"The computation cache provided by Lerna can be distributed across multiple machines. You can either build an implementation","sidebar":"main"},"features/version-and-publish":{"id":"features/version-and-publish","title":"Version and Publish","description":"Lerna can increment your package\'s versions as well as publish your packages to NPM, and it provides a variety of options to make sure any workflow can be accommodated.","sidebar":"main"},"features/workspace-watching":{"id":"features/workspace-watching","title":"Workspace Watching","description":"Workspace Watching is available as of Lerna 6.4.0.","sidebar":"main"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Lerna comes with a dedicated init command to assist you with both adding lerna to an existing repo, or creating one from scratch.","sidebar":"main"},"introduction":{"id":"introduction","title":"Introduction","description":"Lerna is the original monorepo tool for JavaScript/TypeScript. It has been around for many years and is used by tens of thousands of projects, including React and Jest.","sidebar":"main"},"legacy-package-management":{"id":"legacy-package-management","title":"Legacy Package Management","description":"Migrating from lerna bootstrap, lerna add and lerna link in lerna v7 and later","sidebar":"main"},"lerna-and-nx":{"id":"lerna-and-nx","title":"Lerna and Nx","description":"Nrwl (the company behind the open source build system Nx) has taken over stewardship of Lerna. Nx is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna defers to Nx\'s powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected. For a complete list of which Lerna versions are compatible with which Nx versions, see the Lerna and Nx Version Matrix.","sidebar":"main"},"lerna-and-nx-version-matrix":{"id":"lerna-and-nx-version-matrix","title":"Lerna and Nx Version Matrix","description":"The latest version of Lerna is kept up to date with the latest major version of Nx in order to support the latest features. If you have an older version of Lerna or Nx, you can use the table below to ensure compatibility between the two.","sidebar":"main"},"lerna6-obsolete-options":{"id":"lerna6-obsolete-options","title":"Lerna 6: Obsolete Options","description":"Nx and Lerna work together seamlessly in the same workspace.","sidebar":"main"},"recipes/using-pnpm-with-lerna":{"id":"recipes/using-pnpm-with-lerna","title":"Using pnpm with Lerna","description":"Lerna can be used in a pnpm workspace to get the full benefits of both pnpm and Lerna.","sidebar":"main"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"This document contains solutions for certain issues our users encountered","sidebar":"main"}}}')}}]);