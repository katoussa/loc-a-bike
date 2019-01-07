
var globalMain = {
    data: {
        menu: {
            id: ".navtop",
            navId: "#nav",
            idBurger: "#burger",
            burger: ".burger",
            cross: ".cross"
        },
        slider: {
            id: "#slider",
            slide: ".slide",
            prevBtn : "#prevBtn",
            nextBtn: "#nextBtn",
            pauseBtn: "#pauseBtn",
            imgs: ["img/bike-rental-1.jpg",
            "img/bike-rental-2.jpeg",
            "img/bike-rental-3.jpg",
            "img/bike-rental-4.jpg",
            "img/bike-rental-5.jpg",
            "img/bike-rental-6.jpg",
            "img/bike-rental-7.jpg"],
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
            clear: document.getElementById("clearSign")
        },
        reserve: {
            validBtn: document.getElementById("validSign"),
            footerText: document.getElementById("footerText")
        }
    },
    methods: {
        init: function(){
            // Création des objets 
            var objMenu = Object.create(menu),
                objSlider = Object.create(slider),
                objMap = Object.create(map),
                objServices = Object.create(services),
                objStations = Object.create(stations),
                objInfos = Object.create(infos),
                objForm = Object.create(form),
                objSign = Object.create(sign),
                objReserve = Object.create(reserve);
            
            objMenu.init(globalMain.data.menu.id,
                    globalMain.data.menu.navId,
                    globalMain.data.menu.idBurger,
                    globalMain.data.menu.burger,
                    globalMain.data.menu.cross
            );
                    
            objSlider.init(globalMain.data.slider.id, 
                globalMain.data.slider.slide,
                globalMain.data.slider.prevBtn,
                globalMain.data.slider.nextBtn,
                globalMain.data.slider.pauseBtn,
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
                globalMain.data.sign.clear
            );

            objReserve.init(
                globalMain.data.reserve.validBtn,
                globalMain.data.reserve.footerText,
                globalMain.data.form.name,
                globalMain.data.form.firstname
            )
        }
    }
};

$(function(){
    globalMain.methods.init();
});