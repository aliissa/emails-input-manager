var EmailInputManager=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"load",(function(){return r})),n(1);var r=function(e,t){var n=e.container;if(document.getElementById(n)){console.log(n);var r="Board name";t&&(r=t.title?t.title:r),document.getElementById(n).innerHTML='<div class="container">\n    <div class="container_input-area">\n      <div class="container_input-area_title">Share <strong>'+r+'</strong> with others</div>\n      <div id="emailsContainer" class="container_input-area_content">\n        <input class="emails-input" id="inputEmail" type="text" placeholder="add more people…" />\n      </div>\n    </div>\n    <div class="container_actions">\n      <button id="btnAddEmail">Add email</button>\n      <button id="btnCountEmails">Get emails count</button>\n    </div>\n  </div>';var a=document.getElementById("emailsContainer"),i=document.querySelector(".emails-input"),o=document.getElementById("btnAddEmail"),l=document.getElementById("btnCountEmails"),u=[],c=function(e){var t=document.createElement("div");t.className="container_input-area_email-block",t.dataset.indexNumber=u.length;var n=document.createElement("span");n.innerHTML=e,m(e)||(n.className="container_input-area_email-block_error"),t.appendChild(n);var r=document.createElement("span");return r.className="container_input-area_email-delete",r.addEventListener("click",(function(){s(this.parentNode)})),t.appendChild(r),t};o.onclick=function(){var e,t=(e=["@gmail.com","@miro.com","@live.com"][Math.floor(3*Math.random())],Math.random().toString(36).substring(7)+e);a.insertBefore(c(t),i),u.push(t)},l.onclick=function(){alert("Valid emails count: "+u.filter((function(e){return m(e)})).length)},i.addEventListener("blur",(function(e){var t=e.target.value;d(t),e.target.value=""})),i.addEventListener("keydown",(function(e){if(13===e.keyCode||188===e.keyCode){var t=e.target.value;d(t),e.target.value=""}}));var d=function(e){for(var t=e.split(","),n=0;n<t.length;n++)t[n].length>0&&(a.insertBefore(c(t[n]),i),u.push(t[n]))},s=function(e){var t=e.dataset.indexNumber;u.splice(t,1),a.removeChild(e)},m=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}}}},function(e,t,n){}]);