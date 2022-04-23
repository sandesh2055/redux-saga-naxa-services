import {createStore, applyMiddleware } from 'redux'
import reducers from "./reducer/index"
import serviceSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
sagaMiddleware.run(serviceSaga)

export default store

 
