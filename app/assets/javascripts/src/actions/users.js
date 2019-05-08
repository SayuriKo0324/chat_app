import request from 'superagent'
import Dispatcher from '../dispatcher'
import {APIEndpoints} from '../constants/app'

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
}
