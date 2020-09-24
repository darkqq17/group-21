const config = {}

config.BASE_URL = 'https://mighty-scrubland-96525.herokuapp.com' // 這裡放你們的server url
config.API_PORT = '' //這裡棒你們的port

export const API_SERVER = (config.API_SERVER = `${config.BASE_URL}:${config.API_PORT}`)

export default config
