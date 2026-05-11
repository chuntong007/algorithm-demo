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

/**
 * 路由配置
 *
 * @type {PathRouteProps[]}
 */
export const routes: RouteProps[] = [
  {
    path: 'conf-comps',
    element: <Stack />,
    meta: { title: '栈' },
  },
]
