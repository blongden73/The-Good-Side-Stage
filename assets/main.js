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
  var opened = false;
  var caseStudyCheck = document.querySelector('.gs-case-study_top');
  //when the page loads it needs to check the url to see if there is a horizontal scroll query in there
  if(!caseStudyCheck){
    $(function() {
       $(".gs-home-page-slider").mousewheel(function(event, delta) {
         if(horizontalScroll) {
           this.scrollLeft -= (delta * 4);
           event.preventDefault()
          }
       });
    });
  } else {
  }
}

function openpage() {
  var pageSelector = document.querySelectorAll('.page-selector');
  var slides = document.querySelectorAll('.gs-slide');
  var currentLocation = window.location.href;
  for(i=0; i < pageSelector.length; i++) {
    if(!currentLocation.includes('/case-studies/')) {
      pageSelector[i].addEventListener('click', function(){
        var closePageSelector = document.querySelector('.close-section');
        closePageSelector.classList.add('active');
        horizontalScroll = false;
        var currentLocation = window.location.pathname;
        var url = this.parentNode.dataset.url;
        history.pushState(null, null, currentLocation+'#'+url);
        this.parentNode.classList.add('open');
        var target = document.querySelector('.start');
        console.log(target);
        if(target) {
          setTimeout(function(){
            target.scrollIntoView({behavior: "smooth", block: "center"});
          }, 100)
        }
        if(this.classList.contains('about-scroller')){
          var aboutPageScroller = document.querySelector('.scrolltome');
          setTimeout(function(){
            aboutPageScroller.scrollIntoView({behavior: "smooth", block: "center"});
          }, 150)
        }
        var open = document.querySelector('.gs-slide.open');
        for(j=0; j<slides.length; j++ ) {
          slides[j].classList.add('close');
          open.classList.remove('close');
        }
      });
    }
  }
}

function openSinglePage(el){
  var closePageSelector = document.querySelector('.close-section');
  var slides = document.querySelectorAll('.gs-slide');
  closePageSelector.classList.add('active');
  horizontalScroll = false;
  var currentLocation = window.location.pathname;
  var url = el.dataset.url;
  history.pushState(null, null, currentLocation+'#'+url);
  el.classList.add('open');
  var open = document.querySelector('.gs-slide.open');
  for(j=0; j<slides.length; j++ ) {
    slides[j].classList.add('close');
    open.classList.remove('close');
  }
}


function closepage(){
  var closePageSelector = document.querySelector('.close-section');
  if(closePageSelector) {
    closePageSelector.addEventListener('click', function(){
      var closedPages = document.querySelectorAll('.gs-slide.close');
      var sectionToClose = document.querySelector('.gs-slide.open');
      horizontalScroll = true;
      sectionToClose.classList.remove('open');
      setTimeout(function(){
        sectionToClose.scrollIntoView({behavior: "smooth"});
      }, 1000);
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
      var articleLink = this.dataset.link;
      var iframe = article.querySelector('iframe');
      var forUrl = articleLink.replace('/', '');
      history.pushState(null, null, currentLocation+'#'+forUrl);
      iframe.contentWindow.location.replace(articleLink);
      setTimeout(function(){
        $(iframe).contents().find('body').addClass('case-study-iframe');
      }, 1000)

      article.classList.add('open');
      if(pageScroller) {
        pageScroller.classList.add('fix');
      }
    });
  }
}

