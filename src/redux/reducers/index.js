import { combineReducers } from 'redux'

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

const rootReducer = combineReducers({
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
  insideLive: insideliveReducer
})

export default rootReducer