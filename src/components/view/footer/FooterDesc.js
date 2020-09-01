import { useEffect } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from "@material-ui/core"

import { ActionCreators as action } from '../../../redux/actions'

const useStyles = makeStyles((theme) =>
  createStyles({
    textDesc: {
      textDecoration: "none",
      color: theme.palette.common.white,
    },
    titleDesc: {
      textDecoration: "none",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
    },
    descSpace: {
      marginBottom: theme.spacing(2),
    }
  })
)

const FooterDesc = (props) => {
  const { className } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.footerDesc)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadFooterDesc())
  }, [])

  return (
    <>
    {
      data !== null &&
      <div className={`${classes.descSpace} ${className}`}>
        <Typography variant="subtitle1" className={`${classes.textDesc} ${className}`}>
          {data.subtitle}
        </Typography>
        <Typography variant="h2" className={`${classes.titleDesc} ${className}`}>
          {data.title}
        </Typography>
        <Typography variant="body1" className={`${classes.textDesc} ${className}`}>
          {data.desc}
        </Typography>
      </div>
    }
    </>
  )
}

export default FooterDesc