import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core"
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'
import Link from "next/link"

import CoverContainer from '../../ui/CoverContainer'

const backgroundImage = 'https://karantivi.straight-line.org/wp-content/uploads/sites/18/2020/08/karantivi-panggung-virtual-front-page-1.jpg'
const logo = 'img/karantivi-icon.png'

const useStyles = makeStyles((theme) =>
  createStyles({
    background: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
    },
    button: {
      minWidth: 200,
    },
    logo: {
      width: 120,
      height: 'inherit'
    },
    title: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(6),
    },
    play: {
      align: 'left',
      color: theme.palette.secondary.main,
      "&:hover": {
        color: theme.palette.primary.light,
      },
      marginLeft: theme.spacing(2),
      padding: 0
    },
    iconPlay: {
      fontSize: 100,
    },
    h5: {
      marginLeft: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(2),
      },
    },
    more: {
      marginTop: theme.spacing(2),
    }
  })
)

const HeaderCover = (props) => {
  const { className } = props
  const classes = useStyles(props)

  return (
    <CoverContainer backgroundClassName={`${classes.background} ${className}`}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <img src={logo} className={classes.logo} />
      <Typography color="inherit" align="left" variant='h2' className={`${classes.title} ${className}`}>
        Live Show
      </Typography>
      <Typography color="inherit" align="left" variant='body2' className={`${classes.h5} ${className}`}>
        Siaran live ketiga KaranTiVi: Jula-Juli Resistensi Vol. 2. Segera dapatkan tiket anda.
      </Typography>
      <div>
        <Link href="/live">
          <IconButton className={`${classes.play} ${className}`} >
            <PlayCircleOutlineOutlinedIcon className={`${classes.iconPlay} ${className}`} />
          </IconButton>
        </Link>
      </div>
    </CoverContainer>
  )
}
export default HeaderCover