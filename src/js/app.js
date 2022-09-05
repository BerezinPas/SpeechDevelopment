import * as customfunctions from "./modules/functions.js";

customfunctions.test();


const headerBurger = document.querySelector('.header__burger')
const burgerPage = document.querySelector('.burger-page')

headerBurger.addEventListener('click', (e)=> {
  burgerPage.classList.add('active')
  document.body.classList.add('no-scroll')
})

const burgerClose = document.querySelector('.burger-page__burger')

burgerPage.addEventListener('click', (e)=> {
  if (e.target.classList.contains('burger-page__burger') || e.target.classList.contains('burger-page') ) {
    burgerPage.classList.remove('active')
    document.body.classList.remove('no-scroll')
  }
})

const header = document.querySelector('.header')
window.addEventListener('scroll', (e)=> {
  console.log('SCROLLLL');
  console.log(window.pageYOffset);
  if (window.pageYOffset > header.clientHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

const videoContainer = document.querySelector('.video-section__video')
const video = videoContainer.querySelector('video')

videoContainer.addEventListener('click', (e)=> {
  if (videoContainer.classList.contains('paused')) {
    video.play()
  } else {
    video.pause()
  }
  videoContainer.classList.toggle('paused')
})

