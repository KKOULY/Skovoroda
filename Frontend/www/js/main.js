(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
