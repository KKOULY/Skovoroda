$("#openMenuButton").click(function () {
    if ($("#menu").hasClass("menuHidden")) {
        $("body").addClass("modal-open");
        $("#menu").removeClass("menuHidden");
        $("#menu").addClass("menuVisible");
        $(".buttonInMenu").fadeIn(200);
    } else {
        $("body").removeClass("modal-open");
        $("#menu").removeClass("menuVisible");
        $("#menu").addClass("menuHidden");
        $(".buttonInMenu").fadeOut(200);
    }
});