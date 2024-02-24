import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

export default function ImageSlider({ screenshotImages }) {
  console.log(screenshotImages)
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        <SwiperSlide>
          <img src="//images.igdb.com/igdb/image/upload/t_1080p/scoqi0.jpg" />
          {/* {screenshotImages.map((screenshotImage) => (
            <img key={screenshotImage} src={screenshotImage} />
          ))} */}
        </SwiperSlide>

        <SwiperSlide>
          <img src="//images.igdb.com/igdb/image/upload/t_1080p/scoqii.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="//images.igdb.com/igdb/image/upload/t_1080p/scoqid.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="//images.igdb.com/igdb/image/upload/t_1080p/scoqib.jpg" />
        </SwiperSlide>
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
