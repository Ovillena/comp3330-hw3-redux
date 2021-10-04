import * as actions from "./actionTypes";

export default function reducer(state = [], action) {
  state = {
    title: action.payload.title,
    courseNum: action.payload.courseNum,
    desc: action.payload.desc,
  };
  return state;
}
