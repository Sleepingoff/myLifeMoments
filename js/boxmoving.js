$(document).ready(function(){
    const movingBox = $("ul.wrap");
    //html 태그 추가하기
    $("ul.wrap").wrap("<div class='boxwrap'></div>");
    $("div.boxwrap").prepend("<button class='prev'></button>");
    $("div.boxwrap").append("<button class='next'></button>");
    $("ul.wrap .box:first-child").addClass("currentbox");

});