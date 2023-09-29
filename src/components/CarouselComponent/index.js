import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'
import './index.css'
import './carousel.css'

const PreviousBtn = props => {
  console.log(props)
  const {className, onClick} = props
  return (
    <div className={className}>
      <ArrowBackIos style={{color: 'grey'}} onClick={onClick} />
    </div>
  )
}

const NextBtn = props => {
  console.log(props)
  const {className, onClick} = props
  return (
    <div className={className}>
      <ArrowForwardIos style={{color: 'grey'}} onClick={onClick} />
    </div>
  )
}

const CarouselComponent = () => (
  <div className="carousel-container">
    <h1 className="heading">Explore New Collections</h1>
    <Slider
      autoplay
      dots
      autoplaySpeed={2000}
      infinite
      prevArrow={<PreviousBtn />}
      nextArrow={<NextBtn />}
    >
      <div className="carousel-container">
        <img
          src="https://i.pinimg.com/originals/44/d6/97/44d697c074a58b742e5a594049817ddf.jpg"
          alt=""
          className="carousel-img"
        />
      </div>
      <div className="carousel-container">
        <img
          src="https://www.dbmanagers.com/wp-content/uploads/2020/08/ecommerce-graphic-design-1-768x512.jpg"
          alt=""
          className="carousel-img"
        />
      </div>
      <div className="carousel-container">
        <img
          src="https://i.pinimg.com/originals/30/c5/65/30c56540c1b64e137b085478df89dab4.jpg"
          alt=""
          className="carousel-img"
        />
      </div>
      <div className="carousel-container">
        <img
          src="https://cdn.dribbble.com/users/1595790/screenshots/6714075/banners-e-commerce.jpg"
          alt=""
          className="carousel-img"
        />
      </div>
      <div className="carousel-container">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/695f3955463165.598511886d48b.jpg"
          alt=""
          className="carousel-img"
        />
      </div>
    </Slider>
  </div>
)

export default CarouselComponent
