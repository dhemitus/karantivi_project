import { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Iframe from 'react-iframe'

import { ActionCreators as action } from '../../../redux/actions'


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    iframe: {
      marginTop: theme.spacing(1),
      border:'none'
    }
  })
)

const LivePlayer = (props) => {
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.insideLive)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () =>{
      await dispatch(action.loadLiveData())
    })()
  }, [])

  return (
    <div>
    {data !== {} &&
      <Iframe url={data.urlVideo}
        allowfullscreen
        frameborder='0'
        styles={{borderWidth: '0', height: "720px"}}
        className={`sproutvideo-player ${classes.iframe}`}
        width="100%"
        height="720px"
        id="myId"
        display="initial"
        position="relative"
      />
    }
    </div>
  )
}

export default LivePlayer