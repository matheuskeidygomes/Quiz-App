import React, {useState} from "react";
import questions from "../../models/questions";
import Question from "../../components/question";
import Score from "../../components/score";

export default function Home() {

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleAnswer(isCorrect) {

        const nextQuestion = currentQuestion + 1;

        if(isCorrect) {
            setScore(score + 1);
        }

        if(nextQuestion < questions.length) {

            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    function handleRestart() {
        window.location.href = '/';
    }

    console.log(showScore);

    return <>

        <div className="flex flex-col h-screen justify-center items-center bg-gray-800">

            <div className="border-2 border-black rounded-xl m-5">

            {showScore ? 
                <Score score={score} onClick={()=> handleRestart()}/>
            : 
                <Question currentQuestion={currentQuestion} onClick={(isCorrect)=>handleAnswer(isCorrect)} />
            }

            </div>

        </div>
    
    </> 
}