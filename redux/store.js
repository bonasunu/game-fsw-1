import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import counterReducer from './reducers/counterReducer'
import { userRegisterReducer } from './reducers/userReducer'
import leaderboardReducer from './reducers/leaderboardReducer'
import { loginReducer } from './reducers/loginReducer'
import { profileReducer } from './reducers/profileReducer'
import { historyReducer } from './reducers/historyReducer'
import { editprofileReducer } from './reducers/editprofileReducer'

const reducer = combineReducers({
  counter: counterReducer,
  userRegister: userRegisterReducer,
  leaderBoard: leaderboardReducer,
  login: loginReducer,
  profileUser: profileReducer,
  historyProfile: historyReducer,
  editProfile: editprofileReducer,
})

const initialState = {}

const middleware = [thunk]

const makeStore = (context) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

export const wrapper = createWrapper(makeStore)
