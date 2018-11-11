var map = {
    init: function(button){
        this.button = button;
        $(this.button).on("click", function(){
            console.log("btnMap est clické!");
        });
    }
};