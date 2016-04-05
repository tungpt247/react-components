import '../stylesheets/index.scss'

import React from 'react'
import ReactDom from 'react-dom'
import {Alert} from '../src/components'

ReactDom.render(
    <Alert type="warning">
      <h4>Heading</h4>
      <strong>Error:</strong> You need to take action, something has gone terribly wrong!
    </Alert>
, document.getElementById('root'))
