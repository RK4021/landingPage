const tl = gsap.timeline({
    defaults: {
        duration: .75,
        ease: "Power3.easeOut"
    }
});
tl.fromTo(".hero-img", {
    scale: 1.3
}, {
    scale: 1,
    delay: .35,
    duration: 2.5,
    borderRadius: 30,
    ease: "elastic.out(1.5, 1)"
});
tl.fromTo(".cta1", {
    x: "-100%",
    opacity: 0
}, {
    x: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta3", {
    x: "100%",
    opacity: 0
}, {
    x: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta2", {
    y: "-100%",
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta4", {
    x: "-100%",
    opacity: 0
}, {
    x: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta6", {
    x: "100%",
    opacity: 0
}, {
    x: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta5", {
    y: "100%",
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "<20%");
/* button */ tl.fromTo(".cta-button", {
    scale: 0
}, {
    scale: 1,
    duration: 2,
    ease: "elastic.out(1.2, 0.4)"
}, "<50%");
/* split text */ const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");
logo.textContent = "";
letters.forEach((letter)=>{
    logo.innerHTML += `<span class = "letter"> ${letter} </span>`;
});
gsap.set(".letter", {
    display: "inline-block"
});
gsap.fromTo(".letter", {
    y: 100
}, {
    y: 0,
    delay: 2,
    stagger: .1
});

//# sourceMappingURL=index.c4775257.js.map
