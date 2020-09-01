import { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { ActionCreators as action } from '../../../redux/actions'
import ImageTile from '../../ui/ImageTile'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4),
    },
    images: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexWrap: 'wrap',
    },
    title: {
      color: theme.palette.common.white
    }
  })
)

const GalleryTile = (props) => {
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.frontGallery)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadFrontGallery())
  }, [])

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        Galeri
      </Typography>
      <div className={classes.images}>
        {data !== undefined && data !== [] && data.map((image) => (
          <ImageTile image={image} key={image.url} />
        ))}
      </div>
    </Container>
  )
}

export default GalleryTile