$(document).ready(function(){
    const movingBox = $("ul.wrap");
    //html 태그 추가하기
    $(movingBox).wrap("<div class='boxwrap'></div>");
    $("div.boxwrap").prepend("<button class='prev'></button>");
    $("div.boxwrap").append("<button class='next'></button>");
    $("ul.wrap .box:first-child").addClass("currentBox");
    //button click count
    let clickCount = 0;
    let currentIndex = 1;
    const firstIndex = 1;
    const lastIndex = 5;
    const middleDistance = 80;
    const boxSize = 240;
    $(movingBox).css({"transform" : "translateX("+ middleDistance +"px)"});
    //button click event
    $("div.boxwrap button").click(function(){
        if($(this).hasClass("prev")){
            clickCount++;
            if(currentIndex <= firstIndex) clickCount = -lastIndex+1;
        }
        if($(this).hasClass("next")){
            clickCount--;
            if(currentIndex >= lastIndex) clickCount = firstIndex-1;
        }
        currentIndex = (-clickCount)+1;
        $(movingBox).css({"transform" : "translateX("+ (clickCount * boxSize + middleDistance) +"px)"});
        $("ul.wrap li.box:nth-child("+currentIndex+")").addClass("currentBox");
        $("ul.wrap li.box:nth-child("+currentIndex+")").siblings().removeClass("currentBox");
    });
});