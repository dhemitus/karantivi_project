import ButtonBase from '@material-ui/core/ButtonBase'
import { Typography } from "@material-ui/core"
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    imageWrapper: {
      position: 'relative',
      display: 'block',
      padding: 0,
      borderRadius: 0,
      height: '30vh',
      [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
      },
      '&:hover': {
        zIndex: 1,
      },
      '&:hover $imageBackdrop': {
        opacity: 0.15,
      },
      '&:hover $imageMarked': {
        opacity: 0,
      },
      '&:hover $imageTitle': {
        border: '1px solid currentColor',
        backgroundColor: 'rgb(0,0,0,.5)'
      },
    },
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px 14px`,
    },
    imageMarked: {
      height: 1,
      width: 28,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  })
)

const ImageTile = (props) => {
  const { image } = props
  const classes = useStyles(props)

  return (
    <ButtonBase
      className={classes.imageWrapper}
      style={{
        width: image.width,
      }}
    >
      <div
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${image.urlImage})`,
        }}
      />
      <div className={classes.imageBackdrop} />
      <div className={classes.imageButton}>
        <Typography
          component="h3"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {image.title}
          <div className={classes.imageMarked} />
        </Typography>
      </div>
    </ButtonBase>
  )
}

export default ImageTile