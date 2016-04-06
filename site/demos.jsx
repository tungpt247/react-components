import React, { Component } from 'react'
import {AlertDemo} from './components/Alert'
import {PaginationDemo} from './components/Pagination'
import {ProgressDemo} from './components/Progress'

export class AppDemo extends Component {

  render() {
    return(
      <div>
      <AlertDemo />
      <PaginationDemo />
      <ProgressDemo />
      </div>
    )
  }
}
