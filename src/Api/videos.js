import Apiservices from '../services/ApiServices'

const Videos = {
  get: async (count, page) => {
    const items = await Apiservices.get(
      `/video?page=${page}&limit=${count}`,
    )
    return items
  },
  post: async (data) => {
    const item = await Apiservices.post(`/video`, data)
    return item
  },
  destroy: async (id) => {
    const item = await Apiservices.delete(`/video/${id}`)
    return item
  },
  put: async (id, data) => {
    const item = await Apiservices.put(`/video/${id}`, data)
    return item
  },
}

export default Videos
