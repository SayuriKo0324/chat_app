import React from 'react'
import User from './User'
// import MessagesStore from '../../stores/messages'

class Searchform extends React.Component {

  render() {
    return (
        <div className='searchform'>
          <Header />
          <User />
        </div>
      )
  }
}

export default Searchform