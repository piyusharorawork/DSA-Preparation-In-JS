import { Stack } from "../../../data-structures/stack/stack";

export function sortStack(stack) {
  const sort = (stack) => {
    if (stack.size() < 2) return stack;

    const top = stack.pop();
    const sortedStack = sortStack(stack);

    // insert the top in the correct sortedstack
    if (sortedStack.peek() < top) {
      sortedStack.push(top);
      return sortedStack;
    }

    const store = new Stack();
    while (!sortedStack.isEmpty()) {
      if (sortedStack.peek() < top) {
        break;
      }
      store.push(sortedStack.pop());
    }
    sortedStack.push(top);
    while (!store.isEmpty()) sortedStack.push(store.pop());
    return sortedStack;
  };

  sort(stack);

  return stack;
}
