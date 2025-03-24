import { useState } from 'react';
import './Ngas.css'; // Specific CSS file for this component

const Ngas = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle collapse
  const layerNames = [
    "V-NGAS-PIPE - EGU - .75in - pl",
    "V-NGAS-PIPE - EGU - .75in - pl - D",
    "V-NGAS-PIPE - EGU - 2in - pl",
    "V-NGAS-PIPE - EGU - 2in - pl - D",
    "V-NGAS-PIPE - EGU - 3in - pl",
    "V-NGAS-PIPE - EGU - 3in - pl - D",
    "V-NGAS-PIPE - EGU - 4in - pl",
    "V-NGAS-PIPE - EGU - 4in - pl - D",
    "V-NGAS-PIPE - EGU - SERVICE",
    "V-NGAS-PIPE - EGU - SERVICE - D",
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
    <div className="ngas-container">
      <button 
        className="toggle-button-ngas" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Natural Gas Layers' : 'Expand Natural Gas Layers'}
      </button>
      {isExpanded && (
        <ul className="ngas-list">
          {layerNames.map((item, index) => (
            <li key={index} className="ngas-item">
              <span className="ngas-content">{item}</span>
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

export default Ngas;