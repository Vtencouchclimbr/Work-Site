import { useState } from 'react';
import './Sswr.css'; // Specific CSS file for this component

const Sswr = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle collapse
  const layerNames = [
    "V-SSWR-MAIN-PIPE - TSSD - 6in - PVC - C",
    "V-SSWR-MAIN-PIPE - TSSD - 6in - PVC - D",
    "V-SSWR-MAIN-PIPE - TSSD - 8in - PVC - C",
    "V-SSWR-MAIN-PIPE - TSSD - 8in - PVC - D",
    "V-SSWR-MAIN-PIPE - TSSD - 8in - RCP - C",
    "V-SSWR-MAIN-PIPE - TSSD - 10in - PVC - C",
    "V-SSWR-MAIN-PIPE - TSSD - 12in - PVC - C",
    "V-SSWR-MAIN-PIPE - TSSD - 12in - PVC - D",
    "V-SSWR-MAIN-PIPE - TSSD - 15in - PVC - C",
    "V-SSWR-MAIN-PIPE - TSSD - 15in - PVC - D",
    "V-SSWR-MAIN-PIPE - TSSD - 18in - PVC - C",
    "V-SSWR-MAIN-PIPE - TSSD - 18in - RCP - C",
    "V-SSWR-MAIN-PIPE - TSSD - 24in - PVC - C",
    "V-SSWR-MAIN-PIPE - TSSD - 24in - RCP - C",
    "V-SSWR-MAIN-PIPE - TSSD - ukn - RCP - D",
    "V-SSWR-MAIN-PIPE - TSSD - ukn - ukn - D",
    "V-SSWR-MHOL - TSSD - 36in",
    "V-SSWR-MHOL - TSSD - 36in - D",
    "V-SSWR-MHOL - TSSD - 48in",
    "V-SSWR-MHOL - TSSD - 60in"
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
    <div className="sswr-container">
      <button 
        className="toggle-button-sswr" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Sanitary Sewer Layers' : 'Expand Sanitary Sewer Layers'}
      </button>
      {isExpanded && (
        <ul className="sswr-list">
          {layerNames.map((item, index) => (
            <li key={index} className="sswr-item">
              <span className="sswr-content">{item}</span>
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

export default Sswr;