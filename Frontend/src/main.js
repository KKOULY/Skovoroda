$("#openMenuButton").click(function () {
    if ($("#menu").hasClass("menuHidden")) {
        $("#menu").removeClass("menuHidden");
        $("#menu").addClass("menuVisible");
        $(".buttonInMenu").fadeIn(200);
    } else {
        $("#menu").removeClass("menuVisible");
        $("#menu").addClass("menuHidden");
        $(".buttonInMenu").fadeOut(200);
    }
});