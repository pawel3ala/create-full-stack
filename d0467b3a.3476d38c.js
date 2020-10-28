(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(90)),i={id:"migrations",title:"Migrations",image:"/img/logo.svg"},c={unversionedId:"migrations",id:"migrations",isDocsHomePage:!1,title:"Migrations",description:"Apollo Server Express",source:"@site/docs/migrations.md",slug:"/migrations",permalink:"/docs/migrations",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/migrations.md",version:"current",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},s=[{value:"Apollo Server Express",id:"apollo-server-express",children:[{value:"<code>yarn typeorm migration:run</code>",id:"yarn-typeorm-migrationrun",children:[]},{value:"<code>yarn typeorm migration:revert</code>",id:"yarn-typeorm-migrationrevert",children:[]},{value:"<code>yarn typeorm migration:generate -n &lt;title&gt;</code>",id:"yarn-typeorm-migrationgenerate--n-title",children:[]}]},{value:"Hasura",id:"hasura",children:[{value:"<code>yarn hasura migrate apply</code>",id:"yarn-hasura-migrate-apply",children:[]},{value:"<code>yarn hasura migrate status</code>",id:"yarn-hasura-migrate-status",children:[]}]},{value:"Resetting Docker Postgres locally",id:"resetting-docker-postgres-locally",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"apollo-server-express"},"Apollo Server Express"),Object(o.b)("p",null,"If included, run from ",Object(o.b)("inlineCode",{parentName:"p"},"packages/server"),"."),Object(o.b)("p",null,"Common commands are shown below. Additional commands are documented on the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://typeorm.io/#/migrations"}),"TypeORM docs"),"."),Object(o.b)("h3",{id:"yarn-typeorm-migrationrun"},Object(o.b)("inlineCode",{parentName:"h3"},"yarn typeorm migration:run")),Object(o.b)("p",null,"Executes all pending migrations and runs them in a sequence ordered by their timestamps. This means all sql queries written in the up methods of your created migrations will be executed."),Object(o.b)("h3",{id:"yarn-typeorm-migrationrevert"},Object(o.b)("inlineCode",{parentName:"h3"},"yarn typeorm migration:revert")),Object(o.b)("p",null,"Executes down in the latest executed migration. If you need to revert multiple migrations you must call this command multiple times."),Object(o.b)("h3",{id:"yarn-typeorm-migrationgenerate--n-title"},Object(o.b)("inlineCode",{parentName:"h3"},"yarn typeorm migration:generate -n <title>")),Object(o.b)("p",null,"Automatically generate migration files in the format ",Object(o.b)("inlineCode",{parentName:"p"},"{TIMESTAMP}-{title}.ts")," with schema changes you made."),Object(o.b)("h2",{id:"hasura"},"Hasura"),Object(o.b)("p",null,"If included, run from ",Object(o.b)("inlineCode",{parentName:"p"},"packages/server"),"."),Object(o.b)("p",null,"Common commands are shown below. Additional commands are documented on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hasura.io/docs/1.0/graphql/core/hasura-cli/hasura_migrate.html#hasura-migrate"}),"Hasura's docs"),". Learn more about Hasura migrations on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hasura.io/docs/1.0/graphql/core/migrations/index.html"}),"Hasura's migration guide"),"."),Object(o.b)("h3",{id:"yarn-hasura-migrate-apply"},Object(o.b)("inlineCode",{parentName:"h3"},"yarn hasura migrate apply")),Object(o.b)("p",null,"Applies all migrations to the database."),Object(o.b)("h3",{id:"yarn-hasura-migrate-status"},Object(o.b)("inlineCode",{parentName:"h3"},"yarn hasura migrate status")),Object(o.b)("p",null,"Displays the current status of migrations on a database."),Object(o.b)("h2",{id:"resetting-docker-postgres-locally"},"Resetting Docker Postgres locally"),Object(o.b)("p",null,"Sometimes you may need to completely wipe your local Postgres DB running on Docker. For instance, you're developing Create Full Stack and switching between Auth0 and no auth \ud83d\ude03."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker rm <project name>_postgres_1\ndocker volume rm <project name>_db_data\n")),Object(o.b)("p",null,"This removes the Docker container and the associated volume."))}u.isMDXComponent=!0},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);