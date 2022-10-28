import { createAction } from '../../utils/reducer/reducer.utils'
import { CATEGORY_ACTION_TYPES } from './category.type'
export const setCurrentCategory = (shopArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CURRENT_SHOP, shopArray)
