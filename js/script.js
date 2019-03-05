$(document).ready(function(){
	var btn = $(".btn");
	var lines = $(".lines");
	var menu = $(".menu");
	var userinfo = $(".user-info");
    var user = $(".user");

	btn.click(function(){
       lines.toggleClass("lineactive");
       menu.toggleClass("menuactive");
       userinfo.removeClass("useractive");
	});
	user.click(function(){
		userinfo.toggleClass("useractive");
		menu.removeClass("menuactive");
		lines.removeClass("lineactive");
	});

     var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("header").style.top = "0";

      } else {
            document.getElementById("header").style.top = "-60px";
            lines.removeClass("lineactive");
            userinfo.removeClass("useractive");
            menu.removeClass("menuactive");
      }

      prevScrollpos = currentScrollpos;

      }
	


});

     