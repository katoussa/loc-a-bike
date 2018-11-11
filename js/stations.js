var stations = {
    init: function(button){
        this.button = button;
        $(this.button).on("click", function(){
            console.log("btnStations est clické!");
        });
    }
};