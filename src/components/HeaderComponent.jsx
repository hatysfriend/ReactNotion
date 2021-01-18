import React, { Component } from 'react'
import '../styles/pageHeader.css'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className='pageHeader'>
        <div className='backBtnHeader' >↩</div>
        <div className='forwardBtnHeader'>↪</div>
        <div className='shareBtnHeader'>share</div>
        <div className='updateBtnHeader'>update</div>
        <div className='settingsBtnHeader'>...</div>
      </div>
    )
  }
}
