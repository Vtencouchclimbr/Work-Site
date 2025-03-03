import './Colors.css';

const Colors = () => {
  const colors = ['red', 'yellow', 'orange', 'blue', 'green', 'purple' ];
  const customText = ['Power', 'Gas', 'Com/Fib', 'Water', 'Sewer',  'Storm/Irr'];
  
  const numberOfSquares = 6; // Increased to show wrapping

  const squares = Array.from({ length: numberOfSquares }, (_, index) => (
    <div
      key={index}
      className="square"
      style={{ backgroundColor: colors[index % colors.length] }}
    >
      {customText[index % customText.length]}
    </div>
  ));

  return (
    <>
    <div>
        <p className='text-light'>
        <h4>UTILITY QUALITY:</h4>
         A - Existing Utility Record Drawings: Historical or utility company-provided drawings showing approximate locations and details of subsurface utilities. <br />
         B - Utility Company Database Information: GIS data or digital records from utility companies showing the general location and attributes of utilities without field verification.<br />
         C - Utility Identification through Surface Features: Above-ground indicators like manholes or vaults that suggest the location of subsurface utilities.<br />
         D - Surveyed Surface Features: Surface markers, like utility poles or access points, surveyed to help identify the approximate locations of subsurface utilities.<br />
         </p>
    </div>
    <div className="square-container">
      {squares}
    </div>
    </>
  );
};

export default Colors;