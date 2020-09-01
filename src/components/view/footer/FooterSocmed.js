import { Dispatch, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
      fontSize: '21px',
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },
  })
)

const FooterSocmed = (props) => {
  const { className } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.socMenu)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadSocMenu())
  }, [])

  return (
    <>
      {data !== [] && data.map((item, i)=>{
        return (
          <Link href={item.url} key={i}>
            <a className={`${classes.menuLink} ${className}`}>
              {item.icon !== undefined ?
              <FontAwesomeIcon icon={item.icon} />
              :
              item.name
              }
            </a>
          </Link>
        )
      })}
    </>
  )
}
export default FooterSocmed