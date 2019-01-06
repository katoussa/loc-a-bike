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
            if(sign.click){
                // dessiner des point
                sign.ctx.beginPath();
                sign.ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI, false);
                sign.ctx.fillStyle = '#000';
                sign.ctx.fill();
            }else if(!sign.click){

            };
        }.bind(sign));
        
    },

    drawOnClick: function(){
        sign.canvas.addEventListener('mousedown', function(){
            sign.click = true;
        });
    },
    
    stopDraw: function(){
        sign.canvas.addEventListener('mouseup', function(){
            sign.click = false;
        });
    },

    deleteDraw: function(){
        sign.clear.addEventListener('click', function(){
            sign.ctx.clearRect(0, 0, sign.canvas.width, sign.canvas.height);
        });
    }

}