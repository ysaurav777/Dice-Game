import React, { useState } from 'react';
import '../Styles/Game.scss';
import gamble from '../Assests/gamble.png'

const Game = () => {
  const score=0;
  const arrnum=[1,2,3,4,5,6];
  const [selnum,selectnumberon]=useState();
  console.log(selnum)

  return (
    <div>
      <div className='main-con1'>
        <div className='tolsco'>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className='selnum'>
          <div className='btns'>
            {
              arrnum.map((value,i)=>(
                <button onClick={()=>selectnumberon({value})} key={i}>{value}</button>
              ))
            }
          </div>
          <div>
            <h1>Select Number</h1>
          </div>
        </div>
      </div>
      <div className='main-con2'>
        <div>
          <img src={gamble} />
          <p>Click on Dice to roll</p>
          <div>
            <button className='btn1'>Reset Score</button>
            <button className='btn2'>Show Rules</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;