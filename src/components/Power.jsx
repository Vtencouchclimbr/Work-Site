import { useState } from 'react';
import './Power.css'; // Updated CSS file name for specificity

const Power = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerNames = [
    // V-PRIM category
    "V-PRIM-OH - RMP - 1PH",
    "V-PRIM-OH - RMP - 1PH - D",
    "V-PRIM-OH - RMP - 3PH",
    "V-PRIM-OH - RMP - 3PH - D",
    "V-PRIM-OH - RMP - DISTRIBUTION",
    "V-PRIM-OH - RMP - DISTRIBUTION - D",
    "V-PRIM-OH - RMP - SECONDARY",
    "V-PRIM-OH - RMP - SECONDARY - D",
    "V-PRIM-POLE - RMP - B",
    "V-PRIM-POLE - RMP - D",
    "V-PRIM-UGND - RMP - 1PH - B",
    "V-PRIM-UGND - RMP - 1PH - D",
    "V-PRIM-UGND - RMP - DISTRIBUTION",
    "V-PRIM-UGND - RMP - DISTRIBUTION - D",
    "V-PRIM-UGND - RMP - SECONDARY - B",
    "V-PRIM-UGND - RMP - SECONDARY - D",
    // V-POWR category
    "V-POWR-BOX - RMP",
    "V-POWR-BOX - RMP - D",
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
    <div className="power-container">
      <button 
        className="toggle-button-power" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Power Layers' : 'Expand Power Layers'}
      </button>
      {isExpanded && (
        <ul className="power-list">
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
                    <li key={index} className="power-item">
                      <span className="power-content">{item}</span>
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

export default Power;