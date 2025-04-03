import { useState } from 'react';
import './Domw.css';

const Domw = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-DOMW - {company} - D",
    "V-DOMW-AQUEDUCT - {company} - 92in - B",
    "V-DOMW-AQUEDUCT - {company} - 92in - D",
    "V-DOMW-HYDT - {company}",
    "V-DOMW-HYDT - {company} - D",
    "V-DOMW-MAIN-PIPE - {company} - 4in - ukn - B",
    "V-DOMW-MAIN-PIPE - {company} - 4in - ukn - D",
    "V-DOMW-MAIN-PIPE - {company} - 6in - ukn - B",
    "V-DOMW-MAIN-PIPE - {company} - 6in - ukn - D",
    "V-DOMW-MAIN-PIPE - {company} - 8in - ukn - B",
    "V-DOMW-MAIN-PIPE - {company} - 8in - ukn - D",
    "V-DOMW-MAIN-PIPE - {company} - 10in - ukn - B",
    "V-DOMW-MAIN-PIPE - {company} - 10in - ukn - D",
    "V-DOMW-MAIN-PIPE - {company} - 12in - ukn - B",
    "V-DOMW-MAIN-PIPE - {company} - 12in - ukn - D",
    "V-DOMW-MAIN-PIPE - {company} - unk - ukn - B",
    "V-DOMW-MAIN-PIPE - {company} - unk - ukn - D",
    "V-DOMW-METER - {company}",
    "V-DOMW-METER - {company} - D",
    "V-DOMW-VALVE - {company}",
    "V-DOMW-VALVE - {company} - D",
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
    <div className="domw-container">
      <button 
        className="wtrbtn toggle-button-domw" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Domestic Water Layers' : 'Expand Domestic Water Layers'}
      </button>
      
      {isExpanded && (
        <div className="domw-content">
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
              <h3 className='wtrttl'>Layers for {companyAcronym}</h3>
              <ul className="domw-list">
                {layers.map((item, index) => (
                  <li key={index} className="text-light domw-item">
                    <span className="domw-content">{item}</span>
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

export default Domw;