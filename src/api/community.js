import request from '@/utils/request'

export function getCommunityPersons(params) {
  return request({
    url: '/communityPerson',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function addCommunityPerson(data) {
  return request({
    url: '/communityPerson',
    method: 'post',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function deleteCommunityPerson(data) {
  return request({
    url: '/communityPerson',
    method: 'delete',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function getParkingLots(params) {
  return request({
    url: '/parkingLot',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function addParkingLot(data) {
  return request({
    url: '/parkingLot',
    method: 'post',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function deleteParkingLot(data) {
  return request({
    url: '/parkingLot',
    method: 'delete',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function getParkingSpaces(params) {
  return request({
    url: '/parkingSpace',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function addParkingSpace(data) {
  return request({
    url: '/parkingSpace',
    method: 'post',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function deleteParkingSpace(data) {
  return request({
    url: '/parkingSpace',
    method: 'delete',
    data,
    baseURL: 'http://localhost:8080'
  })
}

export function getCars(params) {
  return request({
    url: '/communityCar',
    method: 'get',
    params,
    baseURL: 'http://localhost:8080'
  })
}

export function deleteCar(data) {
  return request({
    url: '/communityCar',
    method: 'delete',
    data,
    baseURL: 'http://localhost:8080'
  })
}
