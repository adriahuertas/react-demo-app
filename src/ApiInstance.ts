import axios from 'axios'

const BASE_URL = 'https://reqres.in/api/login'

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiInstance.interceptors.request.use(
  (request) => {
    const loggedUser = localStorage.getItem('loggedUser')
    const token = loggedUser !== null ? JSON.parse(loggedUser).token : null
    console.log(loggedUser)
    console.log('Interceptor')
    if (token !== null) {
      request.headers.Authorization = `Bearer ${token}`
    }
    request.headers.IP = '192.168.1.1'
    return request
  },
  (err) => err
)

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response === null) {
      return await Promise.reject(new Error("Couldn't connect to the server"))
    }
    return await Promise.reject(error.response.data)
  }
)

export default apiInstance
