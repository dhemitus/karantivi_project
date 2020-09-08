import { useEffect, } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core"
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'

import CoverContainer from '../../ui/CoverContainer'
import { ActionCreators as action } from '../../../redux/actions'

const logo = 'img/karantivi-icon.png'

const useStyles = makeStyles((theme) =>
  createStyles({
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
  const { data } = useSelector((state) => state.insideLive)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadLiveData())
  }, [])

  return (
    <>
    {data !== {} &&
      <CoverContainer backgroundImage={data.urlImage}>
        <img style={{ display: 'none' }} src={data.urlImage} alt="increase priority" />
        <img src={logo} className={classes.logo} />
        <Typography color="inherit" align="left" variant='h2' className={`${classes.title} ${className}`}>
          Live Show
        </Typography>
        <Typography color="inherit" align="left" variant='body2' className={`${classes.h5} ${className}`}>
          {data.description}
        </Typography>
        <div>
          <Link href="/live">
            <IconButton className={`${classes.play} ${className}`} >
              <PlayCircleOutlineOutlinedIcon className={`${classes.iconPlay} ${className}`} />
            </IconButton>
          </Link>
        </div>
      </CoverContainer>
    }
    </>
  )
}
export default HeaderCover