import React from 'react'
import Proptypes from 'prop-types'

class User extends React.Component {

  constructor(props) {
    super(props)
    this.state = {initialUsers: this.props.users, users:[]}
  }

  //最初は全部を表示しておく
  componentDidMount() {
   this.setState({users: this.state.initialUsers})
  }

  //検索のメソッドをここで用意しておく
  searchByName(name) {
   const result = this.state.initialUsers.filter((user) => {
    return user.name.toLowerCase().search( name.toLowerCase()) !== -1;
   })
   this.setState({users: result})
  }

/*
  ページ全体のrenderメソッド。
*/
  render() {
   return (
    <div class="search">
      <div class="chatapp-logo">
        <span style={{color:'blue'}}>C</span>
        <span style={{color:'red'}}>h</span>
        <span style={{color:'yellow'}}>a</span>
        <span style={{color:'blue'}}>t</span>
        <span style={{color:'green'}}>A</span>
        <span style={{color:'red'}}>p</span>
        <span style={{color:'yellow'}}>p</span>
      </div>
      <FilterForm search={(name) => this.searchByName(name)} />
      <SearchUserList users={this.state.users} />
    </div>
   )
  }
}

//検索フォームのコンポーネント
class FilterForm extends Component{
  //コンストラクタ。ここでは、検索値nameをstateとして持っておく
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  //検索のテキストボックスの中身が変更された時の処理。
 //stateに検索値を挿入しておく
  onChangeName(event) {
    this.setState({name : event.target.value})
  }

// 検索ボタンをクリックされた時の処理。
// Userのコンポーネントで渡されたsearchメソッドを実行することにより、
// Userコンポーネントのstateに、絞り込み後のタスク一覧を表示することができる
//  onClickSearch() {
//     this.props.search(this.state.name)
//   }

//検索フォームのrenderメソッド。
  render(){
    return(
    　<input type="text" class="search_form" value={this.state.name} name="name" onChange={(e) => this.onChangeName(e)} placeholder="ユーザー名で検索しよう" />
    )
  }
 }

 const SearchUserList = (props) => {
   return(
     <ul class="search_user_list">
      <li class="search_user_list_item">
        <div class="search_user_list_result">
          <img class="search_user_list_result_image" src="/assets/images/default_image.jpg">
          <span> {props.users.map((user, index)=>{
           return (
             <li key={index}> {user.name} </li>
           )}
           </span>
          // <SearchedUserName user={user} key={user.id} />)} </span>
        </div>
      </li>
     </ul>
   )
 }

 //SearchUserListコンポーネントが受け取るpropsを定義。
 //ここではユーザー一覧を受け取ることができるように定義しておく。
 // SearchUserList.propTypes = {
 //   users: PropTypes.array.isRequired
 // }

 // const SearchedUserName = (props)=> {
 //   const {name} = props.user
 //   return {name}
 // }
export default User
