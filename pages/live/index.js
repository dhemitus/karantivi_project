import { useEffect, } from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Player, BigPlayButton } from 'video-react';
import Iframe from 'react-iframe'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../src/components/Layout'
import HLSSource from '../../src/components/ui/HLSSource'
import Header from '../../src/components/view/header/SubHeader'
import { ActionCreators as action } from '../../src/redux/actions'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    iframe: {
      marginTop: theme.spacing(1),
      border:'none'
    }
  })
)

const LivePage = (props) => {
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.insideLive)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadLiveData())
  }, [])

  return(
    <Layout className={classes.root} title="KaranTiVi Panggung Virtual &bull; KaranTiVi">
      <Header />
      <div>
        {/*<Player>
          <HLSSource
            isVideoChild
            src="https://test-streams.mux.dev/test_001/stream.m3u8"
          />
          <BigPlayButton position="center" />
        </Player>*/}
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
    </Layout>
  )
}

export default LivePage