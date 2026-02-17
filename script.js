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

/* SCIENCE MODAL */

function openTopic(topic){

    const modal = document.getElementById("scienceModal");
    const body = document.getElementById("modalBody");

    if(topic === "blackhole"){
        body.innerHTML = `
        <h2>Inside a Black Hole</h2>
        <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa">
        <p>
        A black hole forms when a massive star collapses under its own gravity.
        At its center lies a singularity — a point of infinite density.
        The boundary around it is called the Event Horizon, beyond which nothing
        can escape, not even light.
        </p>
        `;
    }

    if(topic === "quantum"){
        body.innerHTML = `
        <h2>Quantum Superposition</h2>
        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb">
        <p>
        In quantum mechanics, particles like electrons can exist in multiple states
        simultaneously until observed. This strange phenomenon is called
        superposition. It is demonstrated in the famous Schrödinger's cat thought experiment.
        </p>
        `;
    }

    if(topic === "timedilation"){
        body.innerHTML = `
        <h2>Time Dilation</h2>
        <img src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f1">
        <p>
        According to Einstein’s Theory of Relativity, time moves slower for objects
        traveling at speeds close to light. This effect is called time dilation.
        Astronauts moving at high speeds age slightly slower than people on Earth.
        </p>
        `;
    }

    modal.style.display = "flex";
}

function closeModal(){
    document.getElementById("scienceModal").style.display = "none";
}
