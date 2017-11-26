import {root_url} from './config'
import fetch from '@/utils/fetch'

export function get_agent1()  {
    const url = root_url + 'agent1/index/'
    return fetch.get(url)
}


export function search_sell_data_by_date(last,now)  {
    const url = root_url + 'agent1/search/'
    return fetch.post(url, {
        last: last,
        now: now
      })
}