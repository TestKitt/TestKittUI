const request = require('superagent')

export default {
  get: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .set('Accept', 'application/json')
        .set('Content-Type: application/json')
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
        .set('Accept', 'application/json')
        .set('Content-Type: application/json')
        .send(payload)
        .end(function (err, res) {
          if (err || !res.ok) {
            reject(res.body)
          } else {
            resolve(res.body)
          }
        })
    })
  },
  patch: (url, payload) => {
    return new Promise((resolve, reject) => {
      request
        .patch(url)
        .set('Accept', 'application/json')
        .set('Content-Type: application/json')
        .send(payload)
        .end(function (err, res) {
          if (err || !res.ok) {
            reject(res.body)
          } else {
            resolve(res.body)
          }
        })
    })
  },
  remove: (url, payload) => {
    return new Promise((resolve, reject) => {
      request
        .del(url)
        .set('Accept', 'application/json')
        .set('Content-Type: application/json')
        .send(payload)
        .end(function (err, res) {
          if (err || !res.ok) {
            reject(res.body)
          } else {
            resolve(res.body)
          }
        })
    })
  }
}
