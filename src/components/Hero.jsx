import Reordering from "./ReorderingAnimation";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <h1 className="">
          Scents
          <span className="span-white"> That Speak Without Words.</span>
        </h1>

        <p>
          Signature scents for those who command presence.
          <br />
          <span className="span-color">SERENA BRAIDE</span> - Luxury in every
          note.
        </p>
        <h3>LAUNCHING SOON!!!</h3>
      </div>
      <div>
        <Reordering />
      </div>
    </section>
  );
};

export default Hero;
