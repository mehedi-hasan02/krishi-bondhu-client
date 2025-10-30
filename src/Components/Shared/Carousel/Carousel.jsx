import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from 'prop-types';
import "swiper/swiper-bundle.css";

const Carousel = ({ 
  slides = [], 
  autoPlay = true, 
  delay = 5000,
  showNavigation = true,
  showPagination = true,
  loop = true,
  className = ""
}) => {
  if (!slides || slides.length === 0) {
    return <div className="text-center py-10">No slides available</div>;
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-xl ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={autoPlay ? { delay, pauseOnMouseEnter: true } : false}
        loop={loop}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            {slide.type === 'image' ? (
              <div className="relative w-full h-[500px]">
                <img
                  className="w-full h-full object-cover"
                  src={slide.src}
                  alt={slide.alt || `Slide ${index + 1}`}
                />
                {slide.overlay && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                )}
                {slide.content && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      {slide.content.title && (
                        <h2 className="text-4xl font-bold mb-4">{slide.content.title}</h2>
                      )}
                      {slide.content.description && (
                        <p className="text-xl max-w-2xl">{slide.content.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center">
                {slide.content}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'content']),
      src: PropTypes.string,
      alt: PropTypes.string,
      overlay: PropTypes.bool,
      content: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string
        })
      ])
    })
  ),
  autoPlay: PropTypes.bool,
  delay: PropTypes.number,
  showNavigation: PropTypes.bool,
  showPagination: PropTypes.bool,
  loop: PropTypes.bool,
  className: PropTypes.string
};

export default Carousel;