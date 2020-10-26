import { NO_MESSAGE_CODE_LIST, CODE_LIST } from '@/config/responseCode'
import { Notification } from 'element-ui'

const typeName = {
  success: '成功',
  error: '错误',
  info: '信息'
}

/**
 * 验证响应码并弹出相应提示
 * @param responseData 响应数据
 */
export default function validateResponseCode (responseData: ResponseDataWrap) {
  if (NO_MESSAGE_CODE_LIST.includes(responseData.code)) return
  for (let i = 0; i < NO_MESSAGE_CODE_LIST.length; i++) {
    if (typeof NO_MESSAGE_CODE_LIST[i] !== 'number') {
      if ((NO_MESSAGE_CODE_LIST[i] as RegExp).test(responseData.code.toString())) return
    }
  }

  for (let i = 0; i < CODE_LIST.length; i++) {
    if (typeof CODE_LIST[i].code === 'number') {
      if (CODE_LIST[i].code !== responseData.code) {
        continue
      }
    } else {
      if (!(CODE_LIST[i].code as RegExp).test(responseData.code.toString())) {
        continue
      }
    }

    if (CODE_LIST[i].isServerMessage) {
      Notification({
        title: typeName[CODE_LIST[i].type],
        type: CODE_LIST[i].type,
        message: responseData.message
      })
    } else {
      if (typeof CODE_LIST[i].message !== 'string') throw Error('Must have one of "message" and "isServerMessage"')
      Notification({
        title: typeName[CODE_LIST[i].type],
        type: CODE_LIST[i].type,
        message: (CODE_LIST[i].message as string)
      })
    }
    return
  }
}
