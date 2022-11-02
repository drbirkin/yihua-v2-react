import { createAction } from '../../utils/reducer/reducer.utils'
import { CATEGORY_ACTION_TYPES } from './category.type'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

// default no thunk
// export const setCurrentCategory = (shopArray) =>
//   createAction(CATEGORY_ACTION_TYPES.SET_CURRENT_SHOP, shopArray)

// redux-thunk
export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (shopArray) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, shopArray)

export const fetchCategoriesFailed = (error) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())

  try {
    const categoryMap = await getCategoriesAndDocuments()
    dispatch(fetchCategoriesSuccess(categoryMap))
  } catch(error) {
    dispatch(fetchCategoriesFailed(error))
    // console.error(error)
  }
}