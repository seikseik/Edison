import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import lozad from 'lozad'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);



// scroll top
let topArrow = document.querySelector(".arrow-top");
topArrow.addEventListener("click", function(){
  gsap.to(window, {duration: 2, scrollTo: 0});
});

let h = document.querySelector(".hero").offsetHeight;
let arrow = document.querySelector(".arrow");
arrow.addEventListener("click", function(){
  gsap.to(window, {duration: 0.7, scrollTo: h});
});

  // animate text on scroll

  const quotes = document.querySelectorAll(".animation-text");
  const timing = [ 0.3, 0.4, 0.4, 0.4];
  const stagger = [ 0.01, 0.02, 0.02, 0.02];
  function setupSplits() {
    quotes.forEach((quote, i) => {

      if(quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type:"words,chars",
        wordsClass: "split-line"
      });

      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 75%",
        },
        duration: timing[i],
        ease: "circ.out",
        y: 80,
        stagger: stagger[i]
      });
    });
  }


  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();


  // fade in

  const fade = gsap.utils.toArray("[fade]");
  fade.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 1, autoAlpha: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });
  const fadeUp = gsap.utils.toArray("[fade-up]");
  fadeUp.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0, y: -100}, {duration: 1, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });

  // fade circles
  ScrollTrigger.batch(".circle", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        stagger: 0.15,
        duration: 1
      });
    },
    once: true
  });


// zoom
  const zoom = gsap.utils.toArray("[img-zoom]");
  zoom.forEach((el, i) => {
    const anim = gsap.fromTo(el, {scale: 1}, {scale: 1.05, duration: 2.5, delay: 0.2});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });


  // hr line animation
  const hr = gsap.utils.toArray(".vertical-line-hr");
  hr.forEach((el, i) => {
    gsap.set(el, {transformOrigin:"top"})
    const anim = gsap.fromTo(el, {scaleY: 0}, {duration: 2, scaleY: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });

  const hrcenter = gsap.utils.toArray(".hr-line");
  hrcenter.forEach((el, i) => {
    gsap.set(el, {transformOrigin:"center"})
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1, scaleX: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });

  gsap.set(".hr-left", {transformOrigin:"right"})
  const hrLeft = gsap.fromTo(".hr-left", {scaleX: 0}, {duration: 1, scaleX: 1});
  ScrollTrigger.create({
    trigger: ".hr-left",
    animation: hrLeft,
    ease: "circ.out",
    toggleActions: 'play none none none',
    once: true,
  });
  gsap.set(".hr-right", {transformOrigin:"left"})
  const hrRight = gsap.fromTo(".hr-right", {scaleX: 0}, {duration: 1, scaleX: 1});
  ScrollTrigger.create({
    trigger: ".hr-right",
    animation: hrRight,
    ease: "circ.out",
    toggleActions: 'play none none none',
    once: true,
  });
  // swiper scroll
let swipers = document.querySelectorAll(".swiper-scroll-container")

swipers.forEach((item, i) => {
  const swiper = new Swiper(item, {
    speed: 200,
    spaceBetween: 15,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 3
      }

    },
    freeMode: true,
    grabCursor: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

});
});

// mappa
let numbers = document.querySelectorAll(".number");
numbers.forEach((item, i) => {
  item.addEventListener("click", function(){
    let id = item.id
    let overlay = document.querySelector(`[${id}]`);
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
    overlay.onclick = function(){
      overlay.style.opacity = 0;
      overlay.style.visibility = "hidden";
    }
  })
});
