import { useState } from "react";
import Answer from "./Answer";

interface Props {
    question: string
    questionNumber: number
    questionCount: number
    answers: string[]
    correctIndex: number
    disabled: boolean
    onAnswerSelected: (index: number) => void
}

const Question = ({question, questionNumber, questionCount, answers, correctIndex, disabled, onAnswerSelected}: Props) => {

    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(0);
    const isCorrectAnswerSelected = () => correctIndex === selectedAnswerIndex;

    return (
        <div className="card px-4 pt-5 pb-3 d-flex flex-column gap-3 w-100">
            <p className="text-center">{question}</p>
            <div className="d-flex gap-2 justify-content-center px-5">
                {answers.map((answer, index) => {
                return (
                    <Answer 
                        key={index} 
                        answer={answer}
                        disabled={disabled}
                        isCorrect={correctIndex === index}
                        onClick={() => {
                            setSelectedAnswerIndex(index)
                            onAnswerSelected(index)
                        }}
                    />
                )
                })}
            </div>
            <p className="text-end m-0">{disabled ? `[${isCorrectAnswerSelected() ? "CORRECT" : "INCORRECT"}] ${answers[selectedAnswerIndex]} - ${questionNumber}/${questionCount}` : `${questionNumber}/${questionCount}`}</p>
        </div>
    )
}

export default Question;