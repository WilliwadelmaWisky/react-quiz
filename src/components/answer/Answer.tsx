interface Props {
    answer: string
    disabled: boolean
    onClick: () => void
}

const Answer = ({answer, disabled, onClick}: Props) => {
    return (
        <button 
            type="button" 
            className="btn btn-primary"
            disabled={disabled}
            onClick={onClick}
        >{answer}</button>
    )
}

export default Answer