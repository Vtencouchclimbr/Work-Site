import { useState } from 'react';
import './Domw.css'; // Specific CSS file for this component

const Domw = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerNames = [
    "V-DOMW - JVWCD - D",
    "V-DOMW - LEHI - D",
    "V-DOMW-AQUEDUCT - JVWCD - 92in - B",
    "V-DOMW-AQUEDUCT - JVWCD - 92in - D",
    "V-DOMW-HYDT - COH",
    "V-DOMW-HYDT - COH - D",
    "V-DOMW-MAIN-PIPE - COH - 4in - ukn - B",
    "V-DOMW-MAIN-PIPE - COH - 4in - ukn - D",
    "V-DOMW-MAIN-PIPE - COH - 6in - ukn - B",
    "V-DOMW-MAIN-PIPE - COH - 6in - ukn - D",
    "V-DOMW-MAIN-PIPE - COH - 8in - ukn - B",
    "V-DOMW-MAIN-PIPE - COH - 8in - ukn - D",
    "V-DOMW-MAIN-PIPE - COH - 10in - ukn - B",
    "V-DOMW-MAIN-PIPE - COH - 10in - ukn - D",
    "V-DOMW-MAIN-PIPE - COH - 12in - ukn - B",
    "V-DOMW-MAIN-PIPE - COH - 12in - ukn - D",
    "V-DOMW-MAIN-PIPE - COH - unk - ukn - B",
    "V-DOMW-MAIN-PIPE - COH - unk - ukn - D",
    "V-DOMW-METER - HWC",
    "V-DOMW-METER - HWC - D",
    "V-DOMW-VALVE - HWC",
    "V-DOMW-VALVE - HWC - D",
  ];

  // Group layer names by company (second segment)
  const groupedLayers = layerNames.reduce((acc, layer) => {
    const parts = layer.split(" - ");
    const company = parts[1]; // Company is always the second segment
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(layer);
    return acc;
  }, {});

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

  const toggleCompanyExpand = (company) => {
    setExpandedCompanies(prev => ({
      ...prev,
      [company]: !prev[company],
    }));
  };

  return (
    <div className="domw-container">
      <button 
        className="toggle-button-domw" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Domestic Water Layers' : 'Expand Domestic Water Layers'}
      </button>
      {isExpanded && (
        <ul className="domw-list">
          {Object.keys(groupedLayers).map(company => (
            <li key={company} className="company-item">
              <button
                className="toggle-button-company"
                onClick={() => toggleCompanyExpand(company)}
              >
                {expandedCompanies[company] ? `Collapse ${company}` : `Expand ${company}`}
              </button>
              {expandedCompanies[company] && (
                <ul className="company-layers">
                  {groupedLayers[company].map((item, index) => (
                    <li key={index} className="domw-item">
                      <span className="domw-content">{item}</span>
                      <button
                        onClick={() => handleCopy(item, `${company}-${index}`)}
                        className="copy-button"
                      >
                        {copiedIndex === `${company}-${index}` ? 'Copied!' : 'Copy'}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Domw;