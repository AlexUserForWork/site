(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],v=0,d=[];v<o.length;v++)r=o[v],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);_&&_(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var _=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0898":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e),s.d(e,"bus",(function(){return V}));var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},n=[],r={name:"app"},o=r,c=(s("92b3"),s("0c7c")),l=Object(c["a"])(o,i,n,!1,null,null,null),_=l.exports,v=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{attrs:{id:"app"}},[s("div",{staticClass:"preview"},[s("div",{staticClass:"preview__wrap"},[s("div",{staticClass:"preview__top"},[s("div",{staticClass:"preview__logo"},[s("img",{attrs:{src:"img/logo.png"}})]),t._v(" "),s("div",{staticClass:"preview__contact"},[s("a",{staticClass:"app-button",attrs:{href:t.contactURL,target:"_blank"}},[t._v("Contact me")])])]),t._v(" "),s("div",{staticClass:"preview__text"},[s("h1",{staticClass:"preview__text-heading"},[s("span",[t._v(" Allow to protect ")]),t._v(" "),s("br"),t._v("\n            your transactions!\n          ")]),t._v(" "),s("p",{staticClass:"preview__text-info"},[t._v("\n            Escrow protect both the buyer "),s("br"),t._v("\n            and the seller in a transaction\n          ")])]),t._v(" "),s("div",{staticClass:"preview__bottom"},[s("div",{staticClass:"preview__social"},t._l(t.socialLinks,(function(t){return s("a",{key:t.id,staticClass:"preview__social-link",attrs:{href:t.link,target:"_blank"}},[s("img",{style:{width:(t.width?t.width:100)+"%"},attrs:{src:"img/social/"+t.id+".svg"}})])}))),t._v(" "),s("div",{staticClass:"preview__navigate",on:{click:function(e){t.nextLink("about")}}},[s("img",{attrs:{src:"img/arrow-down.svg"}})])])]),t._v(" "),s("div",{staticClass:"preview__gradient"})]),t._v(" "),s("div",{staticClass:"about section"},[s("div",{staticClass:"app-wrap"},[s("h2",{staticClass:"app-heading"},[t._v("WHAT I DO")]),t._v(" "),s("div",{staticClass:"about__container"},t._l(t.aboutInfo,(function(e,a){return s("div",{key:a,staticClass:"about__item"},[s("div",{staticClass:"about__item-icon"},[s("img",{attrs:{src:"img/about-"+(a+1)+".gif"}})]),t._v(" "),s("p",{staticClass:"about__item-info",domProps:{innerHTML:t._s(e)}}),t._v(" "),s("a",{staticClass:"about__item-link",attrs:{href:t.contactURL,target:"_blank"}},[t._v("\n              Contact me\n              "),s("Arrow-Right")],1)])})))])]),t._v(" "),s("div",{staticClass:"risk section"},[s("div",{staticClass:"app-wrap"},[s("div",{staticClass:"risk__heading"},[s("h2",{staticClass:"app-heading"},[t._v("\n            It’s a "),s("span",{staticClass:"orange"},[t._v(' "WIN-WIN".')])]),t._v(" "),s("h2",{staticClass:"app-heading"},[t._v("I eliminate risk equally")]),t._v(" "),s("h2",{staticClass:"app-heading"},[t._v("for buyers and sellers")])]),t._v(" "),t._l(t.riskInfo,(function(e,a){return s("div",{key:a,staticClass:"risk__container"},[s("h3",{staticClass:"risk__container-name"},[t._v(t._s(a))]),t._v(" "),s("div",{staticClass:"risk__container-info"},t._l(e,(function(e,a){return s("div",{key:a,staticClass:"risk__item"},[s("h3",{staticClass:"risk__container-name risk__item-number"},[t._v("\n                0"+t._s(a+1)+"\n              ")]),t._v(" "),s("div",{staticClass:"risk__item-line"}),t._v(" "),s("p",[t._v("\n                "+t._s(e)+"\n              ")])])})))])}))],2),t._v(" "),s("div",{staticClass:"risk__gradient-top-left"}),t._v(" "),s("div",{staticClass:"risk__gradient-top-right"}),t._v(" "),s("div",{staticClass:"risk__gradient-bottom"})]),t._v(" "),s("div",{staticClass:"work section"},[s("div",{staticClass:"app-wrap"},[s("h2",{staticClass:"app-heading"},[t._v("How it works")]),t._v(" "),s("p",{staticClass:"work__info app-info"},[t._v("\n          Escrow holds content and payment, and delivers them to the parties\n          involved when the agreement is fulfilled\n        ")]),t._v(" "),s("div",{staticClass:"work__container"},t._l(t.workProcess,(function(e,a,i){return s("div",{key:a,staticClass:"work__item"},[s("p",{staticClass:"work__item-number"},[t._v("\n              "+t._s(i+1)+"\n            ")]),t._v(" "),s("div",{staticClass:"work__item-text"},[s("h3",{staticClass:"work__item-name"},[t._v("\n                "+t._s(a)+"\n              ")]),t._v(" "),s("p",{staticClass:"app-info"},[t._v("\n                "+t._s(e)+"\n              ")])])])})))])]),t._v(" "),s("div",{staticClass:"fee section"},[s("div",{staticClass:"app-wrap"},[s("h3",{staticClass:"fee__heading"},[t._v("\n          MY FEE IS "),s("span",[t._v("2%")]),t._v(" PER DEAL. "),s("br"),t._v("\n          IT’S A VALUE FOR YOUR CALMNESS.\n        ")]),t._v(" "),s("a",{staticClass:"about__item-link fee__link",attrs:{href:t.contactURL,target:"_blank"}},[t._v("\n          Contact me\n          "),s("div",{staticClass:"fee__link-icon"},[s("img",{attrs:{src:"img/fee-link.svg"}})])])])]),t._v(" "),s("div",{staticClass:"who section"},[s("div",{staticClass:"app-wrap"},[s("div",{staticClass:"who__left"},[s("h2",{staticClass:"app-heading who__left-heading"},[t._v("Who I am")]),t._v(" "),s("div",{staticClass:"who__left-photo"},[s("img",{attrs:{src:"img/who.png"}})])]),t._v(" "),s("div",{staticClass:"who__right"},[s("h3",{staticClass:"who__right-heading"},[t._v("\n            Hi there! "),s("br"),t._v("\n            I’m "),s("span",[t._v("Marx")]),t._v("\n            and I’m your personal Escrow!\n          ")]),t._v(" "),s("p",{staticClass:"who__right-info"},[t._v("\n            With more than 4 years of experience working with different types\n            of services in the bank accounts community, I can guarantee a\n            fast, high-quality and effortless transaction.\n          ")])])]),t._v(" "),s("div",{staticClass:"who__gradient"},[s("div",{staticClass:"who__gradient-top"}),t._v(" "),s("div",{staticClass:"who__gradient-bottom"})])]),t._v(" "),s("div",{staticClass:"why section"},[s("div",{staticClass:"app-wrap"},[s("div",{staticClass:"why__left"},[s("h2",{staticClass:"app-heading"},[t._v("\n            Why should you "),s("br"),t._v(" "),s("span",{staticClass:"orange"},[t._v(" contact me? ")])]),t._v(" "),s("div",{staticClass:"why__left-social"},t._l(t.socialLinks,(function(e){return s("a",{key:e.id,class:"why__left-social-link why__left-social--"+e.id,attrs:{href:e.link,target:"_blank"}},[s("img",{style:{width:e.width+"%"},attrs:{src:"img/social/"+e.id+".svg"}}),t._v(" "),s("p",{staticClass:"why__left-social-text app-info"},[t._v("\n                "+t._s(t.setShortLink(e.link))+"\n              ")])])})))]),t._v(" "),s("div",{staticClass:"why__right"},[s("div",{staticClass:"why__right-items"},t._l(t.whyReasons,(function(e,a){return s("div",{key:a,staticClass:"why__right-item"},[s("div",[s("span",{staticClass:"why__right-item-number"},[t._v("0"+t._s(a+1))])]),t._v(" "),s("p",{staticClass:"why__right-item-name"},[t._v("\n                "+t._s(e)+"\n              ")])])})))])])]),t._v(" "),s("div",{staticClass:"trust section"},[s("div",{staticClass:"app-wrap"},[s("h2",{staticClass:"app-heading"},[s("span",{staticClass:"orange"},[t._v(" trust. "),s("br")]),t._v("\n          This is my MISSION\n        ")]),t._v(" "),s("p",{staticClass:"trust__subheading app-info"},[t._v("\n          Why you look at me as lifelong guarant?\n        ")]),t._v(" "),s("div",{staticClass:"trust__container"},[s("div",{staticClass:"trust__col"},[s("div",{staticClass:"trust__col-img"},[s("img",{attrs:{src:"img/trust-1.gif"}})]),t._v(" "),s("div",{staticClass:"trust__col-text"},[s("h3",{staticClass:"trust__col-name"},[t._v("Protection")]),t._v(" "),s("p",{staticClass:"app-info"},[t._v("\n                The interests of both transaction parties are protected\n                because funds are held by a neutral, trusted third-party\n                escrow agent.\n              ")])])]),t._v(" "),s("div",{staticClass:"trust__col"},[s("div",{staticClass:"trust__col-img"},[s("img",{attrs:{src:"img/trust-2.gif"}})]),t._v(" "),s("div",{staticClass:"trust__col-text"},[s("h3",{staticClass:"trust__col-name"},[t._v("REDUCED RISK")]),t._v(" "),s("p",{staticClass:"app-info"},[t._v("\n                Counterparty or market risks are minimised.\n              ")])])]),t._v(" "),s("div",{staticClass:"trust__col"},[s("div",{staticClass:"trust__col-img"},[s("img",{attrs:{src:"img/trust-3.gif"}})]),t._v(" "),s("div",{staticClass:"trust__col-text"},[s("h3",{staticClass:"trust__col-name"},[t._v("ASSURANCE")]),t._v(" "),s("p",{staticClass:"app-info"},[t._v("\n                The escrow agent provides independent assurance of escrow\n                objectives.\n              ")])])])])])]),t._v(" "),s("div",{staticClass:"counts section"},[s("div",{staticClass:"app-wrap"},[s("div",{staticClass:"counts__item"},[s("div",{staticClass:"counts__item-arrow"},[s("Arrow-Right")],1),t._v(" "),s("div",{staticClass:"counts__item-text"},[s("p",{staticClass:"counts__item-value"},[t._v("3 000 +")]),t._v(" "),s("p",{staticClass:"counts__item-info"},[t._v("\n              More then 3 000+ transaction made with me\n            ")])])]),t._v(" "),s("div",{staticClass:"counts__item"},[s("div",{staticClass:"counts__item-arrow"},[s("Arrow-Right")],1),t._v(" "),s("div",{staticClass:"counts__item-text"},[s("p",{staticClass:"counts__item-value"},[t._v("10 000 000")]),t._v(" "),s("p",{staticClass:"counts__item-info"},[t._v("\n              More that $10 000 000 of secure agreements\n            ")])])]),t._v(" "),s("div",{staticClass:"counts__item"},[s("div",{staticClass:"counts__item-arrow"},[s("Arrow-Right")],1),t._v(" "),s("div",{staticClass:"counts__item-text"},[s("p",{staticClass:"counts__item-value"},[t._v("1 000")]),t._v(" "),s("p",{staticClass:"counts__item-info"},[t._v("\n              More then 1 000 well sleping client worked with me :)\n            ")])])])])]),t._v(" "),s("div",{staticClass:"feedback section"},[s("div",{staticClass:"app-wrap"},[s("h2",{staticClass:"app-heading"},[t._v("My clients know me the best")]),t._v(" "),s("Carousel")],1),t._v(" "),s("h3",{staticClass:"consultation__right-info"},[s("a",{attrs:{href:t.feedbackUrl,target:"_blank"}},[t._v("Check more feedback...")])]),t._v(" "),s("div",{staticClass:"who__gradient"},[s("div",{staticClass:"who__gradient-top"}),t._v(" "),s("div",{staticClass:"who__gradient-bottom"})])]),t._v(" "),s("div",{staticClass:"faq section"},[s("div",{staticClass:"app-wrap"},[s("h2",{staticClass:"app-heading"},[t._v("Frequently asked questions")]),t._v(" "),s("faq")],1)]),t._v(" "),s("div",{staticClass:"consultation section"},[s("div",{staticClass:"app-wrap"},[s("div",{staticClass:"consultation__left"},[s("h2",{staticClass:"app-heading"},[t._v("\n            my CONSULTATION "),s("br"),t._v(" "),s("span",{staticClass:"orange"},[t._v(" is free")]),t._v(" if you have "),s("br"),t._v(" "),s("span",[t._v(" any QUESTIONS! ")])])]),t._v(" "),s("div",{staticClass:"consultation__right"},[s("h3",{staticClass:"consultation__right-info"},[t._v("\n            Check customers feedback\n            "),s("a",{attrs:{href:t.feedbackUrl,target:"_blank"}},[t._v("Here")])])])])]),t._v(" "),s("app-footer",{attrs:{socialLinks:t.socialLinks,contactURL:t.contactURL}})],1)])},h=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"app-footer section"},[s("div",{staticClass:"app-wrap"},[t._m(0),t._v(" "),s("div",{staticClass:"app-footer__container"},[t._m(1),t._v(" "),s("div",{staticClass:"app-footer__social"},t._l(t.socialLinks,(function(t){return s("a",{key:t.id,staticClass:"app-footer__social-link",attrs:{href:t.link,target:"_blank"}},[s("img",{style:{width:(t.width?t.width:100)+"%"},attrs:{src:"img/social/"+t.id+".svg"}})])}))),t._v(" "),s("div",{staticClass:"app-footer__contact"},[s("a",{staticClass:"app-button",attrs:{href:t.contactURL,target:"_blank"}},[t._v("Contact me")])])])])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"p-mini"},[t._v("\n      Our social media groups. "),s("br"),t._v("\n      You can find here relevant information about services that we provides.\n    ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-footer__logo"},[s("img",{attrs:{src:"img/logo.png"}})])}],f={props:{socialLinks:{type:Array,default:[]},contactURL:{type:String}}},m=f,w=(s("7f17"),Object(c["a"])(m,u,p,!1,null,null,null)),g=w.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"37",height:"21",viewBox:"0 0 37 21",fill:"none"}},[s("path",{attrs:{d:"M-4.15258e-07 10.5L36 10.5M36 10.5L26.25 1M36 10.5L26.25 20",stroke:"#FFAC29"}})])},C=[],b={},k=Object(c["a"])(b,y,C,!1,null,null,null),x=k.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"faq__wrap"},[s("div",{staticClass:"faq__item"},[s("div",{staticClass:"faq__item-head"},[s("img",{staticClass:"faq__item-icon",attrs:{src:"img/plus.svg"}}),t._v(" "),s("p",{staticClass:"faq__item-name"},[t._v("What is an escrow service?")])]),t._v(" "),s("div",{staticClass:"faq__item-info"},[s("p",[t._v("\n        An escrow service is a third-party intermediary that helps facilitate\n        secure transactions between two parties who don't know each other. It\n        provides a safe and secure way for buyers and sellers to conduct\n        business online without having to trust each other. "),s("br"),t._v(" "),s("br"),t._v("\n        ‍ The way an escrow service works is that the buyer sends the payment\n        to the escrow service instead of directly to the seller. The escrow\n        service holds the payment until the buyer receives the goods or\n        services and confirms that they are satisfied with the transaction.\n        Once the buyer confirms their satisfaction, the escrow service\n        releases the payment to the seller. "),s("br"),t._v(" "),s("br"),t._v("\n        ‍ The use of an escrow service can help protect both the buyer and the\n        seller from potential fraud and scams. It provides an added layer of\n        security and ensures that both parties fulfill their obligations as\n        agreed upon. Escrow services can be used for various types of\n        transactions, such as online purchases, real estate transactions, and\n        business acquisitions.\n      ")]),t._v(" "),s("div",{staticClass:"faq__item-space"})])]),t._v(" "),s("div",{staticClass:"faq__item"},[s("div",{staticClass:"faq__item-head"},[s("img",{staticClass:"faq__item-icon",attrs:{src:"img/plus.svg"}}),t._v(" "),s("p",{staticClass:"faq__item-name"},[t._v("\n        What is the fee for escrow service and who pays the fee?\n      ")])]),t._v(" "),s("div",{staticClass:"faq__item-info"},[s("p",[t._v("\n        An escrow service typically charges a fee for their services, which is\n        usually a percentage of the total amount of the transaction. This fee\n        is paid by either the buyer, the seller, or both parties depending on\n        the agreement made between them. ‍ "),s("br"),t._v(" "),s("br"),t._v("\n        In some cases, the party who initiates the use of the escrow service\n        may be responsible for paying the fee, while in other cases, the fee\n        may be split equally between the buyer and the seller. The specific\n        fee and payment arrangement for an escrow service can vary depending\n        on the service provider and the terms of the transaction. It's\n        important to carefully review and understand the terms of the escrow\n        service agreement before using it.\n      ")]),t._v(" "),s("div",{staticClass:"faq__item-space"})])]),t._v(" "),s("div",{staticClass:"faq__item"},[s("div",{staticClass:"faq__item-head"},[s("img",{staticClass:"faq__item-icon",attrs:{src:"img/plus.svg"}}),t._v(" "),s("p",{staticClass:"faq__item-name"},[t._v("\n        Which sending currencies and payment systems are supported?\n      ")])]),t._v(" "),s("div",{staticClass:"faq__item-info"},[s("p",[t._v("\n        Our escrow service supports working with any convenient for you\n        cryptocurrencies. "),s("br"),t._v("\n        The most popular of them: "),s("br"),t._v(" "),s("br"),t._v("\n        Bitcoin"),s("br"),t._v("\n\n        Ethereum "),s("br"),t._v("LTC "),s("br"),t._v("\n        USDT "),s("br"),t._v("USDC"),s("br"),t._v("\n        DAI "),s("br"),t._v("SOL "),s("br"),s("br"),t._v("Some currencies may charge additional\n        transaction processing fees, so it is important to consider any\n        additional costs.\n      ")]),t._v(" "),s("div",{staticClass:"faq__item-space"})])]),t._v(" "),s("div",{staticClass:"faq__item"},[s("div",{staticClass:"faq__item-head"},[s("img",{staticClass:"faq__item-icon",attrs:{src:"img/plus.svg"}}),t._v(" "),s("p",{staticClass:"faq__item-name"},[t._v("Can I cancel a payment that has been made?")])]),t._v(" "),s("div",{staticClass:"faq__item-info"},[s("p",[t._v("\n        Whether you can cancel a payment that has been made to an escrow\n        service will depend on the specific terms and conditions of the\n        service provider you are using. ‍ "),s("br"),t._v(" "),s("br"),t._v("\n        In most cases, if you have already sent a payment to an escrow\n        service, you may not be able to cancel it or get a refund unless the\n        other party in the transaction agrees to it. This is because the\n        escrow service is holding the funds on behalf of both parties, and\n        they will typically only release the funds according to the terms and\n        conditions of the transaction agreement. ‍ "),s("br"),t._v(" "),s("br"),t._v("\n        If you are experiencing any issues or concerns with an escrow service\n        transaction, it's important to contact the service provider and try to\n        work out a resolution directly with them. Be sure to review the terms\n        and conditions of the escrow service agreement carefully before making\n        any payments to ensure that you understand the rules and limitations\n        of the service.\n      ")]),t._v(" "),s("div",{staticClass:"faq__item-space"})])]),t._v(" "),s("div",{staticClass:"faq__item"},[s("div",{staticClass:"faq__item-head"},[s("img",{staticClass:"faq__item-icon",attrs:{src:"img/plus.svg"}}),t._v(" "),s("p",{staticClass:"faq__item-name"},[t._v("\n        How long does escrow take to refund my money?\n      ")])]),t._v(" "),s("div",{staticClass:"faq__item-info"},[s("p",[t._v("\n        The time it takes for an escrow service to refund your money can vary\n        depending on the specific service provider and the circumstances\n        surrounding the refund. ‍ "),s("br"),t._v(" "),s("br"),t._v("\n        In general, once a refund request is initiated, most escrow services\n        will take a few business days to process the refund and return the\n        funds to the account they originated from. However, some refunds may\n        take longer to process if there are any disputes or issues that need\n        to be resolved first. ‍ "),s("br"),t._v(" "),s("br"),t._v("\n        If you are waiting for a refund from an escrow service and it's taking\n        longer than expected, it's important to contact the service provider\n        directly to inquire about the status of the refund and any potential\n        delays. The escrow service may be able to provide you with more\n        information and a timeline for when you can expect to receive your\n        refund.\n      ")]),t._v(" "),s("div",{staticClass:"faq__item-space"})])])])}],T={mounted(){this.addAccordion()},methods:{addAccordion(){const t=document.getElementsByClassName("faq__item-head");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))}}},I=T,S=(s("c765"),Object(c["a"])(I,E,q,!1,null,null,null)),M=S.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("carousel",{attrs:{"per-page":t.isMobileDevice?1:3,autoplayTimeout:3e3,loop:!0,navigationEnabled:!0,"mouse-drag":!0}},t._l(t.feedbackContent,(function(e,a,i){return s("slide",{key:a,staticClass:"slide"},[s("div",{staticClass:"feedback__item"},[s("div",{staticClass:"feedback__item-head"},[s("img",{staticClass:"feedback__item-photo",attrs:{src:"img/feedback/"+(i+1)+".png"}}),t._v(" "),s("p",{staticClass:"feedback__item-name"},[t._v(t._s(a))])]),t._v(" "),s("p",{staticClass:"feedback__item-text",domProps:{innerHTML:t._s(e)}})])])})))},L=[],O=s("0a63"),R={components:{Carousel:O["Carousel"],Slide:O["Slide"]},computed:{isMobileDevice(){return this.isMobile()}},data(){return{feedbackContent:{OLIVER:"Thank you for your work, the deal went great. I will only turn to you in the future!","OLD HAFNER":"I just had a deal of 15k through the escrow <span>@Wop_Marx,</span> highly recommend this man, quickly and accurately performs his work, regular customers discounts)",ANDREW:"We have had 4 deals with Marx in the last month - all successful! Everything was adequate, honest and very professional. We will continue to work only with him in the future. Thank you!",ANGRY:"I want to share a review about escrow <span>@Wop_Marx.</span> Great guy! I am glad there are such adequate people who helped to complete the deal at the right level, without any faults! My sincere recommendation!",JAMES:"Thanks to Marx for his help as an escrow in buying Revolut accounts. Everything went easily and calmly, without any unnecessary fuss.💪👌","KONSTANTIN REPYAH":"Thank you Marx. Sold the account for the first time.  Everything was accurate, promptly. Called, received instructions, executed. Everything went in 1 day.",LAURA:"Many thanks to Marx <span>@Wop_Marx</span> for his help with the deal! This was the third transaction in two weeks, which would have been much harder without Marx. We will definitely use him again and hopefully many more times!",PETER:"I have used the services of Marx as an escrow a couple of times.I have an exceptionally positive feeling - everything is fast, responsive, clear and to the point. Thank you, Marx.","VINER GILFANOV":"The transaction was successful. There were some worries about the buyer delaying the deal for a few days, but Marx was as calm as a rock and assured us that there was nothing to worry about. Thank you Marx, everything is super!"}}},methods:{isMobile(){const t=["Android","iPhone","iPad","iPod","BlackBerry","Windows Phone"];return t.some(t=>navigator.userAgent.match(t))}}},P=R,H=(s("c59e"),Object(c["a"])(P,A,L,!1,null,null,null)),U=H.exports,j={name:"app",components:{AppFooter:g,ArrowRight:x,Faq:M,Carousel:U},data(){return{isActive:!1,aboutInfo:["Help in finding doer","Assessment of the cost <br> of services","Support during the sale of the <br> service / service"],riskInfo:{buyer:["Keep your money secure until ...","Hedge against delayed or cancelled shipment","Fully verify seller's identity and compliance status","Get your money back if goods fail the inspection"],seller:["Sell more by building trust with international buyers","Secure full payment amount in an escrow before you ship","Fully verify seller's identity and compliance status","Work only with verified buyers, no more post shipment hassles"]},workProcess:{"Ecrow Created":"Buyer and Seller agree to escrow terms. Buyer funds Escrow account with wire transfer payment","Delivery Process":"Once buyer payment in escrow, seller delivers listing information to Escrow. Escrow verifies information is correct and passes it to the buyer.","Buyer Review":"Buyer inspects deliverable and releases payment from escrow (or initiates a dispute).","Seller Payout":"Seller receives payment and transaction is complete."},whyReasons:["A real person","Trust of thousands of customers (number of transactions)","Punctuality","Transparency","Support at various stages of the agreement"],contactURL:"https://t.me/Wop_Marx",feedbackUrl:"https://t.me/Capital_Reviews",socialLinks:[{id:"tg",link:"https://t.me/The_CapitaI"},{id:"tw",link:"https://twitter.com/OTC_Capital",width:"55"},{id:"feedback",link:"https://t.me/Capital_Reviews",width:"65"}]}},methods:{setShortLink(t){return t.replace("https://","")},nextLink(t){t.includes(" ")&&(t=t.replace(" ","-")),document.querySelector("."+t).scrollIntoView({block:"start",behavior:"smooth"})}}},N=j,W=Object(c["a"])(N,d,h,!1,null,null,null),D=W.exports;a["a"].use(v["a"]);const F=[{path:"/",name:"Home",component:D},{path:"*",component:D}],$=new v["a"]({mode:"history",routes:F});var B=$;const V=new a["a"];window.$bus=V,new a["a"]({el:"#app",router:B,render:t=>t(_)})},"7f17":function(t,e,s){"use strict";s("ae0d")},"92b3":function(t,e,s){"use strict";s("0898")},"98e5":function(t,e,s){},ae0d:function(t,e,s){},c59e:function(t,e,s){"use strict";s("98e5")},c765:function(t,e,s){"use strict";s("c8fb")},c8fb:function(t,e,s){}});
//# sourceMappingURL=app.3e6b3299.js.map
