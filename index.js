let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos) {
        // User is scrolling down, fold up the navigation bar
        document.querySelector('.d').style.transform = 'translateY(-100%)';
    } else {
        // User is scrolling up, unfold the navigation bar
        document.querySelector('.d').style.transform = 'translateY(0)';
    }
    prevScrollPos = currentScrollPos;
};
