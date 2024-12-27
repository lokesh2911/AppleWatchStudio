import './style.css';
import { Link } from 'react-router-dom';
import model from '../../assets/Images/model.png';

const Home = ({ onGetStarted }) => {
  return (
    <>
      <div className="container">
        <div className="bottom-container">
          <div className="text-container">
            <h4 className="sub-title">Apple Watch Studio</h4>
            <h1 className="title">Choose a case.</h1>
            <h1 className="title">Pick a band.</h1>
            <h1 className="title">Create your own style.</h1>
            <Link to="/watch">
              <button className="button" onClick={onGetStarted}>
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="model">
        <img src={model} alt="Model" />
      </div>
    </>
  );
};

export default Home;
