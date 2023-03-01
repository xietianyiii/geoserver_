
import axios from 'axios'
import { Notify } from 'vant';
import Vue from 'vue'
import router from '../router/index.js'
import { getToken } from '@/util/author'
import { clearAuthor } from '@/util/author'
import {getBaseURL} from "@/util/appConfigura"

// 创建 axios 实例
let _lBaseURL = getBaseURL()
let _envBaseURL = process.env.VUE_APP_NODE_ENV==='development'?'':process.env.VUE_APP_BASEURL
let baseURL = !_lBaseURL || _lBaseURL === '' ? _envBaseURL : _lBaseURL
const requests = axios.create({
  baseURL: baseURL, //process.env.VUE_APP_BASEURL, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。
　　// baseURL: 'http://168.192.0.123',
  timeout: 60000, // 请求超时时间
  // withCredentials: true
})
 
// 错误处理函数
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    // const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
        Notify({ type: 'danger', message: data.message||data.msg });
        clearAuthor()
        router.push({path: '/login'})
    }
    if (error.response.status === 401) {
        Notify({ type: 'danger', message: '登录失效' });
        clearAuthor()
        router.push({path: '/login'})
    }
  }
  return Promise.reject(error)
}

// request interceptor(请求拦截器)
requests.interceptors.request.use(config => {
  // config.url = process.env.VUE_APP_BASEURL + config.url
  const token = getToken()
  if (token) {
    config.headers['Auth-Token'] = token
  }
  return config
}, err)

// response interceptor（接收拦截器）
requests.interceptors.response.use((response) => {
  const res = response.data
  if (res.code === 401||res.Code === 401) {
    Notify({ type: 'danger', message: '登录过期，请重新登录'});
    clearAuthor()
    return Promise.reject('error')
  }
//   if (res.code !== 0&&res.code!==200) { 
//     Notify({ type: 'danger', message: res.message||res.msg });
//     // 401:未登录;
//     if (res.code === 401||res.code === 403||res.code===999) {
//       Notify({ type: 'danger', message: '请登录'});
//     }
//     return Promise.reject('error')
//   } else {
    return res
//   }
}, err)

export default requests

// Vue.prototype.requests = requests 
