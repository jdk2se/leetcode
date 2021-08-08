const root = document.getElementById("app");

const { log } = console;

const treeDepth = (el, level) => {
  if (el.children.length === 0) return level;

  level++;
  let maxDepth = level;
  Array.from(el.children).forEach((child) => {
    maxDepth = Math.max(treeDepth(child, level), maxDepth);
  });

  return maxDepth;
};

console.log(treeDepth(root, 0));
