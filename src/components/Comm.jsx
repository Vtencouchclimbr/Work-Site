import { useState } from 'react';
import './Comm.css';

const Comm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [companyAcronym, setCompanyAcronym] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layerTemplates = [
    // CLL-like layers
    "V-COMM-UGND - {company} - 25pr - B",
    "V-COMM-UGND - {company} - 25pr - D",
    "V-COMM-UGND - {company} - 50pr - B",
    "V-COMM-UGND - {company} - 50pr - D",
    "V-COMM-UGND - {company} - 200pr - B",
    "V-COMM-UGND - {company} - 200pr - D",
    "V-COMM-UGND - {company} - 300pr - B",
    "V-COMM-UGND - {company} - 300pr - D",
    "V-COMM-UGND - {company} - 400pr - B",
    "V-COMM-UGND - {company} - 400pr - D",
    "V-COMM-UGND - {company} - 600pr - B",
    "V-COMM-UGND - {company} - 600pr - D",
    "V-COMM-UGND - {company} - 900pr - B",
    "V-COMM-UGND - {company} - 900pr - D",
    "V-COMM-UGND - {company} - 1200pr - B",
    "V-COMM-UGND - {company} - 1200pr - D",
    "V-COMM-UGND - {company} - 1500pr - B",
    "V-COMM-UGND - {company} - 1500pr - D",
    "V-COMM-UGND - {company} - 1800pr - B",
    "V-COMM-UGND - {company} - 1800pr - D",
    "V-COMM-UGND - {company} - 2400pr - B",
    "V-COMM-UGND - {company} - 2400pr - D",
    "V-COMM-UGND - {company} - 3000pr - B",
    "V-COMM-UGND - {company} - 3000pr - D",
    "V-COMM-UGND - {company} - 48ct - B",
    "V-COMM-UGND - {company} - DUCT - B",
    "V-COMM-UGND - {company} - DUCT - D",
    "V-COMM-UGND - {company} - ukn - B",
    "V-COMM-UGND - {company} - ukn - D",
    "V-COMM-UGND - {company} - Unk pr - B",
    "V-COMM-UGND - {company} - Unk pr - D",
    // LUM-like layers
    "V-COMM-OVHD - {company} - D",
    "V-COMM-PED - {company} - D",
    "V-COMM-POLE - {company} - D",
    "V-COMM-UGND - {company} - 3 6x - B",
    "V-COMM-UGND - {company} - 3 6x - D",
    "V-COMM-UGND - {company} - 25x - B",
    "V-COMM-UGND - {company} - 25x - D",
    "V-COMM-UGND - {company} - 100x - B",
    "V-COMM-UGND - {company} - 600x - B",
    "V-COMM-UGND - {company} - 900x - B",
    "V-COMM-UGND - {company} - D",
    "V-COMM-UGND - {company} - ukn - B",
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
    <div className="comm-container">
      <button 
        className="combtn toggle-button-comm" 
        onClick={toggleExpand}
      >
        {isExpanded ? 'Collapse Comm Layers' : 'Expand Comm Layers'}
      </button>
      
      {isExpanded && (
        <div className="comm-content">
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
              <ul className="text-light comm-list">
                {layers.map((item, index) => (
                  <li key={index} className="comm-item">
                    <span className="comm-content">{item}</span>
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

export default Comm;