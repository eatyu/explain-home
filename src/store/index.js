
import { createStore } from 'redux'
import rootReducer from './reducers'

import todoApp from './laarn_reducers'

const store = createStore(todoApp)
export default store