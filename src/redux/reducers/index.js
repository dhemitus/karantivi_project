import { combineReducers } from 'redux'
//import { reducer as firebase } from 'react-redux-firebase'
import mainmenuReducer from './menu/mainmenureducer'
import socmenuReducer from './menu/socmenureducer'
import footermenuReducer from './menu/footermenureducer'
import footerdescReducer from './desc/footerdescreducer'
import footersponsorReducer from './sponsor/footersponsorreducer'
import frontscheduleReducer from './schedule/frontschedulereducer'
import frontpodcastReducer from './podcast/frontpodcastreducer'
import detailpodcastReducer from './podcast/detailpodcastreducer'
import frontgalleryReducer from './gallery/frontgalleryreducer'
import frontprofileReducer from './profile/frontprofilereducer'
import insideliveReducer from './live/insidelivereducer'
import authuserReducer from './auth/authuserreducer'

const rootReducer = combineReducers({
//  firebase,
  socMenu: socmenuReducer,
  mainMenu: mainmenuReducer,
  footerMenu: footermenuReducer,
  footerDesc: footerdescReducer,
  footerSponsor: footersponsorReducer,
  frontSchedule: frontscheduleReducer,
  frontPodcast: frontpodcastReducer,
  frontGallery: frontgalleryReducer,
  frontProfile: frontprofileReducer,
  detailPodcast: detailpodcastReducer,
  insideLive: insideliveReducer,
  authUser: authuserReducer
})

export default rootReducer