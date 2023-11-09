import request from '@/utils/request'

export function getDevices(params) {
  return request({
    url: '/gatewayEquipment',
    method: 'get',
    params
  })
}

export function addDevice(data) {
  return request({
    url: '/gatewayEquipment',
    method: 'post',
    data
  })
}

export function deleteDevice(data) {
  return request({
    url: '/gatewayEquipment',
    method: 'delete',
    data
  })
}

export function getFaces(params) {
  return request({
    url: '/gatewayBind',
    method: 'get',
    params
  })
}

export function getRecords(params) {
  return request({
    url: '/gatewayOpenRecord',
    method: 'get',
    params
  })
}

export function getLogs(params) {
  return request({
    url: '/gatewayOperate',
    method: 'get',
    params
  })
}
