import { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'

// Initialize Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Pagination])

const FullScreenModal = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
`

const FullScreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

export default function ImageSlider({ screenshotImages }) {
  const [fullScreenImage, setFullScreenImage] = useState(null)

  const openFullScreen = (image) => {
    setFullScreenImage(image)
  }

  const closeFullScreen = () => {
    setFullScreenImage(null)
  }

  return (
    <div className="SlideContainer">
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={screenshotImages.length < 2 ? 1 : 2}
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
        className="swiper_container">
        {screenshotImages.map((screenshotImage, index) => (
          <SwiperSlide key={index}>
            <img src={screenshotImage} onClick={() => openFullScreen(screenshotImage)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <FullScreenModal open={fullScreenImage !== null}>
        <CloseButton onClick={closeFullScreen}>×</CloseButton>
        <FullScreenImage src={fullScreenImage} />
      </FullScreenModal>
    </div>
  )
}
