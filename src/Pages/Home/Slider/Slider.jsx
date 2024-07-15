import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className="mx-auto"
          src="https://i.ibb.co/WpNxtXT/advanced-crop-1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src="https://i.ibb.co/3FZR6HP/crops.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto"
          src="https://i.ibb.co/syf8n05/gwava-ezgif-com-webp-to-jpg-converter.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto"
          src="https://i.ibb.co/HCHhDs5/chapainawabganj-photo-02-04-05-20-1-1588766829408.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src="https://i.ibb.co/GkGCzpC/CUCUMBER.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
