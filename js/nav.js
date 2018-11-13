var menu = {
    init: function(id, navId, idBurger, burger, cross){
        menu.id = id;
        menu.navId = navId;
        menu.idBurger = idBurger;
        menu.burger = burger;
        menu.cross = cross;
        menu.close = true;

        menu.onTap();
        menu.onClick();
    },
    
    onClick: function(){
        $(menu.burger).on("click", function(){
            document.querySelector(menu.idBurger).className = menu.close ? "cross" : "burger";
            document.querySelector(menu.navId).className = menu.close ? "nav2" : "nav";
            menu.close = !menu.close;
        });
    },

    onTap: function(){
        $(menu.burger).on("swipe", function(){
            document.querySelector(menu.idBurger).className = menu.close ? "cross" : "burger";
            document.querySelector(menu.navId).className = menu.close ? "nav2" : "nav";
            menu.close = !menu.close;
        });
    }
};
