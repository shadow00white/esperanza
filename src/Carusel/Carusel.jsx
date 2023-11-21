// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Carusel() {
  return (
    <Swiper
      className="py-4 px-4 bg-transparent"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src="../../src/assets/img/20231023_165017.jpg"
          alt=""
          width="800px"
          height="600px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../../src/assets/img/20231023_165057 (1).jpg"
          alt=""
          width="800px"
          height="600px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../../src/assets/img/20231023_165101.jpg"
          height="600px"
          alt=""
          width="800px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../../src/assets/img/20231023_165109.jpg"
          height="600px"
          alt=""
          width="800px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../../src/assets/img/20231023_165154.jpg"
          height="600px"
          alt=""
          width="800px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../../src/assets/img/20231023_165340.jpg"
          height="600px"
          alt=""
          width="800px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../../src/assets/img/20231023_165343.jpg"
          alt=""
          width="800px"
          height="600px"
        />
      </SwiperSlide>
    </Swiper>
  );
}
