import React from 'react'
import Proptypes from 'prop-types'

class User extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return this.getStateFromStore()
  }


  //検索のメソッドをここで用意しておく
searchByName(name) {
  const result = this.state.initialState.filter((user) => {
    return user.name.toLowerCase().search( name.toLowerCase()) !== -1;
  })
  this.setState({users: result}) this.state
}
/*
  ページ全体のrenderメソッド。
*/
render() {
  return (
    <div>
      <h1>
        <span style={{color:'blue'}}>C</span>
        <span style={{color:'red'}}>h</span>
        <span style={{color:'yellow'}}>a</span>
        <span style={{color:'blue'}}>t</span>
        <span style={{color:'green'}}>A</span>
        <span style={{color:'red'}}>p</span>
        <span style={{color:'yellow'}}>p</span>
      </h1>
      <FilterForm search={(name) => this.searchByName(name)} />
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

}
