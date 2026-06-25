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

/**
 * 计算止盈收益
 *
 * @param   {[type]}  options  [options description]
 *
 * @return  {[type]}           [return description]
 */
export function calcProfit(
  options: { bj?: number; sy?: number; jd?: number[]; mc?: number[] } = {},
) {
  const { bj, sy, jd, mc } = {
    bj: 1,
    sy: 0,
    jd: [0.2, 0.3, 0.5],
    mc: [0.25, 0.25, 0.5],
    ...options,
  }

  let benj = bj,
    shouy = sy,
    maic = 0
  for (let i = 0; i < jd.length; i++) {
    const add = jd[i]
    const hc = mc[i]
    benj = benj * (1 + add)
    maic = benj - benj * (1 - hc)
    benj -= maic
    shouy += maic

    console.log({
      tip: `第${i + 1}轮止盈`,
      原始资金: bj,
      本金: benj,
      收益: shouy,
      增长: add,
      卖出: maic,
    })
  }
}
// gen = calcProfit({ bj: 5000 })

export function calcProfitJS(options = {}) {
  const { bj, sy, jd, mc } = {
    bj: 1,
    sy: 0,
    jd: [0.2, 0.3, 0.5],
    mc: [0.25, 0.25, 0.5],
    ...options,
  }

  let benj = bj,
    shouy = sy,
    maic = 0
  for (let i = 0; i < jd.length; i++) {
    const add = jd[i]
    const hc = mc[i]
    benj = benj * (1 + add)
    maic = benj - benj * (1 - hc)
    benj -= maic
    shouy += maic

    console.log({
      tip: `第${i + 1}轮止盈`,
      原始资金: bj,
      本金: benj,
      收益: shouy,
      增长: add,
      卖出: maic,
    })
  }
}
// gen = calcProfitJS({ bj: 5000 })
