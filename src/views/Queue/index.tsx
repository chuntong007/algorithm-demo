import { Queue } from '@/algorithm'
import { Button, Card, message, Space, Typography } from 'antd'
import React, { useRef, useState } from 'react'

type QueItem = string | number

const Page: React.FC = () => {
  const queueRef = useRef(new Queue<QueItem>())
  const [queItems, setQueItems] = useState<QueItem[]>([])

  console.log({ queueRef, setQueItems })

  function enqueue() {
    const item = Math.random().toString(36).slice(2, 8)
    queueRef.current.enqueue(item)
  }

  function withUpdate(foo?: (...args: unknown[]) => void) {
    return () => {
      foo?.()

      // console.log({ message })

      setQueItems(queueRef.current.getItems())
    }
  }

  return (
    <Card title="Queue" style={{ minWidth: 500 }}>
      <Typography>
        <Space>
          <Button onClick={withUpdate(enqueue)} type="primary">
            队列添加随机数enqueue
          </Button>

          <Button
            onClick={withUpdate(() => queueRef.current.clear())}
            type="primary"
          >
            clear
          </Button>

          <Button
            onClick={withUpdate(() =>
              message.info('dequeue: ' + queueRef.current.dequeue()),
            )}
            type="primary"
          >
            dequeue
          </Button>

          <Button
            onClick={() => message.info('peek: ' + queueRef.current.peek())}
            type="primary"
          >
            peek
          </Button>

          <Button
            onClick={() => message.info('toString: ' + queueRef.current.toString())}
            type="primary"
          >
            toString
          </Button>
        </Space>

        <Typography.Paragraph>
          {queueRef.current.toString()}
        </Typography.Paragraph>

        <ul>
          {queItems.map(v => (
            <li>{v}</li>
          ))}
        </ul>
      </Typography>
    </Card>
  )
}

export default Page
