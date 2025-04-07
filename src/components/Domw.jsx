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
    "V-DOMW-MAIN-PIPE - {company} - 4in - cip - B",
    "V-DOMW-MAIN-PIPE - {company} - 4in - cip - D",
    "V-DOMW-MAIN-PIPE - {company} - 6in - cip - B",
    "V-DOMW-MAIN-PIPE - {company} - 6in - cip - D",
    "V-DOMW-MAIN-PIPE - {company} - 8in - cip - B",
    "V-DOMW-MAIN-PIPE - {company} - 8in - cip - D",
    "V-DOMW-MAIN-PIPE - {company} - 10in - cip - B",
    "V-DOMW-MAIN-PIPE - {company} - 10in - cip - D",
    "V-DOMW-MAIN-PIPE - {company} - 12in - cip - B",
    "V-DOMW-MAIN-PIPE - {company} - 12in - cip - D",
    "V-DOMW-MAIN-PIPE - {company} - unk - cip - B",
    "V-DOMW-MAIN-PIPE - {company} - unk - cip - D",
    "V-DOMW-MAIN-PIPE - {company} - 4in - dip - B",
    "V-DOMW-MAIN-PIPE - {company} - 4in - dip - D",
    "V-DOMW-MAIN-PIPE - {company} - 6in - dip - B",
    "V-DOMW-MAIN-PIPE - {company} - 6in - dip - D",
    "V-DOMW-MAIN-PIPE - {company} - 8in - dip - B",
    "V-DOMW-MAIN-PIPE - {company} - 8in - dip - D",
    "V-DOMW-MAIN-PIPE - {company} - 10in - dip - B",
    "V-DOMW-MAIN-PIPE - {company} - 10in - dip - D",
    "V-DOMW-MAIN-PIPE - {company} - 12in - dip - B",
    "V-DOMW-MAIN-PIPE - {company} - 12in - dip - D",
    "V-DOMW-MAIN-PIPE - {company} - unk - dip - B",
    "V-DOMW-MAIN-PIPE - {company} - unk - dip - D",
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