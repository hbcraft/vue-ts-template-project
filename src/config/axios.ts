/**
 * 请求配置
 */
// 服务器API地址
const API_HOST = 'http://192.168.1.110'
// 服务器API端口
const API_PORT = '8888'
// 公共请求路径
const API_PUBLIC_PATH = ''
// 拼接后的完整请求地址
export const API_URL = `${API_HOST}:${API_PORT}${API_PUBLIC_PATH}`
// 请求超时时间
export const API_TIMEOUT = 30000

/**
 * 响应配置
 */
// 成功响应码列表
export const SUCCESS_RESPONSE_CODE_LIST: ResponseCode = {
  200: {}
}

// 失败响应码列表
export const FAIL_RESPONSE_CODE_LIST: ResponseCode = {
  404: {
    message: '资源不存在'
  }
}
