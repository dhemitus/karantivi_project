import Slider from "react-slick"
import { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { ActionCreators as action } from '../../../redux/actions'

const useStyles = makeStyles((theme) =>
  createStyles({
    slideSpace: {
      marginTop: theme.spacing(4),
    },
  })
)

const renderSlides = (data) =>
  data.map((num, i) => (
    <div key={i}>
      <img src={num.urlImage} width='100%' height='inherit' />
    </div>
  )
)

const FooterSlider = (props) => {
  const { className } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.footerSponsor)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadFooterSponsor())
  }, [])

  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className={`${classes.slideSpace} ${className} App`}>
      <Slider 
        {...settings}
      >
        {data !== [] && renderSlides(data) }
      </Slider>
    </div>
  )
}

export default FooterSlider