import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use()

service.interceptors.response.use(
  (res) => {
    console.log('res',res)
    const { success, message, data } = res.data
    if(success){
      return data
    }else{
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    Message.error(error.message || '')
    return Promise.reject(err)
  }
)

export default service
