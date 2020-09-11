import { createStyles, makeStyles } from "@material-ui/core/styles"
import Layout from '../src/components/Layout'
import HeaderCover from '../src/components/view/header/HeaderCover'
import ScheduleSlider from '../src/components/view/home/ScheduleSlider'
import PodcastSlider from '../src/components/view/home/PodcastSlider'
import GalleryTile from '../src/components/view/home/GalleryTile'
import ProfileTile from '../src/components/view/home/ProfileTile'
import Header from '../src/components/view/header/MainHeader'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
)

const IndexPage = (props) => {
  const classes = useStyles(props)
  console.log(process.env)

  return(
    <Layout className={classes.root} title="KaranTiVi Panggung Virtual &bull; KaranTiVi">
      <Header />
      <div id="gigs">
        <HeaderCover />
      </div>
      <div id="schedule">
        <ScheduleSlider />
      </div>
      <div id="gallery">
        <GalleryTile />
      </div>
      <div id="podcast">
        <PodcastSlider />
      </div>
      <div id="profile">
        <ProfileTile />
      </div>
    </Layout>
  )
}

export default IndexPage