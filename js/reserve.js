var reserve = {
    init: function(validBtn, footerText, name, firstname, stationListe){
        reserve.validBtn = validBtn;
        reserve.footerText = footerText;
        reserve.name = name;
        reserve.firstname = firstname;
        stations.stations = stationListe;

        reserve.afficheReserve();

    },

    afficheReserve: function(i){
        reserve.validBtn.addEventListener("click", function(){
            reserve.footerText.innerHTML = reserve.name.value + " " + reserve.firstname.value + " a réservé 1 vélo à la station " + stations.stations[i].name;
        });
    }

}