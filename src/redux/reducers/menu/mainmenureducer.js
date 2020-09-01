import { EMPTY_MENU, MAIN_MENU } from './imenu'

const initialState = {
  type: EMPTY_MENU,
  data: []
}

export default function mainmenuReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case MAIN_MENU:
      return {
        type: action.type,
        data: action.payload.list
      }
    default:
      return state
  }
}