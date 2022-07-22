import request from '../utils/request'
// 登录的接口
const Login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}
// 侧边栏的接口
const Postgetinfo = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}
// 调用退出登录的接口
const Logout = () => {
  return request({
    url: '/admin/logout',
    method: 'POST'
  })
}
export default {
  Login,
  Postgetinfo,
  Logout
}
