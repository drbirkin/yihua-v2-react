import { createSelector } from 'reselect'

// redux state (contains actions)
// ?reselect
// memorize reducer
const selectCategoryReducer = (state) => state.categories
// memorize reducer state
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.shop
)

export const categorySelector = createSelector([selectCategories], (shop) => {
  console.log('category selector fired')
  return shop.reduce((sum, category) => {
    // console.log('category: ', sum)
    const { title, items } = category
    sum[title.toLowerCase()] = items
    return sum
  }, {})
})

// ?default selector
// export const categorySelector = (state) => {
//   console.log('category selector fired')
//   return state.categories.shop.reduce((sum, category) => {
//     // console.log('category: ', sum)
//     const { title, items } = category
//     sum[title.toLowerCase()] = items
//     return sum
//   }, {})
// }
