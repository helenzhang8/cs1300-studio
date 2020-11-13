import React, {Component} from 'react'

import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo'
import {FormControl,Input,Button,List,ListItem,ListItemText,ListItemIcon,Card} from '@material-ui/core'

import getRandomFruitsName from 'random-fruits-name'

var randomColor = require('randomcolor');
const fruit = require('random-fruits-name')
const joke = require('awesome-dev-jokes')
const { getEmoji, getAllEmoji, getThemes } = require('random-text-meme')

class ReactItem extends Component { 
  constructor() {
    super()
    this.state ={
      color: 'gray',
      emotions: [],
      fruit: [getRandomFruitsName()]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      emotions: [getEmoji()],
      color: randomColor()
    })
  }

  render(){
    return(
      <div class="listitem" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
        <h2>{this.state.fruit}</h2>
        <h2>{this.state.emotions}</h2>
      </div>
    )
  }
}

export default ReactItem
