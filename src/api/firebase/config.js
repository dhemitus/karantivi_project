import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import fbconfig from '../../../firebaseconfig.json'

firebase.initializeApp(fbconfig)
firebase.firestore()

export default firebase