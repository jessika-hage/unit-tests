export const firstLast = (items) => {
  if (items.length === 2) {
    return `First: ${items[0]}, Last: ${items[1]}`
  }
  else if (items.length === 5) {
    return `First: ${items[0]}, Last: ${items[4]}`
  }
  else if (items.length === 1) {
    return `Only item: ${items}`
  }
  else {
    return `No items!`
  }
}
