import {
  createSlice,
  combineReducers,
  configureStore,
  PayloadAction
} from '@reduxjs/toolkit'

interface ITask {
  id: number
  state: number
  title: string
}

interface IState {
  state: number
  inputValue: string
  taskList: ITask[]
}

const initialState: IState = {
  state: 0,
  inputValue: '',
  taskList: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setState (state, action) {
      state.state = action.payload
    },
    setInputValue (state, action) {
      state.inputValue = action.payload
    },
    createTask (state, action: PayloadAction<string>) {
      state.taskList.push({
        id: Date.now(),
        state: 0,
        title: action.payload
      })
    },
    deleteTask (state, action) {
      const index = state.taskList.findIndex(v => v.id === action.payload)
      state.taskList.splice(index, 1)
    },
    completeTask (state, action) {
      const index = state.taskList.findIndex(v => v.id === action.payload)
      state.taskList[index].state = 1
    }
  },
})

const rootReducer = combineReducers({
  todo: todoSlice.reducer
})

export const {
  setState,
  setInputValue,
  createTask,
  deleteTask,
  completeTask,
} = todoSlice.actions
export const store = configureStore({ reducer: rootReducer })
