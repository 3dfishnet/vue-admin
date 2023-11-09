import request from '@/utils/request'

export function getDevices(params) {
  return request({
    url: '/barrierEquipment',
    method: 'get',
    params
  })
}

export function addDevice(data) {
  return request({
    url: '/barrierEquipment',
    method: 'post',
    data
  })
}

export function deleteDevice(data) {
  return request({
    url: '/barrierEquipment',
    method: 'delete',
    data
  })
}

export function carIn(data) {
  return request({
    url: '/controlCenterIn',
    method: 'post',
    data
  })
}

export function carOut(data) {
  return request({
    url: '/controlCenterOut',
    method: 'post',
    data
  })
}

export function getCarIn(params) {
  return request({
    url: '/carIn',
    method: 'get',
    params
  })
}

export function getCarOut(params) {
  return request({
    url: '/carOut',
    method: 'get',
    params
  })
}

export function getProtocols(params) {
  return request({
    url: '/barrierProtocol',
    method: 'get',
    params
  })
}

export function updateProtocolStatus(data) {
  return request({
    url: '/barrierProtocol',
    method: 'put',
    data
  })
}
