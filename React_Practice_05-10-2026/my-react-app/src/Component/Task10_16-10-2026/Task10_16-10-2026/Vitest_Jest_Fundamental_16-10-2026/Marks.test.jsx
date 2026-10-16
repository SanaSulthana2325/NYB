import{expect, test} from "vitest";
import{CalculateTotal} from "../Vitest_Jest_Fundamental_16-10-2026/Marks"

test("calculates total marks",()=>{
    expect(CalculateTotal(80,90)).toBe(170)
});