"use strict";(self.webpackChunkepns_analytics_dashboard=self.webpackChunkepns_analytics_dashboard||[]).push([[981],{4981:function(t,e,n){n.r(e),n.d(e,{default:function(){return ce}});var r=n(4165),a=n(5861),s=n(885),i=n(2791),c=n(3967),o=n(1614),u=n(890),p=n(1889),l=n(7621),d=n(9504),h=n(3767),x=n(4554),f=n(1413),Z=n(5987),v=n(6907),m=n(3400),b=n(575),g=n(6552),y=n(184),j=["icon","sx"];var w=function(t){var e=t.icon,n=t.sx,r=(0,Z.Z)(t,j);return(0,y.jsx)(x.Z,(0,f.Z)({component:g.JO,icon:e,sx:(0,f.Z)({},n)},r))},k={displayName:"EPNS Analytics",email:"admin@epns.io",photoURL:"/static/mock-images/avatars/avatar_default.jpg"},S=n(3504);var P=function(t){var e=t.disabledLink,n=void 0!==e&&e,r=t.sx,a=t.src,s=void 0===a?"/static/epns.png":a,i=(0,y.jsx)(x.Z,{component:"img",src:s,sx:(0,f.Z)({width:40,height:40},r)});return n?(0,y.jsx)(y.Fragment,{children:i}):(0,y.jsx)(S.rU,{to:"/",children:i})},O=n(4942),C=n(6934),T=n(4395),M=n(4663),D=n(2627),_=n(9333),L=(0,C.ZP)(T.Z)((function(t){var e=t.theme;return(0,O.Z)({boxShadow:"none",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:"white"},e.breakpoints.up("lg"),{width:"calc(100% - ".concat(281,"px)")})})),E=(0,C.ZP)(M.Z)((function(t){var e=t.theme;return(0,O.Z)({minHeight:64},e.breakpoints.up("lg"),{minHeight:92,padding:e.spacing(0,5)})})),R=(0,C.ZP)("div")((function(t){var e=t.theme;return(0,O.Z)({},e.breakpoints.up("lg"),{flexShrink:0,width:280})})),U=(0,C.ZP)("div")((function(t){var e=t.theme;return{display:"flex",alignItems:"center",padding:e.spacing(2,2.5),borderRadius:1.5*Number(e.shape.borderRadius),backgroundColor:e.palette.grey[50012]}})),A=(0,C.ZP)((function(t){return(0,y.jsx)(D.Z,(0,f.Z)({disableGutters:!0},t))}))((function(t){var e=t.theme;return(0,f.Z)((0,f.Z)({},e.typography.body2),{},{height:48,position:"relative",textTransform:"capitalize",color:e.palette.text.secondary,borderRadius:e.shape.borderRadius})})),I=(0,C.ZP)(_.Z)({width:22,height:22,color:"inherit",display:"flex",alignItems:"center",justifyContent:"center"}),N=function(t){var e=t.onOpenSidebar;return(0,y.jsx)(L,{children:(0,y.jsxs)(E,{children:[(0,y.jsx)(m.Z,{onClick:e,sx:{mr:1,color:"text.primary",display:{lg:"none"}},children:(0,y.jsx)(w,{icon:"eva:menu-2-fill"})}),(0,y.jsx)(P,{src:"/static/home-logo.svg",sx:{width:140,height:120}}),(0,y.jsx)(x.Z,{sx:{flexGrow:1}}),(0,y.jsx)(m.Z,{sx:{p:0},children:(0,y.jsx)(b.Z,{src:k.photoURL,alt:"photoURL"})})]})})},W=n(6871),F=n(533),H=n(2890),G=n(5193);var q=n(2065),B=n(4358),z=(0,C.ZP)("div")((function(){return{flexGrow:1,height:"100%",overflow:"hidden"}})),$=(0,C.ZP)(B.Z)((function(t){var e=t.theme;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,q.Fq)(e.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}})),V=["children","sx"];var X=function(t){var e=t.children,n=t.sx,r=(0,Z.Z)(t,V),a="undefined"===typeof navigator?"SSR":navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)?(0,y.jsx)(x.Z,(0,f.Z)((0,f.Z)({sx:(0,f.Z)({overflowX:"auto"},n)},r),{},{children:e})):(0,y.jsx)(z,{children:(0,y.jsx)($,(0,f.Z)((0,f.Z)({timeout:500,clickOnTrack:!1,sx:n},r),{},{children:e}))})},J=n(6259),K=n(6125),Q=n(493),Y=["navConfig"];function tt(t){var e=t.item,n=t.active,r=(0,c.Z)(),a=n(e.path),o=e.title,u=e.path,p=e.icon,l=e.info,d=e.children,h=(0,i.useState)(a),Z=(0,s.Z)(h,2),v=Z[0],m=Z[1],b={color:"primary.main",fontWeight:"fontWeightMedium",bgcolor:(0,q.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},g={color:"text.primary",fontWeight:"fontWeightMedium"};return d?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(A,{onClick:function(){m((function(t){return!t}))},sx:(0,f.Z)({},a&&b),children:[(0,y.jsx)(I,{children:p&&p}),(0,y.jsx)(J.Z,{disableTypography:!0,primary:o}),l&&l,(0,y.jsx)(w,{icon:v?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill",sx:{width:16,height:16,ml:1}})]}),(0,y.jsx)(K.Z,{in:v,timeout:"auto",unmountOnExit:!0,children:(0,y.jsx)(Q.Z,{component:"div",disablePadding:!0,children:d.map((function(t){var e=t.title,r=t.path,a=n(r);return(0,y.jsxs)(A,{component:S.OL,to:r,sx:(0,f.Z)({},a&&g),children:[(0,y.jsx)(I,{children:(0,y.jsx)(x.Z,{component:"span",sx:(0,f.Z)({width:4,height:4,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",bgcolor:"text.disabled",transition:function(t){return t.transitions.create("transform")}},a&&{transform:"scale(2)",bgcolor:"primary.main"})})}),(0,y.jsx)(J.Z,{disableTypography:!0,primary:e})]},e)}))})})]}):(0,y.jsxs)(A,{component:S.OL,to:u,sx:(0,f.Z)({},a&&b),children:[(0,y.jsx)(I,{children:p&&p}),(0,y.jsx)(J.Z,{disableTypography:!0,primary:o}),l&&l]})}var et=function(t){var e=t.navConfig,n=(0,Z.Z)(t,Y),r=(0,W.TH)().pathname,a=function(t){return!!t&&!!(0,W.LX)({path:t,end:!1},r)};return(0,y.jsx)(x.Z,(0,f.Z)((0,f.Z)({},n),{},{children:(0,y.jsx)(Q.Z,{disablePadding:!0,sx:{p:1},children:e.map((function(t){return(0,y.jsx)(tt,{item:t,active:a},t.title)}))})}))};function nt(t){var e=t.isOpenSidebar,n=t.onCloseSidebar,r=(0,W.TH)().pathname,a=function(t,e,n,r){var a=(0,c.Z)(),s=(0,G.Z)(a.breakpoints.up(e)),i=(0,G.Z)(a.breakpoints.down(e)),o=(0,G.Z)(a.breakpoints.between(n,r)),u=(0,G.Z)(a.breakpoints.only(e));return"up"===t?s:"down"===t?i:"between"===t?o:"only"===t?u:null}("up","lg");(0,i.useEffect)((function(){e&&n()}),[r]);var s=(0,y.jsxs)(X,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:[(0,y.jsx)(x.Z,{sx:{px:2.5,py:3,display:"inline-flex"},children:(0,y.jsx)(P,{})}),(0,y.jsx)(x.Z,{sx:{mb:5,mx:2.5},children:(0,y.jsx)(F.Z,{underline:"none",component:S.rU,to:"#",children:(0,y.jsxs)(U,{children:[(0,y.jsx)(b.Z,{src:k.photoURL,alt:"photoURL"}),(0,y.jsxs)(x.Z,{sx:{ml:2},children:[(0,y.jsx)(u.Z,{variant:"subtitle2",sx:{color:"text.primary"},children:k.displayName}),(0,y.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:k.role})]})]})})}),(0,y.jsx)(et,{navConfig:at}),(0,y.jsx)(x.Z,{sx:{flexGrow:1}})]});return(0,y.jsxs)(R,{children:[!a&&(0,y.jsx)(H.ZP,{open:e,onClose:n,PaperProps:{sx:{width:280}},children:s}),a&&(0,y.jsx)(H.ZP,{open:!0,variant:"persistent",PaperProps:{sx:{width:280,bgcolor:"background.default",borderRightStyle:"dashed"}},children:s})]})}var rt,at=[{title:"dashboard",path:n(3585).Z.HOME,icon:(rt="eva:pie-chart-2-fill",(0,y.jsx)(w,{icon:rt,width:22,height:22}))}],st=(0,C.ZP)("div")((function(t){var e=t.theme;return(0,O.Z)({flexGrow:1,overflow:"auto",minHeight:"100%",paddingTop:88,paddingBottom:e.spacing(10)},e.breakpoints.up("lg"),{paddingTop:116,paddingLeft:e.spacing(2),paddingRight:e.spacing(2)})})),it=(0,C.ZP)("div")({display:"flex",minHeight:"100%",overflow:"hidden",background:"white"}),ct=["children","title","meta"],ot=(0,i.forwardRef)((function(t,e){var n=t.children,r=t.title,a=void 0===r?"":r,c=t.meta,o=(0,Z.Z)(t,ct),u=(0,i.useState)(!1),p=(0,s.Z)(u,2),l=p[0],d=p[1];return(0,y.jsxs)(x.Z,{children:[(0,y.jsxs)(v.ql,{children:[(0,y.jsx)("title",{children:"".concat(a," | EPNS")}),c]}),(0,y.jsxs)(it,{children:[(0,y.jsx)(N,{onOpenSidebar:function(){return d(!0)}}),(0,y.jsx)(nt,{isOpenSidebar:l,onCloseSidebar:function(){return d(!1)}}),(0,y.jsx)(st,{children:(0,y.jsx)(x.Z,(0,f.Z)((0,f.Z)({ref:e},o),{},{children:n}))})]})]})})),ut=n(4569),pt=n.n(ut),lt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/get_total_channel_count");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),dt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/get_total_subscribers_count");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),ht=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/get_total_notifications");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),xt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/get_total_subscribers_count_weekly");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),ft=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/get_push_trading_volume");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Zt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/dAppUsers");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),vt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/IOSUsers");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),mt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/androidUsers");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),bt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/browserUsers");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),gt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/channelsOnMonday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),yt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/channelsOnTuesday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),jt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/channelsOnWednesday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),wt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/channelsOnThursday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),kt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/channelsOnFriday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),St=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/channelsOnSaturday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Pt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/channelsOnSunday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Ot=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/notificationsOnMonday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Ct=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/notificationsOnTuesday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Tt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/notificationsOnWednesday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Mt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/notificationsOnThursday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Dt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/notificationsOnFriday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),_t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/notificationsOnSaturday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Lt=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt().post("https://api.analytics.epns.io/apis/analytics/notificationsOnSunday");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),Et=n(9286),Rt=n.n(Et),Ut=n(3496),At=n(9585),It=n(763),Nt=n.n(It),Wt=n(6098),Ft=n.n(Wt);function Ht(t){return(0,It.replace)(Ft()(t).format("0.00a"),".00","")}var Gt=n(8613),qt=(0,C.ZP)("div")((function(t){var e=t.theme;return{height:372,marginTop:e.spacing(5),"& .apexcharts-canvas svg":{height:372},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(e.palette.divider),top:"calc(".concat(300,"px) !important")}}})),Bt=(0,C.ZP)("div")((function(t){var e=t.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:e.spacing(8),height:e.spacing(8),justifyContent:"center",marginBottom:e.spacing(3)}})),zt=["title","subheader","chartColors","chartData"];function $t(t){var e=t.title,n=t.subheader,r=t.chartColors,a=t.chartData,s=(0,Z.Z)(t,zt),i=(0,c.Z)(),o=a.map((function(t){return t.label})),u=a.map((function(t){return t.value})),p=Rt()((0,Gt.Z)(),{colors:r,labels:o,stroke:{colors:[i.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(t){return e=t,Ft()(e).format();var e},title:{formatter:function(t){return"".concat(t)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return(0,y.jsxs)(l.Z,(0,f.Z)((0,f.Z)({},s),{},{children:[(0,y.jsx)(At.Z,{title:e,subheader:n}),(0,y.jsx)(qt,{dir:"ltr",children:(0,y.jsx)(Ut.Z,{type:"pie",series:u,options:p,height:280})})]}))}var Vt=["title","subheader","chartLabels","chartData"];function Xt(t){var e=t.title,n=t.subheader,r=t.chartLabels,a=t.chartData,s=(0,Z.Z)(t,Vt),i=Rt()((0,Gt.Z)(),{plotOptions:{bar:{columnWidth:"16%"}},fill:{type:a.map((function(t){return t.fill}))},labels:r,tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?"$".concat(t.toFixed(0)):t}}}});return(0,y.jsxs)(l.Z,(0,f.Z)((0,f.Z)({},s),{},{children:[(0,y.jsx)(At.Z,{title:e,subheader:n}),(0,y.jsx)(x.Z,{sx:{p:3,pb:1},dir:"ltr",children:(0,y.jsx)(Ut.Z,{type:"line",series:a,options:i,height:364})})]}))}var Jt=n(703),Kt=["title","subheader","list"];function Qt(t){var e=t.title,n=t.subheader,r=t.list,a=(0,Z.Z)(t,Kt);return(0,y.jsxs)(l.Z,(0,f.Z)((0,f.Z)({},a),{},{children:[(0,y.jsx)(At.Z,{title:e,subheader:n}),(0,y.jsx)(d.Z,{children:(0,y.jsx)(x.Z,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)",mt:4},children:r.map((function(t){return(0,y.jsxs)(Jt.Z,{variant:"outlined",sx:{py:3,textAlign:"center"},children:[(0,y.jsx)(x.Z,{sx:{mb:.5},children:t.icon}),(0,y.jsx)(u.Z,{variant:"h6",children:Ht(t.value)}),(0,y.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:t.name})]},t.name)}))})})]}))}var Yt=["title","total","icon","color","sx"];function te(t){var e=t.title,n=t.total,r=t.icon,a=t.color,s=void 0===a?"primary":a,i=t.sx,c=(0,Z.Z)(t,Yt);return(0,y.jsxs)(l.Z,(0,f.Z)((0,f.Z)({sx:(0,f.Z)({py:5,boxShadow:0,textAlign:"center",color:function(t){return t.palette[s].darker},bgcolor:function(t){return t.palette[s].lighter}},i)},c),{},{children:[(0,y.jsx)(Bt,{sx:{color:function(t){return t.palette[s].dark},backgroundImage:function(t){return"linear-gradient(135deg, ".concat((0,q.Fq)(t.palette[s].dark,0)," 0%, ").concat((0,q.Fq)(t.palette[s].dark,.24)," 100%)")}},children:(0,y.jsx)(w,{icon:r,width:24,height:24})}),(0,y.jsx)(u.Z,{variant:"h3",children:Ht(n)}),(0,y.jsx)(u.Z,{variant:"subtitle2",sx:{opacity:.72},children:e})]}))}var ee=n(2982),ne=n(3239),re=n(7892),ae=n.n(re),se=function(t){return Object.values(t)},ie=function(){var t=(0,i.useState)([]),e=(0,s.Z)(t,2),n=e[0],c=e[1],o=(0,i.useState)(!0),u=(0,s.Z)(o,2),d=u[0],h=u[1],f=(0,ee.Z)(Array(7)).map((function(t,e){var n=new Date;return n.setDate(n.getDate()-7*e),n.toISOString()})),Z=(0,ee.Z)(Array(7)).map((function(t,e){var n=new Date;return n.setDate(n.getDate()-7*e),ae()(n.toISOString()).format("ddd, MMMM D")}));(0,i.useEffect)((function(){(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xt();case 2:e=t.sent,c(se(e).slice(-7)),h(!1);case 5:case"end":return t.stop()}}),t)})))()}),[]);var v=[{name:"Week",type:"column",fill:"solid",data:n}],m=Rt()((0,Gt.Z)(),{plotOptions:{bar:{columnWidth:"16%"}},fill:{type:v.map((function(t){return t.fill}))},labels:Nt().reverse(Z),tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?t.toFixed(0):t}}}});return(0,y.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)(At.Z,{title:"Subscribers count:  ".concat(ae()(f[f.length-1]).format("ddd, MMMM D")," - ").concat(ae()(f[0]).format("ddd, MMMM D"))}),d?(0,y.jsx)(x.Z,{sx:{display:"flex",width:"100%",height:"400px",textAlign:"center",justifyContent:"center",alignItems:"center"},children:(0,y.jsx)(ne.Z,{size:50})}):(0,y.jsx)(x.Z,{sx:{p:3,pb:1},dir:"ltr",children:(0,y.jsx)(Ut.Z,{type:"line",series:v,options:m,height:364})})]})})},ce=function(){var t=(0,c.Z)(),e=(0,i.useState)(0),n=(0,s.Z)(e,2),f=n[0],Z=n[1],v=(0,i.useState)(0),m=(0,s.Z)(v,2),b=m[0],g=m[1],j=(0,i.useState)(0),w=(0,s.Z)(j,2),k=(w[0],w[1]),S=(0,i.useState)(0),P=(0,s.Z)(S,2),O=(P[0],P[1]),C=(0,i.useState)(0),T=(0,s.Z)(C,2),M=T[0],D=T[1],_=(0,i.useState)(0),L=(0,s.Z)(_,2),E=L[0],R=L[1],U=(0,i.useState)(0),A=(0,s.Z)(U,2),I=A[0],N=A[1],W=(0,i.useState)(0),F=(0,s.Z)(W,2),H=F[0],G=F[1],q=(0,i.useState)(0),B=(0,s.Z)(q,2),z=B[0],$=B[1],V=(0,i.useState)(0),X=(0,s.Z)(V,2),J=X[0],K=X[1],Q=(0,i.useState)(0),Y=(0,s.Z)(Q,2),tt=Y[0],et=Y[1],nt=(0,i.useState)(0),rt=(0,s.Z)(nt,2),at=rt[0],st=rt[1],it=(0,i.useState)(0),ct=(0,s.Z)(it,2),ut=ct[0],pt=ct[1],xt=(0,i.useState)(0),Et=(0,s.Z)(xt,2),Rt=Et[0],Ut=Et[1],At=(0,i.useState)(0),It=(0,s.Z)(At,2),Nt=It[0],Wt=It[1],Ft=(0,i.useState)(0),Ht=(0,s.Z)(Ft,2),Gt=Ht[0],qt=Ht[1],Bt=(0,i.useState)(0),zt=(0,s.Z)(Bt,2),Vt=zt[0],Jt=zt[1],Kt=(0,i.useState)(0),Yt=(0,s.Z)(Kt,2),ee=Yt[0],ne=Yt[1],re=(0,i.useState)(0),ae=(0,s.Z)(re,2),se=ae[0],ce=ae[1],oe=(0,i.useState)(0),ue=(0,s.Z)(oe,2),pe=ue[0],le=ue[1],de=(0,i.useState)(0),he=(0,s.Z)(de,2),xe=he[0],fe=he[1],Ze=(0,i.useState)(0),ve=(0,s.Z)(Ze,2),me=ve[0],be=ve[1];return(0,i.useEffect)((function(){(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Z,t.next=3,lt();case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=g,t.next=8,dt();case 8:return t.t3=t.sent,(0,t.t2)(t.t3),t.t4=k,t.next=13,ht();case 13:return t.t5=t.sent,(0,t.t4)(t.t5),t.t6=O,t.next=18,ft();case 18:return t.t7=t.sent,(0,t.t6)(t.t7),t.t8=D,t.next=23,Zt();case 23:return t.t9=t.sent,(0,t.t8)(t.t9),t.t10=R,t.next=28,vt();case 28:return t.t11=t.sent,(0,t.t10)(t.t11),t.t12=N,t.next=33,mt();case 33:return t.t13=t.sent,(0,t.t12)(t.t13),t.t14=G,t.next=38,bt();case 38:return t.t15=t.sent,(0,t.t14)(t.t15),t.t16=$,t.next=43,gt();case 43:return t.t17=t.sent,(0,t.t16)(t.t17),t.t18=K,t.next=48,yt();case 48:return t.t19=t.sent,(0,t.t18)(t.t19),t.t20=et,t.next=53,jt();case 53:return t.t21=t.sent,(0,t.t20)(t.t21),t.t22=st,t.next=58,wt();case 58:return t.t23=t.sent,(0,t.t22)(t.t23),t.t24=pt,t.next=63,kt();case 63:return t.t25=t.sent,(0,t.t24)(t.t25),t.t26=Ut,t.next=68,St();case 68:return t.t27=t.sent,(0,t.t26)(t.t27),t.t28=Wt,t.next=73,Pt();case 73:return t.t29=t.sent,(0,t.t28)(t.t29),t.t30=qt,t.next=78,Ot();case 78:return t.t31=t.sent,(0,t.t30)(t.t31),t.t32=Jt,t.next=83,Ct();case 83:return t.t33=t.sent,(0,t.t32)(t.t33),t.t34=ne,t.next=88,Tt();case 88:return t.t35=t.sent,(0,t.t34)(t.t35),t.t36=ce,t.next=93,Mt();case 93:return t.t37=t.sent,(0,t.t36)(t.t37),t.t38=le,t.next=98,Dt();case 98:return t.t39=t.sent,(0,t.t38)(t.t39),t.t40=fe,t.next=103,_t();case 103:return t.t41=t.sent,(0,t.t40)(t.t41),t.t42=be,t.next=108,Lt();case 108:t.t43=t.sent,(0,t.t42)(t.t43);case 110:case"end":return t.stop()}}),t)})))()}),[]),(0,y.jsx)(ot,{title:"Dashboard",children:(0,y.jsxs)(o.Z,{maxWidth:"xl",children:[(0,y.jsx)(u.Z,{variant:"h5",sx:{mb:5},children:"Ethereum Push Notification System is the biggest communication layer of web3 in the market."}),(0,y.jsxs)(p.ZP,{container:!0,spacing:3,children:[(0,y.jsx)(p.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,y.jsx)(te,{title:"Total Notifications",total:0,icon:"ant-design:user-outlined"})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,y.jsx)(te,{title:"Number of Subscriptions",total:b,color:"info",icon:"ant-design:wechat-outlined"})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,y.jsx)(te,{title:"Number of Channels",total:f,color:"warning",icon:"ant-design:bell-filled"})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,y.jsx)(te,{title:"$PUSH Trading Volume",total:0,color:"error",icon:"ant-design:bug-filled"})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:12,children:(0,y.jsx)(l.Z,{children:(0,y.jsx)(d.Z,{children:(0,y.jsxs)(h.Z,{direction:"row",spacing:7,children:[(0,y.jsx)(u.Z,{variant:"h5",sx:{mt:4,mr:4},children:"Top Channels on EPNS"}),(0,y.jsx)(x.Z,{component:"img",src:"/static/aave-logo.svg",sx:{width:150,height:100}}),(0,y.jsx)(x.Z,{component:"img",src:"/static/maker-logo.svg",sx:{width:150,height:100}}),(0,y.jsx)(x.Z,{component:"img",src:"/static/ens-logo.svg",sx:{width:150,height:100}})]})})})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,y.jsx)(Xt,{title:"$PUSH compared to ETH and Matic",subheader:"(+43%) than last year",chartLabels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],chartData:[{name:"PUSH",type:"line",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"ETH",type:"line",fill:"solid",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Matic",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,y.jsx)($t,{title:"Total Users by Platform",chartData:[{label:"dApp",value:{dAppCount:M}},{label:"IOS",value:{IOSCount:E}},{label:"Android",value:{androidCount:I}},{label:"Browser Extension",value:{browserCount:H}}],chartColors:[t.palette.chart.violet[0],t.palette.chart.blue[0],t.palette.primary.main,t.palette.chart.violet[1]]})})]}),(0,y.jsx)(u.Z,{variant:"h5",sx:{my:5},children:"Growing at 10x rate"}),(0,y.jsxs)(p.ZP,{container:!0,spacing:3,children:[(0,y.jsx)(ie,{}),(0,y.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,y.jsx)(Xt,{title:"New Channels per day",chartLabels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],chartData:[{name:"Week",type:"column",fill:"solid",data:[Nt,z,J,tt,at,ut,Rt]}]})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,y.jsx)(Xt,{title:"Total Notifications per day",chartLabels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003"],chartData:[{name:"Week",type:"column",fill:"solid",data:[me,Gt,Vt,ee,se,pe,xe]}]})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,y.jsx)(Qt,{title:"Governance",list:[{name:"Grants Given",value:6},{name:"Integrations",value:11},{name:"Delegates",value:17},{name:"Votes",value:54}]})})]}),(0,y.jsx)(u.Z,{variant:"h5",sx:{my:5},children:"Generating value for dApps, developers and users"}),(0,y.jsxs)(p.ZP,{container:!0,spacing:3,children:[(0,y.jsx)(p.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,y.jsx)(l.Z,{sx:{px:1},children:(0,y.jsx)(d.Z,{children:(0,y.jsxs)(h.Z,{direction:"row",spacing:7,children:[(0,y.jsx)(x.Z,{component:"img",src:"/static/ens-logo.svg",sx:{width:120,height:50}}),(0,y.jsx)(u.Z,{variant:"h5",sx:{mt:10},children:"500 domain names saved from expiring EPNS"})]})})})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,y.jsx)(l.Z,{sx:{px:1},children:(0,y.jsx)(d.Z,{children:(0,y.jsxs)(h.Z,{direction:"row",spacing:7,children:[(0,y.jsx)(x.Z,{component:"img",src:"/static/aave-logo.svg",sx:{width:120,height:50}}),(0,y.jsx)(u.Z,{variant:"h5",sx:{mt:10},children:"$10M saved from liquidation using EPNS"})]})})})})]})]})})}}}]);
//# sourceMappingURL=981.c48663c6.chunk.js.map