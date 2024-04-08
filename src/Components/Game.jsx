import React, { useState } from 'react';
import '../Styles/Game.scss';
import dice_1 from '../Assests/dice_1.png';
import styled from 'styled-components';

const Game = () => {
  const score=0;
  const arrnum=[1,2,3,4,5,6];
  const [selnum,selectnumberon]=useState();
  console.log(selnum);

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
                <Box
                isSelect={value==selnum}
                onClick={()=>selectnumberon(value)} key={i}>{value}</Box>
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
          <img src={dice_1} alt="current-dice" />
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

const Box = styled.div`
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
    border: solid 0.05rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:0.5rem;
    border-radius: 0.2rem;
    font-size:1.2rem;
    font-weight: 500;
    background-color: ${(props) => (props.isSelect ? "black":"white")};
    color: ${(props) => (props.isSelect ? "white":"black")};
`;

export default Game;