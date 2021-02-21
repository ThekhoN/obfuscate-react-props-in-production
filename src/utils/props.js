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
