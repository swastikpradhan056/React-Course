import profilePic from "./assets/pp.jpg";

function Card() {
  return (
    <>
      <div className="card">
        <img src={profilePic} alt="Profile Picture" className="card-image" />
        <h2 className="card-title">Swastik Raj Pradhan</h2>
        <p className="card-text">
          I am a Junior Software Developer and currently working as a internee
          at Tivrasoft
        </p>
      </div>
    </>
  );
}
export default Card;
