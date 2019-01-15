
var globalMain = {
    data: {
        slider: {
            slide: ".slide",
            slideText: ".slideText",
            prevBtn : "#prevBtn",
            nextBtn: "#nextBtn",
            pauseBtn: "#pauseBtn",
            imgText: [
                "Sur la carte, vous pouvez voir les stations de la ville.",
                "Les markers bleus indiquent les stations où au moins un vélo est disponible, les rouges celles où il n'y en a aucun.",
                "Vous pouvez cliquer sur la station de votre choix. Un popup contenant son nom s'ouvre.",
                "Cliquez sur le bouton 'plus d'infos' pour connaître les informations concernant cette station",
                "Si vous souhaitez réserver un vélo dans cette station, entrez votre nom et votre prénom, puis validez. Au moins trois caractères sont requis pour chacun.",
                "Signez. Vous pouvez effacer la signature. Sinon, validez.",
                "Une fois la réservation signée et validée, une confirmation et un compte à rebours s'affichent en-dessous de la carte.",
                " Vous pouvez annuler la réservation en cours. Une nouvelle réservation annule la précédente."
            ],
            imgs: ["img/br1.png",
                "img/br2.png",
                "img/br3.png",
                "img/br4.png",
                "img/br5.png",
                "img/br6.png",
                "img/br7.png",
                "img/br8.png"
            ],
            time: 5000
        },
        services: {
            url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=aafd8fb136e33eb56306745265f47b4f6770d3cb"
        },
        map: {
            lat: 45.765000,
            lng: 4.850000
        },
        stations: {
            stations: [],
            marker: [],
            icon: ".leaflet-marker-icon",
            imgSrc1: "https://cdn.pixabay.com/photo/2018/05/01/15/06/marker-3365838_960_720.png",
            imgSrc2: "https://pngimage.net/wp-content/uploads/2018/06/simbolo-de-ubicacion-png-6.png"
        },
        infos:{
            stationName: document.getElementById("stationName"),
            stationAdress: document.getElementById("stationAdress"),
            dispoBike: document.getElementById("dispoBike"),
            dispoPlace: document.getElementById("dispoPlace"),
            formInvisible: "formInvisible",
            noBikes: "noBikes"
        },
        form: {
            name: document.getElementById("name"),
            firstname: document.getElementById("firstname"),
            button: document.getElementById("btnForm"),
            messError1: document.getElementById("messError1"),
            messError2: document.getElementById("messError2"),
            setName: "",
            setFirstname: ""
        },
        sign: {
            signature: document.getElementById("signature"),
            canvas: document.getElementById("signCanvas"),
            ctx: "",
            img: "img/plume.png",
            clear: document.getElementById("clearSign"),
            pts: 0
        },
        reserve: {
            validBtn: document.getElementById("validSign"),
            footerText: document.getElementById("footerText"),
            station: "",
            sec: "",
            min: "",
            timerP: document.getElementById("countDown"),
            annulBtn: document.getElementById("annulBtn")
        }
    },
    methods: {
        init: function(){
            // Création des objets 
            var objSlider = Object.create(slider),
                objMap = Object.create(map),
                objServices = Object.create(services),
                objStations = Object.create(stations),
                objInfos = Object.create(infos),
                objForm = Object.create(form),
                objSign = Object.create(sign),
                objReserve = Object.create(reserve);
            
            objSlider.init(globalMain.data.slider.slideText, 
                globalMain.data.slider.slide,
                globalMain.data.slider.prevBtn,
                globalMain.data.slider.nextBtn,
                globalMain.data.slider.pauseBtn,
                globalMain.data.slider.imgText,
                globalMain.data.slider.imgs,
                globalMain.data.slider.time
            );

            objMap.init(
                globalMain.data.map.lat,
                globalMain.data.map.lng
            );

            objServices.getData(globalMain.data.services.url)
                .then(function(data) {
                    globalMain.data.stations.stations = data;
                    objStations.init(
                        globalMain.data.stations.stations,
                        globalMain.data.stations.marker,
                        globalMain.data.stations.icon,
                        globalMain.data.stations.imgSrc1,
                        globalMain.data.stations.imgSrc2
                    );
                    
                    objInfos.init(
                        globalMain.data.stations.stations,
                        globalMain.data.infos.stationName,
                        globalMain.data.infos.stationAdress,
                        globalMain.data.infos.dispoBike,
                        globalMain.data.infos.dispoPlace,
                        globalMain.data.infos.formInvisible,
                        globalMain.data.infos.noBikes
                    );
                    
                });

            objForm.init(
                globalMain.data.form.name,
                globalMain.data.form.firstname,
                globalMain.data.form.button,
                globalMain.data.form.messError1,
                globalMain.data.form.messError2,
                globalMain.data.form.setName,
                globalMain.data.form.setFirstname,
                globalMain.data.sign.signature
            );
            
            objSign.init(
                globalMain.data.sign.canvas,
                globalMain.data.sign.ctx,
                globalMain.data.sign.img,
                globalMain.data.sign.clear,
                globalMain.data.sign.pts,
                globalMain.data.reserve.validBtn
            );

            objReserve.init(
                globalMain.data.reserve.validBtn,
                globalMain.data.reserve.footerText,
                globalMain.data.form.name,
                globalMain.data.form.firstname,
                globalMain.data.reserve.station,
                globalMain.data.reserve.sec,
                globalMain.data.reserve.min,
                globalMain.data.reserve.timerP,
                globalMain.data.reserve.annulBtn,
                globalMain.data.sign.signature
            );
        }
    }
};

$(function(){
    globalMain.methods.init();
});