var reserve = {
    init: function(validBtn, footerText, name, firstname, station){
        reserve.validBtn = validBtn;
        reserve.footerText = footerText;
        reserve.name = name;
        reserve.firstname = firstname;
        reserve.station = station;

        reserve.afficheReserve();

    },

    afficheReserve: function(i){
        reserve.validBtn.addEventListener("click", function(){
            console.log(reserve.station.name);
            reserve.footerText.innerHTML = "Un vélo est réservé au nom de " + reserve.name.value + " " + reserve.firstname.value + " à la station " + reserve.station.name;
            reserve.station.available_bikes--;
            console.log("vélos dispos: " + reserve.station.available_bikes);
        });
    }

}