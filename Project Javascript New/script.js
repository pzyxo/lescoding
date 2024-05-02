// button to the top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// end of button to the top

// check if login or not
var isLogin = sessionStorage.getItem('isLogin');
if (!isLogin || isLogin === 'false') {
    // Redirect ke halaman login
    window.location.href = 'login.html';
} 
// end of check

