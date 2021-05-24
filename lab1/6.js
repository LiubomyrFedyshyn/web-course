class User {
  constructor(name) {
    this.name = name;
  }
}
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0].name < right[0].name) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  if(array.length < 2){
    return array
  }
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
var ar = []
for (var i = 17; i >= 0; i--){
  u = new User(String.fromCharCode(97+i)+'son')
  ar.push(u)
}
console.log(ar)
console.log(mergeSort(ar))
