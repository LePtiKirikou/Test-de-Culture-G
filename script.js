const quizData = [
    {
      question: "Qui a peint le tableau intitulé 'Le champ des coquelicots' ?",
      options: ["Leonard de Vinci", "Claude Monet", "Vincent van Gogh", "Paul Cézanne"],
      answer: "Claude Monet",
    },
    {
      question: "Qui a gagné la coupe du monde de football en 2002 ?",
      options: ["Brésil", "Allemagne", "Italie", "Argentine"],
      answer: "Brésil"
    },
    {
      question: "Qui est l'auteur du personnage ayant prononcé la phrase 'C’est un roc, c’est un pic, c’est un cap, que dis-je c’est une péninsule'?",
      options: ["Corneille", "Rostand", "Molière", "Racine"],
      answer: "Rostand"
    },
    {
      question: "Quelle est la capitale du Chili ?",
      options: ["Santiano", "San Francisco", "Santemoro", "Santiago"],
      answer: "Santiago"
    },
    {
        question: "Combien existe-t-il de notes de musique ?",
        options: ["7", "9", "10", "12"],
        answer: "12"
      },
      {
        question: "Quel est le nom de l'album du groupe Nirvana sorti en 1991 ?",
        options: ["Bleach", "Nirvana", "Nevermind", "MTV Unplugged"],
        answer: "Nevermind"
      },
      {
        question: "Quel aliment n'est pas utilisé dans la recette du pesto ?",
        options: ["Coriandre", "Parmesan", "Pignon de Pin", "Ail"],
        answer: "Coriandre"
      },
      {
        question: "Quel est le nom du plus grand désert du monde ?",
        options: ["Gobi", "Sahara", "Antarctique", "Arctique"],
        answer: "Antarctique"
      },
      {
        question: "Quel est le nom de l'acteur qui a interprété le rôle de James Bond dans le film 'Casino Royale' de 2006",
        options: ["Sean Connery", "Daniel Craig", "Tom Cruise", "Pierre Brosnan"],
        answer: "Daniel Craig"
      },
      {
        question: "Qui a écrit l'oeuvre '1984' ?",
        options: ["Marc Levy", "George Orwell", "Guillaume Musso", "Françoise Bourdin"],
        answer: "George Orwell"
      },
      {
        question: "Quel fromage est utilisé dans l'aligot ?",
        options: ["Roquefort", "Emmental", "Fourme", "Tomme"],
        answer: "Tomme"
      },
      {
        question: "De quel pays Ljubljana est-elle la capitale ?",
        options: ["Slovénie", "Slovaquie", "Croatie", "Albanie"],
        answer: "Slovénie"
      },
      {
        question: "Quel instrument Link utilise-t-il dans 'The Legend Of Zelda : Wind Waker ?'",
        options: ["Un Saxophone", "Une Baguette", "Un Ocarina", "Une Flûte"],
        answer: "Une Baguette"
      },
      {
        question: "Quelle pièce peut passer au dessus des autres aux échecs ?",
        options: ["Le Fou", "Le Roi", "Le Cavalier", "La Dame"],
        answer: "Le Cavalier",
      },
      {
        question: "Laquelle de ces plantes est toxique pour les chats ?",
        options: ["Basilic", "Lys", "Menthe", "Pétunia"],
        answer: "Lys"
      },
      {
        question: "Quelle marque n'est pas allemande ?",
        options: ["Audi", "BMW", "Mercedes", "Ford"],
        answer: "Ford"
      },
      {
        question: "En quelle année youtube a été créé ?",
        options: ["2004", "2005", "2006", "2007"],
        answer: "2005",
      },
      {
        question: "Quel film a obtenu le plus gros succès au box office ?",
        options: ["Avatar", "Titanic", "Avengers:Endgame", "Star Wars VII"],
        answer: "Avatar"
      },
      {
        question: "À quelle couleur le code hexadécimal '00FF00' correspond-il ?",
        options: ["Rouge", "Vert", "Bleu", "Jaune"],
        answer: "Vert"
      },
      {
        question: "Quelle suite correspond à celle de Fibonacci ?",
        options: ["1,1,2,3,5,8", "1,2,4,8,16,32", "1,2,6,24,120", "1,2,4,6,3,5"],
        answer: "1,1,2,3,5,8"
      },
      {
        question: "Laquelle de ces années n'était pas bissextile ?",
        options: ["1900", "1940", "1980", "2000"],
        answer: "1900",
      },
      {
        question: "Lequel de ces astres n'a pas de satellite naturel ?",
        options: ["Mercure", "Terre", "Mars", "Pluton"],
        answer: "Mercure"
      },
      {
        question: "Quel est le nom de l'inventeur du téléphone ?",
        options: ["Thomas Edison", "Robert Oppenheimer", "Alexander Graham Bell", "Thomas Adams"],
        answer: "Alexander Graham Bell"
      },
      {
        question: "Quel est le nom de la plus haute montagne d'Amérique du Nord ?",
        options: ["Mont Logan", "Mont Kilimandjaro", "Mont Everest", "Mont Denali"],
        answer: "Mont Denali"
      },
      {
        question: "Qui a écrit 'Le rouge et le noir'",
        options: ["Stendhal", "Maupassant", "Zola", "Dumas"],
        answer: "Stendhal"
      },
      {
        question: "Combien y a t-il de joueurs dans une équipe de volley ?",
        options: ["4", "5", "6", "7"],
        answer: "6",
      },
      {
        question: "Quel est le nom du chanteur britannique qui a écrit des chansons telles que 'Space Oddity' et 'Heroes' ?",
        options: ["Freddy Mercury", "David Bowie", "John Lennon", "Elvis Presley"],
        answer: "David Bowie"
      },
      {
        question: "Quel est le nom du dieu grec de l'amour ?",
        options: ["Cronos", "Thanatos", "Amos", "Eros"],
        answer: "Eros"
      },
      {
        question: "En quelle année le premier président de la 5ème république a-t-il été élu ?        ",
        options: ["1950", "1958", "1961", "1968"],
        answer: "1958",
      },
      {
        question: "Ce test est-il le meilleur que vous ayez jamais vu ?",
        options: ["Oui", "Oui", "Oui", "Oui"],
        answer: "Oui"
      },
    ]
  
  const questionEl = document.getElementById('question');
  const answerBtnsEl = document.getElementById('answer-buttons');
  const submitBtn = document.getElementById('submit-button');
  const scoreBtn = document.getElementById('score-button');
  const quizContainer = document.getElementById('quiz-container');
  const answerButtons = document.getElementById("answer-buttons").querySelectorAll(".btn");
  let currentQuestionIndex = 0;
  var score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    answerBtnsEl.innerHTML = '';
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('btn');
      if (option === currentQuestion.answer) {
        button.dataset.correct = true;
      }
      button.addEventListener('click', selectAnswer);
      answerBtnsEl.appendChild(button);
    });
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerBtnsEl.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
      button.disabled = true;
    });
    if (correct) {
      score++;
    }
    if (currentQuestionIndex < quizData.length - 1) {
      submitBtn.innerText = 'Suivant';
    } else {
      submitBtn.innerText = 'Terminer';
      scoreBtn.classList.remove('hidden');
    }
  }
  

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  
  function showScore() {
    quizContainer.innerHTML = `
      <h2>Votre score est ${score} sur ${quizData.length}</h2>
      <button class="btn" onclick="location.reload()">Recommencer</button>
    `;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  loadQuestion();
  
  submitBtn.addEventListener('click', () => {
    if (submitBtn.innerText === 'Valider') {
      selectAnswer();
    } else {
      nextQuestion();
    }
  });
  
  scoreBtn.addEventListener('click', showScore);