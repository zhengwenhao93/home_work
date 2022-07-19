import request from '../utils/request'

const Login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}

const Postgetinfo = (params) => {
  return request.post(`/admin/getinfo?token=${params}`, params);
};
export default {
  Login,
  Postgetinfo
}
