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
            time: 5000,
            btn: "#btnSlider"
        },

        map: {
            button: "#btnMap"
        },

        stations: {
            button: "#btnStations"
        },

        form: {
            button: "#btnForm"
        },

        signature: {
            button: "#btnSign"
        }
    },

    methods: {
        init: function(){
            menu.init(globalMain.data.menu.id,
                        globalMain.data.menu.navId,
                        globalMain.data.menu.idBurger,
                        globalMain.data.menu.burger,
                        globalMain.data.menu.cross);
            slider.init(globalMain.data.slider.id, 
                globalMain.data.slider.slide,
                globalMain.data.slider.prevBtn,
                globalMain.data.slider.nextBtn,
                globalMain.data.slider.pauseBtn,
                globalMain.data.slider.imgs,
                globalMain.data.slider.time,
                globalMain.data.slider.btn);
            map.init(globalMain.data.map.button);
            stations.init(globalMain.data.stations.button);
            form.init(globalMain.data.form.button);
            signature.init(globalMain.data.signature.button);
        }
    }
};

$(function(){
    globalMain.methods.init();
});