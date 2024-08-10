'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener("click", openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const header = document.querySelector(".header");
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = `${message.textContent}<button class="btn btn--close-cookie">Got it!</button>`;


header.append(message);
document.querySelector('.btn--close-cookie').addEventListener("click", function (e) {
  message.remove(); 
});

message.style.height= parseFloat(getComputedStyle(message).height)+10+'px';

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener(
//   'click', function (e) {
//     console.log('LINK1',e.currentTarget,e.target);
//     console.log(e.currentTarget===e.target);
//     this.style.backgroundColor = randomColor();
//   }
// );

// document.querySelector('.nav__links').addEventListener(
//   'click', function (e) {
//     console.log('LINK2',e.currentTarget,e.target);
//     this.style.backgroundColor = randomColor();
//     console.log(e.currentTarget===e.target);
//   }
// );

// document.querySelector('.nav').addEventListener(
//   'click', function (e) {
//     console.log('LINK3');
//     this.style.backgroundColor = randomColor();
//   }
// );


const section1=document.querySelector("#section--1");

const btnscrollto = document.querySelector(".btn--scroll-to");

btnscrollto.addEventListener("click",function (e) {
  // const section1coordinates = section1.getBoundingClientRect();
  // console.log(section1coordinates);
  // window.scrollTo({
  //   left:section1coordinates.right+window.pageXOffset,
  //   top:section1coordinates.top+window.pageYOffset,
  //   behavior:'smooth',
  // });
  section1.scrollIntoView({behavior:'smooth'});
})

// let navlinks = document.querySelectorAll('.nav__link');
// navlinks.forEach(function (navlink){
//   navlink.addEventListener("click",function (e){
//     e.preventDefault();
//     const getid=this.getAttribute('href');
//     console.log(getid);
//     let section_n=document.querySelector(getid);
//     section_n.scrollIntoView({behavior:'smooth'});
//   });
//   //console.log(navlink.href);
// });

//using event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const h1 = document.querySelector('h1');
// console.log(h1.children);

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.nextElementSibling);


// //getting all the siblings
// console.log("Children-sibling:",h1.parentElement.children);
// console.log("child-nodes:",h1.parentElement.childNodes);


// //experimenting
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });


// Tabbed component
const tabs = document. querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document. querySelectorAll('.operations__content');

// using event delegation
tabsContainer.addEventListener("click", function (e){
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return;
  
  // now only the clicked button will jump up
  tabs.forEach(function (tab) {
    tab.classList.remove("operations__tab--active");
  });

  // for displaying the text
  clicked.classList.add("operations__tab--active");

  Array.from(tabsContent).forEach(function (tab) {
    tab.classList.remove("operations__content--active");
  });
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add(`operations__content--active`);
      // console.log(clicked.classList[2]);
      // console.log(tabsContainer.parentElement.children);
})

const nav=document.querySelector('.nav');

nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

// Not a good practice as we set everything within the nav to an opacity of 1
// nav.addEventListener('mouseout', function (e) {
  
//     const allNavElements = nav.querySelectorAll('.nav__link, img');

//     allNavElements.forEach(el => {
//       el.style.opacity = 1;
//     });
  
// });


// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });


// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0,0.2], // Set threshold to 10%
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const stickyNav = function(entries){
const [entry] =entries;
//console.log(entry);
if (!entry.isIntersecting) nav.classList.add('sticky');
else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver
(stickyNav, {
root: null,
threshold: 0,
rootMargin: '-90px'
});

headerObserver.observe(header);


// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin:'200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

const slides= document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');
const btnLeft = document. querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

// slider.style.transform = 'scale(0.4) translateX(-1200px)';
slider.style.overflow = 'visible';

let currentSlide = 0;
let maxslide=slides.length;
slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

btnRight.addEventListener("click", function () {
  currentSlide+=1;
  if (currentSlide < maxslide) 
    {
        slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i-currentSlide)}%)`;
        //console.log(currentSlide,100 * (i-currentSlide));
  });
};
})

btnLeft.addEventListener("click", function () {
  currentSlide-=1;
  if (currentSlide >=0) 
    {
        slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i-currentSlide)}%)`;
        //console.log(currentSlide,100 * (i-currentSlide));
  });
};
})

document.addEventListener('keydown', function (e) {
    if(e.key=== 'ArrowRight'){
      currentSlide+=1;
      if (currentSlide < maxslide) 
        {
            slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i-currentSlide)}%)`;
            //console.log(currentSlide,100 * (i-currentSlide));
      });
    };
    }
    if(e.key=== "ArrowLeft"){
      currentSlide-=1;
      if (currentSlide >=0) 
        {
            slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i-currentSlide)}%)`;
            console.log(currentSlide,100 * (i-currentSlide));
      });
    };
    }
  });

const dotContainer=document.querySelector('.dots');
dotContainer.innerHTML='';
slides.forEach((s, i) => {
  if(i==0)
  {
  const htmlcode = '<button class="dots__dot dots__dot--active" data-slide="0"></button>';
  dotContainer.insertAdjacentHTML('beforeend',htmlcode);
  }
  else
  {
  const htmlcode = `<button class="dots__dot" data-slide=${i}></button>`;
  dotContainer.insertAdjacentHTML('beforeend',htmlcode);
  }
});

// console.log(dot);

//event delegation for dots
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) 
  {
    const slideno=Number(e.target.dataset.slide);
    
    // for setting up the correct image
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i-slideno)}%)`;
    });

    // Remove active class from all dots to display the color for active class
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });

    // Add active class to the clicked dot
    e.target.classList.add('dots__dot--active');
  }
//console.log(e.target);
});

// // Example code to show the second image
// document.querySelector('.slider').style.transform = 'translateX(-200%)';
// ; // Indexing starts from 0, so 1 will show the second image
