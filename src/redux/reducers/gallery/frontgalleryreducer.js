import { EMPTY_GALLERY, FRONT_GALLERY } from './igallery'

const initialState = {
    type: EMPTY_GALLERY,
    list: []
  }
  
  export default function frontgalleryReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FRONT_GALLERY:
        return {
          type: action.type,
          data: action.payload.list
        }
      default:
        return state
    }
  }