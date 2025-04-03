import { useState } from 'react';
import './Irrg.css';

const Irrg = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-IRRG-BOX - {company} - B",
    "V-IRRG-BOX - {company} - D",
    "V-IRRG-MHOL - {company} - B",
    "V-IRRG-MHOL - {company} - D",
    "V-IRRG-PIPE - {company} - 4in - pvc - B",
    "V-IRRG-PIPE - {company} - 4in - pvc - D",
    "V-IRRG-PIPE - {company} - 6in - pvc - B",
    "V-IRRG-PIPE - {company} - 6in - pvc - D",
    "V-IRRG-PIPE - {company} - 8in - pvc - B",
    "V-IRRG-PIPE - {company} - 8in - pvc - D",
    "V-IRRG-PIPE - {company} - 10in - pvc - B",
    "V-IRRG-PIPE - {company} - 10in - pvc - D",
    "V-IRRG-PIPE - {company} - 12in - pvc - B",
    "V-IRRG-PIPE - {company} - 12in - pvc - D",
    "V-IRRG-PIPE - {company} - 14in - pvc - B",
    "V-IRRG-PIPE - {company} - 14in - pvc - D",
    "V-IRRG-PIPE - {company} - 20in - pvc - B",
    "V-IRRG-PIPE - {company} - 20in - pvc - D",
    "V-IRRG-PIPE - {company} - service - pvc - B",
    "V-IRRG-PIPE - {company} - service - pvc - D",
    "V-IRRG-PIPE - {company} - ukn - pvc - B",
    "V-IRRG-PIPE - {company} - ukn - pvc - D",
    "V-IRRG-VALVE - {company} - B",
    "V-IRRG-VALVE - {company} - D",
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
    <div className="irrg-container">
      <button 
        className="irrbtn toggle-button-irrg" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Irrigation Layers' : 'Expand Irrigation Layers'}
      </button>
      
      {isExpanded && (
        <div className="irrg-content">
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
              <h3 className='comttl'>Layers for {companyAcronym}</h3>
              <ul className="text-light irrg-list">
                {layers.map((item, index) => (
                  <li key={index} className="irrg-item">
                    <span className="irrg-content">{item}</span>
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

export default Irrg;