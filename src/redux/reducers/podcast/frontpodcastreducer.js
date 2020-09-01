import { EMPTY_PODCAST, FRONT_PODCAST } from './ipodcast'

const initialState = {
    type: EMPTY_PODCAST,
    list: []
  }
  
  export default function footerdescReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FRONT_PODCAST:
        return {
          type: action.type,
          data: action.payload.list
        }
      default:
        return state
    }
  }