import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import { UserInterface } from "../../interfaces/User"

/* userSlice. We use this slice only to store the list of users.
 * The filtering will be done in the UserList component with the useState hook.
 */

// Define a type for the slice state
interface UserListState {
  value: UserInterface[]
}

// Define the initial state using that type
const initialState: UserListState = {
  value: [],
}

export const userSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserInterface[]>) => {
      state.value = action.payload
    },
    clearUsers: (state) => {
      state.value = []
    },
  },
})

export const { setUsers } = userSlice.actions

export const selectUserList = (state: RootState) => state.userList.value

export default userSlice.reducer
