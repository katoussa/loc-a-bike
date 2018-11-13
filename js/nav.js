var menu = {
    init: function(id, navId, idBurger, burger, cross){
        menu.id = id;
        menu.navId = navId;
        menu.idBurger = idBurger;
        menu.burger = burger;
        menu.cross = cross;
        menu.close = true;

        menu.onClick();
    },
    
    onClick: function(){
        $(menu.burger).on("click", function(){
            if(menu.close = true){
                document.querySelector(menu.idBurger).className = "cross";
                document.querySelector(menu.navId).className = "nav2";
                console.log(menu.close);
            }
            else{
            document.querySelector(menu.idBurger).className = "burger";
            document.querySelector(menu.navId).className = "nav2";
            console.log(menu.close);
            };
        });
    }
};
