import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

/* loggedUser. We use this slice to manage the logged user
 */

// Define a type for the slice state
interface loggedUserState {
  token: string
  email: string
  loggedWithGithub?: boolean
}

// Define the initial state using that type
const initialState: loggedUserState = {
  token: '',
  email: '',
  loggedWithGithub: false
}

export const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<loggedUserState>) => {
      state.token = action.payload.token
      state.email = action.payload.email
    },
    clearUser: (state) => {
      state.token = ''
      state.email = ''
    },
    initializeUser: (state) => {
      const loggedUser = localStorage.getItem('loggedUser')
      if (loggedUser !== null) {
        state.token = JSON.parse(loggedUser).token
        state.email = JSON.parse(loggedUser).email
      }
    },
    setLoggedWithGithub: (state) => {
      state.loggedWithGithub = true
    },
    clearLoggedWithGithub: (state) => {
      state.loggedWithGithub = false
    }
  }
})

export const {
  setUser,
  clearUser,
  initializeUser,
  setLoggedWithGithub,
  clearLoggedWithGithub
} = loggedUserSlice.actions

export const selectUserEmail = (state: RootState) => state.loggedUser.email
export const selectUserToken = (state: RootState) => state.loggedUser.token
export const selectUserLoggedWithGithub = (state: RootState) =>
  state.loggedUser.loggedWithGithub

export default loggedUserSlice.reducer
