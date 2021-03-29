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

document.onmousemove = function (){
    document.getElementsByTagName('html')[0].insertAdjacentHTML('beforeEnd', '<img src="images/cursor.svg" id="curs">');
    var curs = document.getElementById('curs');
    curs.style.zIndex = '5';
    curs.style.position = 'fixed';
    curs.style.pointerEvents = 'none';
    document.onmousemove = function(event){
        curs.style.left = event.clientX -9+'px';
        curs.style.top = event.clientY -9+'px';
    }
}