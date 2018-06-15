import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import reducer from "./reducers"
import sagas from "./sagas"


const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore);
const store = createStoreWithMiddleware(reducer)

sagaMiddleware.run(sagas)

export default store