$(function(){

$('.header-slider').slick({
   prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-top.svg" alt="prev"></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-bottom.svg" alt="next"></button>',
dots: true,
vertical: true,
responsive: [
   {
      breakpoint:371,
      settings:{
         dots:false,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 2000,
      }
   }
]
});

$('.product__name').slick({
   prevArrow: '<button type="button" class="product-prev"><img src="images/product-top.svg" alt="prev"></button>',
   nextArrow: '<button type="button" class="product-next"><img src="images/product-bottom.svg" alt="next"></button>',
   slidesToShow: 6,
   slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
   asNavFor: '.product__content',
   responsive: [
      {
         breakpoint:1110,
         settings:{
            vertical: false,
            slidesToShow: 3,
            arrows: false,
            centerMode: false,
            dots: true,
         }
   },
   {
      breakpoint:461,
      settings:{
         vertical: false,
         slidesToShow: 1,
         arrows: false,
         centerMode: false,
         dots: true,
      }
}
   ]
 });

 $('.product__content').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false,
 });

 $('.menu__btn').click(function (event) {
   $('.menu__btn,.menu__list').toggleClass('active');
   $('body').toggleClass('lock');
 });
 

});