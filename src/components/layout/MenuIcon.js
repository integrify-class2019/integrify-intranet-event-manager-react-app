import React, { Component } from 'react';


class MenuIcon extends Component {

  handleClick(){
    const wrapper = document.querySelector('#wrapper');
    wrapper.classList.toggle('is-nav-open')
  }
  render() {
    return (
      <div id="wrapper" className="wrapper">
        <div className="nav">
          <div className="nav-Icon" onClick={()=>this.handleClick()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuIcon;
