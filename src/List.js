import { Link } from "react-router-dom";

function List() {
  return (
    <div>
      <h1>List of Courses</h1>
      <div className="courseList">
        <div>
          <Link to="/list/mdia2106">MDIA2106</Link>
        </div>
        <div>
          <Link to="/list/comp3514">COMP3514</Link>
        </div>
        <div>
          <Link to="/list/blaw3205">BLAW3205</Link>
        </div>
        <div>
          <Link to="/list/busa3455">BUSA3455</Link>
        </div>
        <div>
          <Link to="/list/idsp">IDSP</Link>
        </div>
        <div>
          <Link to="/list/mktg1352">MKTG1352</Link>
        </div>
        <div>
          <Link to="/list/comp3330">COMP3330</Link>
        </div>
      </div>
    </div>
  );
}

export default List;
