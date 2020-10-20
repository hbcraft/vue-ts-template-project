'use strict'

import Vue from 'vue'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import {
  API_TIMEOUT,
  API_URL
} from '@/config/axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: API_TIMEOUT
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  (res: AxiosResponse<ResponseDataWrap>) => {
    // 请求地址，不带baseURL
    const reqPath = res.config.url?.substring(config.baseURL!.length)
    console.log(reqPath)
    return res.data
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

/**
 * 重写get请求方法，使传参方式一致
 * @param url 请求地址
 * @param data 请求参数
 * @param config 请求配置
 */
_axios.get = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return _axios({
    url,
    params: data,
    ...config
  })
}

Vue.axios = _axios
window.axios = _axios
Vue.prototype.axios = Vue.prototype.$axios = _axios
