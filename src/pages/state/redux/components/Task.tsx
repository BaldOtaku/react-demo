import { Button } from 'antd'

interface Props {
  title: string
  state: number
  onComplete: any
  onDelete: any
}

const taskStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}

const task: React.FC<Props> = ({
  title,
  state,
  onComplete,
  onDelete
}) => {
  return (
    <div style={taskStyles}>
      <div>{title}</div>
      <div className="action">
        {state === 0 && <Button type="link" onClick={onComplete}>完成</Button>}
        <Button type="link" onClick={onDelete}>删除</Button>
      </div>
    </div>
  )
}

export default task
