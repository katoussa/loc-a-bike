var reserve = {
    init: function(validBtn, footerText, name, firstname){
        reserve.validBtn = validBtn;
        reserve.footerText = footerText;
        reserve.name = name;
        reserve.firstname = firstname;

        reserve.afficheReserve();

    },

    afficheReserve: function(i){
        reserve.validBtn.addEventListener("click", function(){
            console.log(reserve.station.name);
            reserve.footerText.innerHTML = "Un vélo est réservé au nom de " + reserve.name.value + " " + reserve.firstname.value + " à la station " + reserve.station.name;
        });
    }

}