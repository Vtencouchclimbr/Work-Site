import { useState } from 'react';
import './Ngas.css'; // Specific CSS file for this component

const Ngas = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerNames = [
    "V-NGAS-PIPE - EGU - .75in - pl - B",
    "V-NGAS-PIPE - EGU - .75in - pl - D",
    "V-NGAS-PIPE - EGU - 2in - pl - B",
    "V-NGAS-PIPE - EGU - 2in - pl - D",
    "V-NGAS-PIPE - EGU - 3in - pl - B",
    "V-NGAS-PIPE - EGU - 3in - pl - D",
    "V-NGAS-PIPE - EGU - 4in - pl - B",
    "V-NGAS-PIPE - EGU - 4in - pl - D",
    "V-NGAS-PIPE - EGU - SERVICE - B",
    "V-NGAS-PIPE - EGU - SERVICE - D",
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
    <div className="ngas-container">
      <button 
        className="toggle-button-ngas" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Natural Gas Layers' : 'Expand Natural Gas Layers'}
      </button>
      {isExpanded && (
        <ul className="ngas-list">
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
                    <li key={index} className="ngas-item">
                      <span className="ngas-content">{item}</span>
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

export default Ngas;