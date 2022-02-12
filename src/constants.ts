const constants = {
    theCatApiBaseUrl: 'https://api.thecatapi.com/v1',
    theCatApiKey: process.env.CAT_API_KEY as string,
    publicFontUrl: typeof window !== 'undefined' ? `${window.location.origin}/fonts` : ''
}

export default constants