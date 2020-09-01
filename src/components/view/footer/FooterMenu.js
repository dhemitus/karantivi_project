import Link from 'next/link'
import { Dispatch, useEffect, } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from "@material-ui/core"

import { ActionCreators as action } from '../../../redux/actions'

const useStyles = makeStyles((theme) =>
  createStyles({
    menuSpace: {
      width: '100%',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    menuLine: {
      width: '100%',
      borderBottom: '1px solid #28282a',
      marginBottom: theme.spacing(1)
    },
    menuLink: {
      textDecoration: "none",
      color: theme.palette.common.white,
      display: "inline-flex",
      "&:hover,&:focus": {
        color: theme.palette.primary.light,
      },
      marginBottom: theme.spacing(1)
    },
  })
)

const FooterMenu = (props) => {
  const { className } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.footerMenu)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadFooterMenu())
  }, [])

  return (
    <div className={`${classes.menuSpace} ${className}`}>
      {data !== [] &&
        data.map((item, i) => {
          return (
            <div key={i}>
              <Typography variant="subtitle1" className={`${classes.menuLine} ${className}`}>
                <Link href={item.url}>
                    <a className={`${classes.menuLink} ${className}`}>
                      {item.name} 
                    </a>
                </Link>
                </Typography>
            </div>
          )
        })
      }
    </div>
  )
}

export default FooterMenu