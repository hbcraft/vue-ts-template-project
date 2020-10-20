import { AxiosInstance, AxiosRequestConfig, AxiosInterceptorManager, AxiosResponse, AxiosRequestConfig, AxiosRequestConfig } from 'axios'
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
    request<T = any>(config: AxiosRequestConfig): Promise<ResponseDataWrap<T>>;
    get<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResponseDataWrap<T>>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResponseDataWrap<T>>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResponseDataWrap<T>>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResponseDataWrap<T>>;
  }
  interface AxiosInterceptorManager {
    use(
      onFulfilled?: (res: AxiosResponse<ResponseDataWrap>) => ResponseDataWrap,
      onRejected?: (error: any) => any
    ): number;
    use(
      onFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig,
      onRejected?: (error: any) => any
    ): number;
  }
}
