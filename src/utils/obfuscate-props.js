/******************************************/
// obfuscation utils
/******************************************/
// generate obfuscated name
export const nameObfuscator = (str) => {
  return shuffle(str)
    .split('')
    .slice(getRandomInt(str.length - 2))
    .join('')
}
export const getRandomInt = (n) => {
  return Math.floor(Math.random() * n)
}
export const shuffle = (s) => {
  const arr = s.split('') // Convert String to array
  const n = arr.length // Length of the array

  for (let i = 0; i < n - 1; ++i) {
    let j = getRandomInt(n) // Get random of [0, n-1]

    let temp = arr[i] // Swap arr[i] and arr[j]
    arr[i] = arr[j]
    arr[j] = temp
  }

  s = arr.join('') // Convert Array to string
  return s // Return shuffled string
}

export const getDisplayPropName = (name) => {
  // ACTUAL
  // const IS_PRODUCTION = process.env.NODE_ENV === 'production'
  const IS_PRODUCTION = true
  if (IS_PRODUCTION) {
    return nameObfuscator(name)
  } else {
    return name
  }
}

/******************************************/
// props utils
/******************************************/
// list of all prop names to be obfuscated
// display prop names
export const p_ = {
  incrementCount: getDisplayPropName('incrementCount'),
  decrementCount: getDisplayPropName('decrementCount'),
  count: getDisplayPropName('count'),
  title: getDisplayPropName('title'),
}

export const get_p_ = (name) => p_[name]

export const createRefPropName = (propName) => propName + '_'

export const getObfuscatedPropNames = (arg) => {
  if (!arg) {
    return false
  }
  let res = {}
  let nameSpacedPropName = ''
  if (arg.length) {
    ;[...arg].forEach((propName) => {
      nameSpacedPropName = createRefPropName(propName)
      res[nameSpacedPropName] = p_[propName]
    })
  } else {
    nameSpacedPropName = createRefPropName(arg)
    res[nameSpacedPropName] = p_[arg]
  }
  return res
}

export const getProps = (props, arrOfPropNames) => {
  if (!arrOfPropNames || arrOfPropNames.length === 0) {
    return props
  } else {
    let propsToReturn = {}
    arrOfPropNames.forEach((propName) => {
      propsToReturn[propName] = props[propName]
    })
    return propsToReturn
  }
}

export const passProps = (props /* key, value pair of props */) => {
  // passProps({
  //   count: 6,
  // })

  let propsToReturn = {}
  Object.keys(props).forEach((propName) => {
    if (!p_[propName]) {
      p_[propName] = getDisplayPropName(propName)
    }
    propsToReturn[p_[propName]] = props[propName]
  })
  return propsToReturn
}
