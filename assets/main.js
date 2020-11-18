console.log('the good side', 'v1');

function isMobile(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log('mobile');
    return true;
  }else {
    console.log('not mobile');
    return false;
  }
}

if(!isMobile()){
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
    console.log('case study / mobile');
  }
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


function closepage(){
  var closePageSelector = document.querySelector('.close-section');
  if(closePageSelector) {
    closePageSelector.addEventListener('click', function(){
      var closedPages = document.querySelectorAll('.gs-slide.close');
      var sectionToClose = document.querySelector('.page-selector.open');
      horizontalScroll = true;
      console.log(sectionToClose);
      sectionToClose.classList.remove('open');
      console.log(sectionToClose);
      setTimeout(function(){
        sectionToClose.scrollIntoView({behavior: "smooth"});
      }, 500);
      for(i=0; i < closedPages.length; i++) {
        closedPages[i].classList.remove('close');
      }
      this.classList.remove('active');
    });
  }
}

function openarticle() {
  var pageScroller = document.querySelector('.gs-home-page-slider');
  var articleSelector = document.querySelectorAll('.article-selector');
  var closeArticle = document.querySelector('.close-article');
  var article = document.querySelector('.article');
  for(i=0; i < articleSelector.length; i++) {
    articleSelector[i].addEventListener('click', function(e){
      e.preventDefault();
      if(this.classList.contains('article-selector__splash')) {
        closeArticle.classList.add('splash__close');
      }
      horizontalScroll = false;
      var currentLocation = window.location.pathname;
      history.pushState(null, null, currentLocation+'#'+'the-good-side-testing-article');
      var articleLink = this.dataset.link;
      var iframe = article.querySelector('iframe');
      iframe.setAttribute('src', articleLink);
      article.classList.add('open');
      pageScroller.classList.add('fix');
    });
  }
}


function closeArticle(){
  var closeArticle = document.querySelector('.close-article');
  var article = document.querySelector('.article');
  if(closeArticle) {
    closeArticle.addEventListener('click', function(){
      if(this.classList.contains('splash__close')){
        horizontalScroll = true;
      }
      article.classList.remove('open');
    });
  }
}

function randomCircles(){
  // collect all the divs
  var divs = document.querySelectorAll('.circle');
  // get window width and height
  var variablewidth;

  if(isMobile()) {
    variablewidth = 100;
  } else {
    variablewidth = 400;
  }

  var winWidth = window.innerWidth - variablewidth;
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
}

function hamburger() {
  var hamburger = document.querySelector('.tg-menu__hamburger');
  var menuWrapper = document.querySelector('.gs-hamburger-menu');
  hamburger.addEventListener('click', function(){
    this.classList.toggle('clicked');
    menuWrapper.classList.toggle('hidden');
  });
}

function circlesCliked(){
  var questions = document.querySelector('.gs-questions');
  var circlesContainer = document.querySelector('.circles-slide');
  var fullScreenClose = document.querySelector('.close-circles');
  if(questions){
  var circle = questions.querySelectorAll('.circle');
    for(i=0; i<circle.length; i++){
      circle[i].addEventListener('click', function(){
        this.classList.toggle('clicked');
        circlesContainer.classList.toggle('clickToClose');
        //add eventlister to screen to close cirlces
        fullScreenClose.classList.toggle('active');
        fullScreenClose.addEventListener('click', function(){
          console.log(fullScreenClose);
          this.classList.remove('active');
          var circleOpen = document.querySelector('.circle.clicked');
          circleOpen.classList.remove('clicked');
        });
      });
    }
  }
}

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
}

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
}

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
}

function delayFloat() {
  var circles = document.querySelectorAll('.circle');
  if(circles){
    for(i=0; i < circles.length; i++){
      var random = Math.random() * (2 - 0) + 0;
      circles[i].style.animationDelay = random + 's';
    }
  }
}

function clickArrow(){
  var nextArrow = document.querySelectorAll('.arrow-container');
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
}

function teamQuestions() {
  var teamQuestions = document.querySelectorAll('.circle-question');
  for(i=0; i<teamQuestions.length; i++) {
    teamQuestions[i].addEventListener('click', function(){
      this.classList.toggle('clicked');
    });
  }
}

function themeSelector(){
  var selector = document.querySelectorAll('.theme-selector');
  var organiser = document.querySelector('.gs-organiser');
  var caseStudies = document.querySelectorAll('.case-study-theme');

  for(i=0; i<selector.length; i++) {
    selector[i].addEventListener('click', function(){
      var theme = this.dataset.theme;
      var caseStudy = document.querySelector('.case-study-theme.'+theme);
      organiser.scrollIntoView({behavior: "smooth"});
      if(caseStudy && caseStudy != null && theme != 'all') {
        console.log(caseStudy);
        for(j=0; j<caseStudies.length; j++) {
          console.log(caseStudies[j]);
          caseStudies[j].classList.add('hide');
        }
        caseStudy.classList.remove('hide');
      }else if(theme == 'all'){
        for(j=0; j<caseStudies.length; j++) {
          caseStudies[j].classList.remove('hide');
        }
      }
    });
  }
}

function taginUrl(){
  var currentLocation = window.location.href;
  console.log(currentLocation);
  var caseStudies = document.querySelectorAll('.case-study-theme');
  if (currentLocation.includes("/case-studies/")){
    var tag = currentLocation.split('?');
    console.log(tag[1]);
    var theme = tag[1].trim();
    var caseStudy = document.querySelector('.case-study-theme.'+theme);
    if(caseStudy && caseStudy != null) {
      for(j=0; j<caseStudies.length; j++) {
        console.log(caseStudies[j]);
        caseStudies[j].classList.add('hide');
      }
      caseStudy.classList.remove('hide');
    }
  }
}

function init(){
  openpage();
  closepage();
  openarticle();
  closeArticle();
  randomCircles();
  hamburger();
  circlesCliked();
  onscrollanimate();
  headerLogo();
  splashHover();
  delayFloat();
  clickArrow();
  teamQuestions();
  themeSelector();
  taginUrl();
}init();
