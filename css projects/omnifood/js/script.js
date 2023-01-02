const mobileNavBtn = document.querySelector('.btn-mobile-nav');

mobileNavBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('nav-open');
})

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {

    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"                
            });
        }

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        //close mobile nav 
        if (link.classList.contains("main-nav-link")) {
            document.querySelector('.header').classList.toggle('nav-open');

        }
    })
});


//add and remove sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver((entries) => { 
    const ent = entries[0];
    if (!ent.isIntersecting){
        document.body.classList.add('sticky');
    }
    else{
        document.body.classList.remove('sticky');
    }
}, {
    //set the observer to track after the element around the view port
    root:null,
    // the callback will launch when 0% of the element to observe is 0% inside the view port 
    threshold: 0,
    rootMargin: "-80px"
})

//set section hero element as the item to observe; 
obs.observe(sectionHeroEl);




///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
