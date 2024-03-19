import React from 'react';
import '../Styles/Home.scss';
import Dice from '../Assests/dicemain.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div>
        <img src={Dice} />
        <div>
          <h1>DICE GAME</h1>
          <button className='btnplay'>
            <Link to='/game'>Play Now</Link></button>
        </div>
      </div>
    </main>
  )
}

export default Home;