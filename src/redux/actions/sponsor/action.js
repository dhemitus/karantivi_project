import { EMPTY_SPONSOR, FOOTER_SPONSOR } from '../../reducers/sponsor/isponsor'

export const loadFooterSponsor = () => async dispatch => {
  try {
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
  }
}