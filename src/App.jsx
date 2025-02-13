import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faRoad,
  faPersonDigging,
  faMapLocationDot
} from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import Dictionary from './components/Dictionary';
import Calculator from './components/Calculator';
import PublicWorksLinks from './components/PublicWorksLinks';
import CountyClerks from './components/CountyClerks';
import TodoList from './components/TodoList';
import Clock from './components/Clock';

function App() {
  return (
    <div className="app-container">
      {/* Top bar for buttons */}
      <div className="d-flex justify-content-center top-buttons">
      <h1 className="me-5 mt-1" style={{ color:'rgb(224, 149, 27)', fontSize:'50px', textDecoration:'underline' }}>UTAH</h1>
        <a href="https://www.udot.utah.gov/connect/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faRoad} size="3x" />
          </button>
        </a>
        <a href="https://www.bluestakes.org/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faPersonDigging} size="3x" />
          </button>
        </a>
        <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faBrain} size="3x" />
          </button>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </button>
        </a>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-secondary mx-3 my-2">
            <FontAwesomeIcon icon={faMapLocationDot} size="3x" />
          </button>
        </a>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Left sidebar for PublicWorksLinks */}
        <div className="sidebar">
          <PublicWorksLinks />
          <CountyClerks />
        </div>

        {/* Centered content for Calculator and Dictionary */}
        <div className="centered-content d-flex flex-column mt-5">
          <Calculator />
          <Dictionary />
        </div>
        <div className="d-flex flex-column mt-5">
        <Clock />
        <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App;