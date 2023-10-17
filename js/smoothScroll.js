gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 1,
  effects: false,
  normalizeScroll: false
});

const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

//only set opacity:0 to start
//gsap.set(photos, {yPercent:101})

gsap.set(photos, {opacity:0})

const allPhotos = gsap.utils.toArray(".desktopPhoto")

// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector("h1")
	let animation = gsap.timeline().to(photos[index], {opacity:1})
	
	ScrollTrigger.create({
		trigger:headline,
		start:"top 50%",
		end:"top 50%",		
		animation:animation,
		toggleActions:"restart none restart reverse",
		markers:false
	})
})

  
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});