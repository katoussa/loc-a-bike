var reserve = {
    init: function(validBtn, footerText, name, firstname, station, sec, min, timerP){
        reserve.validBtn = validBtn;
        reserve.footerText = footerText;
        reserve.name = name;
        reserve.firstname = firstname;
        reserve.station = station;
        reserve.sec = sec;
        reserve.min = min;
        reserve.timerP = timerP;

        reserve.afficheReserve();
    },

    afficheReserve: function(){
        reserve.validBtn.addEventListener("click", function(){
            console.log(reserve.station.name);
            reserve.footerText.innerHTML = "Un vélo est réservé au nom de " + reserve.name.value + " " + reserve.firstname.value + " à la station " + reserve.station.name;
            reserve.station.available_bikes--;
            reserve.makeCountDown();
        });
    },

    makeCountDown: function(){
        reserve.sec = 00;
        reserve.min = 20;
        reserve.timer = setInterval(reserve.takeOffSec, 1000);
    },

    takeOffSec: function(){
        if(reserve.sec != 0){
            reserve.sec--;
        }else if(reserve.sec === 0){
            reserve.sec = 59;
            reserve.min--;
        };
        reserve.timerP.innerHTML = "Votre réservation est validée pour " + reserve.min + " minutes et " + reserve.sec + " secondes.";
        if(reserve.min === 0 && reserve.sec === 0){
            clearInterval(reserve.timer);
            reserve.footerText.innerHTML = "";
            reserve.timerP.innerHTML = "Le délai est écoulé, la réservation a pris fin.";
        };
    }

}