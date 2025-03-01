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
// import MapDisplay from './components/MapDisplay';
import TechInfo from './components/TechInfo';

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
      {/* Aside for Clock and TodoList (fixed on larger screens) */}
      <aside className="aside col-12 col-md-3 d-flex flex-column mb-4 mb-md-0 order-md-last">
        <div className="mb-4">
          <TodoList />
        </div>
      </aside>
      {/* Main content area */}
      <div className="main-content d-flex flex-column flex-md-row mt-4">
        {/* Sidebar for PublicWorksLinks and CountyClerks */}
        <div className="sidebar col-12 col-md-3 mb-4 mb-md-0">
          <PublicWorksLinks />
          <CountyClerks />
        </div>
        {/* Centered content for Calculator and Dictionary */}
        <div className="centered-content col-12 col-md-6 d-flex flex-column mb-4 mb-md-0">
        <div style={{ marginLeft:'20px', minHeight:'100vh', borderRadius:'10px' }}>
          <TechInfo />
        </div>
          <div className="mb-4">
            <Calculator />
          </div>
          <div className="mb-4 d-flex flex-column flex-md-row">
            <Dictionary />
            {/* <MapDisplay /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;