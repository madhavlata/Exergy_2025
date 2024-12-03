import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Innovate. Inspire. Engineer.
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Exergy 2025
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Exergy, the annual chemical engineering fest of IIT Kanpur,
              embodies the pursuit of purity and perfection before the fall,
              blending creativity with cutting-edge science. Exergy inspires a
              transcendental journey through the realms of engineering
              excellence and exploration.
            </p>
            <Link to="/register">
              <Button icon="/images/zap.svg">Register Here</Button>
            </Link>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/LOGO.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
