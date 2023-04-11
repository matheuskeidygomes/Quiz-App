import React from "react";
import questions from "../../models/questions";
import VictorySong from '../../assets/songs/victory.mp3';
import LoseSong from '../../assets/songs/lose.mp3';

export default function Score(props) {

    const score = props.score;
    const halfQuestions = +questions.length / 2;
    const badScore = props.score < halfQuestions;

    if (badScore) new Audio(LoseSong).play();
    else new Audio(VictorySong).play();

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

        <div className="flex flex-col items-center justify-center bg-gray-300 p-5 rounded-lg">

            <h1 className="font-bold p-3 bg-white border border-gray-400 rounded-xl flex flex-col justify-center items-center">

                <div className="flex flex-row justify-center items-center w-full">
                    {smokeContainer(props.smoke)}
                    <img className="w-36 md:w-52" alt="" src={`./assets/emoji.gif`} />
                    {smokeContainer(props.smoke)}
                </div>

                {!badScore ?
                    <span className="text-center"> Parabéns! Você acertou {score} de {questions.length} questões! </span>
                    :
                    <span className="text-center"> Poxa! Você acertou {score} de {questions.length} questões, tente treinar um pouco mais e tente novamente! </span>
                }

            </h1>

            <button className="transition hover:scale-110 font-bold text-white p-3 rounded-xl mt-5 border border-black bg-cyan-500" onClick={() => props.onClick()}> Reiniciar </button>

        </div>

    </>

}