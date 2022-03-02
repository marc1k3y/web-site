import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import { store } from "./store/index"
import App from "./App"
import { Provider } from "react-redux"

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root"))