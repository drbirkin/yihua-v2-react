import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CategoriesPreview from '../category-preview/category.preview'
import Category from '../category/category.component'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCurrentCategory } from '../../store/category/category.action'

// thunk
import { fetchCategoriesAsync } from '../../store/category/category.action'

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('effect fired getting shop data: ')
    // Wrap Async function
    // const getCategoriesMap = async () => {
    // const categoriesArray = await getCategoriesAndDocuments()
    // dispatch(setCurrentCategory(categoriesArray))

    // }
    // getCategoriesMap()

    //? thunk calling up async actions
    dispatch(fetchCategoriesAsync())
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
