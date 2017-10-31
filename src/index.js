import  contenido  from './template'
let title = require('title')

class Template {
  constructor() {
    this.body = contenido.home
    this.title = 'Development'
    this.onClick()
    this.render()
    this.enrutador()
    this.scaleVideoContainer();
    this.video()
    this.initBannerVideoSize('.video-container .poster img');
    this.initBannerVideoSize('.video-container .filter');
    this.initBannerVideoSize('.video-container video');
    this.contenScroll();
  }

  onClick(){
    $(".nav-element").on('click', (event)=>{
      let seccion = $(event.currentTarget).data('href')
      this.body = this.enrutador(seccion)
      this.title = seccion
      this.render()
    })
  }
  render(){
    $('.body-container').html(this.body)
    title(this.title)
  }
  enrutador(ruta){
    if (ruta == "home") {
      return contenido.home
    } else if (ruta == "Sass") {
      return contenido.Sass
    } else {
        return contenido.Components
    }
  }

  scaleVideoContainer() {

      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height',unitHeight);

  }

  initBannerVideoSize(element){

      $(element).each(function(){
          $(this).data('height', $(this).height());
          $(this).data('width', $(this).width());
      });

      this.scaleBannerVideoSize(element);

  }

  scaleBannerVideoSize(element){

      var windowWidth = $(window).width(),
      windowHeight = $(window).height() + 5,
      videoWidth,
      videoHeight;

    console.log(windowHeight);

      $(element).each(function(){
          var videoAspectRatio = $(this).data('height')/$(this).data('width');

          $(this).width(windowWidth);

          if(windowWidth < 1000){
              videoHeight = windowHeight;
              videoWidth = videoHeight / videoAspectRatio;
              $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

              $(this).width(videoWidth).height(videoHeight);
          }

          $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

      });
  }
  video(){
    $(window).on('resize', function() {
        this.scaleVideoContainer();
        this.scaleBannerVideoSize('.video-container .poster img');
        this.scaleBannerVideoSize('.video-container .filter');
        this.scaleBannerVideoSize('.video-container video');
    });
  }
  contenScroll(){
    $(window).scroll(function() {
  if ($(window).scrollTop() > 80) {
    console.log('mayor')
  } else {
    console.log('menor')
  }
    });

  }
}

new Template()
