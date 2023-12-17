import { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Quiz from "./components/Quiz/Quiz";
import { getURL } from "./core/GetURL";

const App = () => {
  const [quiz, setQuiz] = useState();
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const URL = getURL()
    setIsFetching(true)

    fetch(URL).then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json()
    }).then(quiz => setQuiz(quiz))
    .catch(e => console.log(e))
    .finally(() => setIsFetching(false))
  }, [])

  return (
    <>
      <div className="d-flex flex-column gap-3 align-items-center my-3">
        <ul className="nav nav-tabs w-75">
          <li className="nav-item">
            <button className="nav-link active" type="button">Easy</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" type="button">Medium</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" type="button">Hard</button>
          </li>
          <li className="flex-grow-1"/>
          <li className="nav-item">
            <button className="nav-link" type="button">10</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" type="button">20</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" type="button">30</button>
          </li>
        </ul>

        <div className="d-flex flex-column align-items-center gap-3 w-75">
          {isFetching ? <LoadingSpinner/> : (
            quiz ? <Quiz quizInfo={quiz as QuizInfo}/> : <p>Something went wrong...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
