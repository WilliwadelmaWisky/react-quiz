import { useState } from "react"
import Progressbar from "../Progressbar/Progressbar"
import Question from "../question/Question"

interface Props {
    quizInfo: QuizInfo
}

const Quiz = ({quizInfo}: Props) => {
    const [answeredIndecess, setAnsweredIndecess] = useState<number[]>([])

    const getLength = () => quizInfo.results.length
    const getAnswers = (questionInfo: QuestionInfo) => [questionInfo.correct_answer, ...questionInfo.incorrect_answers].sort()
    const isAnswered = (questionIndex: number) => answeredIndecess.includes(questionIndex)

    const onAnswerSelected = (questionIndex: number, answerIndex: number) => {
        const questionInfo = quizInfo.results[questionIndex]
        const answer = getAnswers(questionInfo)[answerIndex]
        const isCorrect = answer === questionInfo.correct_answer

        setAnsweredIndecess(prevState => [...prevState, questionIndex])

        console.log("Question answered: " + questionIndex + ", Answer was: " + answer + " correct=" + isCorrect)
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
                        correct={questionInfo.correct_answer}
                        disabled={isAnswered(qIndex)}
                        onAnswerSelected={(aIndex) => onAnswerSelected(qIndex, aIndex)}
                    />
                )
            })}
            <Progressbar/>
        </>
    )
}

export default Quiz