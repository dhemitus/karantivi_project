//import Link from 'next/link'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Hidden from "@material-ui/core/Hidden";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, animateScroll as scroll } from "react-scroll"

import { ActionCreators as action } from '../../../redux/actions'
import Toolbar from '../../ui/ToolBar'
import AppBar from '../../ui/AppBar'

const useStyles = makeStyles((theme) =>
  createStyles({
    top: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    title: {
      fontSize: 24,
    },
    placeholder: {
      height: 64,
      [theme.breakpoints.up('sm')]: {
        height: 70,
      },
    },
    toolbar: {
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    left: {
      width: '100%',
      flex: 1,
      display: 'flex, none',
      justifyContent: 'flex-end',
    },
    leftLinkActive: {
      color: theme.palette.common.white,
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    rightLink: {
      textDecoration: "none",
      color: theme.palette.common.white,
      marginLeft: theme.spacing(2),
      display: "inline-flex",
      "&:hover,&:focus": {
        color: theme.palette.primary.light,
      },
    },
    linkSecondary: {
      color: theme.palette.secondary.main,
    },
  })
)

const MainHeader = (props) => {
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.mainMenu)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadMainMenu())
  }, [])

  return (
      <AppBar position="fixed" className={classes.top}>
        <Toolbar className={classes.toolbar}>
          {/*<div className={classes.left} />*/}
          <Hidden smDown implementation="css">
              {data !== [] && data.map((item, i) =>{
                return(
                  <Link
                  activeClass="active"
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
//                  href={item.url}
                  key={i}
                >
                  <div className={classes.rightLink}>
                    {item.name}
                  </div>
                </Link>
                )
              })}
          </Hidden>
          <Hidden smUp implementation="css">
            <div className={classes.right}>
              {data !== [] && data.map((item, i) =>{
                return(
                  <Link
                    activeClass="active"
                    to={item.url}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
//                    href={item.url}
                  >
                    <div className={classes.rightLink}>
                      {item.icon !== undefined ?

                      <FontAwesomeIcon icon={item.icon} />
                      :
                      item.name?.toUpperCase
                      }
                    </div>
                  </Link>
                )
              })}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
}
export default MainHeader