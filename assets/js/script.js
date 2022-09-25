
$("#end-display").css("display", "none");

// Modal
var showingModal = false;

function showModal() {
    if (showingModal == true) {
        $("#modal").css("display", "block");
        $("#modal").removeClass("opacity-0");
        $("#modal").addClass("opacity-100");
    } else {
        $("#modal").css("display", "none");
        $("#modal").removeClass("opacity-100");
        $("#modal").addClass("opacity-0");
    }
}
$("#high-scores-btn").on("click", function () {
    showingModal = true;
    showModal();
});
$("#modal-close-btn").on("click", function () {
    showingModal = false;
    showModal();
});
showModal();

// High Scores JS
if (localStorage.getItem("music-trivia-scores") == null) {
    localStorage.setItem("music-trivia-scores", JSON.stringify([]));
}

$("#submit-btn").click(function () {
    addUserScore($("#username-input").val, $("#points").text());
    location.reload();
});

function sortScores(arrayOfArrays) {
    return arrayOfArrays.sort((a, b) => b[1] - a[1]);
};

function addUserScore(user, score) {
    userScores.push([user, score]);
    localStorage.setItem("music-trivia-scores", JSON.stringify(sortScores(userScores)));
}

var userScores = JSON.parse(localStorage.getItem("music-trivia-scores"));

// Display High Scores in High Score Modal
if (userScores.length >= 1) {
    for (let i = 1; i < 6; i++) {
        if(i <= userScores.length){
            $(`#user-${i}`).text(userScores[i-1][0]);
            $(`#score-${i}`).text(userScores[i-1][1]);
        }
    }
}

// Dave's Code
var eighties = document.getElementById('eightiesBtn');
var ninties = document.getElementById('nintiesBtn');
var early = document.getElementById('earlyBtn');
var current = document.getElementById('currentBtn');

var heroImage = document.getElementById('hero-image');
var heroText = document.getElementById('hero-text');
var hero = document.getElementById('hero');
var genreText = document.getElementById('genreText');
var buttonContainerChildDiv = document.createElement("div");
var buttonContainer = document.createElement("div");
var startButton = document.createElement("button");
var heroBg = document.getElementById('hero-bg');
var heroBgClass = "relative shadow-xl sm:rounded-2xl sm:overflow-hidden";
var heroContainer = document.querySelector('.hero-container');

function setStage() {
    buttonContainer.setAttribute("class", "mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center");
    buttonContainer.setAttribute("id", "buttonContainer");
    buttonContainerChildDiv.setAttribute("class", "space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5");
    buttonContainerChildDiv.setAttribute("id", "buttonContainerChildDiv");
    startButton.setAttribute("class", "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8");
    startButton.setAttribute("id", "start");
    startButton.textContent = "Click to Start Game";
}

var selectedGenre = "";

eighties.addEventListener('click', function () {

    setStage();
    heroBgClass = heroBgClass + " bg-purple-600";
    selectedGenre = "eighties";
    getSpotifyResp(selectedGenre);
    genreText.remove();
    heroText.textContent = "80's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/1980s-hero.png");
});
ninties.addEventListener('click', function () {

    setStage();
    heroBgClass = heroBgClass + " bg-orange-600";
    selectedGenre = "ninties";
    getSpotifyResp(selectedGenre);
    genreText.remove();
    heroText.textContent = "90's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/1990s-hero.png");
});
early.addEventListener('click', function () {
    setStage();
    heroBgClass = heroBgClass + " bg-red-600";
    selectedGenre = "early";
    getSpotifyResp(selectedGenre);
    genreText.remove();
    heroText.textContent = "00's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/2000s-hero.png");
});
current.addEventListener('click', function () {
    setStage();
    heroBgClass = heroBgClass + " bg-yellow-600";
    selectedGenre = "current";
    getSpotifyResp(selectedGenre);
    genreText.remove();
    heroText.textContent = "10's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/2010s-hero.png");
});

// start quiz
let questionIndex = 0;
startButton.addEventListener('click', function () {
    startButton.remove();
    heroImage.remove();
    hero.setAttribute("class", "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-24 lg:px-8");
    setGameQuestion(questionIndex);

});

var buttonWrapper = document.getElementById('wrapper');
buttonWrapper.setAttribute("class", "answerWrapper");

