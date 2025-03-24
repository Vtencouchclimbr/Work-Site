import { useState } from 'react';
import './Irrg.css'; // Specific CSS file for this component

const Irrg = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle collapse
  const layerNames = [
    "V-IRRG-BOX - COH",
    "V-IRRG-BOX - COH - D",
    "V-IRRG-EQPM",
    "V-IRRG-IDEN",
    "V-IRRG-MANHOLE",
    "V-IRRG-MHOL - COH",
    "V-IRRG-MHOL - COH - D",
    "V-IRRG-PIPE",
    "V-IRRG-PIPE - COH - 4in - ukn - B",
    "V-IRRG-PIPE - COH - 4in - ukn - D",
    "V-IRRG-PIPE - COH - 6in - ukn - B",
    "V-IRRG-PIPE - COH - 6in - ukn - D",
    "V-IRRG-PIPE - COH - 8in - ukn - B",
    "V-IRRG-PIPE - COH - 8in - ukn - D",
    "V-IRRG-PIPE - COH - 10in - ukn - B",
    "V-IRRG-PIPE - COH - 10in - ukn - D",
    "V-IRRG-PIPE - COH - 12in - ukn - B",
    "V-IRRG-PIPE - COH - 12in - ukn - D",
    "V-IRRG-PIPE - COH - 14in - ukn - B",
    "V-IRRG-PIPE - COH - 14in - ukn - D",
    "V-IRRG-PIPE - COH - 20in - ukn - B",
    "V-IRRG-PIPE - COH - 20in - ukn - D",
    "V-IRRG-PIPE - COH - service - ukn - B",
    "V-IRRG-PIPE - COH - service - ukn - D",
    "V-IRRG-PIPE - COH - unk - B",
    "V-IRRG-PIPE - COH - unk - D",
    "V-IRRG-VALVE - COH",
    "V-IRRG-VALVE - COH - D"
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
    <div className="irrg-container">
      <button 
        className="toggle-button-irrg" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Irrigation Layers' : 'Expand Irrigation Layers'}
      </button>
      {isExpanded && (
        <ul className="irrg-list">
          {layerNames.map((item, index) => (
            <li key={index} className="irrg-item">
              <span className="irrg-content">{item}</span>
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

export default Irrg;