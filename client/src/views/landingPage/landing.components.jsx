import './landing.styles.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Landing() {
  return (
    <div className='container'>
      <h1>CONVIERTETE EN UN MAESTRO PÓKEMON</h1>

      <Link to='/home'>
        <button className= 'button'>GO</button>
      </Link>
    </div>
  );
}

export default Landing;