function setGameQuestion(questionIndex) {

    heroText.textContent = musicObjectArr[questionIndex].triviaQ;
    heroText.setAttribute("question-value", questionIndex);

    var answerContainer = document.createElement('div');
    answerContainer.setAttribute('class', "grid grid-cols-1 gap-4 sm:grid-cols-2");
    heroBg.setAttribute("class", heroBgClass);
    var playParent = document.createElement('div');
    var playChildOne = document.createElement('div');
    var playChildOneOne = document.createElement('div');
    var playImage = document.createElement('img');
    var playChildTwo = document.createElement('div');
    var playChildTwoOne = document.createElement('div');
    var playChildTwoAhref = document.createElement('a');
    var playChildTwoPara = document.createElement('p');
    playParent.setAttribute("class", "max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl play-parent");
    playChildOne.setAttribute("class", "md:flex play-child-one");
    playChildOneOne.setAttribute("class", "md:shrink-0 play-child-one-one");
    playImage.setAttribute("class", "h-48 w-full object-cover md:h-full md:w-80 play-image");
    playImage.setAttribute("src", musicObjectArr[questionIndex].track_image);
    playChildTwo.setAttribute("class", "p-8 play-child-two");
    playChildTwoOne.setAttribute("class", "uppercase tracking-wide text-sm text-indigo-500 font-semibold play-child-two-one");
    playChildTwoAhref.setAttribute("class", "block mt-1 text-xl font-semibold text-gray-900 leading-tight font-medium  play-child-two-a");
    playChildTwoAhref.textContent = "Click Here to Play a Sample of the Song";
    playChildTwoAhref.setAttribute("href", musicObjectArr[questionIndex].preview_url);
    playChildTwoAhref.setAttribute("target", "_blank");
    playChildTwoPara.setAttribute("class", "mt-2 text-slate-500 play-child-two-p");
    playChildTwoOne.appendChild(playChildTwoAhref);
    playChildTwoOne.appendChild(playChildTwoPara);
    playChildTwo.appendChild(playChildTwoOne);
    playChildOneOne.appendChild(playImage);
    playChildOne.appendChild(playChildOneOne);
    playChildOne.appendChild(playChildTwo);
    playParent.appendChild(playChildOne);
    hero.appendChild(playParent);

    for (i = 0; i < 4; i++) {


        var answerContainerChildTwo = document.createElement('div');
        var answerContainerChildThree = document.createElement('div');
        var answerImage = document.createElement('img');
        var answerContainerChildFour = document.createElement('div');
        var answerChoice = document.createElement('a');
        var answerChoiceText = document.createElement('p');

        answerImage.style.pointerEvents = 'none';
        answerContainerChildFour.style.pointerEvents = 'none';
        answerChoice.style.pointerEvents = 'none';
        answerChoiceText.style.pointerEvents = 'none';
        answerChoiceText.textContent = musicObjectArr[questionIndex].possible_answers[i];

        answerContainerChildTwo.setAttribute("aid", i);
        answerContainerChildTwo.setAttribute("class", "relative rounded-lg border border-gray-300 bg-white px-6 py-6 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500");
        answerContainerChildThree.setAttribute("class", "flex-shrink-0");
        answerImage.setAttribute("class", "h-5 w-5 rounded-full");
        answerImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/1200px-Small-dark-green-circle.svg.png");
        answerImage.setAttribute("alt", "Green Circle");

        answerContainerChildFour.setAttribute("class", "flex-1 min-w-0");
        answerChoice.setAttribute("class", "focus:outline-none");
        answerChoiceText.setAttribute("class", "text-sm font-medium text-gray-900");

        answerChoice.appendChild(answerChoiceText);
        answerContainerChildFour.appendChild(answerChoice);
        answerContainerChildThree.appendChild(answerImage);
        answerContainerChildTwo.appendChild(answerContainerChildThree);
        answerContainerChildTwo.appendChild(answerContainerChildFour);
        answerContainer.appendChild(answerContainerChildTwo);
        buttonWrapper.appendChild(answerContainer);
        answerContainerChildTwo.addEventListener('click', function (event) {
            var userChoice = event.target.getAttribute("aid");
            var questioNumber = heroText.getAttribute('question-value');
            answerContainer.remove();
            playParent.innerHTML = "";
            playParent.remove();
            checkAnswer(userChoice, questioNumber);
        })

    }



};

var score = 0;
var scoreIncorrect = 0;
var scoreCorrect = 0;

function checkAnswer(userChoice, questioNumber) {
    questionIndex += 1;
    theAnswer = musicAnsKey.find(theQuestion => theQuestion.id == questioNumber);
    //console.log(theAnswer);
    if (theAnswer.correctAnswerIndex == userChoice) {
        // answerResponse.textContent = "Correct";
        score = score + 5;
        scoreCorrect += 1;
        //console.log("correctAnswer");
        //console.log(score);
    } else {
        scoreIncorrect += 1;
        //answerResponse.textContent = "Incorrect";
        //console.log("incorrentAnswer");
        //console.log(score);
    }
    if (questionIndex < 5) {
        setGameQuestion(questionIndex);
    } else {
        $("#points").text(score);
        $("#scoreIncorrect").text(scoreIncorrect);
        $("#scoreCorrect").text(scoreCorrect);
        endGame();
    }
};



function endGame() {
    $("#end-display").css("display", "block");
    hero.setAttribute("class", "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8");
    heroText.textContent = "Game Over";
    heroImage.setAttribute("src", "./assets/images/times-up-hero.png");
    heroContainer.appendChild(heroImage);
    heroBg.appendChild(heroContainer);
    heroBg.appendChild(hero);
};


// To Do:
// Confetti in the background
// 