function firstUniqChar(s: string): number {
  const hashmap = new Map();

  const list = Array.from(s);

  for (let i = 0; i < list.length; i++) {
    const val = (hashmap.get(list[i]) || 0) + 1;
    hashmap.set(list[i], val);
  }

  for (let i = 0; i < list.length; i++) {
    if (hashmap.get(list[i]) === 1) {
      return i;
    }
  }
  return -1;
}
