import Answer from "../answer/Answer";

interface Props {
    question: string
    questionNumber: number
    questionCount: number
    answers: string[]
    correct: string
    disabled: boolean
    onAnswerSelected: (index: number) => void
}

const Question = ({question, questionNumber, questionCount, answers, correct, disabled, onAnswerSelected}: Props) => {

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
                        onClick={() => onAnswerSelected(index)}
                    />
                )
                })}
            </div>
            <p className="text-end m-0">{questionNumber}/{questionCount}</p>
        </div>
    )
}

export default Question;