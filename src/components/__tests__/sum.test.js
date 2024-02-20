import { sum } from "../sum";

test("Sum function", () => {
    const result = sum(3, 4);
    //Assertion
    expect(result).toBe(8);
});
