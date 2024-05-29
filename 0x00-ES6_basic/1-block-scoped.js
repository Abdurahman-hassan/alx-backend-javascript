export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // These are now block-scoped to the if block
    const task2 = false; // and do not affect the outer scope's task and task2
  }

  return [task, task2];
}
