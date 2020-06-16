import axios, { AxiosProxyConfig, AxiosResponse } from 'axios';

class HttpRequest {
  constructor(externalConfig: any) {
    // 外部配置
    this.externalConfig = externalConfig;
  }

  externalConfig = {};

  // 内部配置
  getInsideConfig() {
    let config = {
      // 基础路径
      baseURL: '',
      // 表示跨域请求时是否需要使用凭证
      // 允许跨域带token,cookie
      withCredentials: true,
      // 请求超时
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    config = Object.assign(config, this.externalConfig);
    return config;
  }

  // 调用方法
  request(options: any) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }

  // 拦截器设置
  interceptors(instance: any) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosProxyConfig) => {
        return Promise.resolve(config);
      },
      (error: Error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return Promise.resolve(res);
      },
      (error: Error) => {
        return Promise.reject(error);
      }
    );
  }
}

const Axios: HttpRequest = new HttpRequest({
  baseURL: process.env.VUE_APP_BASE_API
});

export const getRequest = (options: any) => {
  options.methods = 'get';
  return Axios.request(options);
}

export const postRequest = (options: any) => {
  options.methods = 'post';
  return Axios.request(options);
}

