//import Link from 'next/link'
import Router from 'next/router'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, animateScroll as scroll } from "react-scroll"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
      justifyContent: 'flex-start',
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
      fontSize: 30,
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
          <div className={classes.left}>
            <a className={classes.rightLink} onClick={() => Router.back()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </div>
        </Toolbar>
      </AppBar>
  );
}
export default MainHeader