// import {ActionTypes} from '../constants/app'
import Dispatcher from '../dispatcher'
import BaseStore from '../base/store'

// const UserStore = {
//   user: {
//     id: 1,
//     name: 'John Doek',
//     profilePicture: 'https://avatars1.githubusercontent.com/u/8901351?v=3&s=200',
//   },
// }

class UsersStore extends BaseStore {

  getUsers() {
    if (!this.get('userJson')) this.setUsers([])
    return this.get('userJson')
  }
  setUsers(array) {
    this.set('userJson', array)
  }
}

const UserStore = new UsersStore()

UserStore.dispatcherToken = Dispatcher.register(payload => {
  const action = payload.action
  switch (action.type) {
    // case 'loadUsers':
    //   UserStore.setUsers(action.json)
    //   UserStore.emitChange()
    //   break
    //
    // case 'loadSearchUsers':
    //   UserStore.setUsers(action.json)
    //   UserStore.emitChange()
    //   break

    case 'postUser':
      UserStore.setUsers(action.json)
      UserStore.emitChange()
      break
    default:
  }

  return true
})

export default UserStore
