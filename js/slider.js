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
    slider.imgNbre = -1;
    slider.nbreImg = imgs.length;
  
    slider.clickBtn();
    slider.nextImg();
    slider.autoSlide();
    slider.playPause();
    slider.prevImg();
    slider.onClick();
    slider.onKeyboard();
    slider.onSwipe();
  },

  clickBtn: function(){
        $(slider.button).on("click", function(){
            console.log("btnSlider est clické!");
        });
  },

  nextImg: function(){
    ++slider.imgNbre;
    if (slider.imgNbre > slider.nbreImg - 1) {
      slider.imgNbre = 0;
    }
    if (slider.imgNbre < 0) {
      slider.imgNbre = slider.nbreImg + 1;
    }
    document.querySelector(slider.slide).src = slider.imgs[slider.imgNbre];
    return false;    
  },

  autoSlide: function(){
    slider.auto = setInterval(slider.nextImg, slider.time);
  },

  playPause: function() {
    if (slider.auto) {
      clearInterval(slider.auto);
      slider.auto = null;
      document.getElementById(slider.pauseBtn).className = "playBtn";
    } else {
      slider.auto = setInterval(slider.nextImg, slider.time);
      document.getElementById(slider.pauseBtn).className = "pauseBtn";
    }
    return false;
  },

  prevImg: function(){
    if (slider.imgNbre > 0) {
      slider.imgNbre = slider.imgNbre - 1;
    }
    if (slider.imgNbre === 0) {
      slider.imgNbre = slider.nbreImg -1;
    }
    document.querySelector(slider.slide).src = slider.imgs[slider.imgNbre];
    return false;
  },

  onClick: function(){
    $(slider.nextBtn).on("click", function(){
      slider.nextImg();
    });
    $(slider.prevBtn).on("click", function(){
      slider.prevImg();
    });
    $('#' + slider.pauseBtn).on("click", function(){
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
