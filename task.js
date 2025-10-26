let playAgain;

let question = [
    "1. what keyword is used to declare a variable that can be reassigned in javascript",
    "2. what data type is used to store true or false values",
    "3. what operator is used to compare both value and type in javascript",
    "4. what statement is used to make decision in javascript",
    "5. what loop runs at least once before checking the condition",
    "6. what is the output of the typeof 'Hello world'"
];

const answer = [
    "let",
    "boolean",
    "===",
    "if",
    "do while",
    "string"
];

let score = 0;

do {

    for (let i = 0; i < question.length; i++) {
        const useranswer = prompt(question[i]);

        if (useranswer.toLowerCase() === answer[i]) {
            var Output = "correct!"
            console.log(Output)
            score++
        } else {
            console.log(`wrong! The correct answer is: ${answer[i]}` )
        }
        
    }
    console.log(`your score is: ${score}/${question.length}`);

    playAgain = prompt("Do you want to play again? (Yes/No)").toLowerCase();

} while (playAgain === "yes");
