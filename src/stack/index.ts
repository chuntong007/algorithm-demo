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

export class StackObj<T = unknown> {
  private count: number
  private items: Record<number, T>

  constructor() {
    this.count = 0
    this.items = {}
  }

  push(el: T) {
    const { items, count } = this

    items[count] = el
    this.count++
  }

  pop() {
    const { items, count } = this

    if (this.isEmpty()) return

    this.count--
    const top = items[count]
    delete items[count]

    return top
  }

  peek() {
    const { items, count } = this

    return items[count - 1]
  }

  toString() {
    const { items, count } = this

    if (this.isEmpty()) return ''

    let objString = `${items[0]}`

    for (let i = 1; i < count; i++) objString = `${objString}, ${items[i]}`

    return objString
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  clear() {
    this.count = 0
    this.items = {}
  }

  values() {
    return this.items
  }
}
