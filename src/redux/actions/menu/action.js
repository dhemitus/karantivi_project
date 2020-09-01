import { EMPTY_MENU, SOCMED_MENU, MAIN_MENU, FOOTER_MENU } from '../../reducers/menu/imenu'
import { soclink, mainlink, footlink } from '../../../../assets/data/menuData'

export const loadSocMenu = () => async dispatch => {
  try {
    dispatch({
      type: SOCMED_MENU,
      payload: {list: soclink}
    })
  } catch(e) {
    dispatch({
      type: EMPTY_MENU,
      payload: {list: []}
    })
  }
}

export const loadMainMenu = () => async dispatch => {
  try {
    dispatch({
    type: MAIN_MENU,
    payload: {list: mainlink}
    })
  } catch(e) {
    dispatch({
      type: EMPTY_MENU,
      payload: {list: []}
    })
  }
}

export const loadFooterMenu = () => async dispatch => {
  try {
    dispatch({
      type: FOOTER_MENU,
      payload: {list: footlink}
    })
  } catch(e) {
    dispatch({
      type: EMPTY_MENU,
      payload: {list: []}
    })
  }
}