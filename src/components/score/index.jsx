import React from "react";
import questions from "../../models/questions";

export default function Score(props) {

    const score = props.score;
    const halfQuestions = +questions.length / 2;
    const badScore = props.score < halfQuestions;

    return <>

        <div className="flex flex-col items-center justify-center bg-gray-300 p-5 rounded-lg"> 
                
            <h1 className="font-bold p-3 bg-white border border-gray-400 rounded-xl"> 
            
            {!badScore ?
               <span> Parabéns! Você acertou {score} de {questions.length} questões! </span>
            :
               <span> Poxa! Você acertou {score} de {questions.length} questões, tente treinar um pouco mais e tente novamente! </span>
            }
            
            </h1>

            <button className="transition hover:scale-110 font-bold text-white p-3 rounded-xl mt-5 border border-gray-800 bg-gradient-to-r from-indigo-500 to-purple-800 hover:bg-gradient-to-l from-purple-800 to-indigo-500" onClick={() => props.onClick()}> Reiniciar </button> 

        </div>

    </> 

}