export class Queue<T = unknown> {
  #count: number
  #lowestCount: number
  #items: Record<number, T>

  constructor() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  enqueue(el: T) {
    this.#items[this.#count] = el
    this.#count++
  }

  dequeue() {
    if (this.isEmpty()) return

    const first = this.#items[this.#lowestCount]
    delete this.#items[this.#lowestCount]
    this.#lowestCount++

    return first
  }

  peek() {
    return this.#items[this.#lowestCount]
  }

  size() {
    return this.#count - this.#lowestCount
  }

  clear() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  toString() {
    if (this.isEmpty()) return ''

    let str = this.peek() + ''

    for (let i = this.#lowestCount + 1; i < this.#count; i++)
      str += `, ${this.#items[i]}`

    return str
  }

  isEmpty() {
    return this.size() === 0
  }

  values() {
    return this.#items
  }

  getItems() {
    if (this.isEmpty()) return []

    const items = []
    for (let i = this.#lowestCount; i < this.#count; i++)
      items.push(this.#items[i])

    return items
  }
}

export class Deque<T = unknown> {
  #count: number
  #lowestCount: number
  #items: Record<number, T>

  constructor() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  addFront(el: T) {
    if (this.isEmpty()) return this.addBack(el)

    this.#items[this.#lowestCount - 1] = el
    this.#lowestCount--
  }

  addBack(el: T) {
    this.#items[this.#count] = el
    this.#count++
  }

  removeFront() {
    if (this.isEmpty()) return

    const el = this.#items[this.#lowestCount]
    delete this.#items[this.#lowestCount]

    this.#lowestCount++

    return el
  }

  removeBack() {
    if (this.isEmpty()) return

    const el = this.#items[this.#count - 1]
    delete this.#items[this.#count - 1]

    this.#count--

    return el
  }

  peekFront() {
    return this.#items[this.#lowestCount]
  }

  peekBack() {
    return this.#items[this.#count - 1]
  }

  size() {
    return this.#count - this.#lowestCount
  }

  clear() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  toString() {
    if (this.isEmpty()) return ''

    let str = this.peekFront() + ''

    for (let i = this.#lowestCount + 1; i < this.#count; i++)
      str += `, ${this.#items[i]}`

    return str
  }

  isEmpty() {
    return this.size() === 0
  }

  values() {
    return this.#items
  }

  getItems() {
    if (this.isEmpty()) return []

    const items = []
    for (let i = this.#lowestCount; i < this.#count; i++)
      items.push(this.#items[i])

    return items
  }
}
