import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { type UserInterface } from '../interfaces/interfaces'

/* userSlice. We use this slice only to store the list of users.
 * The filtering will be done in the UserList component with the useState hook.
 */

// Define a type for the slice state
interface UserListState {
  users: UserInterface[]
  fetchIsDone: boolean
}

// Define the initial state using that type
const initialState: UserListState = {
  users: [],
  fetchIsDone: false
}

export const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserInterface[]>) => {
      state.users = action.payload
    },
    clearUsers: (state) => {
      state.users = []
    },
    // This is used in case there are no users to know if the fetch is yet to be done or the API returned an empty array
    setFetchIsDone: (state) => {
      state.fetchIsDone = true
    }
  }
})

export const { setUsers, clearUsers, setFetchIsDone } = userSlice.actions

export const selectUserList = (state: RootState) => state.userList.users
export const selectFetchIdDone = (state: RootState) =>
  state.userList.fetchIsDone

export default userSlice.reducer
