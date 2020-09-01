import { EMPTY_DESCRIPTION, FOOTER_DESCRIPTION } from '../../reducers/desc/idesc'

export const loadFooterDesc = () => async dispatch => {
  try {
    await fetch('/data/footdesc.json').then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: FOOTER_DESCRIPTION,
        payload: {data: data}
      })
    }).catch(err => {
      dispatch({
        type: EMPTY_DESCRIPTION,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    dispatch({
      type: EMPTY_DESCRIPTION,
      payload: {data: {error:e}}
    })
  }
}