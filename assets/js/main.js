function verifyFilter(e){for(var t=document.getElementsByClassName("post"),r=0;r<t.length;r++){var n=t[r].querySelector(".post__content_tags");n.getAttribute("tags").indexOf(e)==-1&&(t[r].style.display="none")}}function randomNum(){return rand=Math.floor(10*Math.random()+1),this}var window_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,filters=document.querySelector(".filters__list_category");if(filters&&filters.addEventListener("click",function(){var e=this.getAttribute("filter");verifyFilter(e)}),window_width<680){for(var post_wrapper=document.getElementsByClassName("post"),i=0;i<post_wrapper.length;i++){var that=post_wrapper[i];that.removeChild(that.childNodes[3])}for(var posts_content=document.getElementsByClassName("post__content"),k=0;k<posts_content.length;k++){var color=posts_content[k].getAttribute("color");posts_content[k].setAttribute("bg-color",color)}}for(var img=document.getElementsByTagName("img"),src="",i=0,imgLength=img.length;i<imgLength;i++)if(src=img[i].src,src.indexOf("/assets")==-1){var sr=src.split("/img").pop();img[i].src="/assets/img"+sr}var header=document.getElementsByClassName("header"),header_style=window.getComputedStyle(header[0]),header_height=header_style.getPropertyValue("height"),rand=0;randomNum(),window.addEventListener("scroll",function(){rand<3?window_width>960?header[0].querySelector(".header__title").style.transform="translateX("+window.pageYOffset/5+"px)":header[0].querySelector(".header__title").style.transform="translateX("+window.pageYOffset/1.5+"px)":rand<6?window_width>960?header[0].querySelector(".header__title").style.transform="translateY("+window.pageYOffset/5+"px)":header[0].querySelector(".header__title").style.transform="translateY("+window.pageYOffset+"px)":window_width>960?header[0].querySelector(".header__title").style.transform="translateX(-"+window.pageYOffset/5+"px)":header[0].querySelector(".header__title").style.transform="translateX(-"+window.pageYOffset/1.5+"px)"});var menu=document.querySelector(".menu"),logo=menu.querySelector(".menu__logo");window_width<960&&(logo.setAttribute("href","javascript:void(0);"),logo.addEventListener("click",function(e){logo.classList.contains("act")?(menu.style.transform="translateY(-152px)",logo.classList.remove("act")):(menu.style.transform="translateY(0)",logo.classList.add("act"))})),function e(t,r,n){function i(a,s){if(!r[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(e){var r=t[a][1][e];return i(r?r:e)},u,u.exports,e,t,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t,r){"use strict";function n(e,t){var r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var i=0,o=0;i<n;i++){for(var a=e.charCodeAt(i);o<r;)if(t.charCodeAt(o++)===a)continue e;return!1}return!0}t.exports=n},{}],2:[function(e,t,r){"use strict";function n(e,t){var r=o();r.open("GET",e,!0),r.onreadystatechange=i(r,t),r.send()}function i(e,t){return function(){if(4===e.readyState&&200===e.status)try{t(null,JSON.parse(e.responseText))}catch(e){t(e,null)}}}function o(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}t.exports={load:n}},{}],3:[function(e,t,r){"use strict";t.exports=function e(t){function r(e){return!!e&&(void 0!==e.required&&e.required instanceof Array)}if(!r(t))throw new Error("-- OptionsValidator: required options missing");if(!(this instanceof e))return new e(t);var n=t.required;this.getRequiredOptions=function(){return n},this.validate=function(e){var t=[];return n.forEach(function(r){void 0===e[r]&&t.push(r)}),t}}},{}],4:[function(e,t,r){"use strict";function n(e){return a(e)?c(e):s(e)?u(e):void 0}function i(){return y.length=0,y}function o(){return y}function a(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}function c(e){return y.push(e),y}function u(e){for(var t=[],r=0;r<e.length;r++)a(e[r])&&t.push(c(e[r]));return t}function l(e){return e?d(y,e,w.searchStrategy,w):[]}function f(e){w=e||{},w.fuzzy=e.fuzzy||!1,w.limit=e.limit||10,w.searchStrategy=e.fuzzy?m:g}function d(e,t,r,n){for(var i=[],o=0;o<e.length&&i.length<n.limit;o++){var a=h(e[o],t,r,n);a&&i.push(a)}return i}function h(e,t,r,n){for(var i in e)if(!p(e[i],n.exclude)&&r.matches(e[i],t))return e}function p(e,t){var r=!1;t=t||[];for(var n=0;n<t.length;n++){var i=t[n];!r&&new RegExp(e).test(i)&&(r=!0)}return r}t.exports={put:n,clear:i,get:o,search:l,setOptions:f};var m=e("./SearchStrategies/FuzzySearchStrategy"),g=e("./SearchStrategies/LiteralSearchStrategy"),y=[],w={};w.fuzzy=!1,w.limit=10,w.searchStrategy=w.fuzzy?m:g},{"./SearchStrategies/FuzzySearchStrategy":5,"./SearchStrategies/LiteralSearchStrategy":6}],5:[function(e,t,r){"use strict";function n(){this.matches=function(e,t){return i(t,e)}}var i=e("fuzzysearch");t.exports=new n},{fuzzysearch:1}],6:[function(e,t,r){"use strict";function n(){this.matches=function(e,t){return"string"==typeof e&&(e=e.trim(),e.toLowerCase().indexOf(t.toLowerCase())>=0)}}t.exports=new n},{}],7:[function(e,t,r){"use strict";function n(e){o.pattern=e.pattern||o.pattern,o.template=e.template||o.template,"function"==typeof e.middleware&&(o.middleware=e.middleware)}function i(e){return o.template.replace(o.pattern,function(t,r){var n=o.middleware(r,e[r],o.template);return void 0!==n?n:e[r]||t})}t.exports={compile:i,setOptions:n};var o={};o.pattern=/\{(.*?)\}/g,o.template="",o.middleware=function(){}},{}],8:[function(e,t,r){!function(t,r,n){"use strict";function i(e){g.put(e),c()}function o(e){y.load(e,function(t,r){t&&d("failed to get JSON ("+e+")"),i(r)})}function a(){h.resultsContainer.innerHTML=""}function s(e){h.resultsContainer.innerHTML+=e}function c(){h.searchInput.addEventListener("keyup",function(e){a();var t=e.which,r=e.target.value;f(t)&&l(r)&&u(g.search(r))})}function u(e){if(0===e.length)return s(h.noResultsText);for(var t=0;t<e.length;t++)s(m.compile(e[t]))}function l(e){return e&&e.length>0}function f(e){return[13,16,20,37,38,39,40,91].indexOf(e)===-1}function d(e){throw new Error("SimpleJekyllSearch --- "+e)}var h={searchInput:null,resultsContainer:null,json:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',templateMiddleware:function(){},noResultsText:"No results found",limit:10,fuzzy:!1,exclude:[]},p=["searchInput","resultsContainer","json"],m=e("./Templater"),g=e("./Repository"),y=e("./JSONLoader"),w=e("./OptionsValidator")({required:p}),S=e("./utils");t.SimpleJekyllSearch=function(e){var t=w.validate(e);t.length>0&&d("You must specify the following required options: "+p),h=S.merge(h,e),m.setOptions({template:h.searchResultTemplate,middleware:h.templateMiddleware}),g.setOptions({fuzzy:h.fuzzy,limit:h.limit}),S.isJSON(h.json)?i(h.json):o(h.json)},t.SimpleJekyllSearch.init=t.SimpleJekyllSearch,"function"==typeof t.SimpleJekyllSearchInit&&t.SimpleJekyllSearchInit.call(this,t.SimpleJekyllSearch)}(window,document)},{"./JSONLoader":2,"./OptionsValidator":3,"./Repository":4,"./Templater":7,"./utils":9}],9:[function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)r[n]=e[n],void 0!==t[n]&&(r[n]=t[n]);return r}function i(e){try{return!!(e instanceof Object&&JSON.parse(JSON.stringify(e)))}catch(e){return!1}}t.exports={merge:n,isJSON:i}},{}]},{},[8]);var launcher=document.querySelector(".flaticon-search"),searchSection=document.querySelector(".search"),inputSearch=document.querySelector("#search"),quitSearch=document.querySelector("#quit-search"),searchActive=!1;launcher.addEventListener("click",function(){searchSection.style.height="100vh",searchActive=!0}),quitSearch.addEventListener("click",function(){searchSection.style.height="0",searchActive=!1}),SimpleJekyllSearch({searchInput:document.getElementById("search"),resultsContainer:document.getElementById("results-container"),json:"/search.json",searchResultTemplate:'<li><a href="{url}">{title}</a></li>',noResultsText:"<span>Ops! Anything was found, try again!"});