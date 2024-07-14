const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://i.ibb.co/WpNxtXT/advanced-crop-1.jpg"
          className="h-svh w-full "
        />

        {/*  className="absolute h-full left-0 top-0 pl-12 pt-16  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... 
         " */}
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ...  left-0 top-0 h-full">
          <a
            href="#slide4"
            className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/3FZR6HP/crops.jpg"
          className="h-svh w-full"
        />
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ...  left-0 top-0 h-full">
          <a
            href="#slide1"
            className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/syf8n05/gwava-ezgif-com-webp-to-jpg-converter.jpg"
          className="h-svh w-full"
        />
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ...  left-0 top-0 h-full">
          <a
            href="#slide2"
            className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/HCHhDs5/chapainawabganj-photo-02-04-05-20-1-1588766829408.jpg"
          className="h-svh w-full"
        />
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ...  left-0 top-0 h-full">
          <a
            href="#slide3"
            className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/GkGCzpC/CUCUMBER.jpg"
          className="h-svh w-full"
        />
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ...  left-0 top-0 h-full">
          <a
            href="#slide4"
            className="btn btn-sm btn-circle ml-4 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-sm btn-circle bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
