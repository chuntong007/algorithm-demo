// import App from "@/App";
import { lazy } from 'react'
import { PathRouteProps } from 'react-router'

interface RouteProps extends PathRouteProps {
  meta?: {
    title?: string

    [key: string]: unknown
  }
}

const Stack = lazy(() => import('@/views/Stack'))
const StackObj = lazy(() => import('@/views/Stack/StackObj'))

/**
 * 路由配置
 *
 * @type {PathRouteProps[]}
 */
export const routes: RouteProps[] = [
  {
    path: '',
    element: <Stack />,
    meta: { title: '栈-数组实现' },
  },
  {
    path: 'stack-obj',
    element: <StackObj />,
    meta: { title: '栈-对象实现' },
  },
]
