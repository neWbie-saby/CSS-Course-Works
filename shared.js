var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative');
var planButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

for (var i=0; i<planButtons.length; i++) {
    planButtons[i].addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal)
        modal.classList.remove('open');
    backdrop.classList.remove('open');
});

if(noButton){
    noButton.addEventListener('click', () => {
        // modal.style.display = 'none';
        // backdrop.style.display = 'none';
        if(modal)
            modal.classList.remove('open');
        backdrop.classList.remove('open');
    });
}

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

ctaButton.addEventListener('animationstart', (event) => {
    console.log("Animation starts", event);
});

ctaButton.addEventListener('animationend', (event) => {
    console.log("Animation ends", event);
});

ctaButton.addEventListener('animationiteration', (event) => {
    console.log("Animation Iteration", event);
});