import { UNLOGGED_USER, LOGGED_USER } from '../../reducers/auth/iauth'
import firebase from 'firebase/app'

export const loginFromGoogle = () => async dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    let result = await firebase.auth().signInWithPopup(provider)

    dispatch({
      type: LOGGED_USER,
      payload: {data:result}
    })
  } catch (e) {
    dispatch({
      type: UNLOGGED_USER,
      payload: {data: {error:e}}
    })
  }
}

/*
export const checkUser = () => async dispatch => {
  try {
    let data = await check()
    console.log(data)
    dispatch({
      type: LOGGED_USER,
      payload: data
    })

  } catch(e) {
    dispatch({
      type: UNLOGGED_USER,
      payload: {data: {error:e}}
    })
  }
}*/