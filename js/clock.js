$(document).ready(function(){
    showDate();
    showClock();
    setInterval(showClock, 1000);
    setInterval(showDate, 8.64e+7);
    function showDate(){
        let month = new Date().getMonth() + 1;
        let date = new Date().getDate();
        $(".clock .h1").text(month+" / "+date);
    }
    function showClock(){
        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        $(".clock .h3").text(hour+" : "+min+" : "+sec);
    }

});

