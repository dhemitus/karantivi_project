import { EMPTY_SCHEDULE, FRONT_SCHEDULE } from '../../reducers/schedule/ischedule'

export const loadFrontSchedule = () => async dispatch => {
  try {
    await fetch('/data/schedule.json').then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: FRONT_SCHEDULE,
        payload: {list: data}
      })
    }).catch(err => {
      console.log(err)
      dispatch({
        type: EMPTY_SCHEDULE,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    console.log(e)
    dispatch({
      type: EMPTY_SCHEDULE,
      payload: {data: {error:e}}
    })
  }
}