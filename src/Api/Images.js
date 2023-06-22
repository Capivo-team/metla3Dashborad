import Apiservices from '../services/ApiServices'

const ImagesApi = {
  get: async (count, page) => {
    const items = await Apiservices.get(`/images?page=${page}&limit=${count}`)
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/images`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/images/${id}`)
    return item
  },
  put: async (id, data) => {
    const item = await Apiservices.put(`/images/${id}`, data)
    return item
  },
}

export default ImagesApi
