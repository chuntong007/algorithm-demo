/**
 * 队列（Queue）
 *
 * @export
 * @class Queue
 * @typedef {Queue}
 * @template [T=unknown]
 */
export class Queue<T = unknown> {
  #count: number
  #lowestCount: number
  #items: Record<number, T>

  constructor() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  /**
   * 向队列尾部添加一个元素
   *
   * @param {T} el
   */
  enqueue(el: T) {
    this.#items[this.#count] = el
    this.#count++
  }

  /**
   * 从队列头部移除一个元素
   *
   * @returns {T | undefined}
   */
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

/**
 * 双端队列（Deque）
 *
 * @export
 * @class Deque
 * @typedef {Deque}
 * @template [T=unknown]
 */
export class Deque<T = unknown> {
  #count: number
  #lowestCount: number
  #items: Record<number, T>

  constructor() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  /**
   * 向双端队列前端添加一个元素
   *
   * @param {T} el
   */
  addFront(el: T) {
    if (this.isEmpty()) return this.addBack(el)

    this.#items[this.#lowestCount - 1] = el
    this.#lowestCount--
  }

  /**
   * 向双端队列尾部添加一个元素
   *
   * @param {T} el
   */
  addBack(el: T) {
    this.#items[this.#count] = el
    this.#count++
  }

  /**
   * 从双端队列前端移除一个元素
   *
   * @returns {T | undefined}
   */
  removeFront() {
    if (this.isEmpty()) return

    const el = this.#items[this.#lowestCount]
    delete this.#items[this.#lowestCount]

    this.#lowestCount++

    return el
  }

  /**
   * 从双端队列尾部移除一个元素
   *
   * @returns {T | undefined}
   */
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

/**
 * 击鼓传花（队列版）
 *
 * @export
 * @param {string[]} elementsList
 * @param {number} num
 * @returns {{ eliminated: string[]; winner: string; }}
 */
export function hotPotato(elementsList: string[], num: number) {
  const queue = new Queue<string>()
  const eliminated = []

  for (let i = 0; i < elementsList.length; i++) queue.enqueue(elementsList[i])

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) queue.enqueue(queue.dequeue()!)

    eliminated.push(queue.dequeue())
  }

  return { eliminated, winner: queue.dequeue() }
}

/**
 * 回文检测（双端队列版）
 *
 * @export
 * @param {string} aStr
 * @returns {boolean}
 */
export function palindromeChecker(aStr: string) {
  if (!aStr) return false

  const deque = new Deque()
  const lowerStr = aStr.toLocaleLowerCase().split(' ').join('')

  for (let i = 0; i < lowerStr.length; i++) deque.addBack(lowerStr[i])

  while (deque.size() > 1) {
    if (deque.removeFront() !== deque.removeBack()) return false
  }

  return true
}
