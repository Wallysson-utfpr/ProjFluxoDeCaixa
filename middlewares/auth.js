// 
const Cookies = require('js-cookie')

const CookiesLogin = {
  isLogged : () => {
    const token = Cookies.get('token')
    return token ? true : false
  },
  doLogin : (token, rememberPassword) => {
    if(rememberPassword) {
      Cookies.set('token', token, {expires: 999})
    } else {
      Cookies.set('token', 'token')
    }
  },
   getToken : () => {
    return Cookies.get('token')
  },
  doLogout: () => {
    Cookies.remove('token')
 }
}
module.exports = CookiesLogin