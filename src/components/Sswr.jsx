import { useState } from 'react';
import './Sswr.css';

const Sswr = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-SSWR-MAIN-PIPE - {company} - 6in - pvc - C",
    "V-SSWR-MAIN-PIPE - {company} - 6in - pvc - D",
    "V-SSWR-MAIN-PIPE - {company} - 8in - pvc - C",
    "V-SSWR-MAIN-PIPE - {company} - 8in - pvc - D",
    "V-SSWR-MAIN-PIPE - {company} - 8in - rcp - C",
    "V-SSWR-MAIN-PIPE - {company} - 10in - pvc - C",
    "V-SSWR-MAIN-PIPE - {company} - 12in - pvc - C",
    "V-SSWR-MAIN-PIPE - {company} - 12in - pvc - D",
    "V-SSWR-MAIN-PIPE - {company} - 15in - pvc - C",
    "V-SSWR-MAIN-PIPE - {company} - 15in - pvc - D",
    "V-SSWR-MAIN-PIPE - {company} - 18in - pvc - C",
    "V-SSWR-MAIN-PIPE - {company} - 18in - rcp - C",
    "V-SSWR-MAIN-PIPE - {company} - 24in - pvc - C",
    "V-SSWR-MAIN-PIPE - {company} - 24in - rcp - C",
    "V-SSWR-MAIN-PIPE - {company} - ukn - rcp - D",
    "V-SSWR-MAIN-PIPE - {company} - ukn - ukn - D",
    "V-SSWR-MHOL - {company} - 36in - B",
    "V-SSWR-MHOL - {company} - 36in - D",
    "V-SSWR-MHOL - {company} - 48in - B",
    "V-SSWR-MHOL - {company} - 48in - D",
    "V-SSWR-MHOL - {company} - 60in - B",
    "V-SSWR-MHOL - {company} - 60in - D",
  ];

  // Generate layers based on company acronym
  const generateLayers = () => {
    if (!companyAcronym) return [];
    return layerTemplates.map(template => 
      template.replace('{company}', companyAcronym.toUpperCase())
    );
  };

  const layers = generateLayers();

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

  const handleCompanySubmit = (e) => {
    e.preventDefault();
    setCompanyAcronym(inputValue);
    setInputValue(''); // Clear input after submission
    if (!isExpanded) setIsExpanded(true); // Auto-expand if not already expanded
  };

  return (
    <div className="sswr-container">
      <button 
        className="sswrbtn toggle-button-sswr" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Sanitary Sewer Layers' : 'Expand Sanitary Sewer Layers'}
      </button>
      
      {isExpanded && (
        <div className="sswr-content">
          <form onSubmit={handleCompanySubmit} className="company-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Company Name"
              className="company-input"
            />
            <button type="submit" className="submit-button">
              Set Company
            </button>
          </form>

          {companyAcronym && (
            <div>
              <h3 className="sswrttl">Layers for {companyAcronym}</h3>
              <ul className="sswr-list">
                {layers.map((item, index) => (
                  <li key={index} className="text-light sswr-item">
                    <span className="sswr-content">{item}</span>
                    <button
                      onClick={() => handleCopy(item, index)}
                      className="copy-button"
                    >
                      {copiedIndex === index ? 'Copied!' : 'Copy'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sswr;