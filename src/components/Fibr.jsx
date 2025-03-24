import { useState } from 'react';
import './Fibr.css'; // Specific CSS file for this component

const Fibr = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

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
    <div className="fibr-container">
      <button 
        className="toggle-button-fibr" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Fiber Layers' : 'Expand Fiber Layers'}
      </button>
      {isExpanded && (
        <ul className="fibr-list">
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
                    <li key={index} className="fibr-item">
                      <span className="fibr-content">{item}</span>
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

export default Fibr;