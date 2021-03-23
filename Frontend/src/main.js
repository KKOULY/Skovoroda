$("#openMenuButton").click(function () {
   if($("#menu").hasClass("menuHidden")) {
      $("#menu").removeClass("menuHidden");
      $("#menu").addClass("menuVisible");
   } else {
      $("#menu").removeClass("menuVisible");
      $("#menu").addClass("menuHidden");
   }
});