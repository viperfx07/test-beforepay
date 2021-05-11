import axios from 'axios'

export const submitData = (formData) => {
	return axios.post('http://httpbin.org/post', formData)
}
