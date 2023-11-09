import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
    baseURL: ''
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token },
    baseURL: ''
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
    baseURL: ''
  })
}
