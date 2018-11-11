var form = {
    init: function(button){
        this.button = button;
        $(this.button).on("click", function(){
            console.log("btnForm est clické!");
        });
    }
};