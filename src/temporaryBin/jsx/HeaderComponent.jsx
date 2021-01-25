import React, { Component } from 'react'
import '../styles/pageHeader.css'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className='pageHeader'>
        <div className='backBtnHeader' >↩</div>
        <div className='forwardBtnHeader'>↪</div>
        <div className='shareBtnHeader'>Share</div>
        <div className='updateBtnHeader'>Updates</div>
        <div className='settingsBtnHeader'>...</div>
      </div>
    )
  }
}
