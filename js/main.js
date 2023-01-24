
var grid = document.querySelector('.masonry-grid');
var masonry = new Masonry( grid, {
  // options
  itemSelector: '.masonry-item',
  columnWidth: '.masonry-item',
  percentPosition: true
});

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