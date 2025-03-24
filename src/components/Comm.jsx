import { useState } from 'react';
import './Comm.css'; // Specific CSS file for this component

const Comm = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle collapse
  const layerNames = [
    "V-COMM-OVHD - LUM",
    "V-COMM-PED - LUM",
    "V-COMM-POLE - LUM",
    "V-COMM-POLE - POLE",
    "V-COMM-UGND - CLL - 48ct - B",
    "V-COMM-UGND - CLL - B",
    "V-COMM-UGND - CLL - ukn - B",
    "V-COMM-UGND - CLL - ukn - D",
    "V-COMM-UGND - LUM - 3 6x - B",
    "V-COMM-UGND - LUM - 3 6x - D",
    "V-COMM-UGND - LUM - 25x - B",
    "V-COMM-UGND - LUM - 25x - D",
    "V-COMM-UGND - LUM - 100x - B",
    "V-COMM-UGND - LUM - 600x - B",
    "V-COMM-UGND - LUM - 900x - B",
    "V-COMM-UGND - LUM - B",
    "V-COMM-UGND - LUM - D",
    "V-COMM-UGND - LUM - ukn - B",
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
    <div className="comm-container">
      <button 
        className="toggle-button-comm" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Comm Layers' : 'Expand Comm Layers'}
      </button>
      {isExpanded && (
        <ul className="comm-list">
          {layerNames.map((item, index) => (
            <li key={index} className="comm-item">
              <span className="comm-content">{item}</span>
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

export default Comm;