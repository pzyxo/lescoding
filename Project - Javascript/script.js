//scroll down
function scrollWin(x, y) {
    window.scrollBy(x, y);
}

// ganti gambar
var picture = document.getElementById("picture");
var listPicture = ["./assets/pochita.png", "./assets/pochita-cute.jpg", "./assets/pochita-cry.png", "./assets/pochita-happy.jpg", "./assets/pochita2.jpg", "./assets/pochita-angry.jpg", "./assets/pochita-rabbit.jpg"];
var indeks = 0;
var random = Math.floor(Math.random() * 6);
picture.src = listPicture[random];

function changePicture() {
    indeks++;
    if (indeks == listPicture.length) {
        indeks = 0;
    }
    picture.src = listPicture[indeks];
}

// ubah nama
var tempatNama = document.getElementById("nama");
var savedNama = localStorage.getItem('nama');
tempatNama.innerHTML = savedNama;

function ubahNama() {
    var namaBaru = prompt("Masukkan nama kamu");
    localStorage.setItem('nama', namaBaru);
    var savedNama = localStorage.getItem('nama');
    tempatNama.innerHTML = savedNama;
}


// carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// toggle class active
var navLinks = document.querySelectorAll("ul li a");
var sections = document.querySelectorAll("section");
var sectionPositions = [];
var currentActiveIndex = 0;

function toggleActive() {
    for (var i = 0; i < navLinks.length; i++) {
        if (sectionPositions[i] <= window.pageYOffset) {
            currentActiveIndex = i;
        }
    }

    for (var i = 0; i < navLinks.length; i++) {
        if (i === currentActiveIndex) {
            navLinks[i].classList.add("active");
        } else {
            navLinks[i].classList.remove("active");
        }
    }
}

function calculatePositions() {
    for (var i = 0; i < sections.length; i++) {
        sectionPositions[i] = sections[i].getBoundingClientRect().top + window.pageYOffset;
    }
}

calculatePositions();
toggleActive();

window.addEventListener("scroll", function () {
    toggleActive();

    var currentSection = sections[currentActiveIndex];
    var sectionTop = currentSection.getBoundingClientRect().top;
    var sectionBottom = currentSection.getBoundingClientRect().bottom;

    if (sectionTop >= window.innerHeight || sectionBottom <= 0) {
        navLinks[currentActiveIndex].classList.remove("active");
    }
});

// hobbies

function tampilDetail(card) {
    card.classList.toggle("active");

};

