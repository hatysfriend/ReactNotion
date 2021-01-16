import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className='pageHeader'>
        <button className='backBtnHeader' >↩</button>
        <button className='forwardBtnHeader'>↪</button>
        <button className='shareBtnHeader'>share</button>
        <button className='updateBtnHeader'>update</button>
        <button className='settingsBtnHeader'>...</button>
      </div>
    )
  }
}
