const questionEl = document.getElementById("question");
const answerInputEl = document.getElementById("answerInput");
const inputBtn = document.getElementById("btn");
const scoreEl = document.getElementById("score");
let score = 0;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(answer);
const mathFinal = (event) =>{
    // event.preventDefault();
    const random1 = random(1,10); 
    const random2 = random(1,10);
    // console.log ("number is " + random1 , random2);
    const question = `Q. What is ${random1} multiply by ${random2} ?`;
    const answer = random1 * random2;
    questionEl.innerText = question;
    event.preventDefault();
    const userAnswer = parseInt(answerInputEl.value);
    if (userAnswer === answer) {
        score += 1;
    }else{
        score -= 1;
    }
    scoreEl.innerText = score;
    event.target.reset();
  console.log("answer", userAnswer);
}
inputBtn.addEventListener("click", mathFinal );