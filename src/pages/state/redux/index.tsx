import { Provider, useSelector, useDispatch } from 'react-redux'
import {
  Input,
  Button,
  Radio,
  List,
} from 'antd'
import {
  store,
  setState,
  setInputValue,
  createTask,
  completeTask,
  deleteTask
} from './store'
import Task from './components/Task'
import './index.less'

const TodoList = () => {
  const state = useSelector((state: any) => state.todo.state)
  const inputValue = useSelector((state: any) => state.todo.inputValue)
  const taskList = useSelector((state: any) => state.todo.taskList)
  const dispatch = useDispatch()

  const renderList = () => {
    const data = taskList.filter((v: any) => v.state === state)
    return (
      <List
        bordered
        dataSource={data}
        style={{backgroundColor: '#fff'}}
        renderItem={(item: any) => (
          <List.Item>
            <Task
              title={item.title}
              state={item.state}
              onComplete={() => {dispatch(completeTask(item.id))}}
              onDelete={() => {dispatch(deleteTask(item.id))}}
            />
          </List.Item>
        )}
      />
    )
  }

  return (
    <div className="todolist-container">
      <Input.Group>
        <Input
          style={{width: 'calc(100% - 64px)'}}
          value={inputValue}
          onChange={(e) => {
            dispatch(setInputValue(e.target.value))
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            dispatch(createTask(inputValue))
            dispatch(setInputValue(''))
          }}
        >添加</Button>
      </Input.Group>

      <Radio.Group
        onChange={(e) => { dispatch(setState(e.target.value)) }}
        value={state}
        style={{margin: '10px 0'}}
      >
        <Radio.Button value={0}>未开始</Radio.Button>
        <Radio.Button value={1}>已完成</Radio.Button>
      </Radio.Group>

      {renderList()}
    </div>
  )
}

const TodoApp = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}

export default TodoApp
