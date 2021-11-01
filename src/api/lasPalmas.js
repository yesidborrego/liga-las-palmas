import axios from 'axios'

const laspalmasApi = axios.create({
  baseURL: 'http://localhost:3000'
})

export default laspalmasApi