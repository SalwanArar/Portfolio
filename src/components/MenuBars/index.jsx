import "./index.scss";

function MenuBars(props) {
  const handleToggle = (event) => {
    props.setToggle(event.target.checked);
  };

  return (
    <div className="menu-bars">
      <input
        type="checkbox"
        onChange={handleToggle}
        aria-labelledby="Menu Bar"
        checked={props.toggle}
      />
      <div className="line" />
    </div>
  );
}

export default MenuBars;
