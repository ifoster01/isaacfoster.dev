(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{907:function(e,t,r){Promise.resolve().then(r.t.bind(r,7960,23)),Promise.resolve().then(r.bind(r,23)),Promise.resolve().then(r.bind(r,3100)),Promise.resolve().then(r.bind(r,9406))},23:function(e,t,r){"use strict";r.d(t,{FluidBackground:function(){return o}});var i=r(7437),n=r(2265);class s{update(e,t){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>e)&&(this.vx*=-1),(this.y<0||this.y>t)&&(this.vy*=-1)}draw(e){e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fillStyle=this.color,e.fill()}constructor(e,t,r){this.x=e,this.y=t,this.color=r,this.size=3*Math.random()+2,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4}}class a{init(){this.resize(),window.addEventListener("resize",()=>this.resize());for(let e=0;e<50;e++){let e=Math.random()*this.canvas.width,t=Math.random()*this.canvas.height,r=this.colors[Math.floor(Math.random()*this.colors.length)];this.particles.push(new s(e,t,r))}}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}destroy(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener("resize",()=>this.resize())}constructor(e){this.animate=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.particles.forEach(e=>{e.update(this.canvas.width,this.canvas.height),e.draw(this.ctx)}),this.animationFrameId=requestAnimationFrame(this.animate)},this.canvas=e;let t=e.getContext("2d");if(!t)throw Error("Could not get canvas context");this.ctx=t,this.particles=[],this.animationFrameId=0,this.colors=["rgba(134, 239, 172, 0.6)","rgba(74, 222, 128, 0.6)","rgba(34, 197, 94, 0.6)","rgba(22, 163, 74, 0.6)","rgba(110, 231, 183, 0.6)","rgba(52, 211, 153, 0.6)","rgba(16, 185, 129, 0.6)","rgba(163, 230, 53, 0.6)"],this.init(),this.animate()}}function o(){let e=(0,n.useRef)(null),t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(e.current)return t.current=new a(e.current),()=>{var e;null===(e=t.current)||void 0===e||e.destroy()}},[]),(0,i.jsx)("canvas",{ref:e,className:"fixed inset-0 -z-10 w-full h-full",style:{pointerEvents:"none"}})}},3100:function(e,t,r){"use strict";r.d(t,{Footer:function(){return o}});var i=r(7437),n=r(4386),s=r(598),a=r(5135);function o(){return(0,i.jsx)("footer",{className:"py-8 bg-card/50 backdrop-blur-sm",children:(0,i.jsx)("div",{className:"max-w-4xl mx-auto px-8",children:(0,i.jsxs)("div",{className:"flex justify-center space-x-6",children:[(0,i.jsxs)(n.E.a,{href:"https://linkedin.com/in/your-profile",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors",whileHover:{scale:1.1},whileTap:{scale:.95},children:[(0,i.jsx)("span",{className:"sr-only",children:"LinkedIn"}),(0,i.jsx)(s.Z,{className:"w-6 h-6"})]}),(0,i.jsxs)(n.E.a,{href:"https://github.com/your-username",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors",whileHover:{scale:1.1},whileTap:{scale:.95},children:[(0,i.jsx)("span",{className:"sr-only",children:"GitHub"}),(0,i.jsx)(a.Z,{className:"w-6 h-6"})]})]})})})}},9406:function(e,t,r){"use strict";r.d(t,{Navigation:function(){return f}});var i=r(7437),n=r(1994),s=r(3335);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}var o=r(5668),l=r(4386);function c(e){let{href:t,children:r,isActive:n,onClick:s,isMobile:c}=e;return(0,i.jsxs)("a",{href:t,onClick:e=>{if(e.preventDefault(),"#hero"===t)(0,o.k)();else{let e=t.replace("#","");(0,o.Q)(e)}s&&s()},className:a("px-4 py-2 transition-colors relative",n?"text-primary":"text-foreground/80 hover:text-primary",c&&"w-full flex items-center justify-center"),children:[r,n&&(0,i.jsx)(l.E.span,{className:a("absolute bg-primary rounded-full",c?"left-0 top-1/2 -translate-y-1/2 w-1 h-4":"bottom-0 left-1/2 -translate-x-1/2 w-1 h-1"),layoutId:c?"mobileNavIndicator":"desktopNavIndicator",transition:{type:"spring",stiffness:380,damping:30}})]})}var h=r(2265),d=r(6840),u=r(5095);let m=[{href:"#hero",label:"Home"},{href:"#about",label:"About"},{href:"#projects",label:"Projects"},{href:"#contact",label:"Contact"}];function f(){let e=function(){let[e,t]=(0,h.useState)("hero"),[r,i]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{i(!0)},[]),(0,h.useEffect)(()=>{if(!r)return;let e=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){if("contact"===e.target.id&&window.innerHeight+window.pageYOffset>=document.documentElement.scrollHeight-100){t("contact");return}e.intersectionRatio>.5&&t(e.target.id)}})},{rootMargin:"-20% 0px -20% 0px",threshold:[0,.2,.4,.5,.6,.8,1]}),i=document.querySelectorAll("section[id]");i.forEach(t=>e.observe(t));let n=()=>{if(window.scrollY<100){t("hero");return}if(window.innerHeight+window.pageYOffset>=document.documentElement.scrollHeight-100){t("contact");return}let e=Array.from(i).map(e=>{let t=e.getBoundingClientRect(),r=(Math.min(window.innerHeight,t.bottom)-Math.max(0,t.top))/window.innerHeight;return{id:e.id,ratio:r,top:t.top}}).filter(e=>e.ratio>0);e.length>0&&t(e.reduce((e,t)=>t.ratio>e.ratio||t.ratio===e.ratio&&Math.abs(t.top)<Math.abs(e.top)?t:e).id)},s=!1,a=()=>{s||(window.requestAnimationFrame(()=>{n(),s=!1}),s=!0)};return window.addEventListener("scroll",a,{passive:!0}),n(),()=>{i.forEach(t=>e.unobserve(t)),window.removeEventListener("scroll",a)}},[r]),e}(),[t,r]=(0,h.useState)(!1),[n,s]=(0,h.useState)(!1),[o,f]=(0,h.useState)(!1);return((0,h.useEffect)(()=>{f(!0)},[]),(0,h.useEffect)(()=>{if(!o)return;let e=()=>{let e=100*m.length;s(window.innerWidth<e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[o]),o)?(0,i.jsx)("nav",{className:a("fixed top-0 left-0 right-0 z-50 border-b border-border/40",n?"bg-background":"bg-background/80 backdrop-blur-sm"),children:(0,i.jsx)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[n&&(0,i.jsxs)("button",{onClick:()=>r(!t),className:"inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-background/90 focus:outline-none","aria-expanded":t,children:[(0,i.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,i.jsx)(d.Z,{className:"h-6 w-6"})]}),(0,i.jsx)("div",{className:a("items-center justify-center flex-1",n?"hidden":"flex"),children:m.map(t=>{let{href:r,label:n}=t;return(0,i.jsx)(c,{href:r,isActive:e===r.replace("#",""),children:n},r)})}),(0,i.jsx)(u.M,{children:t&&n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm",onClick:()=>r(!1)}),(0,i.jsx)(l.E.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",bounce:0,duration:.4},className:"fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background p-6 shadow-lg",children:(0,i.jsx)("div",{className:"flex flex-col space-y-4",children:m.map(t=>{let{href:n,label:s}=t;return(0,i.jsx)(c,{href:n,isActive:e===n.replace("#",""),onClick:()=>r(!1),isMobile:!0,children:s},n)})})})]})})]})})}):(0,i.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm",children:(0,i.jsx)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsx)("div",{className:"flex h-16 items-center justify-between",children:(0,i.jsx)("div",{className:"flex-1"})})})})}},5668:function(e,t,r){"use strict";function i(e){let t=document.getElementById(e);null==t||t.scrollIntoView({behavior:"smooth"})}function n(){window.scrollTo({top:0,behavior:"smooth"})}r.d(t,{Q:function(){return i},k:function(){return n}})},7960:function(){}},function(e){e.O(0,[587,939,711,971,117,744],function(){return e(e.s=907)}),_N_E=e.O()}]);