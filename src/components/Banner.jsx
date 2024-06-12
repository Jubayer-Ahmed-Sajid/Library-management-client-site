import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import banner from "../assets/5920.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
const HeroSection = () => {
  return (
    <div className="relative aspect-[2/1]">
      <ParallaxBanner
        layers={[{ image: banner, speed: -15 }]}
        className="h-screen w-screen aspect-[2/1]"
      >
        {/* <img src={banner} className="w-full h-screen" alt="Banner" /> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 top-16 flex flex-col space-y-8 items-center justify-center text-center z-20 text-white">
          <h1 className="md:block hidden text-6xl font-bold mb-4">
            Discover Books
          </h1>
          <p className="text-xl font-bold mb-6">
            Embark on a literary adventure, borrow,{" "}
            <span className="text-accent">
              read online, <br /> and dive into the world of imagination!
            </span>
          </p>
          <Link
            to="/allbooks"
            className="text-xl hover:bg-[#63a3fd]/40 text-white font-bold btn btn-outline h-16 py-4"
          >
            Get Started
          </Link>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default HeroSection;
