export function defaultEquals(a: unknown, b: unknown) {
  return a === b
}

/**
 * 生成随机项
 *
 * @return  {[type]}  [return description]
 */
export function* genrateItems() {
  while (true) yield genrateRandomText()
}

/**
 * 生成随机文本
 *
 * @return  {[string]}  [return description]
 */
export function genrateRandomText() {
  return Math.random().toString(36).slice(2, 7)
}
