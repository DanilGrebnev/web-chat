import {
    TypeDelete,
    TypeFetchingData,
    TypeGet,
    TypePost,
    TypePut,
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
        return await fetchingData(url, { method: 'POST', ...options })
    }

    static put: TypePut = async (url, options) => {
        return await fetchingData(url, { method: 'PUT', ...options })
    }

    static delete: TypeDelete = async (url, options) => {
        return await fetchingData(url, { method: 'DELETE', ...options })
    }
}

function toJSON(value: any) {
    return JSON.stringify(value)
}
