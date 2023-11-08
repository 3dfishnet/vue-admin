import request from '@/utils/request'

export function getCommunityPersons(params) {
  console.log('getCommunityPersons:')
  console.log(params)
  return request({
    url: '/iot/community/persons',
    method: 'get',
    params
  })
}

export function addCommunityPerson(params) {
  console.log('addCommunityPerson:')
  console.log(params)
  return request({
    url: '/iot/community/persons',
    method: 'post',
    data: params
  })
}

export function deleteCommunityPerson(params) {
  console.log('deleteCommunityPerson:')
  console.log(params)
  return request({
    url: '/iot/community/persons',
    method: 'delete',
    data: params
  })
}
