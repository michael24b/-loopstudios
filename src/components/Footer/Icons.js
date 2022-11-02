const Icons = (props) => {
  return (
    <div className="h-8 group">
      <a href>
        <img src={props.icon} alt="" className="h-6" />
      </a>
    </div>
  );
};
export default Icons;
