import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
export default class ChromeBoisDomain extends Component {
  handleMouseMove = (event) => {
    const x = event.clientX
    const y = event.clientY
    drawChromeBoiAtCoords(x,y)
  }
  handleToggleCycling = () => {
    toggleCycling()
  }
  handleResize = (event) => {
    if (event.key === 'a') {resize('+')}
    if (event.key === 's') {resize('-')}
  }
  render() {
    return (
      <canvas
        onKeyDown={this.handleResize}
        onClick={this.handleToggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}

