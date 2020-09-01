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

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    video:{
      marginTop: theme.spacing(1)
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
      {data !== {} && 
        <Player
          cover="https://karantivi.straight-line.org/wp-content/uploads/sites/18/2020/08/karantivi-kolektif-sinema-cover-2000p-scaled-2.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      }
      <ShortDesc />
      {/*<div id="podcast">
        <PodcastSlider />
      </div>*/}
    </Layout>
  )
}

export default DetailPoscastPage