const shoppingCart = require("./shoppingCart");

describe("Shopping Cart", () => {
  beforeEach(() => {
    shoppingCart.cart = [];
  });

  test("total value of the cart should be 0 when there are no items", () => {
    expect(shoppingCart.getTotalValue()).toBe(0);
  });

  test("cart length should be 1 after adding the first item", () => {
    shoppingCart.addCartItem("Apfel", 5);
    expect(shoppingCart.cart.length).toBe(1);
  });

  test("cart length should be 2 after adding the second item", () => {
    shoppingCart.addCartItem("Birne", 3);
    expect(shoppingCart.cart.length).toBe(2);
  });
});
