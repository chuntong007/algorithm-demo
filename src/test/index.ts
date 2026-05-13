import { StackArray } from '@/algorithm'

export function sum(a: number, b: number): number {
  return a + b
}

export function testStackArr() {
  const stackArr = new StackArray()
  stackArr.push(...'wqeqwecqw213123'.split(''))

  console.log('stackArr.peek()', stackArr.peek())
}
