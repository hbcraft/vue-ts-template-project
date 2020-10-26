/**
 * 响应代码
 */
// 无弹框响应码列表
export const NO_MESSAGE_CODE_LIST: (number|RegExp)[] = [200]

// 响应码列表
export const CODE_LIST: ResponseCode[] = [
  {
    code: 404,
    type: 'error',
    message: '资源不存在'
  }
]
