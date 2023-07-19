import { toJSON } from '../toJSON'
import {
    TypeDelete,
    TypeFetchingData,
    TypeGet,
    TypePost,
    TypePut,
    Request_Init,
} from './types'

const fetchingData: TypeFetchingData = async (url, options) => {
    if (options) {
        const { data, headers } = options

        options = {
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: toJSON(data),
            ...options,
        }
    }

    const res = await fetch(url, options)

    if (!res.ok || res.status >= 201) {
        throw new Error('The request failed')
    }

    return await res.json()
}

export class fetchApi {
    static get: TypeGet = async (url, options) => {
        return await fetchingData(url, options)
    }

    static post: TypePost = async (url, options) => {
        return await fetchingData(url, Options('POST', options))
    }

    static put: TypePut = async (url, options) => {
        return await fetchingData(url, Options('PUT', options))
    }

    static delete: TypeDelete = async (url, options) => {
        return await fetchingData(url, Options('DELETE', options))
    }
}

/**
 * --Устанавливает метод запроса--
 * Возвращает объект с методом запроса
 * и текущими опциями
 */
function Options(
    method: 'POST' | 'PUT' | 'DELETE',
    options: Request_Init | undefined
) {
    return { method, ...options }
}
