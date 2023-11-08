import request from '@/utils/request'

export function getBarrierDeviceList(params) {
  return request({
    url: '/iot/barrier/list',
    method: 'get',
    params
  })
}
