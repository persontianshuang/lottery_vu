import {root_url} from './config'
import axios from 'axios'

export function get_city()  {
    const url = root_url + 'city/'
    return axios.get(url)
}