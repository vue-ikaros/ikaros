// 判断参数是否是其中之一
export const oneOf = (val, arr) => {
  const set = new Set(arr)
  if (set.has(val)) {
    return true
  }
  return false
}

//  back-top
export const backTop = durations => {
  const dom = document.getElementsByTagName('body')[0]
  const scrollTop = dom.scrollTop
  for (var i = 60; i >= 0; i--) {
    setTimeout((i => {
      return () => {
        dom.scrollTop = scrollTop * i / 60
      }
    })(i), durations * (1 - i / 60))
  }
}

