import {root_url} from './config'
import axios from 'axios'
import storage from 'good-storage'


export function login(username,password)  {
    const url = root_url + 'login/'
    return axios.post(url, {
        username: username,
        password: password
      })
}

// // 令牌登录过期
// export function get_token() {
//     storage.get('token')
//     // 如果取一个不存在的值呢 
//     // 跳转到登录页面
    
// }

// export function get_token() {
//     storage.get('token')
//     // 如果取一个不存在的值呢 
    
// }


export function get_user_info(username,password)  {
    const url = root_url + 'login/'
    return axios.post(url, {
        username: username,
        password: password
      })
}

