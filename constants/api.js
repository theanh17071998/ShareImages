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
  GET_HOME_IMAGE: `${config.BACKEND_ADDRESS}/api/images/home/`,
  GET_COMMENT_BY_IMAGEID: `${config.BACKEND_ADDRESS}/api/comments/`,
  GET_IMAGE_BY_IMAGEID: `${config.BACKEND_ADDRESS}/api/images`,
  COMMENT: `${config.BACKEND_ADDRESS}/api/comments`,
  LIKE_IMAGE: `${config.BACKEND_ADDRESS}/api/images/`,
  UPDATE_PROFILE: `${config.BACKEND_ADDRESS}/api/users`,
  GET_IMAGES_BY_USERID: `${config.BACKEND_ADDRESS}/api/images/user`,
  GET_NOTIFYS_BY_USERID: `${config.BACKEND_ADDRESS}/api/notify`
}

const SOCKET_EVENT = {
  socket: 'socket',
  urlSocket: config.SOCKET_SERVER
}

export {
  API,
  SOCKET_EVENT
}
