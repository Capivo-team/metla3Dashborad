import Apiservices from '../services/ApiServices'

const Suggestions = {
  get: async (count, page) => {
    const items = await Apiservices.get(`/suggestions?page=${page}&limit=${count}`)
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/suggestions`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/suggestions/${id}`)
    return item
  },
  put: async (id, data) => {
    const item = await Apiservices.put(`/suggestions/${id}`, data)
    return item
  },
}

export default Suggestions
