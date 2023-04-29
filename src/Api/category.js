import Apiservices from '../services/ApiServices'

const Category = {
  get: async (count, page) => {
    const items = await Apiservices.get(`/categories?page=${page}&limit=${count}`)
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/categories`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/categories/${id}`)
    return item
  },
  put: async (id, data) => {
    const item = await Apiservices.put(`/categories/${id}`, data)
    return item
  },
}

export default Category
