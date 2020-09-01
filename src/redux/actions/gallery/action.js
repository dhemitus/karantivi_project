import { EMPTY_GALLERY, FRONT_GALLERY } from '../../reducers/gallery/igallery'

export const loadFrontGallery = () => async dispatch => {
  try {
    await fetch('/data/gallery.json').then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: FRONT_GALLERY,
        payload: {list: data}
      })
    }).catch(err => {
      dispatch({
        type: EMPTY_GALLERY,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    console.log(e)
    dispatch({
      type: EMPTY_GALLERY,
      payload: {data: {error:e}}
    })
  }
}