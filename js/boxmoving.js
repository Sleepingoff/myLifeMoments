$(document).ready(function(){
    const movingBox = $("ul.wrap");
    //html 태그 추가하기
    $(movingBox).wrap("<div class='boxwrap'></div>");
    $("div.boxwrap").prepend("<button class='prev'></button>");
    $("div.boxwrap").append("<button class='next'></button>");
    $("ul.wrap .box:first-child").addClass("currentBox");
    $("ul.wrap .box:first-child").siblings().addClass("blurEffect");
    $("ul.wrap .box:first-child").siblings().children().attr("disabled","disabled");
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
        let boxChild = $("ul.wrap li.box:nth-child("+currentIndex+")");
        $(movingBox).css({"transform" : "translateX("+ (clickCount * boxSize + middleDistance) +"px)"});
        $(boxChild).removeClass("blurEffect").addClass("currentBox")
        $(boxChild).children().removeAttr("disabled");
        $(boxChild).siblings().removeClass("currentBox").addClass("blurEffect")
        $(boxChild).siblings().children("button").attr("disabled", true);
        $(boxChild).siblings().children("input").attr("disabled", true);
    });
});