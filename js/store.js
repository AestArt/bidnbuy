/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// !store.js

/**
 * Data store
 * @type {store} store
 */
const store = {
  lib: {
    toasts: {
      connection: newToast('#connectionToast', false),
      resErr: newToast('#responseErrorToast'),
      resSuc: newToast('#responseSuccessToast'),
    },
  },
};

/**
 * Returns the localStorage store for this app
 * @param {string} [secret=bidnbuy]
 * @param {string} [localStore=window.localStorage.getItem(secret)]
 * @return {store}
 */
const getStore = (
    secret = 'bidnbuy',
    localStore = window.localStorage.getItem(secret),
) => (localStore ? JSON.parse(localStore) : {});

/**
 * Updates the localStorage store for this app
 * @param {object} update
 * @param {string} [secret=bidnbuy]
 * @param {function} [gStore]
 */
const setStore = (update, secret = 'bidnbuy', gStore = getStore) => {
  const s = gStore();
  localStorage.setItem(secret, JSON.stringify({...s, ...update}));
  console.log(gStore());
};
