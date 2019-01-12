var reserve = {
    init: function(validBtn, footerText, name, firstname, station, sec, min, timerP, annulBtn){
        reserve.validBtn = validBtn;
        reserve.footerText = footerText;
        reserve.name = name;
        reserve.firstname = firstname;
        reserve.station = station;
        reserve.sec = sec;
        reserve.min = min;
        reserve.timerP = timerP;
        reserve.annulBtn = annulBtn;

        reserve.reservation();
        reserve.annuleReservation();
    },

    reservation: function(){
        reserve.validBtn.addEventListener("click", function(){
            if(reserve.timer){
                reserve.notReservation();
                reserve.newReservation();
            }else{
                reserve.newReservation();
            };
        });
    },

    newReservation: function(){
        reserve.footerText.innerHTML = "Un vélo est réservé au nom de " + reserve.name.value + " " + reserve.firstname.value + " à la station " + reserve.station.name;
        reserve.annulBtn.className = "annulBtn1";
        reserve.station.available_bikes--;
        reserve.makeCountDown();
        reserve.stationRes = reserve.station;
    },

    makeCountDown: function(){
        reserve.sec = 01;
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
            reserve.annulBtn.className = "annulBtn";
        };
    },

    notReservation: function(){
        clearInterval(reserve.timer);
        reserve.stationRes.available_bikes++;
    },

    annuleReservation: function(){
        reserve.annulBtn.addEventListener("click", function(){
            reserve.notReservation();
        });
    }

};