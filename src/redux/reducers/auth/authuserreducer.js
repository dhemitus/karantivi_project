import { UNLOGGED_USER, LOGGED_USER } from './iauth'

const initialState = {
    type: UNLOGGED_USER,
    data: null
  }
  
  export default function authuserReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case LOGGED_USER:
        return {
          type: action.type,
          data: action.payload.data
        }
      default:
        return state
    }
  }