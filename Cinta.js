const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noßtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
   question.innerHTML = "Aaaaa, Aku Juga Suka Kamuuu :3";
   gif.src =
      "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noBtn.addEventListener("mouseover", () => {
	const noBtnRect = noBtn.getBoundingClientRect();
const maxx = window.innerWidth -noBtnRect.width;
const maxY = window.innerHeight -noBtnRect.height;

const randomX = Math.floor(Math.random() *maxx);
const randomY = Math.floor(Math.random() *maxY);
noBtn.style.left = randomX + "px";
noßtn.style.top = randomy + "px"; 
});