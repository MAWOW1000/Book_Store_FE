const getBaseUrl = () => {
    return import.meta.env.VITE_BE || "http://localhost:5000"
}

export default getBaseUrl;