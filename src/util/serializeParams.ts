import queryString from 'query-string'

const serializeParams = (params: any): string =>
    queryString.stringify(params, {
        arrayFormat: 'separator',
        arrayFormatSeparator: '|',
        skipEmptyString: true,
        skipNull: true,
        encode: true,
    })

export default serializeParams
