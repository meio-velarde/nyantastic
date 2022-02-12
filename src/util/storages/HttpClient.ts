import Axios, {AxiosInstance, AxiosRequestConfig, ResponseType} from 'axios'
import serializeParams from '../serializeParams'

class HttpClient {
    protected readonly axiosClient: AxiosInstance

    public constructor(
        baseUrl: string,
        headers?: AxiosRequestConfig['headers'],
    ) {
        this.axiosClient = Axios.create({
            baseURL: baseUrl,
            paramsSerializer: serializeParams,
            headers,
        })
    }

    /**
     * Execute a GET request to the server.
     * @param resource The resource to GET.
     * @param parameters The optional parameters to add to the request.
     * @param headers The optional headers to add to the request.
     * @param responseType The optional response type of the request.
     */
    public async get<TResponse, TRequest = unknown>(
        resourceUri: string,
        parameters?: TRequest,
        headers?: AxiosRequestConfig['headers'],
        responseType?: ResponseType,
    ): Promise<TResponse> {
        const { data } = await this.axiosClient.get<TResponse>(resourceUri, {
            headers,
            params: parameters,
            responseType,
        })

        return data
    }
}

export default HttpClient