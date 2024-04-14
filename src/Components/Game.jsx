import React, { useState } from 'react';
import '../Styles/Game.scss';
import styled from 'styled-components';
import dice_0 from '../Assests/dice_4.png'
import dice_1 from '../Assests/dice_1.png'
import dice_2 from '../Assests/dice_2.png'
import dice_3 from '../Assests/dice_3.png'
import dice_4 from '../Assests/dice_4.png'
import dice_5 from '../Assests/dice_5.png'
import dice_6 from '../Assests/dice_6.png'


const Game = () => {
  const score=0;
  const arrnum=[1,2,3,4,5,6];
  const [selnum,selectnumberon]=useState(0);
  let t=`dice_${selnum}`;
  console.log(t);

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
          <img src={dice_0}alt='current image'/>
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