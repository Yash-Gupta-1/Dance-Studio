(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9143],{7942:function(e,s,a){"use strict";var r=a(63038);s.default=void 0;var l,i=(l=a(67294))&&l.__esModule?l:{default:l},c=a(64957),t=a(69898),n=a(90639);var o={};function d(e,s,a,r){if(e&&c.isLocalURL(s)){e.prefetch(s,a,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[s+"%"+a+(l?"%"+l:"")]=!0}}var f=function(e){var s,a=!1!==e.prefetch,l=t.useRouter(),f=i.default.useMemo((function(){var s=c.resolveHref(l,e.href,!0),a=r(s,2),i=a[0],t=a[1];return{href:i,as:e.as?c.resolveHref(l,e.as):t||i}}),[l,e.href,e.as]),h=f.href,m=f.as,u=e.children,j=e.replace,x=e.shallow,v=e.scroll,p=e.locale;"string"===typeof u&&(u=i.default.createElement("a",null,u));var g=(s=i.default.Children.only(u))&&"object"===typeof s&&s.ref,w=n.useIntersection({rootMargin:"200px"}),N=r(w,2),k=N[0],y=N[1],b=i.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);i.default.useEffect((function(){var e=y&&a&&c.isLocalURL(h),s="undefined"!==typeof p?p:l&&l.locale,r=o[h+"%"+m+(s?"%"+s:"")];e&&!r&&d(l,h,m,{locale:s})}),[m,h,y,p,a,l]);var E={ref:b,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,a,r,l,i,t,n){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(a))&&(e.preventDefault(),null==t&&r.indexOf("#")>=0&&(t=!1),s[l?"replace":"push"](a,r,{shallow:i,locale:n,scroll:t}))}(e,l,h,m,j,x,v,p)},onMouseEnter:function(e){c.isLocalURL(h)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),d(l,h,m,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var L="undefined"!==typeof p?p:l&&l.locale,C=l&&l.isLocaleDomain&&c.getDomainLocale(m,L,l&&l.locales,l&&l.domainLocales);E.href=C||c.addBasePath(c.addLocale(m,L,l&&l.defaultLocale))}return i.default.cloneElement(s,E)};s.default=f},90639:function(e,s,a){"use strict";var r=a(63038);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,a=e.disabled||!c,n=l.useRef(),o=l.useState(!1),d=r(o,2),f=d[0],h=d[1],m=l.useCallback((function(e){n.current&&(n.current(),n.current=void 0),a||f||e&&e.tagName&&(n.current=function(e,s,a){var r=function(e){var s=e.rootMargin||"",a=t.get(s);if(a)return a;var r=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var s=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;s&&a&&s(a)}))}),e);return t.set(s,a={id:s,observer:l,elements:r}),a}(a),l=r.id,i=r.observer,c=r.elements;return c.set(e,s),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),t.delete(l))}}(e,(function(e){return e&&h(e)}),{rootMargin:s}))}),[a,s,f]);return l.useEffect((function(){if(!c&&!f){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[m,f]};var l=a(67294),i=a(26286),c="undefined"!==typeof IntersectionObserver;var t=new Map},32979:function(e,s){"use strict";s.Z=function(e){window.addEventListener("scroll",(function(){var s=window.pageYOffset;e&&e.forEach((function(e){e.style.transform="translate3d(0, "+-.2*s+"px, 0)",e.style.opacity=1-s/600}))}))}},5032:function(e,s){"use strict";s.Z=function(){var e,s=document.querySelectorAll(".gallery");s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})}));var a=document.querySelectorAll(".gallery-mons");a.length>=1&&a.forEach((function(s){e=new Isotope(s,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var r=document.querySelector(".filtering");if(r){var l=function(e){e.addEventListener("click",(function(s){matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))}))};r.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var a=s.target.getAttribute("data-filter");a=a,e.arrange({filter:a})}}));for(var i=document.querySelectorAll(".filtering"),c=0,t=i.length;c<t;c++){l(i[c])}}}},25914:function(e,s,a){"use strict";a(67294),a(41664);var r=a(82806),l=a(85893);s.Z=function(e){var s=e.hideBGCOLOR;return(0,l.jsx)("footer",{className:"".concat(s?"":"sub-bg"),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"Contact Us"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Official Address"}),(0,l.jsx)("p",{children:"F-195-b, Mangal Bajar Road New Amar Jeevan Public School, Delhi - 92"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-mail"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Email Us"}),(0,l.jsx)("p",{children:"support@gmail.com"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-call"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Call Us"}),(0,l.jsx)("p",{children:"+91 8384810255"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-lg-4"}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("img",{src:r.E8,alt:""})}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-youtube"})})]})]})})]})})})}},30015:function(e,s,a){"use strict";a(67294);var r=a(41664),l=(a(82806),a(85893));s.Z=function(e){var s=e.lr,a=e.nr,i=e.theme;return(0,l.jsx)("nav",{ref:a,className:"navbar navbar-expand-lg change ".concat("themeL"===i?"light":""),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(r.default,{href:"/",children:(0,l.jsx)("a",{className:"logo",children:i?(0,l.jsx)("img",{ref:s,src:"https://webstockreview.net/images/clipart-map-location-sign-12.png",alt:"logo"}):(0,l.jsx)("img",{style:{filter:"invert(1)"},ref:s,src:"https://pluspng.com/img-png/png-location--872.png",alt:"logo"})})})})})}},27196:function(e,s,a){"use strict";var r=a(67294),l=a(32979),i=a(85893);s.Z=function(e){var s=e.sliderRef;return r.useEffect((function(){(0,l.Z)(document.querySelectorAll(".fixed-slider .capt .parlx"))}),[]),(0,i.jsx)("header",{ref:s,className:"works-header fixed-slider hfixd valign sub-bg",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-7 col-md-9 static",children:(0,i.jsxs)("div",{className:"capt mt-50",children:[(0,i.jsxs)("div",{className:"parlx text-center",children:[(0,i.jsx)("h1",{className:"color-font",children:"amazing works"}),(0,i.jsx)("p",{children:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."})]}),(0,i.jsx)("div",{className:"bactxt custom-font valign",children:(0,i.jsx)("span",{className:"full-width",children:"Works"})})]})})})})})}},71698:function(e,s,a){"use strict";var r=a(67294),l=a(41664),i=a(5032),c=a(85893);s.Z=function(e){var s=e.grid,a=e.hideFilter,t=e.filterPosition;return r.useEffect((function(){setTimeout((function(){(0,i.Z)()}),1e3)}),[]),(0,c.jsxs)("section",{className:"".concat(s&&3===s?"three-column":null," portfolio section-padding pb-70"),children:[!a&&(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row justify-content-center",children:(0,c.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,c.jsxs)("div",{className:"sec-head text-center",children:[(0,c.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Portfolio"}),(0,c.jsxs)("h3",{className:"wow color-font",children:["Our Recent Web Design & ",(0,c.jsx)("br",{})," Some Past Projects."]})]})})})}),(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row",children:[!a&&(0,c.jsx)("div",{className:"filtering ".concat("center"===t?"text-center":"left"===t?"text-left":"text-right"," col-12"),children:(0,c.jsxs)("div",{className:"filter",children:[(0,c.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,c.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,c.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,c.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,c.jsxs)("div",{className:"gallery full-width",children:[(0,c.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items graphic wow fadeInUp"),"data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{children:"Creativity Demand"}),(0,c.jsxs)("span",{children:[(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"Design"}),",",(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"WordPress"})]})]})]}),(0,c.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items web wow fadeInUp"),"data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{children:"Through The Breaking"}),(0,c.jsxs)("span",{children:[(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"Design"}),",",(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"WordPress"})]})]})]}),(0,c.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items brand wow fadeInUp"),"data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{children:"Create With Creatives"}),(0,c.jsxs)("span",{children:[(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"Design"}),",",(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"WordPress"})]})]})]}),(0,c.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items graphic wow fadeInUp"),"data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{children:"Energies of Love"}),(0,c.jsxs)("span",{children:[(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"Design"}),",",(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"WordPress"})]})]})]}),(0,c.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items web wow fadeInUp"),"data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{children:"See It Yourself"}),(0,c.jsxs)("span",{children:[(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"Design"}),",",(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"WordPress"})]})]})]}),(0,c.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items brand wow fadeInUp"),"data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{children:"Blast From The Past"}),(0,c.jsxs)("span",{children:[(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"Design"}),",",(0,c.jsx)(l.default,{href:"/works3/works3-dark",children:"WordPress"})]})]})]})]})]})})]})}},41664:function(e,s,a){e.exports=a(7942)}}]);