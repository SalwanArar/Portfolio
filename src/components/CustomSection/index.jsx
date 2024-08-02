import "./index.scss";

function CustomSection(props) {
  return (
    <section className="container" id={props.id}>
      <h1 className="title-section">{props.title}</h1>
      {props.children}
    </section>
  );
}

export default CustomSection;
