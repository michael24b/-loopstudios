const Item = (props) => {
  return (
    <div className="group item">
      {/* Desktop Image */}
      {/* Mobile Image */}
      <img className="md:hidden w-full" alt="" src={props.imgm} />
      <img
        className="hidden w-full duration-500 md:block group-hover:scale-110"
        alt=""
        src={props.imgd}
      />
      {/* Item Gradiant */}
      <div className="item-gradient"></div>
      <h5>{props.title}</h5>
    </div>
  );
};
export default Item;
