function init() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

// init();





//! Counter Function
function preLoader() {
    const Counter = document.querySelector( ".counter" );
    let currentValue = 0;

    function updateCounter() {
        if ( currentValue === 100 ) {
            return
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if ( currentValue > 100 ) {
            currentValue = 100;
        }

        Counter.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}
preLoader();

//! mobile nav

const nav = document.querySelector( ".header" );
const mobile_nav = document.querySelector( ".mobile-nav" );
const mobile_links = document.querySelector(".nav-right")


const toggleNevber = () => {
    nav.classList.toggle( "active" );
};


mobile_nav.addEventListener( 'click',() => toggleNevber());
mobile_links.addEventListener( 'click',() => toggleNevber());




//! navbar sticky
const section_hero = document. querySelector( "#page1");
const Header = document. querySelector( ".header" );

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false // for header sticky scrolling treger
    ? Header.classList.add("sticky")
    : Header.classList.remove("sticky");
    ent.isIntersecting === false // for hero-section mirgin scrolling treger
    ? section_hero.classList.add("stickyhero")
    : section_hero.classList.remove("stickyhero");
}, {
    root: null,
    rootMargin: "-200px",
    threshold: 0,
});
observer.observe(section_hero);

//! all GSAP animations

const gs = gsap.timeline()

gs.to (".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
})

gs.to (".bar", 1, {
    width: 0,

    stagger: {
        amount: 0.5,
    }
})

gs.from(".page1left h2", 1, {
    x: -1400,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
})
gs.to (".preloader" ,{
    display: "none"
})
