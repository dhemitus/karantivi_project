import MuiToolbar from '@material-ui/core/Toolbar'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 64,
      [theme.breakpoints.up('sm')]: {
        height: 70,
      },
    },
  })
)

const ToolBar = (props) => {
  const { children, className } = props
  const classes = useStyles(props)

  return (
    <MuiToolbar className={`${classes.root} ${className}`}>
      {children}
    </MuiToolbar>
  )
}
export default ToolBar