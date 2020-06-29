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
  UPDATE_COMMENT_BY_COMMENTID: `${config.BACKEND_ADDRESS}/api/comments`,
  DELETE_COMMENT_BY_COMMENTID: `${config.BACKEND_ADDRESS}/api/comments`,
  GET_IMAGES_BY_USERID: `${config.BACKEND_ADDRESS}/api/images/user`,
  GET_NOTIFYS_BY_USERID: `${config.BACKEND_ADDRESS}/api/notify`,
  CREATE_IMAGE: `${config.BACKEND_ADDRESS}/api/images`,
  GET_IMAGES_BY_TAG: `${config.BACKEND_ADDRESS}/api/images/search`,
  GET_IMAGES_BY_TEXT: `${config.BACKEND_ADDRESS}/api/images/search/text`
}

const SOCKET_EVENT = {
  socket: 'socket',
  urlSocket: config.SOCKET_SERVER
}

export {
  API,
  SOCKET_EVENT
}
