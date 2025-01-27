"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79826],{88041:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var n=i(85893),s=i(11151);const d={title:"Light Client Module interface",sidebar_label:"Light Client Module interface",sidebar_position:2,slug:"/ibc/light-clients/light-client-module"},o="Implementing the LightClientModule interface",c={id:"light-clients/developer-guide/light-client-module",title:"Light Client Module interface",description:"Status method",source:"@site/versioned_docs/version-v9.0.x/03-light-clients/01-developer-guide/02-light-client-module.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/light-client-module",permalink:"/v9/ibc/light-clients/light-client-module",draft:!1,unlisted:!1,tags:[],version:"v9.0.x",sidebarPosition:2,frontMatter:{title:"Light Client Module interface",sidebar_label:"Light Client Module interface",sidebar_position:2,slug:"/ibc/light-clients/light-client-module"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v9/ibc/light-clients/overview"},next:{title:"Client State interface",permalink:"/v9/ibc/light-clients/client-state"}},r={},a=[{value:"<code>Status</code> method",id:"status-method",level:2},{value:"<code>TimestampAtHeight</code> method",id:"timestampatheight-method",level:2},{value:"<code>LatestHeight</code> method",id:"latestheight-method",level:2},{value:"<code>Initialize</code> method",id:"initialize-method",level:2},{value:"<code>UpdateState</code> method",id:"updatestate-method",level:2},{value:"<code>UpdateStateOnMisbehaviour</code> method",id:"updatestateonmisbehaviour-method",level:2},{value:"<code>VerifyMembership</code> method",id:"verifymembership-method",level:2},{value:"<code>VerifyNonMembership</code> method",id:"verifynonmembership-method",level:2},{value:"<code>VerifyClientMessage</code> method",id:"verifyclientmessage-method",level:2},{value:"<code>CheckForMisbehaviour</code> method",id:"checkformisbehaviour-method",level:2},{value:"<code>RecoverClient</code> method",id:"recoverclient-method",level:2},{value:"<code>VerifyUpgradeAndUpdateState</code> method",id:"verifyupgradeandupdatestate-method",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"implementing-the-lightclientmodule-interface",children:["Implementing the ",(0,n.jsx)(t.code,{children:"LightClientModule"})," interface"]}),"\n",(0,n.jsxs)(t.h2,{id:"status-method",children:[(0,n.jsx)(t.code,{children:"Status"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Status"})," must return the status of the client."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(t.code,{children:"Active"})," status indicates that clients are allowed to process packets."]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"Frozen"})," status indicates that misbehaviour was detected in the counterparty chain and the client is not allowed to be used."]}),"\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(t.code,{children:"Expired"})," status indicates that a client is not allowed to be used because it was not updated for longer than the trusting period."]}),"\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(t.code,{children:"Unknown"})," status indicates that there was an error in determining the status of a client."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All possible ",(0,n.jsx)(t.code,{children:"Status"})," types can be found ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L22-L32",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This field is returned in the response of the gRPC ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/types/query.pb.go#L665",children:(0,n.jsx)(t.code,{children:"ibc.core.client.v1.Query/ClientStatus"})})," endpoint."]}),"\n",(0,n.jsxs)(t.h2,{id:"timestampatheight-method",children:[(0,n.jsx)(t.code,{children:"TimestampAtHeight"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TimestampAtHeight"})," must return the timestamp for the consensus state associated with the provided height.\nThis value is used to facilitate timeouts by checking the packet timeout timestamp against the returned value."]}),"\n",(0,n.jsxs)(t.h2,{id:"latestheight-method",children:[(0,n.jsx)(t.code,{children:"LatestHeight"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"LatestHeight"})," should return the latest block height that the client state represents."]}),"\n",(0,n.jsxs)(t.h2,{id:"initialize-method",children:[(0,n.jsx)(t.code,{children:"Initialize"})," method"]}),"\n",(0,n.jsx)(t.p,{children:"Clients must validate the initial consensus state, and set the initial client state and consensus state in the provided client store.\nClients may also store any necessary client-specific metadata."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Initialize"})," is called when a ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L30",children:"client is created"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"updatestate-method",children:[(0,n.jsx)(t.code,{children:"UpdateState"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"UpdateState"})," updates and stores as necessary any associated information for an IBC client, such as the ",(0,n.jsx)(t.code,{children:"ClientState"})," and corresponding ",(0,n.jsx)(t.code,{children:"ConsensusState"}),". See section ",(0,n.jsx)(t.a,{href:"/v9/ibc/light-clients/updates-and-misbehaviour#updatestate",children:(0,n.jsx)(t.code,{children:"UpdateState"})})," for more information."]}),"\n",(0,n.jsxs)(t.h2,{id:"updatestateonmisbehaviour-method",children:[(0,n.jsx)(t.code,{children:"UpdateStateOnMisbehaviour"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"UpdateStateOnMisbehaviour"})," should perform appropriate state changes on a client state given that misbehaviour has been detected and verified. See section ",(0,n.jsx)(t.a,{href:"/v9/ibc/light-clients/updates-and-misbehaviour#updatestateonmisbehaviour",children:(0,n.jsx)(t.code,{children:"UpdateStateOnMisbehaviour"})})," for more information."]}),"\n",(0,n.jsxs)(t.h2,{id:"verifymembership-method",children:[(0,n.jsx)(t.code,{children:"VerifyMembership"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"VerifyMembership"})," must verify the existence of a value at a given commitment path at the specified height. For more information about membership proofs\nsee the ",(0,n.jsx)(t.a,{href:"/v9/ibc/light-clients/proofs",children:"Existence and non-existence proofs section"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"verifynonmembership-method",children:[(0,n.jsx)(t.code,{children:"VerifyNonMembership"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"VerifyNonMembership"})," must verify the absence of a value at a given commitment path at a specified height. For more information about non-membership proofs\nsee the ",(0,n.jsx)(t.a,{href:"/v9/ibc/light-clients/proofs",children:"Existence and non-existence proofs section"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"verifyclientmessage-method",children:[(0,n.jsx)(t.code,{children:"VerifyClientMessage"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"VerifyClientMessage"})," must verify a ",(0,n.jsx)(t.code,{children:"ClientMessage"}),". A ",(0,n.jsx)(t.code,{children:"ClientMessage"})," could be a ",(0,n.jsx)(t.code,{children:"Header"}),", ",(0,n.jsx)(t.code,{children:"Misbehaviour"}),", or batch update.\nIt must handle each type of ",(0,n.jsx)(t.code,{children:"ClientMessage"})," appropriately. Calls to ",(0,n.jsx)(t.code,{children:"CheckForMisbehaviour"}),", ",(0,n.jsx)(t.code,{children:"UpdateState"}),", and ",(0,n.jsx)(t.code,{children:"UpdateStateOnMisbehaviour"}),"\nwill assume that the content of the ",(0,n.jsx)(t.code,{children:"ClientMessage"})," has been verified and can be trusted. An error should be returned\nif the ClientMessage fails to verify. See section ",(0,n.jsx)(t.a,{href:"/v9/ibc/light-clients/updates-and-misbehaviour#verifyclientmessage",children:(0,n.jsx)(t.code,{children:"VerifyClientMessage"})})," for more information."]}),"\n",(0,n.jsxs)(t.h2,{id:"checkformisbehaviour-method",children:[(0,n.jsx)(t.code,{children:"CheckForMisbehaviour"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:["Checks for evidence of a misbehaviour in ",(0,n.jsx)(t.code,{children:"Header"})," or ",(0,n.jsx)(t.code,{children:"Misbehaviour"})," type. It assumes the ",(0,n.jsx)(t.code,{children:"ClientMessage"}),"\nhas already been verified. See section ",(0,n.jsx)(t.a,{href:"/v9/ibc/light-clients/updates-and-misbehaviour#checkformisbehaviour",children:(0,n.jsx)(t.code,{children:"CheckForMisbehaviour"})})," for more information."]}),"\n",(0,n.jsxs)(t.h2,{id:"recoverclient-method",children:[(0,n.jsx)(t.code,{children:"RecoverClient"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"RecoverClient"})," is used to recover an expired or frozen client by updating the client with the state of a substitute client. The method must verify that the provided substitute may be used to update the subject client. See section ",(0,n.jsxs)(t.a,{href:"/v9/ibc/light-clients/proposals#implementing-recoverclient",children:["Implementing ",(0,n.jsx)(t.code,{children:"RecoverClient"})]})," for more information."]}),"\n",(0,n.jsxs)(t.h2,{id:"verifyupgradeandupdatestate-method",children:[(0,n.jsx)(t.code,{children:"VerifyUpgradeAndUpdateState"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"VerifyUpgradeAndUpdateState"})," provides a path to upgrading clients given an upgraded ",(0,n.jsx)(t.code,{children:"ClientState"}),", upgraded ",(0,n.jsx)(t.code,{children:"ConsensusState"})," and proofs for each. See section ",(0,n.jsxs)(t.a,{href:"/v9/ibc/light-clients/upgrades#implementing-verifyupgradeandupdatestate",children:["Implementing ",(0,n.jsx)(t.code,{children:"VerifyUpgradeAndUpdateState"})]})," for more information."]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>o});var n=i(67294);const s={},d=n.createContext(s);function o(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);