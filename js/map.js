var map = {
    clickBtn: function(button){
        this.button = button;
        $(this.button).on("click", function(){
            console.log("btnMap est clické!");
        });
    },

    init: function(lat, lng){
        map.lat = lat;
        map.lng = lng;

        map.makeMap();
    },

    makeMap: function(){
        map.mapIs = L.map('map').setView([map.lat, map.lng], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(map.mapIs);
    },

    addMarkers: function(){

    }
};