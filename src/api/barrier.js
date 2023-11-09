import request from '@/utils/request'

export function getDevices(params) {
  return request({
    url: '/barrierEquipment',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function addDevice(data) {
  return request({
    url: '/barrierEquipment',
    method: 'post',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function deleteDevice(data) {
  return request({
    url: '/barrierEquipment',
    method: 'delete',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function carIn(data) {
  return request({
    url: '/controlCenterIn',
    method: 'post',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function carOut(data) {
  return request({
    url: '/controlCenterOut',
    method: 'post',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function getCarIn(params) {
  return request({
    url: '/carIn',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function getCarOut(params) {
  return request({
    url: '/carOut',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function getProtocols(params) {
  return request({
    url: '/barrierProtocol',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function updateProtocolStatus(data) {
  return request({
    url: '/barrierProtocol',
    method: 'put',
    data,
    baseURL: 'http://localhost:8080'
  })
}
