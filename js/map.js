var map = {
    
    // Initialisation de la map
    init: function(lat, lng, markers){
        map.lat = lat;
        map.lng = lng;

        //appel des méthodes
        map.makeMap();
        map.markers = markers;
    },

    //Méthode de création de la map
    makeMap: function(){
        map.mapIs = L.map('map').setView([map.lat, map.lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(map.mapIs);
    }

};
