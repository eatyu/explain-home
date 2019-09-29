import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import Instagram from './src/pages/index.js'
import RollerList from './src/pages/mypages/index.js'
import App from '@/src/components/App'
import store from './src/store'

ReactDOM.render(
   <Provider store={store}>
    {/*<RollerList value={1} />*/}
    <App />
  </Provider>,
  document.getElementById("app")
);