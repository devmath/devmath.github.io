function lockBody(){return body[0].style.overflow="hidden",!0}function unlockBody(){return body[0].style.overflowY="scroll",!0}function checkPage(e){return body[0].className.indexOf(e)!==-1}var window_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,body=document.getElementsByTagName("body"),projects_data=[{name:"mustang.js",slug:"mustang-js",desc:"A simple jQuery slider",working:!1,link:!1,github:"https://github.com/mhernandes/mustang-js"},{name:"shield-scss",slug:"shield-scss",desc:"Simple SCSS files that I use on my work",working:!0,link:!1,github:"https://github.com/mhernandes/shield-scss"},{name:"keyguard",slug:"keyguard",desc:"Simple password manager, just for practice",working:!1,link:!1,github:"https://github.com/mhernandes/keyguard"},{name:"start-user",slug:"start-user",desc:"A cool form that create a new user(ie Admin) to a table just for test any thing",working:!0,link:!1,github:"https://github.com/mhernandes/start-user"},{name:"diametrum",slug:"diametrum",desc:"Diametrum is a cool and simple Jekyll theme, enjoy it!",working:!1,link:!1,github:"https://github.com/mhernandes/diametrum"},{name:"favorite-articles",slug:"favorite-articles",desc:"List with my favorite articles",working:!0,link:!1,github:"https://github.com/mhernandes/favorite-articles"},{name:"front-challenges",slug:"front-challenges",desc:"Cool list with some front end challenges",working:!0,link:!1,github:"https://github.com/mhernandes/front-challenges"},{name:"storage-calc",slug:"storage-calc",desc:"Calculate how many files fit on your storage",working:!0,link:"http://mhernandes.github.io/storage-calc",github:"https://github.com/mhernandes/storage-calc"}];if(checkPage("home")){var about__intro=document.getElementsByClassName("about__intro");window_width>1024&&window.addEventListener("scroll",function(){var e=250-window.pageYOffset/2;window.pageYOffset/2==0&&(e=0),about__intro[0].style.marginTop="-"+e+"px"})}if(!checkPage("article")){var header=document.getElementsByClassName("header"),header__wrapper=header[0].querySelector(".header__wrapper");window.addEventListener("scroll",function(){header__wrapper.style.paddingTop=window.pageYOffset/2+"px"})}var menu=document.getElementsByClassName("menu"),menu__icon=menu[0].childNodes[1],menu__search=menu[0].childNodes[3],menu__wrapper=menu[0].childNodes[5],menu__close=menu__wrapper.querySelector(".menu__wrapper_close"),search=document.getElementsByClassName("search"),search_title=document.getElementsByClassName("search__form_title"),close_search=search_title[0].childNodes[1];menu__icon.addEventListener("click",function(){menu__wrapper.className.indexOf("active")==-1&&(menu__wrapper.className+=" active")}),window_width<760&&(menu__close=menu__wrapper.childNodes[1].childNodes[1]),menu__close.addEventListener("click",function(){menu__wrapper.className="menu__wrapper"}),menu__search.addEventListener("click",function(){search[0].style.marginTop=0,lockBody()}),close_search.addEventListener("click",function(){search[0].style.marginTop="-100vh",unlockBody()});var projects={settings:{},next:function(arguments){},previous:function(e){},startInterval:function(){}};if(checkPage("home")||checkPage("about")){var projects_section=checkPage("home")?document.getElementsByClassName("projects"):document.getElementsByClassName("about__projects");if(checkPage("home")?projects_data.forEach(function(e,t){var n=document.createElement("article"),a=document.createElement("a"),i=document.createElement("h1"),s=document.createElement("a"),r=document.createElement("ul"),o=e.link!==!1?new Array:document.createElement("li"),c=document.createElement("a");i.textContent=e.name,a.appendChild(i),a.setAttribute("href",e.github),a.setAttribute("target","_blank"),a.className="projects__item_title",s.textContent=e.desc,s.setAttribute("href",e.github),s.setAttribute("target","_blank"),s.className="projects__item_intro",o.constructor===Array?(o[0]=document.createElement("li"),c.setAttribute("href",e.github),c.setAttribute("target","_blank"),c.setAttribute("icon","github"),o[0].appendChild(c),o[1]=document.createElement("li"),c=document.createElement("a"),c.setAttribute("href",e.link),c.setAttribute("target","_blank"),c.setAttribute("icon","link"),o[1].appendChild(c),r.appendChild(o[0]),r.appendChild(o[1])):(o=document.createElement("li"),c.setAttribute("href",e.github),c.setAttribute("target","_blank"),c.setAttribute("icon","github"),o.appendChild(c),r.appendChild(o)),r.className="projects__item_list",n.appendChild(a),n.appendChild(s),n.appendChild(r),n.setAttribute("project",e.slug),n.setAttribute("title",e.name),n.className="projects__item",projects_section[0].appendChild(n)}):projects_data.forEach(function(e,t){var n=document.createElement("li"),a=document.createElement("a"),i=document.createElement("h3"),s=projects[0].querySelector(".about__projects_list");n.className="about__projects_list-item",a.setAttribute("href",e.github),a.setAttribute("target","_blank"),a.setAttribute("title",e.name),i.textContent=e.name,a.appendChild(i),n.appendChild(a),s.appendChild(n)}),checkPage("home")){for(var projects__item=projects_section[0].getElementsByClassName("projects__item"),item_width=projects__item[0].clientWidth,new_width=total_width=item_counter=displayed=0,total_items=projects__item.length,i=0;i<projects__item.length;i++)total_width+=projects__item[i].clientWidth;window_width>1280?displayed=4:window_width>760?displayed=3:displayed=0,total_width>=window_width&&setInterval(function(){if(new_width+=item_width,item_counter++,item_counter<total_items-displayed)for(var e=0;e<projects__item.length;e++)projects__item[e].style.transform="translateX(-"+new_width+"px)";else for(var e=0;e<projects__item.length;e++)projects__item[e].style.transform="translateX(0)",new_width=item_counter=0},3e3)}}