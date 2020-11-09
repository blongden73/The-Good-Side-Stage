console.log('the good side', 'v1');

var horizontalScroll = true;

//when the page loads it needs to check the url to see if there is a horizontal scroll query in there

$(function() {
   $(".gs-home-page-slider").mousewheel(function(event, delta) {
     if(horizontalScroll) {
       this.scrollLeft -= (delta * 5);
       event.preventDefault()
      }
   });
});

//init lax
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollX)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
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
      console.log('click');
      var open = document.querySelector('.gs-slide.open');
      console.log(open);
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
  console.log(closePageSelector, 'close');
  closePageSelector.addEventListener('click', function(){
    var closedPages = document.querySelectorAll('.gs-slide.close');
    console.log('clicked', closedPages);
    var sectionToClose = document.querySelector('.page-selector.open');
    console.log(sectionToClose);
    horizontalScroll = true;
    sectionToClose.classList.remove('open');
    for(i=0; i < closedPages.length; i++) {
      closedPages[i].classList.remove('close');
    }
    this.classList.remove('active');
  });
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
  console.log(divs);
  // get window width and height
  var winWidth = window.innerWidth - 100;
  var winHeight = window.innerHeight - 100;
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
