const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <img src="fondo.jpg" class="background">
        <div style="
            height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            color:white;
        ">
            <h1>No te dejaría otra opción</h1>
            <h2>Te amo mi flaca ❤️</h2>
        </div>
    `;
});

// corazones
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 300);

