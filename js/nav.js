var menu = {
    init: function(id, navId, idBurger, burger, cross){
        menu.id = id;
        menu.navId = navId;
        menu.idBurger = idBurger;
        menu.burger = burger;
        menu.cross = cross;
        menu.close = true;

        //Appel des méthodes
        menu.onTap();
        menu.onClick();
    },
    
    //Déroulement menu au click
    onClick: function(){
        $(menu.burger).on("click", function(){
            document.querySelector(menu.idBurger).className = menu.close ? "cross" : "burger";
            document.querySelector(menu.navId).className = menu.close ? "nav2" : "nav";
            menu.close = !menu.close;
        });
    },

    //Déroulement menu swipe
    onTap: function(){
        //Swipedown pour ouvrir le menu
        $(menu.burger).on("swipedown", function(){
            if(menu.close === true){
                document.querySelector(menu.idBurger).className = "cross";
                document.querySelector(menu.navId).className = "nav2" ;
                menu.close = false;
            }
        });
        //Swipeup pour ouvrir le menu
        $(menu.burger).on("swipeup", function(){
            if(menu.close === false){
                document.querySelector(menu.idBurger).className = "burger";
                document.querySelector(menu.navId).className = "nav" ;
                menu.close = true;
            }
        });
    }
};
