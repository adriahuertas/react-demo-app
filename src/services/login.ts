import axios from 'axios'
import { type Credentials } from '../interfaces/interfaces'

const baseUrl = 'https://reqres.in/api/login'

const login = async (credentials: Credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials)
    return response.data
  } catch (error: any) {
    console.log('Error en la identificación')
    console.log(error.response.data.error)
    return null
  }
}

export default { login }
