import Apiservices from '../services/ApiServices'

const Signs = {
  login: async (data) => {
    const user = await Apiservices.post(`/auth/login`, data)
    return user
  },
  signup:async (data)=>{
    const user = await Apiservices.post(`/auth/register`, data)
    return user
  }
}

export default Signs
