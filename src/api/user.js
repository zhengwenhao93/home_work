import request from '../utils/request'

const Login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}
const Postgetinfo = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}
export default {
  Login,
  Postgetinfo
}
