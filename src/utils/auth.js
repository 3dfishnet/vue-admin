import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  const tk = Cookies.get(TokenKey)
  console.log('inner getToken:')
  console.log(typeof tk)
  console.log(tk)
  return tk
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
