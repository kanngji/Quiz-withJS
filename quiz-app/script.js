const quizData = [
  {
    question: "강지훈의 출생년도",
    a: "1993",
    b: "1995",
    c: "1996",
    d: "1994",
    correct: "d",
  },
  {
    question: "What is not kangji's favorite 베라 pick?",
    a: "뉴욕치즈케이크",
    b: "아몬드 봉봉",
    c: "체리쥬빌레",
    d: "사랑에 빠진 딸기",
    correct: "d",
  },
  {
    question: "where kangji lives?",
    a: "하양",
    b: "부산",
    c: "양산",
    d: "경주",
    correct: "c",
  },
  {
    question: "what kangji eat breakfast?",
    a: "씨리얼",
    b: "빵",
    c: "과일",
    d: "삶은 계란",
    correct: "a",
  },
  {
    question: "강지훈이 자기전에 먹는것은?",
    a: "초코파이류 ,우유",
    b: "과일",
    c: "비타민 d",
    d: "물 한컵",
    correct: "a",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer

  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO: Show results
      quiz.innerHTML = `<h2>당신의 점수는 ${score}/${quizData.length} 입니다</h2>`;
    }
  }
});
