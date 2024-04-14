import React, { useState } from 'react';
import '../Styles/Game.scss';
import styled from 'styled-components';
import dice_0 from '../Assests/dice_1.png'
import dice_1 from '../Assests/dice_1.png'
import dice_2 from '../Assests/dice_2.png'
import dice_3 from '../Assests/dice_3.png'
import dice_4 from '../Assests/dice_4.png'
import dice_5 from '../Assests/dice_5.png'
import dice_6 from '../Assests/dice_6.png'


const Game = () => {
  const arrnum=[1,2,3,4,5,6];
  const [selnum,selectnumberon]=useState(0);
  const [score,setscore]=useState(0);
  const [rules,setruled]=useState(false);
  const [numsel,setnumsel]=useState(false);
  const [diceimage,setdiceimage]=useState(dice_0);
  const [errormsg,seterrormsg]=useState(false);
  function rulesdispplay() {
    if(rules===true) {
      setruled(false);
      return;
    }
    setruled(true);
  }

  function numberisselected(value) {
    selectnumberon(value);
    setnumsel(true);
    seterrormsg(false);
  }

  function resetscore() {
    selectnumberon(0);
    setscore(0);
    setdiceimage(dice_0);
    setnumsel(false);
  }

  function randomnumber(length) {
    return Math.floor(Math.random()*length);
  }

  function addingscore(num) {
    const t=num+score;
    setscore(t);
  }

  function rollthedice() {
    if(numsel===false) {
      seterrormsg(true);
      return;
    }
    const arr = [dice_1,dice_2,dice_3,dice_4,dice_5,dice_6];
    const randomnum=randomnumber(6);
    setdiceimage(arr[randomnum]);
    if(randomnum===selnum-1) {
      addingscore(selnum);
    }
    else {
      addingscore(-2);
    }
  }

  return (
    <div>
      <div className='main-con1'>
        <div className='tolsco'>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className='selnum'>
          <div className='errmsg'>
            {
              errormsg===true?<p>You have not selected any number</p>:<p></p>
            }</div>
          <div className='btns'>
            {
              arrnum.map((value,i)=>(
                <Box
                isSelect={value===selnum}
                onClick={()=>numberisselected(value)} key={i}>{value}</Box>
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
          <img src={diceimage} alt='current image' onClick={()=>rollthedice()}/>
          <p>Click on Dice to roll</p>
          <div>
            <button className='btn1' onClick={()=>resetscore()}>Reset Score</button>
            <button className='btn2' onClick={()=>rulesdispplay()}>Show Rules</button>
          </div>
        </div>
      </div>
      <div className='rules'>
            {
              rules===true?<div className='ruleslist'>
                <h1>How to play dice game</h1>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you will get some point as dice</p>
                <p>if you get wrong guess then 2 point will be dedcuted</p>
              </div>:<p></p>
            }
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