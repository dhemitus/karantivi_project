import { EMPTY_PODCAST, DETAIL_PODCAST } from './ipodcast'

const initialState = {
    type: EMPTY_PODCAST,
    data: {}
  }
  
  export default function footerdescReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case DETAIL_PODCAST:
        return {
          type: action.type,
          data: action.payload.data
        }
      default:
        return state
    }
  }