let header = document.querySelector('header')
let Op = document.querySelector('.MobileHeader .Toggles')
let OpMenu = document.querySelector('.Menu-Container')
let Close = document.querySelector('.Menu-Container .CloseIcon')
Op.addEventListener('click',()=>{
    OpMenu.classList.add('Open')
    gsap.to('.Menu-Container .Menu-Item .Menu-Link',{
        y:0,
        opacity:1,
        stagger:.1,
      
    })

})
Close.addEventListener('click',()=>{
    gsap.to('.Menu-Container .Menu-Item .Menu-Link',{
        y:100,
        opacity:0,
        stagger:.1
    })
    setTimeout(() => {
        OpMenu.classList.remove('Open')  
    }, 1500);

})
const lenis = new Lenis()
  
  
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)