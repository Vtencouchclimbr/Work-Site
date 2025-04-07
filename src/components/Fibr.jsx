import { useState } from 'react';
import './Fibr.css';

const Fibr = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-FIBR-POLE - {company} - B",
    "V-FIBR-POLE - {company} - D",
    "V-FIBR-BOX - {company} - B",
    "V-FIBR-BOX - {company} - D",
    "V-FIBR-OVHD - {company} - C",
    "V-FIBR-OVHD - {company} - D",
    "V-FIBR-OVHD - {company} - ukn ct - C",
    "V-FIBR-OVHD - {company} - ukn ct - D",
    "V-FIBR-UGND - {company} - 6ct - B",
    "V-FIBR-UGND - {company} - 6ct - D",
    "V-FIBR-UGND - {company} - 24ct - B",
    "V-FIBR-UGND - {company} - 24ct - D",
    "V-FIBR-UGND - {company} - 48ct - B",
    "V-FIBR-UGND - {company} - 48ct - D",
    "V-FIBR-UGND - {company} - 72ct - B",
    "V-FIBR-UGND - {company} - 72ct - D",
    "V-FIBR-UGND - {company} - 96ct - B",
    "V-FIBR-UGND - {company} - 96ct - D",
    "V-FIBR-UGND - {company} - 144ct - B",
    "V-FIBR-UGND - {company} - 144ct - D",
    "V-FIBR-UGND - {company} - 576ct - B",
    "V-FIBR-UGND - {company} - 576ct - D",
    "V-FIBR-UGND - {company} - ukn ct - B",
    "V-FIBR-UGND - {company} - ukn ct - D",
    "V-FIBR-UGND - {company} - B",
    "V-FIBR-UGND - {company} - D",
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
    <div className="fibr-container">
      <button 
        className="fibrbtn toggle-button-fibr" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Fiber Layers' : 'Expand Fiber Layers'}
      </button>
      
      {isExpanded && (
        <div className="fibr-content">
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
              <h3 className="fibrttl">Layers for {companyAcronym}</h3>
              <ul className="fibr-list">
                {layers.map((item, index) => (
                  <li key={index} className="text-light fibr-item">
                    <span className="fibr-content">{item}</span>
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

export default Fibr;