import "./landing.styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Landing() {
  return (
    <div className="landing-container">
      <h1>CONVIERTETE EN UNA MAESTRA PÓKEMON</h1>

      <Link to="/home">
        <button className="button">GO</button>
      </Link>
    </div>
  );
}

export default Landing;
