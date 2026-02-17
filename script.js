const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(sec=>{
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 1s ease";
});
