let CourseComponent = (props) => {
  return (
    <div style={{ border: "1px solid" }}>
      <h1>{props.title}</h1>
      <h2>{props.courseNum}</h2>
      <p>{props.desc}</p>
    </div>
  );
};
export default CourseComponent;
