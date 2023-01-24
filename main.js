
var grid = document.querySelector('.masonry-grid');
var masonry = new Masonry( grid, {
  // options
  itemSelector: '.masonry-item',
  columnWidth: '.masonry-item',
  percentPosition: true
});

// Bildpfade in einem Array speichern
var imagePaths = [
  'assets/work/img1.png',
  'assets/work/img2.png',
  'assets/work/img3.png',
  'assets/work/img4.png',
  'assets/work/img5.png',
  'assets/work/img6.png',
  'assets/work/img7.png',
  'assets/work/img8.png',
  'assets/work/img9.png']

  for(var i=0; i < imagePaths.length; i++) {
    var newImage = dacument.createElement('img');
    newImage.scr = imagePaths[i];
    newImage.classList.add('image');
    dacument.querySelector('.masonry-grid').appendChild(newImage);
  }

  masonry.layout();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } 
  })
})

const hiddenElementsLeft = document.querySelectorAll('.fade-in-left');
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.fade-in-right');
hiddenElementsRight.forEach((el) => observer.observe(el));

const hiddenElementsTop = document.querySelectorAll('.fade-in-top');
hiddenElementsTop.forEach((el) => observer.observe(el));

const hiddenElementsDown = document.querySelectorAll('.fade-in-down');
hiddenElementsDown.forEach((el) => observer.observe(el));

const hiddenElements = document.querySelectorAll('.fade-in');
hiddenElements.forEach((el) => observer.observe(el));