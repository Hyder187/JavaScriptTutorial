import { totalPrice, totalQuantity, cart } from "./shoppingCart.js";
console.log("Importing module");

console.log(cart);

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    {
      product: "pizza",
      quantity: 5,
    },
  ],

  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

//using lodash function
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
state.user.loggedIn = false;

import "core-js/stable";
import "regenerator-runtime/runtime";
