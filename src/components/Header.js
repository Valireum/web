import React, { Component } from 'react'
import './HeaderStyle.css'


export class Header extends Component {
  render() {
    return (
      <div className='header-img'>
          <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default Header