import {root_url} from './config'
import axios from 'axios'

export function get_province()  {
    const url = root_url + 'province/'
    return axios.get(url)
}