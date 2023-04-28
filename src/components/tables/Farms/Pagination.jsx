import {
  generateTestData,
  usePagination,
  Pagination,
} from 'pagination-react-js'
import { useEffect } from 'react'
import Apiservices from '../../../services/ApiServices'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../Redux'

const App = ({ pages, count, setPages }) => {
  const { currentPage, entriesPerPage } = usePagination(1, 3)
  const search = useSelector((state) => state.search)
  const isSearch = useSelector((state) => state.isSearch)
  const dispatch = useDispatch()
  console.log(pages)
  const dataList = generateTestData(pages * 3.0, (i) => ({
    id: `Id${i}`,
    name: `Name${i}`,
  }))
  useEffect(() => {
    if (search === '') {
      console.log(1)
      dispatch(actions.setIsUpdate())

      Apiservices.get(
        `/farms?limit=${count}`,
        // `/vendor/manufacturers?per_page=${count}&page=${currentPage.get}`,
      ).then((res) => {
        setPages(res.data.paginationResult.numberOfPages)
        dispatch(actions.setManufacturers(res.data.data))
        dispatch(actions.setIsUpdate())
      })
    } else {
      console.log(2)
      dispatch(actions.setIsUpdate())

      Apiservices.get(
        `/farms?limit=${count}`,
        // `/vendor/manufacturers?per_page=${count}&search=${search}&page=1  `,
      ).then((res) => {
        setPages(res.data.paginationResult.numberOfPages)
        console.log(res.data.data)
        dispatch(actions.setManufacturers(res.data.data))
        dispatch(actions.setIsUpdate())
      })
    }
  }, [currentPage.get, isSearch])
  return (
    <div className="container">
      <Pagination
        entriesPerPage={entriesPerPage.get}
        totalEntries={dataList.length}
        currentPage={{ get: currentPage.get, set: currentPage.set }}
        offset={1}
        classNames={{
          wrapper: 'pagination m-auto',
          item: 'pagination-item',
          itemActive: 'pagination-item-active',
          navPrev: 'pagination-item nav-item navPrev-item',
          navNext: 'pagination-item nav-item',
          navStart: 'pagination-item nav-item navStart',
          navEnd: 'pagination-item nav-item navEnd',
          navPrevCustom: 'pagination-item',
          navNextCustom: 'pagination-item',
        }}
        showFirstNumberAlways={true}
        showLastNumberAlways={true}
        navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrevCustom={{
          steps: 5,
          content:
            '\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
        navNextCustom={{
          steps: 5,
          content:
            '\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
      />
    </div>
  )
}

export default App
