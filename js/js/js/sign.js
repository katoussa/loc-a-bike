var signature = {
    init: function(button){
        this.button = button;
        $(this.button).on("click", function(){
            console.log("btnSign est clické!");
        });
    }
};