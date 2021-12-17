let dict;
function isHappy(n: number): boolean {
  dict = new Map()
  return inf(n)
};

function inf(n: number) {
  let _n = n
  let sum = 0
  while(_n > 0) {
    sum += Math.pow(_n%10, 2)
    _n = Math.floor(_n/10)
  }
  if(sum==1) return true
  if(dict.has(sum)) return false
  dict.set(sum, true)
  return inf(sum)
}