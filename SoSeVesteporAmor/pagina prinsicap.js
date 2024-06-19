let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); 
}


var modal = document.getElementById("myModal");


var btn = document.getElementById("openModalBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'red';
    hoverBox.style.transform = 'scale(1.1)';
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'black';
    hoverBox.style.transform = 'scale(1)';
});

const hoverBox2 = document.getElementById('hoverBox2');

hoverBox2.addEventListener('mouseover', () => {
    hoverBox2.style.backgroundColor = 'red';
    hoverBox2.style.transform = 'scale(1.1)';
});

hoverBox2.addEventListener('mouseout', () => {
    hoverBox2.style.backgroundColor = 'black';
    hoverBox2.style.transform = 'scale(1)';
});

const hoverBox3 = document.getElementById('hoverBox3');

hoverBox3.addEventListener('mouseover', () => {
    hoverBox3.style.backgroundColor = 'red';
    hoverBox3.style.transform = 'scale(1.1)';
});

hoverBox3.addEventListener('mouseout', () => {
    hoverBox3.style.backgroundColor = 'black';
    hoverBox3.style.transform = 'scale(1)';
});

const hoverBox4 = document.getElementById('hoverBox4');

hoverBox4.addEventListener('mouseover', () => {
    hoverBox4.style.backgroundColor = 'red';
    hoverBox4.style.transform = 'scale(1.1)';
});

hoverBox4.addEventListener('mouseout', () => {
    hoverBox4.style.backgroundColor = 'black';
    hoverBox4.style.transform = 'scale(1)';
});