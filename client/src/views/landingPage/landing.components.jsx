import './landing.styles.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Landing() {
  return (
    <div className='container'>
      <p>Landing Page</p>
      <Link to='/home'>
        <button className= 'button'>HOME</button>
      </Link>
    </div>
  );
}

export default Landing;