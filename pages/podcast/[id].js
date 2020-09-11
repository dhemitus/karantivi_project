import { useEffect, } from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Player, BigPlayButton } from 'video-react';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '../../src/components/Layout'
import PodcastSlider from '../../src/components/view/home/PodcastSlider'
import Header from '../../src/components/view/header/SubHeader'
import ShortDesc from '../../src/components/view/common/ShortDesc'
import { ActionCreators as action } from '../../src/redux/actions'
import Iframe from 'react-iframe'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    video:{
      marginTop: theme.spacing(1)
    },
    iframe: {
      marginTop: theme.spacing(1),
      border:'none'
    }
  })
)

const DetailPoscastPage = (props) => {
  const router = useRouter()
  const classes = useStyles(props)
  const { data } = useSelector((state) => state.detailPodcast)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.loadDetailPodcast(router.query))
  }, [])

  return(
    <Layout className={classes.root} title="KaranTiVi Panggung Virtual &bull; KaranTiVi">
      <Header />
      <div style={{position:'relative', height:'0', paddingBottom:'56.25%'}}>
        {data !== {} && data !== undefined &&
        <Iframe url={data.urlVideo}
          allowfullscreen
          frameborder='0'
          styles={{
            position:'absolute',
            width:'100%',
            borderWidth: '0', height: "100%"
          }}
          className={`${classes.iframe} sproutvideo-player`}
          width="100%"
          height="720px"
          id="myId"
          display="initial"
          position="relative"
        />}
      </div>
      <ShortDesc />
      {/*<div id="podcast">
        <PodcastSlider />
      </div>*/}
    </Layout>
  )
}

export default DetailPoscastPage