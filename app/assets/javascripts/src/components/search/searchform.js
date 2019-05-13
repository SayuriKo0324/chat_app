// import React from 'react'
// import User from './User'
// // import MessagesStore from '../../stores/messages'
//
// class Searchform extends React.Component {
//
//   render() {
//     return (
//         <div className='searchform'>
//           <User />
//         </div>
//       )
//   }
// }
//
// export default Searchform

import React from 'react'
import User from './User'
import UsersAction from '../../actions/users'

export default class Searchform extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return {
      searchString: '',
    }
  }

  handleChange(e) {
    this.setState({
      searchString: e.target.value,
    })
    UsersAction.postUser(this.state.searchString)
  }

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
        <input className='search_form'
                 type='text'
                 value={ this.state.searchString }
                 onChange={this.handleChange.bind(this)}
                 placeholder='ユーザー名で検索しよう'
          />
          <User {...this.state} />
      </div>
   )
  }
}
