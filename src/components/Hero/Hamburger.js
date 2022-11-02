import { useState } from "react";
const Hamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
    props.onClick(isOpen);
  };
  return (
    <div className="md:hidden">
      <button
        id="menu-btn"
        type="button"
        className={`${
          isOpen && "open"
        } z-40 block hamburger md:hidden focus:outline-none`}
        onClick={onClickHandler}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
};
export default Hamburger;
