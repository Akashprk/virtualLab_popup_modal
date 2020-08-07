

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0 ;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];


// Push the // QUESTION:  into availableQuestion Array
function setAvailableQuestions(){
  const totalQuestion = quiz.length;
  for(let i = 0 ; i<totalQuestion; i++){
    availableQuestions.push(quiz[i])
  }
}

function getNewQuestion(){
 // set question number
 questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

 // set question questionText
 // get random question

 const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]

 currentQuestion = questionIndex;
 questionText.innerHTML = currentQuestion.q;

 // get the position of 'questionIndex' from the availableQuestion Array;

 const index1 = availableQuestions.indexOf(questionIndex);
 // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat again

 availableQuestions.splice(index1,1);

// set options
// get the length of options

const optionlen = currentQuestion.options.length
// push options into availableOptions Array

for(let i =0 ; i< optionlen ; i++){
  availableOptions.push(i)
}

 let animationDelay = 0.2;

 // create options in HTML

 for(let i =0 ; i < optionlen; i++){
   // random opton
   const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
   // get the position of 'optonIndex' from the availableOptions
   const index2 = availableOptions.indexOf(optonIndex);

  // remove the 'optionIndex' from the availableOptions, so that the option does not repeat

  availableOptions.splice(index2,1);



   const option = document.createElement("div");
   option.innerHTML = currentQuestion.options[optonIndex];
   option.id = optonIndex;
   option.style.animationDelay = animationDelay + 's';
   animationDelay = animationDelay + 0.2;

   // .classname this error take 2 hours to solve it very funny ...

   option.className = "option";
   optionContainer.appendChild(option)
   option.setAttribute("onclick","getResult(this)");
 }
 questionCounter++
}

// get the result of current attempt question

function getResult(element){
  const id = parseInt(element.id);
  // get the answer by comparsing the id of clicked option
  if(id === currentQuestion.answer){
    // set the green color to the correct option
    element.classList.add("correct");
  }
  else{
    // set the red color for wrong answer
    element.classList.add("wrong");
  }
}

function next(){
  if(questionCounter === quiz.length){
    console.log("quiz over");
  }
  else{
    getNewQuestion();
  }
}


window.onload = function(){
  // first we will set all the question in availableQuestion Array
  setAvailableQuestions();
  // second we call getNewQuestion(); function
  getNewQuestion();
}
