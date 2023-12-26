interface Props {
    difficulty: "easy" | "medium" | "hard"
    isActive: boolean
    onClick: (difficulty: string) => void
}

const DifficultyButton = ({ difficulty, isActive, onClick }: Props) => {
    return (
        <li className="nav-item">
            <button 
                className={isActive ? "nav-link active" : "nav-link"}
                type="button"
                onClick={() => onClick(difficulty)}
            >{difficulty.toUpperCase()}</button>
        </li>
    );
};

export default DifficultyButton;