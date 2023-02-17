import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAllPhones = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
}

const createPhone = (body) => {
  const request = axios.post(baseUrl, body)
  return request.then(response => {
    return response.data
  })
}

const updatePhone = (body, id) => {
  const request = axios.put(`${baseUrl}/${id}`, body)
  return request.then(response => {
    return response.data
  })
}

const deletePhone = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => {
    return response.data
  })
}

export default
{
  getAllPhones,
  createPhone,
  updatePhone,
  deletePhone
}
