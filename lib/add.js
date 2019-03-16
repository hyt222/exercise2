function add(str1, str2) {
  var arr1 = ('0' + str1).split('')
  var arr2 = ('0' + str2).split('')
  var is_over_10 = 0
  var res = []
  var length = Math.max(arr1.length,arr2.length)
  var gap = arr1.length - arr2.length
  if (gap > 0) {
    for (var i = 0; i < gap; i++) {
      arr2.unshift('0');
    }
  } else {
    for (var i = 0; i < Math.abs(gap); i++) {
      arr1.unshift('0');
    }
  }
  for(var i = length - 1; i >= 0; i--) {
    var sum = Number(arr1[i]) + Number(arr2[i]) + Number(is_over_10)
    if (sum > 9) {
      is_over_10 = 1;
      sum -= 10 ;
    } else {
      is_over_10 = 0;
    }
    res.unshift(sum)
  }
  return res.join('').replace(/^0/,'')
}

module.exports = add