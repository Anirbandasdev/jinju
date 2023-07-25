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

        Counter.textContent = currentValue+"%";

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

//! All GSAP Animations

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
