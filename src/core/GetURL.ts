export const getURL = ({ questionAmount, difficulty }: QuizRequest) => {
    return `https://opentdb.com/api.php?amount=${questionAmount}&difficulty=${difficulty}&type=multiple`
}
