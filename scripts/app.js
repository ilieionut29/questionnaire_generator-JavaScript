const questionBox = document.getElementById("questionBox");
const addQuestionButton = document.getElementById("addQuestion");
const generateButton = document.getElementById("generate");
const generateBox = document.getElementById("generateBox");
const finishBox = document.getElementById("finish");

let questions = [];
let answers = [];
let n = 1;

addQuestionButton.addEventListener("click", function() {
    addQuestionButton.style.display = "none";
    generateButton.style.display = "none";

    // --------------- ADD QUESTION ---------------
    let breakLine = document.createElement("br");
    let breakLine2 = breakLine.cloneNode(true);

    let labelQuestion = document.createElement("label");
    labelQuestion.innerHTML = "Adăugați întrebarea dorită... ";
    labelQuestion.setAttribute("class", "label-question");

    let inputQuestion = document.createElement("input");
    inputQuestion.setAttribute("type", "text");
    inputQuestion.setAttribute("class", "question-input");
    inputQuestion.setAttribute("id", "question"+ [n] +"");

    let continueButton1 = document.createElement("button");
    continueButton1.setAttribute("id", "continueButton1");
    continueButton1.innerHTML ="Continuați";

    questionBox.appendChild(labelQuestion);
    labelQuestion.appendChild(breakLine);
    labelQuestion.appendChild(inputQuestion);
    questionBox.appendChild(breakLine2);
    questionBox.appendChild(continueButton1);

    continueButton1.addEventListener("click", function () {
        if (inputQuestion.value != "") {
            continueButton1.parentNode.removeChild(continueButton1);
            // --------------- CHOOSE MODEL ANSWER ---------------
            let breakLine3 = breakLine.cloneNode(true);

            let answerModel = document.createElement("span");
            answerModel.innerHTML = "Ce tip de răspuns doriți?";
            answerModel.setAttribute("class", "answer-model")
        
            let answerLabel = document.createElement("label");
            answerLabel.setAttribute("for", "answerModel");
            answerLabel.setAttribute("class", "answer-label");
        
            let modelSelect = document.createElement("select");
            modelSelect.setAttribute("id", "answerModel");
            modelSelect.setAttribute("name", "answerModel");
        
            let optionType1 = document.createElement("option");
            optionType1.setAttribute("value", "multiplu");
            optionType1.innerHTML = "Răspunsuri multiple";
            let optionType2 = document.createElement("option");
            optionType2.setAttribute("value", "singular");
            optionType2.innerHTML = "Răspunsuri singulare";
            let optionType3 = document.createElement("option");
            optionType3.setAttribute("value", "datepicker");
            optionType3.innerHTML = "Date-picker";
            let optionType4 = document.createElement("option");
            optionType4.setAttribute("value", "userInput");
            optionType4.innerHTML = "Valoare introdusă de utilizator";
            let optionType5 = document.createElement("option");
            optionType5.setAttribute("value", "numar");
            optionType5.innerHTML = "Număr";

            questionBox.appendChild(answerModel);
            questionBox.appendChild(breakLine3);
            questionBox.appendChild(answerLabel);
            answerLabel.appendChild(modelSelect);
            modelSelect.appendChild(optionType1);
            modelSelect.appendChild(optionType2);
            modelSelect.appendChild(optionType3);
            modelSelect.appendChild(optionType4);
            modelSelect.appendChild(optionType5);
            
            let continueButton2 = document.createElement("button");
            continueButton2.setAttribute("id", "continueButton2");
            continueButton2.innerHTML = "Continuați";
            let breakLine4 = breakLine.cloneNode(true);
            
            questionBox.appendChild(breakLine4);
            questionBox.appendChild(continueButton2);

            continueButton2.addEventListener("click", function () {
                let getValue = document.getElementById('answerModel').selectedOptions[0].value;
                breakLine3.style.display = "none";
                breakLine4.style.display = "none";
                // --------------- ADD ANSWERS ---------------
                if (getValue == "multiplu" || getValue == "singular") {
                    let breakLine5 = breakLine.cloneNode(true);
                    let breakLine6 = breakLine.cloneNode(true);
                    let breakLine7 = breakLine.cloneNode(true);
                    let breakLine8 = breakLine.cloneNode(true);
                    let breakLine9 = breakLine.cloneNode(true);

                    var answerA = document.createElement("span");
                    answerA.setAttribute("class", "answer-span")
                    answerA.innerHTML = "Răspuns I";
                    var answerAinput = document.createElement("input");
                    answerAinput.setAttribute("type", "text");
                    answerAinput.setAttribute("class", "answer-a");
                
                    var answerB = document.createElement("span");
                    answerB.setAttribute("class", "answer-span")
                    answerB.innerHTML = "Răspuns II";
                    var answerBinput = document.createElement("input");
                    answerBinput.setAttribute("type", "text");
                    answerBinput.setAttribute("class", "answer-b");
                
                    var answerC = document.createElement("span");
                    answerC.setAttribute("class", "answer-span")
                    answerC.innerHTML = "Răspuns III";
                    var answerCinput = document.createElement("input");
                    answerCinput.setAttribute("type", "text");
                    answerCinput.setAttribute("class", "answer-c");
                
                    questionBox.appendChild(answerA);
                    questionBox.appendChild(breakLine5);
                    questionBox.appendChild(answerAinput);
                    questionBox.appendChild(breakLine6);
                    questionBox.appendChild(answerB);
                    questionBox.appendChild(breakLine7);
                    questionBox.appendChild(answerBinput);
                    questionBox.appendChild(breakLine8);
                    questionBox.appendChild(answerC);
                    questionBox.appendChild(breakLine9);
                    questionBox.appendChild(answerCinput);
                }  // - FINISH IF ADD ANSWER MODEL

                answerModel.parentNode.removeChild(answerModel);
                answerLabel.parentNode.removeChild(answerLabel);
                continueButton2.parentNode.removeChild(continueButton2);

                let uploadQuestion = document.createElement("button");
                uploadQuestion.innerHTML = "Încarcă întrebarea";
                uploadQuestion.setAttribute("id", "uploadQuestion");

                let breakLine6 = breakLine.cloneNode(true);

                questionBox.appendChild(breakLine6);
                questionBox.appendChild(uploadQuestion);

                // --------------- UPLOAD QUESTION AND ANSWERS ---------------
                uploadQuestion.addEventListener("click", addQuestion = () => {
                    if (getValue == "datepicker" || getValue == "userInput" || getValue == "numar") {
                        uploadQuestion.parentNode.removeChild(uploadQuestion);
                        let question = {
                            idQuestion: document.getElementById("question"+ [n] + "").id,
                            textQuestion: inputQuestion.value,
                            answerModel: getValue
                        }
                        questions.push(question);
                        n++;
                        addQuestionButton.style.display = "block";
                        generateButton.style.display = "block";
                        addQuestionButton.innerHTML = "Adaugă altă întrebare";

                    } else if (getValue == "multiplu" || getValue == "singular") {
                        if (answerAinput.value == "" || answerBinput.value == "" || answerCinput.value == "") { 
                            alert ("Adăugați răspunsurile!");
                        } else if (answerAinput.value != "" && answerBinput.value != "" && answerCinput.value != "") {
                            uploadQuestion.parentNode.removeChild(uploadQuestion);
                            let question = {
                                idQuestion: document.getElementById("question"+ [n] + "").id,
                                textQuestion: inputQuestion.value,
                                answerModel: getValue,
                                answers: {
                                    answerA: answerAinput.value,
                                    answerB: answerBinput.value,
                                    answerC: answerCinput.value,
                                }
                            }
                            questions.push(question);
                            n++;
                            generateButton.style.display = "block";
                            addQuestionButton.style.display = "block";
                            addQuestionButton.innerHTML = "Adaugă altă întrebare";
                            answerAinput.disabled = true;
                            answerBinput.disabled = true;
                            answerCinput.disabled = true;
                        }
                    }
                    inputQuestion.disabled = true;
                }) // EVENT (uploadQuestionAndAnswer) 
            }) // - EVENT (addAnswer) 
        } else {
            alert("Adăugați o întrebare pentru a continua!");
        }
    }) // - EVENT (choseModelAnswer)
})  // - EVENT (addQuestion)

