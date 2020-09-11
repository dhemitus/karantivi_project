import { useEffect, } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core"
import { useSelector, useDispatch } from 'react-redux'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CoverContainer from '../../ui/CoverContainer'
import Button from '../../ui/Button'
import { ActionCreators as action } from '../../../redux/actions'


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
      marginLeft: theme.spacing(2),
    },
    iconPlay: {
      marginRight: theme.spacing(1),
      fontSize: 20,
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

const PaymentCover = (props) => {
  const { className, onClick } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.insideLive)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadLiveData())
  }, [])

  return (
    <>
    {data !== {} &&
      <CoverContainer backgroundImage={"/img/karantivi-the-stage-front-page-1.jpg"}>
        <img style={{ display: 'none' }} src={data.urlImage} alt="increase priority" />
        <Typography color="inherit" align="left" variant='h2' className={`${classes.title} ${className}`}>
        &nbsp;
        </Typography>
        <div>
          <Button
            color="secondary"
            variant="contained"
            onClick={onClick}
            className={`${classes.play} ${className}`} 
          >
            <FontAwesomeIcon icon={faCreditCard} className={`${classes.iconPlay} ${className}`} />
            Payment
          </Button>
        </div>
      </CoverContainer>
    }
    </>
  )
}
export default PaymentCover