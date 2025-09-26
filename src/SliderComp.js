import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Photo1 from "./girl using phone.jpg";
import Photo2 from "./girlchatting.jpg";
import rafiki from "./rafiki.png";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderComp = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Photo1}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Photo2}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={rafiki} style={{ justifyContent: "center" }}></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComp;
