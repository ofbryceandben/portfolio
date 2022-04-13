const targetElement=document.querySelector("#lightBox");bodyScrollLock.disableBodyScroll(targetElement),bodyScrollLock.enableBodyScroll(targetElement);var copy=document.getElementById("date");copy.innerHTML=(new Date).getFullYear(),$(window).on("load",(function(){$("#loading").fadeOut(1e3)}));var slider=document.getElementById("toggle");function banner(){var e=$("#memojiBox img").eq(0);e.show();var t=e.next();setInterval((function(){$(".head em").addClass("switch"),t.fadeIn(),e.hide(),$("#i1").animate({left:0},1e3),$("#i2").delay(300).animate({left:0},1e3),$("#i3").delay(600).animate({left:0},1e3),$("#bnrArrw").delay(3e3).animate({opacity:100},1e3)}),2e3)}slider.oninput=function(){slider.value>=50&&(bodyScrollLock.enableBodyScroll(targetElement),slider.value=100,$("#switchBulb").css({display:"none"}),$("#lightBox").delay(500).fadeOut(1500),banner())},slider.onclick=function(){slider.value=100,slider.value>=50&&(bodyScrollLock.enableBodyScroll(targetElement),$("#lightBox").delay(500).fadeOut(1500),banner())},$(document).ready((function(){function e(){$(".section").each((function(){var e=$(window).scrollTop(),t=$("#proj").offset().top;switch(!0){case e>0&&e<150||e>1600:$("#proj1").removeClass("projInLeft"),$("#proj3").removeClass("projInLeft"),$("#proj2").removeClass("projInRight");break;case t<e+$(window).height()-100:$("#proj1").addClass("projInLeft"),$("#proj3").addClass("projInLeft"),$("#proj2").addClass("projInRight"),$("#projArrw").attr("href","#abt").removeClass("up"),$(".arrwTrig").delay(1e3).animate({opacity:100},4e3)}}))}$("#lightBox").is(":visible")&&bodyScrollLock.disableBodyScroll(targetElement),$("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,(function(){window.location.hash=t}))}})),$(".switch").on("click",(function(){bodyScrollLock.enableBodyScroll(targetElement),slider.value=100,$("#switchBulb").css({display:"none"}),$("#lightBox").delay(500).fadeOut(1500),banner()})),e(),$(window).scroll(e),$("#modalBtn").on("click",(function(){$("#modal").fadeOut(300),bodyScrollLock.enableBodyScroll(targetElement)})),$(".projCont").each((function(){$(this).on("click",(function(){switch(bodyScrollLock.disableBodyScroll(targetElement),!0){case 1===$(this).data("proj"):$(".modalImage").css({background:"url(img/sunrain.png)"}),$("#gitHub").css({display:"block"}),$("#modalDesc").html("<strong>//</strong> Come explore my sassy Weather Application I created. <strong>This application uses jQuery and OpenWeather API</strong> to create a fun experience while the user explores the weather in different cities."),$("#modalHeader").text("Weather Application"),$("#liveSite").attr("href","https://brycemaloney.ca/weather-app/").attr("title","Link the Weather Application").attr("alt","Link the Weather Application"),$("#gitHub").attr("href","https://github.com/ofbryceandben/weather-app").attr("title","Link to Weather Application Documents on GitHub.").attr("alt","Link to Weather Application Documents on GitHub.");break;case 2===$(this).data("proj"):$(".modalImage").css({background:"url(img/chefwhites.png)"}),$("#modalDesc").html("<strong>//</strong> Check out my demo-site of Chef Whites. Chef Whites is a Charity Apparel company that focuses on the Restaurant Industry Workers. <strong>This site was made using WordPress & the Woostify Theme.</strong>"),$("#modalHeader").text("Chef Whites"),$("#liveSite").attr("href","https://chefwhites.brycemaloney.ca").attr("title","Chef Whites Landing Page"),$("#gitHub").css({display:"none"});break;case 3===$(this).data("proj"):$(".modalImage").css({background:"url(img/mules-bg.png)"}),$("#gitHub").css({display:"block"}),$("#modalDesc").html('<strong>//</strong> Metro Vancouver\'s next Grocery App! Meals on Mules was created with our Designers <a href="https://www.linkedin.com/in/eleanorhanna-newmediadesign-bcit/" target="_blank" title="Link to Eleanor Hanna\'s LinkedIn Page">Eleanor</a>, <a href="https://www.linkedin.com/in/nicolemaasmediaandwebdesign/" target="_blank" title="Link to Nicole Cassandra\'s LinkedIn Page">Nicole</a> & <a href="https://www.linkedin.com/in/kelleemilne-bcit-newmedia-uiux-digitalmarketing/" target="_blank" title="Link to Kellee Milne\'s LinkedIn Page">Kellee</a>, and our Back-End Developer <a href="https://www.linkedin.com/in/megankrenbrink-developer/" target="_blank" title="Link to Megan Krenbrink\'s LinkedIn Page">Megan</a>.'),$("#modalHeader").text("Meals on Mules"),$("#liveSite").attr("href","https://brycemaloney.ca/meals-on-mules.mp4").attr("title","Link to App Recording"),$("#gitHub").attr("href","https://github.com/ofbryceandben/meals-on-mules-app").attr("title","Link to GitHub Repository")}$("#modal").fadeIn().css({display:"flex"})}))}))}));