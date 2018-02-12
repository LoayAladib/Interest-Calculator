import InterestCalculator from '../js/utils/interestCalculator';

const interestValue = 0.06;
const principalValue = 10000;
const yearsValue = 5;

expect.extend({
    toBeEqualAsObject(received, argument) {
        const pass = JSON.stringify(received) === JSON.stringify(argument);
        if (pass) {
            return {
                message: () =>
                    `expected ${JSON.stringify(received)} \n to be equal to \n ${JSON.stringify(argument)}`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${JSON.stringify(received)}  \n to be equal to \n ${JSON.stringify(argument)}`,
                pass: false,
            };
        }
    },
});

it("returns result of compound interest of inputs values", () => {
    const expectedResults = {
        finalResult: 13382.255776,
        totalInterest: 3382.2557759999995,
        compoundResults: [
            { year: 1, result: 10600, interest: 600 },
            { year: 2, result: 11236, interest: 636 },
            { year: 3, result: 11910.16, interest: 674.16 },
            { year: 4, result: 12624.7696, interest: 714.6096 },
            { year: 5, result: 13382.255776, interest: 757.486176 }
        ]
    };

    expect(InterestCalculator.calculateCompoundInterest(interestValue, principalValue, yearsValue)).toHaveProperty("finalResult");
    expect(InterestCalculator.calculateCompoundInterest(interestValue, principalValue, yearsValue)).toHaveProperty("totalInterest");
    expect(InterestCalculator.calculateCompoundInterest(interestValue, principalValue, yearsValue)).toHaveProperty("compoundResults");
    expect(InterestCalculator.calculateCompoundInterest(interestValue, principalValue, yearsValue)).toBeEqualAsObject(expectedResults);
})

it("returns result of simple interest of inputs values", () => {
    const expectedResults = {
        finalResult: 13000,
        totalInterest: 3000,
        simpleResults: [
            { year: 1, result: 10600, interest: 600 },
            { year: 2, result: 11200, interest: 600 },
            { year: 3, result: 11800, interest: 600 },
            { year: 4, result: 12400, interest: 600 },
            { year: 5, result: 13000, interest: 600 }]
    };

    expect(InterestCalculator.calculateSimpleInterest(interestValue, principalValue, yearsValue)).toHaveProperty("finalResult");
    expect(InterestCalculator.calculateSimpleInterest(interestValue, principalValue, yearsValue)).toHaveProperty("totalInterest");
    expect(InterestCalculator.calculateSimpleInterest(interestValue, principalValue, yearsValue)).toHaveProperty("simpleResults");
    expect(InterestCalculator.calculateSimpleInterest(interestValue, principalValue, yearsValue)).toBeEqualAsObject(expectedResults);
})