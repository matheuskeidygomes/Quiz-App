import React, { useState, useContext } from "react";
import { SickContext } from "../../contexts/SickProvider";
import questions from "../../models/questions";
import Question from "../../components/question";
import Score from "../../components/score";
import RightAnswerSong from '../../assets/songs/right.mp3';
import WrongAnswerSong from '../../assets/songs/wrong.mp3';

export default function Home() {

    const context = useContext(SickContext);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const RightAudio = new Audio(RightAnswerSong);
    const WrongAudio = new Audio(WrongAnswerSong);

    function handleAnswer(isCorrect) {
        const nextQuestion = currentQuestion + 1;

        if (isCorrect) {
            RightAudio.play();
            setScore(score + 1);
        }
        else {
            WrongAudio.play();
            context.changeSmoke();
        }

        if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
        else setShowScore(true);
    }

    function handleRestart() {
        window.location.href = '/';
    }

    return <>
        <div className="flex flex-col h-screen justify-center items-center bg-div">
            <div className="border-2 border-black rounded-xl m-5 sm:max-w-full md:max-w-md lg:max-w-xl">
                {showScore ?
                    <Score score={score} onClick={() => handleRestart()} smoke={context.smoke} />
                    :
                    <Question currentQuestion={currentQuestion} onClick={(isCorrect) => handleAnswer(isCorrect)} image={context.sick} smoke={context.smoke} />
                }
            </div>
        </div>
    </>
}