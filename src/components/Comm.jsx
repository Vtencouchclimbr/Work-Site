import { useState } from 'react';
import './Comm.css'; // Specific CSS file for this component

const Comm = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerNames = [
    "V-COMM-UGND - CLL - 25pr - B",
    "V-COMM-UGND - CLL - 25pr - D",
    "V-COMM-UGND - CLL - 50pr - B",
    "V-COMM-UGND - CLL - 50pr - D",
    "V-COMM-UGND - CLL - 200pr - B",
    "V-COMM-UGND - CLL - 200pr - D",
    "V-COMM-UGND - CLL - 300pr - B",
    "V-COMM-UGND - CLL - 300pr - D",
    "V-COMM-UGND - CLL - 400pr - B",
    "V-COMM-UGND - CLL - 400pr - D",
    "V-COMM-UGND - CLL - 600pr - B",
    "V-COMM-UGND - CLL - 600pr - D",
    "V-COMM-UGND - CLL - 900pr - B",
    "V-COMM-UGND - CLL - 900pr - D",
    "V-COMM-UGND - CLL - 1200pr - B",
    "V-COMM-UGND - CLL - 1200pr - D",
    "V-COMM-UGND - CLL - 1500pr - B",
    "V-COMM-UGND - CLL - 1500pr - D",
    "V-COMM-UGND - CLL - 1800pr - B",
    "V-COMM-UGND - CLL - 1800pr - D",
    "V-COMM-UGND - CLL - 2400pr - B",
    "V-COMM-UGND - CLL - 2400pr - D",
    "V-COMM-UGND - CLL - 3000pr - B",
    "V-COMM-UGND - CLL - 3000pr - D",
    "V-COMM-UGND - CLL - 48ct - B",
    "V-COMM-UGND - CLL - DUCT - B",
    "V-COMM-UGND - CLL - DUCT - D",
    "V-COMM-UGND - CLL - ukn - B",
    "V-COMM-UGND - CLL - ukn - D",
    "V-COMM-UGND - CLL - Unk pr - B",
    "V-COMM-UGND - CLL - Unk pr - D",
    "V-COMM-OVHD - LUM - D",
    "V-COMM-PED - LUM - D",
    "V-COMM-POLE - LUM - D",
    "V-COMM-UGND - LUM - 3 6x - B",
    "V-COMM-UGND - LUM - 3 6x - D",
    "V-COMM-UGND - LUM - 25x - B",
    "V-COMM-UGND - LUM - 25x - D",
    "V-COMM-UGND - LUM - 100x - B",
    "V-COMM-UGND - LUM - 600x - B",
    "V-COMM-UGND - LUM - 900x - B",
    "V-COMM-UGND - LUM - D",
    "V-COMM-UGND - LUM - ukn - B",
  ];

  // Group layer names by company (always the second segment)
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
    <div className="comm-container">
      <button 
        className="toggle-button-comm" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Comm Layers' : 'Expand Comm Layers'}
      </button>
      {isExpanded && (
        <ul className="comm-list">
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
                    <li key={index} className="comm-item">
                      <span className="comm-content">{item}</span>
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

export default Comm;