(function(){"use strict";var t={6142:function(t,e,o){var r=o(6848),A=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeadComponent"),e("ComponenteCarrusel1"),e("ComponenteCarrusel2"),e("ComponenteCarrusel3"),t._m(0)],1)},s=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footer-section"},[e("h3",[t._v("Contacto")]),e("ul",[e("li",[t._v("Teléfono: (123) 456-7890")]),e("li",[t._v("Email: contacto@tusitio.com")])])]),e("div",{staticClass:"footer-section"},[e("h3",[t._v("Dirección")]),e("p",[t._v(" Calle Falsa 123"),e("br"),t._v(" Bogota D.C"),e("br"),t._v(" Colombia ")])]),e("div",{staticClass:"footer-section"},[e("h3",[t._v("Redes Sociales")]),e("ul",{staticClass:"social-links"},[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(8146),alt:""}}),t._v(" Facebook ")])]),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(4467),alt:""}}),t._v(" Twitter ")])]),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(3776),alt:""}}),t._v(" Instagram ")])])])])]),e("div",{staticClass:"footer-bottom"},[e("p",[t._v("© 2024 KunaAmarte. Todos los derechos reservados.")])])])}],a=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("h1",[t._v("Kuna Amarte")])])}],n={name:"HeadComponent"},c=n,i=o(1656),u=(0,i.A)(c,a,l,!1,null,"c5dd2858",null),d=u.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"container my-5"},[e("h2",[t._v("Productos Destacados")]),e("div",{ref:"productCarousel",staticClass:"carousel slide",attrs:{id:"productCarousel","data-bs-ride":"carousel"}},[e("button",{staticClass:"carousel-control-prev custom-control-prev",attrs:{type:"button"},on:{click:t.prevSlide}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"carousel-control-next custom-control-next",attrs:{type:"button"},on:{click:t.nextSlide}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}})]),e("div",{staticClass:"carousel-inner"},t._l(t.grupos,(function(o,r){return e("div",{key:r,class:["carousel-item",{active:0===r}]},[e("div",{staticClass:"row"},t._l(o,(function(o,r){return e("div",{key:r,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:o.img,alt:o.alt}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(o.title))]),e("p",{staticClass:"card-text"},[t._v(t._s(o.price))]),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.openModal(o)}}},[t._v(" Ver Producto ")])])])])})),0)])})),0)])]),e("ComponenteModal",{attrs:{visible:t.isModalVisible,producto:t.selectedProducto},on:{close:t.closeModal}})],1)},v=[],m=(o(4114),o(4713)),f=o.n(m),g=o.p+"img/Loro.64ec6f0b.jpg",C=o.p+"img/gettyimage.9a5b849e.jpg",b="data:image/jpeg;base64,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",P=o.p+"img/chaqueta.cdcfdbcf.jpg",y=o.p+"img/chaqueta2.ea6b1aaa.jpg",h=o.p+"img/collar.cb915352.jpg",S=o.p+"img/collar2.e8044028.jpg",x=o.p+"img/gorreon.ade9ba6d.jpg",w=function(){var t=this,e=t._self._c;return t.visible?e("div",{staticClass:"modal"},[e("div",{staticClass:"modal-content"},[e("button",{staticClass:"close-button",on:{click:t.closeModal}},[t._v("X")]),e("div",{staticClass:"body"},[e("div",{staticClass:"image-container"},[e("img",{staticClass:"modal-img",attrs:{src:t.producto.img,alt:t.producto.alt}})]),e("div",{staticClass:"text-container"},[e("h5",[e("strong",[t._v(t._s(t.producto.title))])]),t._m(0),e("p",[t._v(t._s(t.producto.price))])]),e("a",{staticClass:"btn btn-primary",attrs:{href:`https://wa.me/${t.telefono}?text=${t.mensaje}`,target:"_blank",rel:"noopener noreferrer"}},[t._v(" Comprar ")])])])]):t._e()},k=[function(){var t=this,e=t._self._c;return e("strong",[e("em",[t._v("Descripcion:")])])}],_={name:"ComponenteModal",props:{visible:{type:Boolean,required:!0},producto:{type:Object,required:null}},emits:["close"],methods:{closeModal(){this.$emit("close")}},computed:{telefono(){return"573102775697"},mensaje(){return encodeURIComponent(`¡Hola! Estoy interesado en el producto "${this.producto.title}" con precio ${this.producto.price}.`)}}},M=_,K=(0,i.A)(M,w,k,!1,null,"02e2c25a",null),Q=K.exports,j={name:"ComponenteCarrusel1",components:{ComponenteModal:Q},setup(){const t=(0,r.ref)(null),e=(0,r.ref)(!1),o=(0,r.ref)(null),A=(0,r.ref)([]),s=[{img:g,alt:"Producto 1",title:"Producto 1",price:"$100.00"},{img:C,alt:"Producto 2",title:"Producto 2",price:"$120.00"},{img:b,alt:"Producto 3",title:"Producto 3",price:"$150.00"},{img:P,alt:"Producto 4",title:"Producto 4",price:"$200.00"},{img:y,alt:"Producto 5",title:"Producto 5",price:"$110.00"},{img:h,alt:"Producto 6",title:"Producto 6",price:"$130.00"},{img:S,alt:"Producto 7",title:"Producto 7",price:"$170.00"},{img:x,alt:"Producto 8",title:"Producto 8",price:"$210.00"}];let a=null;const l=()=>{const t=window.innerWidth;let e;e=t>=992?4:t>=768?3:t>=576?2:1,A.value=[];for(let l=0;l<s.length;l+=e)A.value.push(s.slice(l,l+e));const o=A.value.length>1,r=document.querySelector(".custom-control-prev"),a=document.querySelector(".custom-control-next");r&&a&&(r.classList.toggle("hidden",!o),a.classList.toggle("hidden",!o))};(0,r.onMounted)((()=>{t.value&&(a=new(f())(t.value,{interval:3e3})),l(),window.addEventListener("resize",l)})),(0,r.onUnmounted)((()=>{window.removeEventListener("resize",l)}));const n=()=>a&&a.prev(),c=()=>a&&a.next(),i=t=>{o.value=t,e.value=!0},u=()=>{e.value=!1};return{productCarousel:t,prevSlide:n,nextSlide:c,isModalVisible:e,selectedProducto:o,openModal:i,closeModal:u,grupos:A}}},V=j,q=(0,i.A)(V,p,v,!1,null,"23b39f66",null),T=q.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"container my-5"},[e("h2",[t._v("Ropa")]),e("div",{ref:"productCarousel",staticClass:"carousel slide",attrs:{id:"productCarousel"}},[e("button",{staticClass:"carousel-control-prev custom-control-prev",attrs:{type:"button"},on:{click:t.prevSlide}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"carousel-control-next custom-control-next",attrs:{type:"button"},on:{click:t.nextSlide}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}})]),e("div",{staticClass:"carousel-inner"},t._l(t.grupos,(function(o,r){return e("div",{key:r,class:["carousel-item",{active:0===r}]},[e("div",{staticClass:"row"},t._l(o,(function(o,r){return e("div",{key:r,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:o.img,alt:o.alt}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(o.title))]),e("p",{staticClass:"card-text"},[t._v(t._s(o.price))]),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.openModal(o)}}},[t._v(" Ver Producto ")])])])])})),0)])})),0)])]),e("ComponenteModal",{attrs:{visible:t.isModalVisible,producto:t.selectedProducto},on:{close:t.closeModal}})],1)},z=[],L={name:"ComponenteCarrusel2",components:{ComponenteModal:Q},setup(){const t=(0,r.ref)(null),e=(0,r.ref)(!1),o=(0,r.ref)(null),A=(0,r.ref)([]),s=[{img:g,alt:"Producto 1",title:"Producto 1",price:"$100.00"},{img:C,alt:"Producto 2",title:"Producto 2",price:"$120.00"},{img:b,alt:"Producto 3",title:"Producto 3",price:"$150.00"},{img:P,alt:"Producto 4",title:"Producto 4",price:"$200.00"},{img:y,alt:"Producto 5",title:"Producto 5",price:"$110.00"},{img:h,alt:"Producto 6",title:"Producto 6",price:"$130.00"},{img:S,alt:"Producto 7",title:"Producto 7",price:"$170.00"},{img:x,alt:"Producto 8",title:"Producto 8",price:"$210.00"}];let a=null;(0,r.onMounted)((()=>{t.value&&(a=new(f())(t.value,{interval:!1})),u(),window.addEventListener("resize",u)})),(0,r.onUnmounted)((()=>{window.removeEventListener("resize",u)}));const l=()=>a&&a.prev(),n=()=>a&&a.next(),c=t=>{o.value=t,e.value=!0},i=()=>{e.value=!1},u=()=>{const t=window.innerWidth;let e;e=t>=992?4:t>=768?3:t>=576?2:1,A.value=[];for(let l=0;l<s.length;l+=e)A.value.push(s.slice(l,l+e));const o=A.value.length>1,r=document.querySelector(".custom-control-prev"),a=document.querySelector(".custom-control-next");r&&a&&(r.classList.toggle("hidden",!o),a.classList.toggle("hidden",!o))};return{productCarousel:t,prevSlide:l,nextSlide:n,isModalVisible:e,selectedProducto:o,openModal:c,closeModal:i,grupos:A}}},B=L,U=(0,i.A)(B,E,z,!1,null,"18612fd3",null),O=U.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"container my-5"},[e("h2",[t._v("Collares")]),e("div",{ref:"productCarousel",staticClass:"carousel slide",attrs:{id:"productCarousel"}},[e("button",{staticClass:"carousel-control-prev custom-control-prev",attrs:{type:"button"},on:{click:t.prevSlide}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"carousel-control-next custom-control-next",attrs:{type:"button"},on:{click:t.nextSlide}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}})]),e("div",{staticClass:"carousel-inner"},t._l(t.grupos,(function(o,r){return e("div",{key:r,class:["carousel-item",{active:0===r}]},[e("div",{staticClass:"row"},t._l(o,(function(o,r){return e("div",{key:r,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:o.img,alt:o.alt}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(o.title))]),e("p",{staticClass:"card-text"},[t._v(t._s(o.price))]),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.openModal(o)}}},[t._v(" Ver Producto ")])])])])})),0)])})),0)])]),e("ComponenteModal",{attrs:{visible:t.isModalVisible,producto:t.selectedProducto},on:{close:t.closeModal}})],1)},F=[],G={name:"ComponenteCarrusel2",components:{ComponenteModal:Q},setup(){const t=(0,r.ref)(null),e=(0,r.ref)(!1),o=(0,r.ref)(null),A=(0,r.ref)([]),s=[{img:g,alt:"Producto 1",title:"Producto 1",price:"$100.00"},{img:C,alt:"Producto 2",title:"Producto 2",price:"$120.00"},{img:b,alt:"Producto 3",title:"Producto 3",price:"$150.00"},{img:P,alt:"Producto 4",title:"Producto 4",price:"$200.00"},{img:y,alt:"Producto 5",title:"Producto 5",price:"$110.00"},{img:h,alt:"Producto 6",title:"Producto 6",price:"$130.00"},{img:S,alt:"Producto 7",title:"Producto 7",price:"$170.00"},{img:x,alt:"Producto 8",title:"Producto 8",price:"$210.00"}];let a=null;(0,r.onMounted)((()=>{t.value&&(a=new(f())(t.value,{interval:!1})),u(),window.addEventListener("resize",u)})),(0,r.onUnmounted)((()=>{window.removeEventListener("resize",u)}));const l=()=>a&&a.prev(),n=()=>a&&a.next(),c=t=>{o.value=t,e.value=!0},i=()=>{e.value=!1},u=()=>{const t=window.innerWidth;let e;e=t>=992?4:t>=768?3:t>=576?2:1,A.value=[];for(let l=0;l<s.length;l+=e)A.value.push(s.slice(l,l+e));const o=A.value.length>1,r=document.querySelector(".custom-control-prev"),a=document.querySelector(".custom-control-next");r&&a&&(r.classList.toggle("hidden",!o),a.classList.toggle("hidden",!o))};return{productCarousel:t,prevSlide:l,nextSlide:n,isModalVisible:e,selectedProducto:o,openModal:c,closeModal:i,grupos:A}}},I=G,W=(0,i.A)(I,X,F,!1,null,"27b49216",null),J=W.exports,N={name:"App",components:{HeadComponent:d,ComponenteCarrusel1:T,ComponenteCarrusel2:O,ComponenteCarrusel3:J}},H=N,Z=(0,i.A)(H,A,s,!1,null,null,null),R=Z.exports,D=o(5168);o(9313),o(3855);r["default"].use(D.Ay$),r["default"].config.productionTip=!1,new r["default"]({render:t=>t(R)}).$mount("#app")},8146:function(t,e,o){t.exports=o.p+"img/2021_Facebook_icon.svg.25b56a5d.png"},4467:function(t,e,o){t.exports=o.p+"img/Instagram_logo_2022.svg.16a2d0c8.png"},3776:function(t,e,o){t.exports=o.p+"img/WhatsApp.svg.9cc9c0aa.png"}},e={};function o(r){var A=e[r];if(void 0!==A)return A.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,r,A,s){if(!r){var a=1/0;for(i=0;i<t.length;i++){r=t[i][0],A=t[i][1],s=t[i][2];for(var l=!0,n=0;n<r.length;n++)(!1&s||a>=s)&&Object.keys(o.O).every((function(t){return o.O[t](r[n])}))?r.splice(n--,1):(l=!1,s<a&&(a=s));if(l){t.splice(i--,1);var c=A();void 0!==c&&(e=c)}}return e}s=s||0;for(var i=t.length;i>0&&t[i-1][2]>s;i--)t[i]=t[i-1];t[i]=[r,A,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var A,s,a=r[0],l=r[1],n=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(A in l)o.o(l,A)&&(o.m[A]=l[A]);if(n)var i=n(o)}for(e&&e(r);c<a.length;c++)s=a[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(i)},r=self["webpackChunkpaginaweb"]=self["webpackChunkpaginaweb"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(6142)}));r=o.O(r)})();
//# sourceMappingURL=app.b57a2768.js.map