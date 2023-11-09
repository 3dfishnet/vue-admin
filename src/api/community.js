import request from '@/utils/request'

export function getCommunityPersons(params) {
  return request({
    url: '/communityPerson',
    method: 'get',
    params
  })
}

export function addCommunityPerson(data) {
  return request({
    url: '/communityPerson',
    method: 'post',
    data
  })
}

export function deleteCommunityPerson(data) {
  return request({
    url: '/communityPerson',
    method: 'delete',
    data
  })
}

export function getParkingLots(params) {
  return request({
    url: '/parkingLot',
    method: 'get',
    params
  })
}

export function addParkingLot(data) {
  return request({
    url: '/parkingLot',
    method: 'post',
    data
  })
}

export function deleteParkingLot(data) {
  return request({
    url: '/parkingLot',
    method: 'delete',
    data
  })
}

export function getParkingSpaces(params) {
  return request({
    url: '/parkingSpace',
    method: 'get',
    params
  })
}

export function addParkingSpace(data) {
  return request({
    url: '/parkingSpace',
    method: 'post',
    data
  })
}

export function deleteParkingSpace(data) {
  return request({
    url: '/parkingSpace',
    method: 'delete',
    data
  })
}

export function getCars(params) {
  return request({
    url: '/communityCar',
    method: 'get',
    params
  })
}

export function deleteCar(data) {
  return request({
    url: '/communityCar',
    method: 'delete',
    data
  })
}
