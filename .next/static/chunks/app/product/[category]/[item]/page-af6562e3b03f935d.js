(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{4658:function(e,t,r){Promise.resolve().then(r.bind(r,4096))},4096:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(7437),n=r(3416),s=r(4070),l=e=>{let{quantity:t,setQuantity:r}=e;return(0,a.jsxs)("div",{className:"w-max rounded-md flex items-center border border-ring bg-card",children:[(0,a.jsx)("button",{onClick:e=>{r(t-1),e.preventDefault()},className:"w-10 h-14 flex justify-center items-center rounded-md hover:bg-accent hover:text-accent-foreground",children:"-"}),(0,a.jsx)("input",{min:1,type:"text",inputMode:"numeric",value:t||1,onChange:e=>r(parseInt(e.target.value)),className:"w-14 h-14 bg-card text-center flex justify-center items-center appearance-none"}),(0,a.jsx)("button",{onClick:()=>r(t+1),className:"w-10 h-14 flex justify-center items-center rounded-md hover:bg-accent hover:text-accent-foreground",children:"+"})]})},c=r(5356),o=r(7059),i=r(2265),d=r(6648);function u(e){let{img:t}=e,[r,n]=(0,i.useState)(),[l,u]=(0,i.useState)(!1),[f,m]=(0,i.useState)(0),[p,x]=(0,i.useState)(0),h=()=>{u(!0)},g=()=>{u(!1)};return(0,i.useEffect)(()=>{r&&(x(r.scrollSnapList().length),r.on("select",()=>{m(r.selectedScrollSnap())}))},[r]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.Z,{X:!0,Y:!0,className:"w-full h-full p-2",children:(0,a.jsxs)("div",{className:"flex items-center w-full h-full gap-2",children:[(0,a.jsx)("div",{className:"w-1/4",children:(0,a.jsxs)(c.lr,{className:"w-full h-full",opts:{align:"start",loop:!0},orientation:"vertical",plugins:[(0,o.Z)({delay:500,stop:l,reset:!l})],setApi:n,children:[(0,a.jsx)(c.KI,{className:"-mt-1 h-[240px] sm:h-[420px] w-full",children:Array.from({length:t.length}).map((e,r)=>(0,a.jsx)(c.d$,{className:"pt-1 flex flex-col justify-center items-center basis-1/2 sm:basis-1/4",onMouseEnter:h,onMouseLeave:g,children:(0,a.jsx)(d.default,{src:t[r],alt:"product item ".concat(r),className:"w-[100px] h-[100px] object-cover rounded-lg cursor-pointer",width:100,height:100,onClick:()=>{m(r)}})},r))}),(0,a.jsx)(c.am,{}),(0,a.jsx)(c.Pz,{})]})}),(0,a.jsx)("div",{className:"w-3/4 max-w-[350px] max-h-[500px]",children:(0,a.jsx)(d.default,{src:t[f],alt:"product item ".concat(f),className:"w-full h-full object-cover rounded-2xl aspect-[3/4]",width:600,height:600,onMouseEnter:h,onMouseLeave:g})})]})})})}function f(e){let{data:t}=e;return(0,a.jsxs)("div",{className:"w-full h-3/4",children:[(0,a.jsx)("h2",{className:"text-3xl",children:t.name}),(0,a.jsxs)("div",{className:"flex flex-row items-center space-x-6",children:[(0,a.jsxs)("p",{className:"text-lg text-muted-foreground",children:["฿ ",t.discount?t.price-t.discount:t.price]}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground line-through",children:t.discount?"฿ ".concat(t.price):""})]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("p",{className:"text-base",children:t.description})})]})}var m=r(495);function p(e){let{data:t}=e,[r,n]=(0,i.useState)(1),s=e=>{e<1||null==e||isNaN(e)?n(1):n(e)};return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"max-w-[1440px] h-full grid grid-cols-1 md:grid-cols-2 p-8 gap-4",children:[(0,a.jsx)(u,{img:t.img}),(0,a.jsxs)("div",{className:"w-full h-full",children:[(0,a.jsx)(f,{data:t}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(l,{quantity:r,setQuantity:e=>s(e)}),(0,a.jsx)(m.z,{className:"w-full h-14 text-lg",onClick:()=>console.log("Add to cart"),children:"Add to cart"})]}),(0,a.jsx)("div",{className:"w-full h-0.5 bg-for my-4 bg-muted-foreground opacity-20"}),(0,a.jsxs)("div",{className:"text-muted-foreground",children:[(0,a.jsxs)("h4",{className:"grid grid-cols-[100px_minmax(200px,_1fr)]",children:["ID",(0,a.jsxs)("span",{children:[": ",t.id]})]}),(0,a.jsxs)("h4",{className:"grid grid-cols-[100px_minmax(200px,_1fr)]",children:["Category",(0,a.jsxs)("span",{children:[": ",t.category]})]})]})]})]})})}var x=r(6534),h=r(4398);function g(e){let{productArray:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"w-full h-full px-8",children:(0,a.jsxs)(x.Z,{Y:!0,className:"w-full h-full space-y-4",children:[(0,a.jsx)(s.Z,{X:!0,Y:!0,className:"w-full h-full",children:(0,a.jsx)("h2",{className:"text-2xl",children:"Related Products"})}),(0,a.jsx)(x.Z,{X:!0,className:"relative w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center",children:t.map((e,t)=>(0,a.jsx)(h.I,{product:e},t))})]})})})}var j=r(6463);function v(){let e=(0,j.useParams)(),t=[{name:"Home",link:"/"},{name:"Product",link:"/product"},{name:e.category,link:"/product/".concat(e.category),current:!0,subPage:[{name:"category 1",link:"/product/category-1"},{name:"category 2",link:"/product/category-2"},{name:"category 3",link:"/product/category-3"},{name:"category 4",link:"/product/category-4"},{name:"category 5",link:"/product/category-5"},{name:"category 6",link:"/product/category-6"}]},{name:e.item,link:"/product/".concat(e.category,"/").concat(e.item),current:!0}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{breadCrumb:t}),(0,a.jsxs)(s.Z,{X:!0,Y:!0,className:"w-full h-full flex-col space-y-4",children:[(0,a.jsx)(p,{data:{id:1,category:"Category",name:"Product Name",description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",price:100,discount:10,img:["https://via.placeholder.com/100","https://via.placeholder.com/150","https://via.placeholder.com/200","https://via.placeholder.com/250","https://via.placeholder.com/300","https://via.placeholder.com/350"]}}),(0,a.jsx)(g,{productArray:[{img:"https://via.placeholder.com/150",name:"Product 1",description:"Description",price:1e3},{img:"https://via.placeholder.com/150",name:"Product 2",description:"Description",price:2e3},{img:"https://via.placeholder.com/150",name:"Product 3",description:"Description",price:3e3},{img:"https://via.placeholder.com/150",name:"Product 4",description:"Description",price:4e3}]}),(0,a.jsx)(m.z,{className:"w-1/3 h-12 text-lg",children:(0,a.jsx)("a",{href:"/product/".concat(e.category),className:"hover:text-accent-foreground",children:"Show More"})})]})]})}},3416:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(7437),n=r(9804);function s(e){let{breadCrumb:t,className:r}=e;return(0,a.jsx)("div",{className:"w-full h-[50px] bg-background px-10 flex flex-col justify-center ".concat(r," bg-subBackground"),children:(0,a.jsx)(n.Z,{breadCrumb:t})})}},9804:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(7437),n=r(2265),s=r(1538),l=r(7592),c=(r(3550),r(7440));let o=n.forwardRef((e,t)=>{let{...r}=e;return(0,a.jsx)("nav",{ref:t,"aria-label":"breadcrumb",...r})});o.displayName="Breadcrumb";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("ol",{ref:t,className:(0,c.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",r),...n})});i.displayName="BreadcrumbList";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("li",{ref:t,className:(0,c.cn)("inline-flex items-center gap-1.5",r),...n})});d.displayName="BreadcrumbItem";let u=n.forwardRef((e,t)=>{let{asChild:r,className:n,...l}=e,o=r?s.g7:"a";return(0,a.jsx)(o,{ref:t,className:(0,c.cn)("transition-colors hover:text-foreground",n),...l})});u.displayName="BreadcrumbLink",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("span",{ref:t,role:"link","aria-disabled":"true","aria-current":"page",className:(0,c.cn)("font-normal text-foreground",r),...n})}).displayName="BreadcrumbPage";let f=e=>{let{children:t,className:r,...n}=e;return(0,a.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,c.cn)("[&>svg]:size-3.5",r),...n,children:null!=t?t:(0,a.jsx)(l.Z,{})})};f.displayName="BreadcrumbSeparator";var m=r(6910),p=r(2421);function x(e){let{breadCrumb:t}=e;return(0,a.jsx)(o,{children:(0,a.jsx)(i,{className:"text-foreground",children:t.map((e,t)=>(0,a.jsxs)(d,{children:[t>0&&(0,a.jsx)(f,{}),(0,a.jsx)(u,{href:e.link,className:e.current?"text-card-foreground cursor-default":"opacity-70",children:e.name}),e.subPage&&(0,a.jsxs)(m.DropdownMenu,{children:[(0,a.jsx)(m.DropdownMenuTrigger,{children:(0,a.jsx)(p.Z,{className:"w-4 h-4"})}),(0,a.jsx)(m.DropdownMenuContent,{children:e.subPage.map((e,t)=>(0,a.jsx)(m.DropdownMenuItem,{children:(0,a.jsx)(u,{href:e.link,children:e.name})},t))})]})]},t))})})}},4070:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7437);function n(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex  ".concat(e.X&&e.Y?"justify-center items-center":e.X?"justify-center items-start":e.Y?"justify-start items-center":""," ").concat(e.className,"  animate"),children:e.children})})}},6534:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7437);function n(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:"flex ".concat(e.X&&e.Y?"justify-between items-center":e.X?"justify-around items-start":e.Y?"flex-col justify-around items-start":""," ").concat(e.className," animate"),children:e.children})})}},4398:function(e,t,r){"use strict";r.d(t,{I:function(){return u}});var a=r(7437),n=r(2265),s=r(6648),l=r(495),c=r(6013),o=r(7135),i=r(4070),d=r(6463);function u(e){let{product:t}=e,[r,u]=(0,n.useState)(!1),f=(0,d.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(c.Zb,{className:"".concat(r?"opacity-100 z-20":"opacity-0 -z-10  animate"," absolute top-0 left-0 w-[160px] sm:w-[200px] md:w-[240px] 2xl:w-[360px] h-full bg-black bg-opacity-70 cursor-pointer"),onMouseLeave:()=>u(!1),children:(0,a.jsx)(c.aY,{className:"w-full h-full",children:(0,a.jsx)(i.Z,{X:!0,Y:!0,className:"w-full h-full",children:(0,a.jsx)("div",{className:"w-full h-full flex flex-col justify-center items-center space-y-2",children:(0,a.jsx)(l.z,{className:"w-[80%] h-10 bg-primary text-white",onClick:()=>f.push(t.link),children:"Add to cart"})})})})}),(0,a.jsxs)(c.Zb,{className:"w-[160px] sm:w-[200px] md:w-[240px] 2xl:w-[360px] cursor-pointer shadow-lg",onClick:()=>u(!0),children:[(0,a.jsxs)("div",{className:"relative overflow-hidden",children:[(0,a.jsx)(s.default,{src:t.img,alt:"Project",width:480,height:480,className:"rounded-t-sm hover:scale-110 animate h-[400px]"}),(0,a.jsxs)("div",{className:"z-10",children:[t.new&&(0,a.jsx)(i.Z,{X:!0,Y:!0,className:"absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full",children:"New"}),t.hot&&(0,a.jsx)(i.Z,{X:!0,Y:!0,className:"absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full",children:"hot"}),t.sale&&(0,a.jsxs)(i.Z,{X:!0,Y:!0,className:"absolute top-4 right-4 bg-primary text-md text-white w-10 h-10 rounded-full",children:["- ",t.sale,"%"]})]})]}),(0,a.jsxs)(c.Ol,{onMouseEnter:()=>u(!0),children:[(0,a.jsx)(c.ll,{className:"text-lg",children:t.name}),(0,a.jsx)(c.SZ,{children:t.description})]}),(0,a.jsx)(c.eW,{children:(0,a.jsxs)(o.Label,{className:"flex gap-4 items-center",children:[(0,a.jsxs)("p",{className:"text-md",children:["฿ ",t.price-t.price*(t.sale?t.sale/100:0)]}),t.sale&&(0,a.jsxs)("p",{className:"text-sm line-through text-muted-foreground",children:["฿ ",t.price]})]})})]})]})})}},495:function(e,t,r){"use strict";r.d(t,{d:function(){return o},z:function(){return i}});var a=r(7437),n=r(2265),s=r(1538),l=r(2218),c=r(7440);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:i=!1,...d}=e,u=i?s.g7:"button";return(0,a.jsx)(u,{className:(0,c.cn)(o({variant:n,size:l,className:r})),ref:t,...d})});i.displayName="Button"},6013:function(e,t,r){"use strict";r.d(t,{Ol:function(){return c},SZ:function(){return i},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var a=r(7437),n=r(2265),s=r(7440);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});l.displayName="Card";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});c.displayName="CardHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});o.displayName="CardTitle";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});i.displayName="CardDescription";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});d.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},5356:function(e,t,r){"use strict";r.d(t,{KI:function(){return m},Pz:function(){return h},am:function(){return x},d$:function(){return p},lr:function(){return f}});var a=r(7437),n=r(2265),s=r(4300),l=r(1266),c=r(1976),o=r(7440),i=r(495);let d=n.createContext(null);function u(){let e=n.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=n.forwardRef((e,t)=>{let{orientation:r="horizontal",opts:l,setApi:c,plugins:i,className:u,children:f,...m}=e,[p,x]=(0,s.Z)({...l,axis:"horizontal"===r?"x":"y"},i),[h,g]=n.useState(!1),[j,v]=n.useState(!1),N=n.useCallback(e=>{e&&(g(e.canScrollPrev()),v(e.canScrollNext()))},[]),y=n.useCallback(()=>{null==x||x.scrollPrev()},[x]),w=n.useCallback(()=>{null==x||x.scrollNext()},[x]),b=n.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[y,w]);return n.useEffect(()=>{x&&c&&c(x)},[x,c]),n.useEffect(()=>{if(x)return N(x),x.on("reInit",N),x.on("select",N),()=>{null==x||x.off("select",N)}},[x,N]),(0,a.jsx)(d.Provider,{value:{carouselRef:p,api:x,opts:l,orientation:r||((null==l?void 0:l.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:w,canScrollPrev:h,canScrollNext:j},children:(0,a.jsx)("div",{ref:t,onKeyDownCapture:b,className:(0,o.cn)("relative",u),role:"region","aria-roledescription":"carousel",...m,children:f})})});f.displayName="Carousel";let m=n.forwardRef((e,t)=>{let{className:r,...n}=e,{carouselRef:s,orientation:l}=u();return(0,a.jsx)("div",{ref:s,className:"overflow-hidden",children:(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex","horizontal"===l?"-ml-4":"-mt-4 flex-col",r),...n})})});m.displayName="CarouselContent";let p=n.forwardRef((e,t)=>{let{className:r,...n}=e,{orientation:s}=u();return(0,a.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===s?"pl-4":"pt-4",r),...n})});p.displayName="CarouselItem";let x=n.forwardRef((e,t)=>{let{className:r,variant:n="outline",size:s="icon",...c}=e,{orientation:d,scrollPrev:f,canScrollPrev:m}=u();return(0,a.jsxs)(i.z,{ref:t,variant:n,size:s,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!m,onClick:f,...c,children:[(0,a.jsx)(l.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});x.displayName="CarouselPrevious";let h=n.forwardRef((e,t)=>{let{className:r,variant:n="outline",size:s="icon",...l}=e,{orientation:d,scrollNext:f,canScrollNext:m}=u();return(0,a.jsxs)(i.z,{ref:t,variant:n,size:s,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===d?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!m,onClick:f,...l,children:[(0,a.jsx)(c.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Next slide"})]})});h.displayName="CarouselNext"},6910:function(e,t,r){"use strict";r.d(t,{DropdownMenu:function(){return d},DropdownMenuContent:function(){return f},DropdownMenuItem:function(){return m},DropdownMenuTrigger:function(){return u},Ju:function(){return x},VD:function(){return h},bO:function(){return p}});var a=r(7437),n=r(2265),s=r(1220),l=r(7592),c=r(2468),o=r(8165),i=r(7440);let d=s.fC,u=s.xz;s.ZA,s.Uv,s.Tr,s.Ee,n.forwardRef((e,t)=>{let{className:r,inset:n,children:c,...o}=e;return(0,a.jsxs)(s.fF,{ref:t,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",r),...o,children:[c,(0,a.jsx)(l.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=s.fF.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.tu,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...n})}).displayName=s.tu.displayName;let f=n.forwardRef((e,t)=>{let{className:r,sideOffset:n=4,...l}=e;return(0,a.jsx)(s.Uv,{children:(0,a.jsx)(s.VY,{ref:t,sideOffset:n,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})})});f.displayName=s.VY.displayName;let m=n.forwardRef((e,t)=>{let{className:r,inset:n,...l}=e;return(0,a.jsx)(s.ck,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",r),...l})});m.displayName=s.ck.displayName;let p=n.forwardRef((e,t)=>{let{className:r,children:n,checked:l,...o}=e;return(0,a.jsxs)(s.oC,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:l,...o,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(c.Z,{className:"h-4 w-4"})})}),n]})});p.displayName=s.oC.displayName,n.forwardRef((e,t)=>{let{className:r,children:n,...l}=e;return(0,a.jsxs)(s.Rk,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...l,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(o.Z,{className:"h-2 w-2 fill-current"})})}),n]})}).displayName=s.Rk.displayName;let x=n.forwardRef((e,t)=>{let{className:r,inset:n,...l}=e;return(0,a.jsx)(s.__,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",r),...l})});x.displayName=s.__.displayName;let h=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",r),...n})});h.displayName=s.Z0.displayName},7135:function(e,t,r){"use strict";r.r(t),r.d(t,{Label:function(){return i}});var a=r(7437),n=r(2265),s=r(8364),l=r(2218),c=r(7440);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.f,{ref:t,className:(0,c.cn)(o(),r),...n})});i.displayName=s.f.displayName},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(4839),n=r(6164);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},2421:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(3480).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},3550:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(3480).Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},8364:function(e,t,r){"use strict";r.d(t,{f:function(){return l}});var a=r(2988),n=r(2265),s=r(5171);let l=(0,n.forwardRef)((e,t)=>(0,n.createElement)(s.WV.label,(0,a.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},2218:function(e,t,r){"use strict";r.d(t,{j:function(){return s}});let a=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(n&&(n+=" "),n+=a);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(a&&(a+=" "),a+=t);return a},s=(e,t)=>r=>{var s;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:l,defaultVariants:c}=t,o=Object.keys(l).map(e=>{let t=null==r?void 0:r[e],n=null==c?void 0:c[e];if(null===t)return null;let s=a(t)||a(n);return l[e][s]}),i=r&&Object.entries(r).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return n(e,o,null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:r,className:a,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...c,...i}[t]):({...c,...i})[t]===r})?[...e,r,a]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[976,382,648,486,971,23,744],function(){return e(e.s=4658)}),_N_E=e.O()}]);