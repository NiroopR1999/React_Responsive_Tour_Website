import "./DestinationStyle.css";
function DestinationData(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img src={props.img1} alt="NotFound" />
          <img src={props.img2} alt="NotFound" />
        </div>
      </div>
    </>
  );
}
export default DestinationData;
