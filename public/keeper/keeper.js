!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("@spiral-toolkit/keeper",[],e):"object"==typeof exports?exports["@spiral-toolkit/keeper"]=e():t.SFKeeper=e()}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=21)}([function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e),i.d(e,"on",(function(){return w})),i.d(e,"dispatch",(function(){return L})),i.d(e,"confirmModal",(function(){return d})),i.d(e,"Dropdown",(function(){return h})),i.d(e,"Modal",(function(){return n})),i.d(e,"Tabnav",(function(){return C})),i.d(e,"NotificationCenter",(function(){return y}));i(0),i(1),i(2),i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(10),i(11),i(12),i(13),i(14),i(15),i(16);var n=function(){function t(t){if(this.elem=t,this.elem){this.id=this.elem.id,this.toggleElems=document.querySelectorAll('[data-sf="modal-toggle"][data-target="'+this.id+'"]'),this.contentElem=t.querySelector('[data-sf="modal-content"]'),this.closeElem=t.querySelector('[data-sf="modal-close"]'),this.confirmElem=t.querySelector('[data-sf="modal-confirm"]'),this.cancelElem=t.querySelector('[data-sf="modal-cancel"]');var e=this.elem.getAttribute("aria-hidden");this.isOpened=!e||"true"!==e,this.isOpened&&this.redraw(),this.handleClickToggleListener=this.handleClickToggle.bind(this),this.handleClickCloseListener=this.handleClickClose.bind(this),this.handleClickConfirmListener=this.handleClickConfirm.bind(this),this.handleClickCancelListener=this.handleClickCancel.bind(this),this.handleInsideClickListener=this.handleInsideClick.bind(this),this.handleOutsideClickListener=this.handleOutsideClick.bind(this),this.isInnerClick=!1,this.openTimeout=!1,this.closeTimeout=!1,this.bind()}}return t.init=function(e){return new t(e)},t.prototype.bind=function(){var t=this;this.toggleElems.forEach((function(e){return e.addEventListener("click",t.handleClickToggleListener)})),this.closeElem&&this.closeElem.addEventListener("click",this.handleClickCloseListener),this.confirmElem&&this.confirmElem.addEventListener("click",this.handleClickConfirmListener),this.cancelElem&&this.cancelElem.addEventListener("click",this.handleClickCancelListener),this.contentElem.addEventListener("click",this.handleInsideClickListener),document.addEventListener("click",this.handleOutsideClickListener)},t.prototype.die=function(){document.removeEventListener("click",this.handleOutsideClickListener)},t.prototype.handleClickToggle=function(){this.isInnerClick=!0,this.toggle()},t.prototype.handleClickClose=function(){this.close()},t.prototype.handleClickConfirm=function(){this.dispatch("sf:modal-confirm"),this.close()},t.prototype.handleClickCancel=function(){this.dispatch("sf:modal-cancel"),this.close()},t.prototype.handleInsideClick=function(){this.isInnerClick=!0},t.prototype.handleOutsideClick=function(){this.isInnerClick||(this.isOpened&&this.dispatch("sf:modal-cancel"),this.close()),this.isInnerClick=!1},t.prototype.toggle=function(){this.isOpened=!this.isOpened,this.redraw()},t.prototype.open=function(){this.isOpened||(this.isOpened=!0,this.redraw())},t.prototype.close=function(){this.isOpened&&(this.isOpened=!1,this.redraw())},t.prototype.redraw=function(){var t=this;this.openTimeout&&clearTimeout(this.openTimeout),this.closeTimeout&&clearTimeout(this.closeTimeout),this.isOpened?this.dispatch("sf:modal-show"):this.dispatch("sf:modal-hide"),this.elem.setAttribute("aria-hidden",!this.isOpened),this.elem.classList.toggle("show",this.isOpened),this.isOpened?this.openTimeout=setTimeout((function(){document.body.scrollHeight>window.innerHeight?document.body.classList.add("modal-open-scroll"):document.body.classList.add("modal-open"),t.dispatch("sf:modal-shown")}),300):(document.body.classList.remove("modal-open"),document.body.classList.remove("modal-open-scroll"),this.closeTimeout=setTimeout((function(){t.dispatch("sf:modal-hidden")}),300))},t.prototype.dispatch=function(t){var e=new CustomEvent(t);this.elem.dispatchEvent(e)},t}(),s=function(){return(s=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},o=function(t,e,i,n){return new(i||(i=Promise))((function(s,o){function l(t){try{c(n.next(t))}catch(t){o(t)}}function r(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,r)}c((n=n.apply(t,e||[])).next())}))},l=function(t,e){var i,n,s,o,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(s=l.trys,(s=s.length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){l.label=o[1];break}if(6===o[0]&&l.label<s[1]){l.label=s[1],s=o;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(o);break}s[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(t,l)}catch(t){o=[6,t],n=0}finally{i=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},r={confirm:{},cancel:{}},c=Date.now(),d=function(t,e,i){return o(void 0,void 0,void 0,(function(){var o,d,a,h,u;return l(this,(function(l){var f;return o=s(s({},r),i),d="confirm-modal-"+c++,(a=document.createElement("div")).className="modal sf-modal",a.setAttribute("data-sf","modal"),a.setAttribute("id",d),a.setAttribute("tabindex","-1"),a.setAttribute("role","dialog"),a.setAttribute("aria-labelledby",d+"-label"),a.setAttribute("aria-hidden","true"),a.innerHTML='\n  <div data-sf="modal-content" class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header bg-'+((f=s({title:t,context:e},o)).kind||"white")+'">\n        <h4 class="modal-title" id="'+f.id+'-label">'+f.title+'</h4>\n        <button data-sf="modal-close" type="button" class="close" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+f.context+'\n      </div>\n      <div class="modal-footer">\n        '+(f.cancel?'<button data-sf="modal-cancel" type="button" class="btn btn-'+(f.cancel.kind||"secondary")+'">'+(f.cancel.label||"Cancel")+"</button>":"")+"\n        "+(f.confirm?'<button data-sf="modal-confirm" type="button" class="btn btn-'+(f.confirm.kind||"primary")+'">'+(f.confirm.label||"Confirm")+"</button>":"")+"\n      </div>\n    </div>\n  </div>",document.body.appendChild(a),h=n.init(a),u=function(){h.die(),document.body.removeChild(a)},[2,new Promise((function(t,e){setTimeout((function(){a.addEventListener("sf:modal-confirm",(function(){u(),t()})),a.addEventListener("sf:modal-cancel",(function(){u(),e()})),h.open()}))}))]}))}))},a=(i(17),function(){function t(t){var e=this;this.elem=t,this.elem&&(this.items={},this.handleToggleListeners={},this.elem.querySelectorAll('[data-sf="nav-item-toggle"]').forEach((function(t,i){e.items[i]={index:i,toggleElem:t,contentElem:t.nextElementSibling,isExpanded:"true"===t.getAttribute("aria-expanded")||t.classList.contains("active")},e.handleToggleListeners[i]=e.handleToggle.bind(e,i)})),this.init(),this.bind())}return t.init=function(){return new t(document.querySelector('[data-sf="nav"]'))},t.prototype.bind=function(){var t=this;Object.values(this.items).forEach((function(e){return e.toggleElem.addEventListener("click",t.handleToggleListeners[e.index])}))},t.prototype.handleToggle=function(t){var e=this;this.items[t].isExpanded=!this.items[t].isExpanded,this.redraw(t),this.items[t].isExpanded&&Object.values(this.items).forEach((function(i){i.index!==t&&e.hide(i.index)}))},t.prototype.toggle=function(t){this.items[t].isExpanded=!this.items[t].isExpanded,this.redraw(t)},t.prototype.hide=function(t){this.items[t].isExpanded&&(this.items[t].isExpanded=!1,this.redraw(t))},t.prototype.redraw=function(t){var e=this.items[t],i=e.toggleElem,n=e.contentElem,s=e.isExpanded;i.classList.toggle("active",s),i.setAttribute("aria-expanded",s?"true":"false"),n.style.maxHeight=s?n.scrollHeight+"px":null},t.prototype.init=function(){var t=this;Object.values(this.items).forEach((function(e){t.redraw(e.index)}))},t}()),h=function(){function t(t){this.elem=t,this.elem&&(this.toggleElem=t.querySelector('[data-sf="dropdown-toggle"]'),this.menuElem=t.querySelector('[data-sf="dropdown-menu"]'),this.toggleElem&&this.menuElem?(this.usePortal=this.menuElem.hasAttribute("data-sf-use-portal"),this.isExpanded="true"===this.toggleElem.getAttribute("aria-expanded"),this.isExpanded&&this.redraw(),this.handleClickListener=this.handleClick.bind(this),this.handleInsideClickListener=this.handleInsideClick.bind(this),this.handleOutsideClickListener=this.handleOutsideClick.bind(this),this.isInnerClick=!1,this.bind()):console.error("Dropdown missing toggle button or menu"))}return t.init=function(e){return new t(e)},t.prototype.bind=function(){this.toggleElem.addEventListener("click",this.handleClickListener),this.elem.addEventListener("click",this.handleInsideClickListener),document.addEventListener("click",this.handleOutsideClickListener)},t.prototype.handleClick=function(){this.toggle()},t.prototype.handleInsideClick=function(){this.isInnerClick=!0},t.prototype.handleOutsideClick=function(){this.isInnerClick||this.hide(),this.isInnerClick=!1},t.prototype.toggle=function(){this.isExpanded=!this.isExpanded,this.redraw()},t.prototype.show=function(){this.isExpanded||(this.isExpanded=!0,this.redraw())},t.prototype.hide=function(){this.isExpanded&&(this.isExpanded=!1,this.redraw())},t.prototype.redraw=function(){if(this.toggleElem.setAttribute("aria-expanded",this.isExpanded),this.menuElem.classList.toggle("show",this.isExpanded),this.usePortal)if(this.isExpanded){if(this.elem.querySelector('[data-sf="dropdown-menu"]')){document.body.append(this.menuElem);var t=this.toggleElem.getBoundingClientRect(),e=t.top,i=t.left,n=t.right,s=t.height,o={top:e+window.scrollY+s,left:i+window.scrollX};this.menuElem.style.top=o.top+"px",this.menuElem.style.left=o.left+"px";var l=this.menuElem.getBoundingClientRect();l.left+l.width>document.body.clientWidth&&(o.left=n-l.width+window.scrollX),this.menuElem.style.top=o.top+"px",this.menuElem.style.left=o.left+"px"}}else this.elem.appendChild(this.menuElem),this.menuElem.style.top="",this.menuElem.style.left=""},t}(),u=(i(18),function(t){var e=t||window.event;return e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1)}),f=!1;if("undefined"!=typeof window){var p={get passive(){f=!0}};window.addEventListener("testPassive",null,p),window.removeEventListener("testPassive",null,p)}function m(){document.addEventListener("touchmove",u,f?{passive:!1}:void 0)}function b(){document.removeEventListener("touchmove",u,f?{passive:!1}:void 0)}var v=function(){function t(t){this.elem=t,this.elem&&(this.toggleElems=document.querySelectorAll('[data-sf="sidebar-toggle"]'),this.toggleElems.length&&(this.isMobile=!1,this.checkMobile(),this.isExpanded=!this.isMobile&&"true"===this.toggleElems[0].getAttribute("aria-expanded"),this.redraw(),this.handleClickListener=this.handleClick.bind(this),this.handleInsideClickListener=this.handleInsideClick.bind(this),this.handleOutsideClickListener=this.handleOutsideClick.bind(this),this.handleResizeListener=this.handleResize.bind(this),this.isInnerClick=!1,this.bind()))}return t.init=function(){return new t(document.querySelector('[data-sf="sidebar"]'))},t.prototype.bind=function(){var t=this;this.toggleElems.forEach((function(e){return e.addEventListener("click",t.handleClickListener)})),this.elem.addEventListener("click",this.handleInsideClickListener),document.addEventListener("click",this.handleOutsideClickListener),window.addEventListener("resize",this.handleResizeListener)},t.prototype.handleClick=function(){this.isInnerClick=!0,this.toggle()},t.prototype.handleInsideClick=function(){this.isInnerClick=!0},t.prototype.handleOutsideClick=function(){this.isMobile?(this.isInnerClick||this.hide(),this.isInnerClick=!1):this.isInnerClick=!1},t.prototype.handleResize=function(){this.checkMobile()},t.prototype.checkMobile=function(){var t=this.isMobile;window.matchMedia("(max-width: 980px)").matches?this.isMobile=!0:this.isMobile=!1,t!==this.isMobile&&this.isExpanded&&(this.isMobile?m():b())},t.prototype.toggle=function(){this.isExpanded=!this.isExpanded,this.redraw()},t.prototype.show=function(){this.isExpanded||(this.isExpanded=!0,this.redraw())},t.prototype.hide=function(){this.isExpanded&&(this.isExpanded=!1,this.redraw())},t.prototype.redraw=function(){var t=this;this.toggleElems.forEach((function(e){return e.setAttribute("aria-expanded",t.isExpanded)})),this.elem.classList.toggle("active",this.isExpanded),this.isMobile&&(this.isExpanded?m():b())},t}(),E=(i(19),function(){function t(t){this.elem=t,this.elem&&(this.closeElem=t.querySelector('[data-sf="notification-close"]'),this.closeElem&&(this.handleClickCloseListener=this.handleClickClose.bind(this),this.closeTimeout=!1,this.bind()))}return t.init=function(e){return new t(e)},t.prototype.getElem=function(){return this.elem},t.prototype.bind=function(){this.closeElem.addEventListener("click",this.handleClickCloseListener)},t.prototype.unbind=function(){this.closeElem.removeEventListener("click",this.handleClickCloseListener)},t.prototype.handleClickClose=function(){this.unbind(),this.close()},t.prototype.close=function(){var t=this;this.elem&&(this.closeTimeout&&clearTimeout(this.closeTimeout),this.elem.classList.add("closing"),this.closeTimeout=setTimeout((function(){t.elem.remove(),t.elem=void 0}),300))},t}());var y=function(){function t(){this.corners=["tl","tr","bl","br"],this.cornerElems={},this.handleShowNotificationListener=this.handleShowNotification.bind(this),this.initNotifications(),this.bind()}return t.init=function(){return new t},t.prototype.initNotifications=function(){var t=this,e={};document.querySelectorAll('[data-sf="notification"]').forEach((function(i){var n=i.getAttribute("data-position");n&&"inline"!==n&&t.corners.includes(n)?(e[n]||(e[n]=[]),e[n].push(new E(i))):E.init(i)})),this.corners.forEach((function(i){e[i]&&e[i].length&&t.createCorner(i,e[i])}))},t.prototype.bind=function(){document.addEventListener("sf:notification-show",this.handleShowNotificationListener)},t.prototype.handleShowNotification=function(t){var e=t.detail,i=e.message,n=e.type,s=e.position,o=e.timeout,l=function(t,e){void 0===e&&(e="info");var i=document.createElement("div");return i.classList.add("sf-notification","alert","alert-"+e,"alert-dismissible"),i.setAttribute("role","alert"),i.innerHTML=t+'\n    <button type="button" class="close" data-sf="notification-close" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>',i}(i,n),r=new E(l);this.appendNotification(s,r),o&&setTimeout((function(){r.close()}),+o)},t.prototype.createCorner=function(t,e){var i=this,n=document.createElement("div");n.classList.add("sf-notification__corner","sf-notification__corner--"+t),document.body.appendChild(n),this.cornerElems[t]=n,e.forEach((function(e){return i.appendNotification(t,e)}))},t.prototype.appendNotification=function(t,e){this.cornerElems[t]||this.createCorner(t,[]),this.cornerElems[t].appendChild(e.getElem())},t}(),g=function(){function t(t){this.elem=t,this.elem&&(this.href=this.elem.getAttribute("href"),this.contentId=this.elem.getAttribute("aria-controls"),this.contentElem=document.getElementById(this.contentId),this.contentElem&&(this.isVisible="true"===this.elem.getAttribute("aria-selected"),this.isVisible&&this.redraw(),this.showCallback=!1,this.handleClickListener=this.handleClick.bind(this),this.bind()))}return t.prototype.bind=function(){this.elem.addEventListener("click",this.handleClickListener)},t.prototype.handleClick=function(t){t&&(t.preventDefault(),window.history.replaceState({},"",t.target.href)),this.show()},t.prototype.getContentId=function(){return this.contentId},t.prototype.show=function(){this.isVisible||(this.isVisible=!0,this.redraw(),this.showCallback&&this.showCallback(this.contentId))},t.prototype.onShow=function(t){this.showCallback=t},t.prototype.hide=function(){this.isVisible&&(this.isVisible=!1,this.redraw())},t.prototype.redraw=function(){this.elem.setAttribute("aria-selected",this.isVisible),this.elem.classList.toggle("active",this.isVisible),this.contentElem.classList.toggle("active",this.isVisible)},t}(),C=(i(20),function(){function t(t){var e=this;this.elem=t,this.elem&&(this.tabs=[],this.elem.querySelectorAll('[data-sf="tabnav-tab"]').forEach((function(t){e.tabs.push(new g(t))})),this.handleShowListener=this.handleShow.bind(this),this.bind(),this.check())}return t.init=function(e){return new t(e)},t.prototype.check=function(){var t=document.location.hash;if(t){var e=this.tabs.find((function(e){return e.href===t}));e&&e.show()}},t.prototype.bind=function(){var t=this;this.tabs.forEach((function(e){return e.onShow(t.handleShowListener)}))},t.prototype.handleShow=function(t){this.tabs.forEach((function(e){t!==e.getContentId()&&e.hide()}))},t}());var k="function"==typeof window.CustomEvent?function(t,e,i,n){return new CustomEvent(t,{bubbles:i,cancelable:n,detail:e})}:function(t,e,i,n){var s=document.createEvent("CustomEvent");return s.initCustomEvent(t,i,n,e),s};function w(t,e,i,n){void 0===n&&(n=!1);var s=t;return"string"==typeof t&&(s=document.getElementById(t)),s?(s.addEventListener(e,i,n),function(){return s.removeEventListener(e,i,n)}):null}function L(t,e,i,n){void 0===i&&(i={}),void 0===n&&(n={bubbles:!0,cancelable:!0});var s=n.bubbles||!0,o=n.cancelable||!0,l=k(e,i,s,o);return t.dispatchEvent(l)}document.addEventListener("DOMContentLoaded",(function(){y.init(),document.querySelectorAll('[data-sf="dropdown"]').forEach((function(t){return h.init(t)})),document.querySelectorAll('[data-sf="modal"]').forEach((function(t){return n.init(t)})),document.querySelectorAll('[data-sf="tabnav"]').forEach((function(t){return C.init(t)})),a.init(),v.init(),setTimeout((function(){return document.body.classList.add("loaded")}),1),document.addEventListener("sf:confirm",(function(t){d(t.detail.title,t.detail.body,t.detail.options).then(t.detail.onConfirm).catch(t.detail.onCancel)}))}))}])}));
//# sourceMappingURL=keeper.js.map