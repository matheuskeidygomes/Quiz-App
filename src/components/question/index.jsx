import React from "react";
import questions from "../../models/questions";

export default function Question(props) {

  const currentQuestion = props.currentQuestion;

  return <>

      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 rounded-t-lg p-5 p-4">

        <div className="question-text">

          <span className="font-bold text-xl text-white"> {questions[currentQuestion].questionText} </span>

        </div>

      </div>

      <div className="flex flex-col items-start p-4 border-t-2 border-black bg-white rounded-b-xl">

        {questions[currentQuestion].answerOptions.map((question, index) => {

          return <>

              <button className="flex bg-gray-100 transition hover:scale-105 w-full border border-gray-800 items-center rounded-full hover:bg-gray-300 p-2 m-1" key={index} onClick={() => props.onClick(question.isCorrect)}>
                <div className="flex items-center bg-white justify-center font-bold text-gray-800 border border-black rounded-full h-5 w-5 p-4 mr-3"> {index+1 } </div> <span className="font-bold text-gray-800">{question.answerText}</span>
              </button>

          </>
          
        })}

      </div>

  </>
  
}
