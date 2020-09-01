import { EMPTY_SPONSOR, FOOTER_SPONSOR } from './isponsor'

const initialState = {
  type: EMPTY_SPONSOR,
  data: []
}

export default function footersponsorReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case FOOTER_SPONSOR:
      return {
        type: action.type,
        data: action.payload.list
      }
    default:
      return state
  }
}