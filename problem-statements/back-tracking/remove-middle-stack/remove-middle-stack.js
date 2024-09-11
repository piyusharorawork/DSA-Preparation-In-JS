export function removeMiddleStack(stack) {
  const N = stack.size(); // Assuming stack is an array

  // Calculate indexes to remove
  let indexesToRemove = [];
  if (N % 2 !== 0) indexesToRemove.push(Math.floor(N / 2));
  else {
    const mid1 = Math.floor((N - 1) / 2);
    const mid2 = mid1 + 1;
    indexesToRemove.push(mid1, mid2);
  }

  // it removes the index from the top
  const remove = (stack, index) => {
    if (index === 0) {
      stack.pop();
      return stack;
    }
    const top = stack.pop();
    const updatedStack = remove(stack, index - 1);
    stack.push(top);
    return updatedStack;
  };

  for (const index of indexesToRemove) {
    stack = remove(stack, N - index - 1);
  }

  return stack;
}
