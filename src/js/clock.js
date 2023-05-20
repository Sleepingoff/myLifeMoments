$(document).ready(function(){
    showDate();
    showClock();
    setInterval(showClock, 1000);
    setInterval(showDate, 8.64e+7);
    function showDate(){
        let month = new Date().getMonth() + 1;
        let date = new Date().getDate();
        month = month.toString().padStart(2, "0");
        date = date.toString().padStart(2, "0");
        $(".clock .h1").text(month+" / "+date);
    }
    function showClock(){
        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        hour = hour.toString().padStart(2, "0");
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");
        $(".clock .h3").text(hour+" : "+min+" : "+sec);
    }
});

