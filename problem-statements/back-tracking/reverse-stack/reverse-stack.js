export function reverseStack(stack) {
  const insertBottom = (stack, element) => {
    if (stack.size() === 0) return stack.push(element);
    const top = stack.pop();
    insertBottom(stack, element);
    stack.push(top);
  };

  const reverse = (stack) => {
    if (stack.size() === 0) return;
    const top = stack.pop();
    reverse(stack);
    insertBottom(stack, top);
  };

  reverse(stack);
}
