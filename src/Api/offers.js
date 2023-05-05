import Apiservices from '../services/ApiServices'

const Offers = {
  get: async (count, page) => {
    const items = await Apiservices.get(`/offers?page=${page}&limit=${count}`)
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/offers`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/offers/${id}`)
    return item
  },
  put: async (id, data) => {
    const item = await Apiservices.put(`/offers/${id}`, data)
    return item
  },
}

export default Offers
