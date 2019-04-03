// actions/messages.js
// メッセージをDBから取得するように要求。（api通信）
import request from 'superagent' //
import Dispatcher from '../dispatcher'
import {ActionTypes, APIEndpoints, CSRFToken} from '../constants/app'

export default {
  changeOpenChat(newUserID) {
    Dispatcher.handleViewAction({
      type: ActionTypes.UPDATE_OPEN_CHAT_ID, // 変更箇所
      userID: newUserID,
    })
  },
  // 追記
  // sendMessage(userID, message) { // sendMessageの名前を変えるなら、replayBox.jsの
    // MessagesAction.sendMessage->MessageAction.postMessageにかえる★
    // Dispatcher.handleViewAction({
      // type: ActionTypes.SEND_MESSAGE, // ここなどの定数関数をどうするか
      // userID: userID,
      // message: message,
      // timestamp: +new Date(),
    // })
  // },

// getの場合
  getMessages() {
    return new Promise((resolve, reject) => {
      request
      .get('/api/messages')
      .end((error, res) => {
        if (!error && res.status === 200) { // 200はアクセスが成功した際のステータスコードです。
          const json = JSON.parse(res.text)
          Dispatcher.handleServerAction({
            type: ActionTypes.GET_MESSAGES,
            json, // json: jsonと同じ。keyとvalueが一致する場合、このように省略出来ます。
          })
          resolve(json)
        } else {
          reject(res)
        }
      }) //
    })
  }, // 続く場合,がいる

// postの場合 // api/messages#create
  sendMessage(content) {       // userと紐付けをした後に（）内をuserIDに変えていく？
    return new Promise((resolve, reject) => {
      request
      .post(APIEndpoints.MESSAGES) // 後ほど説明します。
      .set('X-CSRF-Token', CSRFToken()) // 後ほど説明します。
      .send({content}) // ??これによりサーバ側に送りたいデータを送ることが出来ます。
                       // ユーザーと紐づけた後に変更？
      .end((error, res) => {
        if (!error && res.status === 200) {
          const json = JSON.parse(res.text)
          Dispatcher.handleServerAction({
            type: ActionTypes.SEND_MESSAGE,
            // userId,
            // <-紐付けた後？
            json,
          })
        } else {
          reject(res)
        }
      })
    })
  },
}

// saveの場合
  // Message(content) {
      // return new Promise((resolve, reject) => {
        // request
        // .post(APIEndpoints.MESSAGES)
        // .set('X-CSRF-Token', CSRFToken())
        // .send({content})
        // .end((error, res) => {
          // if (!error && res.status === 200) {
            // const json = JSON.parse(res.text)
            // Dispatcher.handleServerAction({
              // type: ActionTypes.SAVE_MESSAGE,
              // json,
            // })
          // } else {
            // reject(res)
          // }
        // })
      // })
    // },
  // }
