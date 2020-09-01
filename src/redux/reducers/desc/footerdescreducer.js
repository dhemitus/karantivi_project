import { EMPTY_DESCRIPTION, FOOTER_DESCRIPTION } from './idesc'

const initialState = {
    type: EMPTY_DESCRIPTION,
    data: {}
  }
  
  export default function footerdescReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FOOTER_DESCRIPTION:
        return {
          type: action.type,
          data: action.payload.data
        }
      default:
        return state
    }
  }