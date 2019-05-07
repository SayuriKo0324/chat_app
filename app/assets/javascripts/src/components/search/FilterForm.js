import React from 'react'
// import PropTypes from 'prop-types'

class FilterForm extends React.Component {
  // コンストラクタ。ここでは、検索値nameをstateとして持っておく
  constructor(props) {
    super(props)
    this.state = {name: ''}
  }
 // 検索のテキストボックスの中身が変更された時の処理。
 // stateに検索値を挿入しておく
  onChangeName(event) {
    this.setState({name: event.target.value})
  }

// 検索ボタンをクリックされた時の処理。
// Userのコンポーネントで渡されたsearchメソッドを実行することにより、
// Userコンポーネントのstateに、絞り込み後のタスク一覧を表示することができる
//  onClickSearch() {
//     this.props.search(this.state.name)
//   }

// 検索フォームのrenderメソッド。
  render() {
    return (
    <input type='text' className='search_form' value={this.state.name} name='name' onChange={(e) => this.onChangeName(e)} placeholder='ユーザー名で検索しよう' />
    )
  }
 }

// const SearchUserList = (props) => {
//   return (
//     <div>
//      <ul className='search_user_list'>
//       <li className='search_user_list_item'>
//         <div className='search_user_list_result'>
//           <img className='search_user_list_result_image' src='/assets/images/default_image.jpg' />;
//           {props.users.map((user, index) => {
//             return (
//              <li key={index}> {user.name} </li>
//            )
//           })}
//         </div>
//       </li>
//      </ul>
//     </div>
//    )
// }

export default FilterForm
