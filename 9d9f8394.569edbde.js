(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(90)),i={id:"troubleshooting",title:"Troubleshooting",image:"/img/logo.svg"},s={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"EADDRINUSE, Address already in use",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/troubleshooting.md",version:"current",sidebar:"someSidebar",previous:{title:"Migrations",permalink:"/docs/migrations"},next:{title:"Apollo Server Express",permalink:"/docs/tutorial_apollo_server_express"}},l=[{value:"EADDRINUSE, Address already in use",id:"eaddrinuse-address-already-in-use",children:[]},{value:"Hooks can only be called inside the body of a function component",id:"hooks-can-only-be-called-inside-the-body-of-a-function-component",children:[]},{value:"Auth0 login hangs on Android virtual device",id:"auth0-login-hangs-on-android-virtual-device",children:[]},{value:"FatalError: relation &quot;todos&quot; already exists",id:"fatalerror-relation-todos-already-exists",children:[]},{value:"pulumi:providers: no resource plugin found in the workspace or on your $PATH, install the plugin",id:"pulumiproviders-no-resource-plugin-found-in-the-workspace-or-on-your-path-install-the-plugin",children:[]},{value:"Something is already running on port 3000",id:"something-is-already-running-on-port-3000",children:[]},{value:"Failed to load resource: net::ERR_EMPTY_RESPONSE",id:"failed-to-load-resource-neterr_empty_response",children:[]},{value:"Failed to compile. import/no-extraneous-dependencies",id:"failed-to-compile-importno-extraneous-dependencies",children:[]},{value:"Role \u201cpostgres\u201d doesn\u2019t exist OR Password authentication failed for user \u201cpostgres\u201d",id:"role-postgres-doesnt-exist-or-password-authentication-failed-for-user-postgres",children:[]},{value:"Error parsing JWK from url",id:"error-parsing-jwk-from-url",children:[]}],c={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"eaddrinuse-address-already-in-use"},"EADDRINUSE, Address already in use"),Object(a.b)("p",null,"Kill all node processes."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pkill node\n")),Object(a.b)("h2",{id:"hooks-can-only-be-called-inside-the-body-of-a-function-component"},"Hooks can only be called inside the body of a function component"),Object(a.b)("p",null,"React in both ",Object(a.b)("inlineCode",{parentName:"p"},"packages/mobile/package.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"packages/web/package.json")," need to be the same version since they're shared in Yarn Workspaces (unless you add ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/blog/2018/02/15/nohoist/"}),"nohoist"),")."),Object(a.b)("h2",{id:"auth0-login-hangs-on-android-virtual-device"},"Auth0 login hangs on Android virtual device"),Object(a.b)("p",null,"Your Android virtual device (AVD) must use Android 11. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/expo/expo/issues/9845"}),"expo/issues/9845")),Object(a.b)("h2",{id:"fatalerror-relation-todos-already-exists"},'FatalError: relation \\"todos\\" already exists'),Object(a.b)("p",null,"Reset your docker Postgres volume. This wipes any existing data."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker rm <project name>_postgres_1\ndocker volume rm <project name>_db_data\n")),Object(a.b)("h2",{id:"pulumiproviders-no-resource-plugin-found-in-the-workspace-or-on-your-path-install-the-plugin"},"pulumi:providers: no resource plugin found in the workspace or on your \\$PATH, install the plugin"),Object(a.b)("p",null,"This can occur locally or in continuous deployment (CD) with GitHub actions."),Object(a.b)("p",null,"If locally, run the command in the error message to install the plugin."),Object(a.b)("p",null,"If on GitHub actions, you must setup and deploy the production stack locally first before GitHub actions can deploy. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pulumi/pulumi/issues/2097"}),"pulumi/issues/2097")),Object(a.b)("p",null,"To deploy the production stack run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd packages/pulumi-aws\npulumi stack select production\npulumi up\n")),Object(a.b)("h2",{id:"something-is-already-running-on-port-3000"},"Something is already running on port 3000"),Object(a.b)("p",null,"Check which service is running on the port."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo lsof -i tcp:3000\n")),Object(a.b)("p",null,"Kill it (ex. node)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pkill node\n")),Object(a.b)("h2",{id:"failed-to-load-resource-neterr_empty_response"},"Failed to load resource: net::ERR_EMPTY_RESPONSE"),Object(a.b)("p",null,"If either of the following URLs returns an empty response:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Hasura backend: ",Object(a.b)("inlineCode",{parentName:"li"},"https://hasura.[YOUR DOMAIN].com/v1/graphql")),Object(a.b)("li",{parentName:"ul"},"Apollo Server Express backend: ",Object(a.b)("inlineCode",{parentName:"li"},"https://server.[YOUR DOMAIN].com/graphql"))),Object(a.b)("p",null,"If you just launched the service, Fargate can sometimes take a few minutes to come up. If it's been over ten minutes, try re-provisioning Fargate and the associated listener and target group. To do that, comment out the Fargate resource in ",Object(a.b)("inlineCode",{parentName:"p"},"packages/pulumi-aws/index.ts"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'--- a/packages/pulumi-aws/index.ts\n+++ b/packages/pulumi-aws/index.ts\n@@ -33,18 +33,18 @@ const { connectionString } = new Rds("server-db", {\ndbUsername,\ndbPassword,\n});\n-new Fargate(path.basename(serverPath), {\n\n- certificateArn,\n- domain: serverDomain,\n- image: awsx.ecs.Image.fromDockerBuild("image", {\n- context: "../..",\n- dockerfile: `${serverPath}/Dockerfile`,\n- }),\n- env: {\n- DATABASE_URL: connectionString,\n- CORS_ORIGIN: webUrl,\n- },\n  -});\n  +// new Fargate(path.basename(serverPath), {\n  +// certificateArn,\n  +// domain: serverDomain,\n  +// image: awsx.ecs.Image.fromDockerBuild("image", {\n  +// context: "../..",\n  +// dockerfile: `${serverPath}/Dockerfile`,\n  +// }),\n  +// env: {\n  +// DATABASE_URL: connectionString,\n  +// CORS_ORIGIN: webUrl,\n  +// },\n  +// });\n')),Object(a.b)("p",null,"Then run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pulumi up --yes\n")),Object(a.b)("p",null,"Undo the changes above in ",Object(a.b)("inlineCode",{parentName:"p"},"packages/pulumi-aws/index.ts")," then again run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pulumi up --yes\n")),Object(a.b)("h2",{id:"failed-to-compile-importno-extraneous-dependencies"},"Failed to compile. import/no-extraneous-dependencies"),Object(a.b)("p",null,"If you see this type of error despite these libraries included in ",Object(a.b)("inlineCode",{parentName:"p"},"packages/web/")," then ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," is likely corrupt."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"[Web] Failed to compile.\n[Web]\n[Web] ./src/App.tsx\n[Web]   Line 3:1:  '@date-io/date-fns' should be listed in the project's dependencies. Run 'npm i -S @date-io/date-fns' to add it        import/no-extraneous-dependencies\n")),Object(a.b)("p",null,"This can be fixed with a clean install of node modules. From the root of the project run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"rm -rf **/node_modules\nyarn\n")),Object(a.b)("h2",{id:"role-postgres-doesnt-exist-or-password-authentication-failed-for-user-postgres"},"Role \u201cpostgres\u201d doesn\u2019t exist OR Password authentication failed for user \u201cpostgres\u201d"),Object(a.b)("p",null,"You likely have another Postgres server already running. Create Full Stack runs Postgres in a Docker container on localhost at port 5432. This is what a local installation of Postgres uses by default. You need to stop your existing Postgres server."),Object(a.b)("p",null,"On MacOS:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pg_ctl -D /usr/local/var/postgres stop\n# OR with homebrew\nbrew services stop postgresql\n")),Object(a.b)("p",null,"On Linux:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo service postgresql stop\n")),Object(a.b)("h2",{id:"error-parsing-jwk-from-url"},"Error parsing JWK from url"),Object(a.b)("p",null,"You're likely using an old Auth0 Tenant that incorrectly sets the xt5 in the JWK URL (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.auth0.com/t/certificate-thumbprint-is-longer-than-20-bytes/7794"}),"40 bytes instead of 20"),"). ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.auth0.com/t/jwk-certificate-thumbprint-is-invalid/16070/22"}),"Rotate your signing key")," to fix."))}u.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return t?o.a.createElement(m,s(s({ref:n},c),{},{components:t})):o.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);