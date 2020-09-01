import Container from '@material-ui/core/Container'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        height: '100vh',
        minHeight: 500,
        maxHeight: 1300,
      },
    },
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(14),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(0, 0, 0, .5) 40%, rgba(0, 0, 0, 0) 90%)',
      zIndex: -1,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2,
    },
    arrowDown: {
      position: 'absolute',
      bottom: theme.spacing(4),
    },
  })
)

const CoverContainer = (props) => {
  const { children, className, backgroundClassName } = props
  const classes = useStyles(props)
  console.log(backgroundClassName)
  return (
    <section className={`${classes.root} ${className}`}>
      <Container className={`${classes.container} ${className}`}>
        { children }
        <div className={`${classes.backdrop} ${className}`} />
        <div className={`${classes.background} ${backgroundClassName}`} />
      </Container>
    </section>
  )
}
export default CoverContainer