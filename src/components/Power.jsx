import { useState } from 'react';
import './Power.css';

const Power = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    // V-PRIM category
    "V-PRIM-OH - {company} - 1PH - B",
    "V-PRIM-OH - {company} - 1PH - D",
    "V-PRIM-OH - {company} - 3PH - B",
    "V-PRIM-OH - {company} - 3PH - D",
    "V-PRIM-OH - {company} - DISTRIBUTION - B",
    "V-PRIM-OH - {company} - DISTRIBUTION - D",
    "V-PRIM-OH - {company} - SECONDARY - B",
    "V-PRIM-OH - {company} - SECONDARY - D",
    "V-PRIM-POLE - {company} - B",
    "V-PRIM-POLE - {company} - D",
    "V-PRIM-UGND - {company} - 1PH - B",
    "V-PRIM-UGND - {company} - 1PH - D",
    "V-PRIM-UGND - {company} - DISTRIBUTION - B",
    "V-PRIM-UGND - {company} - DISTRIBUTION - D",
    "V-PRIM-UGND - {company} - SECONDARY - B",
    "V-PRIM-UGND - {company} - SECONDARY - D",
    // V-POWR category
    "V-POWR-BOX - {company} - B",
    "V-POWR-BOX - {company} - D",
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
    <div className="power-container">
      <button 
        className="pwrbtn toggle-button-power" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Power Layers' : 'Expand Power Layers'}
      </button>
      
      {isExpanded && (
        <div className="power-content">
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
              <h3 className='pwrttl'>Layers for {companyAcronym}</h3>
              <ul className="text-light power-list">
                {layers.map((item, index) => (
                  <li key={index} className="power-item">
                    <span className="power-content">{item}</span>
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

export default Power;