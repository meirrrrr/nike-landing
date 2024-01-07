import amazonIcon from "../images/amazon.png";
import flipKartIcon from "../images/flipkart.svg";
import shoe_image from "../images/shoe_image.svg";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Your feet deserve the best</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src={amazonIcon} alt="amazon_icon" />
            <img src={flipKartIcon} alt="flipKat_icon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe_image} alt="shoe_image" />
      </div>
    </main>
  );
};

export default HeroSection;
