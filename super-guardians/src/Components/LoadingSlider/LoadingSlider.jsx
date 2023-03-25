import "./LoadingSlider.css";

function LoadingSlider() {
  return (
    <section className="loading-slider">
      <img
        className="loading-slider__left-graphics"
        src="src/assets/intro-graphic-left.svg"
      />
      <img
        className="loading-slider__logo"
        src="src/assets/airbean-landing.svg"
      />
      <img className="loading-slider__loader" src="src/assets/loader.png" />

      <img
        className="loading-slider__right-graphics"
        src="src/assets/intro-graphic-right.svg"
      />
    </section>
  );
}

export default LoadingSlider;
