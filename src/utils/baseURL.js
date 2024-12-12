const getBaseUrl = () => {
    return new URL(import.meta.env.URL_BE);
}

export default getBaseUrl;