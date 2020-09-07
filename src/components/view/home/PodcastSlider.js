import Slider from "react-slick"
import { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { ActionCreators as action } from '../../../redux/actions'
import PlayContainer from '../../ui/PlayContainer'
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    slideSpace: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
    title: {
      color: theme.palette.common.white
    }
  })
)

const PodcastSlider = (props) => {
  const { className } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.frontPodcast)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadFrontPodcast())
  }, [])

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        Talk Show
      </Typography>
      <div className={`${classes.slideSpace} ${className} App`}>
        <Slider 
          {...settings}
        >
          {data !== [] && data !== undefined && 
            data.map( (item, i) =>{
              return (
                <PlayContainer item={item} key={i} />
              )
            })
          }
        </Slider>
      </div>
    </Container>
  )
}

export default PodcastSlider