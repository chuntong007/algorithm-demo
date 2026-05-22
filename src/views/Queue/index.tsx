import { Deque, Queue } from '@/algorithm'
import { hotPotato } from '@/algorithm/queue'
import {
  Button,
  Card,
  Divider,
  message,
  Space,
  Typography,
  Flex,
  Col,
  Input,
  InputNumber,
  Form,
  FormProps,
} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React, { useRef, useState } from 'react'

interface FormFileds {
  names: string
  num: number
}
type QueItem = string | number

const Page: React.FC = () => {
  /* 队列 */
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

  /* 双端队列 */
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
          onClick={() => message.info('size: ' + dequeRef.current.size())}
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

  /* 击鼓传花 */
  const resultRef = useRef<ReturnType<typeof hotPotato>>({
    winner: '',
    eliminated: [],
  })
  // const [winner, setWinner] = useState('')

  const onValuesChange: FormProps<FormFileds>['onValuesChange'] = (
    _,
    { names, num },
  ) => {
    const result = hotPotato(names?.split(',') ?? [], num)
    resultRef.current = result
    // setWinner(result.winner!)
    console.log({
      // result,
      names,
      num,
    })
  }

  const HotPotatoEl = () => (
    <Card title="Potato-击鼓传花" style={{ minWidth: 500 }}>
      <Form
        onValuesChange={onValuesChange}
        initialValues={{
          names: 'John,Jack,Camila,Ingrid,Carl,Tom,Lucy',
          num: 7,
        }}
      >
        <FormItem label="人员添加" name="names">
          <Input />
        </FormItem>

        <FormItem label="轮次" name="num">
          <InputNumber />
        </FormItem>
      </Form>

      {/* <FormItem>
        <Button type="primary">开始传递</Button>
      </FormItem> */}

      <Flex gap="middle" wrap>
        {/* <h2>执花人：{winner}</h2> */}
        <h2>执花人：{resultRef.current.winner}</h2>
      </Flex>
    </Card>
  )

  return (
    <>
      <QueueEl />

      <Divider />

      <DequeEl />

      <Divider />

      <HotPotatoEl />
    </>
  )
}

export default Page
