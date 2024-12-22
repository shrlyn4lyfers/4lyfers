const wrapper = document.querySelector("wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");

yesBtn.addEventListener("click", () => {
    window.location.href = "index2.html";
    question.innerHTML = "I love you too!!!!!";
    gif.src = "https://media.tenor.com/c2ynKEmpAeoAAAAM/puuung-kiss.gif"
});



noBtn.addEventListener("click", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() *maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
