!function(t){function n(){var t=this.elements[0].nextElementSibling;return new E(void 0,[t])}function e(){var t=this.elements[0].previousElementSibling;return new E(void 0,[t])}function i(t){return y.forEach(this.elements,function(n){for(var e in t)t.hasOwnProperty(e)&&(n.style[e]=t[e])}),this}function s(){return y.forEach(this.elements,function(t){t.style.display="none"}),this}function o(){return y.forEach(this.elements,function(t){t.style.display=""}),this}function r(){return y.forEach(this.elements,function(t){"none"===t.style.display?t.style.display="":t.style.display="none"}),this}function h(t){var n=[];return y.forEach(this.elements,function(e){return y.forEach(e.querySelectorAll(t),function(t){n.push(t)})}),new E(t,n)}function l(){var t=this.elements[0].firstElementChild;return new E(void 0,[t])}function c(){var t=this.elements[0].lastElementChild;return new E(void 0,[t])}function u(t){return y.some(this.elements,function(n){return n.classList.contains(t)})}function f(t){return y.forEach(this.elements,function(n){n.classList.add(t)}),this}function a(t){return y.forEach(this.elements,function(n){n.classList.remove(t)}),this}function d(t){return y.forEach(this.elements,function(n){n.classList.toggle(t)}),this}function m(t,n){bindCallback=n.bind(this),y.forEach(this.elements,function(n){n.addEventListener(t,bindCallback)})}function v(t){y.forEach(this.elements,function(n){n.removeEventListener(t)})}var E=function(t,E){"function"==typeof t?document.addEventListener("DOMContentLoaded",t):"object"==typeof t?this.elements=[t.elements]:(this.selector=t,this.elements=E||document.querySelectorAll(t),this.length=this.elements.length,this.css=i,this.hide=s,this.show=o,this.toggle=r,this.on=m,this.off=v,this.next=n,this.prev=e,this.find=h,this.firstChild=l,this.lastChild=c,this.hasClass=u,this.addClass=f,this.removeClass=a,this.toggleClass=d)},y=function(t){return new E(t)};y.some=function(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return!0;return!1},y.forEach=function(t,n){for(var e=0;e<t.length;e++)n(t[e])},t.$?t.anotherJS=y:t.$=y}(window);