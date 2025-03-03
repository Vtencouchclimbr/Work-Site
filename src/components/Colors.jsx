import './Colors.css';

const Colors = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange' ];
  const customText = ['Power', 'Water', 'Sewer', 'Gas', 'Irr/Storm', 'Com/Fib'];
  
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
    <div className="square-container">
      {squares}
    </div>
  );
};

export default Colors;