gsap.registerPlugin(ScrollTrigger);

let st = ScrollTrigger.create({
    trigger: ".section-center",
    pin: ".section-center",
    start: "end end",
    end: "top top ",
    markers: true,
});