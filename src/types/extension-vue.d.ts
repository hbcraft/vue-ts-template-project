import Vue, { VueConstructor } from 'vue'
import { AxiosInstance } from 'axios'

// 扩展vue
declare module 'vue/types/vue' {
  // 扩展Vue静态属性/方法
  interface VueConstructor {
    axios: AxiosInstance;
  }
  // 扩展Vue实例属性/方法
  interface Vue {
    axios: AxiosInstance;
    $axios: AxiosInstance;
  }
}
