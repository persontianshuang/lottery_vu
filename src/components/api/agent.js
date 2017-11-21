import {root_url} from './config'
import axios from 'axios'

export function get_agent1()  {
    const url = root_url + 'agent1/'
    return axios.get(url)
}


export function get_agent2()  {
    const url = root_url + 'agent2/'
    return axios.get(url)
}