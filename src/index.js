import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import ConnectedApp from './Components/App'
import Store from './Commons/Store'

const root = document.getElementById("root")

ReactDom.render(
  <Provider store={Store}>
    <ConnectedApp />
  </Provider>,
  root
)
