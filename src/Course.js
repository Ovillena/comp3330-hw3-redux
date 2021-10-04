import CourseComponent from "./components/CourseComponent";
import Store from "./Store";
import * as actions from "./actions";

function Course(props) {
  let courseState;
  // if (props.match.params.course === "mdia2106") {
  //   Store.dispatch(actions.showMDIA2106());
  // } else if (props.match.params.course === "comp3514") {
  //   Store.dispatch(actions.showCOMP3514());
  // } else if (props.match.params.course === "blaw3205") {
  //   Store.dispatch(actions.showBLAW3205());
  // } else if (props.match.params.course === "busa3455") {
  //   Store.dispatch(actions.showBUSA3455());
  // } else if (props.match.params.course === "idsp") {
  //   Store.dispatch(actions.showIDSP());
  // } else if (props.match.params.course === "mktg1352") {
  //   Store.dispatch(actions.showMKTG1352());
  // } else if (props.match.params.course === "comp3330") {
  //   Store.dispatch(actions.showCOMP3330());
  // }

  switch (props.match.params.course) {
    case "mdia2106":
      Store.dispatch(actions.showMDIA2106());
      break;
    case "comp3514":
      Store.dispatch(actions.showCOMP3514());
      break;
    case "blaw3205":
      Store.dispatch(actions.showBLAW3205());
      break;
    case "busa3455":
      Store.dispatch(actions.showBUSA3455());
      break;
    case "idsp":
      Store.dispatch(actions.showIDSP());
      break;
    case "mktg":
      Store.dispatch(actions.showMKTG1352());
      break;
    default:
      Store.dispatch(actions.showCOMP3330());
      break;
  }

  courseState = Store.getState();

  return (
    <div>
      <CourseComponent
        title={courseState.title}
        courseNum={courseState.courseNum}
        desc={courseState.desc}
      />
    </div>
  );
}

export default Course;
