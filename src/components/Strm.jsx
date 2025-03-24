import { useState } from 'react';
import './Strm.css'; // Specific CSS file for this component

const Strm = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle main collapse
  const [expandedCompanies, setExpandedCompanies] = useState({}); // State to toggle company collapse
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerNames = [
    "V-STRM-INLT - HCPW - 24in 36in - C",
    "V-STRM-INLT - HCPW - 36in 72in - C",
    "V-STRM-INLT - HCPW - 48in - C",
    "V-STRM-INLT - HCPW - 60in - C",
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
    "V-STRM-MHOL - HCPW - 36in 72in - C",
    "V-STRM-MHOL - HCPW - 48in - C",
    "V-STRM-MHOL - HCPW - 60in - C",
    "V-STRM-MHOL - HCPW - D",
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
    <div className="strm-container">
      <button 
        className="toggle-button-strm" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Storm Sewer Layers' : 'Expand Storm Sewer Layers'}
      </button>
      {isExpanded && (
        <ul className="strm-list">
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
                    <li key={index} className="strm-item">
                      <span className="strm-content">{item}</span>
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

export default Strm;