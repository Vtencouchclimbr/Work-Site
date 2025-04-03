import { useState } from 'react';
import './Ngas.css';

const Ngas = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    "V-NGAS-PIPE - {company} - .75in - pl - B",
    "V-NGAS-PIPE - {company} - .75in - pl - D",
    "V-NGAS-PIPE - {company} - 2in - pl - B",
    "V-NGAS-PIPE - {company} - 2in - pl - D",
    "V-NGAS-PIPE - {company} - 3in - pl - B",
    "V-NGAS-PIPE - {company} - 3in - pl - D",
    "V-NGAS-PIPE - {company} - 4in - pl - B",
    "V-NGAS-PIPE - {company} - 4in - pl - D",
    "V-NGAS-PIPE - {company} - 6in - pl - B", 
    "V-NGAS-PIPE - {company} - 6in - pl - D", 
    "V-NGAS-PIPE - {company} - 8in - pl - B", 
    "V-NGAS-PIPE - {company} - 8in - pl - D", 
    "V-NGAS-PIPE - {company} - 10in - pl - B",
    "V-NGAS-PIPE - {company} - 10in - pl - D",
    "V-NGAS-PIPE - {company} - 12in - pl - B",
    "V-NGAS-PIPE - {company} - 12in - pl - D",
    "V-NGAS-PIPE - {company} - SERVICE - B",
    "V-NGAS-PIPE - {company} - SERVICE - D",
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
    <div className="ngas-container">
      <button 
        className="gasbtn toggle-button-ngas" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Natural Gas Layers' : 'Expand Natural Gas Layers'}
      </button>
      
      {isExpanded && (
        <div className="ngas-content">
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
              <h3 className='gasttl'>Layers for {companyAcronym}</h3>
              <ul className="ngas-list">
                {layers.map((item, index) => (
                  <li key={index} className="text-light ngas-item">
                    <span className="ngas-content">{item}</span>
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

export default Ngas;