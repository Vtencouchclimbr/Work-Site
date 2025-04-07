import { useState } from 'react';
import './Tvis.css';

const Tvis = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-TVIS-BOX - {company} - B",
    "V-TVIS-BOX - {company} - D",
    "V-TVIS-OH - {company} - B",
    "V-TVIS-OH - {company} - D",
    "V-TVIS-UGND - {company} - B",
    "V-TVIS-UGND - {company} - D"
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
    <div className="tvis-container">
      <button 
        className="tvisbtn toggle-button-tvis" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Television Layers' : 'Expand Television Layers'}
      </button>
      
      {isExpanded && (
        <div className="tvis-content">
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
              <h3 className="tvisttl">Layers for {companyAcronym}</h3>
              <ul className="tvis-list">
                {layers.map((item, index) => (
                  <li key={index} className="text-light tvis-item">
                    <span className="tvis-content">{item}</span>
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

export default Tvis;