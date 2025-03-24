import { useState } from 'react';
import './Sswr.css'; // Specific CSS file for this component

const Sswr = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

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
    <div className="sswr-container">
      <button 
        className="toggle-button-sswr" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Sanitary Sewer Layers' : 'Expand Sanitary Sewer Layers'}
      </button>
      {isExpanded && (
        <ul className="sswr-list">
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
                    <li key={index} className="sswr-item">
                      <span className="sswr-content">{item}</span>
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

export default Sswr;