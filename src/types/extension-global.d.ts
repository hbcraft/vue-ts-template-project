import { AxiosInstance } from 'axios'

// 扩展全局对象
declare global {
  // 扩展window对象
  interface Window {
    axios: AxiosInstance;
  }
}
