interface Props {
    answer: string
    disabled: boolean
    isCorrect: boolean
    onClick: () => void
}

const Answer = ({answer, disabled, isCorrect, onClick}: Props) => {
    return (
        <button 
            type="button" 
            className={disabled ? (isCorrect ? "btn btn-success" : "btn btn-danger") :"btn btn-primary"}
            disabled={disabled}
            onClick={onClick}
        >{answer}</button>
    )
}

export default Answer