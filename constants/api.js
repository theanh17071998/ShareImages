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
  LOGIN: `${config.BACKEND_ADDRESS}/api/users/login`,
  GET_IMAGE_BY_USERID: `${config.BACKEND_ADDRESS}/api/images/user/`,
  GET_HOME_IMAGE: `${config.BACKEND_ADDRESS}/api/images/home/`,
  GET_COMMENT_BY_IMAGEID: `${config.BACKEND_ADDRESS}/api/comments/`,
  COMMENT: `${config.BACKEND_ADDRESS}/api/comments`,
  LIKE_IMAGE: `${config.BACKEND_ADDRESS}/api/images/`,
}

const SOCKET_EVENT = {
  socket: 'socket',
  urlSocket: config.SOCKET_SERVER
}

export {
  API,
  SOCKET_EVENT
}
