import React, { Component } from 'react'
import {AlertDemo} from './components/Alert'
import {PaginationDemo} from './components/Pagination'

export class AppDemo extends Component {

  render() {
    return(
      <div>
      <AlertDemo />
      <PaginationDemo />
      </div>
    )
  }
}
