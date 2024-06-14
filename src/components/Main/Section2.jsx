import "./section2.scss";
function Section2() {
  return (
    <div className="section2">
      <div className="container">
        <h2>Product was Built Specifically for You</h2>
        <div className="cards">
          <div className="card">
            <img
              src="./../src/assets/images/main/section2/card1.svg"
              alt="card1"
            />
            <h4>First click tests</h4>
            <p>While most people enjoy casino gambling,</p>
          </div>
          <div className="card">
            <img
              src="./../src/assets/images/main/section2/card2.svg"
              alt="card2"
            />
            <h4>Design surveys</h4>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </div>
          <div className="card">
            <img
              src="./../src/assets/images/main/section2/card3.svg"
              alt="card3"
            />
            <h4>Preference tests</h4>
            <p>The Myspace page defines the individual.</p>
          </div>
          <div className="card">
            <img
              src="./../src/assets/images/main/section2/card4.svg"
              alt="card4"
            />
            <h4>Five second tests</h4>
            <p>Personal choices and the overall personality of the person.</p>
          </div>
        </div>
        <button>SIGN UP NOW</button>
      </div>
    </div>
  );
}
export default Section2;