function hash() {
  console.log('checking locations', window.location)
  window.addEventListener("hashchange", function(){
    console.log('changed hash');
    window.location.reload();
  });
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

function specialrandomCircles(){
  // collect all the divs
  var specialdivs = document.querySelectorAll('.special-circle');
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
  for ( var i=0; i < specialdivs.length; i++ ) {
      // shortcut! the current div in the list
      var specialthisDiv = specialdivs[i];
      // get random numbers for each element
      randomTop = getRandomNumber(0, winHeight);
      randomLeft = getRandomNumber(0, winWidth);
      // update top and left position
      specialthisDiv.style.top = randomTop +"px";
      specialthisDiv.style.left = randomLeft +"px";
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

function menu() {
  var menuItems = document.querySelectorAll('.gs-hamburger-menu ul li');
  var menuWrapper = document.querySelector('.gs-hamburger-menu');
  for(i=0;i<menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(){
      menuWrapper.classList.toggle('hidden');
    })
  }
}

function circlesCliked(){
  var questions = document.querySelector('.gs-questions');
  var circlesContainer = document.querySelector('.circles-slide');
  var fullScreenClose = document.querySelector('.close-circles');
  var ask = document.querySelector('.gs-splash.ask')
  var currentLocation = window.location.href;
  if(questions){
  var circle = questions.querySelectorAll('.circle');
    for(i=0; i<circle.length; i++){
      if(!currentLocation.includes('/case-studies/')) {
        circle[i].addEventListener('click', function(){
          this.classList.toggle('clicked');
          circlesContainer.classList.toggle('clickToClose');
          ballsanimation.pause();
          setTimeout(function(){
            window.requestAnimationFrame(letsplayball);
          }, 1000)

          this.addEventListener('click', function(){
            ballsanimation.pause();
            setTimeout(function(){
              window.requestAnimationFrame(letsplayball);
            }, 1000)
          });
          //add eventlister to screen to close cirlces
          fullScreenClose.classList.toggle('active');
          fullScreenClose.addEventListener('click', function(){
            this.classList.remove('active');
            var circleOpen = document.querySelector('.circle.clicked');
            circleOpen.classList.remove('clicked');
          });
        });
      }
    }
  }
}



var screenWidth = screen.width / 5;
var screenHeight = screen.height / 5 ;
var ballsanimation = anime({
  targets: '.circle-move',
  keyframes: [
    {translateY: function() { return anime.random(0, screenHeight);} },
    {translateX: function() { return anime.random(0, screenWidth);}},
    {translateY: function() { return anime.random(0, screenHeight);}},
    {translateX: function() { return anime.random(0, screenWidth);}},
    {translateY: function() { return anime.random(0, screenHeight);}}
  ],
  delay: anime.stagger(200),
  direction: 'alternate',
  easing: 'spring(1, 80, 10, 0)',
  loop: true,
  autoplay: false,
  duration: anime.random(1000, 4000)
});

function animateCricles(){
  console.log(screenWidth, screenHeight);
  randomCircles();
}

function letsplayball(){
  ballsanimation.play();
}

function onscrollanimate() {
  var isHome = document.querySelector('.gs-splash');
  if(isHome && !isMobile()){
    function scroll(){
      console.log('runnin');
        var homeslides = document.querySelectorAll('.gs-slide');
        for(i=0; i<homeslides.length; i++) {
          var left = homeslides[i].getBoundingClientRect().left;
          if(left < (window.innerWidth / 2) && left > -(window.innerWidth / 2)) {
            homeslides[i].classList.add('inview');
            //at this point if the user stops scrolling snap to the the left of the screen
            homeslides[i].scrollIntoView({behavior: "smooth"});

            if(homeslides[i].classList.contains('circles-slide')){
              window.requestAnimationFrame(letsplayball);
            } else {
              ballsanimation.pause();
            }
          }else {
            homeslides[i].classList.remove('inview');
          }
        }
      }
      var throttleScroll = _.throttle(scroll, 100);
      document.addEventListener('wheel', throttleScroll);
  } else if(isMobile()) {
    var homeslides = document.querySelectorAll('.gs-slide');
    for(i=0; i<homeslides.length; i++) {
      homeslides[i].classList.add('inview');
      if(homeslides[i].classList.contains('circles-slide')){
        window.requestAnimationFrame(letsplayball);
      } else {
        ballsanimation.pause();
      }
    }
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
  var circles = document.querySelectorAll('.circle.theme');
  if(circles){
    for(i=0; i < circles.length; i++){
      var random = Math.random() * (10 - 0) + 0;
      circles[i].style.animationDelay = random + 's';
    }
  }
}

function clickArrow(){
  var nextArrow = document.querySelectorAll('.arrow-container');
  for(i=0; i<nextArrow.length; i++) {
    nextArrow[i].addEventListener('click', function(){
      var parent = this.parentNode;
      var next = parent.nextSibling.nextElementSibling;
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
  var slide = document.querySelector('.gs-slide.themes');

  for(i=0; i<selector.length; i++) {
    selector[i].addEventListener('click', function(){
      if(!slide.classList.contains('open')){
        openSinglePage(slide);
      }
      for(j=0; j<selector.length; j++) {
        selector[j].classList.add('selected');
      }
      this.classList.remove('selected');
      var theme = this.dataset.theme;
      var caseStudy = document.querySelectorAll('.case-study-theme.'+theme);
      organiser.scrollIntoView({behavior: "smooth"});
      if(caseStudy && caseStudy != null && theme != 'all') {
        for(j=0; j<caseStudies.length; j++) {
          caseStudies[j].classList.add('hide');
        }
        for(h=0; h<caseStudy.length; h++){
          caseStudy[h].classList.remove('hide');
        }
      }else if(theme == 'all'){
        for(j=0; j<caseStudies.length; j++) {
          caseStudies[j].classList.remove('hide');
          for(e=0; e<selector.length; e++) {
            selector[e].classList.remove('selected');
          }
        }
      }
    });
  }
}

function taginUrl(){
  var currentLocation = window.location.href;
  var caseStudies = document.querySelectorAll('.case-study-theme');
  var organiser = document.querySelector('.gs-organiser');
  if (currentLocation.includes("/case-studies/?")){
    var tag = currentLocation.split('?');
    var theme = tag[1].trim();
    var caseStudy = document.querySelectorAll('.case-study-theme.'+theme);
    var themeSelectors = document.querySelectorAll('.theme-selector');
    var themeSelected = organiser.querySelector('[data-theme="'+theme+'"]');
    for(j=0; j<themeSelectors.length; j++) {
      themeSelectors[j].classList.add('selected');
    }
    themeSelected.classList.remove('selected');
    console.log(themeSelected);
    if(caseStudy && caseStudy != null) {
      console.log(caseStudy);
      for(j=0; j<caseStudies.length; j++) {
        caseStudies[j].classList.add('hide');
      }
      for(h=0; h<caseStudy.length; h++){
        console.log('tag');
        caseStudy[h].classList.remove('hide');
      }
    }
  }
}

function caseStudyheight(){
  var colHeight = document.querySelector('.gs__right-col');
  var articleWrapper = document.querySelector('.article-wrapper');
  if(colHeight) {
    var height = colHeight.getBoundingClientRect().height;
    console.log(height, articleWrapper.clientHeight);
    setTimeout(function(){
      if(articleWrapper.clientHeight <= colHeight.clientHeight) {
        console.log('less');
        articleWrapper.style.height = (height+ 40) + "px";
      }else {
        colHeight.style.bottom = 0;
      }
    },2000);
  }
}

function checkHash(){
  var hashinurl = window.location;
  if(hashinurl.hash) {
    if(hashinurl.hash.includes('#case-studies')){
      var article = document.querySelector('.article');
      var currentLocation = window.location;
      var articleLink = currentLocation.hash.split('#case-studies/');
      var usableLink = '/case-studies/' + articleLink[1];
      horizontalScroll = false;
      var iframe = article.querySelector('iframe');
      // history.pushState(null, null, currentLocation+'#'+forUrl);
      iframe.contentWindow.location.replace(usableLink);
      setTimeout(function(){
        $(iframe).contents().find('body').addClass('case-study-iframe');
      }, 1000)
      article.classList.add('open');
    }else {
      console.log('has hash');
      var hashId = hashinurl.hash.replace('#', '');
      var target = document.querySelector('[data-url="' + hashId + '"]');
      target.classList.add('inview');
      target.scrollIntoView({behavior: "smooth"});
    }
  }else {
    console.log('no hash');
  }
}

function carousel(){
  var current = 0,
    slides = document.querySelectorAll(".mani-slide");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 12000);
}

function hoverEnlarger() {
  var hover = document.querySelectorAll('.hover-enlarge');
  var info = document.querySelector('.studio-info-wrapper');
  var pageWrapper = document.querySelector('.gs-home-page-slider');
  for(i=0; i<hover.length; i++){
    hover[i].addEventListener('click', function(){
      for(j=0; j<hover.length; j++){
        hover[j].classList.toggle('hide');
      }
      var selector = this.dataset.selector;
      console.log('.studio-info-wrapper.'+selector);
      document.querySelector('.studio-info-wrapper.'+selector).classList.toggle('visible');
      this.classList.toggle('enlarge');
      pageWrapper.classList.toggle('no-scroll');
      horizontalScroll = false;
    })
  }
}

function caseStudyMore() {
  console.log('read-more');
  var caseStudyReadMore = document.querySelectorAll('.case-read-more');
  var pageWrapper = document.querySelector('.gs-home-page-slider');
  var info = document.querySelector('.case-study-info-wrapper');
  for(i=0;i<caseStudyReadMore.length; i++){
    caseStudyReadMore[i].addEventListener('click', function(){
      if(!opened) {
        opened = true;
        horizontalScroll = false;
        pageWrapper.classList.add('no-scroll');
      }else {
        opened = false;
        horizontalScroll = true;
        pageWrapper.classList.remove('no-scroll');
      }
      console.log('clicking');
      var selector = this.dataset.selector;
      document.querySelector('.case-study-info-wrapper.'+selector).classList.toggle('visible');
    });
  }
}

function logoChange() {
  console.log('logo');
  var mainVideo = document.querySelector('.gs-video');
  var siteLogo = document.querySelector('.tg-header__logo');
  document.addEventListener('wheel', function(){
    console.log(mainVideo.getBoundingClientRect());

    if(mainVideo.getBoundingClientRect().x <= -400) {
      console.log('pause');
      mainVideo.querySelector('video').pause();
      siteLogo.classList.add('black');
    }else {
      console.log('play');
      mainVideo.querySelector('video').play();
      siteLogo.classList.remove('black');
    }
  });
}

function carouselVideos(){
  var mainIframe = document.querySelector('.carousel-main');
  var videoList = document.querySelectorAll('.video-item');
  videoList[0].parentNode.classList.remove('deactive');
  for(i=0; i<videoList.length; i++){
    videoList[i].addEventListener('click', function(){
      for(g=0; g<videoList.length; g++){
        videoList[g].parentNode.classList.add('deactive');
      }
      this.parentNode.classList.remove('deactive');
      var videoVim = this.dataset.vimeo;
      mainIframe.src = videoVim;
    });
  }
}

function closeWindow() {
  var closeButton = document.querySelectorAll('.close-window');
  var pageWrapper = document.querySelector('.gs-home-page-slider');
  for(i=0; i<closeButton.length; i++){
    closeButton[i].addEventListener('click', function(){
      var visible = document.querySelector('.visible');
      var enlarge = document.querySelector('.enlarge');
      if(enlarge) {
        var enlargeList = document.querySelectorAll('.hover-enlarge');
        for(j=0; j<enlargeList.length; j++) {
          enlargeList[j].classList.remove('hide');
        }
        enlarge.classList.remove('enlarge');
      }
      if(visible) {
        opened = false;
        horizontalScroll = true;
        pageWrapper.classList.remove('no-scroll');
        visible.classList.remove('visible');
      }
    })
  }
}

var hasSeenPopUp = false;

function exitIntent() {
  var popUp = document.querySelector(".exit-intent-cirlce");
  var exitClose = document.querySelector('.exit-close-button');
  document.documentElement.addEventListener('mouseleave', function(){
    if(hasSeenPopUp === false ){
      hasSeenPopUp = true
      popUp.classList.add('exit')
    }
  })
  exitClose.addEventListener('click', function(){
    popUp.classList.remove('exit')
  })
}

function specialCircles() {
  var specialscreenWidth = screen.width / 3;
  var specialscreenHeight = screen.height / 3;
  var specialballsanimation = anime({
    targets: '.random-circle',
    keyframes: [
      {translateY: function() { return anime.random(0, specialscreenHeight);} },
      {translateX: function() { return anime.random(0, specialscreenWidth);}},
      {translateY: function() { return anime.random(0, specialscreenHeight);}},
      {translateX: function() { return anime.random(0, specialscreenWidth);}},
      {translateY: function() { return anime.random(0, specialscreenHeight);}}
    ],
    delay: anime.stagger(200),
    direction: 'alternate',
    easing: 'spring(1, 80, 10, 0)',
    loop: true,
    autoplay: false,
    duration: anime.random(10000, 7000)
  });

  console.log(specialballsanimation);

  function specialanimateCricles(){
    console.log(specialscreenWidth, specialscreenHeight);
    specialrandomCircles();
  }specialanimateCricles();

  function specialletsplayball(){
    specialballsanimation.play();
  }specialletsplayball();

  function specialonscrollanimate() {
    var isHome = document.querySelector('.gs-splash');
    if(isHome && !isMobile()){
      function scroll(){
        console.log('runnin');
          var homeslides = document.querySelectorAll('.gs-slide');
          for(i=0; i<homeslides.length; i++) {
            var left = homeslides[i].getBoundingClientRect().left;
            if(left < (window.innerWidth / 2) && left > -(window.innerWidth / 2)) {
              homeslides[i].classList.add('inview');
              //at this point if the user stops scrolling snap to the the left of the screen
              homeslides[i].scrollIntoView({behavior: "smooth"});

              if(homeslides[i].classList.contains('special-circles-slide')){
                window.requestAnimationFrame(specialletsplayball);
              } else {
                specialballsanimation.pause();
              }
            }else {
              homeslides[i].classList.remove('inview');
            }
          }
        }
        var throttleScroll = _.throttle(scroll, 100);
        document.addEventListener('wheel', throttleScroll);
    } else if(isMobile()) {
      var homeslides = document.querySelectorAll('.gs-slide');
      for(i=0; i<homeslides.length; i++) {
        homeslides[i].classList.add('inview');
        if(homeslides[i].classList.contains('circles-slide')){
          window.requestAnimationFrame(specialletsplayball);
        } else {
          specialballsanimation.pause();
        }
      }
    }
  }
}

function init(){
  hash();
  animateCricles();
  // randomCircles();
  openpage();
  closepage();
  openarticle();
  closeArticle();
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
  caseStudyheight();
  checkHash();

  if(document.querySelector('.mani-slide')){
    carousel();
    hoverEnlarger();
    logoChange();
    caseStudyMore();
    closeWindow()
    carouselVideos();
    exitIntent();
    specialCircles();
    menu();
  }
}init();
