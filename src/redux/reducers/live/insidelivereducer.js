import { EMPTY_LIVE, INSIDE_LIVE } from './ilive'

const initialState = {
    type: EMPTY_LIVE,
    data: {}
  }
  
  export default function insideliveReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case INSIDE_LIVE:
        return {
          type: action.type,
          data: action.payload.data
        }
      default:
        return state
    }
  }