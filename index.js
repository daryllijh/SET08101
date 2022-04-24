/* reference: https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp */

//an array that holds the questions' details
const questions = [
    {
        question: "img/will_smith_slap.jpg",
		description: "Will Smith Slapping Chris Rock refers to a moment from the 2022 Oscars in which actor and musician Will Smith slapped comedian and actor Chris Rock over a joke he made about his wife Jada Pinkett Smith.",
        optionA: "2019",
        optionB: "2020",
        optionC: "2021",
        optionD: "2022",
        correctOption: "optionD"
    },

    {
        question: "img/john_xina.jpg",
		description: "John Xina is an exploitable image macro of WWE Wrestler John Cena Photoshopped to look like Chinese communist revolutionary Mao Zedong. The image macros associated with the nickname went viral on Twitter because of a video of Cena defending China's military pressure for reunification with Taiwan.",
        optionA: "2012",
        optionB: "2015",
        optionC: "2019",
        optionD: "2021",
        correctOption: "optionD"
    },

    {
        question: "img/doge.jpg",
		description: "On February 13th, 2010, Japanese kindergarten teacher Atsuko Sato posted several photos of her rescue-adopted Shiba Inu dog Kabosu to her personal blog. Among the photos included a peculiar shot of Kabosu sitting on a couch while glaring sideways at the camera with raised eyebrows.",
        optionA: "2008",
        optionB: "2010",
        optionC: "2012",
        optionD: "2016",
        correctOption: "optionB"
    },

    {
        question: "img/trollface.jpg",
		description: "The Trollface was originally drawn by Carlos Ramirez, an Oakland-based artist, as part of a MS Paint webcomic about the pointless nature of trolling on 4chan's.",
        optionA: "2002",
        optionB: "2007",
        optionC: "2008",
        optionD: "2011",
        correctOption: "optionC"
    },

    {
        question: "img/woman_cat.jpg",
		description: "Woman Yelling at a Cat refers to a meme format featuring a screen cap of \"The Real Housewives of Beverly Hills\" cast members Taylor Armstrong and Kyle Richards followed by a picture of a confused-looking cat sitting behind a dinner plate.",
        optionA: "2018",
        optionB: "2019",
        optionC: "2020",
        optionD: "2021",
        correctOption: "optionB"
    },

    {
        question: "img/brian.jpg",
		description: "Bad Luck Brian is an advice animal-style image macro series featuring a photo of a blonde teenage boy wearing a plaid sweater vest and braces, accompanied by captions that describe a variety of embarrassing and tragic occurrences.",
        optionA: "2008",
        optionB: "2012",
        optionC: "2014",
        optionD: "2018",
        correctOption: "optionB"
    },

    {
        question: "img/sad_keanu.jpg",
		description: "Sad Keanu is a photoshop meme based on a paparazzi photograph of the Canadian American actor Keanu Reeves sitting on a park bench and enjoying a sandwich by himself.",
        optionA: "2010",
        optionB: "2011",
        optionC: "2012",
        optionD: "2013",
        correctOption: "optionA"
    },

    {
        question: "img/harold.jpg",
		description: "Hide The Pain Harold is the nickname given to a senior stock photography model whose facial expression appears to indicate suppressed pain and/or discomfort.",
        optionA: "2010",
        optionB: "2011",
        optionC: "2012",
        optionD: "2013",
        correctOption: "optionB"
    },

    {
        question: "img/cash_me.jpg",
		description: "\"Cash Me Ousside / How Bow Dah\" is a memorable quote and catchphrase uttered by 13-year-old Danielle Bregoli on an episode of \"The Dr. Phil Show\", during which she challenges the show's audience to a fight with the phrase \"Catch me outside, how about that?\" in a thick accent.",
        optionA: "2015",
        optionB: "2016",
        optionC: "2017",
        optionD: "2018",
        correctOption: "optionC"
    },

    {
        question: "img/stonks.jpg",
		description: "Stonks is an intentional misspelling of the word \"stocks\" which is often associated with a surreal meme featuring the character Meme Man standing in front of a picture representing the stock market followed by the caption \"Stonks.\" The picture began seeing use as a reaction image online in jokes about making poor financial decisions.",
        optionA: "2015",
        optionB: "2016",
        optionC: "2017",
        optionD: "2018",
        correctOption: "optionC"
    },

    {
        question: "img/disaster_girl.jpg",
		description: "Disaster Girl is a photoshop meme in which an exploitable photo of a smiling girl is superimposed on to images of natural disasters and accidents to imply that she has caused some type of calamity depicted in the background.",
        optionA: "2007",
        optionB: "2009",
        optionC: "2010",
        optionD: "2011",
        correctOption: "optionA"
    },

    {
        question: "img/success_kid.jpg",
		description: "Success Kid, sometimes known as I Hate Sandcastles, is a reaction image of a baby at a beach with a smug facial expression. It has been used in image macros to designate either success or frustration.",
        optionA: "2005",
        optionB: "2007",
        optionC: "2009",
        optionD: "2011",
        correctOption: "optionB"
    },

    {
        question: "img/roll_safe.jpg",
		description: "Roll Safe is an image macro series featuring a screenshot of actor Kayode Ewumi grinning and pointing to his temple while portraying the character Reece Simpson (a.k.a. Roll Safe) in the web series Hood Documentary. The images are often captioned with various jokes mocking poor decision making and failures in critical thinking.",
        optionA: "2012",
        optionB: "2013",
        optionC: "2015",
        optionD: "2016",
        correctOption: "optionD"
    },

    {
        question: "img/thinking.jpg",
		description: "He's Probably Thinking About Other Girls is an image macro series featuring photographs of a woman and man in bed captioned with mock internal monologues in which the woman speculates her partner is \"thinking about another woman\" while the man thinks about a variety of absurd topics.",
        optionA: "2014",
        optionB: "2016",
        optionC: "2018",
        optionD: "2019",
        correctOption: "optionB"
    },

    {
        question: "img/distracted_boyfriend.jpg",
		description: "Distracted Boyfriend is an object labeling stock photo series in which a man looks at the backside of a woman walking by while another woman, presumably his romantic partner, looks on disapprovingly.",
        optionA: "2014",
        optionB: "2015",
        optionC: "2016",
        optionD: "2017",
        correctOption: "optionD"
    }
]

