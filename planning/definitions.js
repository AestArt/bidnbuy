/**
 * @typedef {object} lib - Store library
 * @property {toasts} toasts
 */

/**
 * @typedef {string} qS - DOM query selector string
 */

/**
 * @typedef {object} store - Data store
 * @property {lib} lib
 */

/**
 * @typedef {object} toast - A toast initialised from a DOM element
 * @property {Element} _element - a DOM element from toast
 * @property {function} hide - function to hide a toast
 * @property {function} show - function to show a toast
 */

/**
 * @typedef {object} toasts - Toasts for informing on async calls
 * @property {Element} connection - Connection toast
 * @property {Element} resErr - Response error toast
 * @property {Element} resSuc - Response success toast
 */
