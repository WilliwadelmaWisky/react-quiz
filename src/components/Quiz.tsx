import { useState } from "react"
import Progressbar from "./Progressbar"
import Question from "./Question"
import Scoreboard from "./Scoreboard"

interface Props {
    quizInfo: QuizInfo
}

const Quiz = ({quizInfo}: Props) => {
    const [answers, setAnswers] = useState<AnswerInfo[]>([])
    const [score, setScore] = useState<number>(0)

    const getLength = () => quizInfo.results.length
    const getAnswers = (questionInfo: QuestionInfo) => [questionInfo.correct_answer, ...questionInfo.incorrect_answers].sort()
    const getCorrectIndex = (questionInfo: QuestionInfo) => getAnswers(questionInfo).findIndex(answer => questionInfo.correct_answer === answer)
    const isAnswered = (questionIndex: number) => answers.findIndex(answer => answer.questionIndex === questionIndex) != -1
    const allAnswered = () => answers.length === getLength()
    const getScorePerAnswer = () => 1
    const getMaxScore = () => getLength() * getScorePerAnswer()

    const onAnswerSelected = (questionIndex: number, answerIndex: number) => {
        const questionInfo = quizInfo.results[questionIndex]
        const answerName = getAnswers(questionInfo)[answerIndex]
        const isCorrect = answerName === questionInfo.correct_answer

        const answer = { 
            questionIndex: questionIndex, 
            isCorrect: isCorrect 
        } as AnswerInfo

        setAnswers(prevState => [...prevState, answer])
        if (isCorrect) setScore(prevState => prevState + getScorePerAnswer())

        console.log("Question answered: " + questionIndex + ", Answer was: " + answerName + " correct=" + isCorrect)
    }

    return (
        <>
            {quizInfo.results.map((questionInfo, qIndex) => {
                return (
                    <Question 
                        key={qIndex}
                        question={questionInfo.question}
                        questionNumber={qIndex + 1}
                        questionCount={getLength()}
                        answers={getAnswers(questionInfo)}
                        correctIndex={getCorrectIndex(questionInfo)}
                        disabled={isAnswered(qIndex)}
                        onAnswerSelected={(aIndex) => onAnswerSelected(qIndex, aIndex)}
                    />
                )
            })}
            <Progressbar percentage={(answers.length / getLength()) * 100}/>
            {allAnswered() ? <Scoreboard score={score} maxScore={getMaxScore()}/> : undefined}
        </>
    )
}

export default Quiz