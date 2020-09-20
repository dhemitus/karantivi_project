import { EMPTY_SPONSOR, FOOTER_SPONSOR } from '../../reducers/sponsor/isponsor'
import firebase from 'firebase/app'

export const loadFooterSponsor = () => async dispatch => {
  try {
    const snapshot = await firebase.database().ref('/supporter').once('value')
    dispatch({
      type: FOOTER_SPONSOR,
      payload: {list: snapshot.val()}
    })
  } catch(e) {
    console.log(e)
    dispatch({
      type: EMPTY_SPONSOR,
      payload: {data: {error:e}}
    })
  }
  /*try {
    await fetch('/data/supporter.json').then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: FOOTER_SPONSOR,
        payload: {list: data}
      })
    }).catch(err => {
      dispatch({
        type: EMPTY_SPONSOR,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    dispatch({
      type: EMPTY_SPONSOR,
      payload: {data: {error:e}}
    })
  }*/
}