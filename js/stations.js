var stations = {
    init: function(stationsListe,marker, markers, icon, imgSrc1, imgSrc2) {
        stations.marker = marker;
        stations.markers = markers;
        stations.icon = icon;
        stations.imgSrc1 = imgSrc1;
        stations.imgSrc2 = imgSrc2;
        
        stations.addMarkers(stationsListe);
    },
    
    //Méthode de création des markers
    addMarkers: function(stationsListe){
        
        stations.blueIcon = L.icon({
            iconUrl: 'img/iconblue.png',
            iconSize:     [20, 35], // size of the icon
            iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        stations.redIcon = L.icon({
            iconUrl: 'img/iconred.png',
            iconSize:     [20, 35], // size of the icon
            iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        for(var i = 0; i < stationsListe.length; i++){
            if(stationsListe[i].available_bikes > 0){
                stations.marker = new L.marker(stationsListe[i].position, {icon: stations.blueIcon});
            }else{
                stations.marker = new L.marker(stationsListe[i].position, {icon: stations.redIcon});
            };
            map.markers.addLayer(stations.marker);
            stations.marker.bindPopup(stationsListe[i].name + '<br/>' + ("<button class='btnInfo' onclick='return infos.afficheInfo(" + i + ")' ontap='return infos.afficheInfo(" + i + ")'>+ d'infos</button>"));
        };
        map.mapIs.addLayer(stations.markers);
    }
    

};