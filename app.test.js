const { add } = require("./app");

test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

const { subtract } = require("./app");

test("subtract 2 numbers", () => {
    expect(subtract(5, 3)).toBe(2);
})