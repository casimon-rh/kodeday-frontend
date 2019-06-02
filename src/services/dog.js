import Axios from 'axios'
import conf from '../conf'
export const getAll = () => Axios.get(`${conf.url}/dogs`)
export const adopt = id => Axios.put(`${conf.url}/dogs/adopt/${id}`)
export const kill = id => Axios.delete(`${conf.url}/dogs/${id}`)
