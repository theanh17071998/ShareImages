
export const postMethod = {
  method: 'POST'
}

export const getMethod = {
  method: 'GET'
}

export const requestOptions = (token) => {
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
  return header
}

export const jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

/*
  query response helpers:
 */
export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  if (response && response.status && response.status === 401) {
    window.localStorage.clear()
  }
  const error = new Error(response.statusText)
  error.response = response
  // throw error
  return Promise.reject(error)
}

export const parseJSON = (response) => {
  const res = response.json()
  return res
}

