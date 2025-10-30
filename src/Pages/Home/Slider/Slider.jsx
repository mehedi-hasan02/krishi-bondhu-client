import Carousel from "../../../Components/Shared/Carousel";
import PropTypes from 'prop-types';

// Default images for the carousel
const defaultImages = [
  {
    type: 'image',
    src: "https://i.ibb.co/WpNxtXT/advanced-crop-1.jpg",
    alt: "Advanced Crop",
    overlay: true
  },
  {
    type: 'image',
    src: "https://i.ibb.co/3FZR6HP/crops.jpg",
    alt: "Various Crops",
    overlay: true
  },
  {
    type: 'image',
    src: "https://i.ibb.co/syf8n05/gwava-ezgif-com-webp-to-jpg-converter.jpg",
    alt: "Gwava Fruits",
    overlay: true
  },
  {
    type: 'image',
    src: "https://i.ibb.co/HCHhDs5/chapainawabganj-photo-02-04-05-20-1-1588766829408.jpg",
    alt: "Chapainawabganj Agriculture",
    overlay: true
  },
  {
    type: 'image',
    src: "https://i.ibb.co/GkGCzpC/CUCUMBER.jpg",
    alt: "Fresh Cucumbers",
    overlay: true
  }
];

const Slider = ({ images, autoPlay, delay }) => {
  // Set default values if props are not provided
  const carouselImages = images || defaultImages;
  const shouldAutoPlay = autoPlay !== undefined ? autoPlay : true;
  const autoplayDelay = delay || 5000;

  return (
    <Carousel 
      slides={carouselImages}
      autoPlay={shouldAutoPlay}
      delay={autoplayDelay}
      className="max-w-6xl mx-auto"
    />
  );
};

Slider.propTypes = {
  images: PropTypes.array,
  autoPlay: PropTypes.bool,
  delay: PropTypes.number
};

export default Slider;