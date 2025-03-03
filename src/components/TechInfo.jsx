import chooseTemplate from '../util/1ChooseTemplate.png';
import Attach from '../util/Attach.png';
import Assign from '../util/Assign.png';

const Tech = () => {

  return (
<div className="btn-group d-felx flex-column">
  <button className="btn btn-primary btn-sm dropdown-toggle rounded mb-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Line Creation
  </button>
  <ul className="dropdown-menu bg-dark text-light">
    This is where you will choose the type of line you want to create. <br/>
    <span style={{color:'yellow'}}>Never use level color, weight, type. Always assign attributes manually.</span> <br/>
  <img className='m-2' src={chooseTemplate} alt="choose template" /> <br/>
    Start by selecting from the template drop down on the left. <br/>
    Then follow: -Existing, -Utilities, -Linear, and choose relevant utility. <br/>
    From here you will also choose your Level, Line Type, weight, and color. <br/>
    <hr/>
    Now attach attributes to the line using the Attach Item action.
  <img className='m-2' src={Attach} alt="attach" /> <br/>
    Finally, assign the line attributes.
  <img style={{height:'500px'}} className='m-2' src={Assign} alt="assign" />
  </ul>

  <button className="btn btn-primary btn-sm dropdown-toggle rounded mb-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Cell Creation
  </button>
  <ul className="dropdown-menu bg-dark text-light">
    This is where you will choose the type of line you want to create. <br/>
    <span style={{color:'yellow'}}>Never use level color, weight, type. Always assign attributes manually.</span> <br/>
  <img className='m-2' src={chooseTemplate} alt="choose template" /> <br/>
    Start by selecting from the template drop down on the left. <br/>
    Then follow: -Existing, -Utilities, -Linear, and choose relevant utility. <br/>
    From here you will also choose your Level, Line Type, weight, and color. <br/>
    <hr/>
    Now attach attributes to the line using the Attach Item action.
  <img className='m-2' src={Attach} alt="attach" /> <br/>
    Finally, assign the line attributes.
  <img style={{height:'500px'}} className='m-2' src={Assign} alt="assign" />
  </ul>
</div>

  );
};

export default Tech;