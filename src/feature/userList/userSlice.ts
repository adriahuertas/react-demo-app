import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import { UserInterface } from "../../interfaces/User"

/* userSlice. We use this slice only to store the list of users.
 * The filtering will be done in the UserList component with the useState hook.
 */

// Define a type for the slice state
interface UserListState {
  users: UserInterface[]
}

// Define the initial state using that type
const initialState: UserListState = {
  users: [],
}

export const userSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserInterface[]>) => {
      state.users = action.payload
    },
    clearUsers: (state) => {
      state.users = []
    },
  },
})

export const { setUsers, clearUsers } = userSlice.actions

export const selectUserList = (state: RootState) => state.userList.users

export default userSlice.reducer
