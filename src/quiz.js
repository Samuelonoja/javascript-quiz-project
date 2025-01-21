class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()

    getQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion(){
        this.currentQuestionIndex++;
    }
    // 4. shuffleQuestions()

    shuffleQuestions(){
        for (let i = this.questions.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[randomIndex]] = [this.questions[randomIndex], this.questions[i]];
        }
        return this.questions;
    }
    

    // 5. checkAnswer(answer)

    checkAnswer(answer){
        if (this.questions[this.currentQuestionIndex].answer === answer){
            this.correctAnswers++
        }
        
    }

    // 6. hasEnded()

    hasEnded(){
        if(this.currentQuestionIndex < this.questions.length){
            return false;
        }
        else if(this.currentQuestionIndex === this.questions.length){
            return true;
        }
    }

    // 7. filterQuestionsByDifficulty(difficulty)
    filterQuestionsByDifficulty(difficulty){
        if (typeof difficulty === "number" && difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter((question) => question.difficulty === difficulty);
        }
    }
    // 8. averageDifficulty()
    averageDifficulty() {
        if (this.questions.length === 0){ 
            return 0
        }
        const totalDifficulty = this.questions.reduce((sum, question) => sum + question.difficulty, 0)
        return totalDifficulty / this.questions.length
    }
    }

