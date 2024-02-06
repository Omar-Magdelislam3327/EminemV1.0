
let cover=document.querySelector(".cover");
window.addEventListener("load" , ()=>{
    cover.style.opacity = 0;
    setTimeout(()=>{
        cover.style.display ="none";
    },2000)
})
function openImage(src) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex='99999';

    const modalImage = document.createElement('img');
    modalImage.src = src;
    modalImage.style.maxWidth = '80%';
    modalImage.style.maxHeight = '80%';

    modal.onclick = function() {
        document.body.removeChild(modal);
    };


    modal.appendChild(modalImage);

    document.body.appendChild(modal);
}

var aud = document.querySelectorAll(".myAudio");

  function playAudio(index) {
    for (var i = 0; i < aud.length; i++) {
      if (i !== index) {
        aud[i].pause();
      }
    }

    if (aud[index].paused) {
      aud[index].play();
      document.getElementsByClassName("audioButton")[index].innerHTML = 'Pause Audio';
    } else {
      aud[index].pause();
      aud[index].currentTime = 0;
      document.getElementsByClassName("audioButton")[index].innerHTML = 'Play Audio';
    }
  }

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


function scrollToTop() {
    document.documentElement.scrollTop = 0; 
}
