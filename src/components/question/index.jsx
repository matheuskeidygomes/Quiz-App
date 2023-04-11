import React from "react";
import questions from "../../models/questions";

export default function Question(props) {

  const currentQuestion = props.currentQuestion;

  function smokeContainer(smokes) {
    const smokeArray = new Array(smokes).fill(0);
    return <>
      <div className="flex flex-wrap justify-center items-center">
        {smokeArray.map((smoke, index) => {
          return <img key={index} src="./assets/smoke.png" className="w-8 md:w-12 smoke-image" alt="smoke" />
        })}
      </div>
    </>
  }

  return <>
    <div className="flex flex-col items-center justify-center bg-cyan-500 rounded-t-lg p-5 p-4">
      <div className="question-text">
        <span className="font-bold text-xl text-white">
          {questions[currentQuestion].questionText}
        </span>
      </div>
    </div>
    <div className="flex flex-col items-center p-4 border-t-2 border-black bg-white rounded-b-xl">

      <div className="flex justify-center items-center w-full">
        {smokeContainer(props.smoke)}
        <img className="w-32 md:w-52" src={`./assets/emoji.gif`} alt="emoji" />
        {smokeContainer(props.smoke)}
      </div>

      {questions[currentQuestion].answerOptions.map((question, index) => {
        return <>
          <button className="flex bg-gray-100 transition hover:scale-105 w-full border border-gray-800 items-center rounded-full hover:bg-cyan-100 p-2 m-1" key={index} onClick={() => props.onClick(question.isCorrect)}>
            <div className="flex items-center bg-white justify-center font-bold text-gray-800 border border-black rounded-full h-5 w-5 p-4 mr-3">
              {index + 1}
            </div>
            <span className="font-bold text-gray-800 text-left">
              {question.answerText}
            </span>
          </button>
        </>
      })}

    </div>
  </>

}
