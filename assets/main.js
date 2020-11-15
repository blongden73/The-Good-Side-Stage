console.log('the good side', 'v1');

var horizontalScroll = true;
var caseStudyCheck = document.querySelector('.gs-case-study_top');
//when the page loads it needs to check the url to see if there is a horizontal scroll query in there
if(!caseStudyCheck){
  $(function() {
     $(".gs-home-page-slider").mousewheel(function(event, delta) {
       if(horizontalScroll) {
         this.scrollLeft -= (delta * 5);
         event.preventDefault()
        }
     });
  });
} else {
  console.log('case study');
}

function openpage() {
  var pageSelector = document.querySelectorAll('.page-selector');
  var slides = document.querySelectorAll('.gs-slide');
  for(i=0; i < pageSelector.length; i++) {
    pageSelector[i].addEventListener('click', function(){
      var closePageSelector = document.querySelector('.close-section');
      closePageSelector.classList.add('active');
      horizontalScroll = false;
      var currentLocation = window.location.pathname;
      var url = this.dataset.url;
      history.pushState(null, null, currentLocation+'#'+url);
      this.classList.add('open');
      var open = document.querySelector('.gs-slide.open');
      for(j=0; j<slides.length; j++ ) {
        slides[j].classList.add('close');
        open.classList.remove('close');
      }
    });
  }
}
openpage();

function closepage(){
  var closePageSelector = document.querySelector('.close-section');
  if(closePageSelector) {
    closePageSelector.addEventListener('click', function(){
      var closedPages = document.querySelectorAll('.gs-slide.close');
      var sectionToClose = document.querySelector('.page-selector.open');
      horizontalScroll = true;
      sectionToClose.classList.remove('open');
      for(i=0; i < closedPages.length; i++) {
        closedPages[i].classList.remove('close');
      }
      this.classList.remove('active');
    });
  }
}closepage()

function openarticle() {
  var pageScroller = document.querySelector('.gs-home-page-slider');
  var articleSelector = document.querySelectorAll('.article-selector');
  var article = document.querySelector('.article');
  for(i=0; i < articleSelector.length; i++) {
    articleSelector[i].addEventListener('click', function(){
      horizontalScroll = false;
      var currentLocation = window.location.pathname;
      history.pushState(null, null, currentLocation+'#'+'the-good-side-testing-article');
      article.classList.add('open');
      pageScroller.classList.add('fix');
    });
  }
}
openarticle();

function randomCircles(){
  // collect all the divs
  var divs = document.querySelectorAll('.circle');
  // get window width and height
  var winWidth = window.innerWidth - 200;
  var winHeight = window.innerHeight - 200;
  // i stands for "index". you could also call this banana or haircut. it's a variable
  for ( var i=0; i < divs.length; i++ ) {
      // shortcut! the current div in the list
      var thisDiv = divs[i];
      // get random numbers for each element
      randomTop = getRandomNumber(0, winHeight);
      randomLeft = getRandomNumber(0, winWidth);
      // update top and left position
      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";
  }
  // function that returns a random number between a min and max
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}randomCircles();

function hamburger() {
  var hamburger = document.querySelector('.tg-menu__hamburger');
  var menuWrapper = document.querySelector('.gs-hamburger-menu');
  hamburger.addEventListener('click', function(){
    this.classList.toggle('clicked');
    menuWrapper.classList.toggle('hidden');
  });
}hamburger();

function circlesCliked(){
  var questions = document.querySelector('.gs-questions');
  if(questions){
  var circle = questions.querySelectorAll('.circle');
    for(i=0; i<circle.length; i++){
      circle[i].addEventListener('click', function(){
        this.classList.toggle('clicked');
      });
    }
  }
}circlesCliked();

function onscrollanimate() {
  var isHome = document.querySelector('.gs-splash');
  if(isHome){
    document.addEventListener('wheel', function(){
      var homeslides = document.querySelectorAll('.gs-slide');
      for(i=0; i<homeslides.length; i++) {
        var left = homeslides[i].getBoundingClientRect().left;
        if(left < (window.innerWidth / 2) && left > -(window.innerWidth / 2)) {
          homeslides[i].classList.add('inview');
        }else {
          homeslides[i].classList.remove('inview');
        }
      }
    });
  }
}onscrollanimate();

function headerLogo() {
  var isCaseStudy = document.querySelector('.gs-case-study_top');
  var siteLogo = document.querySelector('.tg-header__logo');
  if(isCaseStudy) {
    document.addEventListener('scroll', function(){
      var headerImage = isCaseStudy.getBoundingClientRect().bottom;
      if(headerImage <= 50) {
        siteLogo.classList.add('black');
      }else {
        siteLogo.classList.remove('black');
      }
    });
  }
}headerLogo();

function splashHover() {
  var splashImage = document.querySelectorAll('.js-hover-faux');
  var splashText = document.querySelector('.gs-splash');
  for(i = 0; i < splashImage.length; i++) {
    splashImage[i].addEventListener('mouseover', function(){
      splashText.classList.add('hover');
      this.classList.add('hovered');
      for(j = 0; j < splashImage.length; j++) {
        splashImage[j].classList.add('fade');
      }
    });
    splashImage[i].addEventListener('mouseleave', function(){
      splashText.classList.remove('hover');
      this.classList.remove('hovered');
      for(g = 0; g < splashImage.length; g++) {
        splashImage[g].classList.remove('fade');
      }
    });
  }
}splashHover();

function delayFloat() {
  var circles = document.querySelectorAll('.circle');
  if(circles){
    for(i=0; i < circles.length; i++){
      var random = Math.random() * (2 - 0) + 0;
      circles[i].style.animationDelay = random + 's';
    }
  }
}delayFloat();

function clickArrow(){
  var nextArrow = document.querySelectorAll('.next-arrow');
  console.log(nextArrow);
  for(i=0; i<nextArrow.length; i++) {
    nextArrow[i].addEventListener('click', function(){
      var parent = this.parentNode;
      var next = parent.nextSibling.nextElementSibling;
      console.log(next);
      console.log('click');
      next.classList.add('inview');
      next.scrollIntoView({behavior: "smooth"});
    });
  }
}clickArrow();
