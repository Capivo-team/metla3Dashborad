import Apiservices from '../services/ApiServices'

const News = {
  get: async (count, page) => {
    console.log(count, page)
    const items = await Apiservices.get(`/news?page=${page}&limit=${count}`)
    console.log(items.data, 22222222)
    return items
  },
}

export default News
