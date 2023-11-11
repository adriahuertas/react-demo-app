import { configureStore } from '@reduxjs/toolkit'

import userListReducer from './reducers/userListReducer'
import errorReducer from './reducers/errorReducer'
import loggedUserReducer from './reducers/loggedUserReducer'

const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    userList: userListReducer,
    error: errorReducer
  }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
