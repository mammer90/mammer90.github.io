        // Array of trivia data
        var TriviaData = new Array(10)
        createTwoDimensionalArray(3);
 
        // Variables to track state of the game
        // i.e. number questions asked, current correct total and current question
        var questionsAsked = 0;
        var totalCorrect = 0;
        var currentQuestion = 0;
        var selectionValid = false;
 
        // Questions
        TriviaData[0][0] = "Mario was named after the landlord at the Nintendo of America warehouse.";
        TriviaData[1][0] = "Mario is the official mascot of Nintendo.";
        TriviaData[2][0] = "Mario wears a hat because his creators couldn't draw realistic hair.";
        TriviaData[3][0] = "Mario has always worn a red shirt and blue overalls.";
        TriviaData[4][0] = "Mario (or the 'Jumpman') was first seen in 1981's Donkey Kong.";
        TriviaData[5][0] = "Super Mario Bros. is the best selling video game of all time?.";
        TriviaData[6][0] = "Princess Peach was known as Princess Toadstool until about 1996.";
        TriviaData[7][0] = "Super Mario Bros. was released in 1985 for the NES.";
        TriviaData[8][0] = "In 1996 Nintendo sells its billionth cartridge worldwide.";
        TriviaData[9][0] = "The first game that Mario could fly in was Super Mario Bros 3.";
   
        // Answers
        TriviaData[0][1] = "true";
        TriviaData[1][1] = "true";
        TriviaData[2][1] = "true";
        TriviaData[3][1] = "false";
        TriviaData[4][1] = "true";
        TriviaData[5][1] = "true";
        TriviaData[6][1] = "true";
        TriviaData[7][1] = "true";
        TriviaData[8][1] = "true";
        TriviaData[9][1] = "false";
 
        // Has question been asked
        // -- necessary because asking in random order
        TriviaData[0][2] = "no";
        TriviaData[1][2] = "no";
        TriviaData[2][2] = "no";
        TriviaData[3][2] = "no";
        TriviaData[4][2] = "no";
        TriviaData[5][2] = "no";
        TriviaData[6][2] = "no";
        TriviaData[7][2] = "no";
        TriviaData[8][2] = "no";
        TriviaData[9][2] = "no";
 
        // Load up first question
        setQuestion();
 
        // Sets question text and indicator so that you know the question has been displayed
        function setQuestion() {
            selectionValid = false; // Flag to make sure question has not been asked yet
            while (selectionValid == false) {
                currentQuestion = Math.floor(Math.random() * 10); // randomly select starting question
                if (TriviaData[currentQuestion][2] == "no") {
                    selectionValid = true;
                }
            }
            document.getElementById("TriviaQuestion").innerHTML = TriviaData[currentQuestion][0];
            TriviaData[currentQuestion][2] = "yes";
            questionsAsked = questionsAsked + 1;
        }
 
        function processAnswer(myAnswer) {
            if (TriviaData[currentQuestion][1] == myAnswer) {
                // answer correct
                totalCorrect = totalCorrect + 1;
            }
        }
 
        // This function creates a two dimensional array
        function createTwoDimensionalArray(arraySize) {
            for (i = 0; i < TriviaData.length; ++i)
                TriviaData[i] = new Array(arraySize);
        }
 
        // This function checks the answer, updates correct total
        // and randomly selects the next question
        function checkAnswer() {
            if (document.getElementById("RadioTrue").checked) {
                processAnswer("true");
            }
            else {
                processAnswer("false");
            }
            // get next question if not asked all yet
            if (questionsAsked < 10) {
                setQuestion();
            }
            // final question asked - disable button and show final results
            else {
                alert("Nice Job! You got " + totalCorrect + " correct out of 10.");
                document.getElementById("ButtonContinue").disabled = true;
            }
            // update totals
            document.getElementById("NumberAsked").innerHTML = questionsAsked;
            document.getElementById("NumberCorrect").innerHTML = totalCorrect;
        }