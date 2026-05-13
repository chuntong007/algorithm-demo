import { StackArray } from '@/algorithm'
import { Button, Card, Row } from 'antd'
import React, { useRef, useState } from 'react'

const Page: React.FC = () => {
  const stackArr = useRef(new StackArray())
  const str = 'qwertyuiopasdfghjklzxcvbnm1234567890'
  const [content, setContent] = useState<unknown>()

  function genrate() {
    stackArr.current.push(...str.split(''))
    setContent(stackArr.current.size())
  }

  function pop() {
    setContent(stackArr.current.pop())
  }

  function clear() {
    stackArr.current.clear()
    setContent(stackArr.current.size())
  }

  return (
    <>
      <Card title="Queue" style={{ width: 500 }}>
        <Button onClick={genrate}>生成栈</Button>
        <Button onClick={pop}>移除栈顶</Button>
        <Button onClick={clear}>清空栈</Button>

        <h1>栈顶：{stackArr.current.peek() + ''}</h1>

        <Row>输出：{content + ''}</Row>

        <Row>是否为空：{stackArr.current.isEmpty() + ''}</Row>

        <p>{stackArr.current.values().join(', ')}</p>
      </Card>
    </>
  )
}

export default Page