let shuffledQuestions = [] //an empty array to hold shuffled selected questions out of all available questions
let questionNumber = 1 //holds the current question number
let playerScore = 0 //holds the user score
let indexNumber = 0 //holds the questions' position

//start quiz
function startQuiz(){
	document.getElementById("cover").style.display = "none"
	document.getElementById("quiz").style.display = "flex"
	
    NextQuestion(0)
}

//display user and quiz information to DOM
function NextQuestion(index){
    handleQuestions()
	
    const currentQuestion = shuffledQuestions[index]
	
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = "<img src="+currentQuestion.question+">"
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD
	document.getElementById("question-description").innerHTML = currentQuestion.description
}

//suffle and push 10 questions to shuffledQuestions array
function handleQuestions(){
    while (shuffledQuestions.length <= 9){
        const random = questions[Math.floor(Math.random() * questions.length)]

        if (!shuffledQuestions.includes(random)){
            shuffledQuestions.push(random)
        }
    }
}

//close warning modal
function closeOptionModal(){
    document.getElementById("option-modal").style.display = "none"
}

//call checkForAnswer() and reset button highlight
function handleNextQuestion(){
    checkForAnswer() 

    //delay reset process to allow user reflect
    setTimeout(() => {
        resetOptionBackground()
    }, 1000)
}

//check if user picked right or wrong option
function checkForAnswer(){
    const currentQuestion = shuffledQuestions[indexNumber] //get current question 
    const currentQuestionAnswer = currentQuestion.correctOption //get current question's answer
    const options = document.getElementsByName("option") //get all options available for the question
	var mySound //use to hold sound effect
    let correctOption = null //use to hold correct option's position

	//identify the label ID for correct option
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer){
			correctOption = option.labels[0].id
        }
    })

    //display warning message if user pressed the Confirm button without making a choice
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false){
        document.getElementById("option-modal").style.display = "flex"
    }

    //check if user has chosen the right option
    options.forEach((option) => {
		//correct scenario
        if (option.checked === true && option.value === currentQuestionAnswer){
			mySound = new Audio("bgm/correct.mp3")

			mySound.play()

            document.getElementById(correctOption).style.backgroundColor = "green"

            playerScore++
            indexNumber++
			questionNumber++

            //delay background information display to allow user reflect
            setTimeout(() => {
				document.getElementsByClassName("game-options-container")[0].style.display = "none"
				document.getElementsByClassName("game-options-container")[1].style.display = "flex"
				document.getElementsByClassName("modal-button-container")[1].style.display = "none"
				document.getElementsByClassName("modal-button-container")[2].style.display = "flex"
            }, 1000)
        }

		//incorrect scenario
        else if (option.checked === true && option.value !== currentQuestionAnswer){
            const wrongLabelId = option.labels[0].id //holds label ID of user's option
			mySound = new Audio("bgm/wrong.mp3")

			mySound.play()

            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"

            indexNumber++
			questionNumber++

            //delay background information display to allow user reflect
            setTimeout(() => {
				document.getElementsByClassName("game-options-container")[0].style.display = "none"
				document.getElementsByClassName("game-options-container")[1].style.display = "flex"
				document.getElementsByClassName("modal-button-container")[1].style.display = "none"
				document.getElementsByClassName("modal-button-container")[2].style.display = "flex"
            }, 1000)
        }
    })
}

//reset and uncheck all options
function resetOptionBackground(){
    const options = document.getElementsByName("option") //holds all options

    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
		option.checked = false
    })
}

//close background information and continue to next question
function nextQuestion(){
	document.getElementsByClassName("game-options-container")[0].style.display = "flex"
	document.getElementsByClassName("game-options-container")[1].style.display = "none"
	document.getElementsByClassName("modal-button-container")[1].style.display = "flex"
	document.getElementsByClassName("modal-button-container")[2].style.display = "none"

	if (indexNumber <= 9){
        NextQuestion(indexNumber)
    }

    else {
        handleEndGame()
    }
}

//display user result
function handleEndGame(){
	var mySound //use to hold sound effect
    let remark = null //use to hold image name

    //display different meme image for different score
	if (playerScore <= 1){
        remark = "img/you_suck.jpg"
    }

    else if (playerScore >= 2 && playerScore <= 5){
        remark = "img/jedi.jpg"
    }

    else if (playerScore >= 6 && playerScore <= 9){
        remark = "img/impressed.jpg"
    }

    else if (playerScore = 10){
        remark = "img/crazy.jpg"
    }

    const playerGrade = (playerScore / 10) * 100 //holds the player score in percentage

	document.getElementById("remarks").innerHTML = "<img src="+remark+">"
    document.getElementById("grade-percentage").innerHTML = playerGrade
    document.getElementById("right-answers").innerHTML = playerScore
    document.getElementById("score-modal").style.display = "flex"

	mySound = new Audio("bgm/celebration.mp3")

	mySound.play()
}

//close scoreboard and restart the quiz
function closeScoreModal(){
    questionNumber = 1
    playerScore = 0
    indexNumber = 0
    shuffledQuestions = []

    NextQuestion(indexNumber)

    document.getElementById("score-modal").style.display = "none"
}