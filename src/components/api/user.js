import {root_url} from './config'
import axios from 'axios'

export function login(username,password)  {
    const url = root_url + 'login/'
    return axios.post(url, {
        username: username,
        password: password
      })
}


export function get_user_info(username,password)  {
    const url = root_url + 'login/'
    return axios.post(url, {
        username: username,
        password: password
      })
}

