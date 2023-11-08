import request from '@/utils/request'

export function testGet(params) {
  console.log('===============test===============')
  console.log(process.env.VUE_APP_BASE_API)
  console.log('===============test===============')
  return request({
    url: '/getTest2',
    method: 'get',
    params
  })
}
