(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{33397:function(s,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){return t(16696)}])},16696:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var r=t(85893),i=t(67294),n=t(9008),a=t.n(n),c=t(4298),l=t.n(c),d=t(77458);let o=s=>(0,r.jsx)("div",{className:d.fr.cx("fr-col-12","fr-col-md-4"),children:(0,r.jsx)("div",{className:d.fr.cx("fr-card","fr-card--no-arrow"),children:(0,r.jsxs)("div",{className:d.fr.cx("fr-card__body"),children:[(0,r.jsx)("strong",{className:d.fr.cx("fr-display--md","fr-mt-5w"),style:{textAlign:"center"},children:s.stats}),(0,r.jsx)("h2",{className:d.fr.cx("fr-card__title","fr-mb-4w"),children:s.title}),s.description&&(0,r.jsx)("div",{className:d.fr.cx("fr-card__desc"),children:(0,r.jsx)("p",{children:s.description})})]})})}),u=async()=>{var s,e,t;let r=["".concat("https:/stats.beta.gouv.fr","/?module=API&method=VisitsSummary.getVisits&idSite=").concat("63","&format=JSON&period=year&date=today"),"".concat("https:/stats.beta.gouv.fr","/?module=API&method=Actions.get&idSite=").concat("63","&format=JSON&period=year&date=today")].map(s=>fetch(s).then(s=>s.json()).catch(()=>null)),[i,n]=await Promise.all(r);return{nbPageViews:null!==(s=null==n?void 0:n.nb_pageviews)&&void 0!==s?s:0,nbUniqPageViews:null!==(e=null==n?void 0:n.nb_uniq_pageviews)&&void 0!==e?e:0,nbVisits:null!==(t=null==i?void 0:i.value)&&void 0!==t?t:0}},f=s=>{let[e,t]=(0,i.useState)(!1),r=()=>{"dsfr"in window&&window.dsfr.colors?t(!0):setTimeout(r,50)};return((0,i.useEffect)(()=>{e||r()}),e)?s.children:null},x=s=>(0,r.jsx)(f,{children:(0,r.jsx)("scatter-chart",{...s})}),h=s=>(0,r.jsx)(f,{children:(0,r.jsx)("pie-chart",{...s})});var m=()=>{let[s,e]=i.useState({nbPageViews:0,nbVisits:0,nbUniqPageViews:0});(0,i.useEffect)(()=>{(async()=>{e(await u())})()},[]);let t="/template";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{src:"".concat(t,"/Charts/dsfr-chart.umd.js")}),(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Template | Statistiques d'utilisation"}),(0,r.jsx)("link",{rel:"stylesheet",href:"".concat(t,"/Charts/dsfr-chart.css")})]}),(0,r.jsxs)("div",{className:"fr-container fr-my-10w",children:[(0,r.jsx)("h1",{children:"Usage web"}),(0,r.jsxs)("div",{className:"fr-grid-row fr-grid-row--gutters fr-grid-row--center",children:[(0,r.jsx)(o,{title:"Nombre de visites",stats:s.nbVisits,description:"C'est le nombre de visites total du site sur les 12 derniers mois"}),(0,r.jsx)(o,{title:"Nombre de pages vues (total)",stats:s.nbPageViews,description:"C'est le nombre de pages vues au total sur le site sur les 12 derniers mois"}),(0,r.jsx)(o,{title:"Nombre de pages vues (uniques)",stats:s.nbUniqPageViews,description:"C'est le nombre de pages vues uniques sur le site sur les 12 derniers mois"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{children:"Statistiques d'impact"}),(0,r.jsx)(x,{x:JSON.stringify([[1,5,8],[1,2,15]]),y:JSON.stringify([[30,10,20],[10,20,30]])}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(h,{x:JSON.stringify([1,2,3]),y:JSON.stringify([10,20,30])}),";",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})]})}},4298:function(s,e,t){s.exports=t(45874)}},function(s){s.O(0,[888,774,179],function(){return s(s.s=33397)}),_N_E=s.O()}]);