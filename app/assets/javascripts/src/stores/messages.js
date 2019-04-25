// ディスパッチャーからメッセージストアへデータが渡される
// 過去のメッセージログの配列の最後にJSONを加え、componentへ渡す
// メッセージにまつわるデータがdispatcherからきちんとメッセージストアに届くのは、
// ActionTypesで定数管理を行い、
// そこから定数であるGET_MESSAGESなどを呼び出しているため
import Dispatcher from '../dispatcher'  // ?
import BaseStore from '../base/store'  // ?
import UserStore from '../stores/user' // ユーザー機能入れてから
import {ActionTypes} from '../constants/app'

// ゲッター・セッター

const messages = {
  2: {
    user: {
      profilePicture: 'https://avatars0.githubusercontent.com/u/7922109?v=3&s=460',
      id: 2,
      name: 'Ryan Clark',
      status: 'online',
    },
    lastAccess: {
      recipient: 1424469794050,
      currentUser: 1424469794080,
    },
    messages: [
      {
        contents: 'Hey!',
        from: 2,
        timestamp: 1424469793023,
      },
      {
        contents: 'Hey, what\'s up?',
        from: 1,
        timestamp: 1424469794000,
      },
    ],
  },
  3: {
    user: {
      read: true,
      profilePicture: 'https://avatars3.githubusercontent.com/u/2955483?v=3&s=460',
      name: 'Jilles Soeters',
      id: 3,
      status: 'online',
    },
    lastAccess: {
      recipient: 1424352522000,
      currentUser: 1424352522080,
    },
    messages: [
      {
        contents: 'Want a game of ping pong?',
        from: 3,
        timestamp: 1424352522000,
      },
    ],
  },
  4: {
    user: {
      name: 'Todd Motto',
      id: 4,
      profilePicture: 'https://avatars1.githubusercontent.com/u/1655968?v=3&s=460',
      status: 'online',
    },
    lastAccess: {
      recipient: 1424423579000,
      currentUser: 1424423574000,
    },
    messages: [
      {
        contents: 'Please follow me on twitter I\'ll pay you',
        timestamp: 1424423579000,
        from: 4,
      },
    ],
  },
}

var openChatID = parseInt(Object.keys(messages)[0], 10)// ?

class ChatStore extends BaseStore {
  getOpenChatUserID() {
    return openChatID
  }
  getChatByUserID(id) {
    return messages[id]
  }
  getAllChats() { //
    return messages
  }
  getChat() {
    if (!this.get('chatJson')) this.setChat([])
    return this.get('chatJson')
  }
  setChat(array) {
    this.set('chatJson', array)
  }
 }

const MessagesStore = new ChatStore()
MessagesStore.dispatchToken = Dispatcher.register(payload => {
  const action = payload.action
  // payloadはメッセージデータとしてオブジェクトを用意し、
  // キーとしてユーザID、そして値にはユーザに関する様々なデータを入れています。
  switch (action.type) {
    case ActionTypes.UPDATE_OPEN_CHAT_ID:
      openChatID = payload.action.userID
      messages[openChatID].lastAccess.currentUser = +new Date()
      MessagesStore.emitChange()
      break

    case ActionTypes.POST_MESSAGE:
      const userId = action.json.user_id
      const message = action.json.content
      messages[userId].messages.push({
        content: message,
        timestamp: action.timestamp,
        from: UserStore.user.id,
      })
      MessagesStore.emitChange()
      break

    case ActionTypes.GET_MESSAGES: // 上のapi通信で使用したgetHogeアクションを受け取っているとします。
      MessagesStore.setChat(action.json) // getHogeで取得したjsonをセッターを利用して保存しています。
      MessagesStore.emitChange()
      break

    // case ActionTypes.SEND_MESSAGE:
    //   const userID = action.userID  // たぶん
    //   const messages = MessagesStore.getChat() // userに関すること
    //   messages[userID].push( //
    //     action.json.message
    //     )
    //   MessagesStore.emitChange()
    //   break
  }
  return true
})

export default MessagesStore
