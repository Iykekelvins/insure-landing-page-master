const nav = document.querySelector('.nav-list-nav-btn');
const closeBtn = document.querySelector('.close-btn');
const barsBtn = document.querySelector('.bars-btn');

barsBtn.addEventListener('click', function(){
    nav.classList.add('show-nav');
    barsBtn.classList.add('hide-bars');
    closeBtn.classList.add('show-close')
})

closeBtn.addEventListener('click', function(){
    nav.classList.remove('show-nav');
    barsBtn.classList.remove('hide-bars');
    closeBtn.classList.remove('show-close')
})

