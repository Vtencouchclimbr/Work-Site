import { useState } from 'react';
import './Strm.css'; // Specific CSS file for this component

const Strm = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle collapse
  const layerNames = [
    "V-STRM-INLT - HCPW",
    "V-STRM-INLT - HCPW - 24in 36in",
    "V-STRM-INLT - HCPW - 36in 72in",
    "V-STRM-INLT - HCPW - 48in",
    "V-STRM-INLT - HCPW - 60in",
    "V-STRM-INLT - HCPW - D",
    "V-STRM-MAIN-DITCH - HCPW - D",
    "V-STRM-MAIN-PIPE - HCPW - 6in - PVC - D",
    "V-STRM-MAIN-PIPE - HCPW - 6in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 6in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 8in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 8in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 12in - CPP - C",
    "V-STRM-MAIN-PIPE - HCPW - 12in - PVC - C",
    "V-STRM-MAIN-PIPE - HCPW - 12in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 12in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 14in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 14in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 15in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 18in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 18in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 20in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 20in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 36in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 36in - ukn",
    "V-STRM-MAIN-PIPE - HCPW - 48in - RCP - C",
    "V-STRM-MAIN-PIPE - HCPW - 48in - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - 48in - ukn",
    "V-STRM-MAIN-PIPE - HCPW - ukn - D",
    "V-STRM-MAIN-PIPE - HCPW - ukn - RCP - D",
    "V-STRM-MAIN-PIPE - HCPW - ukn - ukn - D",
    "V-STRM-MHOL - HCPW - 36in 72in",
    "V-STRM-MHOL - HCPW - 48in",
    "V-STRM-MHOL - HCPW - 60in",
    "V-STRM-MHOL - HCPW - D",
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
    <div className="strm-container">
      <button 
        className="toggle-button-strm" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Storm Sewer Layers' : 'Expand Storm Sewer Layers'}
      </button>
      {isExpanded && (
        <ul className="strm-list">
          {layerNames.map((item, index) => (
            <li key={index} className="strm-item">
              <span className="strm-content">{item}</span>
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

export default Strm;