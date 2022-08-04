import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Quiz from './components/Quiz/Quiz';
import {useState} from "react";

function App() {
    const [quizStatus, setQuizStatus] = useState('initial');

    const handleQuizStatus = (status) => {
        setQuizStatus(status);
    }

    return (
        <div className='App'>
            {   quizStatus === 'initial'
                    ? <> <Header /> <Welcome handleQuizStatus={handleQuizStatus}/> </>
                    : <Quiz />
            }
        </div>
    );
}

export default App;
