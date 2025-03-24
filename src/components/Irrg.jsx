import { useState } from 'react';
import './Irrg.css'; // Specific CSS file for this component

const Irrg = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerNames = [
    "V-IRRG-BOX - COH",
    "V-IRRG-BOX - COH - D",
    "V-IRRG-MHOL - COH",
    "V-IRRG-MHOL - COH - D",
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
    <div className="irrg-container">
      <button 
        className="toggle-button-irrg" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Irrigation Layers' : 'Expand Irrigation Layers'}
      </button>
      {isExpanded && (
        <ul className="irrg-list">
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
                    <li key={index} className="irrg-item">
                      <span className="irrg-content">{item}</span>
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

export default Irrg;