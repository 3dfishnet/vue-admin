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

export function addCommunityPerson(data) {
  console.log('addCommunityPerson:')
  console.log(data)
  return request({
    url: '/iot/community/persons',
    method: 'post',
    data
  })
}

export function deleteCommunityPerson(data) {
  console.log('deleteCommunityPerson:')
  console.log(data)
  return request({
    url: '/iot/community/persons',
    method: 'delete',
    data
  })
}

export function getParkingLots(params) {
  return request({
    url: '/iot/community/parkingLots',
    method: 'get',
    params
  })
}

export function addParkingLot(data) {
  return request({
    url: '/iot/community/parkingLots',
    method: 'post',
    data
  })
}

export function deleteParkingLot(data) {
  return request({
    url: '/iot/community/parkingLots',
    method: 'delete',
    data
  })
}

export function getParkingSpaces(params) {
  return request({
    url: '/iot/community/parkingSpaces',
    method: 'get',
    params
  })
}

export function addParkingSpace(data) {
  return request({
    url: '/iot/community/parkingSpaces',
    method: 'post',
    data
  })
}

export function deleteParkingSpace(data) {
  return request({
    url: '/iot/community/parkingSpaces',
    method: 'delete',
    data
  })
}

export function getCars(params) {
  return request({
    url: '/iot/community/Cars',
    method: 'get',
    params
  })
}

export function deleteCar(data) {
  return request({
    url: '/iot/community/Cars',
    method: 'delete',
    data
  })
}
