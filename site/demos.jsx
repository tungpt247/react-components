import React, { Component } from 'react'
import {AlertDemo} from './components/Alert'
import {PaginationDemo} from './components/Pagination'
import {ProgressDemo} from './components/Progress'
import {SliderDemo} from './components/Slider'

export class AppDemo extends Component {

  render() {
    return(
      <div>
      <AlertDemo />
      <PaginationDemo />
      <ProgressDemo />
      <SliderDemo />
      </div>
    )
  }
}
