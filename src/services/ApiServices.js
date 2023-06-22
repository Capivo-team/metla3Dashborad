import axios from 'axios'
import JwtService from './TokenServices'
import LangugeServices from './LangugeServices'

const Apiservices = axios.create({
  baseURL: `https://dolphin-app-792st.ondigitalocean.app/api/v1`,
  // withCredentials: true,
})

Apiservices.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${JwtService.getToken()}`
    config.headers['Accept-Language'] = `${LangugeServices.getLang()}`
    return Promise.resolve(config)
  },
  (error) => {
    return Promise.reject(error)
  },
)
// instance.interceptors.response.use(
//   (response) => {},
//   (error) => {}
// );

export default Apiservices
