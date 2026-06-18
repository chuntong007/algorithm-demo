import { LinkedList } from '@/algorithm'
import { genrateItems } from '@/algorithm/util'
import {
  Card,
  Flex,
  Input,
  Form,
  Button,
  Divider,
  message,
  Col,
} from 'antd'
import { useForm, useWatch } from 'antd/es/form/Form'
import FormItem from 'antd/es/form/FormItem'
import React, { useMemo, useState } from 'react'

interface FormFileds {
  links: string
  item: string
  deleteIndex: number
  findIndex: number
}

const PalindromeEl = () => {
  const [form] = useForm<FormFileds>()
  const links = useWatch('links', form)
  const linkList = useMemo(() => {
    const linked = new LinkedList()
    links?.split(',')?.forEach(v => linked.push(v))

    return linked
  }, [links])

  const [items] = useState(new LinkedList())
  const [, setSize] = useState(0)

  const item = useWatch('item', form)
  function pushItem() {
    items.push(item)
    setSize(items.size())
    form.setFieldValue('item', undefined)
  }
  function findIndexOf() {
    const index = items.indexOf(item)
    message.info(`${item} indexOf: ${index}`)
  }

  const deleteIndex = useWatch('deleteIndex', form)
  function deleteItem() {
    const removed = items.removeAt(+deleteIndex)
    setSize(items.size())
    form.setFieldValue('deleteIndex', undefined)
    message.info('移除：' + removed)
  }

  const index = useWatch('findIndex', form)
  function findIndex() {
    const node = items.getElementAt(index)
    message.info(`index-"${index}" → elemet-"${node?.element}"`)
  }
  async function genrate() {
    while (items.size() > 0) items.removeAt(0)

    setSize(items.size())

    await new Promise(r => setTimeout(r, 10))

    const randomItems = genrateItems().take(index).toArray()
    randomItems.forEach(v => items.push(v))
    setSize(items.size())
  }
  function insert() {
    items.insert(item, +index)
    form.setFieldValue('item', undefined)
    setSize(items.size())
  }

  return (
    <Card title="链表" style={{ minWidth: 500 }}>
      <Form
        form={form}
        initialValues={{
          links: 'John,Jack,Camila,Ingrid,Carl,Tom,Lucy',
          item: undefined,
          deleteIndex: undefined,
        }}
      >
        <FormItem label="逗号分隔链" name="links">
          <Input />
        </FormItem>

        <Flex gap="middle" justify="space-between">
          <h2>{linkList.toString()}</h2>
        </Flex>

        <Button type="primary" onClick={() => console.log({ linkList })}>
          console.log
        </Button>

        <Divider />

        <Flex gap={10}>
          <FormItem label="push项" name="item">
            <Input />
          </FormItem>

          <Button onClick={pushItem} disabled={!item} type="primary">
            添加
          </Button>

          <Button onClick={findIndexOf} type="primary">
            indexOf
          </Button>
        </Flex>

        <Flex gap={10}>
          <FormItem label="移除" name="deleteIndex">
            <Input type="number" />
          </FormItem>

          <Button
            onClick={deleteItem}
            disabled={deleteIndex == null}
            type="primary"
          >
            移除
          </Button>
        </Flex>

        <Flex gap={10}>
          <FormItem label="index/生成数量" name="findIndex">
            <Input type="number" />
          </FormItem>

          <Button onClick={findIndex} disabled={index == null} type="primary">
            查找
          </Button>

          <Button onClick={genrate} type="primary">
            生成
          </Button>

          <Button
            onClick={insert}
            disabled={items.isEmpty() || !item}
            type="primary"
          >
            insert
          </Button>
        </Flex>

        <Flex gap={20} justify="space-between">
          <Col span={16}>link项：{items.toString()}</Col>

          <Col span={4}>items.size：{items.size()}</Col>
        </Flex>
      </Form>
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
