import Apiservices from '../services/ApiServices'

const Exchange = {
  get: async (count, page) => {
    const items = await Apiservices.get(`/exchange?page=${page}&limit=${count}`)
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/exchange`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/exchange/${id}`)
    return item
  },
  put: async (id, data) => {
    const item = await Apiservices.put(`/exchange/${id}`, data)
    return item
  },
}

export default Exchange
