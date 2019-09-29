import React from "react";
import ReactDOM from "react-dom";

import Item from "@/src/components/Item"
import {Provider} from "react-redux"
import store from '@/src/store'

ReactDOM.render(
    <Provider store={store}>
        <Item />
    </Provider>
        ,
  document.getElementById("app")
);