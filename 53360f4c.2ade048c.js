(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(82)),o={id:"available_scripts",title:"Available Scripts"},i={unversionedId:"available_scripts",id:"available_scripts",isDocsHomePage:!1,title:"Available Scripts",description:"Root level",source:"@site/docs/available_scripts.md",slug:"/available_scripts",permalink:"/docs/available_scripts",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/available_scripts.md",version:"current",sidebar:"someSidebar",previous:{title:"Folder Structure",permalink:"/docs/folder_structure"},next:{title:"Configuration",permalink:"/docs/configuration"}},l=[{value:"Root level",id:"root-level",children:[{value:"<code>yarn start</code>",id:"yarn-start",children:[]},{value:"<code>yarn test</code>",id:"yarn-test",children:[]},{value:"<code>yarn generate</code>",id:"yarn-generate",children:[]}]},{value:"Apollo Server Express",id:"apollo-server-express",children:[{value:"<code>yarn start</code>",id:"yarn-start-1",children:[]},{value:"<code>yarn test</code>",id:"yarn-test-1",children:[]}]},{value:"Hasura",id:"hasura",children:[{value:"<code>docker-compose up</code>",id:"docker-compose-up",children:[]},{value:"<code>yarn hasura console</code>",id:"yarn-hasura-console",children:[]}]},{value:"Mobile",id:"mobile",children:[{value:"<code>yarn start</code>",id:"yarn-start-2",children:[]},{value:"<code>yarn test</code>",id:"yarn-test-2",children:[]}]},{value:"Pulumi AWS",id:"pulumi-aws",children:[{value:"<code>pulumi up</code>",id:"pulumi-up",children:[]},{value:"<code>pulumi destroy</code>",id:"pulumi-destroy",children:[]},{value:"<code>pulumi stack select &lt;stack&gt;</code>",id:"pulumi-stack-select-stack",children:[]},{value:"<code>pulumi stack ls</code>",id:"pulumi-stack-ls",children:[]}]},{value:"Web",id:"web",children:[{value:"<code>yarn start</code>",id:"yarn-start-3",children:[]},{value:"<code>yarn test</code>",id:"yarn-test-3",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"root-level"},"Root level"),Object(c.b)("h3",{id:"yarn-start"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(c.b)("p",null,"Starts all platforms for local development. Platforms automatically reload if edits are made. Lint errors are displayed in the console."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This continues to run if one of the processes fails. You may need to scroll up to find the error. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kimmobrunfeldt/concurrently/issues/135"}),"concurrently/issues/135"),"."))),Object(c.b)("h3",{id:"yarn-test"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn test")),Object(c.b)("p",null,"Runs all the tests across the platforms once. Unlike platform specific ",Object(c.b)("inlineCode",{parentName:"p"},"yarn test"),", this does not use watch mode which makes it useful for CI."),Object(c.b)("h3",{id:"yarn-generate"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn generate")),Object(c.b)("p",null,"Generates TypeScript types and React hooks for the Apollo GraphQL client. To run in watch mode which actively updates on any change, add the ",Object(c.b)("inlineCode",{parentName:"p"},"--watch")," flag."),Object(c.b)("h2",{id:"apollo-server-express"},"Apollo Server Express"),Object(c.b)("p",null,"If included, run from ",Object(c.b)("inlineCode",{parentName:"p"},"packages/server/"),"."),Object(c.b)("h3",{id:"yarn-start-1"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(c.b)("p",null,"Starts the server running locally."),Object(c.b)("h3",{id:"yarn-test-1"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn test")),Object(c.b)("p",null,"Launches the test runner in the interactive watch mode."),Object(c.b)("h2",{id:"hasura"},"Hasura"),Object(c.b)("p",null,"If included, run from ",Object(c.b)("inlineCode",{parentName:"p"},"hasura/"),"."),Object(c.b)("p",null,"Common commands are shown below. Additional commands are documented at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://hasura.io/docs/1.0/graphql/core/hasura-cli/index.html#commands"}),"https://hasura.io/docs/1.0/graphql/core/hasura-cli/index.html#commands")),Object(c.b)("h3",{id:"docker-compose-up"},Object(c.b)("inlineCode",{parentName:"h3"},"docker-compose up")),Object(c.b)("p",null,"Starts Hasura and Postgres in Docker containers running locally."),Object(c.b)("h3",{id:"yarn-hasura-console"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn hasura console")),Object(c.b)("p",null,"Run a web server to serve the Hasura console for the GraphQL engine to manage the database and build queries."),Object(c.b)("p",null,"Changes to the schema automatically update the migrations file."),Object(c.b)("h2",{id:"mobile"},"Mobile"),Object(c.b)("p",null,"If included, run from ",Object(c.b)("inlineCode",{parentName:"p"},"packages/mobile/"),"."),Object(c.b)("p",null,"Common commands are shown below. Additional commands are documented at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/workflow/expo-cli/#commands"}),"https://docs.expo.io/workflow/expo-cli/#commands")),Object(c.b)("h3",{id:"yarn-start-2"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(c.b)("p",null,"Starts or restarts a local server for your app and gives you a url to it."),Object(c.b)("h3",{id:"yarn-test-2"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn test")),Object(c.b)("p",null,"Launches the test runner in the interactive watch mode."),Object(c.b)("h2",{id:"pulumi-aws"},"Pulumi AWS"),Object(c.b)("p",null,"If included, run from ",Object(c.b)("inlineCode",{parentName:"p"},"packages/pulumi-aws"),"."),Object(c.b)("p",null,"Common commands are shown below. Additional commands are documented at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.pulumi.com/docs/reference/cli/#common-commands"}),"https://www.pulumi.com/docs/reference/cli/#common-commands")),Object(c.b)("h3",{id:"pulumi-up"},Object(c.b)("inlineCode",{parentName:"h3"},"pulumi up")),Object(c.b)("p",null,"Creates or updates the resources in a stack."),Object(c.b)("h3",{id:"pulumi-destroy"},Object(c.b)("inlineCode",{parentName:"h3"},"pulumi destroy")),Object(c.b)("p",null,"Destroys an existing stack and its resources."),Object(c.b)("h3",{id:"pulumi-stack-select-stack"},Object(c.b)("inlineCode",{parentName:"h3"},"pulumi stack select <stack>")),Object(c.b)("p",null,"Switches the current workspace to the given stack."),Object(c.b)("h3",{id:"pulumi-stack-ls"},Object(c.b)("inlineCode",{parentName:"h3"},"pulumi stack ls")),Object(c.b)("p",null,"List stacks."),Object(c.b)("h2",{id:"web"},"Web"),Object(c.b)("p",null,"If included, run from ",Object(c.b)("inlineCode",{parentName:"p"},"packages/web/"),"."),Object(c.b)("p",null,"Common commands are shown below. Additional commands are documented at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/available-scripts"}),"https://create-react-app.dev/docs/available-scripts")),Object(c.b)("h3",{id:"yarn-start-3"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(c.b)("p",null,"Starts or restarts a local server for your app and gives you a url to it."),Object(c.b)("h3",{id:"yarn-test-3"},Object(c.b)("inlineCode",{parentName:"h3"},"yarn test")),Object(c.b)("p",null,"Launches the test runner in the interactive watch mode."))}d.isMDXComponent=!0}}]);