var sign = {
    init: function(canvas, ctx, img, clear, pts, btn){
        sign.canvas = canvas;
        sign.ctx = ctx;
        sign.img = img;
        sign.clear = clear;
        sign.pts = pts;
        sign.btn = btn;

        sign.createCtx();
        sign.drawOnClick();
        sign.drawOnTouch();
        sign.stopDraw();
        sign.stoDrawOnTouch();
        sign.makeDraw();
        sign.makeDrawTouch();
        sign.deleteDraw();
        sign.enableValid();
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
            if(sign.click){ //créer des lignes
                sign.ctx.lineTo(e.offsetX, e.offsetY);
                sign.ctx.stroke();           
                sign.ctx.beginPath(); 
                sign.ctx.moveTo(e.offsetX, e.offsetY);  
                sign.pts++;      
            };
        }.bind(sign));
    },

    makeDrawTouch: function(){
        sign.canvas.addEventListener('touchmove', function(e){
            if(sign.click){ //créer des lignes tactile
                var rect = sign.canvas.getBoundingClientRect();
                e.preventDefault();   
                var x = e.touches[0].clientX - rect.left;
                var y = e.touches[0].clientY - rect.top;
                sign.ctx.lineTo(x, y);
                sign.ctx.stroke(); 
                sign.ctx.beginPath();
                sign.ctx.moveTo(x, y);
                sign.pts++;    
            };
        }.bind(sign));
    },

    drawOnClick: function(){// faire un dessin
        sign.canvas.addEventListener('mousedown', function(){
            sign.click = true;
        });
    },

    drawOnTouch: function(){ //dessin tactile
        sign.canvas.addEventListener('touchstart', function(){
            sign.click = true;
        });
    },
    
    stopDraw: function(){ //arrêter le dessin
        sign.canvas.addEventListener('mouseup', function(){
            sign.click = false;           
            sign.ctx.beginPath(); 
            sign.enableValid();
        });
    },

    stoDrawOnTouch: function(){
        sign.canvas.addEventListener('touchend', function(){
            sign.click = false;           
            sign.ctx.beginPath(); 
            sign.enableValid();
        });
    },

    deleteDraw: function(){ //effacer le dessin
        sign.clear.addEventListener('click', function(){
            sign.noDraw();
        });
    },

    noDraw: function(){
        sign.ctx.clearRect(0, 0, sign.canvas.width, sign.canvas.height);
        sign.ctx.beginPath();
        sign.pts = 0;
    },

    enableValid: function(){
        if(sign.pts > 3){
            sign.btn.className = "visible";
        }else{
            sign.btn.className = "invisible";
        };
    }

}