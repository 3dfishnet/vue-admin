import request from '@/utils/request'

export function getDevices(params) {
  return request({
    url: '/gatewayEquipment',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function addDevice(data) {
  return request({
    url: '/gatewayEquipment',
    method: 'post',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function deleteDevice(data) {
  return request({
    url: '/gatewayEquipment',
    method: 'delete',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function getFaces(params) {
  return request({
    url: '/gatewayBind',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function getRecords(params) {
  return request({
    url: '/gatewayOpenRecord',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function getLogs(params) {
  return request({
    url: '/gatewayOperate',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}
