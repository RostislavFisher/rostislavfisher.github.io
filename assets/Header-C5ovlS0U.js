import{B as V,s as T,f as q,c as u,o as l,r as F,m as z,a as b,b as p,t as y,n as K,d as O,_ as W,e as f,u as E,g as R,h as G,i as J,j as n,k as r,w as S,l as Q,p as i,q as X,v as c,F as L,x as Y,y as M}from"./index-Bl5XGLpH.js";import{s as A}from"./index-CVYPKUYI.js";var Z=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,ee={root:function(t){var s=t.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},ae=V.extend({name:"avatar",style:Z,classes:ee}),te={name:"BaseAvatar",extends:T,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ae,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}function U(e,t,s){return(t=ne(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function ne(e){var t=oe(e,"string");return w(t)=="symbol"?t:t+""}function oe(e,t){if(w(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var d=s.call(e,t);if(w(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var h={name:"Avatar",extends:te,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return q(U(U({},this.shape,this.shape),this.size,this.size))}}},ie=["aria-labelledby","aria-label","data-p"],le=["data-p"],se=["data-p"],re=["src","alt","data-p"];function ue(e,t,s,d,v,o){return l(),u("div",z({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":o.dataP}),[F(e.$slots,"default",{},function(){return[e.label?(l(),u("span",z({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":o.dataP}),y(e.label),17,le)):e.$slots.icon?(l(),b(O(e.$slots.icon),{key:1,class:K(e.cx("icon"))},null,8,["class"])):e.icon?(l(),u("span",z({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":o.dataP}),null,16,se)):e.image?(l(),u("img",z({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},e.ptm("image"),{"data-p":o.dataP}),null,16,re)):p("",!0)]})],16,ie)}h.render=ue;const de={class:"page-container"},ce={class:"custom-header"},ve={class:"left-section"},pe={class:"right-section"},me={class:"account-trigger"},ge={key:0,class:"account-dropdown"},be={class:"account-dropdown-content"},fe={class:"account-info"},ye={class:"account-name"},he={class:"account-email"},we={class:"mobile-user-info"},ke={class:"mobile-user-name"},Ce={class:"mobile-user-email"},ze={class:"mobile-create-section"},Se={class:"mobile-menu-list"},xe={__name:"Header",setup(e){const t=X();f(!1);const s=f(!1),d=f(!1),v=f(!1),o=f(E.getCurrentUser()),x=R(()=>o.value!==null),k=R(()=>o.value?(o.value.username||o.value.name||"").split(" ").map(a=>a.charAt(0)).join("").toUpperCase().substring(0,2):"");function _(){o.value=E.getCurrentUser()}function P(){v.value=window.innerWidth<768}function D(){d.value=!d.value,d.value?document.body.style.overflow="hidden":document.body.style.overflow=""}function m(){d.value=!1,document.body.style.overflow=""}function B($){m(),t.push($)}G(()=>{window.addEventListener("loginStateChanged",_),window.addEventListener("resize",P),P()}),J(()=>{window.removeEventListener("loginStateChanged",_),window.removeEventListener("resize",P),document.body.style.overflow=""});const I=()=>{m(),t.push("/myAccount")},j=()=>{m(),t.push("/credits")},H=()=>{m(),t.push("/paymentHistory")},N=()=>{m(),E.logout(),window.dispatchEvent(new Event("loginStateChanged")),window.location.reload()};return($,a)=>{const C=Q("router-link");return l(),u("div",de,[n("div",ce,[n("div",ve,[r(C,{to:"/",class:"logo-container"},{default:S(()=>[...a[8]||(a[8]=[n("i",{class:"pi pi-box logo-icon"},null,-1),n("span",{class:"logo-text"},"ICEBREAKER",-1)])]),_:1}),x.value&&!v.value?(l(),b(i(c),{key:0,label:"Create",icon:"pi pi-plus",class:"create-button",onClick:a[0]||(a[0]=g=>i(t).push("/deck"))})):p("",!0)]),n("div",pe,[v.value?p("",!0):(l(),u(L,{key:0},[r(C,{to:"/about",class:"menu-item"},{default:S(()=>[...a[9]||(a[9]=[M("About",-1)])]),_:1}),r(C,{to:"/rules",class:"menu-item"},{default:S(()=>[...a[10]||(a[10]=[M("Rules",-1)])]),_:1})],64)),x.value?(l(),u(L,{key:1},[v.value?p("",!0):(l(),u("div",{key:0,class:"account-dropdown-container",onMouseenter:a[1]||(a[1]=g=>s.value=!0),onMouseleave:a[2]||(a[2]=g=>s.value=!1)},[n("div",me,[r(i(h),{label:k.value,class:"header-avatar",size:"normal"},null,8,["label"])]),s.value?(l(),u("div",ge,[n("div",be,[n("div",{class:"account-header",onClick:I},[r(i(h),{label:k.value,class:"dropdown-avatar",size:"large"},null,8,["label"]),n("div",fe,[n("span",ye,y(o.value.username||o.value.name),1),n("span",he,y(o.value.email),1)])]),n("div",{class:"account-menu"},[n("div",{class:"account-menu-item",onClick:j},[...a[11]||(a[11]=[n("i",{class:"pi pi-wallet"},null,-1),n("span",null,"Credits",-1)])]),n("div",{class:"account-menu-item",onClick:H},[...a[12]||(a[12]=[n("i",{class:"pi pi-history"},null,-1),n("span",null,"Payment history",-1)])]),a[14]||(a[14]=n("div",{class:"account-divider"},null,-1)),n("div",{class:"account-menu-item logout-item",onClick:N},[...a[13]||(a[13]=[n("span",null,"Log out",-1)])])])])])):p("",!0)],32)),v.value&&d.value?(l(),u("div",{key:1,class:"mobile-menu-overlay",onClick:m},[n("div",{class:"mobile-menu-content",onClick:a[6]||(a[6]=Y(()=>{},["stop"]))},[n("div",{class:"mobile-user-section",onClick:I},[r(i(h),{label:k.value,class:"mobile-avatar",size:"xlarge",shape:"circle"},null,8,["label"]),n("div",we,[n("span",ke,y(o.value.username||o.value.name),1),n("span",Ce,y(o.value.email),1)]),r(i(c),{icon:"pi pi-chevron-right",text:"",rounded:""})]),r(i(A)),n("div",ze,[x.value?(l(),b(i(c),{key:0,label:"Create",icon:"pi pi-plus",class:"mobile-menu-item",onClick:a[3]||(a[3]=g=>i(t).push("/deck")),text:"",severity:"secondary"})):p("",!0)]),r(i(A)),n("div",Se,[r(i(c),{label:"About",icon:"pi pi-info-circle",class:"mobile-menu-item",onClick:a[4]||(a[4]=g=>B("/about")),text:"",severity:"secondary"}),r(i(c),{label:"Rules",icon:"pi pi-book",class:"mobile-menu-item",onClick:a[5]||(a[5]=g=>B("/rules")),text:"",severity:"secondary"}),r(i(c),{label:"Credits",icon:"pi pi-wallet",class:"mobile-menu-item",onClick:j,text:"",severity:"secondary"}),r(i(c),{label:"Payment History",icon:"pi pi-history",class:"mobile-menu-item",onClick:H,text:"",severity:"secondary"})]),r(i(A)),r(i(c),{label:"Log Out",icon:"pi pi-sign-out",class:"mobile-logout-button",onClick:N,severity:"danger",outlined:""})])])):p("",!0),v.value&&!d.value?(l(),b(i(h),{key:2,label:k.value,class:"mobile-avatar-button",size:"normal",onClick:D},null,8,["label"])):p("",!0)],64)):(l(),u(L,{key:2},[v.value?(l(),b(i(c),{key:0,label:"Log In",icon:"pi pi-sign-in",class:"mobile-login-button",onClick:a[7]||(a[7]=g=>i(t).push("/login")),outlined:"",size:"small"})):(l(),b(C,{key:1,to:"/login",class:"menu-item"},{default:S(()=>[...a[15]||(a[15]=[M("Log In",-1)])]),_:1}))],64))])])])}}},Ee=W(xe,[["__scopeId","data-v-f1569878"]]);export{Ee as default};
