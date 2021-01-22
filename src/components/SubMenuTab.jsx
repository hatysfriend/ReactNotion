import React, { Component } from 'react'

export default class SubMenuTab extends Component {
  state = {
    on:false,
  }

  toggle = () => {
    this.setState({
      on: !(this.state.on)
    });
  }

  render() {
    const { children, item } = this.props;
    return (
      children({
        on: this.state.on,
        toggle: this.toggle,
        itemObj: item,
      })
    );
    
  }
}
