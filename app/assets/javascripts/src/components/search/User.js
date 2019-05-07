import React from 'react'
import FilterForm from './FilterForm'
import PropTypes from 'prop-types'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {initialUsers: this.initialState, users: []}
  }

  get initialState() {
    return {
      value: '',
    }
  }

  // 最初は全部を表示しておく
  // componentDidMount() {
  //   this.setState({users: this.state.initialUsers})
  // }

  // 検索のメソッドをここで用意しておく
  searchByName(name) {
    const result = this.state.initialUsers.filter((user) => {
      return user.name.toLowerCase().search(name.toLowerCase()) !== -1
    })
    this.setState({users: result})
  }

  // ページ全体のrenderメソッド
  render() {
    return (
    <div className='search'>
      <div className='chatapp-logo'>
        <span className='google' style={{color: 'blue'}}>C</span>
        <span className='google' style={{color: 'red'}}>h</span>
        <span className='google' style={{color: 'yellow'}}>a</span>
        <span className='google' style={{color: 'blue'}}>t</span>
        <span className='google' style={{color: 'green'}}>A</span>
        <span className='google' style={{color: 'red'}}>p</span>
        <span className='google' style={{color: 'yellow'}}>p</span>
      </div>
      <FilterForm search={(name) => this.searchByName(name)} />
      <SearchUserList users={this.state.users} />
    </div>
   )
  }
}

const SearchUserList = (props) => {
  return (
    <div>
     <ul className='search_user_list'>
      <li className='search_user_list_item'>
        <div className='search_user_list_result'>
          <img className='search_user_list_result_image' src='/assets/images/default_image.jpg' />;
          // {console.log(props)}
          {props.users.map((user, index) => {
            return (
             <li key={index}> {user.name} </li>
           )
          })}
        </div>
      </li>
     </ul>
    </div>
   )
}

 // <SearchedUserName user={user} key={user.id} />)} </span>
 // SearchUserListコンポーネントが受け取るpropsを定義。
 // ここではユーザー一覧を受け取ることができるように定義しておく。
SearchUserList.propTypes = {
  users: PropTypes.array.isRequired,
}
export default User
