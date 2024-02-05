const questions = [
  {
    text: "Will you marry me?",
    image: "1.jpg",
  },
  {
    text: "And NOW?",
    image: "2.jpg",
  },
  {
    text: "What about now ?! 🙂",
    image: "3.jpeg",
  },
  {
    text: "AAAAnd nowww? 😡",
    image: "4.webp",
  },
  {
    text: "You have no choice now 😡",
    image: "last.jpg",
  },
  {
    text: "I love you baby❤️",
    image: "success.jpg",
  },
];

function preloadNextImage(currenIndex = 0) {
    const img = new Image(questions[currenIndex + 1].image);
}

qIndex = -1;
const mainSec = document.getElementById("mainSec");
const container = document.getElementById("container");
const hearts = document.getElementById("hearts");

function next(last = false) {
  if (last === true) {
    qIndex = questions.length - 1;
    hearts.style.display = "block";
  }else{
    qIndex++;
    preloadNextImage(qIndex);
  }
  if (qIndex < questions.length) {
    if (qIndex === questions.length - 1) {
      mainSec.classList.add("last");
    }
    const htmlContent = `
    <img src="${questions[qIndex].image}" />
    <h1>${questions[qIndex].text}</h1>
    <br/>
   <div class="btns">
   ${
     qIndex < questions.length - 1
       ? `  <button onclick="next(true)" class="success-btn index-${qIndex}">Yes</button>`
       : ""
   }
   ${
     qIndex < questions.length - 1
       ? ` <button onclick="next(false)" class="danger-btn index-${qIndex}"">No</button>`
       : ""
   }
   
   </div>
    `;

    container.innerHTML = htmlContent;
  }
}
window.addEventListener("DOMContentLoaded", () => {
  next(false);
});
