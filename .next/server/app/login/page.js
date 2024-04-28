(()=>{var e={};e.id=626,e.ids=[626],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},60327:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(94687),s(59473),s(19644),s(96560);var r=s(23191),a=s(88716),n=s(37922),i=s.n(n),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,94687)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\login\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,59473)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,19644)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,96560)),"C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Apisi\\OneDrive\\Documents\\Florist\\app\\login\\page.tsx"],u="/login/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},57239:(e,t,s)=>{Promise.resolve().then(s.bind(s,9972))},9743:(e,t,s)=>{"use strict";s.d(t,{U2:()=>o,v_:()=>l});var r=s(24490),a=s(98654);function n(e,t,s,r,n){let i=a.H.getAccessToken(),o={"Content-Type":n?"application/json":"multipart/form-data",Accept:"application/json","X-Requested-With":"XMLHttpRequest"};return r&&(o.Authorization=`Bearer ${i}`),{method:e,url:`http://localhost/api/${t}`,headers:o,data:s}}async function i(e){try{let t=await (0,r.Z)(e);return JSON.stringify({status:t.status,data:t.data,message:t.data.message})}catch(e){throw{status:e.response?.status,message:e.response?.data?.message}}}async function o(e,t,s){let r="";return t&&(r=Object.entries(t).filter(([e,t])=>null!=t&&""!==t).map(([e,t])=>Array.isArray(t)?t.map(t=>`${e}=${t}`).join("&"):`${e}=${t}`).join("&")),i(n("get",r?`${e}?${r}`:e,void 0,s))}async function l(e,t,s,r){if(r)return i(n("post",e,t,s,!0));{let r=new FormData;for(let e in t)t.hasOwnProperty(e)&&r.append(e,t[e]);return i(n("post",e,r,s,!1))}}},5972:(e,t,s)=>{"use strict";s.d(t,{x:()=>n,z:()=>i});var r=s(9743),a=s(20479);async function n(e){try{let t=await (0,r.v_)("auth/login",e);return(0,a.M)(t)}catch(e){throw e}}async function i(e){try{let t=await (0,r.v_)("auth/register",e,void 0,!0);return(0,a.M)(t)}catch(e){throw e}}},9972:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(10326),a=s(43376),n=s(5972),i=s(90772),o=s(33071),l=s(30481),c=s(31048),d=s(77467),u=s(98654),p=s(90434),m=s(17577),f=s(25842),x=s(35047);function g(){let e=(0,f.I0)(),t=(0,x.useRouter)(),[s,a]=(0,m.useState)({username:"",password:""}),g=async()=>{if(s.username&&s.password)try{let r=await (0,n.x)(s);200===r.status?(u.H.login(r.data.access_token),t.push("/"),e((0,d.G3)({open:!0,title:"Login Success",content:"You have successfully logged in",status:"success",confirmText:"OK",onConfirm:()=>e((0,d.gk)())}))):e((0,d.G3)({open:!0,title:"Login Failed",content:"Invalid username or password",status:"error",confirmText:"OK",onConfirm:()=>e((0,d.gk)())}))}catch(t){e((0,d.G3)({open:!0,title:"Login Failed",content:"Invalid username or password",status:"error",confirmText:"OK",onConfirm:()=>e((0,d.gk)())}))}else switch(!0){case!s.username:e((0,d.G3)({open:!0,title:"Login Failed",content:"Username is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,d.gk)())}));break;case!s.password:e((0,d.G3)({open:!0,title:"Login Failed",content:"Password is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,d.gk)())}))}};return(0,r.jsxs)(o.Zb,{className:"w-full mx-auto max-w-md h-max",children:[(0,r.jsxs)(o.Ol,{children:[r.jsx(o.ll,{className:"text-2xl",children:"Login"}),r.jsx(o.SZ,{children:"Enter your username and password to login"})]}),(0,r.jsxs)(o.aY,{children:[(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(c.Label,{htmlFor:"username",children:"Username"}),r.jsx(l.uD,{label:"Username",id:"username",type:"text",required:!0,value:s.username,onChange:e=>a({...s,username:e.target.value})})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(c.Label,{htmlFor:"password",children:"Password"}),r.jsx(l.uD,{label:"Password",id:"password",type:"password",required:!0,value:s.password,onChange:e=>a({...s,password:e.target.value})})]}),r.jsx(i.z,{className:"w-full",onClick:g,children:"Login"})]}),(0,r.jsxs)("div",{className:"mt-4 text-center text-sm",children:["Don't have an account?"," ",r.jsx(p.default,{href:"/register",className:"underline",children:"Sign up"})]})]})]})}function h(){return r.jsx(r.Fragment,{children:r.jsx(a.Z,{X:!0,Y:!0,className:"w-full h-screen",children:r.jsx(g,{})})})}},33071:(e,t,s)=>{"use strict";s.d(t,{Ol:()=>o,SZ:()=>c,Zb:()=>i,aY:()=>d,eW:()=>u,ll:()=>l});var r=s(10326),a=s(17577),n=s(77863);let i=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));i.displayName="Card";let o=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...t}));o.displayName="CardHeader";let l=a.forwardRef(({className:e,...t},s)=>r.jsx("h3",{ref:s,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));l.displayName="CardTitle";let c=a.forwardRef(({className:e,...t},s)=>r.jsx("p",{ref:s,className:(0,n.cn)("text-sm text-muted-foreground",e),...t}));c.displayName="CardDescription";let d=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,n.cn)("p-6 pt-0",e),...t}));d.displayName="CardContent";let u=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,n.cn)("flex items-center p-6 pt-0",e),...t}));u.displayName="CardFooter"},30481:(e,t,s)=>{"use strict";s.d(t,{uD:()=>d});var r=s(10326),a=s(17577),n=s(77863),i=s(54432),o=s(31048);let l=a.forwardRef(({className:e,...t},s)=>r.jsx(i.I,{placeholder:" ",className:(0,n.cn)("peer",e),ref:s,...t}));l.displayName="FloatingInput";let c=a.forwardRef(({className:e,...t},s)=>r.jsx(o.Label,{className:(0,n.cn)("peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",e),ref:s,...t}));c.displayName="FloatingLabel";let d=a.forwardRef(({id:e,label:t,...s},a)=>(0,r.jsxs)("div",{className:"relative",children:[r.jsx(l,{ref:a,id:e,...s}),r.jsx(c,{htmlFor:e,children:t})]}));d.displayName="FloatingLabelInput"},54432:(e,t,s)=>{"use strict";s.d(t,{I:()=>i});var r=s(10326),a=s(17577),n=s(77863);let i=a.forwardRef(({className:e,type:t,...s},a)=>r.jsx("input",{type:t,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...s}));i.displayName="Input"},31048:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Label:()=>c});var r=s(10326),a=s(17577),n=s(34478),i=s(28671),o=s(77863);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef(({className:e,...t},s)=>r.jsx(n.f,{ref:s,className:(0,o.cn)(l(),e),...t}));c.displayName=n.f.displayName},98654:(e,t,s)=>{"use strict";s.d(t,{H:()=>a});var r=s(66562);let a={login:e=>{r.Z.set("access_token",e,{expires:new Date(Date.now()+18e5),sameSite:"lax",secure:!0})},logout:()=>{r.Z.remove("access_token")},getAccessToken:()=>r.Z.get("access_token"),setAccessToken:e=>{r.Z.set("access_token",e,{expires:new Date(Date.now()+18e5),sameSite:"lax",secure:!0})},getRefreshToken:()=>r.Z.get("refresh_token")}},20479:(e,t,s)=>{"use strict";function r(e){let t={};try{t=JSON.parse(e)}catch(e){t={statusCode:999,result:null,message:"ERROR_PARSE_JSON"}}return t}s.d(t,{M:()=>r})},94687:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var r=s(68570);let a=(0,r.createProxy)(String.raw`C:\Users\Apisi\OneDrive\Documents\Florist\app\login\page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`C:\Users\Apisi\OneDrive\Documents\Florist\app\login\page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,962,613,685],()=>s(60327));module.exports=r})();