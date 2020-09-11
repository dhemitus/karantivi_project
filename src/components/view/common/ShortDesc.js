import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core"
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) =>
  createStyles({
    textDesc: {
      textDecoration: "none",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
    },
    titleDesc: {
      textDecoration: "none",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
    },
    descSpace: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6)
    }
  })
)

const ShortDesc = (props) => {
  const { className } = props
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.detailPodcast)

  return (
    <>
    {data !== {} && data !== undefined &&
      <div className={`${classes.descSpace} ${className}`}>
        <Typography variant="subtitle1" className={`${classes.textDesc} ${className}`}>
          {data.title}
        </Typography>
        <Typography variant="body1" className={`${classes.textDesc} ${className}`}>
          {data.description}
        </Typography>
      </div>
    }
    </>
  )
}

export default ShortDesc