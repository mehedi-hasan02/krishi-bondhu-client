const Carousel = () => {
  return (
    <div className="mx-auto ">
      <div className=" w-11/12 mx-auto border">
        <div className="carousel">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/WpNxtXT/advanced-crop-1.jpg"
              className="h-svh w-full p-10"
            />
            <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center left-0 h-full z-10">
              <a
                href="#slide4"
                className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❯
              </a>
            </div>
          </div>
          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/3FZR6HP/crops.jpg"
              className="h-svh w-full p-10"
            />
            <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center  left-0 h-full z-10">
              <a
                href="#slide1"
                className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❯
              </a>
            </div>
          </div>
          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/syf8n05/gwava-ezgif-com-webp-to-jpg-converter.jpg"
              className="h-svh w-full p-10"
            />
            <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center  left-0 h-full z-10">
              <a
                href="#slide2"
                className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❯
              </a>
            </div>
          </div>
          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/HCHhDs5/chapainawabganj-photo-02-04-05-20-1-1588766829408.jpg"
              className="h-svh w-full p-10"
            />
            <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center  left-0 h-full z-10">
              <a
                href="#slide3"
                className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❮
              </a>
              <a
                href="#slide5"
                className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❯
              </a>
            </div>
          </div>
          {/* Slide 5 */}
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/GkGCzpC/CUCUMBER.jpg"
              className="h-svh w-full p-10"
            />
            <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center  left-0 h-full z-10">
              <a
                href="#slide4"
                className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515] to-transparent text-white z-20"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
