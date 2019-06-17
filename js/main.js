var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0, 
    allowTouchMove	:false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },  
      breakpointsInverse: true,
      breakpoints: {        
        768: {
          slidesPerView: 3,
          
        },
        640: {
            slidesPerView: 2,
           
            allowTouchMove	:true,
          },
          320: {
            slidesPerView: 1,
            allowTouchMove	:true,
          
          }
    }
      
      
     
  });

  $(document).ready(function(){
    $('.fa-bars, .navbar--menu--link').click(function(){
      $('.navbar--menu').toggleClass('active');
    });
  });
