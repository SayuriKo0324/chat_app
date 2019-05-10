import React from 'react'
import _ from 'lodash'
import UserStore from '../../stores/user'
// import Utils from '../../utils'

export default class User extends React.Component {
  static get propTypes() {
    return {
      searchString: React.PropTypes.string,
    }
  }

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return this.getStateFromStore()
  }

  getStateFromStore() {
     return {users: UserStore.getUsers()}
   }

  componentDidMount() {
    UserStore.onChange(this.onStoreChange.bind(this))
  }

  componentWillUnmount() {
    UserStore.offChange(this.onStoreChange.bind(this))
  }

  onStoreChange() {
    this.setState(this.getStateFromStore())
  }

  render() {
    const {users} = this.state
    const {searchString} = this.props
    console.log(this.state)
    console.log(this.props)

    let allUsers = users
    const searchUser = searchString
    // const searchUser = searchString.trim().toLowerCase()

    if (searchUser.length > 0) {
      allUsers = _.filter(allUsers, (user) => {
        return user.name.toLowerCase().match(searchUser)
      })
    }
    return (
      <ul className='search_list'>
        {
          _.map(allUsers, (user) => {
            return (
              <div key={user.id}>
                <li>
                  <form action='/' method='get' >
                  <input name='user_id' key={user.id} type='hidden' />
                  <input value={user.name} />
                  </form>
                </li>
              </div>
            )
          })
        }
      </ul>
    )
  }
}
