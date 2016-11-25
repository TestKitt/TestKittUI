const request = require('superagent')

export default {
  get: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end(function (err, res) {
          if (err || !res.ok) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },
  post: (url, payload) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(payload)
        .end(function (err, res) {
          if (err || !res.ok) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  }
}
