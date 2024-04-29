import { Navigation } from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export interface CarouselRootProps extends SwiperProps {}

export const CarouselRoot = ({
  children,
  loop,
  ...swiper
}: CarouselRootProps) => {
  const swiperDefault: SwiperProps = {
    modules: swiper.modules ?? [Navigation],
    slidesPerView: swiper.slidesPerView ?? 1,
    spaceBetween: swiper.spaceBetween ?? 16,
    navigation: true,
    loop: loop ?? false,
    slidesPerGroup: swiper.slidesPerGroup ?? 1, // Define que apenas um slide será movido por vez
  };

  return (
    <Swiper className="carousel-v2" {...swiperDefault}>
      {children}
    </Swiper>
  );
};
