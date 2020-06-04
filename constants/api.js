import AppConfig from './config'

let envConfig = AppConfig.prod

if (process.env.NODE_ENV === 'development') {
  envConfig = AppConfig.dev
}
if (process.env.NODE_ENV === 'local') {
  envConfig = AppConfig.local
}

const config = envConfig

const API = {
  REGISTER: `${config.BACKEND_ADDRESS}/api/users`,
  LOGIN: `${config.BACKEND_ADDRESS}/api/users/login`
}

const SOCKET_EVENT = {
  socket: 'socket',
  urlSocket: config.SOCKET_SERVER
}

export {
  API,
  SOCKET_EVENT
}
