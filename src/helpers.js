
function choice(items) {

    // Getting the random fruit from the items array
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
    // Removing the "item" from the "items" array if found
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
          return [...items.slice(0, i), ...items.slice(i + 1)];
        }
      }
}

export { choice, remove };