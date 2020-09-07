import { createStyles, makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Typography } from "@material-ui/core"
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    images: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexWrap: 'wrap',
    },
    imageWrapper: {
      marginLeft: '2px',
      marginRight: '2px',
      position: 'relative',
      display: 'block',
      padding: 0,
      borderRadius: 0,
      height: '40vh',
      [theme.breakpoints.down('sm')]: {
        width: '100% !important',
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
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    iconPlay: {
      fontSize: 40,
    },
    imageMarked: {
      height: 1,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  })
)

const PlayContainer = (props) => {
  const { item } = props
  const classes = useStyles(props)
  const router = useRouter()

  return (
    <ButtonBase
      className={classes.imageWrapper}
      onClick={() => router.push(item.path, item.url)}
    >
      <div
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${item.urlImage})`,
        }}
      />
      <img src={item.urlImage} width='100%' height='100%' />
      <div className={classes.imageBackdrop} />
      <div className={classes.imageButton}>
        <Typography
          component="h3"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          <PlayCircleOutlineOutlinedIcon className={`${classes.iconPlay}`} />
          </Typography>
      </div>
    </ButtonBase>
  )
}

export default PlayContainer