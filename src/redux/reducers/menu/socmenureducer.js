import { EMPTY_MENU, SOCMED_MENU } from './imenu'

const initialState = {
  type: EMPTY_MENU,
  data: []
}

export default function socmenuReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case SOCMED_MENU:
      return {
        type: action.type,
        data: action.payload.list
      }
    default:
      return state
  }
}