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
