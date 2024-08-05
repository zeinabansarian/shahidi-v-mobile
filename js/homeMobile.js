// LOAD BANNE
gsap.to('.Banner-Slider img',{
    x:0,
    opacity:1,
    ease:'none'
})
// BANNER SLIDER
let swiperBanner = new Swiper(".swiper-Banner", {
    slidesPerView:1,
    spaceBetween:0,
    effect:'slide'
  }); 

// PRODUCT CATEGORY SLIDER
let swiperProject= new Swiper(".swiper-Category", {
    loop: true,
    speed: 1000,
    centeredSlides:true,
    slidesPerView:1.3,
    spaceBetween: 20,
    pagination: {
        el: ".ProductCategories .swiper-pagination",
        type: "progressbar",
      },
  });  

let Sections = document.querySelectorAll('.BG')
Sections.forEach(d=>{
    let ImgSRC =d.getAttribute('data-bg')
    d.style.backgroundImage =`url('${ImgSRC}')`
})
//   PLAY VIDEO
let video = document.querySelector('video#main')
let videoC = document.querySelector('.Video-Clr')
let video2 = document.querySelector('video#main-2')
let PlayBtn = document.querySelector('.PlayBTN')
let PlayBtn2= document.querySelector('.PlayBTN2')
let popup = document.querySelector('.PopUp')
let CloseBtn = document.querySelector('.PopUp .Close')
PlayBtn.addEventListener('click',()=>{
    popup.classList.add('Open')
    video.classList.add('show')
    video.play()
})
CloseBtn.addEventListener('click',()=>{
    popup.classList.remove('Open')
    video.classList.remove('show')   
    video.pause()
})
PlayBtn2.addEventListener('click',(e)=>{
    e.stopPropagation()
    video2.play()
    video2.parentElement.classList.add('show')
    videoC.addEventListener('click',()=>{
        video2.parentElement.classList.remove('show')
        video2.pause()
    })
})

// PRODUCT CATEGORY2 SLIDER

let swiperCat2= new Swiper(".swiper-productCat2", {
    speed: 1000,
    slidesPerView:1,
    loop:true,
    spaceBetween: 20,
    // centeredSlides:true,
    navigation: {
        nextEl: ".ProductCat-2 .swiper-button-next",
        prevEl: ".ProductCat-2 .swiper-button-prev",
      },
  });  

  var menu = ['مقالات', 'اخبار']
    // DETAIL SLIDER
    let SwiperDetail= new Swiper ('.swiper-Detail', {
        effect: 'slide',
          slidesPerView: 1,
          spaceBetween: 30,
          speed:700  ,
          pagination: {
            el: '.NewsBlogs-Container .swiper-pagination',
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className,e) {
              return '<span class="' + className + '">' + (menu[index]) + '</span>';
            }
          }      
        })

