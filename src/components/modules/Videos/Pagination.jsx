import {
  generateTestData,
  usePagination,
  Pagination,
} from 'pagination-react-js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../Redux'
import Videos from '../../../Api/videos'

const PaginationComponent = ({ pages, count, setPages }) => {
  const { currentPage, entriesPerPage } = usePagination(1, 3)
  const search = useSelector((state) => state.search)
  const isSearch = useSelector((state) => state.isSearch)
  const dispatch = useDispatch()
  console.log(pages)
  const dataList = generateTestData(pages * 3.0, (i) => ({
    id: `Id${i}`,
    name: `Name${i}`,
  }))
  const getCategory = async () => {
    const news = await Videos.get(count, currentPage.get)
    setPages(news.data.pagination.pages)
    dispatch(actions.setManufacturers(news.data.data))
    dispatch(actions.setIsUpdate())
  }
  useEffect(() => {
    dispatch(actions.setIsUpdate())
    getCategory()
  }, [currentPage.get, isSearch])
  const lang = useSelector((e) => e.lang)
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
          navStart:
            lang === 'ltr'
              ? 'pagination-item nav-item navStart'
              : 'pagination-item nav-item start-rtl',
          navEnd:
            lang === 'ltr'
              ? 'pagination-item nav-item navEnd'
              : 'pagination-item nav-item end-rtl',
          navPrevCustom: 'pagination-item',
          navNextCustom: 'pagination-item',
        }}
        showFirstNumberAlways={true}
        showLastNumberAlways={true}
        navStart="&#171;"
        navEnd="&#187;"
        navPrev="&#x2039;"
        navNext="&#x203a;"
        navPrevCustom={{
          steps: 5,
          content: '\u00B7\u00B7\u00B7',
        }}
        navNextCustom={{
          steps: 5,
          content: '\u00B7\u00B7\u00B7',
        }}
      />
    </div>
  )
}

export default PaginationComponent
