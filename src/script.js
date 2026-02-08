const heart = document.querySelector("img");
const panelQuestion = document.querySelector("#element_1");
const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");

heart.addEventListener("click", () => {
    panelQuestion.style.display = "flex";
});

noBtn.addEventListener("mouseenter", () => {

    const panelRect = panelQuestion.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = panelRect.width - btnRect.width;
    const maxY = panelRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});


yesBtn.addEventListener("click", () => {

    const newPanel = document.createElement("div");
    newPanel.classList.add("panel", "pixel_font");

    newPanel.innerHTML = `
        <h1>УРААА ❤️</h1>
        <h1>Теперь ты официально моя валентинка</h1>
    `;

    document.body.appendChild(newPanel);
});
