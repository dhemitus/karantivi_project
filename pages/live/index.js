import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Player, BigPlayButton } from 'video-react';

import Layout from '../../src/components/Layout'
import HLSSource from '../../src/components/ui/HLSSource'
import Header from '../../src/components/view/header/SubHeader'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
)

const LivePage = (props) => {
  const classes = useStyles(props)

  return(
    <Layout className={classes.root} title="KaranTiVi Panggung Virtual &bull; KaranTiVi">
      <Header />
      <div>
        <Player>
          <HLSSource
            isVideoChild
            src="https://test-streams.mux.dev/test_001/stream.m3u8"
          />
          <BigPlayButton position="center" />
        </Player>
      </div>
    </Layout>
  )
}

export default LivePage