var sign = {
    init: function(canvas, ctx, img, clear){
        sign.canvas = canvas;
        sign.ctx = ctx;
        sign.img = img;
        sign.clear = clear;

        sign.createCtx();
        sign.drawOnClick();
        sign.stopDraw();
        sign.makeDraw();
        sign.deleteDraw();
    },

    createCtx: function(){
        if (sign.canvas.getContext) {
            sign.ctx = sign.canvas.getContext('2d');
          } else {
            alert("désolé, votre navigateur ne supporte pas canvas");
          };
    },

    makeDraw: function(){
        sign.canvas.addEventListener('mousemove', function(e){
            if(sign.click){ //créer des points et les relier
                sign.ctx.lineTo(e.offsetX, e.offsetY);
                sign.ctx.stroke();          
                sign.ctx.beginPath();
                sign.ctx.arc(e.offsetX, e.offsetY, 1, 0, Math.PI*2);
                sign.ctx.fill();
                sign.ctx.beginPath();
                sign.ctx.moveTo(e.offsetX, e.offsetY);          
            }else if(!sign.click){

            };
        }.bind(sign));
        
    },

    drawOnClick: function(){// faire un dessin
        sign.canvas.addEventListener('mousedown', function(){
            sign.click = true;
        });
    },
    
    stopDraw: function(){ //arrêter le dessin
        sign.canvas.addEventListener('mouseup', function(){
            sign.click = false;
        });
    },

    deleteDraw: function(){ //effacer le dessin
        sign.clear.addEventListener('click', function(){
            sign.ctx.clearRect(0, 0, sign.canvas.width, sign.canvas.height);
            sign.ctx.beginPath();
        });
    }

}