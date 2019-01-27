var slider = {
  init: function(slideshow, slideText, slide, prevBtn, nextBtn, pauseBtn, imgText, imgs, time){
    slider.slideshow = slideshow;
    slider.slideText = slideText;
		slider.slide = slide;
    slider.prevBtn = prevBtn;
    slider.nextBtn = nextBtn;
		slider.pauseBtn = pauseBtn;
		slider.imgText = imgText;
    slider.imgs = imgs;
    slider.time = time;
		slider.i = 0;
		slider.nbreImg = slider.imgs.length;
  
    //Appel des méthodes
    slider.onKeyboard();
    slider.onSwipe();
    slider.autoSlide();
    slider.onClick();
  },

  // Méthode de défilement vers image suivante
  nextImg: function(){
    slider.i++;
    if(slider.i > slider.nbreImg - 1) {
      slider.i = 0;
    };
    if(slider.i < 0) {
      slider.i = slider.nbreImg + 1;
    };
    slider.slide.src = slider.imgs[slider.i]; 
		slider.slideText.innerHTML = slider.imgText[slider.i];
  },

  // Méthode de défilement auto
  autoSlide: function(){
    slider.auto = setInterval(slider.nextImg, slider.time);
  },

  //Méthode play / pause
  playPause: function() {
    if(slider.auto) {
      clearInterval(slider.auto);
      slider.auto = null;
      slider.pauseBtn.className = "playBtn";
    }else{
      slider.auto = setInterval(slider.nextImg, slider.time);
      slider.pauseBtn.className = "pauseBtn";
    };
  },

  //Méthode de défilement vers image précédente
  prevImg: function(){
    slider.i--;
    if (slider.i > 0) {
      slider.i = slider.i -1;
    }
    if (slider.i < 0) {
      slider.i = slider.nbreImg -1;
    };
    slider.slide.src = slider.imgs[slider.i];
    slider.slideText.innerHTML = slider.imgText[slider.i];  
  },

  //Méthode de click sur boutons
  onClick: function(){
    slider.nextBtn.on("click", function(){
      slider.nextImg();
    });
    slider.prevBtn.on("click", function(){
      slider.prevImg();
    });
    pauseBtn.on("click", function(){
      slider.playPause();
    });
  },

  //Méthode évènement touches clavier
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

  //Méthode défilement + play / pause évènements tactiles
  onSwipe: function(){
    slider.slideshow.on("swiperight", function(){
      slider.prevImg();
    });
    slider.slideshow.on("swipeleft", function(){
      slider.nextImg();
    });
    slider.slideshow.on("tap", function(){
      slider.playPause();
    });
  }

};
