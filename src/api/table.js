import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/iot/table/list',
    method: 'get',
    params
  })
}

export function getBarrierGateDeviceList(params) {
  return request({
    url: '/iot/barrierGate/list',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params
  })
}
// 不加参数调用时params为空对象{}
export function getCommunityPersonList(params) {
  console.log('===============base===============')
  console.log(process.env.VUE_APP_BASE_API)
  console.log('===============base===============')
  return request({
    url: '/iot/communityManage/list',
    method: 'get',
    params
  })
}

export function testGet(params) {
  console.log('===============test===============')
  console.log(process.env.VUE_APP_BASE_API)
  console.log('===============test===============')
  return request({
    url: '/getTest2',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}
