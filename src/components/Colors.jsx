import './Colors.css';

const Colors = () => {
  // const colors = ['red', 'yellow', 'orange', 'blue', 'green', 'purple' ];
  // const customText = ['Power', 'Gas', 'Com/Fib', 'Water', 'Sewer',  'Storm/Irr'];
  
  // const numberOfSquares = 6; // Increased to show wrapping

  // const squares = Array.from({ length: numberOfSquares }, (_, index) => (
  //   <div
  //     key={index}
  //     className="square"
  //     style={{ backgroundColor: colors[index % colors.length] }}
  //   >
  //     {customText[index % customText.length]}
  //   </div>
  // ));

  return (
    <>
    <div>
        <p style={{ color:'#6c757d' }} className=''>
        <h5>UTILITY QUALITY:</h5>
         A - The highest level of accuracy, involving<br /> precise horizontal and vertical location of utilities,<br /> typically obtained through physical exposure<br /> (e.g., potholing or excavation). <br />
         B - Involves designating utilities using<br /> geophysical methods (e.g., ground-penetrating radar,<br /> electromagnetic locators) to determine approximate<br /> horizontal locations. <br />
         C - Relies on existing utility records and<br /> surface features (e.g., manholes, valve boxes) to<br /> infer utility locations, with less accuracy than QL-B.<br />
         D - The lowest level, based solely on<br /> utility records, verbal accounts, or educated guesses,<br /> with no field verification.
<br />
         </p>
    </div>
    <div className="square-container">
      {/* {squares} */}
    </div>
    </>
  );
};

export default Colors;