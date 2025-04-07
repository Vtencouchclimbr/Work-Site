import { useState } from 'react';
import './Strm.css';

const Strm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-STRM-INLT - {company} - 24in 36in - C",
    "V-STRM-INLT - {company} - 36in 72in - C",
    "V-STRM-INLT - {company} - 48in - C",
    "V-STRM-INLT - {company} - 60in - C",
    "V-STRM-INLT - {company} - ukn - D",
    "V-STRM-MAIN-DITCH - {company} - D",
    "V-STRM-MAIN-PIPE - {company} - 6in - pvc - D",
    "V-STRM-MAIN-PIPE - {company} - 6in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 6in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - 8in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 8in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - 12in - cpp - C",
    "V-STRM-MAIN-PIPE - {company} - 12in - pvc - C",
    "V-STRM-MAIN-PIPE - {company} - 12in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 12in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - 14in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 14in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - 15in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 15in - CPP - C",
    "V-STRM-MAIN-PIPE - {company} - 18in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 18in - cpp - C",
    "V-STRM-MAIN-PIPE - {company} - 18in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - 20in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 20in - cpp - C",
    "V-STRM-MAIN-PIPE - {company} - 20in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - 36in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - 48in - rcp - C",
    "V-STRM-MAIN-PIPE - {company} - 48in - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - ukn - rcp - D",
    "V-STRM-MAIN-PIPE - {company} - ukn - ukn - D",
    "V-STRM-MHOL - {company} - 36in 72in - C",
    "V-STRM-MHOL - {company} - 48in - C",
    "V-STRM-MHOL - {company} - 60in - C",
    "V-STRM-MHOL - {company} - D",
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
    <div className="strm-container">
      <button 
        className="stmbtn toggle-button-strm" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Storm Sewer Layers' : 'Expand Storm Sewer Layers'}
      </button>
      
      {isExpanded && (
        <div className="strm-content">
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
              <h3 className='stmttl'>Layers for {companyAcronym}</h3>
              <ul className="text-light strm-list">
                {layers.map((item, index) => (
                  <li key={index} className="strm-item">
                    <span className="strm-content">{item}</span>
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

export default Strm;