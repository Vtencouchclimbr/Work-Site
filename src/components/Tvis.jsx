import { useState } from 'react';
import './Tvis.css'; // Specific CSS file for this component

const Tvis = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle collapse
  const layerNames = [
    "V-TVIS-BOX - COM",
    "V-TVIS-BOX - COM - D",
    "V-TVIS-OH - COM - B",
    "V-TVIS-OH - COM - D",
    "V-TVIS-UGND - COM - B",
    "V-TVIS-UGND - COM - D"
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tvis-container">
      <button 
        className="toggle-button-tvis" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Television Layers' : 'Expand Television Layers'}
      </button>
      {isExpanded && (
        <ul className="tvis-list">
          {layerNames.map((item, index) => (
            <li key={index} className="tvis-item">
              <span className="tvis-content">{item}</span>
              <button
                onClick={() => handleCopy(item, index)}
                className="copy-button"
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tvis;