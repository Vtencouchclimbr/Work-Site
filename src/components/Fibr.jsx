import { useState } from 'react';
import './Fibr.css'; // Specific CSS file for this component

const Fibr = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle collapse
  const layerNames = [
    "V-FIBR-BOX - CCI",
    "V-FIBR-BOX - CLL",
    "V-FIBR-OH - CCI",
    "V-FIBR-OH - CCI - 48ct - C",
    "V-FIBR-OH - CCI - D",
    "V-FIBR-OH - CLL",
    "V-FIBR-OH - CLL - D",
    "V-FIBR-POLE - CLL",
    "V-FIBR-UGND - CCI - 48ct - C",
    "V-FIBR-UGND - CLL",
    "V-FIBR-UGND - CLL - D"
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
    <div className="fibr-container">
      <button 
        className="toggle-button-fibr" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Fiber Layers' : 'Expand Fiber Layers'}
      </button>
      {isExpanded && (
        <ul className="fibr-list">
          {layerNames.map((item, index) => (
            <li key={index} className="fibr-item">
              <span className="fibr-content">{item}</span>
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

export default Fibr;