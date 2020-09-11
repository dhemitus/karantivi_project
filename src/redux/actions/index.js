import * as MenuAction from './menu/action'
import * as DescAction from './desc/action'
import * as SponsorAction from './sponsor/action'
import * as ScheduleAction from './schedule/action'
import * as PodcastAction from './podcast/action'
import * as GalleryAction from './gallery/action'
import * as ProfileAction from './profile/action'
import * as LiveAction from './live/action'
import * as AuthAction from './auth/action'

export const ActionCreators = Object.assign({},
  MenuAction,
  DescAction,
  SponsorAction,
  ScheduleAction,
  PodcastAction,
  GalleryAction,
  ProfileAction,
  LiveAction,
  AuthAction
)