function lockBody(){return body[0].style.overflow="hidden",!0}function unlockBody(){return body[0].style.overflowY="scroll",!0}var window_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,body=document.getElementsByTagName("body"),about__intro=document.getElementsByClassName("about__intro");window_width>1024&&window.addEventListener("scroll",function(){var e=250-window.pageYOffset/2;window.pageYOffset/2==0&&(e=0),about__intro[0].style.marginTop="-"+e+"px"});var header=document.getElementsByClassName("header"),header__wrapper=header[0].querySelector(".header__wrapper");window.addEventListener("scroll",function(){header__wrapper.style.paddingTop=window.pageYOffset/2+"px"});var menu=document.getElementsByClassName("menu"),menu__icon=menu[0].childNodes[1],menu__search=menu[0].childNodes[3],menu__list=menu[0].childNodes[5],search=document.getElementsByClassName("search"),search_title=document.getElementsByClassName("search__form_title"),close_search=search_title[0].childNodes[1];menu__icon.addEventListener("click",function(){menu__list.className.indexOf("active")!==-1?menu__list.className="menu__list":menu__list.className+=" active"}),menu__search.addEventListener("click",function(){search[0].style.marginTop=0,lockBody()}),close_search.addEventListener("click",function(){search[0].style.marginTop="-100vh",unlockBody()}),window_width<760&&(menu__list.style.marginTop="-"+(menu__list.clientHeight+10)+"px");for(var projects=document.getElementsByClassName("projects"),projects__item=projects[0].getElementsByClassName("projects__item"),item_width=projects__item[0].clientWidth,new_width=total_width=item_counter=displayed=0,total_items=projects__item.length,i=0;i<projects__item.length;i++)total_width+=projects__item[i].clientWidth;window_width>1280?displayed=4:window_width>760?displayed=3:displayed=0,total_width>=window_width&&setInterval(function(){if(new_width+=item_width,item_counter++,item_counter<total_items-displayed)for(var e=0;e<projects__item.length;e++)projects__item[e].style.transform="translateX(-"+new_width+"px)";else for(var e=0;e<projects__item.length;e++)projects__item[e].style.transform="translateX(0)",new_width=item_counter=0},1e3);