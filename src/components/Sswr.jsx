import { useState } from 'react';
import './Sswr.css';

const Sswr = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-SSWR-MAIN-PIPE - {company} - 6in - PVC - C",
    "V-SSWR-MAIN-PIPE - {company} - 6in - PVC - D",
    "V-SSWR-MAIN-PIPE - {company} - 8in - PVC - C",
    "V-SSWR-MAIN-PIPE - {company} - 8in - PVC - D",
    "V-SSWR-MAIN-PIPE - {company} - 8in - RCP - C",
    "V-SSWR-MAIN-PIPE - {company} - 10in - PVC - C",
    "V-SSWR-MAIN-PIPE - {company} - 12in - PVC - C",
    "V-SSWR-MAIN-PIPE - {company} - 12in - PVC - D",
    "V-SSWR-MAIN-PIPE - {company} - 15in - PVC - C",
    "V-SSWR-MAIN-PIPE - {company} - 15in - PVC - D",
    "V-SSWR-MAIN-PIPE - {company} - 18in - PVC - C",
    "V-SSWR-MAIN-PIPE - {company} - 18in - RCP - C",
    "V-SSWR-MAIN-PIPE - {company} - 24in - PVC - C",
    "V-SSWR-MAIN-PIPE - {company} - 24in - RCP - C",
    "V-SSWR-MAIN-PIPE - {company} - ukn - RCP - D",
    "V-SSWR-MAIN-PIPE - {company} - ukn - ukn - D",
    "V-SSWR-MHOL - {company} - 36in",
    "V-SSWR-MHOL - {company} - 36in - D",
    "V-SSWR-MHOL - {company} - 48in",
    "V-SSWR-MHOL - {company} - 60in"
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