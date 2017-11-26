import {root_url} from './config'
// import axios from 'axios'

import fetch from '@/utils/fetch'


export function get_province()  {
    const url = root_url + 'province/index/'
    return fetch.get(url)
}

export function search_sell_data_by_date(last,now)  {
    const url = root_url + 'province/search/'
    return fetch.post(url, {
        last: last,
        now: now
      })
}


export function manage_branch(uid,status)  {
    const url = root_url + 'province/manage/'
    return fetch.post(url, {
        uid: uid,
        status: status
      })
}