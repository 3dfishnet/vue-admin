import request from '@/utils/request'

export function getDevices(params) {
  return request({
    url: '/gateway',
    method: 'get',
    params
  })
}
