import axios, { AxiosInstance } from "axios";
enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  InternalServerError = 500,
}

class HttpClient {
  protected readonly instance: AxiosInstance;
  protected readonly webappToken: string;

  public constructor(baseURL: string, webappToken: string) {
    this.instance = axios.create({
      baseURL,
    });
    this.webappToken = webappToken;
    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest, (error) =>
      Promise.reject(error)
    );
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  _handleRequest = (config: any) => {
    if (this.webappToken)
      config.headers["Authorization"] = `Bearer ${this.webappToken}`;
    config.headers["Content-Type"] = "application/json";
    config.headers["accept"] = "application/json";
    return config;
  };

  _handleResponse = (response: any) => response;

  _handleError = (error: any) => {
    const { status } = error?.response;
    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        window.location.href = "/login";
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        window.location.href = "/login";
        // Handle Unauthorized
        break;
      }
    }

    // if (error.response.status === 401) {
    //   window.location = "/login";
    // }
    return Promise.reject(error);
  };
}

export default HttpClient;
