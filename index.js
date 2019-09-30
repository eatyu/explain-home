import React from "react";
import ReactDOM from "react-dom";

import Item from "@/src/components/Item"
import {Provider} from "react-redux"
import store from '@/src/store'
import ItemHome from "@components/ItemHome"

ReactDOM.render(
    <Provider store={store}>
        <ItemHome />
    </Provider>
        ,
  document.getElementById("app")
);