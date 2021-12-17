function isValid(_s: string): boolean {
  const stack = [];
  const s = _s.split("");

  while (s.length !== 0) {
    const [firstChar] = s.splice(0, 1);
    if (firstChar === ")") {
      if (stack.pop() !== "(") return false;
    } else if (firstChar === "}") {
      if (stack.pop() !== "{") return false;
    } else if (firstChar === "]") {
      if (stack.pop() !== "[") return false;
    } else {
      stack.push(firstChar);
    }
  }
  if (stack.length !== 0) return false;

  return true;
}
