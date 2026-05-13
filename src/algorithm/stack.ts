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
  #count: number
  #items: Record<number, T>

  constructor() {
    this.#count = 0
    this.#items = {}
  }

  push(el: T) {
    this.#items[this.#count] = el
    this.#count++
  }

  pop() {
    if (this.isEmpty()) return

    this.#count--
    const top = this.#items[this.#count]
    delete this.#items[this.#count]

    return top
  }

  peek() {
    return this.#items[this.#count - 1]
  }

  toString() {
    if (this.isEmpty()) return ''

    let objString = `${this.#items[0]}`

    for (let i = 1; i < this.#count; i++)
      objString = `${objString}, ${this.#items[i]}`

    return objString
  }

  isEmpty() {
    return this.#count === 0
  }

  size() {
    return this.#count
  }

  clear() {
    this.#count = 0
    this.#items = {}
  }

  values() {
    return this.#items
  }
}

/**
 * 进制转换
 *
 * @param {number} decNumber
 * @param {number} [base=2]
 * @returns {string}
 */
export function decimalToBase(decNumber: number, base = 2) {
  const remStack = new StackObj<number>()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  if (base < 2 || base > 36) return ''

  let num = decNumber
  let binaryStr = ''

  while (num) {
    const rem = Math.floor(num % base)
    remStack.push(rem)
    num = Math.floor(num / base)
  }

  while (!remStack.isEmpty()) binaryStr += digits[remStack.pop()!]

  return binaryStr
}
