import { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Quiz from "./components/Quiz";
import { getURL } from "./core/GetURL";
import DifficultyButton from "./components/DifficultyButton";

const App = () => {
  const [quiz, setQuiz] = useState<QuizInfo>();
  const [difficulty, setDifficulty] = useState("easy");
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    fetchQuiz()
  }, [])

  const fetchQuiz = () => {
    const request = {
      questionAmount: 10,
      difficulty: difficulty
    } as QuizRequest

    const URL = getURL(request)
    setIsFetching(true)

    fetch(URL).then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json()
    }).then(quiz => setQuiz(quiz))
    .catch(e => console.log(e))
    .finally(() => setIsFetching(false))
  }

  return (
    <>
      <div className="d-flex flex-column gap-3 align-items-center my-3">
        <ul className="nav nav-tabs w-75">
          <DifficultyButton 
            difficulty="easy" 
            isActive={difficulty === "easy"}
            onClick={difficulty => setDifficulty(difficulty)}
          />
          <DifficultyButton 
            difficulty="medium" 
            isActive={difficulty === "medium"}
            onClick={difficulty => setDifficulty(difficulty)}
          />
          <DifficultyButton 
            difficulty="hard" 
            isActive={difficulty === "hard"}
            onClick={difficulty => setDifficulty(difficulty)}
          />
          <li className="flex-grow-1"/>
          <li className="nav-item">
            <button 
              className="nav-link" type="button"
              onClick={fetchQuiz}
            >New Quiz</button>
          </li>
        </ul>

        <div className="d-flex flex-column align-items-center gap-3 w-75">
          {isFetching ? <LoadingSpinner/> : (
            quiz ? <Quiz quizInfo={quiz}/> : <p>Something went wrong...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
