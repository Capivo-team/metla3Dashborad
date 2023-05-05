import Apiservices from '../services/ApiServices'

const Company = {
  get: async (count, page) => {
    const items = await Apiservices.get(`/company?page=${page}&limit=${count}`)
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/company/register`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/company/${id}`)
    return item
  },
  put: async (data) => {
    const item = await Apiservices.put(`/company/banned`, data)
    return item
  },
}

export default Company
