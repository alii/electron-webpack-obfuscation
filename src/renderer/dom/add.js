/**
 * Adds a child to a parent. Calling `.to` will return the parent.
 * @param {HTMLElement | string} child The child string or element
 * @example
 * instanceof div; // HTMLElement
 * add(div).to(root);
 */
const add = child => ({
  /**
   * Call the appendation!
   * @param {HTMLElement} parent The parent element
   * @returns {HTMLElement} The parent
   */
  to(parent) {
    parent.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    return parent;
  },
});

export default add;
