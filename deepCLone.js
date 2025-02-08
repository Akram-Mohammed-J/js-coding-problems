function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  // 👉 Base case: Return if obj is a primitive value (number, string, boolean, etc.)

  if (hash.has(obj)) return hash.get(obj);
  // 👉 If obj is already cloned, return the stored reference (handles circular refs)

  let clone = Array.isArray(obj) ? [] : {};
  // 👉 Create an empty array or object based on input type

  hash.set(obj, clone);
  // 👉 Store the clone in WeakMap before recursion (prevents infinite loops)

  for (let key in obj) {
    clone[key] = deepClone(obj[key], hash);
    // 👉 Recursively clone properties while keeping track of visited objects
  }

  return clone;
  // 👉 Return the final cloned object
}
