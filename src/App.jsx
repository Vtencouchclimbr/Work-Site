import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faHandHoldingDollar
} from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import Dictionary from './components/Dictionary';
import Calculator from './components/Calculator';

function App() {

  return (
    <div className="image">
      {/* Top bar for buttons */}
      <div className="d-flex justify-content-center">
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faXTwitter} size="3x" />
          </button>
        </a>
        <a href="https://x.com/i/grok" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faBrain} size="3x" />
          </button>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </button>
        </a>
        <a href="https://robinhood.com/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faHandHoldingDollar} size="3x" />
          </button>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </button>
        </a>
      </div>

      {/* Centered content */}
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <Calculator />
        <Dictionary />
      </div>
    </div>
  )
}

export default App

