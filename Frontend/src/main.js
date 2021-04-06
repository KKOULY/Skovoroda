$(function () {
    var Shop = require('./Shop/shop');
    Shop.initialise();
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
        curs.style.zIndex = '10';
        curs.style.position = 'fixed';
        curs.style.pointerEvents = 'none';
        document.onmousemove = function(event){
            curs.style.left = event.clientX -9+'px';
            curs.style.top = event.clientY -9+'px';
        }
    }
    document.onmouseenter = function () {
        var curs = document.getElementById('curs');
        if(curs !== null)
            curs.style.visibility = 'visible';
    }
    document.onmouseleave = function () {
        var curs = document.getElementById('curs');
        curs.style.visibility = 'hidden';
    }
});

// $("#bioButton").click(function () {
//    window.location.href="http://localhost:5050/biography.html";
// });
// $("#artButton").click(function () {
// //   window.location.href=
//     alert("to do");
// });
// $("#bioButton").click(function () {
//    window.location.href="http://localhost:5050/biography.html";
// });
