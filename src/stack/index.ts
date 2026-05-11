export class StackArray<T = unknown> {
  private items: T[]

  constructor() {
    this.items = []
  }

  push(...el: T[]) {
    this.items.push(...el)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    const { items } = this

    return items[items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  values() {
    return this.items
  }
}
