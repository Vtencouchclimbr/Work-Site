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
import './App.css';

import Dictionary from './components/Dictionary';
import Calculator from './components/Calculator';
import PublicWorksLinks from './components/PublicWorksLinks';
import CountyClerks from './components/CountyClerks';
import TodoList from './components/TodoList';
import Clock from './components/Clock';
// import TechInfo from './components/TechInfo';
import Colors from './components/Colors';
import Comm from './components/Comm';
import Domw from './components/Domw';
import Fibr from './components/Fibr';
import Irrg from './components/Irrg';
import Ngas from './components/Ngas';
import Power from './components/Power';
import Sswr from './components/Sswr';
import Strm from './components/Strm';
import Tvis from './components/Tvis';

function App() {
  return (
    <div className="app-container">
      {/* Top bar for buttons */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center top-buttons">
        <a href="https://www.horrocks.net/" target="_blank" rel="noopener noreferrer" className="m-2">Company Site</a>
        <h1 className="mt-3 mb-3 mb-md-0 me-md-5" style={{ color: 'rgb(224, 149, 27)', fontSize: 'clamp(2rem, 5vw, 3rem)', textDecoration: 'underline' }}>
          UTAH
        </h1>
        <div className="d-flex flex-wrap justify-content-center">
          <a href="https://www.udot.utah.gov/connect/" target="_blank" rel="noopener noreferrer" className="m-2">
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faRoad} size="lg" className="d-block d-md-none" />
              <FontAwesomeIcon icon={faRoad} size="3x" className="d-none d-md-block" />
            </button>
          </a>
          <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" className="m-2">
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faBrain} size="lg" className="d-block d-md-none" />
              <FontAwesomeIcon icon={faBrain} size="3x" className="d-none d-md-block" />
            </button>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="m-2">
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faYoutube} size="lg" className="d-block d-md-none" />
              <FontAwesomeIcon icon={faYoutube} size="3x" className="d-none d-md-block" />
            </button>
          </a>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="m-2">
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faMapLocationDot} size="lg" className="d-block d-md-none" />
              <FontAwesomeIcon icon={faMapLocationDot} size="3x" className="d-none d-md-block" />
            </button>
          </a>
          <a href="https://www.bluestakes.org/" target="_blank" rel="noopener noreferrer" className="m-2">
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faPersonDigging} size="lg" className="d-block d-md-none" />
              <FontAwesomeIcon icon={faPersonDigging} size="3x" className="d-none d-md-block" />
            </button>
          </a>
          <a href="https://www.asce.org/publications-and-news/civil-engineering-source/society-news/article/2022/07/newly-updated-asce-38-22-utility-engineering-standard-and-new-companion-standard-asce-75-22-now-available" target="_blank" rel="noopener noreferrer" className="m-2">
            <button type="button" className="btn btn-outline-secondary">
              ACSE<br />
              .org
            </button>
          </a>
          <a href="https://www.fhwa.dot.gov/programadmin/sueindex.cfm" target="_blank" rel="noopener noreferrer" className="m-2">
            <button type="button" className="btn btn-outline-secondary">
              FHWA<br />
              .gov
            </button>
          </a>
          <div className="ms-5 mt-3">
            <Clock />
          </div>
        </div>
      </div>      
      {/* Main content area */}
      <div className="main-content d-flex flex-column flex-md-row mt-4">
        {/* Sidebar for PublicWorksLinks and CountyClerks */}
        <div>
        <Comm />
        <Domw />
        <Fibr />
        <Irrg />
        <Ngas />
        <Power />
        <Sswr />
        <Strm />
        <Tvis />
        <div className="sidebar col-12 col-md-3 mb-4 mb-md-0 order-md-1 order-2">
          <PublicWorksLinks />
          <CountyClerks />
        </div>
        <div className="mb-4 mx-2">
              <Calculator />
              <div style={{ maxWidth:'575px', borderRadius:'10px', marginBottom:'300px' }}>
                <Dictionary />
              </div>
            </div>
            </div>
        {/* Centered content */}
        <div className="col-12 col-md-9 order-md-2 order-1">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-md-row">
              <div className="mb-4" style={{ marginLeft:'20px', minHeight:'100vh', borderRadius:'10px' }}>
                <Colors />
                {/* <TechInfo /> */}
              </div>
              <div className="mb-4">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;