import { configureStore } from '@reduxjs/toolkit'
import youhubReducer from '../features/counter/youhubSlice'
export const store = configureStore({
  reducer: {
    youhub:youhubReducer
  },
})

export default store