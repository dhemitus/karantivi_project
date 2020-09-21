import reducer from '../reducers/'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'
//import { reduxFirestore, getFirestore } from 'redux-firestore'
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

const middlewares = [
  thunkMiddleware,
]
const fbConfig = {
  apiKey: process.env.NEXT_PUBLIC_ENV_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_ENV_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_ENV_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_ENV_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_ENV_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ENV_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_ENV_MEASUREMENT_ID
}
firebase.initializeApp(fbConfig)

//export const database = firebase.database()

const configStore = (initialState) => {
	const enhancer = compose(
		applyMiddleware(...middlewares),
//    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//    reactReduxFirebase(fbConfig),
//    reduxFirestore(fbConfig)
	)
	return createStore(reducer, initialState, enhancer)
}

export default configStore({})