import { defaultEquals } from './util'

export class Node {
  element: unknown
  next?: Node

  constructor(el: unknown) {
    this.element = el
    this.next = undefined
  }
}

export class LinkedList {
  #count: number
  #head?: Node
  eauqalsFn: (a: unknown, b: unknown) => boolean

  constructor(equalsFn = defaultEquals) {
    this.#count = 0
    // this.#head = undefined
    this.eauqalsFn = equalsFn
  }

  push(el: unknown) {
    const node = new Node(el)
    let current = this.#head

    if (!current) {
      this.#head = node
    } else {
      while (current?.next) current = current.next

      current.next = node
    }

    this.#count++
  }

  insert(el: unknown, position: number) {
    if (position > this.#count || position < 0) return false

    const node = new Node(el)

    if (position === 0) {
      const current = this.#head
      node.next = current
      this.#head = node
    } else {
      const previous = this.getElementAt(position - 1)
      node.next = previous?.next
      previous!.next = node
    }

    this.#count++

    return true
  }

  getElementAt(index: number) {
    if (index < 0 || index >= this.#count) return

    let current = this.#head

    for (let i = 0; i < index; i++) current = current?.next

    return current
  }

  indexOf(el: unknown) {
    let current = this.#head

    for (let i = 0; i < this.#count; i++) {
      if (this.eauqalsFn(current?.element, el)) return i

      current = current?.next
    }

    return -1
  }

  remove(el: unknown) {
    const index = this.indexOf(el)

    return this.removeAt(index)
  }

  removeAt(index: number) {
    if (index < 0 || index >= this.#count) return undefined

    let current = this.#head

    if (index === 0) {
      this.#head = current?.next
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous?.next
      previous!.next = current?.next
    }

    this.#count--

    return current?.element
  }

  isEmpty() {
    return this.#count === 0
  }

  size() {
    return this.#count
  }

  getHead() {
    return this.#head
  }

  toString() {
    if (this.isEmpty()) return ''

    let current = this.#head
    let str = `${current?.element}`

    while (current?.next) {
      current = current.next
      str += `, ${current.element}`
    }

    return str
  }
}

export class DoubleNode extends Node {
  prev?: DoubleNode

  constructor(el: unknown, next?: DoubleNode, prev?: DoubleNode) {
    super(el)
    this.next = next
    this.prev = prev
  }
}

export class DoublyLinkedList extends LinkedList {
  tail?: DoubleNode

  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
}
