import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

export default function ImageSlider({ screenshotImages }) {
  return (
    <div className="SlideContainer">
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        {screenshotImages.map((screenshotImage) => (
          <SwiperSlide key={screenshotImage}>
            <img src={screenshotImage} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
/*<div className="swiper">
<div className="swiper-wrapper">
  {screenshotImages.map((screenshotImage) => (
      <img src={screenshotImage} />

  ))}
</div>
<div className="swiper-pagination"></div>

<div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div>
</div>
*/
