(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[115],{15244:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dsfr",function(){return r(82663)}])},73928:function(e,t,r){"use strict";r.d(t,{U:function(){return f}});var a=r(67294),l=r(62613),n=r(77458),c=r(60129),s=r(80405),o=r(26463),i=r(59272),d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};let f=(0,a.memo)((0,a.forwardRef)((e,t)=>{let{className:r,id:s,titleAs:f="h3",label:u,classes:m={},style:b,children:p,expanded:x,defaultExpanded:g=!1,onExpandedChange:y}=e,v=d(e,["className","id","titleAs","label","classes","style","children","expanded","defaultExpanded","onExpandedChange"]);(0,l.assert)();let h=(0,i.t)({defaultIdPrefix:"fr-accordion",explicitlyProvidedId:s}),_="".concat(h,"-collapse"),[E,N]=(0,a.useState)(g),O=x||E,j=(0,o.O)(e=>{N(!O),null==y||y(!O,e)});return a.createElement("section",Object.assign({className:(0,c.cx)(n.fr.cx("fr-accordion"),r),style:b,ref:t},v),a.createElement(f,{className:(0,c.cx)(n.fr.cx("fr-accordion__title"),m.title)},a.createElement("button",{className:n.fr.cx("fr-accordion__btn"),"aria-expanded":O,"aria-controls":_,onClick:j,type:"button"},u)),a.createElement("div",{className:(0,c.cx)(n.fr.cx("fr-collapse"),m.collapse),id:_},p))}));f.displayName=(0,s.r)({Accordion:f})},50242:function(e,t,r){"use strict";r.d(t,{bZ:function(){return u}});var a=r(67294),l=r(80405),n=r(77458),c=r(60129),s=r(62613),o=r(26463),i=r(16094),d=r(59272),f=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};let u=(0,a.memo)((0,a.forwardRef)((e,t)=>{let{className:r,id:l,severity:i,as:u="h3",classes:b={},style:p,small:x,title:g,description:y,closable:v=!1,isClosed:h,onClose:_}=e,E=f(e,["className","id","severity","as","classes","style","small","title","description","closable","isClosed","onClose"]);(0,s.assert)();let N=(0,d.t)({explicitlyProvidedId:l,defaultIdPrefix:"fr-alert"}),[O,j]=(0,a.useState)(null!=h&&h),[w,k]=(0,a.useState)(null),I=(0,a.useRef)(!1),P=(0,a.useRef)(!1);(0,a.useEffect)(()=>{void 0!==h&&j(e=>(e&&!h&&(I.current=!0,P.current=!0),h))},[h]),(0,a.useEffect)(()=>{I.current&&null!==w&&(I.current=!1,w.focus())},[w]);let C=(0,o.O)(()=>{void 0===h?(j(!0),null==_||_()):_()}),{t:A}=m();return O?null:a.createElement("div",Object.assign({id:N,className:(0,c.cx)(n.fr.cx("fr-alert","fr-alert--".concat(i),{"fr-alert--sm":x}),b.root,r),style:p},P.current&&{role:"alert"},{ref:t},E),void 0!==g&&a.createElement(u,{className:(0,c.cx)(n.fr.cx("fr-alert__title"),b.title)},g),a.createElement("string"==typeof y?"p":"div",{className:b.description},y),v&&a.createElement("button",{ref:k,className:(0,c.cx)(n.fr.cx("fr-link--close","fr-link"),b.close),onClick:C},A("hide message")))}));u.displayName=(0,l.r)({Alert:u}),t.ZP=u;let{useTranslation:m,addAlertTranslations:b}=(0,i.Lf)({componentName:(0,l.r)({Alert:u}),frMessages:{"hide message":"Masquer le message"}});b({lang:"en",messages:{"hide message":"Hide the message"}}),b({lang:"es",messages:{"hide message":"Occultar el mesage"}})},82663:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var a=r(85893),l=r(67294),n=r(77458),c=r(9008),s=r.n(c),o=r(50242),i=r(78570),d=r(80405),f=r(60129),u=r(62613),m=r(15198),b=r(59272),p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};let x=(0,l.memo)((0,l.forwardRef)((e,t)=>{let{id:r,className:a,label:c,classes:s={},tabs:o,selectedTabId:i,onTabChange:d,children:x,style:g}=e,y=p(e,["id","className","label","classes","tabs","selectedTabId","onTabChange","children","style"]);(0,u.assert)();let v=(0,b.t)({defaultIdPrefix:"fr-tabs",explicitlyProvidedId:r}),h=()=>{let e=o.findIndex(e=>{var t;return"content"in e?null!==(t=e.isDefault)&&void 0!==t&&t:e.tabId===i});return -1===e?0:e},_=l.useRef([]),[E,N]=(0,l.useState)(h);(0,l.useEffect)(()=>{void 0!==i&&N(h())},[i]);let O=function(e){let t=(0,l.useRef)(e);t.current=e;let r=(0,l.useRef)(void 0);return(0,l.useState)(()=>(0,m.id)(function(){for(var e=arguments.length,a=Array(e),l=0;l<e;l++)a[l]=arguments[l];return void 0===r.current&&(r.current=function(e,t){let r=new Map,{argsLength:a=e.length,max:l=1/0}=null!=t?t:{};return function(){for(var t=arguments.length,n=Array(t),c=0;c<t;c++)n[c]=arguments[c];let s=JSON.stringify(n.slice(0,a).map(e=>{if(null===e)return"null";if(void 0===e)return"undefined";switch(typeof e){case"number":return"number-".concat(e);case"string":return"string-".concat(e);case"boolean":return"boolean-".concat(e?"true":"false")}}).join("-sIs9sAslOdeWlEdIos3-"));if(r.has(s))return r.get(s);if(l===r.size)for(let e of r.keys()){r.delete(e);break}let o=e(...n);return r.set(s,o),o}}(function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(){for(var e=arguments.length,a=Array(e),l=0;l<e;l++)a[l]=arguments[l];return t.current(r,a)}},{argsLength:a.length})),r.current(...a)}))[0]}(e=>{let[t]=e;void 0===i?null==d||d({tabIndex:t,tab:o[t]}):d(o[t].tabId)}),j=e=>{var t,r;if(void 0!==i){let a=E;switch(e.key){case"ArrowRight":a=E<o.length-1?E+1:0;break;case"ArrowLeft":a=0===E?o.length-1:E-1;break;case"Home":a=0;break;case"End":a=o.length-1}null===(t=_.current[a])||void 0===t||t.click(),null===(r=_.current[a])||void 0===r||r.focus()}},{getPanelId:w,getTabId:k}=function(){let e=(0,l.useId)();return{getPanelId:t=>"tabpanel-".concat(e,"-").concat(t,"-panel"),getTabId:t=>"tabpanel-".concat(e,"-").concat(t)}}();return l.createElement("div",Object.assign({id:v,className:(0,f.cx)(n.fr.cx("fr-tabs"),a),ref:t,style:g},y),l.createElement("ul",{className:n.fr.cx("fr-tabs__list"),role:"tablist","aria-label":c,onKeyDownCapture:e=>j(e)},o.map((e,t)=>{let{label:r,iconId:a}=e;return l.createElement("li",{key:t,role:"presentation"},l.createElement("button",{ref:e=>_.current[t]=e,id:k(t),className:(0,f.cx)(n.fr.cx("fr-tabs__tab",a,"fr-tabs__tab--icon-left"),s.tab),tabIndex:t===E?0:-1,role:"tab","aria-selected":t===E,"aria-controls":w(t),onClick:O(t)},r))})),void 0===i?o.map((e,t)=>{let{content:r}=e;return l.createElement("div",{key:t,id:w(t),className:(0,f.cx)(n.fr.cx("fr-tabs__panel","fr-tabs__panel".concat(t===E?"--selected":"")),s.panel),role:"tabpanel","aria-labelledby":k(t),tabIndex:0},r)}):l.createElement("div",{id:w(E),className:(0,f.cx)(n.fr.cx("fr-tabs__panel","fr-tabs__panel--selected"),s.panel),role:"tabpanel","aria-labelledby":k(E),tabIndex:0},x))}));x.displayName=(0,d.r)({Tabs:x});var g=r(63434),y=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};let v=(0,l.memo)((0,l.forwardRef)((e,t)=>{let{id:r,className:a,title:c,titleAs:s="h3",linkProps:o,desc:i,imageUrl:d,imageAlt:m,imageComponent:p,start:x,detail:v,end:h,endDetail:_,badge:E,footer:N,horizontal:O=!1,ratio:j,size:w="medium",classes:k={},enlargeLink:I=!1,background:P=!0,border:C=!0,shadow:A=!1,grey:S=!1,iconId:T,style:R}=e,z=y(e,["id","className","title","titleAs","linkProps","desc","imageUrl","imageAlt","imageComponent","start","detail","end","endDetail","badge","footer","horizontal","ratio","size","classes","enlargeLink","background","border","shadow","grey","iconId","style"]);(0,u.assert)();let M=(0,b.t)({defaultIdPrefix:"fr-card",explicitlyProvidedId:r}),{Link:Z}=(0,g.R)();return l.createElement("div",Object.assign({id:M,className:(0,f.cx)(n.fr.cx("fr-card",I&&"fr-enlarge-link",O&&"fr-card--horizontal",O&&void 0!==j&&"fr-card--horizontal-".concat("33/66"===j?"tier":"half"),(()=>{switch(w){case"large":return"fr-card--lg";case"small":return"fr-card--sm";case"medium":return}})(),!P&&"fr-card--no-background",!C&&"fr-card--no-border",A&&"fr-card--shadow",S&&"fr-card--grey",void 0!==T&&T),k.root,a),style:R,ref:t},z),l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__body"),k.body)},l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__content"),k.content)},l.createElement(s,{className:(0,f.cx)(n.fr.cx("fr-card__title"),k.title)},void 0!==o?l.createElement(Z,Object.assign({},o,{className:(0,f.cx)(o.className,k.link)}),c):c),void 0!==i&&l.createElement("p",{className:(0,f.cx)(n.fr.cx("fr-card__desc"),k.desc)},i),l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__start"),k.start)},x,void 0!==v&&l.createElement("p",{className:(0,f.cx)(n.fr.cx("fr-card__detail"),k.detail)},v)),l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__end"),k.end)},h,void 0!==_&&l.createElement("p",{className:(0,f.cx)(n.fr.cx("fr-card__detail"),k.endDetail)},_))),void 0!==N&&l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__footer"),k.footer)},N)),void 0!==d&&d.length&&l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__header"),k.header)},l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__img"),k.img)},l.createElement("img",{className:(0,f.cx)(n.fr.cx("fr-responsive-img"),k.imgTag),src:d,alt:m})),void 0!==E&&l.createElement("ul",{className:(0,f.cx)(n.fr.cx("fr-badges-group"),k.badge)},l.createElement("li",null,E))),void 0!==p&&l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__header"),k.header)},l.createElement("div",{className:(0,f.cx)(n.fr.cx("fr-card__img"),k.img)},p),void 0!==E&&l.createElement("ul",{className:(0,f.cx)(n.fr.cx("fr-badges-group"),k.badge)},l.createElement("li",null,E))))}));v.displayName=(0,d.r)({Card:v});var h=r(73928),_=r(68269),E=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{children:(0,a.jsx)("title",{children:"Template | Fabrique num\xe9rique des minist\xe8res sociaux"})}),(0,a.jsx)(o.bZ,{closable:!0,description:"Everything went well",severity:"success",title:"Message successfully sent"}),(0,a.jsx)("br",{}),(0,a.jsx)(o.bZ,{closable:!0,description:"Everything went bad",severity:"error",title:"Message NOT successfully sent"}),(0,a.jsx)("br",{}),(0,a.jsx)(x,{tabs:[{label:"Tab 1",iconId:"fr-icon-add-line",content:(0,a.jsx)("p",{children:"Content of tab1"})},{label:"Tab 2",iconId:"fr-icon-ball-pen-fill",content:(0,a.jsx)("p",{children:"Content of tab2"})},{label:"Tab 3",content:(0,a.jsx)("p",{children:"Content of tab3"})}]}),(0,a.jsx)("br",{}),(0,a.jsx)(v,{title:"Titre de la carte",linkProps:{href:"#"},desc:"Cette carte permet d'indiquer au lecteur des informations sur le lien \xe0 pr\xe9senetr"}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:n.fr.cx("fr-accordions-group"),children:[(0,a.jsx)(h.U,{label:"Name of the Accordion 1",children:"Content of the Accordion 1"}),(0,a.jsx)(h.U,{label:"Name of the Accordion 2",children:"Content of the Accordion 2"})]}),(0,a.jsx)("br",{}),(0,a.jsx)(_.Z,{spacing:2,sx:{mt:5},direction:"row",children:(0,a.jsx)(i.z,{title:"@codegouv/react-dsfr storybook",linkProps:{target:"_blank",href:"https://react-dsfr-components.etalab.studio/"},children:"See more components at @codegouv/react-dsfr storybook"})})]})}},function(e){e.O(0,[269,888,774,179],function(){return e(e.s=15244)}),_N_E=e.O()}]);