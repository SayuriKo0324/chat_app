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
        <div className='searchform'>
          <ul className='search_user_list'>
            <li className='search_user_list_item'>
              <div className='search_user_list_result'>
                <img className='search_user_list_result_image' src='/assets/images/default_image.jpg' />;
                <input type='text'
                 value={ this.state.searchString }
                 onChange={this.handleChange.bind(this)}
                 placeholder='ユーザー名で検索しよう'
                />
                <User {...this.state} />
              </div>
            </li>
          </ul>
        </div>
      </div>
   )
  }
}
