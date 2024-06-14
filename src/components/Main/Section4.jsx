import "./section4.scss";
function Section4() {
  return (
    <div className="section4">
      <div className="container">
        <h2>Price Table</h2>
        <p>We offer competitive price</p>
        <div className="cards">
          <div className="card">
            <h3>Free</h3>
            <p>Brief price description</p>
            <div className="price">
              <h4>0</h4>
              <div className="usd">
                <h5>$</h5>
                <pre>Per / month</pre>
              </div>
            </div>
            <div className="text_p">
              <p>Only 2 Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>
            <button>Order Now</button>
          </div>
          <div className="card">
            <h3>Standard</h3>
            <p>Brief price description</p>
            <div className="price">
              <h4>5</h4>
              <div className="usd">
                <h5>$</h5>
                <pre>Per / month</pre>
              </div>
            </div>
            <div className="text_p">
              <p>5+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>
            <button>Order Now</button>
          </div>
          <div className="card">
            <h3>Premium</h3>
            <p>Brief price description</p>
            <div className="price">
              <h4>10</h4>
              <div className="usd">
                <h5>$</h5>
                <pre>Per / month</pre>
              </div>
            </div>
            <div className="text_p">
              <p>10+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section4;
