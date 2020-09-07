import { EMPTY_LIVE, INSIDE_LIVE } from '../../reducers/live/ilive'

export const loadLiveData = () => async dispatch => {
  try {
    await fetch('/data/livedata.json').then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: INSIDE_LIVE,
        payload: {data: data}
      })
    }).catch(err => {
      dispatch({
        type: EMPTY_LIVE,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    dispatch({
      type: EMPTY_LIVE,
      payload: {data: {error:e}}
    })
  }
}