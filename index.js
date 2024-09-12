function generateBondsQuestions(count) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ''; // Clear any previous questions
    let counter = 0;
    while (counter != count) {
        // Generate two random numbers for the bond question (values up to 20)
        let num1 = Math.floor(Math.random() * 20) + 1;
        let num2 = Math.floor(Math.random() * 20) + 1;
        let ans = num1 + num2;
        if (ans <= 20 ){
            // Create the bond question box
            let questionBox = document.createElement('div');
            questionBox.classList.add('question-box');

            // Display the question as "num1 + ___ = num2"
            let question = document.createElement('div');
            question.classList.add('question');
            question.innerText = `${num1} + ___ = ${ans}`;

            questionBox.appendChild(question);
            questionContainer.appendChild(questionBox);
            counter += 1;
        }
    }
}

// Generate 50 bond questions on page load
generateBondsQuestions(50);
