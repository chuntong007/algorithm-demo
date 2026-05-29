import { Card, Flex, Input, Form } from 'antd'
import { useForm, useWatch } from 'antd/es/form/Form'
import FormItem from 'antd/es/form/FormItem'
import React from 'react'

interface FormFileds {
  names: string
  num: number
}

const PalindromeEl = () => {
  const [form] = useForm<FormFileds>()
  const text = useWatch('text', form)
  // const isEqual = useMemo(() => palindromeChecker(text), [text])

  return (
    <Card title="链表" style={{ minWidth: 500 }}>
      <Form form={form}>
        <FormItem label="文本" name="text">
          <Input />
        </FormItem>
      </Form>

      {/* <Flex gap="middle" justify="space-between">
        <h2>是否回文：{isEqual ? '✅' : '❌'}</h2>
      </Flex> */}
    </Card>
  )
}

const Page: React.FC = () => {
  return (
    <>
      <PalindromeEl />
    </>
  )
}

export default Page
