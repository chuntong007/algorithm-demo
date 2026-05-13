import { decimalToBase, StackObj } from '@/algorithm'
import { Button, Card, Divider, Form, Input, Row } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React, { useRef, useState } from 'react'

const Page: React.FC = () => {
  const stackObj = useRef(new StackObj())
  const str = 'qwertyuiopasdfghjklzxcvbnm1234567890'
  const [content, setContent] = useState<unknown>()

  function genrate() {
    str.split('').forEach(s => stackObj.current.push(s))

    setContent(stackObj.current.toString())
  }

  function pop() {
    setContent(stackObj.current.pop())
  }

  function clear() {
    stackObj.current.clear()
    setContent(stackObj.current.size())
  }

  const [binary, setBinary] = useState<number>()
  const [base, setBase] = useState<number>(2)

  return (
    <>
      <Card title="Stack Object" style={{ width: 500 }}>
        <Button onClick={genrate}>生成栈</Button>
        <Button onClick={pop}>移除栈顶</Button>
        <Button onClick={clear}>清空栈</Button>

        <h1>栈顶：{stackObj.current.peek() + ''}</h1>

        <Row>输出：{content + ''}</Row>

        <Row>是否为空：{stackObj.current.isEmpty() + ''}</Row>
      </Card>

      <Divider />

      <Card title="二进制转换">
        <Form layout="inline">
          <FormItem label="十进制数">
            <Input
              type="number"
              value={binary}
              onChange={e => setBinary(Number(e.target.value))}
            />
          </FormItem>

          <FormItem label="输入进制">
            <Input
              type="number"
              value={base}
              onChange={e => setBase(Number(e.target.value))}
            />
          </FormItem>
        </Form>

        <Row>输出：{decimalToBase(binary ?? 0, base)}</Row>
      </Card>
    </>
  )
}

export default Page
