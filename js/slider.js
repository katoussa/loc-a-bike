var slider = {
  init: function(id, slide, prevBtn, nextBtn, pauseBtn, imgs, time, button){
    slider.id = id;
    slider.slide = slide;
    slider.prevBtn = prevBtn;
    slider.nextBtn = nextBtn;
    slider.pauseBtn = pauseBtn;
    slider.imgs = imgs;
    slider.time = time;
    slider.button = button;
    slider.indexImg = -1;
    slider.nbreImg = imgs.length;
  
    slider.onClick();
    slider.onKeyboard();
    slider.onSwipe();
    /*slider.clickBtn();*/
    slider.autoSlide();
  },

  clickBtn: function(){
        $(slider.button).on("click", function(){
            console.log("btnSlider est clické!");
        });
  },

  nextImg: function(){
    slider.indexImg++;
    if(slider.indexImg > slider.nbreImg - 1) {
      slider.indexImg = 0;
    };
    if(slider.indexImg < 0) {
      slider.indexImg = slider.nbreImg + 1;
    };
    document.querySelector(slider.slide).src = slider.imgs[slider.indexImg];  
  },

  autoSlide: function(){
    slider.auto = setInterval(slider.nextImg, slider.time);
  },

  playPause: function() {
    if(slider.auto) {
      clearInterval(slider.auto);
      slider.auto = null;
      document.querySelector(slider.pauseBtn).className = "playBtn";
      console.log("pause");
      console.log(slider.auto);
    }else{
      slider.auto = setInterval(slider.nextImg, slider.time);
      document.querySelector(slider.pauseBtn).className = "pauseBtn";
      console.log("play");
    };
  },

  prevImg: function(){
    if (slider.indexImg > 0) {
      slider.indexImg = slider.indexImg - 1;
    }
    if (slider.indexImg < 0) {
      slider.indexImg = slider.nbreImg -1;
    };
    document.querySelector(slider.slide).src = slider.imgs[slider.indexImg];
  },

  onClick: function(){
    $(slider.nextBtn).on("click", function(){
      slider.nextImg();
    });
    $(slider.prevBtn).on("click", function(){
      slider.prevImg();
    });
    $(slider.pauseBtn).on("click", function(){
      slider.playPause();
    });
  },

  onKeyboard: function (){
    $('body').on("keydown", function(e){
      switch(e.keyCode){
        case 37: // prev
          slider.prevImg();
          break;
        case 39: // next
          slider.nextImg();
          break;
        case 32: // space
          slider.playPause();
          break;
      };
    });
  },

  onSwipe: function(){
    $(slider.id).on("swiperight", function(){
      slider.prevImg();
    });
    $(slider.id).on("swipeleft", function(){
      slider.nextImg();
    });
    $(slider.id).on("tap", function(){
      slider.playPause();
    });
  }

};
