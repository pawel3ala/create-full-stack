(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(90)),i={id:"tutorial_hasura",title:"Hasura",image:"/img/logo.svg"},s={unversionedId:"tutorial_hasura",id:"tutorial_hasura",isDocsHomePage:!1,title:"Hasura",description:"This tutorial assumes Hasura backend was selected. If Apollo Server Express was selected, check out the Apollo Server Express version.",source:"@site/docs/tutorial_hasura.md",slug:"/tutorial_hasura",permalink:"/docs/tutorial_hasura",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/tutorial_hasura.md",version:"current",sidebar:"someSidebar",previous:{title:"Apollo Server Express",permalink:"/docs/tutorial_apollo_server_express"}},l=[{value:"Backend",id:"backend",children:[]},{value:"Common",id:"common",children:[]},{value:"Web",id:"web",children:[]},{value:"Mobile",id:"mobile",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This tutorial assumes ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"/docs/backend#hasura"}),"Hasura backend")," was selected. If Apollo Server Express was selected, check out the ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"/docs/tutorial_apollo_server_express"}),"Apollo Server Express version"),".")),Object(o.b)("p",null,"In this tutorial we'll add an optional due date for todos."),Object(o.b)("p",null,"Learn how to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate your full stack"),Object(o.b)("li",{parentName:"ul"},"Make cross platform changes")),Object(o.b)("h2",{id:"backend"},"Backend"),Object(o.b)("p",null,"Spin up Hasura and Postgres locally. From the root of the project run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn start\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This runs ",Object(o.b)("inlineCode",{parentName:"em"},"docker-compose up")," which brings up everything in Docker (Hasura, Postgres). Check out the docker-compose.yaml file and the ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://docs.docker.com/compose/compose-file/"}),"docs")," for details.")),Object(o.b)("p",null,"Bring up the Hasura developer console. This is where we can make changes to Hasura and Postgres."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd hasura/\nyarn hasura console  # This requires the backend Hasura backend is up (can take a minute)\n")),Object(o.b)("p",null,'Add a "date" column to todos.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Click "DATA" on the top navigation bar'),Object(o.b)("li",{parentName:"ul"},'Click "todos" under tables on the left'),Object(o.b)("li",{parentName:"ul"},'Click the "Modify" tab under "todos"'),Object(o.b)("li",{parentName:"ul"},'Click "Add a new column"'),Object(o.b)("li",{parentName:"ul"},'Set "column name" to "date"'),Object(o.b)("li",{parentName:"ul"},'Set "column_type" to "Date"')),Object(o.b)("img",{alt:"Hasura add date",src:"/img/hasura_add_date.png",width:"512"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Learn more on the ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://hasura.io/docs/1.0/graphql/core/schema/index.html#schema"}),"Hasura schema docs"))),Object(o.b)("p",null,'Add insert permissions for "date".'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Click the "Permissions" tab under "todos"'),Object(o.b)("li",{parentName:"ul"},'Click the filter icon under the "anonymous" role ("user" if auth is enabled) and the "insert" permissions'),Object(o.b)("li",{parentName:"ul"},'Click "Column insert permissions"'),Object(o.b)("li",{parentName:"ul"},'Check "date"')),Object(o.b)("img",{alt:"Hasura permissions insert date",src:"/img/hasura_permissions_insert_date.png",width:"512"}),Object(o.b)("p",null,'Add select permissions for "date".'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Click the filter icon under the "anonymous" role ("user" if auth is enabled) and the "select" permissions'),Object(o.b)("li",{parentName:"ul"},'Click "Column select permissions"'),Object(o.b)("li",{parentName:"ul"},'Check "date"')),Object(o.b)("img",{alt:"Hasura permissions select date",src:"/img/hasura_permissions_select_date.png",width:"512"}),Object(o.b)("p",null,"That's it!"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If you run ",Object(o.b)("inlineCode",{parentName:"em"},"git status")," you'll notice that changes have been made to the ",Object(o.b)("inlineCode",{parentName:"em"},"hasura/metadata/")," and ",Object(o.b)("inlineCode",{parentName:"em"},"hasura/migrations/")," folders. This tracks changes to Hasura and should be checked in. Learn more about CFS Hasura migrations on the ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/migrations"}),"docs"),".")),Object(o.b)("h2",{id:"common"},"Common"),Object(o.b)("p",null,"Common contains shared code across the full stack. It's used for client Apollo GraphQL requests from both web and mobile."),Object(o.b)("p",null,"Update the GraphQL ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/"}),"query")," and create ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#mutations"}),"mutation"),' requests to include "date".'),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"packages/common/src/graphql/todos.graphql")," make the following changes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"# Add a date scalar. This is defined on the backend\n# Hasura scalar docs:\n# https://hasura.io/docs/1.0/graphql/core/api-reference/postgresql-types.html#date\nscalar date\n\nquery Todos {\n  todos {\n    id\n    name\n    complete\n    # Add the date to the todos query\n    date\n  }\n}\n\n# Add date to the mutation input fields\nmutation CreateTodo($name: String!, $date: date) {\n  insert_todos(objects: { name: $name, date: $date }) {\n    returning {\n      id\n      name\n      complete\n      # Add date to the mutation response\n      date\n    }\n  }\n}\n")),Object(o.b)("p",null,"That's it!"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"When your run ",Object(o.b)("inlineCode",{parentName:"em"},"yarn start")," from the root of the project TS code is generated and ",Object(o.b)("inlineCode",{parentName:"em"},"packages/common")," is built automatically. See ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://graphql-code-generator.com/"}),"graphql-code-generator")," to learn how this works.")),Object(o.b)("h2",{id:"web"},"Web"),Object(o.b)("p",null,"If ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web"}),"web")," was included, then follow these steps to configure it for the new todo date field."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We're using the ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://material-ui-pickers.dev/getting-started/installation"}),"Material-UI Pickers library")," for the date picker. This has a couple dependencies.")),Object(o.b)("p",null,"First, install the packages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd packages/web/\nyarn add @date-io/date-fns@1.x date-fns @material-ui/pickers\n")),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"MuiPickersUtilsProvider")," to ",Object(o.b)("inlineCode",{parentName:"p"},"packages/web/src/App.tsx"),":"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This tells pickers which date management library it should use with MuiPickersUtilsProvider. This component takes a utils prop, and makes it available down the React tree with React Context. It should be used at the root of your component tree, or at the highest level you wish the pickers to be available.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'// Add the imports\nimport DateFnsUtils from "@date-io/date-fns";\nimport { MuiPickersUtilsProvider } from "@material-ui/pickers";\n\n// ...\n\n   return (\n     <ApolloProvider client={client}>\n      {/* Add MuiPickersUtilsProvider wrapper */}\n      <MuiPickersUtilsProvider utils={DateFnsUtils}>\n        <Router>\n          {/* ... */}\n        </Router>\n      </MuiPickersUtilsProvider>\n     </ApolloProvider>\n   );\n }\n')),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"packages/web/src/components/CreateTodo.tsx"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'// ...\n// Add the import\nimport { KeyboardDatePicker } from "@material-ui/pickers";\n\nexport default function CreateTodo() {\n  const [name, setName] = useState("");\n  const [createTodo, { loading }] = useCreateTodo();\n  // Use a react hook to store the input date state.\n  // Dates are optional. If not set, the value is null.\n  const [date, setDate] = useState<Date | null>(null);\n\n  function onSubmit() {\n    // Add "date" to the createTodo variables\n    createTodo({ variables: { name, date } });\n    setName("");\n    // Reset the input date to null after submission\n    setDate(null);\n  }\n\n  return (\n    <TextField\n      // ...\n      InputProps={{\n        endAdornment: (\n          <InputAdornment position="end">\n            {/* Add KeyboardDatePicker component */}\n            <KeyboardDatePicker\n              disableToolbar\n              variant="inline"\n              format="M/dd/yyyy"\n              margin="normal"\n              label="Date"\n              value={date}\n              onChange={setDate}\n              KeyboardButtonProps={{\n                "aria-label": "change date",\n              }}\n            />\n            <IconButton aria-label="add" onClick={onSubmit} disabled={loading}>\n              <AddIcon />\n            </IconButton>\n          </InputAdornment>\n        ),\n      }}\n    />\n  );\n}\n')),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"ListItemText")," in ",Object(o.b)("inlineCode",{parentName:"p"},"packages/web/src/components/Todo.tsx"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<ListItemText\n  // If date is set, display it in the todo item\n  primary={`${todo.name}${\n    // toLocaleDateString("en-US") uses "M/dd/yyyy" date formatting\n    todo.date ? ` (${new Date(todo.date).toLocaleDateString("en-US")})` : ""\n  }`}\n  classes={todo.complete ? { primary: classes.complete } : undefined}\n/>\n')),Object(o.b)("p",null,"Make sure files are properly formatted and linted. In VSCode, with the recommended extensions, this happens automatically. Otherwise, from the root of the project run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn prettier\nyarn lint\n")),Object(o.b)("p",null,"With the full stack running (",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," from root), navigate to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),". You should see your new todo date field! \ud83c\udf89"),Object(o.b)("img",{alt:"Add date web",src:"/img/add_date_web.png",width:"512"}),Object(o.b)("h2",{id:"mobile"},"Mobile"),Object(o.b)("p",null,"If ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile"}),"mobile")," was included, then follow these steps to configure it for the new todo date field."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We're using the ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mmazzarolo/react-native-modal-datetime-picker"}),"react-native-modal-datetime-picker")," for the date picker.")),Object(o.b)("p",null,"First, install the package and dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd packages/mobile/\nyarn expo install react-native-modal-datetime-picker @react-native-community/datetimepicker\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We're using ",Object(o.b)("inlineCode",{parentName:"em"},"yarn expo install")," to ensure Expo supported versions of the libraries are used. Since Expo uses native code in its SDK, typically only a single version of a library with native dependencies can be used per version of Expo. Expo handles this mapping with its install command. Learn more on the ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://docs.expo.io/workflow/expo-cli/"}),"Expo docs"),".")),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"packages/mobile/src/components/CreateTodo.tsx"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'// ...\n// Add the import\nimport { Text, TouchableOpacity } from "react-native";\nimport DateTimePickerModal from "react-native-modal-datetime-picker";\n\nconst styles = StyleSheet.create({\n  // ...\n  // React Native uses FlexBox. Add a new CSS class to make content inside\n  // horizontally laid out.\n  row: {\n    display: "flex",\n    flexDirection: "row",\n  },\n});\n\nexport default function CreateTodo() {\n  const [name, setName] = useState("");\n  const [createTodo] = useCreateTodo();\n  // Use a react hook to store the input date state.\n  // Dates are optional. If not set, the value is null.\n  const [date, setDate] = useState<Date | null>(null);\n  const [showDatePicker, setShowDatePicker] = useState(false);\n\n  function onSubmit() {\n    // Add "date" to the createTodo variables\n    createTodo({ variables: { name, date } });\n    setName("");\n    // Reset the input date to null after submission\n    setDate(null);\n  }\n\n  return (\n    <View style={styles.root}>\n      <Input\n        placeholder="What needs to be done?"\n        value={name}\n        onChangeText={(text: string) => setName(text)}\n        onSubmitEditing={onSubmit}\n        rightIcon={\n          <View style={styles.row}>\n            {\n              // Add TouchableOpacity. This is a button that displays the modal\n              // to change the date.\n            }\n            <TouchableOpacity\n              style={styles.row}\n              accessibilityLabel="date"\n              onPress={() => setShowDatePicker(true)}\n            >\n              <Text>\n                {\n                  // toLocaleDateString("en-US") uses "M/dd/yyyy" date formatting\n                  date?.toLocaleDateString("en-US")\n                }\n              </Text>\n              <Icon name="event" />\n            </TouchableOpacity>\n            <Icon name="add" accessibilityLabel="submit" onPress={onSubmit} />\n          </View>\n        }\n      />\n      {\n        // Add the DateTimePickerModal. This is a modal that displays a date\n        // picker when the button is pressed.\n      }\n      <DateTimePickerModal\n        isVisible={showDatePicker}\n        mode="date"\n        onConfirm={(dueDate) => {\n          setDate(dueDate);\n          setShowDatePicker(false);\n        }}\n        onCancel={() => {\n          setDate(null);\n          setShowDatePicker(false);\n        }}\n      />\n    </View>\n  );\n}\n')),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"ListItem.Title")," in ",Object(o.b)("inlineCode",{parentName:"p"},"packages/mobile/src/components/Todo.tsx"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<ListItem.Title style={todo.complete ? styles.lineThrough : undefined}>\n  {\n    // If date is set, display it in the todo item\n    `${todo.name}${\n      // toLocaleDateString("en-US") uses "M/dd/yyyy" date formatting\n      todo.date ? ` (${new Date(todo.date).toLocaleDateString("en-US")})` : ""\n    }`\n  }\n</ListItem.Title>\n')),Object(o.b)("p",null,"Make sure files are properly formatted and linted. In VSCode, with the recommended extensions, this happens automatically. Otherwise, from the root of the project run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn prettier\nyarn lint\n")),Object(o.b)("p",null,"With the full stack running (",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," from root), navigate to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:19002"}),"http://localhost:19002")," and bring up the application. You should see your new todo date field! \ud83c\udf89"),Object(o.b)("img",{alt:"Add date mobile",src:"/img/add_date_mobile.png",height:"512"}))}d.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);