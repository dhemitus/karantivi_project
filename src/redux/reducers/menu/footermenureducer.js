import { EMPTY_MENU, FOOTER_MENU } from './imenu'

const initialState = {
  type: EMPTY_MENU,
  data: []
}

export default function footermenuReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case FOOTER_MENU:
      return {
        type: action.type,
        data: action.payload.list
      }
    default:
      return state
  }
}