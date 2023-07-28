const nextElementInList = (list, currentElement) => {
  const currentActionIdx = list.indexOf(currentElement)
  if (currentActionIdx == -1) return null
  console.log(currentActionIdx)
  const nextElementIdx = (currentActionIdx + 1) % list.length
  return list[nextElementIdx]
}

export default nextElementInList
