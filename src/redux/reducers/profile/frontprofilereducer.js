import { EMPTY_PROFILE, FRONT_PROFILE } from './iprofile'

const initialState = {
    type: EMPTY_PROFILE,
    list: []
  }
  
  export default function footerdescReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FRONT_PROFILE:
        return {
          type: action.type,
          data: action.payload.list
        }
      default:
        return state
    }
  }