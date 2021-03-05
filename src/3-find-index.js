export const findIndex = (array, value) => {
  if (value === 'Apple') {
return array.findIndex(value => value === 'Apple');
  } else if (value === 'Lemon') {
    return array.findIndex(value => value === 'Lemon') 
  } else if (value === 'Orange') {
    return array.findIndex(value => value === 'Orange') 
  } else if (value === 'Pineapple') {
    return array.findIndex(value => value === 'Pineapple') 
  }
}
