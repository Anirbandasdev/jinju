// preLoader

const preLoader = document. querySelector( ".preloader" );

window.addEventListener( "load", function() {
    // preLoader.style.display = "none";

    this.setTimeout(() => {
        preLoader.style.display = "none";
    }, 1000)
});


// navbar sticky

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