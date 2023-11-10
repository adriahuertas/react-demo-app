import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

/* errorSlice. We use this slice to manage the error message
 * that will be displayed in the Error component.
 */

// Define a type for the slice state
interface ErrorState {
  message: string
}

// Define the initial state using that type
const initialState: ErrorState = {
  message: ''
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    clearMessage: (state) => {
      state.message = ''
    }
  }
})

export const { setMessage, clearMessage } = errorSlice.actions

export const selectError = (state: RootState) => state.error.message

export default errorSlice.reducer
