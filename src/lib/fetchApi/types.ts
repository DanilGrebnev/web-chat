export interface Request_Init extends Omit<RequestInit, 'method' | 'body'> {
    data?: { [key: string]: string | number }
}

export type TypeFetchApi = <ReturnData>(
    url: string,
    options?: Request_Init
) => Promise<ReturnData>

export interface TypeOptions extends RequestInit {
    data?: { [key: string]: string | number }
}

export type TypeFetchingData = (
    url: string,
    options?: TypeOptions
) => Promise<Response | any>

export type TypeGet = TypeFetchApi
export type TypePost = TypeFetchApi
export type TypePut = TypeFetchApi
export type TypeDelete = TypeFetchApi
