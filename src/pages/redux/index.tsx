import { useState } from 'react'
import {
  Input,
  Button,
  Radio,
  List,
  RadioChangeEvent
} from 'antd'
import Task from './components/Task'
import './index.less'

interface ITask {
  id: number
  state: number
  title: string
}

const TodoList = () => {
  const [inputValue, setInputValue] = useState('')
  const [state, setState] = useState(0)
  const [taskList, setTaskList] = useState<ITask[]>([])

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }

  const handleAdd = () => {
    if (inputValue) {
      setTaskList((list) => {
        return [
          ...list,
          {
            id: Date.now(),
            state: 0,
            title: inputValue
          }
        ]
      })
      setInputValue('')
    }
  }

  const onRadioChange = (e: RadioChangeEvent) => {
    setState(e.target.value)
  }

  const onComplete = (task: ITask) => {
    setTaskList((list: ITask[]) => {
      const newList = [...list]
      const index = newList.findIndex(v => v.id === task.id)
      newList[index] = {
        ...task,
        state: 1
      }
      return newList
    })
  }

  const onDelete = (id: number) => {
    setTaskList((list: ITask[]) => {
      const newList = [...list]
      const index = newList.findIndex(v => v.id === id)
      newList.splice(index, 1)
      return newList
    })
  }

  const renderList = () => {
    const data = taskList.filter(v => v.state === state)
    return (
      <List
        bordered
        dataSource={data}
        style={{backgroundColor: '#fff'}}
        renderItem={(item) => (
          <List.Item>
            <Task
              title={item.title}
              state={item.state}
              onComplete={() => {onComplete(item)}}
              onDelete={() => {onDelete(item.id)}}
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
          onChange={onInputChange}
        />
        <Button type="primary" onClick={handleAdd}>添加</Button>
      </Input.Group>

      <Radio.Group
        onChange={onRadioChange}
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

export default TodoList
