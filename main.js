//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ INTRO ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ THEME ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

const themeToggleButton = document.getElementById('toggle');

const theme = localStorage.getItem('theme');

if (theme) {
    document.body.classList.add('dark-theme');
}

handleThemeToggle = () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
};

themeToggleButton.addEventListener('click', handleThemeToggle);

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ TOGGLE POSITION ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

document.getElementById('toggle').checked = localStorage.getItem('theme') === 'dark-theme';

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ MENU SLIDE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

function toggleMenu() {
    var menu = document.querySelector('.menu');
    var rightPosition = menu.style.right;
    var menuToggle = document.querySelector('.toggle-menu');

    if (rightPosition == '0px') {
      menu.style.right = '-150px';
    }
    else {
      menu.style.right = '0px';
    }
  }

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ BACK TO TOP BUTTON ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

const backToTopButton = document.getElementById('backtotop-button');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        backToTopButton.setAttribute('class', 'scale-in-center')
        backToTopButton.style.display = 'flex'
    } else {
       backToTopButton.setAttribute('class', 'scale-out-center')
       backToTopButton.style.display = 'hidden'
    }
}

backToTopButton.onclick = function () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ FULL SCREEN IMAGE VIEW ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var galleryImages = document.querySelectorAll('.portfolio .gallery img');
    var span = document.getElementsByClassName('close')[0];
  
    galleryImages.forEach(function(img) {
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('show'), 10);
        modalImg.src = this.src;
      });
    });
  
    span.onclick = function() {
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = 'none', 250);
    }
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 250);
    }
});