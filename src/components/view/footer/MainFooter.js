import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"

import FooterSlider from './FooterSlider'
import FooterMenu from './FooterMenu'
import FooterDesc from './FooterDesc'
import FooterSocmed from './FooterSocmed'
import { ActionCreators as action } from '../../../redux/actions'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100%',
      display: "flex",
      flexDirection: 'column',
      minHeight: '70vh',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      backgroundColor: theme.palette.common.black,
    },
    footLine: {
      width: '100%',
      borderTop: '1px solid #28282a',
      marginTop: theme.spacing(1)
    },
    footDesc: {
      textDecoration: "none",
      color: theme.palette.primary.light,
      marginBottom: theme.spacing(2),
    },
  })
)

const MainFooter = (props) => {
  const { className } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.socMenu)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadSocMenu())
  }, [])

  return (
    <footer className={`${classes.root} ${className}`}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <FooterDesc />
          <FooterSocmed />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <FooterMenu />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <FooterSlider />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={`${classes.footLine} ${className}`}>
          <Typography variant="body2" className={`${classes.footDesc} ${className}`}>
            Hak Cipta © 2020 KaranTiVi.com v.0.02 (pre-Alpha)
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}
export default MainFooter