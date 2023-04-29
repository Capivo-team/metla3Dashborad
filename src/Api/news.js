import Apiservices from '../services/ApiServices'

const News = {
  get: async (count, page) => {
    const items = await Apiservices.get(`/news?page=${page}&limit=${count}`)
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/news`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/news/${id}`)
    return item
  },
  put: async (id, data) => {
    const item = await Apiservices.put(`/news/${id}`, data)
    return item
  },
}

export default News
