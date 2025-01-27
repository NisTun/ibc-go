"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68088],{7571:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var s=c(85893),t=c(11151);const a={title:"Client",sidebar_label:"Client",sidebar_position:8,slug:"/apps/interchain-accounts/client"},o="Client",r={id:"apps/interchain-accounts/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-v8.5.x/02-apps/02-interchain-accounts/08-client.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/client",permalink:"/v8/apps/interchain-accounts/client",draft:!1,unlisted:!1,tags:[],version:"v8.5.x",sidebarPosition:8,frontMatter:{title:"Client",sidebar_label:"Client",sidebar_position:8,slug:"/apps/interchain-accounts/client"},sidebar:"defaultSidebar",previous:{title:"Transaction Encoding",permalink:"/v8/apps/interchain-accounts/tx-encoding"},next:{title:"Active Channels",permalink:"/v8/apps/interchain-accounts/active-channels"}},l={},i=[{value:"CLI",id:"cli",level:2},{value:"Controller",id:"controller",level:3},{value:"Query",id:"query",level:4},{value:"Transactions",id:"transactions",level:4},{value:"<code>register</code>",id:"register",level:4},{value:"<code>send-tx</code>",id:"send-tx",level:4},{value:"Host",id:"host",level:3},{value:"Query",id:"query-1",level:4},{value:"Transactions",id:"transactions-1",level:4},{value:"<code>generate-packet-data</code>",id:"generate-packet-data",level:5},{value:"gRPC",id:"grpc",level:2},{value:"Controller",id:"controller-1",level:3},{value:"<code>InterchainAccount</code>",id:"interchainaccount",level:4},{value:"<code>Params</code>",id:"params",level:4},{value:"Host",id:"host-1",level:3},{value:"<code>Params</code>",id:"params-1",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"client",children:"Client"}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(n.p,{children:["A user can query and interact with the Interchain Accounts module using the CLI. Use the ",(0,s.jsx)(n.code,{children:"--help"})," flag to discover the available commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query interchain-accounts --help\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Please not that this section does not document all the available commands, but only the ones that deserved extra documentation that was not possible to fit in the command line documentation."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"controller",children:"Controller"}),"\n",(0,s.jsx)(n.p,{children:"A user can query and interact with the controller submodule."}),"\n",(0,s.jsx)(n.h4,{id:"query",children:"Query"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"query"})," commands allow users to query the controller submodule."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query interchain-accounts controller --help\n"})}),"\n",(0,s.jsx)(n.h4,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"tx"})," commands allow users to interact with the controller submodule."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx interchain-accounts controller --help\n"})}),"\n",(0,s.jsx)(n.h4,{id:"register",children:(0,s.jsx)(n.code,{children:"register"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"register"})," command allows users to register an interchain account on a host chain on the provided connection."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx interchain-accounts controller register [connection-id] [flags]\n"})}),"\n",(0,s.jsx)(n.p,{children:"During registration a new channel is set up between controller and host. There are two flags available that influence the channel that is created:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--version"})," to specify the (JSON-formatted) version string of the channel. For example: ",(0,s.jsx)(n.code,{children:'{\\"version\\":\\"ics27-1\\",\\"encoding\\":\\"proto3\\",\\"tx_type\\":\\"sdk_multi_msg\\",\\"controller_connection_id\\":\\"connection-0\\",\\"host_connection_id\\":\\"connection-0\\"}'}),". Passing a custom version string is useful if you want to specify, for example, the encoding format of the interchain accounts packet data (either ",(0,s.jsx)(n.code,{children:"proto3"})," or ",(0,s.jsx)(n.code,{children:"proto3json"}),"). If not specified the controller submodule will generate a default version string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--ordering"})," to specify the ordering of the channel. Available options are ",(0,s.jsx)(n.code,{children:"order_ordered"})," and ",(0,s.jsx)(n.code,{children:"order_unordered"})," (default if not specified)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx interchain-accounts controller register connection-0 --ordering order_ordered --from cosmos1..\n"})}),"\n",(0,s.jsx)(n.h4,{id:"send-tx",children:(0,s.jsx)(n.code,{children:"send-tx"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"send-tx"})," command allows users to send a transaction on the provided connection to be executed using an interchain account on the host chain."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx interchain-accounts controller send-tx [connection-id] [path/to/packet_msg.json]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx interchain-accounts controller send-tx connection-0 packet-data.json --from cosmos1..\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See below for example contents of ",(0,s.jsx)(n.code,{children:"packet-data.json"}),". The CLI handler will unmarshal the following into ",(0,s.jsx)(n.code,{children:"InterchainAccountPacketData"})," appropriately."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type":"TYPE_EXECUTE_TX",\n  "data":"CqIBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEoEBCkFjb3Ntb3MxNWNjc2hobXAwZ3N4MjlxcHFxNmc0em1sdG5udmdteXU5dWV1YWRoOXkybmM1emowc3psczVndGRkehItY29zbW9zMTBoOXN0YzV2Nm50Z2V5Z2Y1eGY5NDVuanFxNWgzMnI1M3VxdXZ3Gg0KBXN0YWtlEgQxMDAw",\n  "memo":""\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note the ",(0,s.jsx)(n.code,{children:"data"})," field is a base64 encoded byte string as per the tx encoding agreed upon during the channel handshake."]}),"\n",(0,s.jsxs)(n.p,{children:["A helper CLI is provided in the host submodule which can be used to generate the packet data JSON using the counterparty chain's binary. See the ",(0,s.jsxs)(n.a,{href:"#generate-packet-data",children:[(0,s.jsx)(n.code,{children:"generate-packet-data"})," command"]})," for an example."]}),"\n",(0,s.jsx)(n.h3,{id:"host",children:"Host"}),"\n",(0,s.jsx)(n.p,{children:"A user can query and interact with the host submodule."}),"\n",(0,s.jsx)(n.h4,{id:"query-1",children:"Query"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"query"})," commands allow users to query the host submodule."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query interchain-accounts host --help\n"})}),"\n",(0,s.jsx)(n.h4,{id:"transactions-1",children:"Transactions"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"tx"})," commands allow users to interact with the controller submodule."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx interchain-accounts host --help\n"})}),"\n",(0,s.jsx)(n.h5,{id:"generate-packet-data",children:(0,s.jsx)(n.code,{children:"generate-packet-data"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"generate-packet-data"})," command allows users to generate protobuf or proto3 JSON encoded interchain accounts packet data for input message(s). The packet data can then be used with the controller submodule's ",(0,s.jsxs)(n.a,{href:"#send-tx",children:[(0,s.jsx)(n.code,{children:"send-tx"})," command"]}),". The ",(0,s.jsx)(n.code,{children:"--encoding"})," flag can be used to specify the encoding format (value must be either ",(0,s.jsx)(n.code,{children:"proto3"})," or ",(0,s.jsx)(n.code,{children:"proto3json"}),"); if not specified, the default will be ",(0,s.jsx)(n.code,{children:"proto3"}),". The ",(0,s.jsx)(n.code,{children:"--memo"})," flag can be used to include a memo string in the interchain accounts packet data."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx interchain-accounts host generate-packet-data [message]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'simd tx interchain-accounts host generate-packet-data \'[{\n  "@type":"/cosmos.bank.v1beta1.MsgSend",\n  "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n  "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n  "amount": [\n    {\n      "denom": "stake",\n      "amount": "1000"\n    }\n  ]\n}]\' --memo memo\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The command accepts a single ",(0,s.jsx)(n.code,{children:"sdk.Msg"})," or a list of ",(0,s.jsx)(n.code,{children:"sdk.Msg"}),"s that will be encoded into the outputs ",(0,s.jsx)(n.code,{children:"data"})," field."]}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type":"TYPE_EXECUTE_TX",\n  "data":"CqIBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEoEBCkFjb3Ntb3MxNWNjc2hobXAwZ3N4MjlxcHFxNmc0em1sdG5udmdteXU5dWV1YWRoOXkybmM1emowc3psczVndGRkehItY29zbW9zMTBoOXN0YzV2Nm50Z2V5Z2Y1eGY5NDVuanFxNWgzMnI1M3VxdXZ3Gg0KBXN0YWtlEgQxMDAw",\n  "memo":"memo"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"grpc",children:"gRPC"}),"\n",(0,s.jsx)(n.p,{children:"A user can query the interchain account module using gRPC endpoints."}),"\n",(0,s.jsx)(n.h3,{id:"controller-1",children:"Controller"}),"\n",(0,s.jsx)(n.p,{children:"A user can query the controller submodule using gRPC endpoints."}),"\n",(0,s.jsx)(n.h4,{id:"interchainaccount",children:(0,s.jsx)(n.code,{children:"InterchainAccount"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"InterchainAccount"})," endpoint allows users to query the controller submodule for the interchain account address for a given owner on a particular connection."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'grpcurl -plaintext \\\n  -d \'{"owner":"cosmos1..","connection_id":"connection-0"}\' \\\n  localhost:9090 \\\n  ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount\n'})}),"\n",(0,s.jsx)(n.h4,{id:"params",children:(0,s.jsx)(n.code,{children:"Params"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Params"})," endpoint users to query the current controller submodule parameters."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ibc.applications.interchain_accounts.controller.v1.Query/Params\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"grpcurl -plaintext \\\n  localhost:9090 \\\n  ibc.applications.interchain_accounts.controller.v1.Query/Params\n"})}),"\n",(0,s.jsx)(n.h3,{id:"host-1",children:"Host"}),"\n",(0,s.jsx)(n.p,{children:"A user can query the host submodule using gRPC endpoints."}),"\n",(0,s.jsx)(n.h4,{id:"params-1",children:(0,s.jsx)(n.code,{children:"Params"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Params"})," endpoint users to query the current host submodule parameters."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ibc.applications.interchain_accounts.host.v1.Query/Params\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"grpcurl -plaintext \\\n  localhost:9090 \\\n  ibc.applications.interchain_accounts.host.v1.Query/Params\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>r,a:()=>o});var s=c(67294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);