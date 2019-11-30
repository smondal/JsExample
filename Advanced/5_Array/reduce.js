//This implemeetation is using reduce
//output is { a: true, b: true, c: true }
function charSet(s){
  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  return s.split('').reduce(function(set, c, i){
    console.log(i)
    console.log(set)
    set[c] = true
    return set
  }, {})
}

//This implemeetation is normal way
//output is { a: true, b: true, c: true }
function charSet(s){
  var set = {}
  s.split('').forEach(function(value){
    set[value] = true
  })
  return set
}


console.log(charSet('abc'))
