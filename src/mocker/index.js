const Qs = require('qs')
const data = require('./data/index')

const proxy = {
  'GET user': (req, res) => {
    const user = Qs.parse(req._parsedUrl.query)
    const { userName, password } = user
    if (userName === 18835953044 + '' && password === '666666') {
      res.json(data.userData.suc)
    } else {
      res.json(data.userData.err)
    }
  },
  'GET homeBanner': (req, res) => {
    const { cookie } = req.headers
    if (decodeURIComponent(cookie).indexOf('token') >= 0) {
      res.json(data.homeBanner.suc)
    } else {
      res.json(data.homeBanner.err)
    }
  }
}

for (const key in proxy) {
  if (proxy.hasOwnProperty(key)) {
    if (key.startsWith('GET')) {
      proxy[key.replace('GET ', 'GET /my_api/')] = proxy[key]
      delete proxy[key]
    }
  }
}

module.exports = proxy
