(()=>{var e={};e.id=565,e.ids=[565],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},68214:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c}),s(61609),s(59473),s(19644),s(96560);var a=s(23191),r=s(88716),i=s(37922),l=s.n(i),n=s(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,61609)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\cart\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,59473)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,19644)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,96560)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\cart\\page.tsx"],m="/cart/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},58884:(e,t,s)=>{Promise.resolve().then(s.bind(s,48782)),Promise.resolve().then(s.bind(s,67188))},63876:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(10326);function r(e){return a.jsx(a.Fragment,{children:a.jsx("span",{className:`flex ${e.X&&e.Y?"justify-between items-center":e.X?"justify-around items-start":e.Y?"flex-col justify-around items-start":""} ${e.className} animate`,children:e.children})})}},67188:(e,t,s)=>{"use strict";s.d(t,{default:()=>f});var a=s(10326),r=s(18240),i=s(90772),l=s(53313),n=s(12969),o=s(15919),c=s(60097),d=s(43376),m=s(63876),u=s(33071),p=s(35584);function x({items:e,total:t,checkOut:s}){return a.jsx(a.Fragment,{children:a.jsx(d.Z,{X:!0,Y:!0,className:"w-full h-full",children:(0,a.jsxs)(u.Zb,{className:"w-full min-h-[250px] flex flex-col justify-between",children:[a.jsx(u.Ol,{children:a.jsx(u.ll,{className:"text-center",children:"Cart Totals"})}),(0,a.jsxs)(u.aY,{className:"",children:[e.map(e=>(0,a.jsxs)("div",{className:"grid grid-cols-[150px_auto] gap-4 justify-between",children:[(0,a.jsxs)("p",{className:"text-sm",children:[e.name," x ",e.quantity]}),(0,a.jsxs)(m.Z,{className:"text-sm",children:[(0,p.z)(e.price)," ฿"]})]},e.id)),(0,a.jsxs)("div",{className:"grid grid-cols-[150px_auto] gap-4 justify-between",children:[a.jsx("p",{className:"text-md",children:"Total : "}),(0,a.jsxs)(m.Z,{className:"text-md text-accent-foreground",children:[(0,p.z)(t??0)," ฿"]})]})]}),a.jsx(u.eW,{children:a.jsx(i.z,{className:"w-full",onClick:s,children:"Checkout"})})]})})})}var g=s(17577);let h=[{id:"m5gr84i9",amount:316,status:"success",email:"ken99@yahoo.com"},{id:"3u1reuv4",amount:242,status:"success",email:"Abe45@gmail.com"},{id:"derv1ws0",amount:837,status:"processing",email:"Monserrat44@gmail.com"},{id:"5kma53ae",amount:874,status:"success",email:"Silas22@gmail.com"},{id:"bhqecj4p",amount:721,status:"failed",email:"carmella@hotmail.com"}];function f(){let[e,t]=(0,g.useState)([]),s=[{id:"select",header:({table:e})=>a.jsx(l.X,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>{e.toggleAllPageRowsSelected(!!s),t(!0===s?h.map(e=>e.id):[])},"aria-label":"Select all"}),cell:({row:s})=>a.jsx(l.X,{checked:s.getIsSelected(),onCheckedChange:a=>{s.toggleSelected(!!a),console.log(s.original.id),t(!0===a?[...e,s.original.id]:e.filter(e=>e!==s.original.id))},"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"status",header:"Status",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("status")})},{accessorKey:"email",header:({column:e})=>(0,a.jsxs)(i.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Email",a.jsx(n.Z,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>a.jsx("div",{className:"lowercase",children:e.getValue("email")})},{accessorKey:"amount",header:()=>a.jsx("div",{className:"text-right",children:"Amount"}),cell:({row:e})=>{let t=parseFloat(e.getValue("amount")),s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t);return a.jsx("div",{className:"text-right font-medium",children:s})}},{id:"actions",enableHiding:!1,cell:({row:e})=>{let t=e.original;return(0,a.jsxs)(c.DropdownMenu,{children:[a.jsx(c.DropdownMenuTrigger,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[a.jsx("span",{className:"sr-only",children:"Open menu"}),a.jsx(o.Z,{className:"h-4 w-4"})]})}),(0,a.jsxs)(c.DropdownMenuContent,{align:"end",children:[a.jsx(c.Ju,{children:"Actions"}),a.jsx(c.DropdownMenuItem,{onClick:()=>navigator.clipboard.writeText(t.id),children:"Copy payment ID"}),a.jsx(c.VD,{}),a.jsx(c.DropdownMenuItem,{children:"View customer"}),a.jsx(c.DropdownMenuItem,{children:"View payment details"})]})]})}}];return a.jsx("div",{className:"w-full h-full",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-[auto_300px] gap-8 p-8",children:[a.jsx(r.Z,{data:h,columns:s,filterItem:{id:"email",label:"Email",value:""}}),a.jsx(x,{items:e.map(e=>h.find(t=>t.id===e)).map(e=>({id:e?.id??"",name:e?.id??"",price:e?.amount??0,quantity:1})),total:e.reduce((e,t)=>e+(h.find(e=>e.id===t)?.amount??0),0),checkOut:()=>console.log("Checkout")})]})})}},33071:(e,t,s)=>{"use strict";s.d(t,{Ol:()=>n,SZ:()=>c,Zb:()=>l,aY:()=>d,eW:()=>m,ll:()=>o});var a=s(10326),r=s(17577),i=s(77863);let l=r.forwardRef(({className:e,...t},s)=>a.jsx("div",{ref:s,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));l.displayName="Card";let n=r.forwardRef(({className:e,...t},s)=>a.jsx("div",{ref:s,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));n.displayName="CardHeader";let o=r.forwardRef(({className:e,...t},s)=>a.jsx("h3",{ref:s,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let c=r.forwardRef(({className:e,...t},s)=>a.jsx("p",{ref:s,className:(0,i.cn)("text-sm text-muted-foreground",e),...t}));c.displayName="CardDescription";let d=r.forwardRef(({className:e,...t},s)=>a.jsx("div",{ref:s,className:(0,i.cn)("p-6 pt-0",e),...t}));d.displayName="CardContent";let m=r.forwardRef(({className:e,...t},s)=>a.jsx("div",{ref:s,className:(0,i.cn)("flex items-center p-6 pt-0",e),...t}));m.displayName="CardFooter"},35584:(e,t,s)=>{"use strict";s.d(t,{z:()=>a});let a=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},61609:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(19510),r=s(88005),i=s(56942),l=s(68570);let n=(0,l.createProxy)(String.raw`C:\Users\Apisi\OneDrive\Documents\Florist\components\objects\cart\CartTable.tsx`),{__esModule:o,$$typeof:c}=n;n.default;let d=(0,l.createProxy)(String.raw`C:\Users\Apisi\OneDrive\Documents\Florist\components\objects\cart\CartTable.tsx#default`);function m(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx(r.ZP,{title:"Cart",breadCrumb:[{name:"Home",link:"/"},{name:"Cart",link:"/cart",current:!0}]}),a.jsx(i.Z,{X:!0,Y:!0,className:"w-full h-full",children:a.jsx(d,{})})]})}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,962,104,685,438],()=>s(68214));module.exports=a})();