// --------------- GENERATE ---------------
generateButton.addEventListener("click", function () {
    // const jsonData = JSON.stringify(questions);
    addQuestionButton.parentNode.removeChild(addQuestionButton);
    questionBox.parentNode.removeChild(questionBox);
    generateButton.parentNode.removeChild(generateButton);

    for (let i = 0; i < questions.length ; i++) {
        const divQuestion = document.createElement("div");
        divQuestion.setAttribute("class", "div-question div-questions" + i + "");

        let createQuestion = document.createElement("span");
        createQuestion.innerHTML = questions[i].textQuestion;
        createQuestion.setAttribute("class", "create-question")

        let createAnswers = document.createElement("span");
        createAnswers.innerHTML = "Raspunsuri disponibile";
        createAnswers.setAttribute("class", "create-answer")

        let breakLine = document.createElement("br");
        let breakLineA = breakLine.cloneNode(true);
        let breakLineB = breakLine.cloneNode(true);
        let breakLineC = breakLine.cloneNode(true);
        let breakLineD = breakLine.cloneNode(true);
        let breakLineE = breakLine.cloneNode(true);
        let breakLineF = breakLine.cloneNode(true);
        let breakLineG = breakLine.cloneNode(true);
        let breakLineH = breakLine.cloneNode(true);

        if (questions[i].answerModel == "multiplu") {
            let createModelAnswerA = document.createElement("input");
            createModelAnswerA.setAttribute("class", "model-answer");
            let createModelAnswerB = document.createElement("input");
            createModelAnswerB.setAttribute("class", "model-answer");
            let createModelAnswerC = document.createElement("input");
            createModelAnswerC.setAttribute("class", "model-answer");
            let createAnswerA = document.createElement("span");
            createAnswerA.setAttribute("class", "create-answer-x");
            let createAnswerB = document.createElement("span");
            createAnswerB.setAttribute("class", "create-answer-x");
            let createAnswerC = document.createElement("span");
            createAnswerC.setAttribute("class", "create-answer-x");
            createModelAnswerA.setAttribute("type", "checkbox");
            createModelAnswerB.setAttribute("type", "checkbox");
            createModelAnswerC.setAttribute("type", "checkbox");
            createModelAnswerA.setAttribute("name", "multipleAnswer"+[i]+"");
            createModelAnswerB.setAttribute("name", "multipleAnswer"+[i]+"");
            createModelAnswerC.setAttribute("name", "multipleAnswer"+[i]+"");
            createAnswerA.innerHTML = questions[i].answers.answerA;
            createAnswerB.innerHTML = questions[i].answers.answerB;
            createAnswerC.innerHTML = questions[i].answers.answerC;
            generateBox.appendChild(divQuestion);
            divQuestion.appendChild(createQuestion);
            divQuestion.appendChild(breakLineA);
            divQuestion.appendChild(createAnswers);
            divQuestion.appendChild(breakLineB);
            divQuestion.appendChild(createModelAnswerA);
            divQuestion.appendChild(createAnswerA);
            divQuestion.appendChild(breakLineC);
            divQuestion.appendChild(createModelAnswerB);
            divQuestion.appendChild(createAnswerB);
            divQuestion.appendChild(breakLineD);
            divQuestion.appendChild(createModelAnswerC);
            divQuestion.appendChild(createAnswerC);
        } else if (questions[i].answerModel == "singular") {
            let createModelAnswerA2 = document.createElement("input");
            createModelAnswerA2.setAttribute("class", "model-answer");
            let createModelAnswerB2 = document.createElement("input");
            createModelAnswerB2.setAttribute("class", "model-answer");
            let createModelAnswerC2 = document.createElement("input");
            createModelAnswerC2.setAttribute("class", "model-answer");
            let createAnswerA2 = document.createElement("span");
            createAnswerA2.setAttribute("class", "create-answer-x");
            let createAnswerB2 = document.createElement("span");
            createAnswerB2.setAttribute("class", "create-answer-x");
            let createAnswerC2 = document.createElement("span");
            createAnswerC2.setAttribute("class", "create-answer-x");
            createModelAnswerA2.setAttribute("type", "radio");
            createModelAnswerA2.setAttribute("name", "singleAnswer"+[i]+"")
            createModelAnswerB2.setAttribute("type", "radio");
            createModelAnswerB2.setAttribute("name", "singleAnswer"+[i]+"")
            createModelAnswerC2.setAttribute("type", "radio");
            createModelAnswerC2.setAttribute("name", "singleAnswer"+[i]+"")
            createAnswerA2.innerHTML = questions[i].answers.answerA;
            createAnswerB2.innerHTML = questions[i].answers.answerB;
            createAnswerC2.innerHTML = questions[i].answers.answerC;
            generateBox.appendChild(divQuestion);
            divQuestion.appendChild(createQuestion);
            divQuestion.appendChild(breakLineA);
            divQuestion.appendChild(createAnswers);
            divQuestion.appendChild(breakLineB);
            divQuestion.appendChild(createModelAnswerA2);
            divQuestion.appendChild(createAnswerA2);
            divQuestion.appendChild(breakLineC);
            divQuestion.appendChild(createModelAnswerB2);
            divQuestion.appendChild(createAnswerB2);
            divQuestion.appendChild(breakLineD);
            divQuestion.appendChild(createModelAnswerC2);
            divQuestion.appendChild(createAnswerC2);
        } else if (questions[i].answerModel == "datepicker") {
            let createModelAnswerA3 = document.createElement("input");
            createModelAnswerA3.setAttribute("class", "model-answer date-design validate");
            createModelAnswerA3.setAttribute("type", "date");
            createModelAnswerA3.required = true;
            generateBox.appendChild(divQuestion);
            divQuestion.appendChild(createQuestion);
            divQuestion.appendChild(breakLineE)
            createAnswers.innerHTML = "* Alegeți data: "
            divQuestion.appendChild(createAnswers);
            divQuestion.appendChild(breakLineH);
            divQuestion.appendChild(createModelAnswerA3);
        } else if (questions[i].answerModel == "userInput") {
            let createModelAnswerA4 = document.createElement("input");
            createModelAnswerA4.setAttribute("class", "model-answer model-answer-design validate");
            createModelAnswerA4.setAttribute("type", "text");
            createModelAnswerA4.required = true;
            generateBox.appendChild(divQuestion);
            divQuestion.appendChild(createQuestion);
            divQuestion.appendChild(breakLineE)
            createAnswers.innerHTML = "* Raspunsul dumneavoastra: "
            divQuestion.appendChild(createAnswers);
            divQuestion.appendChild(breakLineF)
            divQuestion.appendChild(createModelAnswerA4);
        } else if (questions[i].answerModel == "numar") {
            let createModelAnswerA5 = document.createElement("input");
            createModelAnswerA5.setAttribute("class", "model-answer model-answer-design validate");
            createModelAnswerA5.setAttribute("type", "number");
            createModelAnswerA5.required = true;
            generateBox.appendChild(divQuestion);
            divQuestion.appendChild(createQuestion);
            divQuestion.appendChild(breakLineE)
            createAnswers.innerHTML = "* Raspunsul dumneavoastra: "
            divQuestion.appendChild(createAnswers);
            divQuestion.appendChild(breakLineG)
            divQuestion.appendChild(createModelAnswerA5);
        }
    }
    
    let submitButton = document.createElement("button");
    submitButton.setAttribute("class", "submit-button");
    submitButton.setAttribute("type", "button");
    submitButton.innerHTML = "Submit";
    generateBox.appendChild(submitButton);

    submitButton.addEventListener("click", function () {
        let answerInput = document.getElementsByClassName("validate");
        let validateInputs = true; 
        let inputsText = document.querySelector("input[type=text]");
        let inputsNumber = document.querySelector("input[type=number]");
        let inputsDate = document.querySelector("input[type=date]");

        if (document.body.contains(inputsText) || document.body.contains(inputsNumber) || document.body.contains(inputsDate)) {
            for (let i = 0; i < answerInput.length; i++) {
                if (answerInput[i].value == "") {
                    validateInputs = false;
                } else {
                    validateInputs = true;
                    answer = { 
                        question: questions[i].textQuestion,
                        answer: answerInput[i].value
                    }
                    answers.push(answer);
                }
            }
        }   

        if (!validateInputs) {
            alert("Completați răspunsurile obligatorii! *")
            return;
        } else if (validateInputs) {
            generateBox.parentNode.removeChild(generateBox);
            let congratsDiv = document.createElement("div");
            congratsDiv.setAttribute("class", "congrats")
            let congratsText = document.createElement("span")
            congratsText.setAttribute("class", "congrats-text")
            congratsText.innerHTML =`Mulțumim pentru completarea chestionarului. 🙏 <br>` + 
                                    `Număr total întrebări 🠒 ${ generateBox.children.length - 1 }`
        
            finishBox.appendChild(congratsDiv);
            congratsDiv.appendChild(congratsText);

            // just for display output
            let outputText = JSON.stringify(answers, "\t", 2);
            console.log(outputText)
        }
    }) // EVENT - Finish
}) // EVENT - Generate