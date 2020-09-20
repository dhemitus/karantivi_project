import { EMPTY_PROFILE, FRONT_PROFILE } from '../../reducers/profile/iprofile'
import firebase from 'firebase/app'

export const loadFrontProfile = () => async dispatch => {
  try {
    const snapshot = await firebase.database().ref('/profile').once('value')
    dispatch({
      type: FRONT_PROFILE,
      payload: {list: snapshot.val()}
    })
  } catch(e) {
    console.log(e)
    dispatch({
      type: EMPTY_PROFILE,
      payload: {data: {error:e}}
    })
  }

  /*try {
    await fetch('/data/profile.json').then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: FRONT_PROFILE,
        payload: {list: data}
      })
    }).catch(err => {
      dispatch({
        type: EMPTY_PROFILE,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    console.log(e)
    dispatch({
      type: EMPTY_PROFILE,
      payload: {data: {error:e}}
    })
  }*/
}