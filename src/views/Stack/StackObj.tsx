import { StackObj } from '@/stack'
import { Button, Card, Row } from 'antd'
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
    </>
  )
}

export default Page
