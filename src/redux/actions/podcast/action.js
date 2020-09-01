import { EMPTY_PODCAST, FRONT_PODCAST, DETAIL_PODCAST } from '../../reducers/podcast/ipodcast'

export const loadFrontPodcast = () => async dispatch => {
  try {
    await fetch('/data/podcast.json').then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: FRONT_PODCAST,
        payload: {list: data}
      })
    }).catch(err => {
      console.log(err)
      dispatch({
        type: EMPTY_PODCAST,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    console.log(e)
    dispatch({
      type: EMPTY_PODCAST,
      payload: {data: {error:e}}
    })
  }
}

export const loadDetailPodcast = (val) => async dispatch => {
  try {
    await fetch('/data/podcast.json').then(response => {
      return response.json()
    }).then(data => {
      let item = data.find(result => result.id === val.id)
      dispatch({
        type: DETAIL_PODCAST,
        payload: {data: item}
      })
    }).catch(err => {
      console.log(err)
      dispatch({
        type: EMPTY_PODCAST,
        payload: {data: {error:err}}
      })
    })
  } catch(e) {
    console.log(e)
    dispatch({
      type: EMPTY_PODCAST,
      payload: {data: {error:e}}
    })
  }
}