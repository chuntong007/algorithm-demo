import { Deque, Queue } from '@/algorithm'
import {
  Button,
  Card,
  Divider,
  message,
  Space,
  Typography,
  Flex,
  Col,
} from 'antd'
import React, { useRef, useState } from 'react'

type QueItem = string | number

const Page: React.FC = () => {
  const queueRef = useRef(new Queue<QueItem>())
  const [queItems, setQueItems] = useState<QueItem[]>([])

  // console.log({ queueRef, setQueItems })

  function enqueue() {
    queueRef.current.enqueue(randomItem())
  }

  const QueueEl = () => (
    <Card title="Queue-队列" style={{ minWidth: 500 }}>
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
            onClick={() =>
              message.info('toString: ' + queueRef.current.toString())
            }
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

  function withUpdate(foo?: (...args: unknown[]) => void) {
    return () => {
      foo?.()

      // console.log({ message })

      setQueItems(queueRef.current.getItems())
    }
  }

  const dequeRef = useRef(new Deque<QueItem>())
  const [dqueItems, setDqueItems] = useState<QueItem[]>([])

  const withDeUpdate = (foo?: (...args: unknown[]) => void) => () => {
    foo?.()
    console.log({ ref: dequeRef.current, dqueItems })

    setDqueItems(dequeRef.current.getItems())
  }

  const DequeEl = () => (
    <Card title="Deque-双端队列" style={{ minWidth: 500 }}>
      <Flex gap="middle" wrap>
        <Button
          onClick={withDeUpdate(() => dequeRef.current.addFront(randomItem()))}
          type="primary"
        >
          addFront
        </Button>

        <Button
          onClick={withDeUpdate(() => dequeRef.current.addBack(randomItem()))}
          type="primary"
        >
          addBack
        </Button>

        <Button
          onClick={withDeUpdate(() => dequeRef.current.clear())}
          type="primary"
        >
          clear
        </Button>

        <Button
          onClick={withDeUpdate(() =>
            message.info('removeFront: ' + dequeRef.current.removeFront()),
          )}
          type="primary"
        >
          removeFront
        </Button>

        <Button
          onClick={withDeUpdate(() =>
            message.info('removeBack: ' + dequeRef.current.removeBack()),
          )}
          type="primary"
        >
          removeBack
        </Button>

        <Button
          onClick={() =>
            message.info('peekFront: ' + dequeRef.current.peekFront())
          }
          type="primary"
        >
          peekFront
        </Button>

        <Button
          onClick={() =>
            message.info('peekBack: ' + dequeRef.current.peekBack())
          }
          type="primary"
        >
          peekBack
        </Button>

        <Button
          onClick={() =>
            message.info('size: ' + dequeRef.current.size())
          }
          type="primary"
        >
          size
        </Button>

        <Button
          onClick={() =>
            message.info('toString: ' + dequeRef.current.toString())
          }
          type="primary"
        >
          toString
        </Button>

        <Col span={24}>{dequeRef.current.toString()}</Col>

        <ul>
          {dqueItems.map(v => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </Flex>
    </Card>
  )

  function randomItem() {
    return Math.random().toString(36).slice(2, 8)
  }

  return (
    <>
      <QueueEl />

      <Divider />

      <DequeEl />
    </>
  )
}

export default Page
