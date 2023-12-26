interface Props {
    score: number
    maxScore: number
}

const Scoreboard = ({ score, maxScore }: Props) => {
    return (
        <div className="alert alert-dark w-100 d-flex justify-content-center">
            <h1>{score}/{maxScore}</h1>
        </div>
    )
}

export default Scoreboard;