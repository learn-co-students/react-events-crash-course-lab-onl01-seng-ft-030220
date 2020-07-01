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
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
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
// Finish implementing the handleMouseMove method. This method should capture the x and y coordinates of the mouse from the event and use them to invoke the drawChromeBoiAtCoords function that has been provided and is already imported (drawChromeBoiAtCoords expects two arguments, an x and a y coordinate)
// Add an event listener to the <canvas> element to capture a click. Create an event handler which, when fired, invokes the provided toggleCycling function (with no arguments)
// Add an event listener to the <canvas> element to capture when a key is pressed. When a key is pressed, an event handler should invoke the provided resize function with a single argument of either '+' or '-':
// If the key pressed was 'a', then it should invoke resize and pass in '+'.
// If the key pressed was 's', then it should invoke resize and pass in '-'.
// You'll only be able to register a Keyboard event if the canvas is in focus. So on load of the page, either click the canvas for press the tab key to test out this feature.