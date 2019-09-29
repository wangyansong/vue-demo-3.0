import request from '@/utils/request'

export function login (id) {
  return request({
    url: '/account/getAccountPermission',
    method: 'get',
    params: { id }
  })
}

export function submit (id) {
  return request({
    url: '/account/getARMFById',
    method: 'get',
    params: { id }
  })
}
