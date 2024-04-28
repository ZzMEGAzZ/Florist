(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8685:function(e,t,n){Promise.resolve().then(n.bind(n,9488))},9927:function(e,t,n){"use strict";n.d(t,{U2:function(){return i},v_:function(){return s}});var r=n(2126),o=n(5330);function a(e,t,n,r,a){let c=o.H.getAccessToken(),i={"Content-Type":a?"application/json":"multipart/form-data",Accept:"application/json","X-Requested-With":"XMLHttpRequest"};return r&&(i.Authorization="Bearer ".concat(c)),{method:e,url:"".concat("http://localhost/api/").concat(t),headers:i,data:n}}async function c(e){try{let t=await (0,r.Z)(e);return JSON.stringify({status:t.status,data:t.data,message:t.data.message})}catch(e){var t,n,o;throw{status:null===(t=e.response)||void 0===t?void 0:t.status,message:null===(o=e.response)||void 0===o?void 0:null===(n=o.data)||void 0===n?void 0:n.message}}}async function i(e,t,n){let r="";return t&&(r=Object.entries(t).filter(e=>{let[t,n]=e;return null!=n&&""!==n}).map(e=>{let[t,n]=e;return Array.isArray(n)?n.map(e=>"".concat(t,"=").concat(e)).join("&"):"".concat(t,"=").concat(n)}).join("&")),c(a("get",r?"".concat(e,"?").concat(r):e,void 0,n))}async function s(e,t,n,r){if(r)return c(a("post",e,t,n,!0));{let r=new FormData;for(let e in t)t.hasOwnProperty(e)&&r.append(e,t[e]);return c(a("post",e,r,n,!1))}}},1060:function(e,t,n){"use strict";n.d(t,{Xp:function(){return i},gK:function(){return c},qZ:function(){return a},tG:function(){return s}});var r=n(9927),o=n(2300);async function a(e){try{let t=await (0,r.v_)("products/add_product_image",e,"useToken");return(0,o.M)(t)}catch(e){throw e}}async function c(e){try{let t=await (0,r.v_)("products/add_product",e,"useToken",!0);return(0,o.M)(t)}catch(e){throw e}}async function i(e,t){try{let n=await (0,r.U2)("products/get_products".concat(e?"?page=".concat(e.page,"&limit=").concat(e.limit):""),t);return(0,o.M)(n)}catch(e){throw e}}async function s(){try{let e=await (0,r.U2)("products/get_all_categories",void 0);return(0,o.M)(e)}catch(e){throw e}}},9488:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7437),o=n(495),a=n(7233),c=n(2265),i=n(1444),s=n(3263),u=n(1060);function d(){let e=(0,i.I0)(),[t,n]=(0,c.useState)({category_id:0,name:"",description:"",price:100,stock_quantity:99,product_image:""}),[d,l]=(0,c.useState)(),f=async()=>{if(t.category_id&&t.name&&t.description&&t.price&&t.stock_quantity)try{let n=await (0,u.gK)(t);if(201===n.status){let t=n.data.product_id;try{let n=await (0,u.qZ)({product_id:t,file:d});200===n.status?e((0,s.G3)({open:!0,title:"Add Product Success",content:"You have successfully added product",status:"success",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3})):e((0,s.G3)({open:!0,title:"Add Product Failed",content:"Failed to add product",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}))}catch(t){e((0,s.G3)({open:!0,title:"Add Product Failed",content:"Failed to add product",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}))}}else e((0,s.G3)({open:!0,title:"Add Product Failed",content:"Failed to add product",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}))}catch(t){e((0,s.G3)({open:!0,title:"Add Product Failed",content:"Failed to add product",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}))}else switch(!0){case!t.category_id:e((0,s.G3)({open:!0,title:"Add Product Failed",content:"category_id is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}));break;case!t.name:e((0,s.G3)({open:!0,title:"Add Product Failed",content:"name is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}));break;case!t.description:e((0,s.G3)({open:!0,title:"Add Product Failed",content:"description is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}));break;case!t.price:e((0,s.G3)({open:!0,title:"Add Product Failed",content:"price is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}));break;case!t.stock_quantity:e((0,s.G3)({open:!0,title:"Add Product Failed",content:"stock_quantity is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}));break;case!t.product_image:e((0,s.G3)({open:!0,title:"Add Product Failed",content:"product_image is required",status:"error",confirmText:"OK",onConfirm:()=>e((0,s.gk)()),countDown:3e3}))}};return(0,r.jsxs)("div",{className:"w-full h-full bg-Danger-light p-8",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(a.uD,{label:"categoryID",placeholder:"categoryID",onChange:e=>n({...t,category_id:parseInt(e.target.value)})}),(0,r.jsx)(a.uD,{label:"name",placeholder:"name",onChange:e=>n({...t,name:e.target.value})}),(0,r.jsx)(a.uD,{label:"desc",placeholder:"desc",onChange:e=>n({...t,description:e.target.value})}),(0,r.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{if(null===e.target.files)return;let t=e.target.files[0],n=new FileReader;n.onloadend=()=>{l(t)},n.readAsDataURL(t)}})]}),(0,r.jsx)(o.z,{onClick:f,children:"Add Product"})]})}},495:function(e,t,n){"use strict";n.d(t,{d:function(){return s},z:function(){return u}});var r=n(7437),o=n(2265),a=n(1538),c=n(2218),i=n(7440);let s=(0,c.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=o.forwardRef((e,t)=>{let{className:n,variant:o,size:c,asChild:u=!1,...d}=e,l=u?a.g7:"button";return(0,r.jsx)(l,{className:(0,i.cn)(s({variant:o,size:c,className:n})),ref:t,...d})});u.displayName="Button"},7233:function(e,t,n){"use strict";n.d(t,{uD:function(){return d}});var r=n(7437),o=n(2265),a=n(7440),c=n(3102),i=n(7135);let s=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(c.I,{placeholder:" ",className:(0,a.cn)("peer",n),ref:t,...o})});s.displayName="FloatingInput";let u=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(i.Label,{className:(0,a.cn)("peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",n),ref:t,...o})});u.displayName="FloatingLabel";let d=o.forwardRef((e,t)=>{let{id:n,label:o,...a}=e;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(s,{ref:t,id:n,...a}),(0,r.jsx)(u,{htmlFor:n,children:o})]})});d.displayName="FloatingLabelInput"},3102:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var r=n(7437),o=n(2265),a=n(7440);let c=o.forwardRef((e,t)=>{let{className:n,type:o,...c}=e;return(0,r.jsx)("input",{type:o,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...c})});c.displayName="Input"},7135:function(e,t,n){"use strict";n.r(t),n.d(t,{Label:function(){return u}});var r=n(7437),o=n(2265),a=n(8364),c=n(2218),i=n(7440);let s=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(a.f,{ref:t,className:(0,i.cn)(s(),n),...o})});u.displayName=a.f.displayName},7440:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var r=n(4839),o=n(6164);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.W)(t))}},3263:function(e,t,n){"use strict";n.d(t,{G3:function(){return o},gk:function(){return a},ng:function(){return c}});let r=(0,n(1904).oM)({name:"dialogModal",initialState:{open:!1,title:"",content:"",status:"",countDown:3e3},reducers:{openDialog:(e,t)=>{e.open=!0,e.title=t.payload.title,e.content=t.payload.content,e.status=t.payload.status,e.confirmText=t.payload.confirmText,e.onConfirm=t.payload.onConfirm,e.cancelText=t.payload.cancelText,e.countDown=t.payload.countDown?t.payload.countDown:3e3},closeDialog:e=>{e.open=!1,e.title="",e.content="",e.status="",e.confirmText="confirm",e.onConfirm=()=>{}}}}),{openDialog:o,closeDialog:a}=r.actions,c=e=>e.dialogModal;t.ZP=r.reducer},5330:function(e,t,n){"use strict";n.d(t,{H:function(){return o}});var r=n(2649);let o={login:e=>{r.Z.set("access_token",e,{expires:new Date(Date.now()+18e5),sameSite:"lax",secure:!0})},logout:()=>{r.Z.remove("access_token")},getAccessToken:()=>r.Z.get("access_token"),setAccessToken:e=>{r.Z.set("access_token",e,{expires:new Date(Date.now()+18e5),sameSite:"lax",secure:!0})},getRefreshToken:()=>r.Z.get("refresh_token")}},2300:function(e,t,n){"use strict";function r(e){let t={};try{t=JSON.parse(e)}catch(e){t={statusCode:999,result:null,message:"ERROR_PARSE_JSON"}}return t}n.d(t,{M:function(){return r}})}},function(e){e.O(0,[976,420,18,16,971,23,744],function(){return e(e.s=8685)}),_N_E=e.O()}]);