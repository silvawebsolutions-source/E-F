document.addEventListener("DOMContentLoaded", () => {
    const hoy = new Date();
    const mes = hoy.getMonth() + 1; // Enero es 0
    const dia = hoy.getDate();

    // VALIDACIÓN: Como mañana ya es 4 de Julio, se activará solito.
    if (mes === 7 && dia === 4) {
        activarModoAniversario();
    } else {
        // Modo prueba: Te lo dejo activo hoy para que corrobores que ya se ve perfecto
        activarModoAniversario(); 
    }
});

function activarModoAniversario() {
    const overlay = document.getElementById("anniversary-overlay");
    overlay.style.display = "flex";

    setInterval(createHeart, 300);

    setTimeout(() => {
        const btn = document.getElementById("btn-open-letter");
        btn.style.display = "inline-block";
    }, 4000);
}

function createHeart() {
    const overlay = document.getElementById("anniversary-overlay");
    if (!overlay || overlay.style.display === "none") return;

    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    
    const iconos = ["❤️", "💖", "💝", "✨"];
    heart.innerHTML = iconos[Math.floor(Math.random() * iconos.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    overlay.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

function openAnniversaryLetter() {
    document.getElementById("anniversary-message-box").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("anniversary-message-box").style.display = "none";
    }, 500);

    const scroll = document.getElementById("romantic-scroll");
    scroll.classList.remove("scroll-hidden");
    scroll.classList.add("scroll-visible");

    const audio = document.getElementById("anniversary-music");
    audio.play().catch(err => {
        console.log("El navegador bloqueó el autoplay del audio:", err);
    });
}

function closeAnniversaryLetter() {
    const overlay = document.getElementById("anniversary-overlay");
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.5s ease";
    
    setTimeout(() => {
        overlay.style.display = "none";
        // Descomenta la línea de abajo si quieres redirigir al index anterior de las Polaroids al cerrar:
        // window.location.href = "../index.html";
    }, 500);
}