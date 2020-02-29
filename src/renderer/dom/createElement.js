/**
 * @typedef {HTMLElement | string} WbpckDomChild
 */

/**
 *
 * @param {string} tag The tag of the element
 * @param {object} props The attributes of the element
 * @param  {...WbpckDomChild} children Children HTMLElement[] or strings
 * @returns {HTMLElement} The created element
 */
const createElement = (tag = 'div', props = { className: 'default element' }, ...children) => {
  /**
   * @const {HTMLElement} element The element we are creating
   */
  const element = document.createElement(tag);

  Object.keys(props).forEach(prop => element.setAttribute(prop === 'className' ? 'class' : prop, props[prop]));
  children.forEach(child => element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child));

  return element;
};

export default createElement;
