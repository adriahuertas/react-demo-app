import { type Credentials } from '../interfaces/interfaces'
import apiInstance from '../ApiInstance'

const baseUrl = 'https://reqres.in/api/login'

const login = async (credentials: Credentials) => {
  try {
    const response = await apiInstance.post(baseUrl, credentials)
    return response.data
  } catch (error) {
    return null
  }
}

export default { login }
