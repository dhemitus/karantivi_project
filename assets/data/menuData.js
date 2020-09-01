import { faPodcast, faEnvelope, faHome, faMusic, faCalendar, faImages, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faYoutube, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export const soclink = [
  {icon: faSpotify, url: 'https://open.spotify.com/show/0H4tC1tVnxCojFmNUuDW9A'},
  {icon: faPodcast, url: 'https://podcasts.apple.com/id/podcast/karantivi/id1513536225'},
  {icon: faYoutube, url: 'https://www.youtube.com/channel/UC3NyE1jAsBaRuvvCG1UfEgQ?sub_confirmation=1'},
  {icon: faTwitter, url: 'https://twitter.com/karantivi'},
  {icon: faInstagram, url: 'http://instagram.com/karantividotcom'},
  {icon: faWhatsapp, url: 'https://api.whatsapp.com/send?phone=628563160756&text='},
  {icon: faEnvelope, url: 'mailto:info@karantivi.com'}
]

export const mainlink = [
  {name: 'Beranda', icon: faHome, url: 'gigs'},
  {name: 'Gigs', icon: faMusic, url: 'gigs'},
  {name: 'Podcast', icon: faPodcast, url: 'podcast'},
  {name: 'Jadwal', icon: faCalendar, url: 'schedule'},
  {name: 'Profil', icon: faUsers, url: 'profile'},
  {name: 'Galeri', icon: faImages, url: 'gallery'}
]

export const footlink = [
  {name: 'Perihal', icon: faHome, url: '/perihal'},
  {name: 'Manifesto', icon: faMusic, url: '/manifesto'},
  {name: 'Media', icon: faPodcast, url: '/media'},
  {name: 'Ketentuan', icon: faCalendar, url: '/ketentuan'},
  {name: 'Privasi', icon: faUsers, url: '/privasi'}
]