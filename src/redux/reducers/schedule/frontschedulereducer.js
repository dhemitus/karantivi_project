import { EMPTY_SCHEDULE, FRONT_SCHEDULE } from './ischedule'

const initialState = {
    type: EMPTY_SCHEDULE,
    list: []
  }
  
  export default function footerdescReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FRONT_SCHEDULE:
        return {
          type: action.type,
          data: action.payload.list
        }
      default:
        return state
    }
  }