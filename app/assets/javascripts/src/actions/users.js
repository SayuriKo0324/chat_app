import request from 'superagent'
import Dispatcher from '../dispatcher'
import {APIEndpoints, CSRFToken} from '../constants/app'

export default {
  loadUsers() {
    return new Promise((resolve, reject) => {
      request
      .get(`${APIEndpoints.USERS}`)
      .end((error, res) => {
        if (!error && res.status === 200) {
          const json = JSON.parse(res.text)
          Dispatcher.handleServerAction({
            type: 'loadUsers',
            json: json,
          })
          resolve(json)
        } else {
          reject(res)
        }
      })
    })
  },

  loadSearchUsers() {
    return new Promise((resolve, reject) => {
      request
      .get(`${APIEndpoints.USERS}/search`)
      .end((error, res) => {
        if (!error && res.status === 200) {
          const json = JSON.parse(res.text)
          Dispatcher.handleServerAction({
            type: 'loadSearchUsers',
            json: json,
          })
          resolve(json)
        } else {
          reject(res)
        }
      })
    })
  },

  postUser(user_name) {
    return new Promise((resolve, reject) => {
      request
      .post(`${APIEndpoints.USERS}/search`) // 後ほど説明します。
      .set('X-CSRF-Token', CSRFToken()) // 後ほど説明します。
      .send({user_name: user_name}) // これによりサーバ側に送りたいデータを送ることが出来ます。
      .end((error, res) => {
        if (!error && res.status === 200) {
          const json = JSON.parse(res.text)
          Dispatcher.handleServerAction({
            type: 'postUser',
            json,
          })
        } else {
          reject(res)
        }
      })
    })
  },
}
