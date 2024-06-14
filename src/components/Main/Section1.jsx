import "./section1.scss";
function Section1() {
  return (
    <div className="section1">
      <div className="container">
        <div className="text-content">
          <h2>Work at the speed of thought</h2>
          <p>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <div className="buttons">
            <button>Get started</button>
            <a href="#">
              <img
                src="../../src/assets/images/main/section1/play.svg"
                alt="play..."
              />
              <div className="p1">Watch the Video</div>
            </a>
          </div>
        </div>
        <img
          src="../../src/assets/images/main/section1/img1.png"
          alt="img..."
        />
      </div>
    </div>
  );
}
export default Section1;
