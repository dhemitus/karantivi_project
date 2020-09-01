import { createStyles, makeStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
    },
  })
)

const AppBar = (props) => {
  const { children, className } = props
  const classes = useStyles(props)

  return (
    <MuiAppBar elevation={0} position="fixed" className={`${classes.root} ${className}`}>
      {children}
    </MuiAppBar>
  )
}
export default AppBar