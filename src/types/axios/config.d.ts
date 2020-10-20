interface ResponseCode {
  [propName: number]: ResponseMessage;
}
interface ResponseMessage {
  // 是否显示服务器返回显示消息，默认false
  isServerMsg?: boolean;
  // 自定义显示消息，isServerMsg为true时忽略
  // 如果isServerMsg与message转换为布尔值时都为false，将不显示消息提示
  message?: string;
}
