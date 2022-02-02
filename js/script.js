const apil = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text My Language",
        c: "hello is the land",
        d: "4Hypertext Markup Language",
        ans: "ans4"
    },

    {
        question: "Q2: What is the full form of eeee?",
        a: "Hello To My Land",
        b: "Hey Text My Language",
        c: "3hello is the land",
        d: "Hypertext Markup Language",
        ans: "ans3"
    },

    {
        question: "Q3: What is the full form of rrrr?",
        a: "Hello To My Land",
        b: "2Hey Text My Language",
        c: "hello is the land",
        d: "Hypertext Markup Language",
        ans: "ans2"
    },

    {
        question: "Q4: What is the full form of aaaa?",
        a: "1 Hello To My Land",
        b: "Hey Text My Language",
        c: "hello is the land",
        d: "Hypertext Markup Language",
        ans: "ans1" 
    },

    {
        question: "Q5: What is the full form of rrrr?",
        a: "Hello To My Land",
        b: "Hey Text My Language",
        c: "3hello is the land",
        d: "Hypertext Markup Language",
        ans: "ans3"
    },
    {
        question: "Q6: What is the full form of rrrr?",
        a: "Hello To My Land",
        b: "2Hey Text My Language",
        c: "hello is the land",
        d: "Hypertext Markup Language",
        ans: "ans2"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer'); //refrence of class answer for multiple class(anser) 
const showScore = document.querySelector('#showScore'); // refrence -- fxn call to how score

let questionCount= 0;
let score = 0;



const loadQuestion = ( ) =>{

    const questionList = apil[questionCount];

    question.innerHTML= questionList.question;

    option1.innerHTML= questionList.a;
    option2.innerHTML= questionList.b;
    option3.innerHTML= questionList.c;
    option4.innerHTML= questionList.d;


}

loadQuestion();   // fnx to load question 
  
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {       //checks from begining opt 1....
        if(curAnsElem.checked){
           answer = curAnsElem.id;           //we get and check id of which(answer) user click
        }  

    } );
    return answer;

};
                                     
const deselectAll = () => {                       
     answers.forEach((curAnsElem) => {curAnsElem.checked = false });
}                                           // code of function of deslect

submit.addEventListener('click',() => {              //to check the answer 
    const checkedAnswer = getCheckAnswer();    //get id 
    console.log(checkedAnswer);


   if (checkedAnswer == apil[questionCount].ans){
       score++;

   };

   questionCount++;                      // inc br 1 -- to get another questionafter submite button is clicked
   deselectAll();                      //to delect checked answer in next question 
    
   if (questionCount < apil.length){
       loadQuestion();
   }
    else
    {
      showScore.innerHTML = `
         <h3> You scored ${score}/${apil.length} 🏆 </h3>  

         <button class="btn" onclick="location.reload()"> Play Again  </button>
      `;      //text to show with score 

        showScore.classList.remove('scoreArea');


    }     





});