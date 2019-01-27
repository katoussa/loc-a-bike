var infos = {
    init: function(stationsListe, stationName, stationAdress, dispoBike, dispoPlace, formInvisible, noBikes){
        infos.stationName = stationName;
        infos.stationAdress = stationAdress;
        infos.dispoBike = dispoBike;
        infos.dispoPlace = dispoPlace;
        infos.formInvisible = formInvisible;
        infos.noBikes = noBikes;
        stations.stations = stationsListe;
    },
    afficheInfo: function(i){ //affiche infos de station onClick btnInfo
        infos.stationName.innerHTML= "<span class='bolt'>Nom de la station: </span>" + stations.stations[i].name;
        infos.stationAdress.innerHTML= "<span class='bolt'>Adresse: </span>" + stations.stations[i].address;
        infos.dispoBike.innerHTML= "<span class='bolt'>Nombre de vélos disponibles: </span>" + stations.stations[i].available_bikes;
        infos.dispoPlace.innerHTML= "<span class='bolt'>Nombre de places disponibles: </span>" + stations.stations[i].available_bike_stands;
        
        reserve.station = stations.stations[i];
        
        if(stations.stations[i].available_bikes > 0){ //si vélo dispos entrer nom + prénom
            infos.formInvisible.className = "formVisible";
            infos.noBikes.className = "noBikes";
        }else{ //sinon affiche "pas de vélos dispos"
            infos.noBikes.className = "noBikesVisible";
            infos.formInvisible.className = "formInvisible";
        };
    }
};